const pillars = [
  {
    title: "Slow fashion atelier",
    body: "Each piece is produced in thoughtful runs with master craftsmen across Colaba, Bandra, and Dadar ateliers.",
  },
  {
    title: "Natural textiles only",
    body: "We source khadi, mulmul, silk blends, and handwoven cotton designed to breathe through Mumbai's tropical climate.",
  },
  {
    title: "Community-first supply",
    body: "10% of every collection invests back into artisan-led training programs and women-owned co-operatives.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-grid grid gap-12 lg:grid-cols-[0.65fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="section-title">Our Story</span>
          <h2 className="font-display text-3xl text-brown sm:text-4xl">
            Born from the old mills and new skylines of Mumbai.
          </h2>
          <p className="text-brown/75">
            Mumbai ka maal was founded to document the evolving wardrobe of the
            city. We collaborate with artisans who preserve age-old techniques,
            while rewiring silhouettes for today&apos;s creative class.
          </p>
          <p className="text-brown/75">
            From sunrise chai at Worli sea face to late-night jazz in Bandra,
            our garments are invitations to experience the city through tactile
            storytelling.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="h-full rounded-[2rem] border border-brown/15 bg-cream/80 p-8 shadow-sm shadow-brown/10"
            >
              <h3 className="font-display text-xl text-brown">{pillar.title}</h3>
              <p className="mt-4 text-sm text-brown/75">{pillar.body}</p>
            </article>
          ))}
          <div className="rounded-[2rem] border border-dashed border-brown/30 bg-cream/70 p-8 text-sm text-brown/80">
            <p className="uppercase tracking-[0.35em] text-brown/60">
              Bespoke Atelier
            </p>
            <p className="mt-4">
              Visit our Mumbai atelier by appointment for custom fits, color
              consultation, and monogramming handcrafted by our in-house team.
            </p>
            <a
              href="mailto:care@mumbaikamaal.com"
              className="mt-4 inline-block text-sm font-semibold text-brown underline underline-offset-4"
            >
              Book your session {"->"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
