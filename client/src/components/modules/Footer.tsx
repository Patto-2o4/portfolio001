import AnimatedSection from "@/components/AnimatedSection";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 py-20">
        <AnimatedSection direction="up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-3xl font-black text-foreground mb-4 tracking-wider">
                PATTO<span className="text-accent">.</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                3D Designer & Creative Technologist crafting immersive digital experiences.
                Transforming ideas into stunning visual realities.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/pham.tuan.anh.29784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-all duration-300 text-sm font-semibold"
                >
                  FB
                </a>
                <a
                  href="https://www.instagram.com/patto_2o4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-all duration-300 text-sm font-semibold"
                >
                  IG
                </a>
                <a
                  href="https://www.behance.net/lnguyn106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-all duration-300 text-sm font-semibold"
                >
                  BE
                </a>
                <a
                  href="https://www.tiktok.com/@tuananhcutehehe?lang=vi-VN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-foreground transition-all duration-300 text-sm font-semibold"
                >
                  TT
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-muted-foreground hover:text-accent transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-bold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:Patto2k4@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Patto2k4@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-muted-foreground">
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <div className="divider my-12"></div>

        <AnimatedSection direction="up" delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              Copyright &copy; {currentYear} Patto. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-foreground flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7-7m0 0l-7 7m7-7v12" />
        </svg>
      </a>
    </footer>
  );
}
