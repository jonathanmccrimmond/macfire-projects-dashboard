# MacFire Projects — Session Context

Read this file first. It contains everything needed to continue work across sessions.

---

## What this repo is

`macfire-projects-dashboard` is a **static project-status dashboard** showing MacFire's three active projects to the client. It is NOT the lead pipeline and NOT the lead dashboard — those are separate.

Live at: `https://jonathanmccrimmond.github.io/macfire-projects-dashboard/`

To update project status, edit `data/projects.js` only. The HTML reads from it.

---

## The client

**MacFire Ltd** — independent fire protection company, Barrhead (East Renfrewshire), central-belt Scotland.

- **Dougie Macgregor** (64, owner/MD): buyer and champion. Runs growth, invoicing, decisions. Not deeply technical. Needs output delivered simply — email or a clean dashboard he can open.
- **Iain** (59, co-owner): does his own customer round. Has no interest in systems or change. Hard constraint: nothing can require Iain to change his workflow.
- Accreditations: BAFE (most important), Safe Contractor, BS 5306 Part 3, ISO 9001:2015, 75 years combined experience
- Dougie's stated #1 goal: more customers. Business is healthy but new leads come almost entirely via word of mouth (~1–2/week).

Services: fire extinguisher supply/install/service, fire alarms, fire risk assessments (£400–£1,100+VAT by Callum Orr), fire safety training (£550/£700+VAT by Kenny Hankinson, up to 12 people at client premises).

---

## Three projects in scope

### 1. MacFire AI Lead Scout — PRIMARY, build first

A weekly automated pipeline finding commercial businesses that will need fire protection before competitors reach them.

**The existing PoC** (`jonathanmccrimmond/macfire-scout`, private, Python v8):
- Live on macOS launchd, runs daily from Jonathan's local machine
- Companies House pipeline working: 60+ SIC codes, Scottish filtering, scoring, director enrichment, Google Places verification, Notion output
- Signal abstraction sprint was in progress when this session ended
- Treat as reference implementation only — not the deliverable

**The robust rebuild** (to be built in a new private repo — `macfire-lead-scout`):

Architecture decisions (all confirmed, no need to revisit):

| Decision | Choice | Reason |
|---|---|---|
| Planning data source | Idox Public Access scraping | Spatial Hub Premium licence is "not commercially available"; open tier likely field-poor. Decision locked. |
| Scheduler | GitHub Actions weekly cron | Replaces macOS launchd; runs in cloud regardless of local machine |
| Storage | Supabase | Replaces Notion + local JSON; persistent, queryable, free tier sufficient |
| Pipeline language | TypeScript | Consistent with rest of stack |
| Dashboard | Next.js on Vercel | Reads from Supabase; separate from project dashboard |
| LLM | Claude Haiku | Document parsing and fire-risk classification; pennies per week |
| Email | Resend free tier | Weekly digest of top leads to Dougie |
| Companies House | Free API with key | New incorporations filtered by SIC code + Scottish postcodes |
| Spatial Hub | Do NOT use | Licensing issues confirmed |

**Two separate dashboards** (important — user confirmed):
- **Project dashboard** = this repo (`macfire-projects-dashboard`) — shows project status to Dougie
- **Lead dashboard** = in the new `macfire-lead-scout` repo — shows scored weekly leads

**Central Scotland councils (10) for Idox scraping:**
1. East Renfrewshire (MacFire home base — first priority)
2. Glasgow City
3. Renfrewshire
4. South Lanarkshire
5. North Lanarkshire
6. East Dunbartonshire
7. West Dunbartonshire
8. Stirling
9. Falkirk
10. Clackmannanshire

**Idox Public Access URL pattern:**
`https://publicaccess.[council-domain]/online-applications/search.do?action=weeklyList`
Glasgow specifically publishes weekly PDFs AND has an Idox HTML portal.

**Signal abstraction design (from PoC):**
- Abstract `Signal` base class with `SignalResult` (score + flags + confidence)
- `CompaniesHouseSignal` — new incorporations in target SIC codes
- `PlanningApplicationsSignal` — Idox weekly list, fire-risk classification on proposal text
- Orchestrator composes signals, handles cross-signal correlation (same entity in both = priority boost)

