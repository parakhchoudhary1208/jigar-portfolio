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
  // {
  //   name: "Skills",
  //   href: "#skills",
  // },
  // {
  //   name: "Experience",
  //   href: "#experience",
  // },
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
    video: "assets/videos/chat-collector-demo.mp4",
    img: "assets/images/stuvio.png",
    title: "Stuvio",
    bgColor: "bg-white",
    className: "bg-white w-[90%] h-auto object-cover object-center",
    subTitle: "Operations & SEO Growth",
    description:
      "Transforming team operations and digital presence for sustained growth",
    links: {
      preview: "https://www.stuvio.co",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/magic-bento-demo.mp4",
    img: "assets/images/mitl.avif",
    title: "MITL Digital Transformation",
    bgColor: "bg-white",
    className: "",
    subTitle: "Operations & SEO Growth",
    description:
      "Streamlining digital presence and enhancing client engagement for a logistics leader",
    links: {
      preview: "https://www.mitl.org.in",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/chat-collector-demo.mp4",
    img: "assets/images/drone.avif",
    bgColor: "bg-white",
    title: "RRP Drones",
    className: "",
    subTitle: "Experience-Driven Website",
    description:
      "Creating an immersive digital experience through innovative scroll-based design",
    links: {
      preview: "https://www.rrpdrones.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/magic-bento-demo.mp4",
    img: "assets/images/electronics.avif",
    title: "RRP Electronics",
    bgColor: "bg-black",
    className: "w-auto h-full",
    subTitle: "Digital Platform Launch",
    description:
      "Orchestrating a multi-channel digital launch for consumer electronics",
    links: {
      preview: "https://www.rrpelectronics.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/chat-collector-demo.mp4",
    img: "assets/images/defense.avif",
    title: "RRP Defense Website",
    bgColor: "bg-white",
    className: "h-full w-auto",
    subTitle: "Corporate Development",
    description:
      "Managing secure corporate website development with strict compliance requirements",
    links: {
      preview: "https://www.rrpdefense.com",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/magic-bento-demo.mp4",
    img: "assets/images/mm.png",
    title: "Magnetic Maharashtra",
    bgColor: "bg-[#fff]",
    className: "w-[90%] h-auto",
    subTitle: "Summit Website",
    description:
      "Delivering large-scale event platform for government investment summit",
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
