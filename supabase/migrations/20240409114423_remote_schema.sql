alter table "public"."page_details" disable row level security;

CREATE UNIQUE INDEX page_details_slug_key ON public.page_details USING btree (slug);

alter table "public"."page_details" add constraint "page_details_slug_key" UNIQUE using index "page_details_slug_key";


