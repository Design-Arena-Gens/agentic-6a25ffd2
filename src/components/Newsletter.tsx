export function Newsletter() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-grid">
        <div className="rounded-[2.5rem] border border-brown/20 bg-brown text-cream">
          <div className="grid gap-10 p-12 sm:p-16 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-4">
              <span className="uppercase tracking-[0.35em] text-cream/80">
                The Mumbai Dispatch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl">
                Join our monthly curation.
              </h2>
              <p className="text-cream/80">
                Access pre-orders, atelier invites, and editorials exploring the
                subculture shaping Mumbai style.
              </p>
            </div>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Email address"
                className="h-12 flex-1 rounded-full border border-cream/40 bg-transparent px-6 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none focus:ring-2 focus:ring-cream/40"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-cream px-8 text-xs font-semibold uppercase tracking-[0.35em] text-brown transition-transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
