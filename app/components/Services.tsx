import { site } from "@/lib/site";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-28"
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-12 py-16">
        <p className="text-sm font-semibold tracking-wide text-water">
          OUR SERVICES
        </p>
        <h2
          id="services-heading"
          className="mt-2 text-3xl md:text-4xl font-extrabold text-navy"
        >
          Plumbing and heating, done properly
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          From a dripping tap to a full boiler installation, our local engineers
          fix it right first time, with a fixed price agreed before we start.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-water/10 text-water">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy">
                  {service.name}
                </h3>
                <p className="mt-2 text-slate-600">{service.description}</p>
                <Link
                  href="/#quote"
                  className="mt-auto pt-4 inline-flex items-center gap-1 font-semibold text-water hover:underline"
                >
                  Get a quote
                  <span className="sr-only"> for {service.name}</span>
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
