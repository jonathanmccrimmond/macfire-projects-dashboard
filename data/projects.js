window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Scout",
    category: "Lead Intelligence",
    status: "active",
    progress: 82,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-05-29",
    summary:
      "Daily automated lead generation for Scottish fire-safety opportunities using Companies House scoring and enrichment.",
    functionLine:
      "Find and rank credible fire-safety leads each day with minimal manual effort.",
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
      "Planning-applications signal expansion is in progress. Current run remains stable in production.",
    confidentiality: "Confidential lead-level data remains private.",
    nextMilestone: "Ship planning signal production path."
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
    repoUrl: "",
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
