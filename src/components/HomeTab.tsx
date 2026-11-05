import React from 'react';
import { 
  Globe2, 
  BookOpen, 
  Calculator, 
  Award, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Smartphone,
  ShieldCheck,
  Zap,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface HomeTabProps {
  onNavigate: (tab: 'materi' | 'kalkulator' | 'ujian' | 'petunjuk') => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onNavigate }) => {
  // Best score from local storage
  const bestScore = localStorage.getItem('geomaster_best_score') || null;
  const completedCount = (() => {
    try {
      const saved = localStorage.getItem('geomaster_completed_babs');
      return saved ? JSON.parse(saved).length : 0;
    } catch {
      return 0;
    }
  })();

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-emerald-700/50">
        {/* Subtle decorative background globe pattern */}
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
          <Globe2 className="w-96 h-96 text-white" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>Portal Belajar Geografi Komprehensif SMA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            Kuasai Geografi SMA & Ujian Seleksi Akademik
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Dilengkapi materi Kelas X, XI, dan XII Kurikulum Merdeka yang mendalam, kalkulator rumus skala peta interaktif, serta bank butir latihan ujian pilihan ganda, penalaran peta kontur, grafik iklim, diagram subduksi lempeng, dan evaluasi nilai otomatis.
          </p>

          {/* Call to action buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('ujian')}
              className="px-6 py-3.5 bg-white text-emerald-900 font-extrabold rounded-2xl shadow-lg hover:bg-emerald-50 transition transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-emerald-700" />
              Mulai Simulasi Ujian
            </button>

            <button
              onClick={() => onNavigate('materi')}
              className="px-6 py-3.5 bg-emerald-700/70 hover:bg-emerald-700 border border-emerald-500/40 text-white font-bold rounded-2xl transition transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Eksplorasi Materi
            </button>

            <button
              onClick={() => onNavigate('kalkulator')}
              className="px-5 py-3.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-600/50 text-slate-200 font-bold rounded-2xl transition text-sm flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              Kalkulator Skala
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Stat Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 block font-mono">Soal Bergambar</span>
            <span className="text-xs text-slate-500 font-medium">Stimulus Peta & Diagram HOTS</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 block font-mono">13 Bab</span>
            <span className="text-xs text-slate-500 font-medium">Materi Lengkap X, XI, XII</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 block font-mono">4 Alat</span>
            <span className="text-xs text-slate-500 font-medium">Kalkulator Matematis</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 block font-mono">100%</span>
            <span className="text-xs text-slate-500 font-medium">Akses Belajar Digital</span>
          </div>
        </div>
      </div>

      {/* Student Personal Study Status (if any) */}
      {(bestScore !== null || completedCount > 0) && (
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white p-6 rounded-3xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-xs">
              ★
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-base">Status Kemajuan Belajar Anda</h4>
              <p className="text-xs text-slate-600">
                {completedCount > 0 && <span>Materi dibaca: <strong>{completedCount} Bab</strong> · </span>}
                {bestScore !== null && <span>Skor Ujian Tertinggi: <strong className="text-emerald-700">{bestScore}/100</strong></span>}
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('ujian')}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition"
          >
            Lanjutkan Latihan
          </button>
        </div>
      )}

      {/* 4 Feature Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          onClick={() => onNavigate('materi')}
          className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:text-white transition">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-emerald-700 transition">
              Materi Terperinci
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Materi Kelas X, XI, dan XII diperkaya dengan penjelasan konsep, objek studi, pendekatan, dan SDA berkelanjutan.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
            <span>Buka Modul</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('kalkulator')}
          className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-300 transition cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl group-hover:bg-teal-600 group-hover:text-white transition">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-teal-700 transition">
              Mastering Skala Peta
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Panduan rumus skala langkah demi langkah, interval kontur (CI), dan kalkulator interaktif anti-bingung.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
            <span>Buka Kalkulator</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('ujian')}
          className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-cyan-300 transition cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center text-xl group-hover:bg-cyan-600 group-hover:text-white transition">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-cyan-700 transition">
              100 Soal Variatif
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pilihan ganda, menjodohkan, analisis grafik/peta, plus evaluasi hasil nilai otomatis dan lembar pembahasan.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-700">
            <span>Mulai Tes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </div>
        </div>

        <div
          onClick={() => onNavigate('petunjuk')}
          className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl group-hover:bg-amber-600 group-hover:text-white transition">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-amber-700 transition">
              Panduan Belajar & Tips
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Panduan belajar mandiri, trik rumus geografi, glosarium konsep kunci, dan strategi menaklukkan soal ujian.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
            <span>Baca Panduan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};
