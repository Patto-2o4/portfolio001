import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF006E] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
          LET'S GET IN
          <br />
          <span className="gradient-text">TOUCH</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Have a project in mind? Let's collaborate and create something amazing together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-12">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Email</p>
              <a
                href="mailto:alex@example.com"
                className="text-3xl font-bold text-white hover:text-[#FF006E] transition-colors"
              >
                alex@example.com
              </a>
            </div>

            <div className="mb-12">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Phone</p>
              <a
                href="tel:+1234567890"
                className="text-3xl font-bold text-white hover:text-[#FF006E] transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>

            <div className="mb-12">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Location</p>
              <p className="text-xl text-gray-300">San Francisco, CA</p>
            </div>

            <div className="mb-12">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-[#FF006E] flex items-center justify-center text-[#FF006E] hover:bg-[#FF006E] hover:text-white transition-all duration-300 text-lg"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-[#FF006E] flex items-center justify-center text-[#FF006E] hover:bg-[#FF006E] hover:text-white transition-all duration-300 text-lg"
                >
                  t
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-[#FF006E] flex items-center justify-center text-[#FF006E] hover:bg-[#FF006E] hover:text-white transition-all duration-300 text-lg"
                >
                  in
                </a>
              </div>
            </div>

            <div className="text-8xl opacity-20 mt-20">E</div>
          </div>

          <div className="p-8 rounded-2xl border border-[#FF006E]/20 bg-[#FF006E]/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#FF006E]/20 text-white placeholder-gray-600 focus:border-[#FF006E] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#FF006E]/20 text-white placeholder-gray-600 focus:border-[#FF006E] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#FF006E]/20 text-white placeholder-gray-600 focus:border-[#FF006E] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              I'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
