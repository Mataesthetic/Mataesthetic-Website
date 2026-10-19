"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h14.18M4.93 19.07A10 10 0 1119.07 4.93 10 10 0 014.93 19.07z" />
      </svg>
    ),
    title: "We Design AND Build",
    description:
      "End-to-end service from concept to completion. No middlemen, no delays — design, fabrication, and installation all under one roof.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Custom Fabrication In-House",
    description:
      "MS/SS and aluminium/glass work done in our own workshop. Every piece is custom-crafted to your exact specifications.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential & Commercial",
    description:
      "From home renovations to full storefront fit-outs, we bring the same level of quality and attention to every project.",
  },
];

export default function TrustPoints() {
  return (
    <section className="section-padding bg-charcoal-950 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-50">
              Why MAT
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group text-center p-8 md:p-10 rounded-2xl glass-card hover:border-amber-500/20 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="font-heading font-semibold text-charcoal-50 text-xl mb-3">
                {point.title}
              </h3>
              <p className="text-charcoal-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
