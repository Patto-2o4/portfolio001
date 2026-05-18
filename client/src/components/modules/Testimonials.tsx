import AnimatedSection from "@/components/AnimatedSection";
import AnimatedItem from "@/components/AnimatedItem";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Creative Director, Design Studio",
      avatar: "S",
      rating: 5,
      content:
        "Patto's work is exceptional. The 3D models are incredibly detailed and the animations are smooth and professional. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, Tech Innovations",
      avatar: "M",
      rating: 5,
      content:
        "Working with Patto transformed our product visualization. The quality and attention to detail exceeded our expectations. A true professional.",
    },
    {
      id: 3,
      name: "Emma Davis",
      position: "Marketing Manager, E-commerce Brand",
      avatar: "E",
      rating: 5,
      content:
        "The 3D product renders increased our conversion rate by 40%. Patto understood our vision perfectly and delivered beyond expectations.",
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Architect, Urban Development",
      avatar: "J",
      rating: 5,
      content:
        "Patto created stunning architectural animations that helped us win the project. The quality was outstanding and the process was smooth.",
    },
  ];

  return (
    <section className="section-padding bg-background border-y border-accent/20">
      <div className="container">
        <AnimatedSection direction="up">
          <h2 className="section-title">What Clients Are Saying</h2>
        </AnimatedSection>

        <div className="grid-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedItem key={testimonial.id} index={index}>
              <div className="bg-card p-8 rounded-2xl border border-accent/20 hover:border-accent hover:bg-accent/5 transition-all duration-300 group">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      *
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-lg mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="divider mb-6"></div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedSection delay={0.4} direction="up">
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card text-center p-8 rounded-2xl border border-accent/20 hover:border-accent transition-colors">
              <div className="text-5xl font-bold text-accent mb-2">4.9/5</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="bg-card text-center p-8 rounded-2xl border border-accent/20 hover:border-accent transition-colors">
              <div className="text-5xl font-bold text-accent mb-2">30+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-card text-center p-8 rounded-2xl border border-accent/20 hover:border-accent transition-colors">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
