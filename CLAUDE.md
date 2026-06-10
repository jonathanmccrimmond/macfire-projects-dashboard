# MacFire Projects Dashboard — Repo Context

Static dashboard site on GitHub Pages. Shows status, progress, recent wins, and next steps for all MacFire AI projects. No backend — all data lives in `data/projects.js`.

## Stack
- Vanilla HTML/CSS/JS, no build step
- GitHub Pages hosting (served from repo root)
- Local dev: `python3 -m http.server 4173` from repo root

## Data file: `data/projects.js`

Each project object has:

```js
{
  id, name, category, status, progress,       // core
  owner, lastUpdated,                          // meta
  summary, functionLine, notes,                // descriptions
  repoUrl, outputLinks, deckLink,              // links
  recentWins:     [{ date, text }],            // newest first, keep last 5 for cards
  activityLog:    [{ date, text }],            // newest first, full drawer history
  nextSteps:      [{ owner: 'jonathan', text }],
  feedbackEmail,                               // pre-fills mailto links
  nextMilestone, confidentiality               // summary fields
}
```

## Writing style for dashboard copy (IMPORTANT)

The dashboard audience is Dougie and the MacFire team, who are not technical.
All text in `data/projects.js` must follow these rules:

Register: confident business English. Professional and composed, like a
pilot programme report, but never technical and never chatty.

1. Summaries: one or two short sentences, 20 words maximum
2. Wins and next steps: one line each, roughly 12 words
3. Outcome first, UK spelling, no em dashes
4. No tool, file, or service names
   (say "the production database", not "Supabase public.leads";
   say "the cloud", not "GitHub Actions workflow")
5. Avoid casual phrasing ("all by itself", "without a yes") as much as
   jargon. Test: would it fit in a client status report read aloud?
6. The technical version of every win and step belongs in the relevant
   repo's CLAUDE.md or PLAN.md, not here

## Slide decks — Google Drive is canonical (IMPORTANT)

The info decks linked from `deckLink` are stored on Google Drive and have been
edited there directly. The Drive copies are the source of truth.

- Do NOT regenerate decks from `build-deck.js` or any local copy without
  first downloading the current Drive version — local builders are stale
- When a deck is updated, upload the new version to Drive and keep the
  dashboard `deckLink` pointing at the live file
- Lead Scout deck Drive file ID: `1vZx67rB0DllHKJ5NHOMATL9y94_SGmV4`
  (folder ID `1duNasq2e0xBzJaeiH55wXxNfJIkEdXRn`)

## Dashboard maintenance rule

**After completing meaningful work on any tracked project, update `data/projects.js`:**

1. Add new item(s) to `activityLog` and `recentWins` (newest first; keep `recentWins` to the last 5)
2. Update `nextSteps` — remove completed items, add new ones
3. Update `progress` (0–100) and `lastUpdated` (YYYY-MM-DD)
4. Follow the writing style rules above
5. Commit and push on `main`

Also update the relevant repo's CLAUDE.md / PLAN.md with the technical detail
of what changed, so any agent picking up the work cold has the full picture.

## Projects tracked

| ID | Repo | Notes |
|---|---|---|
| macfire-ai-scout | jonathanmccrimmond/macfire-ai-lead-scout | Public repo holds the dashboard front-end only. The pipeline code (`scout/runner.py`, `supabase/schema.sql`, migration scripts) lives in Jonathan's local workspace and is not yet pushed — do not assume it exists in the public repo. |
| macfire-content-radar | jonathanmccrimmond/macfire-content-radar | Full pipeline in repo. See its PLAN.md for stages. |
| macfire-website-redesign | (no separate repo) | Demos live in macfire-projects-dashboard/macfire-website-minimal/ and macfire-projects-dashboard/macfire-website-demo/ |
