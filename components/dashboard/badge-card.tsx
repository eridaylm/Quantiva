// components/dashboard/badge-card.tsx
import { badges } from "@/data/dashboard";
import { Zap, Flame, Trophy, Star } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Zap, Flame, Trophy, Star
};

export default function BadgeCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
         <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">Badge Terbaru</h3>
         <button className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 transition">
           Lihat semua
         </button>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-2">
        {badges.map((badge) => {
          const Icon = iconMap[badge.icon] || Zap;
          return (
             <div key={badge.title} className="flex flex-col items-center text-center">
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-[18px] border mb-3 ${badge.bgColor}`}>
                   {badge.icon === 'Zap' && <div className="absolute top-0 right-0 -mr-1 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[8px] font-bold text-white border border-white">9</div>}
                   <Icon className={`h-6 w-6 ${badge.color}`} strokeWidth={1.5} fill="currentColor" />
                </div>
                <h4 className="text-[11px] font-bold text-slate-900 leading-tight mb-1 max-w-[60px]">{badge.title}</h4>
                <p className="text-[9px] font-medium text-slate-400 leading-tight">{badge.description}</p>
             </div>
          )
        })}
      </div>
    </div>
  );
}