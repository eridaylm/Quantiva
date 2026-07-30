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
    value: "782",
    badge: "Advanced",
    subtitle: "/1000",
    trend: "+46 poin dari tes sebelumnya",
    type: "score",
    chartData: [600, 650, 630, 680, 750, 710, 782],
  },
  {
    title: "Peringkat Kamu",
    value: "Top 8%",
    subtitle: "dari 50.000+ pengguna",
    type: "rank",
    chartData: [20, 25, 23, 18, 12, 15, 8],
  },
  {
    title: "Tes yang Paling Kamu Jago",
    value: "Logika Matematika",
    badge: "Skor Tertinggi 910 /1000",
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
    color: "bg-rose-50 text-rose-500 border-rose-100",
    icon: "BarChart3",
  },
  {
    id: 2,
    title: "Geometri Visual",
    questions: 20,
    duration: "15 Menit",
    color: "bg-emerald-50 text-emerald-500 border-emerald-100",
    icon: "Triangle",
  },
  {
    id: 3,
    title: "Aritmetika Lanjutan",
    questions: 25,
    duration: "20 Menit",
    color: "bg-indigo-50 text-indigo-500 border-indigo-100",
    icon: "PlusSquare",
  },
  {
    id: 4,
    title: "Statistika & Data",
    questions: 20,
    duration: "15 Menit",
    color: "bg-blue-50 text-blue-500 border-blue-100",
    icon: "PieChart",
  },
];

export const weeklyProgressData: WeeklyProgress[] = [
  { day: "Sen", score: 15 },
  { day: "Sel", score: 20 },
  { day: "Rab", score: 18 },
  { day: "Kam", score: 25 },
  { day: "Jum", score: 22 },
  { day: "Sab", score: 15 },
  { day: "Min", score: 10 },
];

export const topicScores: TopicScore[] = [
  { name: "Logika Matematika", score: 910 },
  { name: "Aritmetika", score: 860 },
  { name: "Geometri", score: 820 },
  { name: "Aljabar", score: 620 },
  { name: "Statistika & Data", score: 580 },
  { name: "Soal Cerita", score: 540 },
];

export const learningTargets: LearningTarget[] = [
  {
    title: "Selesaikan 3 tes minggu ini",
    progress: 66.6,
    target: "2/3",
  },
  {
    title: "Tingkatkan skor Aljabar ke 800",
    progress: 77.5,
    target: "620/800",
  },
  {
    title: "Kerjakan 100 soal latihan",
    progress: 75,
    target: "75/100",
  },
];

export const badges: BadgeItem[] = [
  {
    title: "Fast Thinker",
    description: "Selesaikan tes < 15 menit",
    emoji: "9",
    icon: "Zap",
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 border-cyan-100",
  },
  {
    title: "Streak 7 Hari",
    description: "Belajar 7 hari berturut-turut",
    emoji: "🔥",
    icon: "Flame",
    color: "text-amber-500",
    bgColor: "bg-amber-50 border-amber-100",
  },
  {
    title: "Top 10%",
    description: "Masuk 10% terbaik minggu ini",
    emoji: "📦",
    icon: "Trophy",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Problem Solver",
    description: "Selesaikan 50 soal latihan",
    emoji: "⭐",
    icon: "Star",
    color: "text-amber-500",
    bgColor: "bg-amber-50 border-amber-100",
  },
];

export const recentTests: RecentTest[] = [
  {
    title: "Tes Logika Matematika",
    date: "25 Mei 2024",
    score: 910,
    icon: "BookOpen",
    color: "text-rose-500 bg-rose-50",
  },
  {
    title: "Tes Geometri Visual",
    date: "22 Mei 2024",
    score: 820,
    icon: "Triangle",
    color: "text-emerald-500 bg-emerald-50",
  },
  {
    title: "Tes Aljabar Dasar",
    date: "20 Mei 2024",
    score: 640,
    icon: "Code2",
    color: "text-indigo-500 bg-indigo-50",
  },
  {
    title: "Tes Aritmetika Cepat",
    date: "18 Mei 2024",
    score: 780,
    icon: "BarChart",
    color: "text-amber-500 bg-amber-50",
  },
];