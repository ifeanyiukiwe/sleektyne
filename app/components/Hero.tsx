import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
export default function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-12 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-3xl bg-gradient-to-br from-navy to-water px-6 py-12 lg:px-16 lg:py-20">
          <div>
            <h1
              id="hero-heading"
              className="text-3xl md:text-5xl font-extrabold text-background leading-tight"
            >
              Plumbing & Heating Engineers across Northumberland and Tyneside
            </h1>
            <p className="mt-4 text-lg text-white/85">
              Boiler repairs, leaks, bathrooms and central heating, fixed fast
              by local engineers. Fixed prices and no call-out fee.
            </p>
            <form
              action="/#quote"
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="service" className="sr-only">
                Service
              </label>
              <select
                name="service"
                id="service"
                defaultValue=""
                className="flex-1 min-w-0 rounded-lg border border-slate-300 px-4 py-3 bg-white text-slate-900"
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {site.services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
              <div className="flex-1 min-w-0">
                <label htmlFor="postcode" className="text-slate-600 sr-only">
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  autoComplete="postal-code"
                  placeholder="Enter your postcode"
                  className="rounded-lg border border-slate-300 px-4 py-3 w-full bg-white text-slate-900"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer shrink-0 rounded-lg bg-sun px-6 py-3 font-semibold text-navy hover:brightness-95"
              >
                Search
              </button>
            </form>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {site.services.slice(0, 4).map((s) => (
                <Link
                  key={s.name}
                  href="/#services"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-1 text-sm bg-white text-slate-900 hover:border-water hover:text-water"
                >
                  {s.name}
                  <ArrowUpRightIcon
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <li>
                <span className="text-sun" aria-hidden="true">
                  ★
                </span>{" "}
                4.9 from sample reviews
              </li>
              <li>No call-out fee</li>
              <li>Accredited engineers (sample)</li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/heating-removebg.png"
              alt="White column radiator"
              width={1200}
              height={800}
              priority
              className="mx-auto h-auto w-full max-w-sm object-contain drop-shadow-2xl lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
