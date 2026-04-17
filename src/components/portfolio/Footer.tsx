import { profile } from "@/data/portfolio";

export const Footer = () => (
  <footer className="border-t border-border/60 mt-10 py-8 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} <span className="text-foreground font-medium">{profile.name}</span>. Crafted with React & Framer Motion.
      </p>
      <p className="font-mono text-xs">Designed & built in Varanasi 🇮🇳</p>
    </div>
  </footer>
);
