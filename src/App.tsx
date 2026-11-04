import React, { useState } from 'react';
import { Navbar, TabKey } from './components/Navbar.tsx';
import { HomeTab } from './components/HomeTab.tsx';
import { MateriTab } from './components/MateriTab.tsx';
import { KalkulatorTab } from './components/KalkulatorTab.tsx';
import { ExamTab } from './components/ExamTab.tsx';
import { PetunjukTab } from './components/PetunjukTab.tsx';
import { Globe2, Heart, Github, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased pb-20 md:pb-0">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'home' && <HomeTab onNavigate={setActiveTab} />}
        {activeTab === 'materi' && <MateriTab />}
        {activeTab === 'kalkulator' && <KalkulatorTab />}
        {activeTab === 'ujian' && <ExamTab />}
        {activeTab === 'petunjuk' && <PetunjukTab />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2 font-bold text-slate-700">
            <Globe2 className="w-4 h-4 text-emerald-600" />
            <span>GeoMaster SMA · Portal Belajar Geografi Kurikulum Merdeka</span>
          </div>
          <p className="max-w-md mx-auto text-slate-500 text-[11px] leading-relaxed">
            Materi Lengkap Kelas X, XI, XII · Panduan Rumus & Kalkulator Skala Peta · Simulasi Bank 100 Soal Akademik & Evaluasi Otomatis.
          </p>
          <div className="pt-2 text-slate-400 text-[11px]">
            <span>&copy; {new Date().getFullYear()} GeoMaster SMA. Media pembelajaran interaktif untuk siswa dan guru geografi.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
