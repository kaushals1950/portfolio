import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { skills, tools } from "@/data/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="02 — Skills"
          title="Technologies I work with."
          description="A balanced mix of strongly-typed backend tooling and modern frontend craft."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">{s.category}</p>
                </div>
                <span className="font-mono text-sm text-primary">{s.level}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 glass-card p-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
