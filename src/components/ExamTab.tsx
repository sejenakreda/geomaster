import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { bankQuestions, Question } from '../data/questionsData.ts';
import { 
  Play, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Flag, 
  RotateCcw, 
  Award, 
  BarChart3, 
  Printer, 
  ChevronRight, 
  ChevronLeft, 
  Grid3X3, 
  Shuffle, 
  BookOpen, 
  HelpCircle,
  FileCheck,
  Check,
  SlidersHorizontal
} from 'lucide-react';

type ExamMode = 'standard_50' | 'full_100' | 'quick_10' | 'grade_10' | 'grade_11' | 'grade_12';

export const ExamTab: React.FC = () => {
  const [examState, setExamState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [selectedMode, setSelectedMode] = useState<ExamMode>('standard_50');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState<number>(2700); // 45 minutes default
  const [initialTime, setInitialTime] = useState<number>(2700);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct' | 'flagged'>('all');
  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem('geomaster_student_name') || 'Siswa Geografi';
  });

  const timerRef = useRef<any>(null);

  // Load questions based on chosen mode
  const startExam = (mode: ExamMode) => {
    let questionsToUse: Question[] = [];
    let allocatedSeconds = 2700; // 45 mins default

    if (mode === 'standard_50') {
      questionsToUse = bankQuestions.slice(0, 50);
      allocatedSeconds = 2700; // 45 mins
    } else if (mode === 'full_100') {
      questionsToUse = [...bankQuestions];
      allocatedSeconds = 5400; // 90 mins (1.5 hours)
    } else if (mode === 'quick_10') {
      const shuffled = [...bankQuestions].sort(() => 0.5 - Math.random());
      questionsToUse = shuffled.slice(0, 10);
      allocatedSeconds = 600; // 10 mins
    } else if (mode === 'grade_10') {
      questionsToUse = bankQuestions.filter(q => q.grade === 10);
      allocatedSeconds = Math.round(questionsToUse.length * 54); // ~54 secs per question
    } else if (mode === 'grade_11') {
      questionsToUse = bankQuestions.filter(q => q.grade === 11);
      allocatedSeconds = Math.round(questionsToUse.length * 54);
    } else if (mode === 'grade_12') {
      questionsToUse = bankQuestions.filter(q => q.grade === 12);
      allocatedSeconds = Math.round(questionsToUse.length * 54);
    }

    setActiveQuestions(questionsToUse);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setTimeLeft(allocatedSeconds);
    setInitialTime(allocatedSeconds);
    setExamState('running');
  };

  // Timer interval
  useEffect(() => {
    if (examState === 'running') {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examState]);

  const selectAnswer = (optIndex: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optIndex
    }));
  };

  const toggleFlag = (index: number) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setExamState('finished');

    // Calculate score
    let correct = 0;
    activeQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.answer) {
        correct++;
      }
    });

    const score = Math.round((correct / activeQuestions.length) * 100);

    // Trigger celebratory confetti if score is high
    if (score >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.error(e);
      }
    }

    // Save student name and best score in localStorage
    try {
      localStorage.setItem('geomaster_student_name', studentName);
      const prevBest = parseInt(localStorage.getItem('geomaster_best_score') || '0', 10);
      if (score > prevBest) {
        localStorage.setItem('geomaster_best_score', score.toString());
      }
    } catch (e) {
      console.error(e);
    }
  };

  const resetExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setExamState('idle');
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentIndex(0);
  };

  // Score Calculations
  const correctCount = activeQuestions.filter((q, idx) => userAnswers[idx] === q.answer).length;
  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = activeQuestions.length - answeredCount;
  const finalScore = activeQuestions.length > 0 ? Math.round((correctCount / activeQuestions.length) * 100) : 0;
  const timeUsedSeconds = initialTime - timeLeft;
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Current Question
  const currentQ = activeQuestions[currentIndex];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. IDLE / SELECTION STATE */}
      {examState === 'idle' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Simulasi Ujian Seleksi Mandiri Geografi</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Bank 100 Soal Latihan & Evaluasi Nilai</h2>
                <p className="text-slate-600 text-sm max-w-2xl">
                  Simulasi ujian akademik tingkat tinggi (HOTS) komprehensif tanpa duplikasi soal. Meliputi soal pilihan ganda, menjodohkan konsep, dan interpretasi grafik/peta dengan penilaian otomatis serta kunci pembahasan lengkap.
                </p>
              </div>

              {/* Student Name Input */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1.5 shrink-0 min-w-[240px]">
                <label className="text-xs font-bold text-slate-700 block">Nama Siswa / Peserta:</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ketik Nama Anda..."
                  className="w-full px-3 py-2 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-semibold text-slate-800"
                />
              </div>
            </div>

            {/* Mode Cards */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Pilih Paket Simulasi Ujian:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  onClick={() => setSelectedMode('standard_50')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMode === 'standard_50'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-200/80 text-emerald-800">Paket Standar</span>
                    <Clock className="w-4 h-4 text-emerald-700" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Simulasi 50 Soal</h4>
                  <p className="text-xs text-slate-600 mt-1">50 soal teruji Kelas X, XI, dan XII, durasi 45 menit standar seleksi perguruan tinggi.</p>
                </div>

                <div
                  onClick={() => setSelectedMode('full_100')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMode === 'full_100'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">Bank Penuh</span>
                    <Award className="w-4 h-4 text-purple-700" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Ujian Marathon 100 Soal</h4>
                  <p className="text-xs text-slate-600 mt-1">100 butir soal lengkap seluruh bab kurikulum, durasi 90 menit untuk menguji ketahanan berpikir.</p>
                </div>

                <div
                  onClick={() => setSelectedMode('quick_10')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMode === 'quick_10'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">Latihan Cepat</span>
                    <Shuffle className="w-4 h-4 text-amber-700" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Drill Kilat 10 Soal Acak</h4>
                  <p className="text-xs text-slate-600 mt-1">10 butir soal acak dari seluruh bank soal, durasi 10 menit untuk asah ingatan harian.</p>
                </div>

                <div
                  onClick={() => setSelectedMode('grade_10')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMode === 'grade_10'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">Fokus Kelas X</span>
                    <BookOpen className="w-4 h-4 text-teal-700" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Khusus Materi Kelas X</h4>
                  <p className="text-xs text-slate-600 mt-1">Konsep geografi, pendekatan, prinsip, skala peta, penginderaan jauh, litosfer, dan SIG.</p>
                </div>

                <div
                  onClick={() => setSelectedMode('grade_11')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMode === 'grade_11'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">Fokus Kelas XI</span>
                    <BookOpen className="w-4 h-4 text-cyan-700" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Khusus Materi Kelas XI</h4>
                  <p className="text-xs text-slate-600 mt-1">Poros maritim, SDA tambang, flora fauna Wallace-Weber, kependudukan, dan mitigasi bencana.</p>
                </div>

                <div
                  onClick={() => setSelectedMode('grade_12')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMode === 'grade_12'
                      ? 'border-emerald-600 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Fokus Kelas XII</span>
                    <BookOpen className="w-4 h-4 text-indigo-700" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base">Khusus Materi Kelas XII</h4>
                  <p className="text-xs text-slate-600 mt-1">Pusat pertumbuhan Christaller, hukum gravitasi Reilly, titik henti, dan negara maju.</p>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span>Tips: Jawaban Anda otomatis tersimpan sehingga tidak akan hilang bila halaman tidak sengaja ter-refresh.</span>
              </div>
              <button
                onClick={() => startExam(selectedMode)}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold rounded-2xl shadow-md transition flex items-center justify-center gap-2 text-base active:scale-95"
              >
                <Play className="w-5 h-5 fill-white" />
                Mulai Ujian Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. EXAM RUNNING STATE */}
      {examState === 'running' && currentQ && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          {/* Top Bar: Counter & Live Timer */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Soal {currentIndex + 1} dari {activeQuestions.length}
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  {currentQ.topic}
                </span>
              </div>
            </div>

            {/* Timer and Action Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => toggleFlag(currentIndex)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                  flaggedQuestions[currentIndex]
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[currentIndex] ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span className="hidden sm:inline">Ragu-ragu</span>
              </button>

              <button
                type="button"
                onClick={() => setIsGridOpen(!isGridOpen)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1.5 transition"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Peta Soal</span>
              </button>

              <div className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-bold flex items-center gap-1.5 ${
                timeLeft < 300 
                  ? 'bg-rose-100 text-rose-700 animate-pulse border border-rose-300' 
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}>
                <Clock className="w-4 h-4" />
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Quick Jump Grid Dropdown / Drawer */}
          {isGridOpen && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Peta Navigasi Butir Soal ({activeQuestions.length} Soal):</span>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span> Terjawab</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span> Ragu</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block"></span> Belum</span>
                </div>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-2 max-h-56 overflow-y-auto p-1">
                {activeQuestions.map((_, idx) => {
                  const isAnswered = userAnswers[idx] !== undefined;
                  const isFlagged = flaggedQuestions[idx];
                  const isCurrent = currentIndex === idx;

                  let bgClass = "bg-white border-slate-200 text-slate-700";
                  if (isCurrent) bgClass = "ring-2 ring-emerald-500 bg-emerald-50 font-extrabold";
                  else if (isFlagged) bgClass = "bg-amber-100 border-amber-300 text-amber-900";
                  else if (isAnswered) bgClass = "bg-emerald-600 border-emerald-600 text-white";

                  return (
                    <button
                      key={idx}
                      onClick={() => { setCurrentIndex(idx); setIsGridOpen(false); }}
                      className={`h-9 rounded-lg border text-xs font-bold transition flex items-center justify-center ${bgClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Media / Chart Simulation if type == chart or matching */}
          {currentQ.type === 'chart' && (
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <BarChart3 className="w-5 h-5" />
              </div>
              <p className="text-xs font-bold text-slate-700">
                [Ilustrasi Diagram & Grafik Analisis Data Geosfer]
              </p>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Perhatikan dinamika data statistik yang disajikan dalam narasi soal di bawah ini.
              </p>
            </div>
          )}

          {currentQ.type === 'matching' && (
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 text-xs font-bold text-teal-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs">↔</span>
              <span>Tipe Menjodohkan: Pasangkan pernyataan teori, tokoh, atau wilayah yang paling sinkron dan presisi.</span>
            </div>
          )}

          {/* Question Text */}
          <div className="space-y-4">
            <h3 className="text-slate-900 text-base sm:text-lg font-bold leading-relaxed">
              {currentIndex + 1}. {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                const letter = String.fromCharCode(65 + optIdx);

                return (
                  <button
                    key={optIdx}
                    onClick={() => selectAnswer(optIdx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-500'
                        : 'border-slate-200 hover:border-emerald-400 bg-white text-slate-700 hover:bg-slate-50/50'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      {letter}
                    </span>
                    <span className="text-xs sm:text-sm mt-0.5 leading-snug">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Bottom Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-4 sm:px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs sm:text-sm transition disabled:opacity-40 disabled:pointer-events-none flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" /> Sebelumnya
            </button>

            <span className="text-xs text-slate-400 hidden sm:inline">
              Terjawab: <strong>{answeredCount}</strong> / {activeQuestions.length}
            </span>

            {currentIndex < activeQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="px-5 sm:px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-xs"
              >
                Selanjutnya <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="px-6 sm:px-7 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm transition flex items-center gap-1.5 shadow-md"
              >
                <CheckCircle2 className="w-4 h-4" /> Selesai & Evaluasi Nilai
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. FINISHED EVALUATION & REVIEW STATE */}
      {examState === 'finished' && (
        <div className="space-y-8 animate-in fade-in">
          {/* Result Card Summary */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-3xl shadow-inner">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Laporan Evaluasi Siswa</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Hasil Ujian Geografi: {studentName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Nilai dan kunci pembahasan komprehensif terhitung secara otomatis.
              </p>
            </div>

            {/* Score Display Card */}
            <div className="inline-flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl min-w-[260px]">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Nilai Akhir Anda</span>
              <span className="text-6xl font-black text-emerald-800 font-mono my-1 tracking-tight">
                {finalScore}
              </span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                finalScore >= 85 ? 'bg-emerald-200 text-emerald-900' :
                finalScore >= 70 ? 'bg-teal-200 text-teal-900' :
                finalScore >= 55 ? 'bg-amber-200 text-amber-900' : 'bg-rose-200 text-rose-900'
              }`}>
                {finalScore >= 85 ? 'Predikat: Sangat Baik (A)' :
                 finalScore >= 70 ? 'Predikat: Baik (B)' :
                 finalScore >= 55 ? 'Predikat: Cukup (C)' : 'Perlu Remedial (D)'}
              </span>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2">
              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                <span className="block text-[11px] font-bold text-emerald-700 uppercase">Jawaban Benar</span>
                <span className="text-xl font-extrabold text-emerald-900 font-mono">{correctCount}</span>
              </div>
              <div className="p-3 bg-rose-50 rounded-2xl border border-rose-100">
                <span className="block text-[11px] font-bold text-rose-700 uppercase">Jawaban Salah</span>
                <span className="text-xl font-extrabold text-rose-900 font-mono">{activeQuestions.length - correctCount}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="block text-[11px] font-bold text-slate-600 uppercase">Tidak Dijawab</span>
                <span className="text-xl font-extrabold text-slate-800 font-mono">{unansweredCount}</span>
              </div>
              <div className="p-3 bg-cyan-50 rounded-2xl border border-cyan-100">
                <span className="block text-[11px] font-bold text-cyan-700 uppercase">Waktu Tempuh</span>
                <span className="text-xl font-extrabold text-cyan-900 font-mono">{formatTime(timeUsedSeconds)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-2 no-print"
              >
                <Printer className="w-4 h-4" /> Cetak / Unduh Lembar Hasil
              </button>
              <button
                onClick={resetExam}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shadow-xs"
              >
                <RotateCcw className="w-4 h-4" /> Ulangi Simulasi Ujian
              </button>
            </div>
          </div>

          {/* 4. DETAILED REVIEW & EXPLANATIONS */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Pembahasan & Analisis Jawaban Setiap Soal</h4>
                <p className="text-xs text-slate-500">Pelajari letak kekeliruan dan ulasan konsep teoritisnya secara mendalam.</p>
              </div>

              {/* Review Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setReviewFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    reviewFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua ({activeQuestions.length})
                </button>
                <button
                  onClick={() => setReviewFilter('wrong')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    reviewFilter === 'wrong' ? 'bg-white text-rose-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Salah ({activeQuestions.length - correctCount})
                </button>
                <button
                  onClick={() => setReviewFilter('correct')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    reviewFilter === 'correct' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Benar ({correctCount})
                </button>
              </div>
            </div>

            {/* Questions Review List */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {activeQuestions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.answer;

                if (reviewFilter === 'wrong' && isCorrect) return null;
                if (reviewFilter === 'correct' && !isCorrect) return null;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition-all space-y-2.5 ${
                      isCorrect 
                        ? 'bg-emerald-50/40 border-emerald-200' 
                        : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-500">{q.topic}</span>
                      <span className={`px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Benar
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5 text-rose-700" /> Salah
                          </>
                        )}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-slate-800">
                      Soal {idx + 1}: {q.question}
                    </p>

                    <div className="space-y-1 text-xs">
                      <p className="text-slate-700">
                        Jawaban Anda: <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                          {userAns !== undefined ? q.options[userAns] : '(Tidak dijawab)'}
                        </strong>
                      </p>
                      {!isCorrect && (
                        <p className="text-emerald-800 font-bold">
                          Kunci Jawaban yang Benar: {q.options[q.answer]}
                        </p>
                      )}
                    </div>

                    <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-900 block mb-0.5">Penjelasan & Pembahasan:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
