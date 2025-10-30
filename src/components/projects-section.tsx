"use client";
import React from "react";
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
          content="Here are some of my most recent digital transformation and website projects. Over the years, I’ve successfully managed and delivered numerous initiatives across industries — driving measurable business impact through strategy, design, and execution."
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
            className="flex flex-col justify-between rounded border p-4 cursor-pointer"
          >
            <div className="flex flex-col">
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
              <h3 className="mt-4 mb-2 text-xl font-medium">{data.title}</h3>
              {/* <h3 className="mt-4 text-[16px] font-medium">{data.subTitle}</h3> */}
              <p className="text-muted-foreground mb-2.5 mt-1">
                {data.description}
              </p>
              {data.result?.length ? (
                <ul className="text-muted-foreground mb-5 mt-2.5 text-sm gap-6 flex justify-start items-center">
                  {data.result.map((res, index) => (
                    <React.Fragment key={index}>
                      <li className="w-[45%] flex flex-col justify-center items-start">
                        {res.percent && <p>{res.percent}</p>}
                        <p>{res.text}</p>
                      </li>
                      {index !== (data.result?.length ?? 0) - 1 && (
                        <li className="w-0.5 h-10 bg-muted"></li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              ) : null}
            </div>

            {/* <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech) => (
                <Badge key={tech} variant={'outline'} size={'lg'}>
                  {tech}
                </Badge>
                ))}
              </div> */}
            <Badge link={`${data.links.preview}`} variant={"outline"} size={"lg"}>
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
