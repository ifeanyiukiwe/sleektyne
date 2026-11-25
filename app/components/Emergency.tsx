import { site } from "@/lib/site";
import { PhoneIcon } from "@heroicons/react/24/outline";
export default function Emergency() {
  return (
    <section aria-labelledby="emergency-heading" className="py-8">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col gap-6 rounded-3xl bg-sun px-6 py-10 text-navy md:flex-row md:items-center md:justify-between lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase font-bold tracking-wide">
              24/7 emergency call-outs
            </p>
            <h2
              id="emergency-heading"
              className="mt-2 text-3xl text-balance font-extrabold md:text-4xl"
            >
              Burst pipe? No heating? We’re on our way.
            </h2>
            <p className="text-lg mt-3">
              Fast response across Northumberland and Tyneside, day or night,
              including weekends and bank holidays.
            </p>
          </div>

          <a
            href={site.phoneHref}
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-navy px-8 py-4 text-xl font-bold text-white hover:bg-navy/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy md:self-auto"
          >
            <PhoneIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
