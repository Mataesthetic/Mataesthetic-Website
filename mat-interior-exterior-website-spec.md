# MAT Interior & Exterior Solution — Website Specification

**Purpose of this document:** This is a build-ready spec. Hand this directly to a coding agent (Claude Code, Google Antigravity, etc.) to generate the site. It defines site structure, page-by-page content, tone, and technical notes.

---

## 1. Business Summary

**Name:** MAT Interior & Exterior Solution
**Location:** Ring Road, Dhaka 1200, Bangladesh
**Contact:** 01684-813993 · matinteriorexterior@gmail.com · WhatsApp enabled
**Audience:** Both residential (homeowners) and commercial (shop/business owners) clients, roughly equal split
**Language:** English only
**Site type:** Portfolio + contact — no e-commerce, no checkout. All product/service inquiries route to WhatsApp, phone, or a contact form.

**Core services:**
1. Interior & Exterior Design Solutions (residential + commercial)
2. Aluminium Glass Fabrication (sliding doors, partitions, facades)
3. MS/SS Works (Mild Steel / Stainless Steel — shelving, structural frameworks, fittings)
4. Home Improvement Items (sold via inquiry, not online checkout)

**Brand identity to convey:** hands-on fabricators who also design — not just consultants. Warm, high-end finish quality (LED-lit paneling, clean glass/metal work). Trustworthy for both a homeowner renovating a kitchen and a shop owner building out a storefront.

**Style reference:** 99grid.com — minimal grid-based layout, confident short copy, strong trust-building sections (quality process, credibility), clean modern visual language. Adapt this feel to a design/fabrication portfolio context rather than a furniture e-commerce context.

---

## 2. Sitemap

1. **Home**
2. **Services**
3. **Portfolio / Projects**
4. **About**
5. **Contact**

Single-page scroll OR multi-page — recommend multi-page for clarity given two distinct audiences (residential vs commercial visitors may want different proof points).

---

## 3. Page-by-Page Specification

### 3.1 Home

**Purpose:** Immediate clarity on who MAT is and what they do, split cleanly for both audience types, then drive to Portfolio/Contact.

**Sections, top to bottom:**

1. **Hero**
   - Large image or short looping video of a finished project (e.g. Binomma Kitchen storefront, or an LED-lit paneling shot)
   - Headline: something like "Interior & Exterior Solutions, Built to Last" (placeholder — refine with client)
   - Subheadline: one line covering design + fabrication in one breath, e.g. "Design, fabrication, and installation for homes and businesses across Dhaka."
   - Two CTA buttons: "View Our Work" (→ Portfolio) and "Get a Quote" (→ Contact / WhatsApp)

2. **Services Overview** (4-card grid)
   - Interior & Exterior Design
   - Aluminium Glass Fabrication
   - MS/SS Works
   - Home Improvement Items
   - Each card: icon, 1-line description, "Learn more" → Services page

3. **Featured Project** (spotlight strip)
   - Binomma Kitchen case study teaser: 2–3 photos, one-line result statement, link to full case study on Portfolio page

