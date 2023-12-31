import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "Full Name : ",
    description: "Al Ashraful Islam Shorif",
  },

  {
    id: 2,
    title: "Age : ",
    description: "25 Years",
  },

  {
    id: 3,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 4,
    title: "Address : ",
    description: "Tejkunipara,Tejgoan,Dhaka",
  },

  {
    id: 5,
    title: "Phone : ",
    description: "01814458638",
  },

  {
    id: 6,
    title: "Email : ",
    description: "alashrafulislamshorif@gmail.com",
  },

  {
    id: 7,
    title: "Langages : ",
    description: "Bangla, English, Hindi",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "09/2019 - 06/2021",
    title: "Graphics Designer <span> Tech Square E-commerce shop </span>",
    desc: "<ul><li>Planning upcoming design for upcoming event.</li><li>Supervise all content for website.</li><li>Distributing works to the team members.</li><li>Assuring all banner quality and design before uploading on website</li></ul>",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "Computer Science & Engineering (CSE) <span> City University</span>",
    desc: "Completed my  B.Sc. Engineering in CSE from City University, Dhaka, Bangladesh ",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title:
      "Higher Secondary Certificate <span> Major General Mahmudul Hasan Adarsha College </span>",
    desc: "Completed my  Higher Secondary Certificate from Major General Mahmudul Hasan Adarsha College, Tangail, Bangladesh",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title:
      " Secondary School Certificate <span> Police Lines Adarsha High School </span>",
    desc: "Completed my Secondary School Certificate from Police Lines Adarsha High School, Tangail, Bangladesh",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "CSS",
    percentage: "70",
  },

  {
    id: 3,
    title: "Bootstrap",
    percentage: "80",
  },

  {
    id: 4,
    title: "TailWindCss",
    percentage: "80",
  },

  {
    id: 5,
    title: "JavaScript",
    percentage: "65",
  },

  {
    id: 6,
    title: "React",
    percentage: "65",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "HooBank",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, TailWindCss",
      },
      {
        icon: <FaGithub/>,
        title: "GitHub : ",
        desc: "https://github.com/nahyan007/bank_modern_app",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://snazzy-peony-f67183.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "GERICH Resturent",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, CSS",
      },
      {
        icon: <FaGithub/>,
        title: "GitHub : ",
        desc: "https://github.com/nahyan007/gerich-resturent-site",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://transcendent-taiyaki-7d2720.netlify.app//",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "GPT-3",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, CSS",
      },
      {
        icon: <FaGithub/>,
        title: "GitHub : ",
        desc: "https://github.com/nahyan007/gpt-3",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://all-about-gpt-3.netlify.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
