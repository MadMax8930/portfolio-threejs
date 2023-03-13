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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    angular,
    java,
    database,
    python,
    airbnb,
    machinima,
    simplon,
    simplon_bis,
    bugali,
    carrent,
    jobit,
    tripguide,
    threejs,
    postgresql,
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
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Postgres",
      icon: postgresql
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
        "I motivated, but Max proved me wrong.",
      name: "Soufiane Rouass",
      designation: "COO",
      company: "Simplon.co",
      image: "https://s4.aconvert.com/convert/p3r68-cdx67/aryo8-w94wk.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Max does.",
      name: "Claire Riollier",
      designation: "CXO",
      company: "Allianz",
      image: "https://s4.aconvert.com/convert/p3r68-cdx67/aa1nu-ywv9z.jpg",
    },
    {
      testimonial:
        "That personal touch of yours makes the difference. I want this UI pushed to Prod asap!",
      name: "Eric Groise",
      designation: "CTO",
      company: "Bugali",
      image: "https://s4.aconvert.com/convert/p3r68-cdx67/a4xr2-x9skc.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };