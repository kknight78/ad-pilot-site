import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Logo, HeroLogo } from "@/components/Logo";
import { Accordion } from "@/components/Accordion";
import { CopyEmail } from "@/components/CopyEmail";
import { site } from "@/content/siteData";
import { RefreshCw, Layers, Users, BarChart3, Wrench, Rocket, Sparkles, Monitor, MessageSquare, Clapperboard, Handshake } from "lucide-react";

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

              <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                With Ad Pilot, local businesses show up consistently on social and emerging platforms without sacrificing their time or what makes them them.
              </p>

              {/* Pull quote */}
              <blockquote className="mt-8 border-l-4 border-brand-green pl-4">
                <p className="text-white/85">
                  &ldquo;It operates as if you were at the helm, <em className="italic">even when you&apos;re not.</em>&rdquo;
                </p>
                <cite className="mt-2 block text-sm text-white/50 not-italic">
                  - Owner, independent local business
                </cite>
              </blockquote>


              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a className="btn-primary" href="#how-it-works">
                  See how it works
                </a>
                <a
                  className="btn border border-white/20 bg-white/10 text-white hover:bg-white/20"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* What we do */}
      <Section
        id="what-we-do"
        eyebrow="What we do"
        title="Weekly marketing without the constant work"
        subtitle="New content each week across your platforms, without becoming a second job."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
              <MessageSquare className="h-5 w-5 text-brand-blue/90" />
            </div>
            <div className="text-base font-semibold">Messaging that sounds like your business</div>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              We create ads and videos that match your business's tone, your products and services, and how you want to show up in your community.
            </p>
          </div>

          <div className="card p-5">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
              <Clapperboard className="h-5 w-5 text-brand-blue/90" />
            </div>
            <div className="text-base font-semibold">New videos every week without recording every week</div>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Each template can produce dozens of variations without starting from scratch. Everything is reviewable and tweakable before anything runs.
            </p>
          </div>

          <div className="card p-5">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
              <Handshake className="h-5 w-5 text-brand-blue/90" />
            </div>
            <div className="text-base font-semibold">Guided onboarding, ongoing support, and growth</div>
            <p className="mt-2 text-sm leading-relaxed text-black/65">
              Step-by-step onboarding, then weekly planning and reporting to keep improving results. Real humans, real support. We answer the phone.
            </p>
          </div>
        </div>
      </Section>

      {/* The challenge */}
      <section id="the-challenge" className="py-12 sm:py-16">
        <div className="container-xl">
          {/* Header block */}
          <div className="max-w-3xl bg-brand-blue/[0.03] rounded-2xl px-6 py-5 -mx-6 sm:mx-0">
            <div className="pill mb-4 w-fit">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-blue" />
              The challenge
            </div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Digital marketing is a moving target.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-black/70">
                To get results, businesses need a weekly content plan-new ads + videos across platforms.
              </p>
              <p className="mt-2 text-base leading-relaxed text-black/70">
                And it has to sound like you-not like a generic template.
              </p>
          </div>

          <p className="mt-10 mb-4 text-sm font-medium text-brand-blue">
            Four things most businesses don't realize until they try it
          </p>

          <div className="grid gap-3 md:gap-4 md:grid-cols-2">
            <div className="card bg-white/60 border-black/5 shadow-sm p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <RefreshCw className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Is one ad every few weeks enough?</div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                Usually not. Results fade when people see the same message repeatedly. Staying steady takes new ads + new video variations week after week.
              </p>
            </div>

            <div className="card bg-white/60 border-black/5 shadow-sm p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <Layers className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Can I publish the same ad to every platform?</div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                Copy/paste rarely performs. Each platform rewards different pacing and formatting-so the same idea needs platform-native versions.
              </p>
            </div>

            <div className="card bg-white/60 border-black/5 shadow-sm p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <Users className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Can I just run ads… or do I need non-ad videos too?</div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                You need both: promotional ads and non-ad videos that build trust (expertise, proof, community). Local businesses win by sounding like themselves-not generic "any-business" ads.
              </p>
            </div>

            <div className="card bg-white/60 border-black/5 shadow-sm p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <BarChart3 className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Is running ads "set it once," or is it a full-time maze?</div>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                It's a maze. Platforms have different rules, formats, and reports-and they change constantly. Good decisions require synthesizing performance across channels into a next plan.
                <span className="block mt-2 text-black/50 italic">
                  (If you've ever set up an ad account and thought "forget this," you're not alone.)
                </span>
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium text-black/80 text-center">
            This is why it feels impossible to keep up.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-14 sm:py-18">
        <div className="container-xl">
          {/* Header block */}
          <div className="max-w-3xl">
            <div className="pill mb-4 w-fit">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-blue" />
              How it works
            </div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Keeping up, made manageable.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-black/70">
              A clear path from onboarding to ongoing improvement.
            </p>
          </div>

          {/* Cards grid */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {/* Card 1: Onboarding */}
            <div className="card p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <Wrench className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Onboarding and build (one time)</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                We set the foundation together: accounts or partner access, inventory or offers, brand blueprint, platforms, budget, goals, and your first Spokes-Pilot Twin.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Then we build your templates, portal, and planning agents around your business.
              </p>
            </div>

            {/* Card 2: Kickoff */}
            <div className="card p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <Rocket className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Kickoff (week 1)</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                We produce your first batch of ads and videos. You review, we tweak, you approve.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Once approved, we launch and your campaigns start running.
              </p>
            </div>

            {/* Card 3: Run and report */}
            <div className="card p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <BarChart3 className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Run and report (weekly)</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                Content runs across your selected platforms. You get a weekly snapshot and a clear next plan.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                We tell you what to run more of, what to change, and what to try next.
              </p>
            </div>

            {/* Card 4: Improve and expand */}
            <div className="card p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 mb-3">
                <RefreshCw className="h-5 w-5 text-brand-blue/90" />
              </div>
              <div className="text-base font-semibold">Improve and expand (ongoing)</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                We iterate creative, refresh templates, and expand formats and platforms as you are ready.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/65">
                The system gets stronger over time without increasing your workload.
              </p>
            </div>

            {/* Keeping it fresh strip */}
            <div className="md:col-span-2 rounded-2xl bg-brand-green/5 border border-brand-green/10 p-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green/10 shrink-0">
                  <Sparkles className="h-5 w-5 text-brand-green" />
                </div>
                <div>
                  <div className="text-base font-semibold">Keeping it fresh (recommended, easy)</div>
                  <p className="mt-1 text-sm leading-relaxed text-black/65">
                    Keep inventory current, rotate avatar styles, swap music and backgrounds, and add new templates when you want more variety.
                  </p>
                </div>
              </div>
            </div>

            {/* Your portal strip */}
            <div className="md:col-span-2 card p-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 shrink-0">
                  <Monitor className="h-5 w-5 text-brand-blue/90" />
                </div>
                <div>
                  <div className="text-base font-semibold">Your portal</div>
                  <p className="mt-1 text-sm leading-relaxed text-black/65">
                    Most weeks, you just review and click Approve. Or dive into details anytime to see what is live, what is next, and what changed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <Section
        id="who-we-are"
        eyebrow="Who we are"
        title="Small team, high-touch execution"
        subtitle="We stay hands-on so quality stays high, and we do not disappear after onboarding."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-5">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-black/60">KK</span>
              </div>
              <div>
                <div className="text-base font-semibold">Kelly Knight</div>
                <div className="text-sm text-black/60">Founder</div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-black/65">
              Builds the system end to end, from creative strategy to reporting, with a focus on what local businesses can sustain.
            </p>
          </div>

          <div className="card p-5">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-black/5 flex items-center justify-center shrink-0">
                <span className="text-sm font-semibold text-black/60">ES</span>
              </div>
              <div>
                <div className="text-base font-semibold">Eric Sears</div>
                <div className="text-sm text-black/60">Director of Sales</div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-black/65">
              Leads partner onboarding, helps shape messaging that fits the business, and stays involved as we improve performance.
            </p>
          </div>
        </div>

        <div className="mt-6 card p-5">
          <div className="text-base font-semibold">Brand and consent</div>
          <p className="mt-2 text-sm leading-relaxed text-black/65">
            If we use a person's likeness or voice, it is always done with explicit permission and clear documentation. Everything is reviewable before publish.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="A few quick answers"
      >
        <Accordion items={site.faqs} />
      </Section>

      {/* Contact */}
      <section id="contact" className="py-14 sm:py-18 bg-brand-navy text-white">
        <div className="container-xl text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-blue" />
            Contact
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-base text-white/70">
            Email us at:
          </p>
          <CopyEmail email="info@ad-pilot.ai" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
