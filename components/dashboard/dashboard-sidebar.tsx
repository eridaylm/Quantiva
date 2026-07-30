// components/dashboard/dashboard-sidebar.tsx
import Link from "next/link";
import { Home, ClipboardList, BarChart2, PieChart, Trophy, BookOpen, User, Settings, Crown } from "lucide-react";

const menuItems = [
  { label: "Beranda", href: "/dashboard", icon: Home },
  { label: "Tes Saya", href: "/tes", icon: ClipboardList },
  { label: "Analisis", href: "/analisis", icon: PieChart },
  { label: "Peringkat", href: "/peringkat", icon: Trophy },
  { label: "Belajar", href: "/belajar", icon: BookOpen },
  { label: "Pengaturan", href: "/pengaturan", icon: Settings },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-[260px] flex-col border-r border-slate-200 bg-white p-5 lg:flex">
      <Link href="/" className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 font-bold text-white shadow-sm">
          Q
        </div>
        <div>
          <p className="text-xl font-bold text-slate-900 tracking-tight">Quantiva</p>
        </div>
      </Link>

      <nav className="space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === 0;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50/80 text-indigo-700"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto rounded-3xl bg-indigo-50/50 p-5 text-center border border-indigo-100/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-4 -mt-4 h-16 w-16 rounded-full bg-indigo-100 blur-2xl"></div>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm mb-4 border border-indigo-50">
          <Crown className="h-7 w-7 text-yellow-500" />
        </div>
        <p className="text-sm font-bold text-slate-900">Premium Member</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          Akses semua fitur premium dan materi eksklusif.
        </p>
        <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90">
          Upgrade Sekarang
        </button>
      </div>
    </aside>
  );
}