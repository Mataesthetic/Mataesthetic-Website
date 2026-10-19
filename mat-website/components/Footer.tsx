"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/data/site";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/5 bg-charcoal-950">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-heading font-bold text-charcoal-950 text-sm">
                M
              </div>
              <span className="font-heading font-bold text-lg text-charcoal-50">
                {siteData.shortName}
              </span>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              {siteData.subTagline}
            </p>
            <p className="text-amber-500/80 text-xs font-medium uppercase tracking-wider">
              {siteData.serviceArea}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-charcoal-50 mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-400 hover:text-amber-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-charcoal-50 mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Interior & Exterior Design",
                "Aluminium Glass Fabrication",
                "MS/SS Works",
                "Home Improvement",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-charcoal-400 hover:text-amber-400 text-sm transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-charcoal-50 mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li>
                <a
                  href={`tel:${siteData.phoneIntl}`}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  {siteData.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.email}`}
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  {siteData.email}
                </a>
              </li>
              <li>{siteData.address}</li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-900 flex items-center justify-center text-charcoal-400 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300"
                aria-label="Facebook"
                id="footer-facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-900 flex items-center justify-center text-charcoal-400 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300"
                aria-label="YouTube"
                id="footer-youtube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-xs">
            © {currentYear} {siteData.businessName}. All rights reserved.
          </p>
          <p className="text-charcoal-600 text-xs">
            Design & Fabrication Excellence Since 2019
          </p>
        </div>
      </div>
    </footer>
  );
}
