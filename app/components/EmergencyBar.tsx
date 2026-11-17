import { site } from "@/lib/site";
export default function EmergencyBar() {
  return (
    <div className="bg-navy w-full flex  flex-wrap justify-center text-center gap-3 px-3 py-2 text-sm text-background">
      <p>24/7 emergency call-outs</p>
      <a
        href={site.phoneHref}
        className="text-sun underline font-semibold focus-visible:outline-2 focus-visible:outline-sun"
      >
        {site.phone}
      </a>
    </div>
  );
}
