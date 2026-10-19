"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Reveal from "./Reveal";
import { services } from "@/data/services";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function ServiceCards() {
  return (
    <section className="section-padding bg-charcoal-950">
      <div className="section-container">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-50 mb-4">
              Our Services
            </h2>
            <p className="text-charcoal-400 max-w-2xl mx-auto">
              From design concepts to fabricated reality — we handle every step under one roof.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={`/services#${service.id}`}
                className="group block h-full glass-card rounded-2xl p-6 md:p-7 transition-all duration-500 hover:border-amber-500/20 hover:bg-charcoal-900/50"
                id={`service-card-${service.id}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 text-xl mb-5 group-hover:bg-amber-500/20 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-charcoal-50 text-lg mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal-400 text-sm leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Learn more */}
                <div className="flex items-center gap-2 text-amber-500 text-sm font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Bottom accent line */}
                <div className="mt-5 h-0.5 rounded-full bg-charcoal-800 overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
