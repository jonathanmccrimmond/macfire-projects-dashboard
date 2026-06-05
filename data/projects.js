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
      label: "Information Deck",
      url: "https://docs.google.com/presentation/d/1tVF3yontFFgixup52AuVFMlHLg2nVKHe/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
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
        label: "Live Preview",
        url: "https://jonathanmccrimmond.github.io/macfire-content-radar/preview/"
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
  },
  {
    id: "macfire-website-redesign",
    name: "MacFire Website Redesign",
    category: "Brand & Web",
    status: "pilot",
    progress: 70,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-05",
    summary:
      "Two demo directions for macfireltd.co.uk: a full modernised redesign and a minimum-improvements version that fixes technical issues while keeping a familiar structure.",
    functionLine:
      "Show two credible options for replacing the 2016-era site, ready for client review.",
    repoUrl: "",
    outputLinks: [
      {
        label: "Modernised",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-demo/"
      },
      {
        label: "Minimum Improvements",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-minimal/"
      }
    ],
    deckLink: {
      label: "Audit & Handoff Deck",
      url: "https://docs.google.com/presentation/d/1BupMyostovFpW67MBwGE-bibOKTH6qY7/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    },
    notes:
      "Modernised: full redesign with conversion-led layout, display typography, contact form. Minimum Improvements: original site structure, technical fixes, same branding.",
    confidentiality: "Public-facing brochure content only.",
    nextMilestone: "Client review of both directions, then agree approach before real photography and form backend."
  }
];
