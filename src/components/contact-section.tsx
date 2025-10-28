'use client'

import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { Button } from './ui/button'
import { siteConfig } from '@/lib/site-config'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, ContactFormSchema } from '@/lib/schema'
import { sendEmailAction } from '@/lib/actions'
import { toast } from 'sonner'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { ErrorLine } from './ui/error-line'
import { Textarea } from './ui/textarea'
import { Icons } from './icons'
import { useSectionInView } from '@/hooks/use-section-in-view'

export default function ContactSection() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{" "}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href={siteConfig.links.mailTo}>
                {siteConfig.contact.email}
              </Link>
            </Button>{" "}
            or through this form.
          </>
        }
      />
      {/* <ContactForm /> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          ease: "easeOut",
        }}
        className="flex flex-row gap-2 items-center justify-center"
      >
        <Button asChild size="lg">
          <Link href={siteConfig.links.mailTo}>
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="flex" asChild>
          <a href={siteConfig.links.cvPdf} download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href={siteConfig.links.linkedin}
            aria-label="Linkedin"
            target="_blank"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        {/* <Button variant="outline" size="icon" asChild>
          <Link
            href={siteConfig.links.github}
            aria-label="Github"
            target="_blank"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button> */}
      </motion.div>
    </motion.section>
  );
}
