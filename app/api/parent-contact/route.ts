import { NextRequest, NextResponse } from 'next/server'
import { createClient, createServiceRoleClient } from '@/lib/supabase/server'
import { addParentToCurrentCohort } from '@/lib/parent-groups'
import { sendWhatsAppTemplate } from '@/lib/whatsapp'

// POST /api/parent-contact  { phone }
// A student provides their parent's number (mandatory to join live classes). We save it,
// enrol the parent into their grade's CURRENT-year WhatsApp cohort, and — if that cohort
// has a real WhatsApp group invite link — send it so the parent can self-join (the WhatsApp
// API cannot add them automatically). Cooldown prevents send-spam.
export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { phone } = await req.json() as { phone?: string }
  // Full international number, digits only (country code + local number).
  const trimmedPhone = (phone ?? '').replace(/[^\d]/g, '')
  if (trimmedPhone.length < 8) {
    return NextResponse.json({ error: 'A valid phone number with country code is required' }, { status: 400 })
  }

  // The student may only set their OWN parent phone (RLS also enforces this).
  const { error: profileError } = await (supabase as any)
    .from('profiles')
    .update({ parent_phone: trimmedPhone })
    .eq('id', user.id)
  if (profileError) {
    console.error('[parent-contact] save failed', profileError)
    return NextResponse.json({ error: 'Could not save the number. Please try again.' }, { status: 500 })
  }

  const admin = createServiceRoleClient()

  // Which grade does this student belong to? (Needed to pick the right cohort.)
  const { data: prof } = await (admin as any)
    .from('profiles')
    .select('grade_id, parent_whatsapp_sent_at, full_name, grade:grades!grade_id(name)')
    .eq('id', user.id)
    .maybeSingle()
  const gradeId = (prof as any)?.grade_id as string | null
  const gradeName = ((prof as any)?.grade as { name: string } | null)?.name ?? ''

  let groupUrl: string | null = null
  let cohortId: string | null = null
  if (gradeId) {
    const res = await addParentToCurrentCohort(admin, user.id, gradeId, trimmedPhone)
    groupUrl = res?.groupUrl ?? null
    cohortId = res?.cohortId ?? null
  }

  // Also add to cohorts for every grade the student has an active live subscription —
  // a student can subscribe to multiple grades, but profiles.grade_id is only one of them.
  const { data: activeSubs } = await (admin as any)
    .from('student_subscriptions')
    .select('package:subscription_packages!package_id(grade_id, package_type)')
    .eq('student_id', user.id)
    .eq('status', 'active')
  const extraGradeIds = [...new Set(
    ((activeSubs ?? []) as any[])
      .filter((s: any) => s.package?.package_type === 'live_month' && s.package?.grade_id && s.package.grade_id !== gradeId)
      .map((s: any) => s.package.grade_id as string)
  )]
  for (const gId of extraGradeIds) {
    await addParentToCurrentCohort(admin, user.id, gId, trimmedPhone)
  }

  // Send invitation message — but at most once (don't re-spam on every edit).
  const alreadySent = !!(prof as any)?.parent_whatsapp_sent_at
  if (!alreadySent) {
    const studentName = (prof as any)?.full_name ?? 'your child'

    // parent_invitation template: {{1}} student_name, {{2}} grade_classes, {{3}} whats_app_url
    const welcome = await sendWhatsAppTemplate(
      trimmedPhone,
      'parent_invitation',
      'en',
      [studentName, gradeName, groupUrl ?? '']
    )

    if (welcome.ok) {
      const now = new Date().toISOString()
      await (admin as any).from('profiles').update({ parent_whatsapp_sent_at: now }).eq('id', user.id)
      if (cohortId) {
        await (admin as any)
          .from('parent_group_members')
          .update({ invite_sent_at: now })
          .eq('parent_group_id', cohortId)
          .eq('student_id', user.id)
      }
    }
  }

  return NextResponse.json({ ok: true })
}
