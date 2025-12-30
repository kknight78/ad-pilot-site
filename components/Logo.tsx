import Image from "next/image";

type Variant = "wordmark" | "mark";
type Tone = "dark" | "light";

const SOURCES: Record<Variant, Record<Tone, string>> = {
  // Wide wordmarks
  wordmark: {
    dark: "/brand/Recurso 23.svg",  // Dark wordmark for white backgrounds
    light: "/brand/Recurso 20.svg"  // Light wordmark for dark backgrounds
  },
  // Square marks
  mark: {
    dark: "/brand/Recurso 18.svg",
    light: "/brand/Recurso 22.svg"
  }
};

export function Logo({
  variant = "wordmark",
  tone = "dark",
  className,
  size = 44
}: {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  /** Rough height for the logo */
  size?: number;
}) {
  const src = SOURCES[variant][tone];

  return (
    <div className={className} style={{ height: size }}>
      <Image
        src={src}
        alt="Ad Pilot"
        width={variant === "mark" ? size : Math.round(size * 2.6)}
        height={size}
        priority
      />
    </div>
  );
}

/**
 * Hero-specific logo that scales by width, not height.
 * Uses the background-removed SVG for minimal padding.
 */
export function HeroLogo({
  className,
  maxWidth = 600
}: {
  className?: string;
  /** Max width in pixels - logo will scale responsively up to this */
  maxWidth?: number;
}) {
  return (
    <div className={className} style={{ width: "100%", maxWidth }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/dark-horizontal-bg-removed.svg"
        alt="Ad Pilot"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
