"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";
import Skills from "./skills";
import { skillsData } from "@/lib/data";
import { Badge } from "./ui/badge";

const skills = [
  {
    title: "Project Management",
    items: [
      "Client Servicing",
      "Project Planning",
      "Gantt Charts",
      "Negotiation",
      "Resource & Team Management",
      "Time Management",
      "Critical Thinking",
    ],
  },
  {
    title: "PM Tools",
    items: ["Zoho Projects", "Jira", "MS Office"],
  },
  {
    title: "Technical Skills",
    items: ["HTML", "CSS", "JavaScript", "SQL", "React"],
  },
  {
    title: "CMS Platforms",
    items: ["WordPress", "Shopify", "Wix", "Framer"],
  },
  {
    title: "Design & SEO",
    items: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Photoshop",
      "On-Page & Technical SEO",
    ],
  },
];

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <>
      <motion.section
        ref={ref}
        id="about"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175, ease: "easeOut" }}
        className="my-10 flex w-full flex-col items-center md:mb-20"
      >
        <SectionHeading heading="About Me" />
        <div className="-mt-5 max-w-2xl text-center leading-7">
          <p
            style={{ fontSize: "clamp(1rem, 0.951rem + 0.22vw, 1.125rem)" }}
            className="mb-0"
          >
            Certified ScrumMaster® with 5+ years in digital project and account
            management, leading teams to deliver seamless web, UI/UX, and
            SEO-driven projects that align design, technology, and business
            goals.
          </p>
          {/* <p>
            <Link
              className="underline-offset-4 hover:underline"
              href={siteConfig.links.contactForm}
            >
              contact
            </Link>{" "}
            me.
          </p> */}
        </div>
        {/* <div className="flex flex-wrap gap-2">
          {skillsData.map((skill) => (
            <Badge key={skill.name} variant={"outline"} size={"lg"}>
              {skill.name}
            </Badge>
          ))}
        </div> */}
        {/* <Skills /> */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="@container w-full h-fit flex flex-col items-center"
        >
          <div
            className="
              mt-8 grid w-full max-w-7xl
              grid-cols-1 md:grid-cols-6
              md:grid-rows-2
              gap-3 md:gap-4
              md:justify-stretch
            "
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                className={`
                  flex flex-col justify-between gap-10 rounded-xl border 
                  bg-gradient-to-br p-5 md:p-6
                  backdrop-blur-md
                  border-foreground/10
                  from-foreground/5
                  to-foreground/0
                  hover:border-foreground/20 
                  hover:bg-foreground/[0.06]
                  ${
                    index === 0
                      ? "md:col-span-2 md:row-span-2 w-full h-fit md:h-full"
                      : index >= 3
                        ? "@6xl:aspect-video md:col-span-3 @6xl:col-span-2 h-fit md:h-full row-span-1"
                        : "@6xl:aspect-video md:col-span-4 @6xl:col-span-2 h-fit md:h-full row-span-1"
                  }
                `}
              >
                <h3 className="mb-3 text-base md:text-lg font-semibold text-foreground/90">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 text-sm text-foreground/70">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full border 
                        px-2.5 py-1 text-xs md:text-sm backdrop-blur-sm
                        border-foreground/10
                        bg-foreground/5
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
