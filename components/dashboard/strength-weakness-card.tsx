// components/dashboard/strength-weakness-card.tsx
import { topicScores } from "@/data/dashboard";
import { ChevronRight } from "lucide-react";

export default function StrengthWeaknessCard() {
  const strongest = topicScores.slice(0, 3);
  const weakest = topicScores.slice(3, 6);

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
      <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">Topik Terkuat & Terlemah</h3>

      <div className="mt-6 space-y-6 flex-1">
        <div>
          <p className="mb-3 text-[11px] font-bold text-emerald-500 capitalize tracking-wider">Terkuat</p>
          <div className="space-y-3">
            {strongest.map((topic, index) => (
              <div key={topic.name} className="flex items-center gap-3 text-[13px]">
                <span className="font-bold text-emerald-500 w-4">{index + 1}</span>
                <span className="font-semibold text-slate-700 flex-1">{topic.name}</span>
                <span className="font-black text-slate-900">{topic.score} <span className="text-[10px] font-medium text-slate-400">/1000</span></span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-[11px] font-bold text-rose-500 capitalize tracking-wider">Perlu Ditingkatkan</p>
          <div className="space-y-3">
            {weakest.map((topic, index) => (
              <div key={topic.name} className="flex items-center gap-3 text-[13px] bg-rose-50/40 -mx-3 px-3 py-1.5 rounded-lg">
                <span className="font-bold text-rose-500 w-4">{index + 1}</span>
                <span className="font-semibold text-slate-700 flex-1">{topic.name}</span>
                <span className="font-black text-slate-900">{topic.score} <span className="text-[10px] font-medium text-slate-400">/1000</span></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
         <button className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-700 transition">
           Lihat Analisis <ChevronRight className="h-3.5 w-3.5" />
         </button>
      </div>
    </div>
  );
}