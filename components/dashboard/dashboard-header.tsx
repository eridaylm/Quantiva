// components/dashboard/dashboard-header.tsx
"use client";

import { useState } from "react";
import { Search, Bell, X } from "lucide-react";

export default function DashboardHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-3 pb-4 sm:gap-4 sm:pb-6">
      {/* Search - full on desktop, icon toggle on mobile */}
      <div className="flex-1 max-w-xl relative hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Cari tes, topik, atau materi..." 
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-[10px] font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
          /
        </div>
      </div>

      {/* Mobile search button */}
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition shadow-sm sm:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Spacer on mobile when search is closed */}
      <div className="flex-1 sm:hidden" />

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition shadow-sm sm:h-10 sm:w-10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="absolute top-1.5 right-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white ring-2 ring-white dark:ring-slate-800 sm:top-2 sm:right-2.5">
            2
          </span>
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-slate-100 sm:h-10 sm:w-10 dark:border-slate-700 dark:bg-slate-800">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=f8fafc" alt="Alex" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Wijaya</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Pelajar</p>
          </div>
        </div>
      </div>

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-0 z-50 flex items-center gap-2 bg-[#f8fafc] px-4 py-3 sm:hidden dark:bg-slate-950">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari..."
              autoFocus
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-4 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <button
            onClick={() => setSearchOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}