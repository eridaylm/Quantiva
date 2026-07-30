"use client";

// components/layout/navbar.tsx
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { useLanguage } from "@/contexts/language-context";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white font-bold shadow-sm">
            Q
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Quantiva</span>
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

        <div className="flex items-center gap-3">
          <div className="mr-2 hidden items-center gap-2 md:flex text-sm font-medium">
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
            href="/login"
            className="rounded-md border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.navbar.login}
          </Link>
          <Link
            href="/register"
            className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            {t.navbar.register}
          </Link>
        </div>
      </div>
    </header>
  );
}