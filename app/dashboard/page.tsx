import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardWelcome from "@/components/dashboard/dashboard-welcome";
import StatCard from "@/components/dashboard/stat-card";
import RecommendedTests from "@/components/dashboard/recommended-tests";
import WeeklyProgressChart from "@/components/charts/weekly-progress-chart";
import StrengthWeaknessCard from "@/components/dashboard/strength-weakness-card";
import RecentTests from "@/components/dashboard/recent-tests";
import LearningTargetCard from "@/components/dashboard/learning-target-card";
import BadgeCard from "@/components/dashboard/badge-card";
import DailyChallengeCard from "@/components/dashboard/daily-challenge-card";
import BottomBanner from "@/components/dashboard/bottom-banner";
import { dashboardStats } from "@/data/dashboard";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      {/* Header */}
      <DashboardHeader />

      {/* Row 1: Welcome */}
      <div className="mt-2 mb-6 sm:mb-8">
        <DashboardWelcome />
      </div>

      {/* Row 2: 3 Stat Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 sm:mb-8">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Row 3: Rekomendasi Tes */}
      <div className="mb-6 sm:mb-8">
        <RecommendedTests />
      </div>

      {/* Row 4: 3-Column Layout */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
        <div className="md:col-span-1">
           <WeeklyProgressChart />
        </div>
        <div className="md:col-span-1">
           <StrengthWeaknessCard />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
           <RecentTests />
        </div>
      </div>

      {/* Row 5: 3-Column Layout */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-1">
           <LearningTargetCard />
        </div>
        <div className="md:col-span-1">
           <BadgeCard />
        </div>
        <div className="md:col-span-2 lg:col-span-1">
           <DailyChallengeCard />
        </div>
      </div>

      {/* Row 6: Bottom Banner */}
      <BottomBanner />
    </div>
  );
}