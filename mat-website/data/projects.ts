export type ProjectCategory = "residential" | "commercial";

export interface Project {
  slug: string;
  title: string;
  clientName?: string; // optional — toggle on once client confirms
  location: string;
  category: ProjectCategory;
  tags: string[];
  images: string[];
  narrative: string;
  materialsUsed: string[];
  videoUrl?: string;
  featured?: boolean;
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    slug: "commercial-storefront-lakshmipur",
    title: "Commercial Storefront Fit-Out",
    // clientName: "Binomma Kitchen", // Uncomment once client confirms
    location: "Lakshmipur",
    category: "commercial",
    tags: ["Commercial Storefront", "Full Fit-Out"],
    images: [
      "/images/projects/hero-storefront.jpg",
      "/images/projects/led-paneling.jpg",
      "/images/projects/glass-partition.jpg",
    ],
    narrative:
      "A complete storefront transformation featuring LED-backlit wall paneling, custom aluminium and glass sliding doors, and MS/SS shelving. The project showcased MAT's end-to-end capability — from initial design through fabrication to final installation — delivering a modern, inviting commercial space.",
    materialsUsed: [
      "LED-backlit wood paneling",
      "Aluminium-framed glass sliding doors",
      "Stainless steel shelving",
      "Decorative wall cladding",
    ],
    featured: true,
    status: "completed",
  },
  {
    slug: "residential-project-dhaka",
    title: "Residential Interior Renovation",
    // clientName: "Mr. Mehedi", // Uncomment once client confirms
    location: "Dhaka",
    category: "residential",
    tags: ["Residential", "Interior Renovation"],
    images: [
      "/images/projects/led-paneling.jpg",
      "/images/projects/glass-partition.jpg",
      "/images/projects/hero-storefront.jpg",
    ],
    narrative:
      "A comprehensive residential interior renovation featuring modern LED paneling, glass partitions for open-plan living, and custom steel storage solutions. The project demonstrates MAT's ability to bring the same level of finish quality to homes as to commercial spaces.",
    materialsUsed: [
      "Ambient LED wall panels",
      "Glass room dividers",
      "Mild steel storage framework",
      "Modern fixtures & fittings",
    ],
    status: "in-progress",
  },
  {
    slug: "office-glass-partition",
    title: "Office Glass Partition System",
    location: "Dhaka",
    category: "commercial",
    tags: ["Commercial", "Glass Fabrication"],
    images: [
      "/images/projects/glass-partition.jpg",
      "/images/projects/hero-storefront.jpg",
    ],
    narrative:
      "Floor-to-ceiling aluminium-framed glass partitions installed for a modern office space. The clean lines and transparency create distinct work zones while maintaining visual openness and natural light flow throughout the floor.",
    materialsUsed: [
      "Aluminium frame system",
      "Tempered glass panels",
      "Sliding door mechanism",
    ],
    status: "completed",
  },
];

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: ProjectCategory | "all"
): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
