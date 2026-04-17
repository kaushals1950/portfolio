import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-mono text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse" />
          Available for opportunities · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Kaushal</span>
          <br />
          Singh.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl"
        >
          <span className="text-foreground font-medium">{profile.role}</span>
          <br />
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 glow-primary group"
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass border-border hover:bg-primary/10">
            <a href="#contact">
              <Mail size={18} className="mr-1" /> Contact Me
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="hover:bg-primary/10">
            <a href="#" download>
              <Download size={18} className="mr-1" /> Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-3"
        >
          {[
            { Icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
            { Icon: SiLeetcode, href: profile.leetcode, label: "LeetCode" },
            { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass w-11 h-11 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono"
      >
        <div className="flex flex-col items-center gap-2">
          <span>scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
