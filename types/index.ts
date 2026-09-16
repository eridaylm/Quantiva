export type SubTopic = 'Aljabar' | 'Geometri' | 'Kalkulus' | 'Statistika' | 'Aritmatika';

export type Level = 'SMA' | 'SMP' | 'SD';

export type MasteryStatus = 
  | 'SMA_MASTERED'
  | 'SMP_FOUNDATIONAL'
  | 'SD_FOUNDATIONAL'
  | 'BASIC_REMEDIAL';

export interface Question {
  id: string;
  subtopic: SubTopic;
  level: Level;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint?: string;
  conceptTag?: string;
}

export type SelectedAnswer = number | 'UNKNOWN';

export interface BlockSubmission {
  subtopic: SubTopic;
  level: Level;
  answers: {
    questionId: string;
    selected: SelectedAnswer;
    isCorrect: boolean;
    isHonesty: boolean;
  }[];
  score: number;
  passed: boolean;
  bypassed: boolean;
  timeSeconds: number;
}

export interface SubTopicResult {
  subtopic: SubTopic;
  status: MasteryStatus;
  statusLabel: string;
  levelReached: Level | 'Remedial';
  score: number;
  totalQuestions: number;
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
  formattedTime: string;
  date: string;
  accuracy: number;
}

export interface AppUser {
  id?: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  avatarUrl?: string;
  role: 'admin' | 'user';
  token?: string;
  pass?: string;
  lastAccess?: string;
  streakDays?: number;
  lastTestDate?: string;
}