**Fire-risk classification approach:**
- Application type filter: "change of use" is a standard Idox application type
- Regex/Claude Haiku pass on proposal text
- Top targets: anything → Class 3 food & drink, assembly/leisure, new commercial fit-outs, extensions
- Note: post-2023 Use Classes reform means Class 1A → Class 3 can happen WITHOUT planning permission — building warrants catch these (Phase 2)

**Supabase schema (to design):**
- `pipeline_runs` — audit log per run
- `raw_applications` — unfiltered planning records
- `leads` — scored, filtered, enriched leads
- `lead_status` — Dougie's actions (contacted/won/dead)

**Immediate first task:** Build the Glasgow City Council Idox scraper:
- Fetch weekly list HTML from Glasgow's Idox portal
- Parse: reference, address, postcode, proposal, app_type, validated_date
- Run through fire-risk classifier
- Store in Supabase `raw_applications`

**To start building:** The new `macfire-lead-scout` repo must be created (private) on GitHub and added to the Claude Code session scope. Cannot build pipeline code in `macfire-projects-dashboard`.

---

### 2. MacFire Website Redesign

Demo is live: `https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-demo/`

Status: Phase 1 audit done, Phase 2 direction set, Phase 3 demo built (70% complete).

Audit findings: SSL missing on live site, poor SEO (can't be found as "fire extinguisher Barrhead"), dated design (last updated ~2016), Facebook quiet since 2021, inconsistent branding.

Next: client review of demo, real photography, contact form backend, coordinate SSL fix with Fasthost (current host). Domain stays macfireltd.co.uk, same name.

Deck: `https://docs.google.com/presentation/d/1BupMyostovFpW67MBwGE-bibOKTH6qY7/edit`

---

### 3. MacFire Content Radar

Auto-drafts social posts when fire regulation updates drop. Human-in-the-loop — nothing publishes without Dougie's approval.

Status: markdown workflow done, preview page live, model integration is next step (46% complete).

Preview: `https://jonathanmccrimmond.github.io/macfire-content-radar/preview/`

Repo: `jonathanmccrimmond/macfire-content-radar`

---

## Full tech stack

- TypeScript — all new pipeline code
- Next.js + Tailwind — dashboards
- Vercel — hosting (free tier)
- Supabase — all data storage (free tier)
- GitHub Actions — scheduling (weekly cron)
- Claude API (Haiku) — document parsing, classification, content drafting
- Resend — transactional email (free tier, 100/day)
- Companies House API — free with API key
- No Spatial Hub, no Apify, no paid planning APIs

---

## Key constraints

- Everything must be low/no cost to run
- Must run in cloud — not dependent on Jonathan's local machine
- Iain (co-owner) cannot be asked to change anything about how he works
- Lead-level data is confidential — never commit leads, raw scrape output, API keys, or .env files
- MacFire is a no-charge learning/portfolio project — template designed to replicate for other regulated industries (air-con, extraction, etc.) by swapping inputs

---

## Session history (June 5 2026)

What happened in this session:
- Read all discovery documents: PROJECT-BRIEF.md, meeting notes, client email/plan, outreach email drafts
- Received Dougie's reply confirming FRA and training service details
- Conducted planning data spike — confirmed Idox scraping approach, ruled out Spatial Hub
- Read PoC README, planning research doc, and Codex build prompt from macfire-scout repo
- Agreed architecture for robust rebuild
- Upgraded this project dashboard (single column, done/next steps, clean card design)
- Created this CLAUDE.md

What was NOT resolved:
- `macfire-lead-scout` repo not yet created (user was on tablet)
- Brief mentioned "five training courses" but Dougie's email describes two — worth confirming
- No code written for the pipeline yet

---

## Repo governance

`data/projects.js` is the single source of truth for project status. Update it when milestones change.

`CLAUDE.md` (this file) is the session context. Update it at the end of sessions where significant decisions are made.
