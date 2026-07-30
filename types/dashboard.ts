// types/dashboard.ts

export type DashboardStat = {
  title: string;
  value: string;
  subtitle: string;
  badge?: string;
  trend?: string;
  type: "score" | "rank" | "best";
  icon?: string;
  chartData?: number[];
};

export type RecommendedTest = {
  id: number;
  title: string;
  questions: number;
  duration: string;
  color: string;
  icon: string;
};

export type WeeklyProgress = {
  day: string;
  score: number;
};

export type TopicScore = {
  name: string;
  score: number;
};

export type LearningTarget = {
  title: string;
  progress: number;
  target: string;
};

export type BadgeItem = {
  title: string;
  description: string;
  emoji: string;
  color: string;
  bgColor: string;
  icon: string;
};

export type RecentTest = {
  title: string;
  date: string;
  score: number;
  icon: string;
  color: string;
};