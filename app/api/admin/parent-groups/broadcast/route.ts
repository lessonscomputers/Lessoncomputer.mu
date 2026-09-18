import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin-auth'
import { sendWhatsAppTemplate, isWhatsAppConfigured } from '@/lib/whatsapp'

export const maxDuration = 60

// POST /api/admin/parent-groups/broadcast  { cohortId, message1, message2, message3, date }
// Admin-only. Sends the parent_message template (4 variables) privately to every parent in
// the cohort. Returns per-recipient success/failure counts.
export async function POST(req: NextRequest) {
  const auth = await requireAdmin()
  if ('error' in auth) return NextResponse.json({ error: auth.error }, { status: auth.status })
  const { admin } = auth

  const { cohortId, message1, message2, message3, date } =
    await req.json() as { cohortId?: string; message1?: string; message2?: string; message3?: string; date?: string }
  if (!cohortId) return NextResponse.json({ error: 'Missing cohort.' }, { status: 400 })
  if (!message1?.trim() && !message2?.trim() && !message3?.trim()) {
    return NextResponse.json({ error: 'At least one message field is required.' }, { status: 400 })
  }
  if (!isWhatsAppConfigured()) {
    return NextResponse.json({ error: 'WhatsApp is not configured on the server.' }, { status: 503 })
  }

  const { data: members } = await (admin as any)
    .from('parent_group_members')
    .select('parent_phone')
    .eq('parent_group_id', cohortId)

  const phones = Array.from(new Set(
    ((members ?? []) as any[]).map((m) => (m.parent_phone ?? '').trim()).filter((p: string) => p.length >= 7)
  ))
  if (phones.length === 0) {
    return NextResponse.json({ error: 'This cohort has no parents with a phone number yet.' }, { status: 400 })
  }

  const variables = [message1 ?? '', message2 ?? '', message3 ?? '', date ?? '']
  const results = await Promise.allSettled(phones.map((p) => sendWhatsAppTemplate(p, 'parent_message', 'en', variables)))
  const sent = results.filter((r) => r.status === 'fulfilled' && (r.value as any).ok).length
  const failed = phones.length - sent

  return NextResponse.json({ ok: true, total: phones.length, sent, failed })
}
