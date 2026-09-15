"use client";

// components/layout/navbar.tsx
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";
import { useLanguage } from "@/contexts/language-context";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.navbar.home, href: "/" },
    { label: t.navbar.test, href: "/tes" },
    { label: t.navbar.features, href: "#fitur" },
    { label: t.navbar.leaderboard, href: "/peringkat" },
    { label: t.navbar.about, href: "#tentang" },
    { label: t.navbar.blog, href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white font-bold shadow-sm sm:h-10 sm:w-10">
            Q
          </div>
          <span className="text-lg font-bold text-slate-900 dark:text-white transition-colors sm:text-xl">Quantiva</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="mr-1 hidden items-center gap-2 md:flex text-sm font-medium">
            <button 
              onClick={() => setLanguage('id')}
              className={`transition hover:text-blue-600 ${language === 'id' ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}
            >
              ID
            </button>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`transition hover:text-blue-600 ${language === 'en' ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}
            >
              EN
            </button>
            <span className="mx-2 text-slate-200 dark:text-slate-800">|</span>
            <ThemeToggle />
          </div>
          <Link
            href="/signin"
            className="hidden rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-flex sm:px-5 sm:py-2.5"
          >
            {t.navbar.login}
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-md bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:inline-flex sm:px-5 sm:py-2.5"
          >
            {t.navbar.register}
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[57px] z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 right-0 top-full z-50 border-b border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden sm:p-6"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <button 
                    onClick={() => setLanguage('id')}
                    className={`transition hover:text-blue-600 ${language === 'id' ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}
                  >
                    ID
                  </button>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <button 
                    onClick={() => setLanguage('en')}
                    className={`transition hover:text-blue-600 ${language === 'en' ? 'text-blue-600 font-bold dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}
                  >
                    EN
                  </button>
                  <span className="mx-2 text-slate-200 dark:text-slate-800">|</span>
                  <ThemeToggle />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  href="/signin"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {t.navbar.login}
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
                >
                  {t.navbar.register}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}