"use client";

// components/dashboard/bottom-banner.tsx
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function BottomBanner() {
  const { t: dict } = useLanguage();
  return (
    <div className="mt-8 rounded-[24px] bg-slate-900 p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-2xl">
         <h2 className="text-xl md:text-2xl font-black tracking-tight mb-2">{dict.dashboard.bottomBanner.title}</h2>
         <p className="text-slate-400 font-medium text-sm">{dict.dashboard.bottomBanner.subtitle}</p>
      </div>

      <button className="relative z-10 shrink-0 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[13px] font-bold text-slate-900 transition hover:bg-slate-50 shadow-sm whitespace-nowrap">
         {dict.dashboard.bottomBanner.btnText} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
