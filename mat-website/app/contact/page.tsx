import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MAT Interior & Exterior Solution. Call, WhatsApp, or send us a message. Ring Road, Dhaka 1200, Bangladesh.",
};

export default function ContactPage() {
  return <ContactContent />;
}
