export type SubTopic = 'Aljabar' | 'Geometri' | 'Kalkulus' | 'Statistika' | 'Aritmatika';

export type Level = 'SMA' | 'SMP' | 'SD';

export type MasteryStatus = 
  | 'SMA_MASTERED'      // Passed SMA block (>= 2/3) -> Green
  | 'SMP_FOUNDATIONAL'  // Failed SMA, Passed SMP -> Yellow
  | 'SD_FOUNDATIONAL'   // Failed SMA & SMP, Passed SD -> Orange
  | 'BASIC_REMEDIAL';   // Failed SD -> Red

export interface Question {
  id: string;
  subtopic: SubTopic;
  level: Level;
  question: string;
  options: string[];       // 4 options [A, B, C, D]
  correctAnswer: number;   // 0, 1, 2, or 3
  explanation: string;     // Concept explanation
  hint?: string;
  conceptTag?: string;     // e.g. "Persamaan Kuadrat", "Pecahan Campuran"
}

export type SelectedAnswer = number | 'UNKNOWN'; // number index or 'UNKNOWN' for "Saya Belum Mempelajari Ini / Tidak Tahu"

export interface BlockSubmission {
  subtopic: SubTopic;
  level: Level;
  answers: {
    questionId: string;
    selected: SelectedAnswer;
    isCorrect: boolean;
    isHonesty: boolean;
  }[];
  score: number; // 0, 1, 2, 3
  passed: boolean; // score >= 2
  bypassed: boolean; // user pressed "Menyerah / Lompati Level Ini"
  timeSeconds: number;
}

export interface SubTopicResult {
  subtopic: SubTopic;
  status: MasteryStatus;
  statusLabel: string;
  levelReached: Level | 'Remedial';
  score: number; // questions correct in the determining block
  totalQuestions: number; // usually 3 per block
  accuracyPercent: number;
  blocksAttempted: BlockSubmission[];
  honestyCount: number;
  timeSpentSeconds: number;
  rootCauseAnalysis: {
    title: string;
    description: string;
    missingPrerequisite: string;
  };
  recommendation: {
    actionTitle: string;
    learningModules: string[];
    priority: 'Tinggi' | 'Sedang' | 'Rendah';
  };
}

export interface DiagnosticResult {
  id: string;
  studentName?: string;
  completedAt: string;
  totalTimeSeconds: number;
  totalHonestyCount: number;
  overallScore: number;
  overallAccuracy: number;
  subtopicResults: Record<SubTopic, SubTopicResult>;
  supportiveHeader: {
    strengthHeadline: string;
    motivationalText: string;
    keyStrengthSubtopic: SubTopic;
    focusGrowthSubtopic: SubTopic;
  };
  badges: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  }[];
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  studentName: string;
  schoolLevel: 'SMA' | 'SMP' | 'SD';
  schoolName: string;
  subtopic: SubTopic;
  masteryLevel: MasteryStatus;
  masteryLabel: string;
  timeSeconds: number;
  formattedTime: string; // e.g. "01m 45s"
  date: string;
  accuracy: number;
}

export interface AdminUser {
  email: string;
  name: string;
  role: 'admin';
  token: string;
}
