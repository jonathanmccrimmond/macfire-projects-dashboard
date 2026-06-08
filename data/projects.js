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
      "Automated weekly lead generation for Scottish fire safety opportunities, leveraging public data sources with advanced lead scoring and data enrichment.",
    functionLine:
      "Find, score, and enrich credible fire-safety leads each week with Companies House and planning signals.",
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
      { date: "2026-06-06", text: "Companies House signal built: finds new business registrations in 50+ fire-risk SIC codes across Central Scotland" },
      { date: "2026-06-06", text: "Full contact enrichment added: director lookup, website check, Google Maps, phone and email extraction" },
      { date: "2026-06-06", text: "Personalised outreach email drafted automatically per lead, sector-specific and addressed by director name" },
      { date: "2026-06-05", text: "All leads now stored in a single Supabase database with deduplication" }
    ],
    nextSteps: [
      { owner: "dougie", text: "Create a free Supabase project at supabase.com and share the URL + service key" },
      { owner: "dougie", text: "Add DOUGIE_EMAIL secret to GitHub so the digest goes to you" },
      { owner: "dougie", text: "Confirm whether you want SEND_EMAIL turned on (live outreach drafts will arrive in your inbox)" },
      { owner: "jonathan", text: "Trigger a live test run via GitHub Actions to verify all 13 councils scrape correctly" },
      { owner: "jonathan", text: "Verify East Renfrewshire and Renfrewshire portal URLs and enable those councils" },
      { owner: "jonathan", text: "Build lead review dashboard so you can approve/reject leads without touching Supabase directly" }
    ],
    clientQuestions: [
      { id: "q1", text: "Do you want the weekly digest email sent to you alone, or a wider team list?" },
      { id: "q2", text: "Should approved leads be exported to a CRM or spreadsheet, or is the email digest enough for now?" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Pipeline is fully built and committed. Needs Supabase credentials and a live test run before it goes live on the Monday cron.",
    confidentiality: "Confidential lead-level data remains private. Never committed to the repo.",
    nextMilestone: "First live test run end-to-end"
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
    recentWins: [
      { date: "2026-05-29", text: "Markdown-first content pipeline built with auto-generated preview page" },
      { date: "2026-05-29", text: "Source attribution and confidence scoring added to every draft" }
    ],
    nextSteps: [
      { owner: "dougie", text: "Review the live preview and confirm the tone and format feel right for MacFire's brand" },
      { owner: "jonathan", text: "Connect AI model for automated draft generation from regulation source feeds" },
      { owner: "jonathan", text: "Set up scheduled monitoring of key Scottish fire regulation sources" }
    ],
    clientQuestions: [
      { id: "q1", text: "Which platforms matter most to you right now: LinkedIn, Facebook, or both?" },
      { id: "q2", text: "Would you want to approve posts before they go out, or set a schedule and let them post automatically?" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Markdown-first workflow with auto-generated preview page. Model integration is the next step.",
    confidentiality: "Public sources only. No confidential lead data in output.",
    nextMilestone: "Connect free-tier model for draft generation"
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
      { date: "2026-05-30", text: "Full Phase 3 demo built: mobile-first, accessible, includes contact form stub and schema.org markup" },
      { date: "2026-05-28", text: "Phase 2 direction agreed: bold conversion-led design replacing the 2016 brochure style" },
      { date: "2026-05-26", text: "Phase 1 full audit complete: SEO, speed, accessibility and conversion issues documented" }
    ],
    nextSteps: [
      { owner: "dougie", text: "Review the live demo and share feedback on the design direction" },
      { owner: "dougie", text: "Confirm whether you have real photography or need stock images for now" },
      { owner: "dougie", text: "Decide on the contact form destination: email only, or CRM integration?" },
      { owner: "jonathan", text: "Integrate real photography and copy once approved" },
      { owner: "jonathan", text: "Wire up the contact form backend (Formspree or similar)" }
    ],
    clientQuestions: [
      { id: "q1", text: "Have you looked at the live demo? What's your overall reaction to the direction?" },
      { id: "q2", text: "Is there anything about the current site you definitely want to keep?" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    notes:
      "Phase 1 audit, Phase 2 direction (bold/conversion-led), and Phase 3 build complete. Waiting on client review before moving to production.",
    confidentiality: "Public-facing brochure content only.",
    nextMilestone: "Client review of design direction"
  }
];
