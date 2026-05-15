import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">
      <nav className="navbar">
        <div className="container flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-white">
            ALEX<span className="text-[#FF006E]">.</span>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-300 hover:text-[#FF006E] transition-colors">
              About
            </a>
            <a href="#clients" className="text-gray-300 hover:text-[#FF006E] transition-colors">
              Customers
            </a>
            <a href="#projects" className="text-gray-300 hover:text-[#FF006E] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#FF006E] transition-colors">
              Contact
            </a>
          </div>

          <Button className="btn-primary hidden md:block">
            Get In Touch
          </Button>
        </div>
      </nav>

      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 pt-32 pb-20">
        <div className="flex-1 z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            HI, I'M
            <br />
            <span className="gradient-text">ALEX</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            I'm a 3D Designer & Creative Technologist specializing in immersive digital experiences.
            Transforming ideas into stunning visual realities.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-lg">
            With 5+ years of experience in 3D modeling, animation, and product design, I've worked
            with leading brands to create memorable digital experiences.
          </p>

          <div className="flex gap-6 flex-wrap">
            <a href="mailto:alex@example.com">
              <Button className="btn-primary">
                CONTACT ME
              </Button>
            </a>
            <a href="#projects">
              <Button className="btn-secondary">
                VIEW MY WORK
              </Button>
            </a>
          </div>

          <div className="flex gap-6 mt-12">
            <a href="#" className="text-gray-400 hover:text-[#FF006E] transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF006E] transition-colors text-sm">
              Behance
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FF006E] transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex-1 relative h-96 md:h-[500px] w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/20 to-transparent rounded-full blur-3xl"></div>

          <div className="relative w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl border border-[#FF006E]/20 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF006E]/0 via-[#FF006E]/10 to-[#FF006E]/0 animate-pulse"></div>
            </div>

            <div className="text-center z-10">
              <div className="text-6xl mb-4">Art</div>
              <p className="text-gray-400 text-sm">3D Model / Hero Image</p>
              <p className="text-gray-600 text-xs mt-2">Replace with your 3D model or hero image</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-gray-500 text-sm">Scroll to explore</p>
        <svg className="w-5 h-5 text-[#FF006E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
