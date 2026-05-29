# MacFire Projects Dashboard

Standalone dashboard for MacFire projects.

## Purpose

Show what each project does, current status, where to view output, and where to open the deck that explains project function.

## Structure

- `index.html`: UI and rendering logic.
- `data/projects.js`: project registry data source.

## Run locally

Open `index.html` directly, or run a local server:

```bash
cd /Users/jonathanmccrimmond/Documents/MacFire/macfire-projects-dashboard
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Update workflow

1. Edit `data/projects.js`.
2. Refresh the browser.
3. Add deck and output URLs as they become available.

## GitHub Pages

1. Push this repo to GitHub.
2. In repository settings, enable Pages from `main` branch and root.
3. The dashboard will publish as a static site.

## Notes

- This dashboard is portfolio visibility only and should avoid exposing confidential lead-level data.
- Local output links can remain machine-specific until public URLs are ready.

