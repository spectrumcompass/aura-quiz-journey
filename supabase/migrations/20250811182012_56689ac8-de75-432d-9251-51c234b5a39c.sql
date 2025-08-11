-- Add research consent fields to assessment_results
ALTER TABLE public.assessment_results
  ADD COLUMN IF NOT EXISTS research_consent boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS consent_at timestamp with time zone;

-- Helpful index for querying only consented results
CREATE INDEX IF NOT EXISTS idx_assessment_results_research_consent
ON public.assessment_results (research_consent)
WHERE research_consent = true;