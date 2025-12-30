import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Logo, HeroLogo } from "@/components/Logo";
import { site } from "@/content/siteData";

function PlaceholderTile({ label }: { label: string }) {
  return (
    <div className="card flex h-40 items-center justify-center text-sm text-black/50">
      {label}
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section id="hero" className="relative bg-brand-navy text-white overflow-hidden">
        {/* Subtle gradient blob */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/20 via-brand-green/10 to-transparent rounded-full blur-3xl translate-x-1/3" />
        </div>

        <div className="container-xl py-20 sm:py-28 relative">
          {/* Hero logo - prominent brand moment, scales by width */}
          <div id="hero-logo" className="mb-12">
            <HeroLogo
              maxWidth={580}
              className="w-[85%] sm:w-[70%] lg:w-[55%]"
            />
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div className="max-w-xl">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                We remove the barrier between your business and the platforms your customers use every day.
              </h1>

              <p className="mt-6 text-xl font-medium text-white/90 sm:text-2xl">
                Reach your community where they are.
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                With Ad Pilot, local businesses show up consistently on social and emerging platforms — without sacrificing their unique brand or their invaluable time.
              </p>

              {/* Pull quote */}
              <blockquote className="mt-8 border-l-4 border-brand-green pl-4 text-white/85 italic">
                &ldquo;It operates as if you were at the helm — even when you&apos;re not.&rdquo;
              </blockquote>

              <p className="mt-8 text-sm font-medium tracking-wide text-white/50 uppercase">
                From hands-on to trusted spokespilot.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="btn-primary" href="#samples">
                  See sample ads
                </a>
                <a
                  className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  href={`mailto:${site.contactEmail}`}
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Right: Brand panel */}
            <div className="relative hidden lg:block">
              {/* Watermark mark behind panel */}
              <div className="absolute -right-8 -top-8 opacity-[0.07]">
                <Logo variant="mark" tone="light" size={200} />
              </div>

              <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Logo variant="mark" tone="light" size={40} />
                  <span className="text-sm font-medium text-white/60">What you get</span>
                </div>

                <ul className="space-y-4">
                  {[
                    "Never generic — trained on your voice",
                    "As detailed or hands-off as you want",
                    "Ads + organic presence, not just one",
                    "You approve everything (or don't)",
                    "Real humans. We answer the phone.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/50">
                    Selective partners only. We work closely with a small number of businesses to keep quality high.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: condensed brand panel */}
          <div className="mt-10 lg:hidden rounded-2xl bg-white/5 border border-white/10 p-6">
            <ul className="grid grid-cols-2 gap-3 text-xs text-white/70">
              {[
                "Never generic",
                "You approve everything",
                "Trained on your voice",
                "We answer the phone",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we do */}
      <Section
        id="what-we-do"
        eyebrow="What we do"
        title="A repeatable system for ads that don’t feel like ads"
        subtitle="Start small, stay high-quality, and build a library of creative that scales across platforms."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {site.features.map((f) => (
            <div key={f.title} className="card p-6">
              <div className="text-base font-semibold">{f.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-black/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section
        id="how-it-works"
        eyebrow="How it works"
        title="Simple inputs → polished outputs"
        subtitle="This is intentionally lightweight so you can start before you have everything perfect."
      >
        <ol className="grid gap-4 md:grid-cols-2">
          {site.steps.map((s, idx) => (
            <li key={s.title} className="card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-navy text-white text-sm">
                  {idx + 1}
                </div>
                <div className="text-base font-semibold">{s.title}</div>
              </div>
              <div className="mt-2 text-sm leading-relaxed text-black/70">{s.desc}</div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Samples */}
      <Section
        id="samples"
        eyebrow="Sample ads"
        title="A few examples (swap these as you go)"
        subtitle="Start with CCC examples, then replace with more general Ad Pilot examples when you’re ready."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {site.samples.map((s) => (
            <div key={s.title} className="card overflow-hidden">
              {/* If you don't have thumbnails yet, delete this Image and use PlaceholderTile */}
              <div className="relative h-44 w-full bg-black/5">
                <Image
                  src={s.thumb}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-black/70">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <PlaceholderTile label="Optional: a short reel embed" />
          <PlaceholderTile label="Optional: static ad mock" />
          <PlaceholderTile label="Optional: testimonial clip" />
        </div>
      </Section>

      {/* Who we are */}
      <Section
        id="who-we-are"
        eyebrow="Who we are"
        title="Small team, high-touch execution"
        subtitle="Put real photos + bios here later. For now, this section helps establish legitimacy."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {site.team.map((t) => (
            <div key={t.name} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-black/5">
                  {/* Add photos later (public/team/...) */}
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="text-base font-semibold">{t.name}</div>
                  <div className="text-sm text-black/60">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-black/70">{t.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 card p-6">
          <div className="text-sm font-semibold">Brand & consent</div>
          <p className="mt-2 text-sm leading-relaxed text-black/70">
            If we use a person’s likeness or voice, we do it with explicit permission and clear documentation.
            (This copy is a placeholder — refine based on your workflow.)
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="A few quick answers"
        subtitle="Keep it short for now — the goal is confidence, not a sales funnel."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {site.faqs.map((f) => (
            <div key={f.q} className="card p-6">
              <div className="text-sm font-semibold">{f.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-black/70">{f.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 card p-6">
          <div>
            <div className="text-sm font-semibold">Need to verify anything?</div>
            <div className="text-sm text-black/70">
              Email us and we’ll respond — we’re intentionally selective right now.
            </div>
          </div>
          <a className="btn-primary" href={`mailto:${site.contactEmail}`}>
            Email {site.name}
          </a>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
