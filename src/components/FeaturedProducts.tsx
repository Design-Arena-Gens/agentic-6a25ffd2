import Image from "next/image";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

const products: Product[] = [
  {
    name: "Bandra Breeze Jacket",
    description: "Textured cotton jacket with brass hardware and block print lining.",
    price: "₹12,900",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
    tag: "New",
  },
  {
    name: "Marine Drive Maxi",
    description: "Fluid silhouette in silk crepe featuring hand-beaded neckline.",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1434389677669-aca9f8056c9a?q=80&w=1200",
    tag: "Limited",
  },
  {
    name: "Kala Ghoda Tote",
    description: "Vegetable-tanned leather tote with hand-braided handles.",
    price: "₹9,800",
    image: "https://images.unsplash.com/photo-1521572163474-dbf8a1a86a37?q=80&w=1200",
    tag: "Restocked",
  },
];

export function FeaturedProducts() {
  return (
    <section id="new-arrivals" className="py-20 sm:py-24">
      <div className="container-grid space-y-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-title">New Arrivals</span>
            <h2 className="mt-4 font-display text-3xl text-brown sm:text-4xl">
              Spotlight pieces for the season ahead.
            </h2>
          </div>
          <a
            href="#"
            className="self-start rounded-full border border-brown px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-brown transition-colors hover:bg-brown hover:text-cream"
          >
            View all
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-brown/10 bg-cream-soft shadow-sm shadow-brown/10 transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-6 top-6 rounded-full bg-cream/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brown">
                  {product.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <div>
                  <h3 className="font-display text-2xl text-brown">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-brown/70">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between text-sm font-semibold text-brown">
                  <span>{product.price}</span>
                  <button className="rounded-full bg-brown px-5 py-2 text-xs uppercase tracking-[0.35em] text-cream transition-all hover:bg-brown-deep">
                    Add to bag
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
