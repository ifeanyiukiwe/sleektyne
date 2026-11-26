import { site } from "@/lib/site";
export default function WhyChooseUs() {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-16">
      <div className="container-page">
        <div className="rounded-3xl bg-gradient-to-br from-navy to-water px-6 py-12 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wide text-sun">
                Why choose us
              </p>
              <h2
                id="why-heading"
                className="mt-2 text-3xl font-extrabold text-white md:text-4xl"
              >
                Plumbing you don’t have to worry about
              </h2>
              <p className="mt-4 text-lg text-white/80">
                We’re a local team that treats your home like our own. Clear
                prices, qualified engineers and work we stand behind, every
                time.
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {site.reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <li
                    key={reason.title}
                    className="flex flex-col rounded-2xl bg-white/10 text-white p-6"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{reason.title}</h3>
                    <p className="mt-2">{reason.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
