import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import CtaButton from "@/components/ui/CtaButton";

export default function About() {
  const { t } = useLanguage();
  const decorativeIcons = [
    { id: 1, icon: "H", top: "10%", left: "10%", delay: "0s" },
    { id: 2, icon: "S", top: "20%", right: "15%", delay: "0.5s" },
    { id: 3, icon: "F", top: "60%", left: "5%", delay: "1s" },
    { id: 4, icon: "D", top: "70%", right: "10%", delay: "0.3s" },
    { id: 5, icon: "A", top: "40%", right: "5%", delay: "0.7s" },
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

              <div className="relative w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl border border-[#6366F1]/20 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/0 via-[#6366F1]/10 to-[#6366F1]/0 animate-pulse"></div>
                </div>

                <div className="text-center z-10">
                  <div className="text-7xl mb-4">P</div>
                  <p className="text-muted-foreground text-sm">Your Profile Photo</p>
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

              <CtaButton href="#contact" variant="main">
                Let's Work Together
              </CtaButton>
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
