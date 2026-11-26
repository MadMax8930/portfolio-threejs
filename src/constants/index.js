import {
    designer,
    backend,
    creator,
    frontend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    angular,
    java,
    database,
    python,
    nextjs,
    express,
    simplon_bis,
    bugali,
    threejs,
    postgresql,
    mongodb,
    eric,
    soufiane,
    soufiane_bw,
    claire,
    claire_bw,
    crypto_project_400,
    crypto_project_800,
    twitter_project_400,
    twitter_project_800,
    carhub_project_400,
    carhub_project_800,
    fitness_project_400,
    fitness_project_800,
    sneakers_project_400,
    sneakers_project_800,
    airbnb_project_400,
    airbnb_project_800,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Graphic Designer",
      icon: designer,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologiesForDesktop = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "figma",
      icon: figma,
    },
   //  {
   //    name: "Tailwind CSS",
   //    icon: tailwind,
   //  },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: express,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Postgres",
      icon: postgresql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const technologiesForMobile = [
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: express,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Engineer & Independent AI Builder",
      company_name: "Self-employed | Bangkok, Thailand",
      icon: null,
      iconSymbol: "ai",
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Building full-stack applications from scoping and architecture through backend, database design and deployment.",
        "2025-present: Independent AI engineering, including AI agents, workflow automation, LLM integrations, AI-powered applications, software architecture and cinematic production workflows.",
        "Integrating OpenAI and Anthropic APIs with production prompts, structured outputs, tools and agentic flows.",
        "Concurrent online English tutoring through Preply, working with international learners in a multilingual environment.",
      ],
    },
    {
      title: "Full-Stack Web Developer",
      company_name: "Bugali | Paris, France",
      icon: bugali,
      iconSymbol: "code",
      iconBg: "#E6DEDD",
      date: "2021 - 2022",
      points: [
        "Designed database schemas and optimized queries and indexes.",
        "Developed full-stack client/server features and integrated REST APIs.",
        "Collaborated in Agile Scrum and maintained CI/CD pipelines.",
        "Debugged and refactored application code for reliability and performance.",
      ],
    },
    {
      title: "Market Coordinator - Airbnb Marketplace",
      company_name: "TELUS International | Cork, Ireland",
      icon: null,
      iconSymbol: "marketplace",
      iconBg: "#383E56",
      date: "2019 - 2020",
      points: [
        "Analyzed marketplace operations, bookings, occupancy and pricing trends.",
        "Developed dynamic pricing strategies to improve host revenue.",
        "Coordinated cross-functional operations and resolved marketplace issues.",
      ],
    },
    {
      title: "Content Creator & Digital Producer - Russkhof",
      company_name: "Independent channel | Machinima partnership",
      icon: null,
      iconSymbol: "cinema",
      iconBg: "#383E56",
      date: "2012 - 2018",
      points: [
        "Grew an independent gaming channel to 450K+ subscribers and more than 80M views.",
        "Led creative direction and visual storytelling across the end-to-end production pipeline, including editing, audio and thumbnails.",
        "Managed channel SEO and audience analytics.",
        "Participated in pre-release alpha build testing with brand partners.",
      ],
    },
  ];

  const education = [
    {
      title: "Software Engineer Training",
      institution: "Simplon",
      icon: simplon_bis,
      iconSymbol: "graduation",
      iconBg: "#383E56",
      date: "2020 - 2022",
      details: "DWWM and CDA programs | RNCP levels 5 and 6",
    },
    {
      title: "Bachelor in Applied Mathematics and Computer Science",
      institution: "Université Paris Descartes",
      icon: null,
      iconSymbol: "university",
      iconBg: "#383E56",
      date: "2008 - 2011",
      details: "",
    },
    {
      title: "Scientific Baccalaureate, European Section",
      institution: "Lycée Voillaume, France",
      icon: null,
      iconSymbol: "school",
      iconBg: "#383E56",
      date: "2005 - 2008",
      details: "Graduated with honours",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Well done! You set yourself a goal and you achieved it. I knew I could count on you.",
      name: "Soufiane Rouass",
      designation: "COO",
      company: "Simplon",
      image: soufiane_bw,
    },
    {
      testimonial:
        "Nowadays not often a developer truly cares about their clients' success like you do.",
      name: "Claire Riollier",
      designation: "CXO",
      company: "Allianz",
      image: claire_bw,
    },
    {
      testimonial:
        "That UI personal touch of yours makes the difference. I want it pushed to Prod asap!",
      name: "Eric Groise",
      designation: "CTO",
      company: "Bugali",
      image: eric,
    },
  ];
  
  const projects = [
    {
      name: "Crypto Redux",
      description:
        "Cryptocurrency dashboard that retrieves market rankings and news, with token-specific price history charts for exploring market activity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "purple-text-gradient",
        },
        {
          name: "ant-design",
          color: "pink-text-gradient",
        },
      ],
      image: crypto_project_400,
      imageSrcSet: `${crypto_project_400} 400w, ${crypto_project_800} 800w`,
      source_code_link: "https://github.com/MadMax8930/crypto-redux",
    },
    {
      name: "Twitter Clone",
      description:
        "Authenticated social app where users can publish posts, reply, like content, follow accounts and receive notifications, with data stored in MongoDB.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: twitter_project_400,
      imageSrcSet: `${twitter_project_400} 400w, ${twitter_project_800} 800w`,
      source_code_link: "https://github.com/MadMax8930/twitter-clone",
    },
    {
      name: "Fitness Site",
      description:
        "Workout finder for searching exercises by body part, viewing GIF demonstrations and browsing related YouTube tutorials.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "orange-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: fitness_project_400,
      imageSrcSet: `${fitness_project_400} 400w, ${fitness_project_800} 800w`,
      source_code_link: "https://github.com/MadMax8930/fitness-app",
    },
    {
      name: "Car Showcase",
      description:
        "Server-rendered Next.js car discovery app with API-sourced vehicle information, search and filters for brands, models and fuel types.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "orange-text-gradient",
        },
        {
          name: "headless-ui",
          color: "pink-text-gradient",
        },
      ],
      image: carhub_project_400,
      imageSrcSet: `${carhub_project_400} 400w, ${carhub_project_800} 800w`,
      source_code_link: "https://github.com/MadMax8930/nextjs-car-showcase",
    },
    {
      name: "Sneakers App",
      description:
        "Sneaker release tracker that gathers release information and lets users save items, comment and receive email notifications.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
        {
          name: "mongoose",
          color: "green-text-gradient",
        },
      ],
      image: sneakers_project_400,
      imageSrcSet: `${sneakers_project_400} 400w, ${sneakers_project_800} 800w`,
      source_code_link: "https://github.com/MadMax8930/snkrs-app",
    },
    {
      name: "Airbnb Replica",
      description:
        "MERN rental marketplace prototype with authentication, host-created listings, property browsing and booking flows.",
      tags: [
        {
          name: "express",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: airbnb_project_400,
      imageSrcSet: `${airbnb_project_400} 400w, ${airbnb_project_800} 800w`,
      source_code_link: "https://github.com/MadMax8930/mern-airbnb",
    },
  ];
  
  export { services, technologiesForDesktop, technologiesForMobile, experiences, education, testimonials, projects };
