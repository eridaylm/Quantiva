// components/dashboard/dashboard-header.tsx
import { Search, Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between gap-4 pb-6">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Cari tes, topik, atau materi..." 
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-12 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-[10px] font-medium text-slate-500">
          /
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition shadow-sm">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white ring-2 ring-white">
            2
          </span>
        </button>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&backgroundColor=f8fafc" alt="Alex" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Alex Wijaya</p>
            <p className="text-xs text-slate-500">Pelajar</p>
          </div>
        </div>
      </div>
    </div>
  );
}