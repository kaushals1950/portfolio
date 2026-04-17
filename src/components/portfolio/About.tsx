import { motion } from "framer-motion";
import { Brain, Code2, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "@/data/portfolio";

const traits = [
  { Icon: Brain, title: "Problem Solver", text: "Breaking down complex problems into clean, testable solutions." },
  { Icon: Code2, title: "Full-Stack Mindset", text: "Comfortable across backend services, APIs, and modern UIs." },
  { Icon: Sparkles, title: "Quick Learner", text: "I pick up new stacks and ship within days, not weeks." },
  { Icon: Users, title: "Team Player", text: "Clear communication and collaborative by default." },
];

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="01 — About" title="A bit about me." />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I focus on building <span className="text-foreground font-medium">scalable backends with Spring Boot</span>{" "}
              and <span className="text-foreground font-medium">delightful interfaces with React</span> — backed by
              solid fundamentals in DSA, OOP, and databases.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React.js", "MySQL", "MongoDB", "REST APIs", "Git"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <t.Icon size={18} />
                </div>
                <h3 className="font-semibold mb-1">{t.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
