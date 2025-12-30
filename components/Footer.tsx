import { site } from "@/content/siteData";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="container-xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo variant="mark" tone="dark" size={28} />
          <div>
            <div className="text-sm font-medium">{site.name}</div>
            <div className="text-xs text-black/60">{site.tagline}</div>
          </div>
        </div>

        <div className="text-xs text-black/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
