export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // emoji or SVG path reference
  useCases: string[];
  images: string[];
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "interior-exterior-design",
    title: "Interior & Exterior Design Solutions",
    shortDescription:
      "Complete design solutions for residential and commercial spaces.",
    fullDescription:
      "We transform spaces with thoughtful, functional design — from concept to completion. Whether you're renovating a home, fitting out a shop, or designing a commercial space from scratch, our team delivers end-to-end interior and exterior solutions tailored to your vision and budget.",
    icon: "✦",
    useCases: [
      "Home renovation & remodeling",
      "Commercial storefront design",
      "Kitchen & bathroom fit-outs",
      "Office interior planning",
      "Exterior facade design",
    ],
    images: [
      "/images/projects/hero-storefront.jpg",
      "/images/projects/led-paneling.jpg",
    ],
    whatsappMessage:
      "Hi MAT, I'm interested in your Interior & Exterior Design services.",
  },
  {
    id: "aluminium-glass-fabrication",
    title: "Aluminium Glass Fabrication",
    shortDescription:
      "Precision-crafted aluminium and glass work for modern spaces.",
    fullDescription:
      "Our in-house aluminium and glass fabrication delivers sleek, durable solutions — from sliding doors and partitions to full glass facades. Every piece is custom-built to exact specifications, using high-quality materials and modern fabrication techniques.",
    icon: "◇",
    useCases: [
      "Sliding glass doors",
      "Glass partitions & dividers",
      "Aluminium window frames",
      "Storefront glass facades",
      "Shower enclosures",
    ],
    images: [
      "/images/projects/glass-partition.jpg",
      "/images/projects/hero-storefront.jpg",
    ],
    whatsappMessage:
      "Hi MAT, I'm interested in your Aluminium Glass Fabrication services.",
  },
  {
    id: "ms-ss-works",
    title: "MS/SS (Mild Steel / Stainless Steel) Works",
    shortDescription:
      "Custom steel fabrication for structural and decorative applications.",
    fullDescription:
      "From heavy-duty structural frameworks to fine decorative fittings, our MS/SS workshop handles it all. We fabricate custom shelving, racks, gates, railings, and structural elements — built to last and finished to a high standard.",
    icon: "⬡",
    useCases: [
      "Shop shelving & display racks",
      "Kitchen storage frameworks",
      "Structural steel fittings",
      "Gates & railings",
      "Custom metal furniture",
    ],
    images: [
      "/images/projects/led-paneling.jpg",
      "/images/projects/hero-storefront.jpg",
    ],
    whatsappMessage:
      "Hi MAT, I'm interested in your MS/SS Works services.",
  },
  {
    id: "home-improvement",
    title: "Home Improvement Items",
    shortDescription:
      "Quality home improvement products available via inquiry.",
    fullDescription:
      "Browse our curated selection of home improvement items — from hardware and fittings to decorative elements. All items are available through direct inquiry. Contact us to discuss your needs and get personalized recommendations.",
    icon: "△",
    useCases: [
      "Lighting fixtures & LED panels",
      "Door & window hardware",
      "Decorative wall panels",
      "Cabinet & kitchen fittings",
      "Bathroom accessories",
    ],
    images: [
      "/images/projects/led-paneling.jpg",
      "/images/projects/glass-partition.jpg",
    ],
    whatsappMessage:
      "Hi MAT, I'd like to inquire about your Home Improvement items.",
  },
];
