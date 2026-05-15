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
    <section className="section-padding bg-black border-y border-[#FF006E]/20">
      <div className="container">
        <h2 className="section-title">What I Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl border border-[#FF006E]/20 hover:border-[#FF006E] hover:bg-[#FF006E]/5 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF006E]/0 via-[#FF006E]/5 to-[#FF006E]/0"></div>
              </div>

              <div className="relative z-10">
                <div className="text-6xl font-bold text-[#FF006E] opacity-20 mb-4">
                  {service.number}
                </div>

                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF006E] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#FF006E] font-semibold hover:gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  Learn More
                  <span>-&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl border border-[#FF006E]/20 bg-[#FF006E]/5">
          <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
          <p className="text-gray-400 mb-6">
            Don't see the service you need? I provide custom solutions to meet specific project requirements.
            Contact me to discuss your ideas.
          </p>
          <a href="#contact">
            <button className="btn-primary">Get In Touch</button>
          </a>
        </div>
      </div>
    </section>
  );
}
