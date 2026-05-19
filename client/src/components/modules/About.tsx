import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import CtaButton from "@/components/ui/CtaButton";
import { Lightbulb, Layers, BrainCircuit, Box, Workflow, Download } from "lucide-react";
import Avatar from "@/assets/images/Avatar.png"; // Import avatar

export default function About() {
  const { t } = useLanguage();
  const decorativeIcons = [
    { id: 1, icon: <Lightbulb />, top: "10%", left: "10%", delay: "0s" },
    { id: 2, icon: <Layers />, top: "20%", right: "15%", delay: "0.5s" },
    { id: 3, icon: <BrainCircuit />, top: "60%", left: "5%", delay: "1s" },
    { id: 4, icon: <Box />, top: "70%", right: "10%", delay: "0.3s" },
    { id: 5, icon: <Workflow />, top: "40%", right: "5%", delay: "0.7s" },
  ];

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {decorativeIcons.map((item) => (
        <div
          key={item.id}
          className="absolute text-4xl opacity-30 animate-float"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-transparent rounded-3xl blur-3xl"></div>

              <div className="relative w-full h-full bg-card rounded-3xl border border-[#6366F1]/20 flex items-center justify-center overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/10 to-[#6366F1]/0 animate-pulse"></div>
                </div>

                <div className="relative z-0 w-full h-full">
                  <img
                    src={Avatar} // Sử dụng avatar đã import
                    alt="Patto Profile"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                {t("aboutHeading")}
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("aboutText1")}
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("aboutText2")}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">My Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "UX/UI Design",
                    "Design Systems",
                    "Prototyping",
                    "User Research",
                    "Wireframing",
                    "Interaction Design",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 rounded-lg border border-[#6366F1]/30 hover:border-[#6366F1] hover:bg-[#6366F1]/10 transition-all duration-300 text-muted-foreground hover:text-[#6366F1]"
                    >
                      + {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <CtaButton href="#contact" isPrimary>
                  Let's Work Together
                </CtaButton>
                {/* Nút Download CV */}
                <a 
                  href="/Patto_CV.pdf" // Đường dẫn tới file CV trong public
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
