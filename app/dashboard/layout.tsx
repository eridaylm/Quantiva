import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-slate-950 font-sans">
      <DashboardSidebar />
      <main className="flex-1 px-4 py-4 pb-24 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:pb-8 overflow-y-auto h-screen">{children}</main>
    </div>
  );
}

