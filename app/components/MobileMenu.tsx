"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid h-11 w-11 place-items-center rounded-lg border cursor-pointer border-slate-300 text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water"
      >
        {open ? (
          // ✕ icon
          <XMarkIcon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-6 w-6"
          />
        ) : (
          // ☰ icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-6 w-6"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>
      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white shadow-lg"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-6xl px-4 py-4">
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 3. The two actions, full width */}
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <a
                href={site.phoneHref}
                onClick={close}
                className="rounded-lg border border-water px-4 py-3 text-center font-semibold text-water"
              >
                Call {site.phone}
              </a>
              <Link
                href="/#quote"
                onClick={close}
                className="rounded-lg bg-sun px-4 py-3 text-center font-semibold text-navy"
              >
                Get a free quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
