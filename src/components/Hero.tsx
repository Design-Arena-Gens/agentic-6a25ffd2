import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-soft to-cream" />
        <div className="absolute -top-48 right-24 h-96 w-96 rounded-full bg-brown/10 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-72 w-72 rotate-12 rounded-full bg-clay/20 blur-3xl" />
      </div>
      <div className="container-grid relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <span className="section-title">Mumbai Crafted Luxury</span>
          <h1 className="font-display text-4xl leading-tight text-brown sm:text-5xl md:text-6xl">
            Timeless silhouettes inspired by the soul of Mumbai.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-brown/80">
            Discover the Mumbai ka maal signature line—artisan-made pieces in
            natural fabrics, curated couture, and elevated everyday essentials.
            Intentionally crafted, seasonless, and unapologetically Mumbai.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#new-arrivals"
              className="rounded-full bg-brown px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cream transition-all hover:bg-brown-deep"
            >
              Explore arrivals
            </a>
            <a
              href="#lookbook"
              className="rounded-full border border-brown px-6 py-3 text-sm font-semibold uppercase tracking-widest text-brown transition-all hover:bg-brown hover:text-cream"
            >
              View lookbook
            </a>
          </div>
          <div className="grid gap-6 text-sm uppercase tracking-[0.35em] text-brown/70 sm:grid-cols-3">
            <span className="border-l border-brown/20 pl-4">
              Ethical <br /> Sourcing
            </span>
            <span className="border-l border-brown/20 pl-4">
              Handcrafted <br /> Editions
            </span>
            <span className="border-l border-brown/20 pl-4">
              Mumbai <br /> Atelier
            </span>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[3rem] border border-brown/10 bg-cream-soft p-6 shadow-xl shadow-brown/10 sm:max-w-md">
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brown/5 via-transparent to-transparent" />
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200"
              alt="Mumbai ka maal statement outfit"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-brown/20 bg-cream/90 p-6 text-brown shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-brown/70">
                Featured Edit
              </p>
              <h3 className="mt-2 font-display text-2xl">
                Colaba Dusk Co-ord Set
              </h3>
              <p className="mt-1 text-sm text-brown/70">
                Silk-linen blend with hand embroidery inspired by Marine Drive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
