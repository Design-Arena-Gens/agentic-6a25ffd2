const links = [
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/15 bg-cream/90 backdrop-blur">
      <div className="container-grid flex h-20 items-center justify-between">
        <span className="text-lg font-semibold uppercase tracking-[0.55em] text-brown">
          Mumbai ka maal
        </span>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brown/80 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-brown"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#new-arrivals"
          className="rounded-full border border-brown px-5 py-2 text-sm font-medium text-brown transition-colors hover:bg-brown hover:text-cream"
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}
