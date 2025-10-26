const testimonials = [
  {
    name: "Mira, stylist",
    quote:
      "Mumbai ka maal balances modern edge with heritage craft. Every piece photographs beautifully and wears even better.",
  },
  {
    name: "Rahul, founder",
    quote:
      "Their co-ord sets have become my travel staple. Light, breathable, and always in tune with the city's energy.",
  },
  {
    name: "Pari, editor",
    quote:
      "The atelier experience is unmatched. Thoughtful fits, rich textures, and mindful luxury made in Mumbai.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-grid">
        <div className="rounded-[2.5rem] border border-brown/15 bg-gradient-to-br from-cream to-cream-soft p-12 shadow-lg shadow-brown/10 sm:p-16">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <span className="section-title">The word in the city</span>
              <h2 className="font-display text-3xl text-brown sm:text-4xl">
                Trusted by stylists, creatives, and cultural insiders.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-brown/70">
              Mumbai ka maal partners with stylists, editors, and cultural
              storytellers to bring slow fashion to the forefront of the city.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-brown/15 bg-cream-soft/70 p-8 text-sm text-brown/80"
              >
                <p className="leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-6 text-xs uppercase tracking-[0.35em] text-brown/60">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
