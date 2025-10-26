export function Footer() {
  return (
    <footer className="border-t border-brown/15 bg-cream-soft">
      <div className="container-grid flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.55em] text-brown/70">
            Mumbai ka maal
          </span>
          <p className="max-w-xs text-sm text-brown/70">
            Shop the curated wardrobe that celebrates Mumbai&apos;s rhythm.
          </p>
        </div>
        <div className="grid gap-6 text-sm text-brown/70 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-brown">Visit</p>
            <p className="mt-2">
              12 Mandvi Street, Colaba <br />
              Mumbai 400005
            </p>
          </div>
          <div>
            <p className="font-semibold text-brown">Contact</p>
            <p className="mt-2">care@mumbaikamaal.com</p>
            <p className="mt-1">+91 98200 12345</p>
          </div>
          <div>
            <p className="font-semibold text-brown">Follow</p>
            <p className="mt-2">@mumbaikamaal on Instagram</p>
            <p className="mt-1">Pinterest / Threads</p>
          </div>
        </div>
      </div>
      <div className="border-t border-brown/10 py-6">
        <div className="container-grid flex flex-col gap-3 text-xs text-brown/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mumbai ka maal. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.35em]">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
