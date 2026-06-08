window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Finder",
    status: "pilot",
    progress: 97,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-08",
    summary:
      "Automated weekly lead generation for Scottish fire safety opportunities, pulling from planning portals, Companies House, and social media (X, LinkedIn, Facebook) to rank leads and surface contact details.",
    functionLine:
      "Find and rank fire-safety leads each week from planning records, Companies House, and social media signals, then surface contact details.",
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-ai-lead-scout",
    outputLinks: [
      {
        label: "Live Lead Dashboard",
        url: "https://jonathanmccrimmond.github.io/macfire-ai-lead-scout/"
      }
    ],
    deckLink: {
      label: "Info Deck",
      url: "https://docs.google.com/presentation/d/1vZx67rB0DllHKJ5NHOMATL9y94_SGmV4/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    },
    recentWins: [
      { date: "2026-06-08", text: "Full Supabase-powered dashboard rebuilt: KPI cards, pipeline status, charts, enrichment queues and lead actions — all connected to live data" },
      { date: "2026-06-08", text: "Lead data migrated from Notion to Supabase — all historical leads preserved with full enrichment profiles" },
      { date: "2026-06-06", text: "Expanded to 13 Central Scotland planning councils: Stirling, all Ayrshire councils, Inverclyde, Falkirk, West Lothian, Clackmannanshire" },
      { date: "2026-06-06", text: "Companies House search now finds new business registrations across 50+ fire-risk business categories in Central Scotland" },
      { date: "2026-06-06", text: "Personalised outreach email drafted automatically per lead, sector-specific and addressed by director name" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Add API keys for X, LinkedIn, and Facebook so social scraping goes live alongside planning and Companies House data" },
      { owner: "jonathan", text: "Run a live test to confirm all 13 councils are collecting data cleanly" },
      { owner: "jonathan", text: "Add East Renfrewshire and Renfrewshire council sites and switch them on" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Data migrated from Notion to Supabase. Static dashboard ready — connect via config.js. Pipeline and scraping built, needs live test run.",
    confidentiality: "Confidential lead-level data stays private. Never shared publicly.",
    nextMilestone: "First live weekly test"
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Marketing Support",
    status: "pilot",
    progress: 55,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-08",
    summary:
      "Drafts social posts for LinkedIn, Facebook and X from public regulation and standards updates, with sources attached.",
    functionLine:
      "Turn verified regulation updates into LinkedIn, Facebook and X drafts with source links.",
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-content-radar",
    outputLinks: [
      {
        label: "Live Preview",
        url: "https://jonathanmccrimmond.github.io/macfire-content-radar/preview/"
      }
    ],
    deckLink: {
      label: "Info Deck",
      url: "https://docs.google.com/presentation/d/1sY58hZyYPyaHllfa_cGpEo5EQuWXBdgc/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    },
    recentWins: [
      { date: "2026-06-08", text: "First live source pull — radar fetched a story today" },
      { date: "2026-05-29", text: "Content drafting process built with a preview page" },
      { date: "2026-05-29", text: "Every draft now includes source links and a confidence note" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Connect the drafting setup so it turns regulation updates into LinkedIn, Facebook and X drafts automatically" },
      { owner: "jonathan", text: "Set up regular checks of the key Scottish fire regulation sources" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Drafting process and preview page are live. Automatic drafting is the next step.",
    confidentiality: "Public sources only. No confidential lead data in output.",
    nextMilestone: "First automatic social post drafts"
  },
  {
    id: "macfire-website-redesign",
    name: "MacFire Website Redesign",
    category: "Brand & Web",
    status: "pilot",
    progress: 70,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-08",
    summary:
      "Three-phase website project. Phase 1 (complete): full site audit. Phase 2 (complete): two demo directions built — a minimal update and a full redesign. Phase 3 (current): choose which direction goes to production.",
    functionLine:
      "Move macfireltd.co.uk from two demo directions to a single chosen, production-ready website.",
    repoUrl: "",
    outputLinks: [
      {
        label: "Minimal Refresh",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-minimal/"
      },
      {
        label: "Full Redesign",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-demo/"
      }
    ],
    deckLink: {
      label: "Info Deck",
      url: "https://docs.google.com/presentation/d/1Ayp1Qx_4AD1OQEJdlcxNhn0_prxY7JpU/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    },
    recentWins: [
      { date: "2026-06-08", text: "Phase 2 complete: two website demo directions are now built and published for comparison" },
      { date: "2026-05-30", text: "Full redesign demo built with mobile layout, clearer service structure, contact form flow and stronger search foundations" },
      { date: "2026-05-30", text: "Minimal website demo built as a cleaner, lower-change option for comparison" },
      { date: "2026-05-26", text: "Phase 1 full audit complete: search, speed, ease of use and enquiry issues documented" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Phase 3: gather approval and confirm which demo direction feels correct for MacFire" },
      { owner: "jonathan", text: "Turn the approved direction into the production-ready handoff plan" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Phase 1 (full audit) and Phase 2 (two demos built) are complete. Phase 3 is choosing a direction and beginning production work.",
    confidentiality: "Public-facing brochure content only.",
    nextMilestone: "Phase 3 approval and direction check"
  }
];
