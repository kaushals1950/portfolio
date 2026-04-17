import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { achievements, certifications, education } from "@/data/portfolio";

export const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="04 — Background" title="Education & Achievements." />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2 mb-2">
              <GraduationCap className="text-primary" size={20} /> Education
            </h3>
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 relative pl-8"
              >
                <span className="absolute left-3 top-7 w-2 h-2 rounded-full bg-primary glow-primary" />
                <span className="absolute left-[15px] top-9 bottom-3 w-px bg-border" />
                <p className="font-mono text-xs text-primary">{e.period}</p>
                <h4 className="font-semibold mt-1">{e.degree}</h4>
                <p className="text-sm text-muted-foreground mt-0.5">{e.school}</p>
                <p className="mt-2 text-sm font-medium gradient-text inline-block">{e.score}</p>
              </motion.div>
            ))}

            <h3 className="font-display text-xl font-semibold flex items-center gap-2 mt-8 mb-2">
              <Trophy className="text-primary" size={20} /> Achievements
            </h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 space-y-3"
            >
              {achievements.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">▹</span> {a}
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold flex items-center gap-2 mb-2">
              <Award className="text-primary" size={20} /> Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <Award className="text-primary mb-3" size={20} />
                  <h4 className="font-semibold text-sm leading-snug">{c.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
