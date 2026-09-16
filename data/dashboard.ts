// data/dashboard.ts

import {
  RecommendedTest,
  WeeklyProgress,
  TopicScore,
  LearningTarget,
  BadgeItem,
  RecentTest,
  DashboardStat,
} from "@/types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Skor Matematikamu",
    value: "0",
    badge: "Pemula",
    subtitle: "/1000",
    trend: "Belum ada riwayat tes",
    type: "score",
    chartData: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    title: "Peringkat Kamu",
    value: "-",
    subtitle: "Selesaikan tes pertama",
    type: "rank",
    chartData: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    title: "Tes yang Paling Kamu Jago",
    value: "Belum Ada",
    badge: "Mulai tes sekarang",
    subtitle: "",
    type: "best",
  },
];

export const recommendedTests: RecommendedTest[] = [
  {
    id: 1,
    title: "Aljabar & Persamaan",
    questions: 25,
    duration: "20 Menit",
    color: "bg-rose-50 text-rose-500 border-rose-100 dark:bg-rose-500/10 dark:border-rose-500/20",
    icon: "BarChart3",
  },
  {
    id: 2,
    title: "Geometri Visual",
    questions: 20,
    duration: "15 Menit",
    color: "bg-emerald-50 text-emerald-500 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20",
    icon: "Triangle",
  },
  {
    id: 3,
    title: "Aritmetika Lanjutan",
    questions: 25,
    duration: "20 Menit",
    color: "bg-indigo-50 text-indigo-500 border-indigo-100 dark:bg-indigo-500/10 dark:border-indigo-500/20",
    icon: "PlusSquare",
  },
  {
    id: 4,
    title: "Statistika & Data",
    questions: 20,
    duration: "15 Menit",
    color: "bg-blue-50 text-blue-500 border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20",
    icon: "PieChart",
  },
];

export const weeklyProgressData: WeeklyProgress[] = [
  { day: "Sen", score: 0 },
  { day: "Sel", score: 0 },
  { day: "Rab", score: 0 },
  { day: "Kam", score: 0 },
  { day: "Jum", score: 0 },
  { day: "Sab", score: 0 },
  { day: "Min", score: 0 },
];

export const topicScores: TopicScore[] = [
  { name: "Logika Matematika", score: 0 },
  { name: "Aritmetika", score: 0 },
  { name: "Geometri", score: 0 },
  { name: "Aljabar", score: 0 },
  { name: "Statistika & Data", score: 0 },
  { name: "Soal Cerita", score: 0 },
];

export const learningTargets: LearningTarget[] = [
  {
    title: "Selesaikan 3 tes minggu ini",
    progress: 0,
    target: "0/3",
  },
  {
    title: "Tingkatkan skor Aljabar ke 800",
    progress: 0,
    target: "0/800",
  },
  {
    title: "Kerjakan 100 soal latihan",
    progress: 0,
    target: "0/100",
  },
];

export const badges: BadgeItem[] = [
  {
    title: "Fast Thinker",
    description: "Selesaikan tes < 15 menit",
    emoji: "⚡",
    icon: "Zap",
    color: "text-slate-400",
    bgColor: "bg-slate-50 border-slate-100 grayscale opacity-60",
  },
  {
    title: "Streak 7 Hari",
    description: "Belajar 7 hari berturut-turut",
    emoji: "🔥",
    icon: "Flame",
    color: "text-slate-400",
    bgColor: "bg-slate-50 border-slate-100 grayscale opacity-60",
  },
  {
    title: "Top 10%",
    description: "Masuk 10% terbaik minggu ini",
    emoji: "🏆",
    icon: "Trophy",
    color: "text-slate-400",
    bgColor: "bg-slate-50 border-slate-100 grayscale opacity-60",
  },
  {
    title: "Problem Solver",
    description: "Selesaikan 50 soal latihan",
    emoji: "⭐",
    icon: "Star",
    color: "text-slate-400",
    bgColor: "bg-slate-50 border-slate-100 grayscale opacity-60",
  },
];

export const recentTests: RecentTest[] = [];