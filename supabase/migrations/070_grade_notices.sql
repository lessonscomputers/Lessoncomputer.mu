-- Per-grade notices: admin can configure a persistent notice (text + optional video URL)
-- that appears on the student dashboard. If both columns are null, no notice is shown.
ALTER TABLE grades
  ADD COLUMN IF NOT EXISTS notice_text text,
  ADD COLUMN IF NOT EXISTS notice_video_url text;
