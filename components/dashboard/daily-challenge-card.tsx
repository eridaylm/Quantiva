"use client";

// components/dashboard/daily-challenge-card.tsx
import { useState, useEffect, useMemo } from "react";
import { Clock, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function DailyChallengeCard() {
  const { t: dict } = useLanguage();
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  
  // Create challenge objects mapped to dictionary
  const challenges = useMemo(() => dict.dashboard.dailyChallenge.challenges.map((desc, idx) => ({
    desc,
    target: [15, 1, 3, 20, 2][idx],
    points: [50, 100, 75, 150, 40][idx],
  })), [dict.dashboard.dailyChallenge.challenges]);
  
  const [challenge, setChallenge] = useState(challenges[0]);

  useEffect(() => {
    const now = new Date();
    const jakartaDateStr = now.toLocaleDateString("en-US", { timeZone: "Asia/Jakarta" });
    const seed = jakartaDateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    setChallenge(challenges[seed % challenges.length]);

    const updateTimer = () => {
      const currentTime = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        year: "numeric", month: "numeric", day: "numeric",
        hour: "numeric", minute: "numeric", second: "numeric",
        hour12: false
      });
      
      const parts = formatter.formatToParts(currentTime);
      const getPart = (type: string) => parseInt(parts.find(p => p.type === type)?.value || "0");
      
      const h = getPart("hour");
      const m = getPart("minute");
      const s = getPart("second");
      
      const hoursLeft = h === 24 ? 0 : 23 - h;
      const minutesLeft = 59 - m;
      const secondsLeft = 59 - s;
      
      setTimeLeft(
        `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`
      );
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, [challenges]);

  const currentProgress = 0;

  return (
    <div className="rounded-[24px] bg-gradient-to-br from-[#4f46e5] to-[#3730a3] p-6 text-white h-full flex flex-col relative overflow-hidden shadow-lg shadow-indigo-200/50 dark:shadow-none">
      <div className="relative z-10 flex justify-between items-center mb-6">
         <h3 className="text-[15px] font-bold tracking-tight">{dict.dashboard.dailyChallenge.title}</h3>
         <div className="flex items-center gap-1.5 text-[10px] font-medium text-indigo-100 bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
            <Clock className="h-3 w-3" /> {dict.dashboard.dailyChallenge.endsIn} {timeLeft}
         </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end">
         <p className="text-[12px] font-medium text-indigo-100 max-w-[180px] mb-2 leading-relaxed">{challenge?.desc} {dict.dashboard.dailyChallenge.get}</p>
         <p className="text-4xl font-black tracking-tight text-amber-300 mb-6">+{challenge?.points} <span className="text-[14px] font-bold text-indigo-100 tracking-normal">{dict.dashboard.dailyChallenge.points}</span></p>

         <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
               <span className="text-[10px] font-bold text-indigo-100">{currentProgress} / {challenge?.target}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-indigo-900/40">
               <div className="h-full rounded-full bg-white shadow-sm transition-all duration-1000" style={{ width: `${(currentProgress / (challenge?.target || 1)) * 100}%` }} />
            </div>
         </div>

         <button className="w-full rounded-xl bg-white text-[#4f46e5] font-bold text-[12px] py-3.5 hover:bg-indigo-50 transition shadow-sm">
            {dict.dashboard.dailyChallenge.startChallenge}
         </button>
      </div>

      {/* Decorative Rocket (Simulated) */}
      <div className="absolute right-0 bottom-12 w-40 h-40 opacity-90 -rotate-12 translate-x-4">
         <Rocket className="w-full h-full text-indigo-400 drop-shadow-2xl" strokeWidth={1} fill="#e0e7ff" />
      </div>
      
      {/* Decorative lines/circles */}
      <div className="absolute top-24 right-12 w-3 h-3 rounded-full bg-amber-400 blur-[1px]"></div>
      <div className="absolute top-36 right-28 w-2 h-2 rounded-full bg-white blur-[1px] opacity-70"></div>
    </div>
  );
}
