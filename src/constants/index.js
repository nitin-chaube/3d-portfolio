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
    blogs,
    dojoblogs,
    portfoliowebsite,
    threejs,
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
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
  ];
  
  const experiences = [
    {
      title: "NONE",
      company_name: "NONE",
      icon: creator,
      iconBg: "#383E56",
      date: "NONE",
      points: [
        "---------",
        "---------",
        "---------",
        "---------",
      ],
    },
    {
      title: "NONE",
      company_name: "NONE",
      icon: creator,
      iconBg: "#383E56",
      date: "NONE",
      points: [
        "---------",
        "---------",
        "---------",
        "---------",
      ],
    },
    {
      title: "NONE",
      company_name: "NONE",
      icon: creator,
      iconBg: "#383E56",
      date: "NONE",
      points: [
        "---------",
        "---------",
        "---------",
        "---------",
      ],
    },
    {
      title: "NONE",
      company_name: "NONE",
      icon: creator,
      iconBg: "#383E56",
      date: "NONE",
      points: [
        "---------",
        "---------",
        "---------",
        "---------",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "NONE",
      name:"-----",
      designation: "-----",
      company: "-----",
      image: creator,
    },
    {
      testimonial: "NONE",
      name:"-----",
      designation: "-----",
      company: "-----",
      image: creator,
    },
    {
      testimonial: "NONE",
      name:"-----",
      designation: "-----",
      company: "-----",
      image: creator,
    },
    {
      testimonial: "NONE",
      name:"-----",
      designation: "-----",
      company: "-----",
      image: creator,
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
      " Designed, developed and deployed a fully functional React Js, React Three and React Three Fiber based 3D portfolio website using multiple 3D elements and libraries",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "json-server",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfoliowebsite,
      source_code_link: "https://github.com/nitin-chaube",
    },
    {
      name: "Blog Website",
      description:
        "Web-based platform that allows users to read, add, and delete blogs from various authors, providing a convenient and efficient solution for a simple blog website.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "json-server",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: blogs,
      source_code_link: "https://github.com/nitin-chaube",
    },
    {
      name: "Dojo Blogs",
      description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "json-server",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dojoblogs,
      source_code_link: "https://github.com/nitin-chaube",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };