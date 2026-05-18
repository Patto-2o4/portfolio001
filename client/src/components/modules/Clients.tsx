import { Box, Command, Cpu, Layers, Fingerprint, Triangle } from "lucide-react";

export default function Clients() {
  const clients = [
    { id: 1, name: "Fractal", logo: <Box className="w-10 h-10" /> },
    { id: 2, name: "West Creative", logo: <Command className="w-10 h-10" /> },
    { id: 3, name: "SCALER", logo: <Cpu className="w-10 h-10" /> },
    { id: 4, name: "Design Studio", logo: <Layers className="w-10 h-10" /> },
    { id: 5, name: "Tech Innovators", logo: <Fingerprint className="w-10 h-10" /> },
    { id: 6, name: "Creative Labs", logo: <Triangle className="w-10 h-10" /> },
  ];

  return (
    <section id="clients" className="section-padding bg-black border-y border-accent/20">
      <div className="container">
        <h2 className="section-title">Trusted by Leading Brands</h2>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex gap-16 animate-marquee">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center gap-4 whitespace-nowrap min-w-max px-8 py-6 rounded-lg border border-accent/20 hover:border-accent transition-colors duration-300 group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </span>
                <span className="text-lg font-semibold text-gray-300 group-hover:text-accent transition-colors">
                  {client.name}
                </span>
              </div>
            ))}

            {clients.map((client) => (
              <div
                key={`duplicate-${client.id}`}
                className="flex items-center gap-4 whitespace-nowrap min-w-max px-8 py-6 rounded-lg border border-accent/20 hover:border-accent transition-colors duration-300 group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </span>
                <span className="text-lg font-semibold text-gray-300 group-hover:text-accent transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">30+</div>
            <p className="text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
