"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { siteData } from "@/data/site";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We listen to your vision, assess the space, and understand your requirements and budget.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our team creates detailed design concepts tailored to your space, materials, and style preferences.",
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Custom fabrication in our workshop — aluminium, glass, MS/SS — every piece built to spec.",
  },
  {
    step: "04",
    title: "Installation",
    description: "Professional on-site installation with attention to detail and clean finishing.",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "4", label: "Service Categories" },
  { value: "100%", label: "Custom Work" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative">
          <Reveal>
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-50 mb-5 max-w-3xl">
              Design & Fabrication,{" "}
              <span className="gradient-text">Under One Roof</span>
            </h1>
            <p className="text-charcoal-400 max-w-2xl text-lg leading-relaxed">
              We&apos;re not just designers and we&apos;re not just fabricators — we&apos;re both. {siteData.businessName} brings together creative design and hands-on craftsmanship to deliver complete interior and exterior solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-charcoal-900/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <Reveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/projects/hero-storefront.jpg"
                  alt="MAT team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />

                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 glass-card rounded-xl px-5 py-3 glow-amber">
                  <p className="text-amber-400 font-heading font-bold text-3xl">{siteData.experience}+</p>
                  <p className="text-charcoal-300 text-xs uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal direction="right" delay={0.15}>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal-50 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-charcoal-300 leading-relaxed">
                  <p>
                    {siteData.businessName} was founded with a simple belief: great spaces are built when design and fabrication work hand in hand.
                  </p>
                  <p>
                    Over {siteData.experience} years, we&apos;ve grown from a small workshop into a full-service design and fabrication studio. Our in-house capabilities in aluminium/glass work and MS/SS fabrication mean we control the quality from concept sketch to final installation.
                  </p>
                  <p>
                    Whether it&apos;s a homeowner transforming their kitchen or a business owner building out a storefront, we bring the same commitment: thoughtful design, quality materials, and craftsmanship you can trust.
                  </p>
                </div>

                {/* Placeholder for future bio */}
                {/* TODO: Add founder bio when confirmed */}

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-charcoal-800" />
                  <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.15em]">
                    {siteData.serviceArea}
                  </p>
                  <div className="h-px flex-1 bg-charcoal-800" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-charcoal-950">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl glass-card"
              >
                <p className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-charcoal-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-charcoal-900/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="section-container relative">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
                How We Work
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-50">
                Our Process
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative p-7 rounded-2xl glass-card group hover:border-amber-500/20 transition-all duration-500"
              >
                <span className="text-5xl font-heading font-bold text-amber-500/10 absolute top-4 right-4 group-hover:text-amber-500/20 transition-colors duration-500">
                  {step.step}
                </span>
                <div className="relative">
                  <h3 className="font-heading font-semibold text-charcoal-50 text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (desktop) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-charcoal-700" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews placeholder — renders nothing for now */}
      {/* TODO: Uncomment and populate when testimonials are ready */}

      <CtaBanner
        headline="Ready to transform your space?"
        subtext="From concept to completion, we're here to make it happen."
      />
    </>
  );
}
