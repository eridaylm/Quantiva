// components/dashboard/dashboard-welcome.tsx
export default function DashboardWelcome() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2">
      <div className="max-w-xl">
        <h2 className="text-[28px] font-black text-slate-900 tracking-tight">Halo, Alex! 👋</h2>
        <p className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
          Semangat untuk terus berkembang hari ini! Kamu sudah selangkah lebih dekat untuk menjadi versi terbaik dirimu.
        </p>
      </div>
      
      <div className="flex items-stretch gap-4 shrink-0">
        <div className="flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white px-6 py-5 shadow-sm min-h-[100px]">
          <div className="flex h-12 w-12 items-center justify-center text-3xl">🔥</div>
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-slate-800">Streak Belajar</p>
            <p className="text-2xl font-black text-slate-900 tracking-tight leading-none mt-1.5">
              7 <span className="text-sm font-bold tracking-normal">hari</span>
            </p>
            <p className="text-[11px] font-medium text-slate-500 mt-1">berturut-turut</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white px-6 py-5 shadow-sm min-h-[100px]">
          <div className="relative flex h-12 w-12 items-center justify-center">
             <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
               <path className="text-indigo-50" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               <path className="text-indigo-600" strokeDasharray="75, 100" strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
             </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-slate-800">Target Mingguan</p>
            <p className="text-2xl font-black text-slate-900 tracking-tight leading-none mt-1.5">
              75%
            </p>
            <p className="text-[11px] font-medium text-slate-500 mt-1">15/20 soal</p>
          </div>
        </div>
      </div>
    </div>
  );
}