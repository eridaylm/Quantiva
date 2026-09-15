'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AdminGuard from '@/components/layout/admin-guard';
import { useAuth } from '@/context/AuthContext';
import { useTest } from '@/context/TestContext';
import { SubTopic, Level, Question } from '@/types';
import { SUBTOPICS_SEQUENCE } from '@/data/mockData';
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Layers,
  BookOpen,
  LogOut,
  X,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Hash
} from 'lucide-react';

export default function AdminQuestionsPage() {
  const { user, logout } = useAuth();
  const { questions, addQuestion, updateQuestion, deleteQuestion, resetQuestionsToDefault } = useTest();

  // Filters
  const [selectedSubtopic, setSelectedSubtopic] = useState<SubTopic | 'Semua'>('Semua');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'Semua'>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [deletingQuestionId, setDeletingQuestionId] = useState<string | null>(null);

  // Form state for Add/Edit
  const [formData, setFormData] = useState<{
    subtopic: SubTopic;
    level: Level;
    question: string;
    options: [string, string, string, string];
    correctAnswer: number;
    explanation: string;
    hint: string;
    conceptTag: string;
  }>({
    subtopic: 'Aljabar',
    level: 'SMA',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: '',
    hint: '',
    conceptTag: '',
  });

  // Filtered questions list
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchSubtopic = selectedSubtopic === 'Semua' || q.subtopic === selectedSubtopic;
      const matchLevel = selectedLevel === 'Semua' || q.level === selectedLevel;
      const matchSearch =
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.conceptTag && q.conceptTag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchSubtopic && matchLevel && matchSearch;
    });
  }, [questions, selectedSubtopic, selectedLevel, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    return {
      total: questions.length,
      sma: questions.filter((q) => q.level === 'SMA').length,
      smp: questions.filter((q) => q.level === 'SMP').length,
      sd: questions.filter((q) => q.level === 'SD').length,
    };
  }, [questions]);

  // Handle Add Click
  const openAddModal = () => {
    setFormData({
      subtopic: selectedSubtopic !== 'Semua' ? selectedSubtopic : 'Aljabar',
      level: selectedLevel !== 'Semua' ? selectedLevel : 'SMA',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: '',
      hint: '',
      conceptTag: '',
    });
    setIsAddModalOpen(true);
  };

  // Handle Edit Click
  const openEditModal = (q: Question) => {
    setEditingQuestion(q);
    setFormData({
      subtopic: q.subtopic,
      level: q.level,
      question: q.question,
      options: [q.options[0] || '', q.options[1] || '', q.options[2] || '', q.options[3] || ''],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation || '',
      hint: q.hint || '',
      conceptTag: q.conceptTag || '',
    });
  };

  // Save new question
  const handleSaveNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.question.trim() || formData.options.some((opt) => !opt.trim())) {
      alert('Mohon isi narasi soal dan keempat opsi jawaban (A, B, C, D).');
      return;
    }
    addQuestion({
      subtopic: formData.subtopic,
      level: formData.level,
      question: formData.question.trim(),
      options: formData.options.map((o) => o.trim()),
      correctAnswer: formData.correctAnswer,
      explanation: formData.explanation.trim() || 'Pembahasan belum ditambahkan.',
      hint: formData.hint.trim(),
      conceptTag: formData.conceptTag.trim() || `${formData.subtopic} ${formData.level}`,
    });
    setIsAddModalOpen(false);
  };

  // Update existing question
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestion) return;
    if (!formData.question.trim() || formData.options.some((opt) => !opt.trim())) {
      alert('Mohon lengkapi narasi soal dan opsi jawaban.');
      return;
    }
    updateQuestion({
      id: editingQuestion.id,
      subtopic: formData.subtopic,
      level: formData.level,
      question: formData.question.trim(),
      options: formData.options.map((o) => o.trim()),
      correctAnswer: formData.correctAnswer,
      explanation: formData.explanation.trim(),
      hint: formData.hint.trim(),
      conceptTag: formData.conceptTag.trim(),
    });
    setEditingQuestion(null);
  };

  // Confirm delete
  const handleConfirmDelete = () => {
    if (deletingQuestionId) {
      deleteQuestion(deletingQuestionId);
      setDeletingQuestionId(null);
    }
  };

  return (
    <AdminGuard>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
        <Navbar />

        <main className="flex-1 pb-16">
          {/* Admin Header Banner */}
          <div className="border-b border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                      Panel Kurator Bank Soal
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      ID Admin: {user?.email || 'admin@edutest.id'}
                    </span>
                  </div>
                  <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    Manajemen Bank Soal Adaptif
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    Modul 3 Soal per Level (SMA, SMP, SD) untuk 5 Sub-topik Diagnostik
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      if (confirm('Pulihkan seluruh bank soal ke 45 soal standar kompetisi?')) {
                        resetQuestionsToDefault();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition shadow-sm"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-slate-500" />
                    <span>Reset Default (45 Soal)</span>
                  </button>

                  <button
                    onClick={openAddModal}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Tambah Soal Baru</span>
                  </button>

                  <button
                    onClick={logout}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300 transition"
                  >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Keluar</span>
                  </button>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Soal Aktif</span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</span>
                    <span className="text-xs text-slate-400">butir</span>
                  </div>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-3.5 dark:border-indigo-900/40 dark:bg-indigo-950/20">
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">Jenjang SMA (Puncak)</span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">{stats.sma}</span>
                    <span className="text-xs text-indigo-600/70 dark:text-indigo-400">soal</span>
                  </div>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-3.5 dark:border-amber-900/40 dark:bg-amber-950/20">
                  <span className="text-xs font-medium text-amber-700 dark:text-amber-300">Jenjang SMP (Jembatan)</span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-amber-900 dark:text-amber-100">{stats.smp}</span>
                    <span className="text-xs text-amber-600/70 dark:text-amber-400">soal</span>
                  </div>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-3.5 dark:border-emerald-900/40 dark:bg-emerald-950/20">
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Jenjang SD (Fondasi Awal)</span>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">{stats.sd}</span>
                    <span className="text-xs text-emerald-600/70 dark:text-emerald-400">soal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters & Content Area */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
            {/* Filter Bar */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-4 mb-6">
              {/* Row 1: Subtopics Tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Filter Sub-Topik Diagnostik
                </label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedSubtopic('Semua')}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                      selectedSubtopic === 'Semua'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    Semua Sub-Topik
                  </button>
                  {SUBTOPICS_SEQUENCE.map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedSubtopic(st)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                        selectedSubtopic === st
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 2: Level Pills + Search Input */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-500 mr-1">Tingkat Level:</span>
                  {(['Semua', 'SMA', 'SMP', 'SD'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                        selectedLevel === lvl
                          ? lvl === 'SMA'
                            ? 'bg-purple-600 text-white'
                            : lvl === 'SMP'
                            ? 'bg-amber-600 text-white'
                            : lvl === 'SD'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-72">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari narasi soal atau konsep..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Questions Table Card */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                  <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-400">
                    <tr>
                      <th className="py-3 px-4 w-24">ID</th>
                      <th className="py-3 px-4 w-28">Sub-Topik</th>
                      <th className="py-3 px-4 w-20">Level</th>
                      <th className="py-3 px-4 min-w-[280px]">Narasi Soal & Konsep</th>
                      <th className="py-3 px-4 w-24 text-center">Kunci</th>
                      <th className="py-3 px-4 w-28 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
                    {filteredQuestions.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-500 dark:text-slate-400">
                          <HelpCircle className="mx-auto h-8 w-8 text-slate-400 mb-2" />
                          <p className="text-sm font-semibold">Tidak ada soal yang sesuai dengan filter.</p>
                          <p className="text-xs text-slate-400 mt-1">Coba sesuaikan kata kunci pencarian atau ganti filter sub-topik.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredQuestions.map((q) => {
                        const levelColor =
                          q.level === 'SMA'
                            ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800'
                            : q.level === 'SMP'
                            ? 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800'
                            : 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';

                        const correctLetter = ['A', 'B', 'C', 'D'][q.correctAnswer] || 'A';

                        return (
                          <tr key={q.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                            <td className="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                              {q.id}
                            </td>
                            <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">
                              {q.subtopic}
                            </td>
                            <td className="py-3 px-4">
                              <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold border ${levelColor}`}>
                                {q.level}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <p className="font-medium text-slate-800 dark:text-slate-200 line-clamp-2">
                                {q.question}
                              </p>
                              <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                                {q.conceptTag && (
                                  <span className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                    {q.conceptTag}
                                  </span>
                                )}
                                <span>• 4 Pilihan Opsi</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                                {correctLetter}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right whitespace-nowrap">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  onClick={() => openEditModal(q)}
                                  title="Edit Soal"
                                  className="rounded-md border border-slate-200 p-1.5 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 transition"
                                >
                                  <Edit2 className="h-3.5 w-3.5" />
                                </button>
                                <button
                                  onClick={() => setDeletingQuestionId(q.id)}
                                  title="Hapus Soal"
                                  className="rounded-md border border-rose-200 p-1.5 text-rose-600 hover:bg-rose-50 dark:border-rose-900/60 dark:text-rose-400 dark:hover:bg-rose-950/40 transition"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-slate-200 bg-slate-50/50 px-4 py-2.5 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 flex items-center justify-between">
                <span>Menampilkan {filteredQuestions.length} dari total {questions.length} butir soal</span>
                <span className="text-[11px] text-slate-400">Disimpan secara lokal pada browser</span>
              </div>
            </div>
          </div>
        </main>

        <Footer />

        {/* Modal: Tambah Soal Baru */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm overflow-y-auto">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 my-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tambah Soal Diagnostik Baru</h3>
                    <p className="text-xs text-slate-500">Konfigurasi butir soal untuk bank diagnostik adaptif</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveNew} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Sub-Topik
                    </label>
                    <select
                      value={formData.subtopic}
                      onChange={(e) => setFormData({ ...formData, subtopic: e.target.value as SubTopic })}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      {SUBTOPICS_SEQUENCE.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Jenjang Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value as Level })}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="SMA">SMA (Tingkat Utama)</option>
                      <option value="SMP">SMP (Jembatan Konsep)</option>
                      <option value="SD">SD (Fondasi Awal)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Label Konsep / Topik Khusus
                  </label>
                  <input
                    type="text"
                    value={formData.conceptTag}
                    onChange={(e) => setFormData({ ...formData, conceptTag: e.target.value })}
                    placeholder="Contoh: Pemfaktoran Persamaan Kuadrat SMP"
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Narasi Soal
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    placeholder="Tuliskan pertanyaan soal matematika secara jelas..."
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Opsi Jawaban & Kunci Benar
                  </label>
                  <div className="space-y-2">
                    {(['A', 'B', 'C', 'D'] as const).map((letter, idx) => (
                      <div key={letter} className="flex items-center gap-2">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="correctAnswer"
                            checked={formData.correctAnswer === idx}
                            onChange={() => setFormData({ ...formData, correctAnswer: idx })}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="font-bold text-xs w-4">{letter}.</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.options[idx]}
                          onChange={(e) => {
                            const newOpts = [...formData.options] as [string, string, string, string];
                            newOpts[idx] = e.target.value;
                            setFormData({ ...formData, options: newOpts });
                          }}
                          placeholder={`Jawaban opsi ${letter}`}
                          className="flex-1 rounded-lg border border-slate-300 bg-white py-1.5 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Pembahasan & Penjelasan Konseptual
                  </label>
                  <textarea
                    rows={2}
                    value={formData.explanation}
                    onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                    placeholder="Jelaskan langkah penyelesaian dan konsep prasyarat yang dibutuhkan..."
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Simpan Soal Baru
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Edit Soal */}
        {editingQuestion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm overflow-y-auto">
            <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 my-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
                    <Edit2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Edit Soal: {editingQuestion.id}
                    </h3>
                    <p className="text-xs text-slate-500">Perbarui konten pertanyaan dan kunci jawaban</p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingQuestion(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Sub-Topik
                    </label>
                    <select
                      value={formData.subtopic}
                      onChange={(e) => setFormData({ ...formData, subtopic: e.target.value as SubTopic })}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      {SUBTOPICS_SEQUENCE.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Jenjang Level
                    </label>
                    <select
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value as Level })}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="SMA">SMA (Tingkat Utama)</option>
                      <option value="SMP">SMP (Jembatan Konsep)</option>
                      <option value="SD">SD (Fondasi Awal)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Label Konsep / Topik Khusus
                  </label>
                  <input
                    type="text"
                    value={formData.conceptTag}
                    onChange={(e) => setFormData({ ...formData, conceptTag: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Narasi Soal
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Opsi Jawaban & Kunci Benar
                  </label>
                  <div className="space-y-2">
                    {(['A', 'B', 'C', 'D'] as const).map((letter, idx) => (
                      <div key={letter} className="flex items-center gap-2">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="editCorrectAnswer"
                            checked={formData.correctAnswer === idx}
                            onChange={() => setFormData({ ...formData, correctAnswer: idx })}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="font-bold text-xs w-4">{letter}.</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.options[idx]}
                          onChange={(e) => {
                            const newOpts = [...formData.options] as [string, string, string, string];
                            newOpts[idx] = e.target.value;
                            setFormData({ ...formData, options: newOpts });
                          }}
                          className="flex-1 rounded-lg border border-slate-300 bg-white py-1.5 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Pembahasan & Penjelasan Konseptual
                  </label>
                  <textarea
                    rows={2}
                    value={formData.explanation}
                    onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 bg-white py-2 px-3 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditingQuestion(null)}
                    className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Konfirmasi Hapus */}
        {deletingQuestionId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400 mb-3">
                <Trash2 className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Hapus Butir Soal Ini?
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Soal dengan ID <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">{deletingQuestionId}</span> akan dihapus dari bank soal aktif. Tindakan ini dapat dibatalkan melalui tombol &quot;Reset Default&quot;.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setDeletingQuestionId(null)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-semibold text-white hover:bg-rose-700 shadow-sm"
                >
                  Ya, Hapus Soal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminGuard>
  );
}
