import {
  Wrench,
  Heater,
  Droplets,
  ThermometerSun,
  Bath,
  Waves,
  Siren,
} from "lucide-react";
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
      icon: Wrench,
    },
    {
      name: "Boiler installation",
      description:
        "Energy-efficient new boilers fitted by accredited engineers, with clear advice on the right model for your home and budget.",
      icon: Heater,
    },
    {
      name: "Leaks and repairs",
      description:
        "From dripping taps to burst pipes, we find the source quickly and repair it properly to prevent water damage.",
      icon: Droplets,
    },
    {
      name: "Central heating",
      description:
        "Installation, upgrades and power flushing to keep every room warm and your heating running efficiently.",
      icon: ThermometerSun,
    },
    {
      name: "Bathrooms",
      description:
        "Complete bathroom installations and upgrades, from showers and toilets to full refits, finished to a high standard.",
      icon: Bath,
    },
    {
      name: "Blocked drains",
      description:
        "Sinks, toilets and outside drains cleared quickly and cleanly, with advice to help stop the problem coming back.",
      icon: Waves,
    },
    {
      name: "Emergency call-out",
      description:
        "Burst pipe, no heating or no hot water? Call us any time, day or night, across Northumberland and Tyneside.",
      icon: Siren,
    },
  ],

  reviews: [
    {
      name: "Sarah M.",
      area: "Morpeth",
      service: "Boiler repair",
      rating: 5,
      quote:
        "Our boiler stopped on a Sunday night. They answered straight away and had it running by mid-morning. Clear price before starting, no surprises.",
    },
    {
      name: "Damon H.",
      area: "Whitley Bay",
      service: "Central heating",
      rating: 4,
      quote:
        "They installed a new central heating system in my rental property, and came back for the annual service as agreed without me having to chase.",
    },
    {
      name: "Brian O.",
      area: "Monk Seaton",
      service: "Blocked drains",
      rating: 5,
      quote:
        "Woke up to overflowing drains due to blockage, my neighbour referred them to me, rang up and they arrived on time to get it sorted at a very fair price and left everywhere clean.",
    },
    {
      name: "Beth A.",
      area: "Cramlington",
      service: "Boiler installation",
      rating: 5,
      quote:
        "Our old boiler was over 15 years old. They fitted a new one in a day, explained the 10-year guarantee properly and left the kitchen spotless.",
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
