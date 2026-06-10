window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Finder",
    status: "pilot",
    progress: 92,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-10",
    summary:
      "Sources new businesses from Companies House and planning portals across Scotland, scored for fire safety relevance and delivered weekly.",
    functionLine: "Weekly lead pipeline from Companies House and council planning portals",
    notes:
      "Every new company registration and every fresh planning application across Falkirk, Stirling, Clackmannanshire, Fife, Edinburgh, Glasgow and the central belt is captured, scored against fire-risk business categories, then enriched with director history, premises imagery and website signals so MacFire can prioritise the strongest opportunities.",
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
      { date: "2026-06-10", text: "Dashboard upgrade: sector quick-filters, saved views, sticky filter bar, queue and sort controls" },
      { date: "2026-06-10", text: "New Not Relevant tab with one-click 'Add back to queue' to undo a mis-marked lead" },
      { date: "2026-06-10", text: "Latest-run summary moved into the header (run date, lead count, priority breakdown)" },
      { date: "2026-06-10", text: "Re-enrichment queue added for older high-value leads missing contact details" },
      { date: "2026-06-09", text: "Weekly planning scans added alongside the daily Companies House run" }
    ],
    activityLog: [
      { date: "2026-06-10", text: "Dashboard upgrade: sector quick-filter chips, saved views, sticky filter toolbar, queue and sort dropdowns, clear-all button, shareable filtered URLs" },
      { date: "2026-06-10", text: "New Not Relevant tab with one-click 'Add back to queue' restoration" },
      { date: "2026-06-10", text: "Latest-run summary moved from full-width banner into a compact header chip" },
      { date: "2026-06-10", text: "Re-enrichment queue added for older high-value leads missing website, phone or email" },
      { date: "2026-06-09", text: "Weekly planning scans added alongside the daily Companies House run" },
      { date: "2026-06-09", text: "Schema-lag safety added so optional social fields cannot block lead writes" },
      { date: "2026-06-09", text: "Social enrichment added for Facebook, X, LinkedIn and Instagram evidence" },
      { date: "2026-06-09", text: "Website contact extraction added to find public emails and phone numbers" },
      { date: "2026-06-09", text: "Cloud migration designed: the scout will run daily with no manual involvement" },
      { date: "2026-06-09", text: "443 active leads cleaned and prepared for the production database" },
      { date: "2026-06-09", text: "Lead detail view added: imagery, score breakdown and director history at a click" },
      { date: "2026-06-09", text: "Each lead now shows its director's other companies, flagging repeat formations" },
      { date: "2026-06-09", text: "Website detection live: each lead's site is checked for signs of trading" },
      { date: "2026-06-09", text: "Verified business checks added, including phone numbers and Street View where available" },
      { date: "2026-06-09", text: "Confidence scoring added across premises, trading, compliance and contactability" },
      { date: "2026-06-08", text: "Live dashboard rebuilt with key numbers, lead queues, charts and status actions" },
      { date: "2026-06-08", text: "Lead records moved from the old workspace into the database" },
      { date: "2026-06-06", text: "Council coverage expanded across Central Scotland planning portals" },
      { date: "2026-06-06", text: "New company registrations detected across fire-risk business categories" },
      { date: "2026-06-06", text: "Outreach email drafts created automatically for each relevant lead" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Apply the optional social-field schema migration in Supabase" },
      { owner: "jonathan", text: "Run a dry-run cloud check for companies, planning and re-enrichment" },
      { owner: "jonathan", text: "Watch the first live scheduled runs and tune priority rules" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Production daily and re-enrichment runs verified"
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Marketing Support",
    status: "pilot",
    progress: 88,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-10",
    summary:
      "Watches Scottish fire safety and building standards sources weekly, then drafts LinkedIn, Facebook and X posts for approval.",
    functionLine: "Weekly social drafts from official sources, human approved",
    notes:
      "Government, regulator, council and industry sources are checked every Monday for anything relevant to MacFire. New stories become a LinkedIn, Facebook and X draft, each with the source link attached, ready to review in one place. Nothing publishes without sign-off.",
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
      { date: "2026-06-10", text: "Calendar review page built: approve, decline and copy actions in one place" },
      { date: "2026-06-10", text: "Review decisions saved centrally so status is visible without opening each post" },
      { date: "2026-06-09", text: "Weekly monitoring live: official sources checked every Monday automatically" },
      { date: "2026-06-09", text: "First post drafted end to end with no manual writing" },
      { date: "2026-06-08", text: "One-click drafting live: a source link becomes LinkedIn, Facebook and X drafts" }
    ],
    activityLog: [
      { date: "2026-06-10", text: "Calendar review page built: month grid colour-coded by status, approve and decline buttons, per-platform copy, source freshness indicator" },
      { date: "2026-06-10", text: "Review decisions now saved centrally so approval status persists across sessions" },
      { date: "2026-06-10", text: "Review card layout tightened: Facebook as the lead preview, LinkedIn and X available via toggle" },
      { date: "2026-06-09", text: "Weekly monitoring live: official sources checked every Monday automatically" },
      { date: "2026-06-09", text: "First post drafted end to end with no manual writing" },
      { date: "2026-06-08", text: "One-click drafting live: a source link becomes LinkedIn, Facebook and X drafts" },
      { date: "2026-06-08", text: "First live source pull completed for a real fire-safety story" },
      { date: "2026-05-29", text: "Preview page shows each draft exactly as it would appear when posted" },
      { date: "2026-05-29", text: "Every draft carries its source for verification before posting" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Apply the review-status schema to the production database" },
      { owner: "jonathan", text: "Configure the review page with the live database connection" },
      { owner: "jonathan", text: "Confirm platform priorities with Dougie before enabling auto-posting" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Review page connected to the production database and tested with Dougie"
  },
  {
    id: "macfire-website-redesign",
    name: "MacFire Website Redesign",
    category: "Brand & Web",
    status: "paused",
    progress: 70,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-10",
    summary:
      "Two live demo versions of macfireltd.co.uk side by side: a light refresh and a full redesign, ready for direct comparison.",
    functionLine: "Two refresh options, ready to compare",
    notes:
      "Both demos are mobile-friendly, faster than the current site, and use clearer service descriptions with a simpler enquiry flow. The work is paused while AI Scout and Content Radar take priority; the next website decision is still which direction Dougie prefers.",
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
      { date: "2026-06-08", text: "Both demo sites built and published for comparison" },
      { date: "2026-05-30", text: "Full redesign demo: mobile-friendly, clearer services and a simpler contact flow" },
      { date: "2026-05-30", text: "Light refresh demo built as the lower-change option" },
      { date: "2026-05-26", text: "Full audit of the current site complete, covering speed, search and enquiries" }
    ],
    activityLog: [
      { date: "2026-06-08", text: "Both demo sites built and published for comparison" },
      { date: "2026-05-30", text: "Full redesign demo: mobile-friendly, clearer services and a simpler contact flow" },
      { date: "2026-05-30", text: "Light refresh demo built as the lower-change option" },
      { date: "2026-05-26", text: "Full audit of the current site complete, covering speed, search and enquiries" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Keep the demos live while AI Scout and Content Radar take priority" },
      { owner: "jonathan", text: "Review both demos with Dougie when website work resumes" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Paused until Dougie is ready to choose a website direction"
  }
];
