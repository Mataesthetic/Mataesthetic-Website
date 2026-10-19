"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";

export default function ServicesContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative">
          <Reveal>
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Our Expertise
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-50 mb-5">
              Services
            </h1>
            <p className="text-charcoal-400 max-w-2xl text-lg leading-relaxed">
              Four pillars of expertise, one team. We design, fabricate, and install — delivering complete solutions for every space.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? "bg-charcoal-950" : "bg-charcoal-900/30"} scroll-mt-24`}
        >
          <div className="section-container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
              {/* Images */}
              <Reveal direction={index % 2 === 0 ? "left" : "right"}>
                <div className="grid grid-cols-2 gap-3">
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden rounded-2xl ${
                        i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${service.title} - example ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Content */}
              <Reveal direction={index % 2 === 0 ? "right" : "left"} delay={0.15}>
                <div className={index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 text-2xl mb-6">
                    {service.icon}
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-charcoal-50 mb-4">
                    {service.title}
                  </h2>

                  <p className="text-charcoal-300 leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-sm font-heading font-semibold text-charcoal-200 uppercase tracking-wider mb-4">
                      Common Applications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="flex items-center gap-3 text-charcoal-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    id={`service-cta-${service.id}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask About This Service
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner
        headline="Not sure which service fits?"
        subtext="Tell us about your space and we'll recommend the right solution."
      />
    </>
  );
}
