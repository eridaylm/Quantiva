'use client';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { useTest } from '@/context/TestContext';
import { User, Award, BrainCircuit, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProfilPage() {
  const { studentName, latestResult } = useTest();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white font-bold text-2xl">
              {studentName ? studentName.charAt(0) : 'S'}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                {studentName || 'Siswa Mandiri'}
              </h1>
              <p className="text-sm text-slate-500">Profil Peserta Tes Diagnostik Adaptif</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-3">
            <Link
              href="/test"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700"
            >
              <BrainCircuit className="h-4 w-4" />
              <span>Ikuti Tes Diagnostik</span>
            </Link>
            {latestResult && (
              <Link
                href="/result"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
              >
                <span>Lihat Hasil Terakhir</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
