# GEMINI.md — itl-bright-smile-and-skin-solutions

Project changelog and known-good state log for the Bright Smile & Skin Solutions client site.

---

## Quick Notes

| Date | Note |
|---|---|
| 2026-06-05 | Jacqie likes cappuccino, no sugar ☕ |
| 2026-06-23 | Client confirmed — proceeding with digital growth plan |
| 2026-06-23 | Booking system: Hey Goldie (book.heygoldie.com/brightsmileandskinsolutions) |
| 2026-06-23 | Address: Filtr Hair & Beauty, North Street, Newcastle under Lyme, ST5 1AZ |
| 2026-06-23 | Instagram: @no1brightsmileandskinsolutions (216 followers) |
| 2026-06-23 | Email: no1brightsmileandskinsolutions@gmail.com |
| 2026-06-24 | Onboarding questionnaire sent to Jacqie; chased next day |

---

## Changelog

### 2026-06-24 — BRD Refinement, Client Onboarding & Document Consolidation (Session 4)

**itl-bright-smile-and-skin-solutions commits:** `bc1c25e` (chore: session close — commit outstanding changes)

#### BRD Development
- **Rewrote technical BRD** in UK English; added buffer/wrap-up time to Tetris booking algorithm, Hey Goldie as current booking system, per-channel social media analytics, Google Analytics, AI search citation monitoring, Worzl SEO Data API (Data For SEO), and Worzl Legal.
- **Created client-facing BRD** — warm, jargon-free version for Jacqie covering the 3-phase plan, monitoring, and legal.
- **Authored:** Simon Carr, In The Look Software Company; Worzl.ai identified as trading name of ITL.

#### Client Onboarding
- **Created onboarding questionnaire** — friendly, conversational format covering brand identity, social media, target audience, booking, and content management preferences.
- **Consolidated** the client-facing BRD and onboarding questionnaire into a single document (Part 1: The Plan, Part 2: Questions).
- **Populated known data** from Instagram bio: address, phone, email, social handles, Hey Goldie booking URL.
- **Sent to client** 2026-06-23; chased 2026-06-24 — awaiting responses.

#### Presentation Updates
- **Updated presentation.html** with new website messaging (already developed) and gradual transition from external booking system.
- **Committed** previously untracked `presentation.html`.

#### Technical Decisions
- **Social media posting:** Option B — Approval Dashboard (proven with PromiseMoney).
- **Website content management:** Options B+C hybrid — admin panel + Worzl agent, shared JSON data layer.
- **Worzl Legal:** Will draft ToS, Cancellation Policy, Privacy Policy, Cookie Policy.

#### Infrastructure Investigation
- **Cloud Run deployment:** `bright-smile-prod` service not found — site needs fresh deployment. GCP project is `itl-software-company-web`.
- **Eccleshall → Newcastle under Lyme** correction identified across all HTML pages — not yet applied.

#### Known Good State

| Item | Status |
|---|---|
| Technical BRD | ✅ Complete (artifact: BRD.md) |
| Client-facing document | ✅ Complete (artifact: client_facing_brd.md) |
| Client onboarding | ⏳ Sent — awaiting Jacqie's responses |
| Presentation (presentation.html) | ✅ Committed (`bc1c25e`) |
| Location correction (Eccleshall → Newcastle under Lyme) | ❌ Not yet applied to website HTML |
| Cloud Run deployment | ❌ No live URL — needs fresh deploy |
| Site codebase | ✅ Clean (last commit: `bc1c25e`) |

---

### 2026-06-03 — Digital Growth Pitch & Assets (Session 3)

**itl-bright-smile-and-skin-solutions commits:** `[NOT COMMITTED]` (untracked presentation.html)

#### Pitch Development
- **Created client proposal** artifact mapping out a custom AI appointment system and local SEO strategy.
- **Built HTML presentation** (`presentation.html`) with a Google-inspired color scheme and a programmatic SVG Worzl logo.

#### Presentation Assets
- **Generated OpenArt scene description** for "Jackie", a Pixar-style friendly receptionist.
- **Drafted video/audio script** integrating Jackie's character into the pitch.

#### Known Good State

| Item | Status |
|---|---|
| Site deployment (Cloud Run) | ✅ Working (last commit: `40536d9`) |

---

### 2026-06-03 — Session Close and Next Steps (Session 2)

**itl-bright-smile-and-skin-solutions commits:** `[NOT COMMITTED]` (untracked presentation.html)

#### Planning for Next Session
- **Noted outstanding tasks** for the next session including Pitch review, BRD development, and exploring agent deployment.

#### Known Good State

| Item | Status |
|---|---|
| Site deployment (Cloud Run) | ✅ Working (last commit: `40536d9`) |

---

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
