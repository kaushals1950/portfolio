import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="03 — Selected Work"
          title="Projects I'm proud of."
          description="Two end-to-end products I designed, built, and shipped — from data model to UI."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass-card p-7 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
              />

              <div className="relative">
                <p className="font-mono text-xs text-primary mb-2">0{i + 1} / Project</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="glass border-border hover:border-primary/50">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <Github size={14} className="mr-1.5" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 border-0">
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={14} className="mr-1.5" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
