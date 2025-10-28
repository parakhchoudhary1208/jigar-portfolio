import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import ExperienceSection from '@/components/experience-section'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import SectionDivider from '@/components/section-divider'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-5 md:px-10">
        <Header />
        <HeroSection />
        <AboutSection />
        {/* <SectionDivider />
        <SkillsSection/> */}
        {/* <SectionDivider />
        <ExperienceSection /> */}
        <SectionDivider />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
      {/* Desktop: Theme Toggle */}
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  )
}
