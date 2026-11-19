import {
  WrenchScrewdriverIcon,
  FireIcon,
  HomeModernIcon,
  CubeIcon,
  SparklesIcon,
  ArrowPathIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
export const site = {
  name: "Sleektyne Home Services",
  tagline: "Plumbing & Heating across Northumberland and Tyneside",
  phone: "0191 498 0123",
  phoneHref: "tel:01914980123",
  email: "sleektyne@example.com",

  nav: [
    {
      label: "Services",
      href: "/#services",
    },
    {
      label: "Areas covered",
      href: "/#areas",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],

  services: [
    {
      name: "Boiler repair",
      description:
        "Fast diagnosis and repair for all major boiler brands, with same-day visits where possible and a fixed price before we start.",
      icon: WrenchScrewdriverIcon,
    },
    {
      name: "Boiler installation",
      description:
        "Energy-efficient new boilers fitted by accredited engineers, with clear advice on the right model for your home and budget.",
      icon: HomeModernIcon,
    },
    {
      name: "Leaks and repairs",
      description:
        "From dripping taps to burst pipes, we find the source quickly and repair it properly to prevent water damage.",
      icon: CubeIcon,
    },
    {
      name: "Central heating",
      description:
        "Installation, upgrades and power flushing to keep every room warm and your heating running efficiently.",
      icon: FireIcon,
    },
    {
      name: "Bathrooms",
      description:
        "Complete bathroom installations and upgrades, from showers and toilets to full refits, finished to a high standard.",
      icon: SparklesIcon,
    },
    {
      name: "Blocked drains",
      description:
        "Sinks, toilets and outside drains cleared quickly and cleanly, with advice to help stop the problem coming back.",
      icon: ArrowPathIcon,
    },
    {
      name: "Emergency call-out",
      description:
        "Burst pipe, no heating or no hot water? Call us any time, day or night, across Northumberland and Tyneside.",
      icon: BoltIcon,
    },
  ],
  accreditations: [
    "Gas Safe (sample)",
    "Fully insured (sample)",
    "12-month guarantee",
    "Local engineers",
    "Fixed-price quotes",
  ],
};
