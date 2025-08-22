-- Add media fields to articles table
ALTER TABLE articles ADD COLUMN featured_image_url TEXT;
ALTER TABLE articles ADD COLUMN youtube_embed_id TEXT;