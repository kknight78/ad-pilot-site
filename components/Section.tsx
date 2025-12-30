export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-18">
      <div className="container-xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="pill mb-4 w-fit">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-blue" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-black/70">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
