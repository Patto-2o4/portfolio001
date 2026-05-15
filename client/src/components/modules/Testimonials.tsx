export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Creative Director, Design Studio",
      avatar: "S",
      rating: 5,
      content:
        "Alex's work is exceptional. The 3D models are incredibly detailed and the animations are smooth and professional. Highly recommended!",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, Tech Innovations",
      avatar: "M",
      rating: 5,
      content:
        "Working with Alex transformed our product visualization. The quality and attention to detail exceeded our expectations. A true professional.",
    },
    {
      id: 3,
      name: "Emma Davis",
      position: "Marketing Manager, E-commerce Brand",
      avatar: "E",
      rating: 5,
      content:
        "The 3D product renders increased our conversion rate by 40%. Alex understood our vision perfectly and delivered beyond expectations.",
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Architect, Urban Development",
      avatar: "J",
      rating: 5,
      content:
        "Alex created stunning architectural animations that helped us win the project. The quality was outstanding and the process was smooth.",
    },
  ];

  return (
    <section className="section-padding bg-black border-y border-[#FF006E]/20">
      <div className="container">
        <h2 className="section-title">What Clients Are Saying</h2>

        <div className="grid-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl border border-[#FF006E]/20 hover:border-[#FF006E] hover:bg-[#FF006E]/5 transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#FF006E] text-lg">
                    *
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="divider mb-6"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF006E] to-[#FF1493] flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>

                <div>
                  <h4 className="font-bold text-white group-hover:text-[#FF006E] transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl border border-[#FF006E]/20 hover:border-[#FF006E] transition-colors">
            <div className="text-5xl font-bold text-[#FF006E] mb-2">4.9/5</div>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="text-center p-8 rounded-2xl border border-[#FF006E]/20 hover:border-[#FF006E] transition-colors">
            <div className="text-5xl font-bold text-[#FF006E] mb-2">30+</div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center p-8 rounded-2xl border border-[#FF006E]/20 hover:border-[#FF006E] transition-colors">
            <div className="text-5xl font-bold text-[#FF006E] mb-2">100%</div>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
