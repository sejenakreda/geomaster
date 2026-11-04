import React, { useState, useEffect } from 'react';
import { materiData, MateriBab } from '../data/materiData.ts';
import { 
  BookOpen, 
  Search, 
  Play, 
  Pause, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  GraduationCap
} from 'lucide-react';

export const MateriTab: React.FC = () => {
  const [selectedGrade, setSelectedGrade] = useState<10 | 11 | 12>(10);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBab, setSelectedBab] = useState<MateriBab | null>(null);
  const [completedBabs, setCompletedBabs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('geomaster_completed_babs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Audio speech synthesis
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('geomaster_completed_babs', JSON.stringify(completedBabs));
    } catch (e) {
      console.error(e);
    }
  }, [completedBabs]);

  const toggleComplete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCompletedBabs(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert("Browser Anda belum mendukung text-to-speech.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 1.0;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleCloseModal = () => {
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
    setSelectedBab(null);
  };

  const filteredMateri = materiData.filter(item => {
    const matchGrade = item.grade === selectedGrade;
    const matchQuery = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchGrade && matchQuery;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Controls & Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Kurikulum Merdeka SMA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Materi Lengkap Geografi Kelas X, XI, XII
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Rangkuman teoritis mendalam, konsep esensial, studi kasus bencana, serta akses video pembelajaran YouTube gratis.
            </p>
          </div>

          {/* Grade Selector Tabs */}
          <div className="flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200/60 shrink-0">
            {([10, 11, 12] as const).map(g => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedGrade === g
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kelas {g === 10 ? 'X' : g === 11 ? 'XI' : 'XII'}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar & Progress Overview */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari konsep (misal: Eratosthenes, SIG, Wallace, Christaller)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Reset
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Progres Belajar: <strong className="text-slate-800">{completedBabs.filter(id => id.startsWith(selectedGrade === 10 ? 'x-' : selectedGrade === 11 ? 'xi-' : 'xii-')).length}</strong> selesai dari {materiData.filter(m => m.grade === selectedGrade).length} Bab</span>
          </div>
        </div>
      </div>

      {/* Materi Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMateri.map((bab) => {
          const isDone = completedBabs.includes(bab.id);
          return (
            <div
              key={bab.id}
              onClick={() => setSelectedBab(bab)}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    Bab {bab.babNumber} · Kelas {bab.grade === 10 ? 'X' : bab.grade === 11 ? 'XI' : 'XII'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {bab.estimatedReadTime}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => toggleComplete(bab.id, e)}
                      title={isDone ? "Tandai belum selesai" : "Tandai sudah dipelajari"}
                      className={`p-1.5 rounded-lg transition ${
                        isDone ? 'bg-emerald-100 text-emerald-700' : 'text-slate-300 hover:text-emerald-600 hover:bg-slate-100'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-emerald-700 transition">
                  {bab.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {bab.summary}
                </p>

                {/* Key takeaway bullets */}
                <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-500">
                  {bab.keyPoints.slice(0, 2).map((kp, i) => (
                    <div key={i} className="flex items-start gap-1.5 truncate">
                      <span className="text-emerald-600 font-bold">·</span>
                      <span className="truncate">{kp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold group-hover:underline flex items-center gap-1">
                  Baca Materi Rinci →
                </span>
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(bab.youtubeQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold rounded-xl flex items-center gap-1.5 transition text-[11px]"
                >
                  <Play className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
                  Video YouTube
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMateri.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500 space-y-3">
          <BookOpen className="w-10 h-10 mx-auto text-slate-300" />
          <h4 className="font-bold text-slate-700">Tidak ada materi yang sesuai pencarian</h4>
          <p className="text-xs">Coba kata kunci lain atau pilih tingkatan kelas yang berbeda.</p>
        </div>
      )}

      {/* Reader Modal */}
      {selectedBab && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl border border-slate-100 my-8 max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <span>Kelas {selectedBab.grade === 10 ? 'X' : selectedBab.grade === 11 ? 'XI' : 'XII'}</span>
                  <span>·</span>
                  <span>Bab {selectedBab.babNumber}</span>
                  <span>·</span>
                  <span>{selectedBab.estimatedReadTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedBab.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tools: Speech & YouTube */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/60 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSpeak(`${selectedBab.title}. ${selectedBab.fullContent}`)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    isPlayingAudio
                      ? 'bg-amber-600 text-white animate-pulse'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" /> Hentikan Suara
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" /> Dengarkan Bacaan
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleComplete(selectedBab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    completedBabs.includes(selectedBab.id)
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {completedBabs.includes(selectedBab.id) ? 'Selesai Dibaca' : 'Tandai Selesai'}
                </button>
              </div>

              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedBab.youtubeQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition"
              >
                <Play className="w-3.5 h-3.5 fill-white" /> Tonton di YouTube
              </a>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
              {selectedBab.fullContent}

              {/* Key Takeaways Box */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 mt-4">
                <h4 className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider">
                  Poin Kunci & Ringkasan Cepat:
                </h4>
                <ul className="space-y-1 text-xs text-emerald-950 font-medium">
                  {selectedBab.keyPoints.map((kp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <span>{kp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs shrink-0">
              <span className="text-slate-400">Tekan ESC atau tombol Tutup untuk kembali</span>
              <button
                onClick={handleCloseModal}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
