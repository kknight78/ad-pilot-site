import { site } from "@/content/siteData";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="container-xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/footer-logo.svg" alt={site.name} className="h-10 w-auto" />
            <div>
              <div className="text-sm font-medium">{site.name}</div>
              <div className="text-xs text-black/60">{site.tagline}</div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-medium">Have questions for us?</div>
            <div className="text-xs text-black/60">info@ad-pilot.ai</div>
          </div>
        </div>

        <div className="mt-6 text-xs text-black/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
