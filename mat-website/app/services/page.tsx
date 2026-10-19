import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior & exterior design, aluminium glass fabrication, MS/SS works, and home improvement items. End-to-end solutions for homes and businesses across Bangladesh.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
