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

### 2026-08-17 / 2026-08-18 — Patient Hub, Services CMS, Mobile Overhaul & Launch Delivery (Session 8)

**itl-bright-smile-and-skin-solutions commits:** `91131db`, `9ad9627`, `9b140e8`, `1a99c6b`, `245732a`, `fdaf5ac`, `8191024`, `2d5bf31`

#### Mobile Viewport & Responsiveness Overhaul
- **Mobile Touch Sub-Navigation (`portal/styles.css`):** Replaced disappearing header links on mobile screens with a dedicated horizontal-scrolling pill bar across all portal pages (`📅 Calendar`, `💎 CMS`, `✨ Social`, `📋 Proposal`, `🌐 Live Site`).
- **CMS Item Card Stacking (`portal/cms.html`):** Overhauled 22 service rows and blog post rows to stack into touch-friendly cards on mobile with 44px tap targets for Edit/Delete buttons.
- **Admin Calendar & Hours (`portal/bookings.html`):** Converted 2-column desktop grid to responsive 1-column layout and created stacked 7-day operating hours cards with touch-friendly time pickers.
- **Public Booking Engine (`booking.html`):** Configured 3-column responsive timeslot grid, fixed missing `<body>` tag, and prevented iOS auto-zoom on inputs (`16px` font-size).
- **Patient Appointment Hub (`my-appointment.html`):** Mobile-optimized tab navigation with smooth horizontal momentum scrolling, full-width declaration checklists, and responsive photo preview box.

#### 4-Tier Portal Architecture Harmonization
- **Harmonized 4 Dedicated Portals:** Formally restructured the entire application into 4 distinct portals: (1) Public Clinic Website, (2) Patient Appointment Hub, (3) Clinic Admin Manager, and (4) ITL Proposal & Launch Portal.
- **Unified Public Navigation:** Restored full 7-item navigation (`Home`, `Services`, `Blog`, `About`, `Contact`, `My Appointment`, `Book Online`) with responsive mobile toggle across `booking.html`, `my-appointment.html`, and all public pages.
- **Clinic Admin Rebranding:** Replaced confusing "Client Portal" label in `portal/cms.html`, `portal/bookings.html`, and `portal/social.html` with authoritative **"Clinic Admin"** branding and direct navigation to calendar, treatments, and social tools.
- **Proposal Portal Overhaul (`portal/index.html`):** Updated Launch Readiness Tracker to reflect live build status and added interactive cards linking to all 8 clinic tools.

#### Patient & Client Hub (`my-appointment.html`)
- **Zero-Password Email Sign-In:** Built self-service patient portal allowing clients to securely access their appointment details via their booking email.
- **Treatment-Specific Pre-Care & Aftercare:** Interactive preparation checklists and post-treatment recovery protocols dynamically fetched by service (e.g. 48h White Diet for whitening, 2-3L lymphatic hydration for fat dissolving).
- **Digital Health Screening:** Built pre-treatment medical declaration form with digital signature saving directly to Firestore.
- **Photo & Concern Upload:** Consultation feature allowing clients to share smile/skin photos and describe treatment goals.

#### Services & Pricing CMS (`portal/cms.html`)
- **Instant 0ms Rendering:** Pre-rendered all 22 default services and 4 core website blog posts synchronously at parse time, eliminating loading delays.
- **Dual Sync Engine:** Added one-click **"Sync All 22 Menu Services"** and **"Sync 4 Website Blog Articles"** controls to sync Firestore collections in parallel.
- **Resilient Firestore In-Memory Sorting:** Replaced index-dependent Firestore queries with safe in-memory sorting across `portal/cms.html` and `blog.html`.

#### Known Good State

| Item | Status |
|---|---|
| Public Website & Visibility | ✅ Live & verified |
| AI Scheduling Engine (`booking.html`) | ✅ Live & verified (Mobile optimized) |
| Patient Appointment Hub (`my-appointment.html`) | ✅ Live & verified (Mobile optimized) |
| Services & Pricing Catalog (`portal/cms.html`) | ✅ Live (Instant 0ms render & sync, Mobile optimized) |
| Admin Calendar & Availability (`portal/bookings.html`) | ✅ Live & verified (Mobile optimized) |
| ITL Launch Proposal Portal (`portal/index.html`) | ✅ Live & updated |
| Firestore Rules & Database Sync (`itl-bright-smile-web`) | ✅ Deployed & verified |

