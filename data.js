// ============================================================
//  📝 SITE DATA — Edit this file to update your website!
//  All your personal info, research, publications, etc.
//  Just change the text below and reload the page.
// ============================================================

const SITE = {

  // ── Hero / About Me ───────────────────────────────────────
  hero: {
    badge: "PhD Researcher in Astrophysics",
    name: "Philippe Priolet",
    title: "Doctoral Candidate · Exozodiacal Dust & Optical Interferometry",
    university: "Université Grenoble Alpes · IPAG",
    bio: `Characterising dust in the inner regions of planetary systems using
          near and mid-infrared interferometry at the VLTI. My research combines
          multi-wavelength observations with radiative transfer modelling to
          understand exo-cometary activity and its implications for habitability.`,
    avatar: "images/profile_picture_web.jpg",   // path to profile photo (optimized for web)
  },

  about: {
    paragraphs: [
      `I'm a third-year PhD student in astrophysics at the Institut de Planétologie et d'Astrophysique de Grenoble (IPAG), supervised by Jean-Charles Augereau and Julien Milli. My work focuses on observing and modelling exozodiacal dust — the warm dust found in the inner regions of planetary systems — using optical interferometry at the ESO/VLTI.`,
      `Before my PhD, I completed my BSc and two MSc degrees in Physics and Astrophysics at Université Grenoble Alpes. During my master's, I worked on the Sparse Aperture Masking mode of VLT/SPHERE at the Laboratoire d'Astrophysique de Marseille and on the detection and characterisation of exozodiacal dust at IPAG.`,
      `Before studying physics, I had a strong interest in philosophy and wondered about our place in the universe. I also have a passion for science communication and outreach — organising public observing nights and writing accessible articles to share the wonders of astrophysics with everyone.`,
    ],
    stats: [
      { value: "3rd",  label: "Year PhD" },
      { value: "7",    label: "Publications" },
      { value: "8",    label: "Talks" },
      { value: "6",    label: "Outreach events" },
    ],
  },

  // ── Research ──────────────────────────────────────────────
  research: [
    {
      icon: "☄️",
      title: "Exozodiacal Dust around β Pictoris",
      description: "VLTI/MATISSE observations and modelling of the hot dust around β Pic, revealing sub-micron grains near the sublimation region, possibly misaligned with the outer disk, and a tentative second dust ring at ~1 au.",
      tag: "Published (submitted to A&A)",
    },
    {
      icon: "📊",
      title: "Correlation Matrices for VLTI/MATISSE",
      description: "Developing an empirical method to estimate correlation matrices in interferometric data — crucial for accurate parameter retrieval when studying faint circumstellar emission at the ~1% flux level.",
      tag: "Published (submitted to A&A)",
    },
    {
      icon: "💻",
      title: "pyGRaTeR — Radiative Transfer Code",
      description: "Building an open-source Python radiative transfer code for optically thin debris disks, using Mie theory and N-body simulation inputs to model dust thermal emission and scattering properties.",
      tag: "Current project",
    },
    {
      icon: "🔭",
      title: "Extreme Debris Disks: HD 113766, HD 172555 & η Crv",
      description: "Multi-wavelength study combining GRAVITY, MATISSE and PIONIER data to model exozodiacal dust in extreme debris disks — the first time all three VLTI instruments are used together for this purpose.",
      tag: "ESO visitor programme",
    },
  ],

  // ── Publications ──────────────────────────────────────────
  publications: [
    {
      year: 2025,
      title: "VLTI/MATISSE observations of the hot dust around β Pictoris. Observing faint objects with MATISSE",
      authors: "Priolet, P., Augereau, J.-C., Milli, J. et al.",
      journal: "Submitted to Astronomy & Astrophysics (under review)",
      arxiv: "#",
      doi: "",
    },
    {
      year: 2025,
      title: "The mid-infrared spectrum of β Pictoris b. First VLTI/MATISSE interferometric observations of an exoplanet",
      authors: "Houllé, M., Millour, F., Berio, P. et al.",
      journal: "Accepted for publication in A&A",
      arxiv: "https://arxiv.org/abs/2508.18366",
      doi: "",
    },
    {
      year: 2025,
      title: "Evidence for an Accretion Bridge in the DX Cha Circumbinary System from VLTI/MATISSE Observations",
      authors: "Juhász, A., Varga, J., Ábrahám, P. et al.",
      journal: "The Astrophysical Journal, 982, 36",
      arxiv: "#",
      doi: "#",
    },
    {
      year: 2025,
      title: "T CrA has a companion: First direct detection of T CrA B with VLTI/MATISSE",
      authors: "Varga, J., Matter, A., Millour, F. et al.",
      journal: "Astronomy & Astrophysics, 695, L21",
      arxiv: "#",
      doi: "#",
    },
    {
      year: 2025,
      title: "An interferometric mid-infrared study of the eruptive star binary Z CMa with MATISSE/VLTI",
      authors: "Lykou, F., Varga, J., Cruz-Sáenz de Miera, F. et al.",
      journal: "Accepted for publication in A&A",
      arxiv: "#",
      doi: "#",
    },
    {
      year: 2023,
      title: "Multiwavelength observations of the exo-cometary dust around β Pictoris",
      authors: "Priolet, P., Augereau, J.-C., Milli, J. et al.",
      journal: "SF2A Proceedings, 391",
      arxiv: "#",
      doi: "#",
    },
  ],

  // ── CV / Timeline ─────────────────────────────────────────
  cv: {
    downloadLink: "#",   // path to your CV PDF, e.g. "assets/cv.pdf"

    education: [
      { year: "2023 — 2026",    role: "PhD in Astrophysics",                place: "Université Grenoble Alpes, IPAG" },
      { year: "2022 — 2023",    role: "MSc Astrophysics",                   place: "Université Grenoble Alpes, PHITEM" },
      { year: "2021 — 2022",    role: "MSc Fundamental Research in Physics", place: "Université Grenoble Alpes, PHITEM" },
      { year: "2018 — 2021",    role: "BSc Physics",                        place: "Université Grenoble Alpes, PHITEM" },
    ],

    experience: [
      { year: "Oct — Dec 2025", role: "ESO Early Career Visitor",       place: "ESO Santiago, Chile" },
      { year: "2024",           role: "Teaching (Optics & Polarisation)", place: "Université Grenoble Alpes" },
      { year: "Feb — Aug 2023", role: "Research Intern (Exozodiacal dust)", place: "IPAG, Grenoble" },
      { year: "May — Aug 2022", role: "Research Intern (SAM/SPHERE)",   place: "Lab. d'Astrophysique de Marseille" },
    ],

    technicalSkills: [
      "Python (advanced)", "Radiative transfer", "Mie theory",
      "Interferometric modelling", "MCMC / Bayesian inference",
      "Jupyter", "LaTeX", "Git", "IDL (basic)", "C++ (basic)",
    ],

    observationalSkills: [
      "VLTI / MATISSE", "VLTI / GRAVITY", "VLTI / PIONIER",
      "VLT / SPHERE (SAM)", "SOPHIE (OHP)", "IRAM 30m",
    ],
  },

  // ── Blog Posts ────────────────────────────────────────────
  blog: {
    generalPublic: [
      {
        emoji: "🔭",
        gradient: "b2",
        date: "April 2026",
        title: "Introduction to Optical Interferometry",
        excerpt: "How combining light from multiple telescopes lets us see the universe in extraordinary detail — an introduction to the principles and science of optical interferometry.",
        tag: "Techniques",
        link: "blog/introduction-optical-interferometry.html",
        underConstruction: false,
      },
    ],
    technical: [
      {
        emoji: "📡",
        gradient: "b1",
        date: "April 2026",
        title: "Data Reduction with the MATISSE Pipeline",
        excerpt: "A step-by-step guide to reducing VLTI/MATISSE data — from raw files to calibrated visibilities, including tips for handling correlations in faint-source observations.",
        tag: "Tutorial",
        link: "blog/matisse-data-reduction.html",
        underConstruction: false,
      },
      {
        emoji: "⚙️",
        gradient: "b3",
        date: "April 2026",
        title: "Data Reduction with the GRAVITY Pipeline",
        excerpt: "A practical walkthrough of GRAVITY data reduction — from installing the pipeline to extracting calibrated interferometric observables for your science targets.",
        tag: "Tutorial",
        link: "blog/gravity-data-reduction.html",
        underConstruction: false,
      },
      {
        emoji: "💻",
        gradient: "b2",
        date: "April 2026",
        title: "Radiative Transfer Modelling with pyGRaTeR",
        excerpt: "Learn how to use pyGRaTeR to model the thermal emission and scattering properties of optically thin debris disks using Mie theory and customisable dust distributions.",
        tag: "Tutorial",
        link: "blog/using-pygrater.html",
        underConstruction: false,
      },
    ],
  },

  // ── Software & Tools ────────────────────────────────────────
  software: [
    {
      emoji: "💻",
      gradient: "b2",
      title: "pyGRaTeR",
      excerpt: "Open-source Python radiative transfer code for optically thin debris disks, using Mie theory and N-body inputs to model thermal emission and scattering.",
      tag: "Python",
      link: "software/pygrater.html",
      underConstruction: false,
    },
    {
      emoji: "📐",
      gradient: "b1",
      title: "Interferometric Modelling Tools",
      excerpt: "Custom Python scripts for fitting interferometric observables (visibilities, closure phases) with parametric disk models using MCMC/Bayesian inference.",
      tag: "Python",
      link: "software/interf-modelling.html",
      underConstruction: true,
    },
    {
      emoji: "🎯",
      gradient: "b3",
      title: "SAM Simulator",
      excerpt: "Sparse Aperture Masking simulation pipeline for VLT/SPHERE, developed during my M1 internship at LAM to characterise point-source detection limits.",
      tag: "Python",
      link: "software/sam-simulator.html",
      underConstruction: true,
    },
    {
      emoji: "📓",
      gradient: "b2",
      title: "Teaching Notebooks",
      excerpt: "Collection of Jupyter notebooks for optics and polarisation courses at Université Grenoble Alpes — interactive exercises for undergraduate students.",
      tag: "Jupyter",
      link: "software/teaching-notebooks.html",
      underConstruction: true,
    },
  ],

  // ── Resources & Links ─────────────────────────────────────
  resources: [
    {
      emoji: "⚙️",
      gradient: "b1",
      title: "Data Reduction Pipelines",
      excerpt: "Official ESO pipelines and community tools for reducing interferometric data from MATISSE, GRAVITY, PIONIER and more.",
      link: "resources/data-reduction-pipelines.html",
      underConstruction: false,
    },
    {
      emoji: "🔭",
      gradient: "b2",
      title: "Interferometry & VLTI",
      excerpt: "Documentation, manuals and reference material for the VLTI and optical/infrared interferometry in general.",
      link: "resources/interferometry-vlti.html",
      underConstruction: false,
    },
    {
      emoji: "📊",
      gradient: "b3",
      title: "Analysis & Modelling Tools",
      excerpt: "Software for observation planning, data visualisation, model fitting and image reconstruction in interferometry.",
      link: "resources/analysis-modelling-tools.html",
      underConstruction: false,
    },
    {
      emoji: "📚",
      gradient: "b1",
      title: "Databases & Archives",
      excerpt: "Astronomical databases, catalogues and archives for targets, photometry, spectra and observing logs.",
      link: "resources/databases-archives.html",
      underConstruction: false,
    },
    {
      emoji: "🎓",
      gradient: "b2",
      title: "Learning & References",
      excerpt: "Textbooks, lecture notes, schools and review articles for learning about interferometry and debris disks.",
      link: "resources/learning-references.html",
      underConstruction: false,
    },
  ],

  // ── Contact ───────────────────────────────────────────────
  contact: {
    description: "I'm always happy to discuss research ideas, collaborations, or science communication opportunities. Feel free to reach out!",
    email: "philippe.priolet@univ-grenoble-alpes.fr",
    social: [
      { icon: `<svg class="icon-svg" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM86.3 186.2H70.5V85.6h15.8v100.6zm-7.9-114c-5.5 0-9.3-4.1-9.3-9.2 0-5.2 3.9-9.2 9.5-9.2s9.3 4 9.3 9.2c0 5.1-3.8 9.2-9.5 9.2zm94.6 114h-15.8v-54.4c0-13.6-4.8-22.9-17.1-22.9-9.3 0-14.9 6.3-17.3 12.3-.9 2.2-1.1 5.2-1.1 8.2v56.8h-15.8s.2-92.1 0-101.6h15.8v14.4c2.1-3.2 5.8-7.8 14.2-7.8 0 0 .1 0 0 0h.1c16.3 0 28.5 10.6 28.5 33.5v61.5h-.5z" fill="currentColor"/></svg>`, label: "ORCID",       url: "#" },
      { icon: `<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.54 3.8L12 10.74 16.45 3.8h2.61L13.18 12l6.24 8.2h-2.61L12 13.26 7.19 20.2H4.58L10.82 12 4.93 3.8h2.61z" fill="currentColor"/></svg>`, label: "arXiv",       url: "#" },
      { icon: `<svg class="icon-svg" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>`, label: "GitHub",      url: "https://github.com/prioletp" },
      { icon: `<svg class="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg>`, label: "LinkedIn",    url: "#" },
    ],
  },

  // ── Footer ────────────────────────────────────────────────
  footer: "© 2026 Philippe Priolet · Astrophysics PhD · IPAG, Université Grenoble Alpes",
};
