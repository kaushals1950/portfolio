import { motion } from "framer-motion";

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="mb-14 max-w-2xl"
  >
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</p>
    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </motion.div>
);
