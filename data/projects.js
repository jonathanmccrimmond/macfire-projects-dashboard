window.MACFIRE_PROJECTS = [
  {
    id: "macfire-ai-scout",
    name: "MacFire AI Lead Scout",
    category: "Lead Finder",
    status: "pilot",
    progress: 85,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-09",
    summary:
      "Automated weekly lead generation for MacFire. Monitors Companies House and planning portals across Scotland, capturing every new company registration and every fresh planning application (new builds, fit-outs, change-of-use) in the regions that matter (Falkirk, Stirling, Clackmannanshire, Fife, Edinburgh, Glasgow and the central belt postcodes). Each lead is scored for fire safety relevance using SIC codes that flag likely work (hospitality, retail, care, leisure, manufacturing, fit-out trades), then enriched with director appointment history, Google Places verification, Street View imagery and website detection, so MacFire can focus on the businesses most likely to need a fire safety contractor next.",
    functionLine:
      "Find private commercial planning applicants in Central Scotland who will need fire safety work, rank them by priority, and surface director contact details for outreach.",
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
      { date: "2026-06-09", text: "Lead detail drawer + shareable URLs: click any lead for a Street View image, full confidence breakdown, director history and website intel; filters and individual leads now save to the URL for bookmarking and sharing" },
      { date: "2026-06-09", text: "Director appointment history added: every lead shows how many other companies the lead director has run (and how many were dissolved), flagging serial company-formers" },
      { date: "2026-06-09", text: "Website auto-detection live: scout now finds and reads lead company websites, pulling page title plus opening, booking and hiring signals to confirm a business is becoming active" },
      { date: "2026-06-09", text: "Google Maps, Street View and Places enrichment shipped: every qualifying lead carries a verified-business check, phone number when listed, and Street View image straight in the dashboard" },
      { date: "2026-06-09", text: "Four-dimension confidence scoring: every lead now carries Premises / Operational / Compliance / Reach scores 0-100, summarised on each card" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Add contact discovery (Hunter/Apollo) plus AI-drafted outreach emails. One of the last enrichment features still missing versus the original POC." },
      { owner: "jonathan", text: "Add planning applications signal (Idox council portal scrapers) to widen the funnel beyond Companies House" },
      { owner: "jonathan", text: "Build a re-enrichment queue that retries fresh leads 14 to 90 days later, once their website, social media or Google listing has had time to appear" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "First live weekly test"
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Marketing Support",
    status: "pilot",
    progress: 75,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-09",
    summary:
      "Watches Scottish fire safety, building standards and legislation sources every week, then turns new updates into LinkedIn, Facebook and X drafts automatically using Gemini, with source links and a human review step before anything is published.",
    functionLine: "Monitor public Scottish regulation sources, auto-draft channel-ready social posts from new updates, and keep a human approval step before publishing.",
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
      { date: "2026-06-09", text: "Stage 2 weekly source monitor live: every Monday the radar checks the Scottish Building Standards blog, gov.scot building standards updates, and new Scottish statutory instruments for fire and building, then auto-triggers draft generation for anything new" },
      { date: "2026-06-09", text: "First auto-generated draft committed by the bot (20m Single Open Call funding increase post), end-to-end source pull through to channel-ready copy with no manual writing step" },
      { date: "2026-06-08", text: "Stage 1 AI draft generator shipped: one-click GitHub Action takes a source URL plus notes and writes LinkedIn, Facebook and X drafts using Gemini 2.5 Flash, committing straight to the preview" },
      { date: "2026-05-29", text: "Content drafting process built with a live preview page that renders every draft as a Facebook, X and LinkedIn-style card" },
      { date: "2026-05-29", text: "Every draft now includes source links and a confidence note so the human reviewer can verify before publishing" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Stage 3 publish pipeline: push approved drafts straight to LinkedIn and Facebook on a schedule, with status moving from draft to approved to published in the post frontmatter" },
      { owner: "jonathan", text: "Widen the monitored source list (SFRS news, more gov.scot policy feeds) and tune per-source notes templates so drafts hit the right angle for each channel" },
      { owner: "jonathan", text: "Confirm with Dougie which platforms matter most and whether Stage 3 should auto-post or always wait for manual approval" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Stage 3 publish pipeline to LinkedIn and Facebook"
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
      "Moves macfireltd.co.uk towards a production-ready website by using the completed audit and two demo directions — a minimal update and a full redesign — to choose the direction that feels right for MacFire.",
    functionLine: "",
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
      { owner: "jonathan", text: "Phase 3: confirm thoughts and next steps, including whether to keep the current site and fix the HTTPS problem" },
      { owner: "jonathan", text: "Turn the chosen next step into a practical handoff or fix plan" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Confirm thoughts and next steps, including the HTTPS fix option"
  }
];
