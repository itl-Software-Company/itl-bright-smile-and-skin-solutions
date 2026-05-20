# GEMINI.md — itl-bright-smile-and-skin-solutions

Project changelog and known-good state log for the Bright Smile & Skin Solutions client site.

---

## Changelog

### 2026-05-20 — Deprecation Audit (Session 1)

**Commits:** `74dc1f1` (ci: retry deploy - billing resolved) — no new commits this session

#### Vertex AI Deprecation Audit
- **Assessed** the codebase for usage of `vertexai.preview.generative_models` (removal deadline: June 2026)
- **Result:** Zero references found — project is **not impacted** by this deprecation

#### Known Good State

| Item | Status |
|---|---|
| `vertexai.preview.generative_models` usage | ✅ None found — unaffected |
| Site deployment (Cloud Run) | ✅ Working (last commit: `74dc1f1`) |

---
