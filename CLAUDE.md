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
