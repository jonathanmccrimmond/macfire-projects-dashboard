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
      "Automated lead generation for MacFire. The production scout is being brought back to full POC parity: Companies House and planning signals, Google Places and Street View, website/contact discovery, director history, re-enrichment, AI-drafted outreach, and social evidence from Facebook, X, LinkedIn and Instagram. Each lead is scored for fire safety relevance so MacFire can focus on the businesses most likely to need a fire safety contractor next.",
    functionLine: "",
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
      { date: "2026-06-09", text: "Instagram added to the social enrichment plan and support code, joining Facebook, X and LinkedIn as evidence/contact discovery sources" },
      { date: "2026-06-09", text: "Scout run health surfaced in the dashboard from Supabase scout_runs, showing freshness plus fetched, qualified and written counts" },
      { date: "2026-06-09", text: "Lead detail drawer + shareable URLs: click any lead for a Street View image, full confidence breakdown, director history and website intel; filters and individual leads now save to the URL for bookmarking and sharing" },
      { date: "2026-06-09", text: "Director appointment history added: every lead shows how many other companies the lead director has run (and how many were dissolved), flagging serial company-formers" },
      { date: "2026-06-09", text: "Website auto-detection live: scout now finds and reads lead company websites, pulling page title plus opening, booking and hiring signals to confirm a business is becoming active" },
      { date: "2026-06-09", text: "Google Maps, Street View and Places enrichment shipped: every qualifying lead carries a verified-business check, phone number when listed, and Street View image straight in the dashboard" },
      { date: "2026-06-09", text: "Four-dimension confidence scoring: every lead now carries Premises / Operational / Compliance / Reach scores 0-100, summarised on each card" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Wire social enrichment into the production scout and Supabase rows: Facebook, X, LinkedIn and Instagram evidence links, matched confidence, and contact clues" },
      { owner: "jonathan", text: "Finish POC parity in production: planning applications, website phone/email scraping, re-enrichment queue and gated outreach drafts" },
      { owner: "jonathan", text: "Add contact discovery outcome state and a re-enrichment queue view to the live dashboard" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "First live weekly test"
  },
  {
    id: "macfire-content-radar",
    name: "MacFire Content Radar",
    category: "Marketing Support",
    status: "pilot",
    progress: 86,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-09",
    summary:
      "Watches Scottish fire safety, building standards and legislation sources every week, then turns new updates into LinkedIn, Facebook and X drafts automatically using Gemini. The editorial dashboard now shows the review queue, platform cards, approval checks, a content calendar, local approve/decline/schedule controls, and a manual GitHub review workflow before any guarded publishing can happen.",
    functionLine: "",
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
      { date: "2026-06-09", text: "Editorial dashboard now supports approve, decline and schedule actions through a local review server that writes decisions back to markdown frontmatter" },
      { date: "2026-06-09", text: "Manual GitHub review workflow added: approve, schedule or decline a post remotely, rebuild the preview and commit the review state" },
      { date: "2026-06-09", text: "Guarded Stage 3 publish pipeline built: dry-run by default, approved/scheduled posts only, live Facebook/LinkedIn posting requires explicit safety switch and platform tokens" },
      { date: "2026-06-09", text: "Content calendar added for scheduled posts and known fire-safety/building-standards dates" },
      { date: "2026-06-09", text: "Stage 2 weekly source monitor live: every Monday the radar checks the Scottish Building Standards blog, gov.scot building standards updates, and new Scottish statutory instruments for fire and building, then auto-triggers draft generation for anything new" },
      { date: "2026-06-09", text: "First auto-generated draft committed by the bot (20m Single Open Call funding increase post), end-to-end source pull through to channel-ready copy with no manual writing step" },
      { date: "2026-06-08", text: "Stage 1 AI draft generator shipped: one-click GitHub Action takes a source URL plus notes and writes LinkedIn, Facebook and X drafts using Gemini 2.5 Flash, committing straight to the preview" },
      { date: "2026-05-29", text: "Content drafting process built with a live preview page that renders every draft as a Facebook, X and LinkedIn-style card" },
      { date: "2026-05-29", text: "Every draft now includes source links and a confidence note so the human reviewer can verify before publishing" }
    ],
    nextSteps: [
      { owner: "jonathan", text: "Run one dry-run publish test with an approved post, then one live smoke test once Facebook and LinkedIn tokens are confirmed" },
      { owner: "jonathan", text: "Widen the monitored source list (SFRS news, more gov.scot policy feeds) and tune per-source notes templates so drafts hit the right angle for each channel" },
      { owner: "jonathan", text: "Decide whether Dougie needs a hosted authenticated approval UI, or whether GitHub Actions review plus Jonathan-run local review is enough for the pilot" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Dry-run publish test, then first live approved LinkedIn/Facebook post"
  },
  {
    id: "macfire-website-redesign",
    name: "MacFire Website Redesign",
    category: "Brand & Web",
    status: "paused",
    progress: 70,
    owner: "Jonathan McCrimmond",
    lastUpdated: "2026-06-09",
    summary:
      "Paused for now. The completed audit and two demo directions remain available for later: a minimal update and a full redesign. Current delivery focus has moved back to AI Scout and Content Radar.",
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
      { owner: "jonathan", text: "Keep paused while AI Scout and Content Radar are brought to the expected operating state" },
      { owner: "jonathan", text: "When resumed, decide whether to keep the current site and fix HTTPS first, or move forward with one of the demo directions" }
    ],
    feedbackEmail: "j@mccrimmond.org.uk",
    nextMilestone: "Paused until AI Scout and Content Radar are stable"
  }
];
