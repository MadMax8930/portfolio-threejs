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
    airbnb,
    machinima,
    simplon,
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
    crypto_project,
    twitter_project,
    carhub_project,
    youtube_project,
    airbnb_project,
    fitness_project,
    sneakers_project,
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
      name: "Java",
      icon: java,
    },
   //  {
   //    name: "git",
   //    icon: git,
   //  },
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
      name: "Python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Content Creator",
      company_name: "Machinima",
      icon: machinima,
      iconBg: "#383E56",
      date: "Mar 2014 - Dec 2019",
      points: [
        "Owning a Youtube partnership.",
        "Running a gaming channel with over 450K subscribers and 80M views.",
        "Creating entertaining video content with a perfectly synchronized audio.",
        "Testing products in alpha stage before release.",
      ],
    },
    {
      title: "Market Coordinator",
      company_name: "Airbnb",
      icon: airbnb,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Oct 2020",
      points: [
        "Managing owners putting their properties up to rent.",
        "Analyzing market trends and customers' behavior.",
        "Crafting innovative marketing strategies.",
        "Running daily operations with partners, ensuring the delivery of an exceptional service.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Simplon",
      icon: simplon_bis,
      iconBg: "#383E56",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Modeling, conceptualizing and managing SQL databases.",
        "Developing client-server applications according to specifications.",
        "Securing websites and authenticating users across different services.",
        "Building CI/CD pipelines and deploying web applications.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Bugali",
      icon: bugali,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Nov 2022",
      points: [
        "Developing and maintaining web applications using React Typescript, Node.js and Docker.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and optimizing SEO performance.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
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
        "Cryptocurrency application that fetches data from a coin ranking API, displays various news articles and shows evolution charts in the reference to the selected token.",
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
      image: crypto_project,
      source_code_link: "https://github.com/MadMax8930/crypto-redux",
    },
    {
      name: "Twitter Clone",
      description:
        "Social app that once authenticated allows users to post tweets, reply to tweets, like tweets with notification trigger and follow other users saved in a mongoDB database.",
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
      image: twitter_project,
      source_code_link: "https://github.com/MadMax8930/twitter-clone",
    },
    {
      name: "Fitness Site",
      description:
        "Workout website that allows to search gym exercises by targeting a specific body part, show how to do it with GIF illustrations and even fetch different video tutorials from YT.",
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
      image: fitness_project,
      source_code_link: "https://github.com/MadMax8930/fitness-app",
    },
    {
      name: "Car Showcase",
      description:
        "Next.js server-side rendered app that fetches from an API different car information like brands, models, fuel-type, displays data in modals with search and filtering capabilities.",
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
      image: carhub_project,
      source_code_link: "https://github.com/MadMax8930/nextjs-car-showcase",
    },
    {
      name: "Sneakers App",
      description:
        "Web scraping application giving people info about the latest sneaker releases. Allowing users to 'cop' items, leave comments and receive notifications directly on their emails.",
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
      image: sneakers_project,
      source_code_link: "https://github.com/MadMax8930/snkrs-app",
    },
    {
      name: "Airbnb Replica",
      description:
        "M.E.R.N project with authentication, just like the original one, this website allows users to create new listings as hosts, book properties and view its information on their profile page.",
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
      image: airbnb_project,
      source_code_link: "https://github.com/MadMax8930/mern-airbnb",
    },
  ];
  
  export { services, technologiesForDesktop, technologiesForMobile, experiences, testimonials, projects };