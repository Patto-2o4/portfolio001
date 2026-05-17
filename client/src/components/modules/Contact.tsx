import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import AnimatedSection from "@/components/AnimatedSection";

/**
 * MODULE: Contact Section
 * =======================
 * Muc dich: Form lien he voi EmailJS integration
 * 
 * Cau hinh EmailJS:
 * 1. Vao https://www.emailjs.com
 * 2. Dang ky tai khoan
 * 3. Lay Service ID, Template ID, Public Key
 * 4. Thay doi cac gia tri duoi day
 */

// EMAILJS CONFIG - Thay doi cac gia tri nay
const EMAILJS_SERVICE_ID = "service_your_service_id"; // Lay tu EmailJS dashboard
const EMAILJS_TEMPLATE_ID = "template_your_template_id"; // Lay tu EmailJS dashboard
const EMAILJS_PUBLIC_KEY = "your_public_key"; // Lay tu EmailJS dashboard
const RECIPIENT_EMAIL = "Patto2k4@gmail.com"; // Email nhan tin nhan

// Khoi tao EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

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
      toast.error("Vui long dien day du tat ca cac truong");
      setIsSubmitting(false);
      return;
    }

    try {
      // Gui email qua EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: RECIPIENT_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Tin nhan da duoc gui thanh cong! Toi se phan hoi trong 24 gio.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Co loi khi gui tin nhan. Vui long thu lai.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1] rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <AnimatedSection direction="up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
            LET'S GET IN
            <br />
            <span className="gradient-text">TOUCH</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Co du an trong dau? Hay cung toi tao ra dieu gi tuyet voi.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="left">
            <div>
              <div className="mb-12">
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Email</p>
                <a
                  href="mailto:Patto2k4@gmail.com"
                  className="text-3xl font-bold text-white hover:text-[#6366F1] transition-colors"
                >
                  Patto2k4@gmail.com
                </a>
              </div>

              <div className="mb-12">
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-3xl font-bold text-white hover:text-[#6366F1] transition-colors"
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
                    className="w-12 h-12 rounded-full border border-[#6366F1] flex items-center justify-center text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-all duration-300 text-lg"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-[#6366F1] flex items-center justify-center text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-all duration-300 text-lg"
                  >
                    t
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-[#6366F1] flex items-center justify-center text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition-all duration-300 text-lg"
                  >
                    in
                  </a>
                </div>
              </div>

              <div className="text-8xl opacity-20 mt-20">E</div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="p-8 rounded-2xl border border-[#6366F1]/20 bg-[#6366F1]/5">
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
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#6366F1]/20 text-white placeholder-gray-600 focus:border-[#6366F1] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#6366F1]/20 text-white placeholder-gray-600 focus:border-[#6366F1] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#6366F1]/20 text-white placeholder-gray-600 focus:border-[#6366F1] focus:outline-none transition-colors resize-none"
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
                Toi se phan hoi trong 24 gio
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
