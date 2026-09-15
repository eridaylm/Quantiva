"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useAuth } from "@/context/AuthContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function SignInPage() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    
    const res = await login(email, password);
    if (res.success) {
      // route based on email/role for now
      if (email.includes('admin') || email.includes('arjuna') || email.includes('erida')) {
        window.location.href = "/admin/questions";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      setErrorMsg(res.error || "Gagal masuk.");
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {t.auth.signInTitle}
        </h1>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {t.auth.signInSubtitle}
        </p>
      </motion.div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {errorMsg && (
          <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
            {errorMsg}
          </div>
        )}
        
        {/* Email */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="signin-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.auth.emailLabel}
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              id="signin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.auth.emailPlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </motion.div>

        {/* Password */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="signin-password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              {t.auth.passwordLabel}
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
            >
              {t.auth.forgotPasswordLink}
            </Link>
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              id="signin-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.auth.passwordPlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-300"
            >
              {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={itemVariants}>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95 hover:shadow-blue-500/30 active:scale-[0.99]"
          >
            {t.auth.signInBtn}
          </button>
        </motion.div>
      </form>

      {/* Footer link */}
      <motion.p variants={itemVariants} className="text-center text-sm text-slate-500 dark:text-slate-400">
        {t.auth.noAccount}{" "}
        <Link href="/signup" className="font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400">
          {t.auth.signUpLink}
        </Link>
      </motion.p>
    </motion.div>
  );
}
