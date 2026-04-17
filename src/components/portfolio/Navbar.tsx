import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      sections.forEach((s, i) => {
        if (s instanceof HTMLElement && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(links[i].href);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`mx-auto max-w-6xl px-5 md:px-8 flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled ? "glass mx-4 md:mx-auto py-3" : "py-3"
          }`}
        >
          <a href="#home" className="font-display font-bold text-lg">
            <span className="gradient-text">{"<KS />"}</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active === l.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.href && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-lg bg-primary/15 border border-primary/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg glass"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 mx-4 glass rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};
