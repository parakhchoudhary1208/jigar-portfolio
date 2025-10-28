"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { Badge } from "./ui/badge";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function ProjectsSection() {
  const { ref } = useSectionInView("Case Studies");

  return (
    <section
      ref={ref}
      id="case-studies"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
          ease: "easeOut",
        }}
      >
        <SectionHeading
          heading="Case Studies"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projectsData.map((data, index) => (
          <motion.div
            key={data.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="flex flex-col rounded border p-4 cursor-pointer"
          >
            <Link
              href={data.links.preview}
              aria-label={data.title}
              target="_blank"
              className={`overflow-hidden ${data.bgColor}  rounded flex justify-center items-center aspect-video w-full`}
            >
              {/* <OptimizedVideo videoSrc={data.video} /> */}
              <img
                src={data.img}
                alt={data.title}
                className={`${data.className}`}
              />
            </Link>
            <h3 className="mt-4 text-xl font-medium">{data.title}</h3>
            <h3 className="mt-4 text-[16px] font-medium">{data.subTitle}</h3>
            <p className="text-muted-foreground mb-4 mt-1">
              {data.description}
            </p>
            {/* <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <Badge key={tech} variant={'outline'} size={'lg'}>
                  {tech}
                </Badge>
                ))}
                </div> */}
            <Badge variant={"outline"} size={"lg"}>
              Visit the Website
            </Badge>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function OptimizedVideo({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Create intersection observer to lazy load videos
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            // Only play when in viewport
            videoRef.current.play().catch((error) => {
              console.warn("Video autoplay failed:", error);
            });
          } else if (videoRef.current) {
            // Pause when out of viewport
            videoRef.current.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: "50px", // Start loading slightly before entering viewport
      }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      loop
      muted
      playsInline
      preload="none" // Don't preload videos to save bandwidth
      className="pointer-events-none mx-auto aspect-video w-full object-cover object-top"
      poster="" // Optional: add a poster image for better UX
    />
  );
}
