import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cpp
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Coding Enthusiast",
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
      name: "Spring Boot",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "DRDO",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Researching and simulation amplifier on input and output parameters.",
        "Collaborating with cross-functional teams including designers and scientists for the parameters",
        "Simulating and testing the circuits for various parameter and senstivity",
        "Learning the research and development of BJT transistors and simulations on software for input and output parameters",
      ],
    },
    
    {
      title: "Associate Software Engineer",
      company_name: "Cyfuture India Pvt Ltd",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using Java Spring Boot and Spring MVC framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I an inquisitive friend to work with and learn from and with.",
      name: "Karmanya Sharma",
      designation: "SDE",
      company: "Big Basket",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      testimonial:
        "I've never met a web developer loves to learn and think out of the box solutions",
      name: "Aditya Sharma",
      designation: "SDE",
      company: "Optum",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "A great colleague to learn and work with and brainstorm on problems.",
      name: "Pradeep Rathore",
      designation: "ASE",
      company: "Cyfuture",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Foodie Zone",
      description:
        "Discover a robust Full Stack web application powered by Spring Boot for the backend and React for the frontend, offering seamless integration with role-based authorization and authentication through Java Spring Security. Experience secure payment gateway integration and explore an intuitive Admin Panel for role-based access management, ensuring a comprehensive and secure user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://https://github.com/vishwdeep2001/FoodDelivery.com/",
    },
    
    {
      name: "Sorting Visualizer",
      description:
        "Explore our Python web application showcasing two essential sorting algorithms, Insertion Sort and Bubble Sort. Witness the visual representation of these algorithms in action, providing insights into their functionality and performance. Choose the array size and order preference, whether ascending or descending, to delve into the intricacies of sorting techniques (Insertion Sort and Bubble Sort). ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Numpy",
          color: "green-text-gradient",
        },
        {
          name: "Pandas",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/vishwdeep2001/SortingVisualizer",
    },
    {
      name: "A* Path Finding Visualizer",
      description:
        "Experience a Python-based Visualizer program leveraging Python and its libraries to illustrate the intricacies of the renowned A* Algorithm, a prominent pathfinding technique. Users can designate the start and end points on a grid, marking obstacles as desired. The program then vividly showcases the pathfinding process, highlighting the path using distinct colors for clarity and insight.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Numpy",
          color: "green-text-gradient",
        },
        {
          name: "Pygame",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/vishwdeep2001/Path-visualizer-A-Algo",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };