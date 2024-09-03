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
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Back-end Developer",
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
];

const experiences = [
  {
    title: "INTERNSHIP: Full-Stack Developer",
    company_name: "??????",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2025 - Jun 2025",
    points: [
      "Developing and maintaining web applications using Larvel,Spring Boot,Vue.js,Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "INTERNSHIP: Laravel Native Developer",
    company_name: "Cofat",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developing a web applications using Laravel and other technologies to Company COFAT.",
      "Collaborating with my supervisor(The software engineering of Cofat) to create high-quality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to my supervisor.",
    ],
  },
  {
    title: "INTERNSHIP: Data Science and AI",
    company_name: "Tunisie Telecom",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Developed a program to analyze data from the database and predict churn using Jupyter Notebook and Python.",
      "Collaborating with my supervisor and my colleague to create this Programme.",
      "Conducted thorough data analysis and preprocessing to ensure accurate predictions.",
      "Participating in code reviews and providing constructive feedback to my supervisor.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Upwork,fiver,freelance,mosta9el...",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developed a web applications using wordpress , desgin the Interface using adobe xd and making Logo using Adobe Photoshop.",
      "Worked on various projects including design, WordPress websites, and video editing.",
      "Ensured responsive design and cross-browser compatibility in web applications.",
     
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Souhail proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met an intern who truly attention to detail consistently exceed expectations.",
    name: "Walid Gabteni",
    designation: "Software Engineer",
    company: "Cofat",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Souhail is not just a talented developer, but also an incredibly supportive friend. His willingness to help others and share his knowledge has made a huge difference in our learning experience. Collaborating with him is always a pleasure.",
    name: "Ahlem Dridi",
    designation: "Student ",
    company: "Iset",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Application of Internship",
    description:
      "An online platform connecting students with internship opportunities while allowing companies to easily post and manage their internship offers.",
    tags: [
      {
        name: "vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "springBoot",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stock Mangement",
    description:
      "A web application designed for Cofat to efficiently manage and track stock inventory in real-time.",
    tags: [
      {
        name: "Larvel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gaming Website Design",
    description:
      "Responsive gaming website created using Adobe XD. The design is tailored for three different screen sizes: mobile, tablet, and desktop. This project aims to showcase a visually appealing and user-friendly.",
    tags: [
      {
        name: "AdobeXd",
        color: "blue-text-gradient",
      },
      {
        name: "AdobePhotoshop",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
