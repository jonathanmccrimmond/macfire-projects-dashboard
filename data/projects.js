window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Finder",
    status: "pilot",
    progress: 95,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-08",
    summary:
      "Automated weekly lead generation for Scottish fire safety opportunities, using public sources to rank leads and add useful contact details.",
    functionLine:
      "Find and rank credible fire-safety leads each week from Companies House and planning records, then add contact details.",
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-ai-lead-scout",
    outputLinks: [
      {
        label: "Live Lead Dashboard",
        url: "https://macfire-dashboard.onrender.com/"
      }
    ],
    deckLink: {
      label: "Information Deck",
      url: "https://docs.google.com/presentation/d/1tVF3yontFFgixup52AuVFMlHLg2nVKHe/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    },
    recentWins: [
      { date: "2026-06-06", text: "Expanded to 13 Central Scotland planning councils: Stirling, all Ayrshire councils, Inverclyde, Falkirk, West Lothian, Clackmannanshire" },
      { date: "2026-06-06", text: "Companies House search now finds new business registrations across 50+ fire-risk business categories in Central Scotland" },
      { date: "2026-06-06", text: "Contact details added: director lookup, website check, Google Maps, phone and email" },
      { date: "2026-06-06", text: "Personalised outreach email drafted automatically per lead, sector-specific and addressed by director name" },
      { date: "2026-06-05", text: "All leads now stored in one place automatically, with duplicates removed" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Set up one secure place for the leads and connect your email so the weekly digest reaches you" },
      { owner: "jonathan", text: "Run a live test to confirm all 13 councils are collecting data cleanly" },
      { owner: "jonathan", text: "Add East Renfrewshire and Renfrewshire council sites and switch them on" },
      { owner: "jonathan", text: "Build a lead review screen so you can approve or reject leads in one place" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "The lead finder is fully built. Needs final setup and a live test run before the weekly schedule starts.",
    confidentiality: "Confidential lead-level data stays private. Never shared publicly.",
    nextMilestone: "First live weekly test"
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Marketing Support",
    status: "pilot",
    progress: 46,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-08",
    summary:
      "Drafts social posts from public regulation and standards updates, with sources attached.",
    functionLine:
      "Turn verified regulation updates into LinkedIn and Facebook drafts with source links.",
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-content-radar",
    outputLinks: [
      {
        label: "Live Preview",
        url: "https://jonathanmccrimmond.github.io/macfire-content-radar/preview/"
      }
    ],
    deckLink: {
      label: "Function Deck (planned)",
      url: ""
    },
    recentWins: [
      { date: "2026-05-29", text: "Content drafting process built with a preview page" },
      { date: "2026-05-29", text: "Every draft now includes source links and a confidence note" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Connect the drafting setup so it turns regulation updates into LinkedIn and Facebook drafts automatically" },
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
      "Two demo directions for macfireltd.co.uk: a clean minimal version and a fuller redesign version, ready for direction review.",
    functionLine:
      "Compare two mobile-friendly website directions before choosing the correct route for production.",
    repoUrl: "",
    outputLinks: [
      {
        label: "Minimal Demo",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-minimal/"
      },
      {
        label: "Full Demo",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-demo/"
      }
    ],
    deckLink: {
      label: "Audit & Handoff Deck",
      url: "https://docs.google.com/presentation/d/1BupMyostovFpW67MBwGE-bibOKTH6qY7/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
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
      "Phase 2 demo build is complete. Phase 3 is approval and direction checking before production work.",
    confidentiality: "Public-facing brochure content only.",
    nextMilestone: "Phase 3 approval and direction check"
  }
];
