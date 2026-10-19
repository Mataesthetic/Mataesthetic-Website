"use client";

import { useState, type FormEvent } from "react";
import Reveal from "@/components/Reveal";
import { siteData, getWhatsAppUrl } from "@/data/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
    _honeypot: "", // spam trap
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData._honeypot) return; // bot detected

    setFormStatus("submitting");
    try {
      // Formspree integration — replace YOUR_FORM_ID with actual Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", phone: "", email: "", projectType: "", message: "", _honeypot: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="section-container relative">
          <Reveal>
            <p className="text-amber-500 text-xs font-medium uppercase tracking-[0.2em] mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-50 mb-5">
              Contact Us
            </h1>
            <p className="text-charcoal-400 max-w-2xl text-lg leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Reach out via phone, WhatsApp, or the form below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-charcoal-950">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <h2 className="text-2xl font-heading font-bold text-charcoal-50 mb-8">
                  Send Us a Message
                </h2>

                {formStatus === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-charcoal-50 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-400 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="btn-outline text-sm"
                      id="send-another-message"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_honeypot"
                      value={formData._honeypot}
                      onChange={(e) => setFormData({ ...formData, _honeypot: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-charcoal-300 text-sm mb-2">
                          Name <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-charcoal-800 text-charcoal-100 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all placeholder:text-charcoal-600"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-charcoal-300 text-sm mb-2">
                          Phone <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-charcoal-800 text-charcoal-100 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all placeholder:text-charcoal-600"
                          placeholder="01XXX-XXXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-charcoal-300 text-sm mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-charcoal-800 text-charcoal-100 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all placeholder:text-charcoal-600"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-charcoal-300 text-sm mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-charcoal-800 text-charcoal-100 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                        >
                          <option value="" className="text-charcoal-600">Select type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-charcoal-300 text-sm mb-2">
                        Message <span className="text-amber-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-charcoal-900 border border-charcoal-800 text-charcoal-100 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all resize-none placeholder:text-charcoal-600"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    {formStatus === "error" && (
                      <div className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        Something went wrong. Please try again or contact us directly via phone/WhatsApp.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                      id="contact-submit"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact Info Sidebar */}
            <Reveal delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Quick Contact */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-charcoal-50 mb-5">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    {/* Phone */}
                    <a
                      href={`tel:${siteData.phoneIntl}`}
                      className="flex items-center gap-4 group"
                      id="contact-phone"
                    >
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-charcoal-500 text-xs uppercase tracking-wider">Phone</p>
                        <p className="text-charcoal-200 text-sm group-hover:text-amber-400 transition-colors">
                          {siteData.phone}
                        </p>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                      id="contact-whatsapp"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-charcoal-500 text-xs uppercase tracking-wider">WhatsApp</p>
                        <p className="text-charcoal-200 text-sm group-hover:text-[#25D366] transition-colors">
                          Chat Now
                        </p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${siteData.email}`}
                      className="flex items-center gap-4 group"
                      id="contact-email"
                    >
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-charcoal-500 text-xs uppercase tracking-wider">Email</p>
                        <p className="text-charcoal-200 text-sm group-hover:text-amber-400 transition-colors">
                          {siteData.email}
                        </p>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-charcoal-500 text-xs uppercase tracking-wider">Address</p>
                        <p className="text-charcoal-200 text-sm">{siteData.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-charcoal-50 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={siteData.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-charcoal-900 text-charcoal-400 hover:bg-amber-500/10 hover:text-amber-400 transition-all text-sm"
                      id="contact-facebook"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={siteData.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-charcoal-900 text-charcoal-400 hover:bg-amber-500/10 hover:text-amber-400 transition-all text-sm"
                      id="contact-youtube"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      YouTube
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden h-64 lg:h-72 relative">
                  <iframe
                    src={siteData.mapEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MAT Interior & Exterior Solution location"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
