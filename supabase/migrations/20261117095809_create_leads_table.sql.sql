/*
# Create leads table for landing page forms

1. New Tables
- `leads`: stores submissions from the "Request a Call" modal, the mid-page CTA band form, and the footer "Enquire Now" mini form.
  - `id` (uuid, primary key, auto-generated)
  - `name` (text) — visitor's name (may be empty for footer mini form which only collects email/phone)
  - `email` (text, not null) — visitor's email
  - `phone` (text) — visitor's phone number (may be empty for footer mini form)
  - `source` (text, not null) — which form submitted the lead: 'modal', 'mid_cta', or 'footer'
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- Grant INSERT to `anon` and `authenticated` only — visitors submit leads but cannot read anyone's data.
- INSERT-only policy for `anon, authenticated`: leads are write-only from the public site.
- No SELECT grant: lead data stays private.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  source text NOT NULL DEFAULT 'modal',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, phone, source) ON leads TO anon, authenticated;

DROP POLICY IF EXISTS "public can submit leads" ON leads;

CREATE POLICY "public can submit leads"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);
