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
    tetris,
    threejs,
    postgresql,
    eric,
    soufiane,
    claire,
    replica,
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
        "Well done! You set yourself a goal and you achieved it. I knew I could count on you.",
      name: "Soufiane Rouass",
      designation: "COO",
      company: "Simplon.co",
      image: soufiane,
    },
    {
      testimonial:
        "Nowadays not often a developer truly cares about their clients' success like you do.",
      name: "Claire Riollier",
      designation: "CXO",
      company: "Allianz",
      image: claire,
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
      name: "Tetris",
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
      name: "Under Armour",
      description:
        "Replica of the Under Armour website. Fully responsive, similar to the original one. Agile work with three other devs, sections merged together. Deployed on netlify",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: replica,
      source_code_link: "https://under-armour-replica.netlify.app/",
    },
    {
      name: "Tetris",
      description:
        "My favorite childhood game recreated on vanilla js. Implementation of the playfield, shapes, collisions, block rotations, animated interactions with arrow keys. Try it yourself!",
      tags: [
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tetris,
      source_code_link: "https://tetris-in-js.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };