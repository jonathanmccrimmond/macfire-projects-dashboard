window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Intelligence",
    status: "active",
    progress: 91,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-05-29",
    summary:
      "Automated daily lead generation for Scottish fire safety opportunities, leveraging public data sources with advanced lead scoring and data enrichment.",
    functionLine:
      "Find, score, and enrich credible fire-safety leads each day with Companies House and planning signals.",
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-scout",
    outputLinks: [
      {
        label: "Live Lead Dashboard",
        url: "https://macfire-dashboard.onrender.com/"
      }
    ],
    deckLink: {
      label: "Function Deck (planned)",
      url: ""
    },
    notes:
      "Planning applications sourcing has shipped and is live. Current run remains stable in production.",
    confidentiality: "Confidential lead-level data remains private.",
    nextMilestone: "Add the next signal layer beyond planning."
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Marketing Automation",
    status: "pilot",
    progress: 46,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-05-29",
    summary:
      "Public-source social content drafting pipeline for regulation and standards updates.",
    functionLine:
      "Turn verified regulation updates into LinkedIn and Facebook drafts with source links.",
    repoUrl: "https://github.com/jonathanmccrimmond/macfire-content-radar",
    outputLinks: [
      {
        label: "Local Preview (this machine)",
        url: "file:///Users/jonathanmccrimmond/Documents/MacFire/macfire-content-radar/preview/index.html"
      }
    ],
    deckLink: {
      label: "Function Deck (planned)",
      url: ""
    },
    notes:
      "Markdown-first workflow with auto-generated preview page. Model integration is the next step.",
    confidentiality: "Public sources only. No confidential lead data in output.",
    nextMilestone: "Connect free-tier model for draft generation."
  }
];
