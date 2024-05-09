CREATE OR REPLACE FUNCTION upsert_page_view(page_slug VARCHAR(1024))
RETURNS INTEGER AS $$
DECLARE
    new_view_count INTEGER;
BEGIN
    -- Increment the view_count for the specified page based on its slug
    UPDATE page_details
    SET view_count = view_count + 1
    WHERE slug = page_slug
    RETURNING view_count INTO new_view_count;
    
    -- Return the updated view_count
    RETURN new_view_count;
END;
$$ LANGUAGE plpgsql;
