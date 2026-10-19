"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import type { Project } from "@/data/projects";

interface CaseStudyContentProps {
  project: Project;
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* Back button + Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-12 bg-charcoal-950">
        <div className="section-container">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-charcoal-400 hover:text-amber-400 text-sm font-medium mb-8 transition-colors"
              id="back-to-portfolio"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"
                >
                  {tag}
                </span>
              ))}
              {project.status === "in-progress" && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  In Progress
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-50 mb-3">
              {project.title}
            </h1>
            <p className="text-charcoal-400 text-lg">{project.location}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16 md:pb-24 bg-charcoal-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.images.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer w-full ${
                    i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                  id={`gallery-image-${i}`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} - photo ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20 md:pb-28 bg-charcoal-950">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Narrative */}
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-charcoal-50 mb-6">
                About This Project
              </h2>
              <p className="text-charcoal-300 leading-relaxed text-lg">
                {project.narrative}
              </p>
            </Reveal>

            {/* Sidebar */}
            <Reveal delay={0.2}>
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="font-heading font-semibold text-charcoal-50 mb-5">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">Location</p>
                    <p className="text-charcoal-200 text-sm">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">Category</p>
                    <p className="text-charcoal-200 text-sm capitalize">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-1">Status</p>
                    <p className="text-charcoal-200 text-sm capitalize">{project.status.replace("-", " ")}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-charcoal-500 text-xs uppercase tracking-wider mb-3">
                      Materials Used
                    </p>
                    <ul className="space-y-2">
                      {project.materialsUsed.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-charcoal-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal-950/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-charcoal-900 flex items-center justify-center text-charcoal-300 hover:text-white transition-colors"
              onClick={() => setLightboxIndex(null)}
              id="lightbox-close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Nav buttons */}
            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-charcoal-900/80 flex items-center justify-center text-charcoal-300 hover:text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                id="lightbox-prev"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {lightboxIndex < project.images.length - 1 && (
              <button
                className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-charcoal-900/80 flex items-center justify-center text-charcoal-300 hover:text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                id="lightbox-next"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images[lightboxIndex]}
                alt={`${project.title} - full view ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
              />
            </motion.div>

            {/* Counter */}
            <p className="absolute bottom-6 text-charcoal-500 text-sm">
              {lightboxIndex + 1} / {project.images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner />
    </>
  );
}
