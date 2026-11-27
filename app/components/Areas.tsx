import { site } from "@/lib/site";
export default function Areas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="scroll-mt-28 py-16"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-water">
            Areas we cover
          </p>
          <h2
            id="areas-heading"
            className="mt-3 text-3xl font-extrabold text-navy md:text-4xl"
          >
            Local plumbers you can count on
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We cover Newcastle, North Tyneside and south-east Northumberland as
            standard, and travel further north and west for the right job.
          </p>
        </div>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {site.areas.map((area) => (
            <li key={area.region}>
              <h3 className="text-xl font-bold text-navy">{area.region}</h3>
              {area.tier === "extended" && (
                <p className="mt-1 text-sm text-slate-500">
                  Call us to check availability
                </p>
              )}
              <ul className="mt-3 flex flex-wrap gap-2">
                {area.towns.map((town) => (
                  <li
                    key={town}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                  >
                    {town}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
