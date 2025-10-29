import React from 'react'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-5 md:px-10">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
      </div>
      {/* Desktop: Theme Toggle */}
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  )
}
