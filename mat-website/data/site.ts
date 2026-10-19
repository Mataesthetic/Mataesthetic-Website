export const siteData = {
  businessName: "MAT Interior & Exterior Solution",
  shortName: "MAT",
  tagline: "Interior & Exterior Solutions, Built to Last",
  subTagline:
    "Design, fabrication, and installation for homes and businesses across Bangladesh.",
  phone: "01684-813993",
  phoneIntl: "+8801684813993",
  email: "matinteriorexterior@gmail.com",
  whatsappNumber: "8801684813993",
  whatsappMessage: "Hi MAT, I'd like to discuss a project.",
  address: "Ring Road, Dhaka 1200, Bangladesh",
  serviceArea: "Serving projects across Bangladesh",
  experience: "5+",
  social: {
    facebook: "https://www.facebook.com/matinteriorexteriorsolution",
    youtube: "https://www.youtube.com/@matinteriorexteriorsolution",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.925879!2d90.38!3d23.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRing+Road%2C+Dhaka+1200!5e0!3m2!1sen!2sbd!4v1",
};

export function getWhatsAppUrl(customMessage?: string) {
  const msg = customMessage || siteData.whatsappMessage;
  return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
