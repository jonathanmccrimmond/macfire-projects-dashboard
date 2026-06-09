# MacFire Projects Dashboard Agent Log

## 2026-06-09 - Claude handoff note

### Current Repo Purpose

This repo is the standalone portfolio/status dashboard for MacFire projects. It is a static GitHub Pages site.

Primary data file:

- `data/projects.js`

### Repo Split

This repo should stay separate from `macfire-production`.

Current MacFire repos:

- `jonathanmccrimmond/macfire-production` - production lead pipeline and Supabase/runbook material
- `jonathanmccrimmond/macfire-content-radar` - social content drafting, editorial dashboard, calendar, and publish pipeline
- `jonathanmccrimmond/macfire-ai-lead-scout` - static lead dashboard
- `jonathanmccrimmond/macfire-projects-dashboard` - this project overview dashboard

### Current User Direction

The user wants Claude-readable markdown across the MacFire project repos.

AI Scout and Content Radar are active. Website work is paused. Current active scope:

- AI Scout: POC parity, including Facebook, X, LinkedIn, and Instagram enrichment.
- Content Radar: publish pipeline, improved editorial dashboard/interface, calendar, and human approval before auto-posting.

### Follow-Up

After the Content Radar branch is merged, update `data/projects.js` so the Content Radar card reflects:

- guarded Stage 3 publish pipeline foundation
- editorial review queue
- calendar
- human-in-the-loop approval gate
- X preview remains available, but X live publishing is not implemented yet

## 2026-06-09 - Dashboard state refresh

- Updated the AI Scout card to reflect the parity push: social enrichment now includes Facebook, X, LinkedIn, and Instagram as required sources.
- Updated the Content Radar card to reflect the guarded publish pipeline, editorial review queue, approve/decline/schedule controls, and calendar.
- Marked the website redesign card as paused while AI Scout and Content Radar are the active priorities.
