import Hero from "@/components/modules/Hero";
import Clients from "@/components/modules/Clients";
import Gallery from "@/components/modules/Gallery";
import About from "@/components/modules/About";
import Services from "@/components/modules/Services";
import Projects from "@/components/modules/Projects";
import Testimonials from "@/components/modules/Testimonials";
import Contact from "@/components/modules/Contact";
import Footer from "@/components/modules/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Clients />
      <Gallery />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
