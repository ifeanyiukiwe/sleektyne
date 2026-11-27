import {
  Wrench,
  Heater,
  Droplets,
  ThermometerSun,
  Bath,
  Waves,
  Siren,
  BadgePoundSterling,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
type Tier = "covered" | "extended";
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

  reasons: [
    {
      title: "Fixed prices, agreed upfront",
      description:
        "You'll know the full cost before any work starts. No hourly surprises, no hidden extras.",
      icon: BadgePoundSterling,
    },
    {
      title: "12-month guarantee on our work",
      description:
        "If anything we've fixed goes wrong within a year, we come back and put it right free. New boilers carry up to 10 years' manufacturer warranty.",
      icon: ShieldCheck,
    },
    {
      title: "Gas Safe and DBS checked",
      description:
        "Every engineer carries a Gas Safe ID card you can ask to see, and is DBS checked before working in your home.",
      icon: BadgeCheck,
    },
    {
      title: "Local, tidy and respectful",
      description:
        "We live and work in Northumberland and Tyneside. We wear shoe covers, protect your floors and leave every room as we found it.",
      icon: Sparkles,
    },
  ],

  areas: [
    {
      region: "Newcastle",
      tier: "covered" as Tier,
      towns: [
        "City Centre",
        "Jesmond",
        "Gosforth",
        "Fenham",
        "Westerhope",
        "Byker",
        "Walker",
        "Heaton",
        "Dinnington",
        "Lemington",
        "Throckley",
      ],
      postcodes: ["NE1", "NE2", "NE3", "NE4", "NE5", "NE6", "NE7", "NE15"],
    },
    {
      region: "North Tyneside",
      tier: "covered" as Tier,
      towns: [
        "Monkseaton",
        "Whitley Bay",
        "Shiremoor",
        "Wallsend",
        "North Shields",
        "Tynemouth",
        "Killingworth",
        "Longbenton",
        "Wideopen",
      ],
      postcodes: [
        "NE25",
        "NE26",
        "NE27",
        "NE28",
        "NE29",
        "NE30",
        "NE12",
        "NE13",
      ],
    },
    {
      region: "South-east Northumberland",
      tier: "covered" as Tier,
      towns: [
        "Ponteland",
        "Bedlington",
        "Cramlington",
        "Blyth",
        "Morpeth",
        "Choppington",
        "Stakeford",
        "Ashington",
        "Newbiggin",
        "Seaton Delaval",
      ],
      postcodes: [
        "NE20",
        "NE22",
        "NE23",
        "NE24",
        "NE61",
        "NE62",
        "NE63",
        "NE64",
      ],
    },
    {
      region: "North and west Northumberland",
      tier: "extended" as Tier,
      towns: [
        "Hexham",
        "Amble",
        "Rothbury",
        "Alnwick",
        "Seahouses",
        "Bamburgh",
        "Wooler",
        "Berwick",
      ],
      postcodes: ["NE46", "NE65", "NE66", "NE68", "NE69", "NE71", "TD15"],
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
      area: "Monkseaton",
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
