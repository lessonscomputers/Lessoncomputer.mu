import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin-auth'
import { ensureCohort } from '@/lib/parent-groups'

// POST /api/admin/parent-groups/sync  { gradeId, academicYear }
// Admin-only. Adds every active student of the grade who has a parent phone on file into
// the (grade, year) cohort. Backfills cohorts for students who provided a parent number
// before the feature existed, or whose number was set by an admin. Idempotent.
export async function POST(req: NextRequest) {
  const auth = await requireAdmin()
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status })
  const { admin } = auth

  const { gradeId, academicYear } = await req.json() as { gradeId?: string; academicYear?: number }
  const year = Number(academicYear)
  if (!gradeId || !Number.isInteger(year)) {
    return NextResponse.json({ error: 'A grade and academic year are required.' }, { status: 400 })
  }

  const cohort = await ensureCohort(admin, gradeId, year)
  if (!cohort) return NextResponse.json({ error: 'Could not create the cohort.' }, { status: 500 })

  // Active students of this grade who have a parent phone on file.
  // Two sources:
  // 1. Students whose profile grade_id matches (primary grade).
  // 2. Students with an active live_month subscription for a package in this grade
  //    (a student can subscribe to multiple grades even if their profile shows only one).
  const { data: profileStudents } = await (admin as any)
    .from('profiles')
    .select('id, parent_phone')
    .eq('grade_id', gradeId)
    .eq('role', 'student')
    .neq('is_active', false)
    .not('parent_phone', 'is', null)

  const { data: gradePkgs } = await (admin as any)
    .from('subscription_packages')
    .select('id')
    .eq('grade_id', gradeId)
    .eq('package_type', 'live_month')
  const pkgIds = ((gradePkgs ?? []) as any[]).map((p) => p.id)

  let subStudents: Array<{ id: string; parent_phone: string }> = []
  if (pkgIds.length > 0) {
    const { data: subs } = await (admin as any)
      .from('student_subscriptions')
      .select('student_id, profile:profiles!student_id(id, parent_phone, role, is_active)')
      .eq('status', 'active')
      .in('package_id', pkgIds)
    subStudents = ((subs ?? []) as any[])
      .filter((s) => s.profile?.role === 'student' && s.profile?.is_active !== false && (s.profile?.parent_phone ?? '').trim().length >= 7)
      .map((s) => ({ id: s.student_id as string, parent_phone: (s.profile.parent_phone as string).trim() }))
  }

  // Merge both sources, deduplicating by student_id.
  const studentMap = new Map<string, string>()
  for (const s of [...((profileStudents ?? []) as any[]), ...subStudents]) {
    if (s.id && (s.parent_phone ?? '').trim().length >= 7) {
      studentMap.set(s.id as string, (s.parent_phone as string).trim())
    }
  }

  const rows = Array.from(studentMap.entries())
    .map(([student_id, parent_phone]) => ({ parent_group_id: cohort.id, student_id, parent_phone }))

  if (rows.length === 0) {
    return NextResponse.json({ ok: true, added: 0, message: 'No students with a parent number in this grade yet.' })
  }

  const { error } = await (admin as any)
    .from('parent_group_members')
    .upsert(rows, { onConflict: 'parent_group_id,student_id' })
  if (error) {
    console.error('[parent-groups/sync] upsert failed', error)
    return NextResponse.json({ error: 'Could not sync students.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true, added: rows.length })
}
