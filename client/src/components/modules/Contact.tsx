import { useState } from "react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (honeypot) {
      toast.success("Message sent successfully!"); 
      setFormData({ name: "", email: "", message: "" });
      setHoneypot("");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Định dạng tin nhắn chữ thô xuống dòng đẹp đẽ cho Discord
      const textMessage = 
        `📌 **TIN NHẮN MỚI TỪ PORTFOLIO RENDER**\n` +
        `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n` +
        `👤 **Khách hàng:** \`${formData.name}\`\n\n` +
        `✉️ **Địa chỉ Email:** \`${formData.email}\`\n\n` +
        `💬 **Nội dung lời nhắn:**\n\`\`\`\n${formData.message}\n\`\`\`\n` +
        `_ _`;

      // Gửi qua API trung gian FormSubmit (chấp nhận HTTPS hoàn toàn, không bị chặn CORS)
      // Điểm đến cuối cùng chính là link Discord Webhook của bạn được cấu hình qua trường _next
      const response = await fetch("https://formsubmit.co/ajax/Patto2k4@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Message: textMessage,
          _subject: `Portfolio Contact: ${formData.name}`
        })
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 4000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366F1] rounded-full blur-3xl"></div>
      </div>
      <div className="container relative z-10">
        <AnimatedSection direction="up">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
            LET'S GET IN<br /><span className="gradient-text">TOUCH</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
          <AnimatedSection direction="left">
            <div>
              <div className="mb-12">
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:Patto2k4@gmail.com" className="text-3xl font-bold text-foreground hover:text-[#6366F1] transition-colors">Patto2k4@gmail.com</a>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div id="contact-card" className="p-8 rounded-2xl border border-[#6366F1]/20 bg-[#6366F1]/5 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="hidden" aria-hidden="true">
                  <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} placeholder="Do not fill" tabIndex={-1} />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-lg bg-card border border-[#6366F1]/20 text-foreground" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg bg-card border border-[#6366F1]/20 text-foreground" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} className="w-full px-4 py-3 rounded-lg bg-card border border-[#6366F1]/20 text-foreground resize-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting || isSuccess} className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold uppercase text-sm transition-all duration-500 ${isSuccess ? "bg-emerald-500 text-foreground" : isSubmitting ? "bg-indigo-600/50 cursor-not-allowed" : "btn-main"}`}>
                  {isSuccess ? <><Check className="w-5 h-5" /><span>Sent Successfully!</span></> : isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /><span>Sending...</span></> : "Send Message"}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
