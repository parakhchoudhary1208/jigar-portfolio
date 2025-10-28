import { navLinks } from '@/lib/data'

export type SectionName = (typeof navLinks)[number]['name']

export type Project = {
  video: string
  img: string
  title: string
  className: string
  bgColor: string
  subTitle: string
  description: string
  // technologies: string[]
  links: {
    preview: string
    github: string
    githubApi: string
  }
}

export type Experience = {
  title: string
  company: string
  description: string
  period: string
  // technologies: string[]
}

export type NavName = 'Home' | 'About' | 'Case Studies' | 'Contact'

export type NavLink = {
  name: NavName
  href: string
}

export type Skill = {
  name: string
}

