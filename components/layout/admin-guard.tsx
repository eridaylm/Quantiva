'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { ShieldAlert, Loader2, LogIn } from 'lucide-react';
import Link from 'next/link';

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { isAuthenticated, isAdminLoggedIn, isLoading, setAuthError } = useAuth();
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const isAdmin = isAdminLoggedIn || isAuthenticated;

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      setAuthError('Akses Ditolak: Anda harus login sebagai admin untuk mengakses fitur ini.');
      setShowAlert(true);
      const timer = setTimeout(() => {
        router.push('/admin/login');
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isAdmin, isLoading, router, setAuthError]);

  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-slate-600 dark:text-slate-300">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        <p className="mt-4 text-sm font-semibold">Memverifikasi kredensial administrator...</p>
      </div>
    );
  }

  if (!isAdmin || showAlert) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 mb-4 shadow-inner">
          <ShieldAlert className="h-8 w-8" />
        </div>
        
        {/* Exact Indonesian Alert as requested */}
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200 mb-6 w-full text-left shadow-sm">
          <div className="flex items-center gap-2 font-bold text-sm text-rose-800 dark:text-rose-300">
            <ShieldAlert className="h-4 w-4 shrink-0" />
            <span>Akses Ditolak</span>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed font-medium">
            Akses Ditolak: Anda harus login sebagai admin untuk mengakses fitur ini.
          </p>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Mengalihkan otomatis ke halaman login admin...
        </p>

        <Link
          href="/admin/login"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700 shadow-md shadow-blue-500/20"
        >
          <LogIn className="h-4 w-4" />
          <span>Login Sekarang</span>
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
