"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 24, stiffness: 120 },
  },
};

function getPasswordStrength(password: string) {
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 1) return { level: 0, key: "weak" as const };
  if (score === 2) return { level: 1, key: "fair" as const };
  if (score === 3) return { level: 2, key: "good" as const };
  return { level: 3, key: "strong" as const };
}

const strengthColors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-emerald-500",
];

export default function SignUpPage() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const strength = useMemo(() => getPasswordStrength(password), [password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — navigate to verification
    window.location.href = "/verify?email=" + encodeURIComponent(email);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-7"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          {t.auth.signUpTitle}
        </h1>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {t.auth.signUpSubtitle}
        </p>
      </motion.div>

      {/* Social Login */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          {t.auth.googleBtn}
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <svg className="h-5 w-5 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          {t.auth.githubBtn}
        </button>
      </motion.div>

      {/* Divider */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-700/50" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-4 text-slate-400 dark:bg-slate-950 dark:text-slate-500">
            {t.auth.orContinueWith}
          </span>
        </div>
      </motion.div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="signup-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.auth.fullNameLabel}
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              id="signup-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.auth.fullNamePlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="signup-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.auth.emailLabel}
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              id="signup-email"
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
          <label htmlFor="signup-password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.auth.passwordLabel}
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              id="signup-password"
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
          {/* Password Strength */}
          {password.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= strength.level ? strengthColors[strength.level] : "bg-slate-200 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
              <p className={`text-xs font-medium ${
                strength.level === 0 ? "text-red-500" :
                strength.level === 1 ? "text-orange-500" :
                strength.level === 2 ? "text-yellow-600" :
                "text-emerald-500"
              }`}>
                {t.auth.passwordStrength[strength.key]}
              </p>
            </div>
          )}
        </motion.div>

        {/* Confirm Password */}
        <motion.div variants={itemVariants} className="space-y-2">
          <label htmlFor="signup-confirm" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.auth.confirmPasswordLabel}
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              id="signup-confirm"
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t.auth.confirmPasswordPlaceholder}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-300"
            >
              {showConfirm ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
            </button>
          </div>
        </motion.div>

        {/* Terms */}
        <motion.div variants={itemVariants} className="flex items-start gap-3 pt-1">
          <input
            id="agree-terms"
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:border-slate-600"
            required
          />
          <label htmlFor="agree-terms" className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {t.auth.agreeTerms}{" "}
            <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">{t.auth.termsLink}</Link>
            {" "}{t.auth.andText}{" "}
            <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">{t.auth.privacyLink}</Link>
          </label>
        </motion.div>

        {/* Submit */}
        <motion.div variants={itemVariants} className="pt-1">
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95 hover:shadow-blue-500/30 active:scale-[0.99]"
          >
            {t.auth.signUpBtn}
          </button>
        </motion.div>
      </form>

      {/* Footer link */}
      <motion.p variants={itemVariants} className="text-center text-sm text-slate-500 dark:text-slate-400">
        {t.auth.hasAccount}{" "}
        <Link href="/signin" className="font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400">
          {t.auth.signInLink}
        </Link>
      </motion.p>
    </motion.div>
  );
}
