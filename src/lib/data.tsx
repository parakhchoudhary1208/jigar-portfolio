import { Icons } from '@/components/icons'
import { Experience, NavLink, Project, Skill } from './types'

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Case Studies",
    href: "#case-studies",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    img: "assets/images/stuvio.png",
    title: "Stuvio",
    bgColor: "bg-white",
    className: "bg-white w-[90%] h-auto object-cover object-center",
    subTitle: "Operations & SEO Growth",
    result: [
      { percent: "80%", text: "Organic Growth" },
      { percent: "40%", text: "Team Efficiency" },
    ],
    description:
      "Transforming team operations and digital presence for sustained growth",
    links: {
      preview: "https://www.stuvio.co",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/mitl.avif",
    title: "MITL Digital Transformation",
    bgColor: "bg-white",
    className: "",
    subTitle: "Industrial Township Platform",
    result: [
      { percent: "65%", text: "User Engagement" },
      { percent: "30%", text: "Faster Response" },
    ],
    description:
      "Streamlining digital presence and enhancing stakeholder engagement for a state-led industrial township",
    links: {
      preview: "https://www.mitl.org.in",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/camlin.webp",
    title: "Kokuyo Camlin",
    bgColor: "bg-white",
    className: "scale-y-90",
    subTitle: "Industrial Township Platform",
    result: [
      { percent: "8.5L+", text: "Visitors in 4 months" },
      { percent: "153%", text: "YoY increase in active users" },
    ],
    description:
      "Working together, we built a first-of-its-kind artist platform that blends a vibrant community space with an e-commerce store.",
    links: {
      preview: "https://www.kokuyocamlin.com/camel/",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/drone.avif",
    bgColor: "bg-white",
    title: "RRP Drones",
    className: "",
    subTitle: "Experience-Driven Website",
    result: [
      { percent: "2×", text: "User Engagement" },
      { percent: "45%", text: "Demo Signups" },
    ],
    description:
      "Creating an immersive digital experience through innovative scroll-based design",
    links: {
      preview: "https://www.rrpdrones.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/electronics.avif",
    title: "RRP Electronics",
    bgColor: "bg-black",
    className: "w-auto h-full",
    subTitle: "Digital Platform Launch",
    result: [{ percent: "120%", text: "User Acquisition" }],
    description:
      "Orchestrated a multi-channel digital launch for consumer electronics.",
    links: {
      preview: "https://www.rrpelectronics.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/defense.avif",
    title: "RRP Defense Website",
    bgColor: "bg-white",
    className: "h-full w-auto",
    subTitle: "Corporate Website",
    result: [{ percent: "100%", text: "On-Time Delivery" }],
    description:
      "Developed a secure and modern business website to strengthen brand credibility and client communication.",
    links: {
      preview: "https://www.rrpdefense.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/shapoorji.png",
    title: "Shapoorji Pallonji",
    bgColor: "bg-[#fff]",
    className: "h-full w-auto",
    subTitle: "Real Estate",
    result: [{ percent: "2.3x", text: "Increase in leads " }],
    description:
      "Building a seamless digital experience for modern real estate exploration.",
    links: {
      preview: "https://www.shapoorjirealestate.com/",
      github: "#",
      githubApi: "#",
    },
  },
  {
    img: "assets/images/mm.png",
    title: "Magnetic Maharashtra",
    bgColor: "bg-[#fff]",
    className: "w-[90%] h-auto",
    subTitle: "Summit Website",
    description:
      "Currently in final development phase — focused on performance, scalability, and user experience for the upcoming launch.",
    links: {
      preview: "https://mm-opal.vercel.app",
      github: "#",
      githubApi: "#",
    },
  },
] as const;


export const experiencesData: Experience[] = [
  {
    title: "Project Coordinator",
    company: "Stuvio Digital",
    description:
      "Delivered 10+ digital projects across technology, logistics, real estate, education, and service industries, tailoring strategies to client goals and user needs. \n\n Collaborated with UI/UX designers, developers, and SEO specialists to create user-centric digital experiences and optimize product performance \n\n Led AI-driven product initiatives, managing timelines, features, and user journeys for tools like Brello and other automation-based applications \n\n Oversaw operations and resource planning, including workflow optimisation, software management, and technical troubleshooting \n\n Contributed to SEO growth for Stuvio and its clients, improving organic traffic by 80%+ and achieving top-page Google rankings for multiple high-competition keywords, resulting in measurable performance gains.",
    period: "Aug 2025 – Present",
    // technologies: ['React', 'TypeScript', 'AWS', 'GraphQL', 'Kubernetes'],
  },
  {
    title: "Project Coordinator",
    company: "Boppo Technologies",
    description:
      "Acted as the primary point of contact for key clients, ensuring clear communication and satisfaction. \n\n Led web app and UI/UX design projects across healthcare, entertainment, and quick commerce sectors.",
    period: "June 2024 - Aug 2024",
    // technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
  },
  {
    title: "Project Executive",
    company: "Bombay Design Centre",
    description:
      "Managed large-scale digital and SEO projects for Shapoorji Pallonji Group, Kokuyo Camlin, Sterling and Wilson, Joyville Homes, and Shapoorji Real Estate, delivering design-driven solutions that aligned with business objectives and enhanced online visibility. \n\n Monitored account performance, analyzed trends, and implemented improvements. \n\n Coordinated with vendors and internal teams, ensuring timely project delivery and iterative improvements. \n\n Worked closely with cross-functional teams, bridging design, technology, and business to deliver seamless digital experiences.",
    period: "2022 Jan - 2022 Jul",
    // technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: "Founder & Project Lead",
    company: "Hitech Coders",
    description:
      "Founded and managed a digital solutions startup delivering high-impact projects across multiple industries. \n\n Led end-to-end project delivery from requirement gathering and PRD creation to supervising UI/UX and development for timely execution. \n\n Built and maintained strong client relationships through strategic guidance and proactive problem-solving. \n\n Oversaw operations including budgeting, resource allocation, and technical troubleshooting to maintain delivery standards.",
    period: "June 2019 - June 2022",
    // technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
];

export const skillsData: Skill[] = [
  { name: "Jira" },
  { name: "Trello" },
  { name: "GanttPro" },
  { name: "Zoho Projects" },
  { name: "Slack" },
  { name: "Microsoft Project" },
  { name: "Google Workspace" }
];
