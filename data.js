// ============================================================
//  📝 SITE DATA — Edit this file to update your website!
//  All your personal info, research, publications, etc.
//  Just change the text below and reload the page.
// ============================================================

const SITE = {

  // ── Hero / About Me ───────────────────────────────────────
  hero: {
    badge: "PhD Researcher in Astrophysics",
    name: "Alex Mercer",
    title: "Doctoral Candidate · Cosmology & High-Energy Astrophysics",
    university: "University of the Stars · Department of Physics & Astronomy",
    bio: `Exploring the high-energy universe — from the formation of black holes
          to the large-scale structure of the cosmos. My research combines
          observational data with numerical simulations to unravel the
          mysteries of the early universe.`,
    avatar: "🔭",                // emoji or <img> path e.g. "photo.jpg"
  },

  about: {
    paragraphs: [
      `I'm a third-year PhD student in astrophysics at the University of the Stars, supervised by Prof. Elena Vasquez. My work focuses on the interplay between supermassive black holes and galaxy evolution at high redshift.`,
      `Before my PhD, I completed my BSc and MSc in Physics at the University of Northfield, graduating top of my class with a thesis on gravitational wave signatures from binary neutron star mergers.`,
      `Outside of research, I'm passionate about science communication — writing accessible articles and giving public talks to bring the wonders of the universe to everyone.`,
    ],
    stats: [
      { value: "3rd",  label: "Year PhD" },
      { value: "8",    label: "Publications" },
      { value: "4",    label: "Conferences" },
      { value: "2",    label: "Awards" },
    ],
  },

  // ── Research ──────────────────────────────────────────────
  research: [
    {
      icon: "🌑",
      title: "Black Hole — Galaxy Co-evolution",
      description: "Investigating how AGN feedback regulates star formation in host galaxies at z > 2, using multi-wavelength data from JWST and ALMA.",
      tag: "Active project",
    },
    {
      icon: "🌌",
      title: "Large-Scale Structure & Voids",
      description: "Mapping cosmic voids and filaments in the z~1 universe using photometric redshift surveys to constrain dark energy models.",
      tag: "Ongoing",
    },
    {
      icon: "💫",
      title: "Gravitational Wave Astrophysics",
      description: "Statistical analysis of compact binary merger rates and their implications for r-process nucleosynthesis and the cosmic chemical evolution.",
      tag: "MSc legacy",
    },
    {
      icon: "🔥",
      title: "Gamma-Ray Burst Environments",
      description: "Characterising the host galaxy environments of long GRBs as tracers of star formation and metallicity in the distant universe.",
      tag: "Collaboration",
    },
  ],

  // ── Publications ──────────────────────────────────────────
  publications: [
    {
      year: 2025,
      title: "AGN Feedback and Quenching Efficiency in Massive Galaxies at z = 2–3",
      authors: "Mercer, A., Vasquez, E., Chen, L., et al.",
      journal: "The Astrophysical Journal Letters, 943, L18",
      arxiv: "#",
      doi: "#",
    },
    {
      year: 2024,
      title: "Cosmic Void Statistics and Dark Energy Constraints from DESI DR1",
      authors: "Mercer, A., Patel, R., Okonkwo, S.",
      journal: "Monthly Notices of the Royal Astronomical Society, 521, 4892",
      arxiv: "#",
      doi: "#",
    },
    {
      year: 2023,
      title: "Binary Neutron Star Merger Rates from LIGO-Virgo O3 and Chemical Evolution Implications",
      authors: "Mercer, A., Thompson, K.",
      journal: "Astronomy & Astrophysics, 675, A54",
      arxiv: "#",
      doi: "#",
    },
  ],

  // ── CV / Timeline ─────────────────────────────────────────
  cv: {
    downloadLink: "#",   // path to your CV PDF, e.g. "assets/cv.pdf"

    education: [
      { year: "2022 — Present", role: "PhD in Astrophysics",      place: "University of the Stars" },
      { year: "2020 — 2022",    role: "MSc Physics (Distinction)", place: "University of Northfield" },
      { year: "2017 — 2020",    role: "BSc Physics (First Class)", place: "University of Northfield" },
    ],

    experience: [
      { year: "2023 — Present", role: "Teaching Assistant", place: "Intro to Astrophysics & Observational Methods" },
      { year: "Summer 2023",    role: "Research Intern",   place: "ESO, Garching" },
    ],

    technicalSkills: [
      "Python", "NumPy / SciPy", "Astropy", "CASA", "IRAF",
      "SQL", "LaTeX", "Git", "HEASoft", "GALFIT",
      "Bayesian inference", "MCMC",
    ],

    observationalSkills: [
      "JWST", "ALMA", "VLT / X-shooter", "Chandra", "XMM-Newton", "VLA",
    ],

    awards: [
      { year: "2024", role: "Best PhD Talk",        place: "National Astronomy Meeting" },
      { year: "2022", role: "STFC PhD Studentship",  place: "Full funding award" },
    ],
  },

  // ── Blog Posts ────────────────────────────────────────────
  blog: [
    {
      emoji: "🌑",
      gradient: "b1",           // CSS class: b1, b2, or b3
      date: "March 2025",
      title: "What JWST Is Teaching Us About the First Black Holes",
      excerpt: "New observations are revealing supermassive black holes that seem too big, too soon — challenging everything we thought we knew about early cosmic growth.",
      tag: "Black holes",
      link: "#",
    },
    {
      emoji: "✨",
      gradient: "b2",
      date: "January 2025",
      title: "A Beginner's Guide to Gravitational Waves",
      excerpt: "Ripples in space-time, merging neutron stars, and the most precise detectors ever built. Here's what gravitational wave astronomy is all about.",
      tag: "Explainer",
      link: "#",
    },
    {
      emoji: "🌌",
      gradient: "b3",
      date: "November 2024",
      title: "The Cosmic Web: Why Empty Space Isn't Really Empty",
      excerpt: "Voids, filaments, and galaxy clusters — the universe has a vast hidden skeleton, and we're only beginning to map it in detail.",
      tag: "Cosmology",
      link: "#",
    },
  ],

  // ── Contact ───────────────────────────────────────────────
  contact: {
    description: "I'm always happy to discuss research ideas, collaborations, or science communication opportunities. Feel free to reach out!",
    email: "a.mercer@university.ac.uk",
    social: [
      { icon: "🔬", label: "ORCID",       url: "#" },
      { icon: "📄", label: "arXiv",       url: "#" },
      { icon: "🐙", label: "GitHub",      url: "#" },
      { icon: "💼", label: "LinkedIn",    url: "#" },
      { icon: "🐦", label: "Twitter / X", url: "#" },
    ],
  },

  // ── Footer ────────────────────────────────────────────────
  footer: "© 2025 Alex Mercer · Astrophysics PhD · Built with care and a little dark matter",
};
