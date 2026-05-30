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
    lastUpdated: "2026-05-30",
    summary:
      "Production-grade demo redesign of macfireltd.co.uk — secure, accessible, conversion-led single-page site to replace the 2016-era brochure.",
    functionLine:
      "Show a credibility-led, mobile-first replacement for the current site, ready for client review.",
    repoUrl: "",
    outputLinks: [
      {
        label: "Live Demo",
        url: "https://jonathanmccrimmond.github.io/macfire-projects-dashboard/macfire-website-demo/"
      }
    ],
    deckLink: {
      label: "Audit & Handoff Deck",
      url: "https://docs.google.com/presentation/d/1BupMyostovFpW67MBwGE-bibOKTH6qY7/edit?usp=sharing&ouid=114154757220276176557&rtpof=true&sd=true"
    },
    notes:
      "Phase 1 audit, Phase 2 direction (bold/conversion-led), and Phase 3 build complete. Demo includes contact form stub, schema.org LocalBusiness markup, and responsive layout.",
    confidentiality: "Public-facing brochure content only.",
    nextMilestone: "Client review of the design direction, then real photography and form backend."
  }
];
