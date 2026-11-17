import Link from "next/link";
import { site } from "@/lib/site";
import MobileMenu from "./MobileMenu";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 lg:px-12 md:h-20">
        {/* Logo: icon mark + wordmark */}
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-water"
        >
          <span
            aria-hidden="true"
            className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-sun"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2.5c-.3 0-.6.15-.8.4C9.6 5 6 9.6 6 14a6 6 0 0 0 12 0c0-4.4-3.6-9-5.2-11.1a1 1 0 0 0-.8-.4Z" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-navy">
              Sleektyne
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Home Services
            </span>
          </span>
        </Link>

        {/* Main navigation: desktop only for now */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded transition-colors hover:text-water focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-water"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop: full number */}
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-lg whitespace-nowrap border border-water px-4 py-2.5 text-sm font-semibold text-water transition-colors hover:bg-water hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water md:inline-flex"
          >
            <PhoneIcon />
            {site.phone}
          </a>

          {/* Phone: icon only */}
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid h-11 w-11 place-items-center rounded-lg border border-water text-water md:hidden"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>

          <Link
            href="/#quote"
            className="hidden rounded-lg bg-sun px-4 py-2.5 text-sm font-semibold text-navy transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:inline-flex"
          >
            Get a free quote
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
