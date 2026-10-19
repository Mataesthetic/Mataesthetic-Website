"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { getFeaturedProject } from "@/data/projects";

export default function FeaturedProject() {
  const project = getFeaturedProject();
  if (!project) return null;

  return (
    <section className="section-padding bg-charcoal-900/30">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Featured Project
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-50">
              {project.title}
            </h2>
            <p className="text-charcoal-400 mt-3">{project.location}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Images Grid */}
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-3">
              {project.images.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl ${
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} - view ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Content */}
          <Reveal direction="right" delay={0.2}>
            <div className="lg:pl-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-charcoal-300 leading-relaxed mb-8">
                {project.narrative}
              </p>

              {/* Materials */}
              <div className="mb-8">
                <h4 className="text-sm font-heading font-semibold text-charcoal-200 uppercase tracking-wider mb-3">
                  Materials Used
                </h4>
                <ul className="space-y-2">
                  {project.materialsUsed.map((material) => (
                    <li
                      key={material}
                      className="flex items-center gap-3 text-charcoal-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="btn-primary"
                id="featured-project-link"
              >
                View Full Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
