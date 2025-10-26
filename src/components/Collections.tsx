import Image from "next/image";

const collections = [
  {
    title: "Heritage Sarees",
    description: "Hand-loomed mulmul and organza sarees with zari borders.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200",
  },
  {
    title: "Contemporary Co-ords",
    description: "Chic, versatile sets crafted for weekend escapes.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200",
  },
  {
    title: "Menswear Essentials",
    description: "Relaxed tailoring in handwoven khadi and linen.",
    image:
      "https://images.unsplash.com/photo-1521572163474-dbf8a1a86a37?q=80&w=1200",
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-20 sm:py-24">
      <div className="container-grid space-y-12">
        <header className="space-y-4 text-center">
          <span className="section-title">Signature Collections</span>
          <h2 className="font-display text-3xl text-brown sm:text-4xl">
            Curated edits designed to move with Mumbai.
          </h2>
          <p className="mx-auto max-w-2xl text-brown/75">
            Each collection is a conversation between the city&apos;s heritage
            and modern silhouettes—crafted in limited batches to preserve
            craftsmanship and intention.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-brown/15 bg-cream-soft p-6 shadow-sm shadow-brown/10 transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-8 space-y-3">
                <h3 className="font-display text-2xl text-brown">
                  {collection.title}
                </h3>
                <p className="text-sm text-brown/75">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
