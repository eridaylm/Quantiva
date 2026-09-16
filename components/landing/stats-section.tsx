"use client";

// components/landing/stats-section.tsx
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";



export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-6 text-white shadow-lg shadow-blue-100 dark:shadow-none sm:px-8 sm:py-8"
        >
          <div className="grid grid-cols-2 gap-5 sm:gap-8 xl:grid-cols-4">
            {t.stats.items.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl sm:h-14 sm:w-14 sm:text-2xl">
                  ✦
                </div>
                <div className="min-w-0">
                  <p className="text-2xl font-extrabold sm:text-3xl">{stat.value}</p>
                  <p className="text-xs text-blue-100 sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}