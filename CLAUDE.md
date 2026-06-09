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
  recentWins:     [{ date, text }],            // newest first, keep last 5
  nextSteps:      [{ owner: 'jonathan', text }],
  feedbackEmail,                               // pre-fills mailto links
  nextMilestone, confidentiality               // summary fields
}
```

## Dashboard maintenance rule

**After completing meaningful work on any tracked project, update `data/projects.js`:**

1. Add new item(s) to `recentWins` (newest first, keep only last 5)
2. Update `nextSteps` — remove completed items, add new ones
3. Update `progress` (0–100) and `lastUpdated` (YYYY-MM-DD)
4. Commit and push on `main`

## Projects tracked

| ID | Repo |
|---|---|
| macfire-ai-scout | jonathanmccrimmond/macfire-ai-lead-scout |
| macfire-content-radar | jonathanmccrimmond/macfire-content-radar |
| macfire-website-redesign | (no separate repo — demos live in macfire-projects-dashboard/macfire-website-minimal/ and macfire-projects-dashboard/macfire-website-demo/) |

## Current handoff, 2026-06-09

The repo split has been restored:

- Do not re-nest this dashboard in `macfire-production`.
- `macfire-production` is for the production scout pipeline, Supabase, migrations, docs, and the website redesign demo that has no standalone upstream yet.
- `macfire-content-radar` is the active repo for publish pipeline, editorial interface, and calendar work.
- `macfire-ai-lead-scout` dashboard work is parked until the user asks to resume it.

Recent Content Radar branch to reflect in this dashboard after merge:

- Repo: `jonathanmccrimmond/macfire-content-radar`
- Branch: `codex/content-radar-publish-calendar`
- Commit: `5a36458 Add guarded publish pipeline and content calendar`
- Summary: guarded human-approved publish pipeline, editorial queue, calendar, and Claude-readable `AGENT_LOG.md`.

When updating `data/projects.js`, the Content Radar card should mention:

- guarded Stage 3 publish pipeline foundation
- human approval required via `approved_by`
- dry-run default and explicit live publishing switch
- editorial dashboard now includes review queue and calendar
