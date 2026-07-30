// components/dashboard/daily-challenge-card.tsx
import { Clock, Rocket } from "lucide-react";

export default function DailyChallengeCard() {
  return (
    <div className="rounded-[24px] bg-gradient-to-br from-[#4f46e5] to-[#3730a3] p-6 text-white h-full flex flex-col relative overflow-hidden shadow-lg shadow-indigo-200/50">
      <div className="relative z-10 flex justify-between items-center mb-6">
         <h3 className="text-[15px] font-bold tracking-tight">Challenge Harian</h3>
         <div className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-100 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
            <Clock className="h-3 w-3" /> Berakhir dalam 12:45:18
         </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end">
         <p className="text-[12px] font-medium text-indigo-100 max-w-[180px] mb-2 leading-relaxed">Kerjakan 15 soal logika hari ini dan dapatkan</p>
         <p className="text-4xl font-black tracking-tight text-amber-300 mb-6">+50 <span className="text-[14px] font-bold text-indigo-100 tracking-normal">poin</span></p>

         <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
               <span className="text-[10px] font-bold text-indigo-100">8 / 15 soal</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-indigo-900/40">
               <div className="h-full rounded-full bg-white shadow-sm" style={{ width: "53%" }} />
            </div>
         </div>

         <button className="w-full rounded-xl bg-white text-[#4f46e5] font-bold text-[12px] py-3.5 hover:bg-indigo-50 transition shadow-sm">
            Mulai Challenge
         </button>
      </div>

      {/* Decorative Rocket (Simulated) */}
      <div className="absolute right-0 bottom-12 w-40 h-40 opacity-90 -rotate-12 translate-x-4">
         <Rocket className="w-full h-full text-indigo-400 drop-shadow-2xl" strokeWidth={1} fill="#e0e7ff" />
      </div>
      
      {/* Decorative lines/circles */}
      <div className="absolute top-24 right-12 w-3 h-3 rounded-full bg-amber-400 blur-[1px]"></div>
      <div className="absolute top-36 right-28 w-2 h-2 rounded-full bg-white blur-[1px] opacity-70"></div>
    </div>
  );
}
