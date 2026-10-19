import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "MAT Interior & Exterior Solution — 5+ years of design and fabrication excellence across Bangladesh. We design, fabricate, and install under one roof.",
};

export default function AboutPage() {
  return <AboutContent />;
}
