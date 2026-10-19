import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import FeaturedProject from "@/components/FeaturedProject";
import TrustPoints from "@/components/TrustPoints";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <FeaturedProject />
      <TrustPoints />
      <CtaBanner />
    </>
  );
}
