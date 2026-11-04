import React, { useState } from 'react';
import { 
  Globe2, 
  BookOpen, 
  Calculator, 
  Award, 
  Compass, 
  Menu, 
  X,
  Play
} from 'lucide-react';

export type TabKey = 'home' | 'materi' | 'kalkulator' | 'ujian' | 'petunjuk';

interface NavbarProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: TabKey) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Main Header */}
      <header className="sticky top-0 z-40 bg-emerald-800 text-white shadow-md border-b border-emerald-700/60 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <div 
            onClick={() => handleSelectTab('home')}
            className="flex items-center gap-3 cursor-pointer shrink-0 select-none group"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-900 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Globe2 className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight block text-white leading-none">
                GeoMaster SMA
              </span>
              <span className="text-[10px] text-emerald-200 block mt-0.5 tracking-wider uppercase font-medium">
                Kurikulum Merdeka & 100 Soal Latihan
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-semibold text-emerald-100">
            <button
              onClick={() => handleSelectTab('home')}
              className={`px-3.5 py-2 rounded-xl transition whitespace-nowrap shrink-0 ${
                activeTab === 'home'
                  ? 'bg-emerald-900/80 text-white font-bold'
                  : 'hover:bg-emerald-700/60 hover:text-white'
              }`}
            >
              Beranda
            </button>

            <button
              onClick={() => handleSelectTab('materi')}
              className={`px-3.5 py-2 rounded-xl transition whitespace-nowrap shrink-0 ${
                activeTab === 'materi'
                  ? 'bg-emerald-900/80 text-white font-bold'
                  : 'hover:bg-emerald-700/60 hover:text-white'
              }`}
            >
              Materi X-XII
            </button>

            <button
              onClick={() => handleSelectTab('kalkulator')}
              className={`px-3.5 py-2 rounded-xl transition whitespace-nowrap shrink-0 ${
                activeTab === 'kalkulator'
                  ? 'bg-emerald-900/80 text-white font-bold'
                  : 'hover:bg-emerald-700/60 hover:text-white'
              }`}
            >
              Kalkulator Skala
            </button>

            <button
              onClick={() => handleSelectTab('ujian')}
              className={`px-3.5 py-2 rounded-xl transition whitespace-nowrap shrink-0 ${
                activeTab === 'ujian'
                  ? 'bg-emerald-900/80 text-white font-bold'
                  : 'hover:bg-emerald-700/60 hover:text-white'
              }`}
            >
              Bank 100 Soal
            </button>

            <button
              onClick={() => handleSelectTab('petunjuk')}
              className={`px-3.5 py-2 rounded-xl transition whitespace-nowrap shrink-0 ${
                activeTab === 'petunjuk'
                  ? 'bg-emerald-900/80 text-white font-bold'
                  : 'hover:bg-emerald-700/60 hover:text-white'
              }`}
            >
              Petunjuk
            </button>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleSelectTab('ujian')}
              className="px-4 py-2 text-xs font-extrabold text-emerald-950 bg-white rounded-xl hover:bg-emerald-50 transition shadow-xs whitespace-nowrap shrink-0 flex items-center gap-1.5 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-emerald-800 text-emerald-800" />
              Mulai Ujian
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-emerald-700 text-white focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-emerald-900 px-4 pt-2 pb-4 space-y-1 border-t border-emerald-700 animate-in slide-in-from-top-2">
            <button
              onClick={() => handleSelectTab('home')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                activeTab === 'home' ? 'bg-emerald-800 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleSelectTab('materi')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                activeTab === 'materi' ? 'bg-emerald-800 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              Materi Lengkap X-XII
            </button>
            <button
              onClick={() => handleSelectTab('kalkulator')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                activeTab === 'kalkulator' ? 'bg-emerald-800 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              Kalkulator & Rumus Skala
            </button>
            <button
              onClick={() => handleSelectTab('ujian')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                activeTab === 'ujian' ? 'bg-emerald-800 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              Bank Soal & Simulasi Ujian (100 Butir)
            </button>
            <button
              onClick={() => handleSelectTab('petunjuk')}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                activeTab === 'petunjuk' ? 'bg-emerald-800 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-800'
              }`}
            >
              Panduan Belajar & Tips
            </button>
          </div>
        )}
      </header>

      {/* Mobile Bottom Thumb Bar (for smartphone convenience) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shadow-lg no-print">
        <button
          onClick={() => handleSelectTab('home')}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition ${
            activeTab === 'home' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Globe2 className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Beranda</span>
        </button>

        <button
          onClick={() => handleSelectTab('materi')}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition ${
            activeTab === 'materi' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Materi</span>
        </button>

        <button
          onClick={() => handleSelectTab('kalkulator')}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition ${
            activeTab === 'kalkulator' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Calculator className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Skala</span>
        </button>

        <button
          onClick={() => handleSelectTab('ujian')}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition ${
            activeTab === 'ujian' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Award className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">100 Soal</span>
        </button>

        <button
          onClick={() => handleSelectTab('petunjuk')}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl transition ${
            activeTab === 'petunjuk' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Compass className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Petunjuk</span>
        </button>
      </div>
    </>
  );
};
