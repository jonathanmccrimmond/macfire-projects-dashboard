window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Intelligence",
    status: "active",
    progress: 40,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-05",
    summary: "Automated weekly pipeline that finds commercial businesses likely to need fire protection — before competitors reach them.",
    functionLine: "Pull planning applications + Companies House incorporations → filter commercial and fire-relevant → score → deliver 5–10 quality leads per week.",
    completedSteps: [
      "PoC v8 live: Companies House daily pipeline across 60+ fire-relevant SIC codes",
      "Scottish filtering, fire-safety scoring, director enrichment, Google Places address verification",
      "High/Medium/Low lead output to Notion Lead Pipeline with local JSON archive",
      "Planning data spike: Idox Public Access confirmed as scraping approach across 10 central Scotland councils",
      "Signal abstraction architecture designed — pluggable scorer interface for multiple data sources",
      "Council scope defined: East Renfrewshire, Glasgow, Renfrewshire, South/North Lanarkshire, East/West Dunbartonshire, Stirling, Falkirk, Clackmannanshire"
    ],
    upcomingSteps: [
      "Glasgow City Council Idox scraper — first council end-to-end",
      "Fire-risk classifier on planning proposal text (regex + Claude Haiku)",
      "Move to GitHub Actions cron — cloud-hosted, runs without local machine",
      "Move to Supabase — replaces Notion and local archive",
      "Expand Idox scraper to all 10 central Scotland councils",
      "Next.js lead dashboard + weekly email digest delivered to Dougie"
    ],
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-scout",
    outputLinks: [
      { label: "Live Lead Dashboard", url: "https://macfire-dashboard.onrender.com/" }
    ],
    deckLink: {
      label: "Information Deck",
      url: "https://docs.google.com/presentation/d/1tVF3yontFFgixup52AuVFMlHLg2nVKHe/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    }
  },
  {
    id: "macfire-website-redesign",
    name: "MacFire Website Redesign",
    category: "Brand & Web",
    status: "pilot",
    progress: 70,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-05-30",
    summary: "A credibility-led, mobile-first replacement for macfireltd.co.uk — fixing the SSL warning, improving search visibility, and modernising the design.",
    functionLine: "Fix SSL, SEO structure, and branding so leads from the Scout land on a site that builds trust rather than undermining it.",
    completedSteps: [
      "Full audit complete: SSL missing, poor SEO structure, Google cannot crawl for location searches, dated design",
      "Inconsistent branding across LinkedIn, Facebook, and X identified and documented",
      "Design direction set: bold, conversion-led, mobile-first, BAFE and accreditations front and centre",
      "Demo site built: schema.org LocalBusiness markup, responsive layout, contact form stub, accreditation section"
    ],
    upcomingSteps: [
      "Client review of design direction and demo site",
      "Replace placeholder imagery with real MacFire photography",
      "Wire up contact form with email delivery backend",
      "Coordinate SSL certificate fix and live domain swap with Fasthost"
    ],
    repoUrl: "",
    outputLinks: [
      { label: "Live Demo", url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-demo/" }
    ],
    deckLink: {
      label: "Audit & Handoff Deck",
      url: "https://docs.google.com/presentation/d/1BupMyostovFpW67MBwGE-bibOKTH6qY7/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    }
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Social & Content",
    status: "pilot",
    progress: 46,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-05-29",
    summary: "Automated social content pipeline that turns fire-regulation updates into ready-to-post drafts for Facebook, LinkedIn, and X.",
    functionLine: "Monitor legislation → draft post in MacFire's tone → Dougie approves with a yes/no → publishes on schedule. Nothing goes out without his say-so.",
    completedSteps: [
      "Markdown-first content workflow designed and documented",
      "Auto-generated preview page live on GitHub Pages",
      "Human-in-the-loop approval flow designed"
    ],
    upcomingSteps: [
      "Connect Claude API for regulation-aware draft generation in MacFire's tone",
      "Facebook, LinkedIn, and X posting integration",
      "Morning approval email: Dougie reviews drafts before anything publishes",
      "Expand content triggers beyond legislation to training courses, seasonal reminders, and case studies"
    ],
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-content-radar",
    outputLinks: [
      { label: "Content Preview", url: "https://jonathanmccrimmond.github.io/macfire-content-radar/preview/" }
    ],
    deckLink: {
      label: "Function Deck",
      url: ""
    }
  }
];
