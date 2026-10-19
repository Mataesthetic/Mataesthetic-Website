import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our completed interior & exterior projects — commercial storefronts, residential renovations, glass fabrication, and MS/SS works across Bangladesh.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
