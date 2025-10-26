import Image from "next/image";

const lookbookImages = [
  {
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200",
    caption: "Byculla Morning Runway",
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200",
    caption: "Monsoon Palette",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",
    caption: "After-hours Edit",
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200",
    caption: "Kala Ghoda Alleyway",
  },
];

export function Lookbook() {
  return (
    <section id="lookbook" className="py-20 sm:py-24">
      <div className="container-grid space-y-12">
        <header className="space-y-4 text-center">
          <span className="section-title">Lookbook 2025</span>
          <h2 className="font-display text-3xl text-brown sm:text-4xl">
            A visual love letter to the city that never slows.
          </h2>
          <p className="mx-auto max-w-2xl text-brown/75">
            Shot across hidden rooftops, art districts, and seaside promenades,
            the lookbook celebrates how Mumbai shapes our style vocabulary.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-6">
          <div className="relative col-span-3 overflow-hidden rounded-[2.5rem] border border-brown/15">
            <Image
              src={lookbookImages[0].src}
              alt={lookbookImages[0].caption}
              fill
              className="object-cover"
            />
            <p className="absolute inset-x-6 bottom-6 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-brown">
              {lookbookImages[0].caption}
            </p>
          </div>
          <div className="relative col-span-3 overflow-hidden rounded-[2.5rem] border border-brown/15">
            <Image
              src={lookbookImages[1].src}
              alt={lookbookImages[1].caption}
              fill
              className="object-cover"
            />
            <p className="absolute inset-x-6 bottom-6 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-brown">
              {lookbookImages[1].caption}
            </p>
          </div>
          <div className="relative col-span-4 overflow-hidden rounded-[2.5rem] border border-brown/15">
            <Image
              src={lookbookImages[2].src}
              alt={lookbookImages[2].caption}
              fill
              className="object-cover"
            />
            <p className="absolute inset-x-6 bottom-6 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-brown">
              {lookbookImages[2].caption}
            </p>
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-[2.5rem] border border-brown/15">
            <Image
              src={lookbookImages[3].src}
              alt={lookbookImages[3].caption}
              fill
              className="object-cover"
            />
            <p className="absolute inset-x-6 bottom-6 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-brown">
              {lookbookImages[3].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
