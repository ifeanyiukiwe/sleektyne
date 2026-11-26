import { site } from "@/lib/site";
import { StarIcon } from "@heroicons/react/24/solid";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="scroll-mt-28 py-16"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-water">
            Reviews
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 text-3xl font-extrabold text-navy md:text-4xl"
          >
            What our customers say
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Sample reviews for demonstration
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-10">
          {site.reviews.map((review) => (
            <li key={review.name}>
              <figure className=" flex h-full flex-col bg-white rounded-2xl border border-gray-200 p-6 ">
                <div
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                  className="flex gap-1"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      aria-hidden="true"
                      className={`h-5 w-5 ${i < review.rating ? "text-sun" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-gray-700">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy to-water text-sm font-bold text-white"
                  >
                    {getInitials(review.name)}
                  </span>
                  <div>
                    <p className="font-bold text-navy">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      {review.area} • {review.service}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