4. **Why MAT** (trust section, styled like 99grid's quality-check section)
   - 3 short trust points, e.g.:
     - "We design AND build" — end-to-end, not just consulting
     - "Custom fabrication" — MS/SS and aluminium/glass work done in-house
     - "Residential & commercial experience" — homes, shops, kitchens

5. **CTA Banner**
   - "Have a space in mind? Let's talk." → Contact/WhatsApp button

---

### 3.2 Services

**Purpose:** Give each service enough detail that a visitor self-identifies ("that's what I need") without overwhelming.

For each of the 4 services, a dedicated section with:
- Service name + short description (2–3 sentences)
- 3–4 supporting photos from the portfolio
- Relevant use cases (e.g. under MS/SS Works: "shop shelving," "kitchen storage frameworks," "structural fittings")
- Soft CTA: "Ask about this service" → WhatsApp/contact

**Sections:**
1. Interior & Exterior Design Solutions
2. Aluminium Glass Fabrication
3. MS/SS (Mild Steel / Stainless Steel) Works
4. Home Improvement Items *(note: framed as "browse what we offer," not shop — links to Contact for inquiries)*

---

### 3.3 Portfolio / Projects

**Purpose:** Primary trust-building page. This is where photos do the talking.

**Structure:**
- Filter/tag by category: Residential / Commercial / All (optional but recommended given the dual audience)
- Grid of project cards, each opening into a **case study layout**:
  - Client name (if shareable — e.g. Binomma Kitchen)
  - Location (e.g. Lakshmipur)
  - Project type tag (e.g. "Commercial Storefront")
  - Photo gallery (before/progress/after where available)
  - Short narrative: what was done, materials used, timeline if known
  - Embed video if available (e.g. the storefront handover video)

**Known project content to include at launch:**
- **Binomma Kitchen** (Lakshmipur) — full storefront fit-out: wall paneling with LED backlighting, aluminium/glass sliding doors, MS/SS shelving. Include both the "on-going" and "handover" photos/video if available, framed as a before → after story.
- **Mr. Mehedi's project** — if now complete, add as a second case study; if still ongoing, could be featured as "Currently in Progress" to show active work.
- Additional photos from the 3x3 portfolio grid (LED wall paneling, aluminium/glass partitions, MS/SS metal shelving, installation-in-progress shots) — group these into a general gallery even without full case study write-ups.

---

### 3.4 About

**Purpose:** Build personal trust — who's behind MAT, why choose them.

**Sections:**
- Founder/team intro (name, background, years active — *needs input from client*)
- What makes MAT different: in-house fabrication + design under one roof
- Service area (Dhaka, and Lakshmipur based on known project — confirm full coverage area with client)
- Optional: process overview ("Consultation → Design → Fabrication → Installation")

---

### 3.5 Contact

**Purpose:** Convert. Make it effortless to reach out.

**Sections:**
- Contact form (Name, Phone, Email, Message, optional "Project type" dropdown: Residential / Commercial)
- Direct contact block: Phone (01684-813993), Email (matinteriorexterior@gmail.com), WhatsApp button (click-to-chat)
- Address: Ring Road, Dhaka 1200 — embed Google Map
- Social links: Facebook, YouTube

---

## 4. Global Elements

- **Header/Nav:** Logo, Home / Services / Portfolio / About / Contact, WhatsApp icon persistent in nav or as floating button
- **Footer:** Business name, address, phone, email, social icons, copyright line
- **Floating WhatsApp button:** persistent across all pages (high-conversion pattern for Bangladesh market)

---

## 5. Visual/Design Direction

- Clean, minimal, grid-based layout (per 99grid.com reference)
- Color palette: neutral base (white/off-white/charcoal) with one accent color — consider warm amber/gold to echo the LED backlighting seen in their actual project photos, ties brand visuals to their real work
- Typography: modern sans-serif, confident sizing on headlines (matches 99grid's direct tone)
- Photography-forward — this business sells on visual proof of work, so images should be large and high-quality throughout
- Mobile-first: given WhatsApp-driven contact behavior, majority of traffic likely mobile

---

## 6. Technical Notes (for the coding agent)

**Stack:**
- **Framework:** Next.js (React) — use static generation for all pages (no backend/database needed; no e-commerce, no user accounts)
- **Styling:** Tailwind CSS — mobile-first utility classes, enables full responsiveness across breakpoints (mobile / tablet / desktop) without extra overhead
- **Animation:** Framer Motion for scroll reveals, hover states, page/section transitions. Optionally layer in GSAP for more dramatic effects (large hero reveals, parallax, timeline-based sequences on the Portfolio page) if the agent/developer is comfortable with it — GSAP is what many high-end design studio sites actually use.
- **Images:** Next.js built-in `<Image>` component for automatic optimization, lazy loading, and responsive srcsets — critical since this is a photography-forward site
- **Contact form:** No custom backend — use a form-to-email service (e.g. Formspree) or a lightweight serverless function

**Responsiveness requirement:**
- Fully responsive, mobile-first build — design and test for mobile (360–430px), tablet (768px), and desktop (1280px+) breakpoints
- WhatsApp/phone CTAs must be easily tappable on mobile (large touch targets, sticky/floating placement)
- Given the target audience likely browses primarily on mobile, mobile layout should be treated as the primary design, not an afterthought

**Performance notes (React trade-off, addressed):**
- Next.js static generation pre-renders pages to HTML at build time, keeping load times close to a plain HTML/CSS/JS site while still getting React's component/animation benefits
- Keep JS bundle lean — avoid unnecessary libraries beyond the animation stack above
- Lazy-load below-the-fold images and heavy animation sections
- Target: fast First Contentful Paint even on slower mobile connections (relevant for the Dhaka/Bangladesh market)

**SEO basics:** page titles/meta descriptions per page, alt text on all portfolio images, local SEO tags (Dhaka, interior design, exterior design, aluminium fabrication, MS/SS works)

---

## 7. Client Answers & Remaining Open Items

**Answered by the client:**
- Logo: exists — to be supplied as a file (use it for the header and favicon, and derive the accent color from it)
- Brand colors: none fixed yet — the coding agent should propose a palette based on the logo (default suggestion: neutral base + warm amber accent, per Section 5)
- Experience: 5+ years in business (use "5+ years" in the Home trust section and About page)
- Service area: all over Bangladesh (write "Serving projects across Bangladesh", not just Dhaka)
- Additional projects/clients: none beyond Binomma Kitchen and the Mr. Mehedi project
- Photos: client will provide originals

**Needs confirmation (answers were ambiguous):**
- [ ] "Mataesthetic.com" was given when asked about the founder's name. Confirm whether this is the site's domain, a brand name (e.g. "MAT Aesthetic"), or both
- [ ] Client naming: the reply for Binomma Kitchen was "Not needed" and for Mr. Mehedi was "No". Confirm whether each may be named publicly. Until confirmed, build with anonymous labels (e.g. "Commercial Storefront, Lakshmipur") that can be swapped for real names easily

**On hold (client paused these):**
- [ ] Founder/team names, bio and founding story — launch the About page with a brand-focused version (no personal bio) and leave a slot for it
- [ ] Testimonials/reviews — omit the reviews section at launch; keep it as an optional component to enable later

**Still needed:**
- [ ] Logo file and the original high-resolution project photos/videos

---

## 8. Project Structure & Components (for the coding agent)

Use the Next.js App Router with TypeScript.

```
/app
  layout.tsx            # global header, footer, floating WhatsApp button, fonts, metadata
  page.tsx              # Home
  services/page.tsx
  portfolio/page.tsx    # grid + category filter
  portfolio/[slug]/page.tsx   # case study (statically generated from data file)
  about/page.tsx
  contact/page.tsx
/components
  Header.tsx, Footer.tsx, WhatsAppButton.tsx
  Hero.tsx, ServiceCard.tsx, FeaturedProject.tsx, TrustPoints.tsx, CtaBanner.tsx
  ProjectCard.tsx, ProjectGallery.tsx, CategoryFilter.tsx
  ContactForm.tsx, MapEmbed.tsx
  Reveal.tsx            # reusable Framer Motion scroll-reveal wrapper
/data
  site.ts               # business name, phone, email, WhatsApp number, address, social links
  services.ts           # the 4 services (title, description, use cases, images)
  projects.ts           # all projects (slug, title, category, location, images, narrative, videoUrl)
/public
  /images/projects/...  # client-supplied originals, optimized by next/image
  /logo/                # client logo files
```

**Rules:**
- All business details (phone, email, WhatsApp, address, social links) live in `/data/site.ts` and nowhere else, so one edit updates the whole site.
- Projects live in `/data/projects.ts`. Adding a project means adding one entry and dropping photos in a folder, with no code changes. Client names are a single optional field per project, so they can be switched on or off once the brother confirms.
- WhatsApp links use the format `https://wa.me/8801684813993` (Bangladesh country code 880, number without the leading 0), with an optional prefilled message such as "Hi MAT, I'd like to discuss a project."
- Reviews/testimonials are built as an optional component that renders nothing when there's no data.

---

## 9. Animation Plan

Keep motion purposeful and light. It must never slow the page or block content on slow mobile connections. Respect `prefers-reduced-motion` by turning off all non-essential animation for those users.

| Where | Effect | Tool |
|---|---|---|
| Hero | Headline and subheadline fade/slide up in sequence; background image slow zoom (Ken Burns) | Framer Motion |
| Section entrances (all pages) | Content fades and rises into place once as it scrolls into view (`Reveal` wrapper) | Framer Motion |
| Service cards | Staggered reveal; on hover, slight lift plus accent-color underline | Framer Motion + Tailwind |
| Portfolio grid | Cards reveal in a stagger; on hover, image zooms slightly and a title overlay slides up | Framer Motion |
| Category filter | Smooth layout animation when cards re-order or filter (`layout` / `AnimatePresence`) | Framer Motion |
| Case study gallery | Image fade transitions; optional lightbox with swipe on mobile | Framer Motion |
| Page transitions | Short fade between routes | Framer Motion |
| Hero parallax and large scroll sequences (optional, desktop only) | Subtle parallax on the hero image | GSAP ScrollTrigger |
| Buttons and links | Hover and press states, 150–250ms | Tailwind transitions |

Timing guidance: most transitions 400–700ms with ease-out, stagger delay about 80–120ms. Animate only transform and opacity to stay smooth on low-end phones.

---

## 10. Deployment & Launch

- **Hosting:** Vercel (free tier is enough for a static portfolio site). Push the project to a GitHub repo and connect it to Vercel for automatic deploys.
- **Domain:** use the domain the client confirms (see Section 7: "Mataesthetic.com"). Connect it in Vercel and point the DNS records to Vercel. Until confirmed, deploy on the free `*.vercel.app` address for review.
- **Contact form:** Formspree (or similar), sending submissions to matinteriorexterior@gmail.com. Add a hidden honeypot field to cut spam. Show a clear success and error message on submit.
- **Google Map:** embed the Ring Road, Dhaka 1200 address on the Contact page (confirm the exact pin with the client).
- **Social links:** Facebook (@matinteriorexteriorsolution) and YouTube (@matinteriorexteriorsolution) in the footer and Contact page.
- **SEO and sharing:** per-page title and meta description, Open Graph image (use the best project photo) so links look good when shared on WhatsApp and Facebook, `sitemap.xml`, `robots.txt`, and a favicon from the logo. Consider adding Google Business Profile after launch.
- **Analytics:** optional. If wanted, add Vercel Analytics or Google Analytics, and track clicks on the WhatsApp and phone buttons, since those are the main conversions.
- **Pre-launch checklist:** test on a real phone (Android Chrome and iPhone Safari), check Lighthouse performance scores (aim for 90+ on mobile), confirm every phone/WhatsApp/email link works, confirm all images have alt text, and have the client approve all copy and project names.
