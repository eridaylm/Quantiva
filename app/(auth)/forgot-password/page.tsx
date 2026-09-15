"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 24, stiffness: 120 },
  },
};

export default function ForgotPasswordPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.div
          key="form"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20 }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <KeyRound className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </motion.div>

          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-2 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              {t.auth.forgotTitle}
            </h1>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {t.auth.forgotSubtitle}
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={itemVariants} className="space-y-2">
              <label htmlFor="forgot-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t.auth.emailLabel}
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
                <input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.auth.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95 hover:shadow-blue-500/30 active:scale-[0.99]"
              >
                {t.auth.sendResetBtn}
              </button>
            </motion.div>
          </form>

          {/* Back link */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Link
              href="/signin"
              className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.auth.backToSignIn}
            </Link>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="space-y-6 text-center"
        >
          {/* Success icon */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20"
            >
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            </motion.div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {t.auth.forgotSuccessTitle}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {t.auth.forgotSuccessMsg}{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">{email}</span>
            </p>
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mx-auto">
            {t.auth.forgotSuccessNote}
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => setSubmitted(false)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {t.auth.resendEmail}
            </button>
            <Link
              href="/signin"
              className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.auth.backToSignIn}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
