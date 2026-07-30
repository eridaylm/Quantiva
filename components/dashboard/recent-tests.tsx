// components/dashboard/recent-tests.tsx
import { recentTests } from "@/data/dashboard";
import { ArrowRight, BookOpen, Triangle, Code2, BarChart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Triangle, Code2, BarChart
};

export default function RecentTests() {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-end mb-6">
         <h3 className="text-[15px] font-bold text-slate-900 tracking-tight">Riwayat Tes Terakhir</h3>
         <button className="flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-700 transition">
          Lihat semua <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="space-y-5 flex-1">
        {recentTests.map((test) => {
          const Icon = iconMap[test.icon] || BookOpen;
          return (
            <div key={test.title} className="flex items-center gap-4">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${test.color}`}>
                 <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="flex-1">
                 <h4 className="text-[13px] font-bold text-slate-900 leading-tight">{test.title}</h4>
                 <p className="text-[11px] font-medium text-slate-500 mt-0.5">{test.date}</p>
              </div>
              <div className="text-right">
                 <p className="text-[17px] font-black text-slate-900 leading-none">{test.score}</p>
                 <p className="text-[10px] font-medium text-slate-400 mt-1">/1000</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
