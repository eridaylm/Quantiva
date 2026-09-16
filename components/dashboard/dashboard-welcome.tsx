"use client";

// components/dashboard/dashboard-welcome.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/contexts/language-context';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, X } from 'lucide-react';

export default function DashboardWelcome() {
  const { user } = useAuth();
  const { dict } = useLanguage();
  const firstName = user?.name?.split(' ')[0] || 'Pengguna';
  
  const [showPopup, setShowPopup] = useState(false);
  
  // Calculate streak info from user data
  let streakDays = user?.streakDays || 0;
  let isActiveToday = false;
  
  if (user?.lastTestDate) {
    const now = new Date();
    const lastDate = new Date(user.lastTestDate);
    
    const isSameDay = now.getDate() === lastDate.getDate() && now.getMonth() === lastDate.getMonth() && now.getFullYear() === lastDate.getFullYear();
    
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = yesterday.getDate() === lastDate.getDate() && yesterday.getMonth() === lastDate.getMonth() && yesterday.getFullYear() === lastDate.getFullYear();
    
    if (isSameDay) {
      isActiveToday = true;
    } else if (isYesterday) {
      isActiveToday = false;
    } else {
      // Missed more than 1 day
      streakDays = 0;
    }
  }

  // Show popup automatically if lastTestDate was very recent (e.g., returning from a test just now)
  useEffect(() => {
    if (user?.lastTestDate) {
      const lastDate = new Date(user.lastTestDate);
      const now = new Date();
      const diffMs = now.getTime() - lastDate.getTime();
      // If the test was completed within the last 10 seconds, show the celebratory popup
      if (diffMs < 10000 && streakDays > 0) {
        setShowPopup(true);
        const timer = setTimeout(() => setShowPopup(false), 8000);
        return () => clearTimeout(timer);
      }
    }
  }, [user?.lastTestDate, streakDays]);

  return (
    <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-2">
      {/* Real popup - Big Centered Overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: -20, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="relative w-full max-w-sm rounded-[32px] border border-orange-200 dark:border-orange-900/50 bg-white p-8 text-center shadow-2xl dark:bg-slate-900 overflow-hidden"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-orange-400/20 blur-[50px]"></div>
              
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-orange-50 dark:bg-orange-500/10 border-8 border-white dark:border-slate-900 shadow-xl z-10">
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.2, 1.2, 1.2, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Flame className="h-16 w-16 text-orange-500" fill="currentColor" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{dict.dashboard.welcome.streakPopupTitle}</h3>
                <p 
                  className="mt-3 text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-400"
                  dangerouslySetInnerHTML={{ __html: dict.dashboard.welcome.streakPopupDesc.replace('{days}', streakDays.toString()) }}
                />
                
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-8 w-full rounded-2xl bg-orange-500 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 hover:shadow-orange-500/40 active:scale-95"
                >
                  {dict.dashboard.welcome.streakPopupBtn}
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-xl">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight sm:text-[28px]">{dict.dashboard.welcome.greeting.replace('{name}', firstName)}</h2>
        </div>
        <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium sm:mt-2 sm:text-sm">
          {dict.dashboard.welcome.subtitle}
        </p>
      </div>
      
      <div className="flex items-stretch gap-3 shrink-0 overflow-x-auto sm:gap-4" style={{ scrollbarWidth: "none" }}>
        <div className={`flex items-center gap-3 rounded-[20px] border px-4 py-4 shadow-sm min-w-[180px] shrink-0 transition-all duration-500 sm:gap-4 sm:px-6 sm:py-5 sm:min-h-[100px] ${
          isActiveToday 
            ? 'border-orange-200 bg-orange-50 dark:border-orange-900/50 dark:bg-orange-950/20' 
            : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50'
        }`}>
          <div className={`flex h-12 w-12 items-center justify-center text-3xl transition-all duration-500 ${isActiveToday ? 'scale-110' : 'grayscale opacity-50'}`}>
            🔥
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{dict.dashboard.welcome.streakTitle}</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mt-1.5">
              {streakDays} <span className="text-sm font-bold tracking-normal">{dict.dashboard.welcome.streakDays}</span>
            </p>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">{dict.dashboard.welcome.streakSub}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-sm min-w-[180px] shrink-0 dark:border-slate-800 dark:bg-slate-900/50 sm:gap-4 sm:px-6 sm:py-5 sm:min-h-[100px]">
          <div className="relative flex h-12 w-12 items-center justify-center">
             <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
               <path className="text-indigo-50 dark:text-indigo-950" strokeWidth="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               <path className="text-indigo-600 dark:text-indigo-500" strokeDasharray={`${isActiveToday ? 5 : 0}, 100`} strokeWidth="4" strokeLinecap="round" stroke="currentColor" fill="none" style={{ transition: 'stroke-dasharray 1s ease-out' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
             </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{dict.dashboard.welcome.targetTitle}</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mt-1.5">
              {isActiveToday ? '5%' : '0%'}
            </p>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">{isActiveToday ? '1' : '0'}/20 {dict.dashboard.welcome.targetSub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}