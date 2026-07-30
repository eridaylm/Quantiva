import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-slate-950 font-sans">
      <DashboardSidebar />
      <main className="flex-1 px-6 py-8 md:px-8 overflow-y-auto h-screen">{children}</main>
    </div>
  );
}
