import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Lookbook } from "@/components/Lookbook";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <FeaturedProducts />
        <Lookbook />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