---

### 2026-08-12 — Implementation Plan & Social Media Access Guide (Session 7)

**itl-bright-smile-and-skin-solutions commits:** `[NOT COMMITTED]` (no code changes)

#### Planning & Guides
- **Created Implementation Plan:** Drafted the next steps for Phase 1 of the digital growth plan (Social Media Approval Dashboard, CMS, and Client Onboarding Processing).
- **Created Social Media Guide:** Produced a step-by-step guide for Jacqie to grant `simon@worzl.ai` access to the business's Instagram and Facebook pages via Meta Business Suite.

#### Known Good State

| Item | Status |
|---|---|
| Site deployment (Cloud Run Staging) | ✅ Live |
| Smoke Tests | ✅ Passing |
| Client Portal Consistency | ✅ Complete |
| Social Media Access | ❌ Blocked (Waiting for client to grant access) |

---

### 2026-07-26 — Portal Polish & Cloud Run Deployment (Session 6)

**itl-bright-smile-and-skin-solutions commits:** `11d3d09` (chore: session close — commit outstanding changes)

#### Client Demo Portal Polish
- **Restyled the demo portal** to be visually consistent with the main site (light theme, teal `#13ecc8` accent, Manrope font, BEM naming) rather than the separate dark theme.
- **Updated `DESIGN.md`** to reflect the single consistent design language.

#### Infrastructure & Deployment
- **Added `portal/` and `docs/`** to the `Dockerfile` so they are served alongside the main site.
- **Triggered GitHub Action** by pushing to the `staging` branch, deploying the updated site to Cloud Run.
- **Fixed `.agent/smoke-test.sh`** to properly respect the disabled Cloud AI Companion API flag in `project.json` and gracefully skip the billing check.

#### Known Good State

| Item | Status |
|---|---|
| Site deployment (Cloud Run Staging) | ✅ Live |
| Smoke Tests | ✅ Passing |
| Client Portal Consistency | ✅ Complete |

---

### 2026-07-02 — Client Portal & Governance Document Delivery (Session 5)

**itl-bright-smile-and-skin-solutions commits:** `d21a6fc` (chore: session close — commit outstanding changes)

#### Client Demo Portal
- **Designed and implemented** the client demo portal styled with "Bright Smile Glow v1" (matching the light, teal, Manrope design system of the main site).
- **Created landing page** (`portal/index.html`) featuring a four-step launch readiness tracker, contact panel, and external resource cards (Booking, Instagram, Preview).
- **Created document viewer** (`portal/documents.html`) displaying 8 project cards with plain-English summaries, current statuses, and an inline document viewer modal.
- **Created DESIGN.md** as a developer/agent design system reference.

#### Document Generation
- **Successfully generated 6 legal & governance documents** adapted from Loud Hall Music templates, custom-tailored for the beauty and aesthetics industry.
- **Documents created**: NDA (`docs/nda-itl-bright-smile.md`), Service Agreement / Contract (`docs/contract-itl-bright-smile.md`), Data Processing Agreement (`docs/dpa-itl-bright-smile.md`), Privacy Policy (`docs/privacy-policy-bright-smile.md`), Acceptable Use Policy (`docs/aup-bright-smile.md`), and Data Retention Schedule (`docs/data-retention-schedule-bright-smile.md`).
- **All templates adapted**: Children's data references (KCSiE, Ofsted) removed; adult-only clauses, beauty treatment records (with 7-year retention), before/after photos, and specific sub-processors (Hey Goldie, Google Analytics) added.

#### Infrastructure & Deployment
- **Updated Dockerfile** to include `portal/` and `docs/` in static file serving.
- **Successfully deployed** `bright-smile-prod` service to Google Cloud Run in `europe-west2` (London) under `itl-software-company-web` GCP project.
- **Validated deployment** with automated smoke tests.

#### Known Good State

| Item | Status |
|---|---|
| Site deployment (Cloud Run) | ✅ Live ([URL](https://bright-smile-prod-789212110055.europe-west2.run.app)) |
| Client Portal | ✅ Live ([URL](https://bright-smile-prod-789212110055.europe-west2.run.app/portal/)) |
| Governance Documents | ✅ Complete (6/6 in `/docs/`) |
| Location corrections | ✅ Complete (Newcastle under Lyme purges) |
| Codebase state | ✅ Clean & committed (`d21a6fc`) |

---

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
