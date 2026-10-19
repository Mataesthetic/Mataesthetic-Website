"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { siteData } from "@/data/site";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  // GSAP Ken Burns slow zoom on the hero image
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      { scale: 1.08, duration: 20, ease: "none", repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/images/projects/hero-storefront.jpg"
            alt="MAT Interior & Exterior Solution — premium commercial storefront fit-out"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/30" />
      </div>

      {/* Content */}
      <div className="relative section-container">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">
              {siteData.experience} Years of Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-6"
          >
            <span className="text-charcoal-50">Interior & Exterior</span>
            <br />
            <span className="text-charcoal-50">Solutions, </span>
            <span className="gradient-text">Built to Last</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-charcoal-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            {siteData.subTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/portfolio" className="btn-primary" id="hero-view-work">
              View Our Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline" id="hero-get-quote">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-charcoal-500 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-charcoal-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-amber-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
