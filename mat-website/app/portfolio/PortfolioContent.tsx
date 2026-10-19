"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { projects, type ProjectCategory } from "@/data/projects";

type FilterOption = "all" | ProjectCategory;

const filters: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
];

export default function PortfolioContent() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative">
          <Reveal>
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-50 mb-5">
              Portfolio
            </h1>
            <p className="text-charcoal-400 max-w-2xl text-lg leading-relaxed">
              Every project tells a story of design, craftsmanship, and transformation. Browse our work across residential and commercial spaces.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-charcoal-950">
        <div className="section-container">
          {/* Category Filter */}
          <Reveal>
            <div className="flex justify-center gap-2 mb-14">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.value
                      ? "bg-amber-500 text-charcoal-950"
                      : "bg-charcoal-900 text-charcoal-400 hover:bg-charcoal-800 hover:text-charcoal-200"
                  }`}
                  id={`filter-${filter.value}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block relative overflow-hidden rounded-2xl aspect-[4/3]"
                    id={`project-${project.slug}`}
                  >
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Status badge */}
                    {project.status === "in-progress" && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-amber-400 text-[10px] font-medium uppercase tracking-wider">
                          In Progress
                        </span>
                      </div>
                    )}

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase tracking-wider text-amber-400 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-heading font-semibold text-charcoal-50 text-lg mb-1">
                        {project.title}
                      </h3>
                      <p className="text-charcoal-400 text-sm">
                        {project.location}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CtaBanner
        headline="Like what you see?"
        subtext="Let's create something remarkable for your space."
      />
    </>
  );
}
