// components/dashboard/learning-target-card.tsx
import { learningTargets } from "@/data/dashboard";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function LearningTargetCard() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
         <div>
           <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">Target Belajar</h3>
           <p className="mt-0.5 text-[11px] font-medium text-slate-500">Selesaikan targetmu dan tingkatkan kemampuanmu!</p>
         </div>
      </div>

      <div className="space-y-4 flex-1">
        {learningTargets.map((item, index) => {
          const colors = [
             "bg-emerald-500",
             "bg-amber-400",
             "bg-indigo-600"
          ];
          const textColors = [
             "text-emerald-500",
             "text-amber-500",
             "text-indigo-600"
          ];
          
          return (
            <div key={item.title}>
              <div className="flex gap-3 mb-2">
                 <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${textColors[index]}`} />
                 <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-[13px] font-bold text-slate-800 leading-tight">{item.title}</p>
                      <p className="text-[11px] font-bold text-slate-900">{item.target}</p>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${colors[index]}`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                 </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
         <button className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-700 transition">
           Lihat Semua Target <ArrowRight className="h-3.5 w-3.5" />
         </button>
      </div>
    </div>
  );
}