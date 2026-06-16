// ============================================================================
//  SITE CONTENT  —  edit this file to update your website.
// ----------------------------------------------------------------------------
//  Everything you'd normally want to change (your name, bio, projects, skills,
//  contact info, links, etc.) lives here. The layout and styling live in
//  App.tsx — you usually won't need to touch that file.
//
//  Tips:
//   • Text goes inside the quotes. Keep the quotes and commas.
//   • Lists are wrapped in [ ... ]. Add an item by copying an existing
//     { ... } block and editing it (don't forget the comma between items).
//   • Emoji are just text — paste any emoji you like.
// ============================================================================

// ─── Types (you can ignore these; they just help catch typos) ───────────────

export interface Project {
  name: string;
  desc: string;
  tech: string;
  year: string;
  status: string;
}

export interface Skill {
  name: string;
  pct: number; // 0–100, controls the progress bar length
}

export interface Tool {
  icon: string;
  name: string;
  level: "Expert" | "Advanced" | "Intermediate" | "Beginner";
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
}

export interface FooterBadge {
  bg: string; // background color (hex)
  fg: string; // text color (hex)
  top: string;
  bot: string;
}

// ─── Profile / header ───────────────────────────────────────────────────────

export const profile = {
  name: "Wenda Huang",
  // The two segments shown under your name in the header
  tagline: "Statistics & Machine Learning",
  affiliation: "Carnegie Mellon University",
  // Top-right header status
  headerEmoji: "👨‍💻",
  availability: "Available for work",
  statusLabel: "ONLINE",
  // About-page photo
  photoUrl:
    "https://i.imgur.com/drBqstN.png",
  photoCaption: "Wenda Huang, 2026",
};

// ─── Navigation tabs (also used in the sidebar) ─────────────────────────────

export const nav = ["Home", "About Me", "Portfolio", "Skills", "Contact"];

// ─── A running visitor count (just for the retro vibe) ──────────────────────

export const visitorCount = 1;

// ─── HOME tab ───────────────────────────────────────────────────────────────

export const home = {
  lastUpdated: "June 15, 2026",

  welcomeHeading: "Welcome to Wenda Huang's Homepage!",

  // Each string becomes its own paragraph.
  intro: [
    "Hi! My name is Wenda Huang and this is my personal website. I'm majoring in Statistics & Machine Learning at Carnegie Mellon University.",
    "I'm interested in agentic AI, probabilistic computing, and applied ML for business. If you'd like to collaborate, check out my Portfolio or get in touch via the Contact tab!",
  ],

  availabilityNote: {
    title: "Currently open to internships & research!",
    detail: "Open to internships, research, and collaborations. I usually respond within 24 hours.",
  },

  // The little "Site Info" box on the right
  siteInfo: [
    { label: "Version", value: "4.2.1" },
    { label: "Design", value: "Windows XP Luna" },
    { label: "Host", value: "GeoCities Pro" },
    { label: "Browser", value: "IE 6.0+" },
    { label: "Resolution", value: "800×600" },
  ] as LabelValue[],

  // The "Featured Work" mini-cards on the right
  featuredWork: [
    { name: "In progress", meta: "foo · bar · 2026" },
  ],

  // The scrolling ticker at the bottom of the Home tab
  ticker:
    "🌟 Open to internships & research  |  📧 wenda.huang2006@gmail.com  |  💼 Statistics & Machine Learning @ CMU  |  ✨ Thanks for visiting!",
};

// ─── ABOUT tab ──────────────────────────────────────────────────────────────

export const about = {
  // Each string becomes its own paragraph.
  bio: [
    "Hi! I'm Wenda Huang, a Statistics & Machine Learning student at Carnegie Mellon University.",
    "I'm passionate about machine learning and its applications in business contexts.",
    "I'm also interested in learning about probabilistic computing and designing new AI systems for probabilistic hardware.",
    "I'm currently working as a software engineering intern at Chevron."
  ],

  quickFacts: [
    { label: "Name", value: "Wenda Huang" },
    { label: "School", value: "Carnegie Mellon University" },
    { label: "Major", value: "Statistics & Machine Learning" },
    { label: "Email", value: "wenda.huang2006@gmail.com" },
    { label: "Location", value: "Pittsburgh, PA and Sugar Land, TX" },
    { label: "Interests", value: "ML, statistics, software" },
  ] as LabelValue[],

  interests: [
    "💻 Software & interface design",
    "📊 Statistics & data",
    "🤖 Machine learning",
    "🎵 Music",
    "📚 Learning obscure facts",
  ],
};

