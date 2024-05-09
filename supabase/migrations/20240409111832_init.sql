CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE page_details (
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1mc(),
    likes INT NOT NULL DEFAULT 0,
    slug VARCHAR(1024) NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    view_count INT NOT NULL DEFAULT 0
);

CREATE INDEX idx_slug ON page_details(slug);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_updated_at
BEFORE UPDATE ON page_details
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

