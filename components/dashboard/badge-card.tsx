"use client";

// components/dashboard/badge-card.tsx
import { badges } from "@/data/dashboard";
import { Zap, Flame, Trophy, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const iconMap: Record<string, React.ElementType> = {
  Zap, Flame, Trophy, Star
};

export default function BadgeCard() {
  const { t: dict } = useLanguage();
  return (
    <div className="rounded-[24px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
         <h3 className="text-[15px] font-bold text-slate-900 dark:text-white tracking-tight">{dict.dashboard.badgeCard.title}</h3>
         <button className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">
           {dict.dashboard.badgeCard.viewAll}
         </button>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-2">
        {badges.map((badge, index) => {
          const Icon = iconMap[badge.icon] || Zap;
          const translatedTitle = dict.dashboard.badgesList[index]?.title || badge.title;
          const translatedDesc = dict.dashboard.badgesList[index]?.desc || badge.description;
          
          return (
             <div key={badge.title} className="flex flex-col items-center text-center">
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-[18px] border mb-3 ${badge.bgColor.includes('dark:') ? badge.bgColor : badge.bgColor + ' dark:border-slate-700/50 dark:bg-slate-800/50'}`}>
                   {badge.icon === 'Zap' && <div className="absolute top-0 right-0 -mr-1 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[8px] font-bold text-white border border-white dark:border-slate-800">9</div>}
                   <Icon className={`h-6 w-6 ${badge.color}`} strokeWidth={1.5} fill="currentColor" />
                </div>
                <h4 className="text-[11px] font-bold text-slate-900 dark:text-white leading-tight mb-1 max-w-[60px]">{translatedTitle}</h4>
                <p className="text-[9px] font-medium text-slate-400 dark:text-slate-500 leading-tight">{translatedDesc}</p>
             </div>
          )
        })}
      </div>
    </div>
  );
}