// ─── PORTFOLIO tab ──────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    name: "Coming soon",
    desc: "Not yet added!",
    tech: "foo · bar",
    year: "2026",
    status: "In progress",
  },
];

// ─── SKILLS tab ─────────────────────────────────────────────────────────────

export const skills = {
  // Animated progress bars
  bars: [
    { name: "Python / Data", pct: 92 },
    { name: "Statistics / ML", pct: 90 },
    { name: "React / TypeScript", pct: 80 },
    { name: "SQL / Databases", pct: 78 },
    { name: "R", pct: 72 },
    { name: "C / Systems", pct: 65 },
  ] as Skill[],

  // The "Software & Tools" list (level must be Expert, Advanced, or Intermediate)
  tools: [
    { icon: "🐍", name: "Python", level: "Intermediate" },
    { icon: "📊", name: "NumPy / pandas", level: "Beginner" },
    { icon: "🧮", name: "R", level: "Intermediate" },
    { icon: "📐", name: "LangGraph / LangChain", level: "Beginner" },
    { icon: "🔥", name: "PyTorch", level: "Beginner" },
    { icon: "🔵", name: "Azure", level: "Intermediate"},
    { icon: "🧱", name: "Databricks", level: "Beginner"}
  ] as Tool[],

  // The little tag chips
  disciplines: [
    "Machine Learning",
    "Statistics",
    "Data Analysis",
    "Software Eng.",
    "Modeling",
  ],
};

// ─── CONTACT tab ────────────────────────────────────────────────────────────

export const contact = {
  info: [
    { icon: "📧", label: "Email", value: "wenda.huang2006@gmail.com" },
    { icon: "📍", label: "Location", value: "Pittsburgh, PA" },
    { icon: "🎓", label: "School", value: "Carnegie Mellon University" },
    { icon: "🔗", label: "GitHub", value: "github.com/wenda-huang" },
  ] as ContactItem[],

  responseTime: "I usually reply within 24 hours. Open to internships, research, and collaborations.",
};

// ─── SIDEBAR widgets ────────────────────────────────────────────────────────

export const sidebar = {
  status: {
    online: true,
    aim: "wenda_h",
    icq: "4829-1073",
  },

  nowPlaying: {
    artist: "Neutral Milk Hotel",
    track: "Two-Headed Boy Pt.2",
    progressPct: 38, // 0–100
    time: "1:59 / 5:13",
  },

  // The "Links" web-ring list in the sidebar
  links: ["GitHub", "LinkedIn", "Resume (PDF)"],
};

// ─── FOOTER ─────────────────────────────────────────────────────────────────

export const footer = {
  // The classic 88×31 web badges
  badges: [
    { bg: "#003399", fg: "#ffffff", top: "Best Viewed", bot: "Internet Explorer 6.0" },
    { bg: "#cc6600", fg: "#ffffff", top: "Designed on", bot: "Windows XP™" },
    { bg: "#006600", fg: "#ffffff", top: "Powered by", bot: "Apache 2.0" },
    { bg: "#990000", fg: "#ffffff", top: "Pet some", bot: "Cats" },
    { bg: "#4a4a8a", fg: "#ffffff", top: "Get", bot: "Winamp 5.0" },  
    { bg: "#1a6a1a", fg: "#ffffff", top: "Best at", bot: "800 × 600" },
  ] as FooterBadge[],

  copyright: "© 2026 Wenda Huang · All Rights Reserved",
  note: "This site is best viewed at 800×600 resolution with Internet Explorer 6.0 or higher.",
};

// ─── Fun extras ───────────────────────────────────────────────────────────────

export const catImage = {
  // A cute cat that floats in the bottom-left corner of every page.
  //
  // IMPORTANT: this must be a DIRECT image link — one that ends in .png / .jpg /
  // .gif and usually lives on i.imgur.com (e.g. "https://i.imgur.com/abc123.png").
  // An album link like "https://imgur.com/a/8wI3cqr" will NOT work in an image.
  //
  // How to get the direct link from Imgur:
  //   1. Open the album/image in your browser.
  //   2. Right-click the cat → "Copy image address".
  //   3. Paste it below (it should start with https://i.imgur.com/ ).
  //
  // Leave url as "" (empty) to hide the cat.
  url: "https://i.imgur.com/eWYbQYJ.png",
  alt: "My cat",
  width: 130, // size in pixels
};
