window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Intelligence",
    status: "pilot",
    progress: 95,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-06",
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
      { owner: "dougie", text: "Confirm whether you want live outreach drafts to arrive in your inbox automatically once we go live" },
      { owner: "jonathan", text: "Set up one secure place for the leads and connect your email so the weekly digest reaches you" },
      { owner: "jonathan", text: "Run a live test to confirm all 13 councils are collecting data cleanly" },
      { owner: "jonathan", text: "Add East Renfrewshire and Renfrewshire council sites and switch them on" },
      { owner: "jonathan", text: "Build a lead review screen so you can approve or reject leads in one place" }
    ],
    clientQuestions: [
      { id: "q1", text: "Do you want the weekly digest email sent to you alone, or a wider team list?" },
      { id: "q2", text: "Should approved leads also go into a customer system or spreadsheet, or is the weekly email enough for now?" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Pipeline is fully built. Needs final setup and a live test run before the weekly schedule starts.",
    confidentiality: "Confidential lead-level data stays private. Never shared publicly.",
    nextMilestone: "First live weekly test"
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
      { date: "2026-05-29", text: "Content drafting pipeline built with an auto-generated preview page" },
      { date: "2026-05-29", text: "Every draft now includes source links and a confidence note" }
    ],
    nextSteps: [
      { owner: "dougie", text: "Review the live preview and confirm the tone and format feel right for MacFire's brand" },
      { owner: "jonathan", text: "Connect the drafting setup so it turns regulation updates into LinkedIn and Facebook drafts automatically" },
      { owner: "jonathan", text: "Set up regular checks of the key Scottish fire regulation sources" }
    ],
    clientQuestions: [
      { id: "q1", text: "Which platforms matter most to you right now: LinkedIn, Facebook, or both?" },
      { id: "q2", text: "Would you want to approve posts before they go out, or set a schedule and let them post automatically?" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Drafting workflow and preview page live. Automatic drafting is the next step.",
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
    lastUpdated: "2026-05-30",
    summary:
      "Production-grade demo redesign of macfireltd.co.uk: secure, accessible, conversion-led single-page site to replace the 2016-era brochure.",
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
    recentWins: [
      { date: "2026-05-30", text: "Phase 3 demo built: mobile-friendly, accessible, contact form ready, and search-engine optimised" },
      { date: "2026-05-28", text: "Phase 2 direction agreed: bold conversion-led design replacing the 2016 brochure style" },
      { date: "2026-05-26", text: "Phase 1 full audit complete: search, speed, accessibility and conversion issues documented" }
    ],
    nextSteps: [
      { owner: "dougie", text: "Review the live demo and share feedback on the design direction" },
      { owner: "dougie", text: "Confirm whether you have real photography or need stock images for now" },
      { owner: "dougie", text: "Decide where contact form enquiries should land: your email, or a customer system you already use" },
      { owner: "jonathan", text: "Drop in real photography and copy once approved" },
      { owner: "jonathan", text: "Wire up the contact form so enquiries land in your inbox" }
    ],
    clientQuestions: [
      { id: "q1", text: "Have you looked at the live demo? What's your overall reaction to the direction?" },
      { id: "q2", text: "Is there anything about the current site you definitely want to keep?" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Audit, direction and demo build complete. Waiting on client review before moving to production.",
    confidentiality: "Public-facing brochure content only.",
    nextMilestone: "Client review of design direction"
  }
];
