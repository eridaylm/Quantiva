"use client";

// components/landing/stats-section.tsx
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-[28px] bg-gradient-to-r from-blue-600 to-indigo-500 px-8 py-8 text-white shadow-lg shadow-blue-100 dark:shadow-none"
        >
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {t.stats.items.map((stat) => (
              <motion.div variants={itemVariants} key={stat.label} className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  ✦
                </div>
                <div>
                  <p className="text-3xl font-extrabold">{stat.value}</p>
                  <p className="text-sm text-blue-100">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}