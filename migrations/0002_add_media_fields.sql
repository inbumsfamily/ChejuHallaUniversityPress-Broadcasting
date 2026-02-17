-- compatibility migration: keep as no-op for older environments where media columns already exist in 0001
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);
CREATE INDEX IF NOT EXISTS idx_articles_youtube_embed_id ON articles(youtube_embed_id);
