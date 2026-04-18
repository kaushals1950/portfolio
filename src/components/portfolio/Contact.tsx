import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SectionHeader } from "./SectionHeader";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  emailjs.sendForm(
    "service_cj4mk3j",    
    "template_6j9f8m9",    
    e.currentTarget,
    "VYr26JdFyopbv4LEY"    
  )
  .then(() => {
    toast.success("Message sent successfully.");
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  })
  .catch((error) => {
    console.error(error);
    toast.error("Failed to send message.");
    setLoading(false);
  });
};

  const items = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}` },
    { Icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="05 — Contact"
          title="Let's build something together."
          description="Have a role, a project, or just want to say hi? My inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {items.map(({ Icon, label, value, href }) => {
              const Wrap: any = href ? "a" : "div";
              return (
                <Wrap
                  key={label}
                  href={href}
                  className="glass-card p-5 flex items-center gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all block"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</p>
                    <p className="font-medium truncate">{value}</p>
                  </div>
                </Wrap>
              );
            })}

            <div className="glass-card p-5 flex items-center gap-3">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mr-2">Find me</p>
              {[
                { Icon: FaLinkedin, href: profile.linkedin },
                { Icon: SiLeetcode, href: profile.leetcode },
                { Icon: Mail, href: `mailto:${profile.email}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                <Input name="name" required placeholder="Your name" className="mt-1.5 bg-muted/40 border-border" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                <Input name="email" type="email" required placeholder="you@example.com" className="mt-1.5 bg-muted/40 border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
              <Textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project or opportunity…"
                className="mt-1.5 bg-muted/40 border-border resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 glow-primary"
            >
              {loading ? "Sending…" : (
                <>
                  Send Message <Send size={16} className="ml-1" />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
