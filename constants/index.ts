// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How We Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "For NGOs",
    icon: "/map.svg",
    variant: "green",
    description:
      "We create impactful websites that tell your story, drive donations, and mobilize communities. Features like donation buttons, event calendars, and volunteer sign-up forms are seamlessly integrated to maximize engagement and support.",
  },
  {
    title: "For Personal Websites",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Whether it’s a portfolio, blog, or a personal brand showcase, our designs are crafted to reflect your individuality. Enjoy creative freedom with features like photo galleries, personal blogs, and resume download options, all designed to highlight your personal journey and achievements.",
  },
  {
    title: "For Corporate Sites",
    icon: "/tech.svg",
    variant: "green",
    description:
      "We optimize every aspect of your site for search engines, helping you rank higher and attract more organic traffic.",
  },
  {
    title: "Responsive Design",
    icon: "/map.svg",
    variant: "green",
    description:
      "Empower your corporate identity with a website that exudes professionalism. We offer corporate-specific features like comprehensive service pages, client testimonials, case studies, and an integrated newsroom to keep stakeholders updated.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Reeree Services",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Responsive design",
      "SEO Optimization",
      "Content Management System (CMS)",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Representative", value: "info@reereeservices.nl" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};
