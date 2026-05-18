import AnimatedSection from "@/components/AnimatedSection";
import AnimatedItem from "@/components/AnimatedItem";

export default function Services() {
  const services = [
    {
      id: 1,
      number: "01",
      title: "3D Modeling",
      description:
        "Create detailed 3D models from concept to final product. Using professional tools like Blender, Maya, and Cinema 4D.",
      icon: "M",
    },
    {
      id: 2,
      number: "02",
      title: "3D Animation",
      description:
        "Create dynamic animations to tell your brand story. From motion graphics to complex character animation.",
      icon: "A",
    },
    {
      id: 3,
      number: "03",
      title: "Product Visualization",
      description:
        "Visualize products with high quality for e-commerce, marketing, and sales. Increase conversion rates.",
      icon: "P",
    },
    {
      id: 4,
      number: "04",
      title: "VR/AR Development",
      description:
        "Develop immersive VR and AR experiences for interactive engagement. The future of technology, today.",
      icon: "V",
    },
  ];

  return (
    <section className="section-padding bg-background border-y border-accent/20">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">What I Offer</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <AnimatedItem key={service.id} index={index}>
              <div className="bg-card p-10 rounded-3xl border border-[#6366F1]/20 group-hover:border-[#6366F1] transition-colors duration-500 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-6xl font-bold text-accent opacity-20 mb-4">
                    {service.number}
                  </div>

                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    Learn More
                    <span>-&gt;</span>
                  </a>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection delay={0.4} direction="up">
          <div className="mt-20 p-8 rounded-2xl border border-accent/20 bg-accent/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">Custom Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Don't see the service you need? I provide custom solutions to meet specific project requirements.
              Contact me to discuss your ideas.
            </p>
            <a href="#contact">
              <button className="btn-primary">Get In Touch</button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
