import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { site } from "@/lib/site";
export default function Accreditations() {
  return (
    <section aria-label="Accreditations">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-12">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 py-8 text-sm sm:grid-cols-3 sm:text-base lg:flex lg:flex-wrap lg:justify-center lg:gap-x-8">
          {site.accreditations.map((accreditation) => (
            <li
              key={accreditation}
              className="flex items-center gap-2 text-slate-700"
            >
              <ShieldCheckIcon
                className="h-6 w-6 text-water"
                aria-hidden="true"
              />
              {accreditation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
