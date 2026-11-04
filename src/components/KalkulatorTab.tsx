import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Mountain, 
  Building2, 
  Layers, 
  Check, 
  ArrowRight, 
  Sparkles, 
  RotateCcw,
  HelpCircle,
  TrendingUp
} from 'lucide-react';

type CalcType = 'skala' | 'kontur' | 'gravitasi' | 'titikhenti';

export const KalkulatorTab: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<CalcType>('skala');

  // Skala Calculator State
  const [skalaMode, setSkalaMode] = useState<'penyebut' | 'jp' | 'js'>('penyebut');
  const [valJp, setValJp] = useState<string>('4');
  const [valJs, setValJs] = useState<string>('8'); // in km
  const [valPenyebut, setValPenyebut] = useState<string>('200000');
  const [skalaResult, setSkalaResult] = useState<{
    main: string;
    steps: string[];
    details: string;
  } | null>(null);

  // Kontur Calculator State
  const [konturMode, setKonturMode] = useState<'ci' | 'skala'>('ci');
  const [valKonturPenyebut, setValKonturPenyebut] = useState<string>('50000');
  const [valCi, setValCi] = useState<string>('25');
  const [konturResult, setKonturResult] = useState<{
    main: string;
    formula: string;
    steps: string[];
  } | null>(null);

  // Gravitasi Reilly State
  const [pa, setPa] = useState<string>('100000');
  const [pb, setPb] = useState<string>('400000');
  const [jarak, setJarak] = useState<string>('20');
  const [gravitasiResult, setGravitasiResult] = useState<{
    main: string;
    steps: string[];
  } | null>(null);

  // Titik Henti State
  const [thPa, setThPa] = useState<string>('200000');
  const [thPb, setThPb] = useState<string>('800000');
  const [thJarak, setThJarak] = useState<string>('30');
  const [titikHentiResult, setTitikHentiResult] = useState<{
    main: string;
    ratio: number;
    kotaKecil: string;
    jarakDariKecil: number;
    jarakDariBesar: number;
    steps: string[];
  } | null>(null);

  // Skala Calculation
  const handleHitungSkala = () => {
    if (skalaMode === 'penyebut') {
      const jp = parseFloat(valJp);
      const js = parseFloat(valJs);
      if (isNaN(jp) || isNaN(js) || jp <= 0 || js <= 0) return;

      const jsCm = js * 100000;
      const penyebut = Math.round(jsCm / jp);
      setSkalaResult({
        main: `1 : ${penyebut.toLocaleString('id-ID')}`,
        steps: [
          `Langkah 1 (Konversi JS): ${js} km × 100.000 = ${jsCm.toLocaleString('id-ID')} cm`,
          `Langkah 2 (Rumus Skala): Penyebut = Jarak Sebenarnya (cm) / Jarak Peta (cm)`,
          `Langkah 3 (Substitusi): ${jsCm.toLocaleString('id-ID')} / ${jp} = ${penyebut.toLocaleString('id-ID')}`,
        ],
        details: `Setiap 1 cm pada peta mewakili ${penyebut.toLocaleString('id-ID')} cm (${(penyebut / 100000).toFixed(2)} km) di lapangan sebenarnya.`
      });
    } else if (skalaMode === 'jp') {
      const penyebut = parseFloat(valPenyebut);
      const js = parseFloat(valJs);
      if (isNaN(penyebut) || isNaN(js) || penyebut <= 0 || js <= 0) return;

      const jsCm = js * 100000;
      const jp = jsCm / penyebut;
      setSkalaResult({
        main: `${jp.toFixed(2)} cm`,
        steps: [
          `Langkah 1 (Konversi JS): ${js} km × 100.000 = ${jsCm.toLocaleString('id-ID')} cm`,
          `Langkah 2 (Rumus JP): JP = Jarak Sebenarnya (cm) / Penyebut Skala`,
          `Langkah 3 (Substitusi): ${jsCm.toLocaleString('id-ID')} / ${penyebut.toLocaleString('id-ID')} = ${jp.toFixed(2)} cm`,
        ],
        details: `Jarak yang harus digambar siswa pada kertas peta adalah sepanjang ${jp.toFixed(2)} centimeter.`
      });
    } else {
      const penyebut = parseFloat(valPenyebut);
      const jp = parseFloat(valJp);
      if (isNaN(penyebut) || isNaN(jp) || penyebut <= 0 || jp <= 0) return;

      const jsCm = jp * penyebut;
      const jsKm = jsCm / 100000;
      setSkalaResult({
        main: `${jsKm.toFixed(2)} km (${jsCm.toLocaleString('id-ID')} cm)`,
        steps: [
          `Langkah 1 (Rumus JS): Jarak Sebenarnya = Jarak Peta × Penyebut Skala`,
          `Langkah 2 (Hitung cm): ${jp} cm × ${penyebut.toLocaleString('id-ID')} = ${jsCm.toLocaleString('id-ID')} cm`,
          `Langkah 3 (Ubah ke km): ${jsCm.toLocaleString('id-ID')} cm / 100.000 = ${jsKm.toFixed(2)} km`,
        ],
        details: `Jarak asli di lapangan antara kedua titik tersebut adalah ${jsKm.toFixed(2)} kilometer.`
      });
    }
  };

  // Kontur Interval Calculation
  const handleHitungKontur = () => {
    if (konturMode === 'ci') {
      const penyebut = parseFloat(valKonturPenyebut);
      if (isNaN(penyebut) || penyebut <= 0) return;
      const ci = (1 / 2000) * penyebut;
      setKonturResult({
        main: `${ci.toFixed(1)} meter`,
        formula: `CI = 1 / 2000 × Penyebut Skala`,
        steps: [
          `Langkah 1: Penyebut Skala Peta = ${penyebut.toLocaleString('id-ID')}`,
          `Langkah 2: Hitung CI = (1 / 2000) × ${penyebut.toLocaleString('id-ID')}`,
          `Langkah 3: CI = ${ci.toFixed(1)} meter`,
        ]
      });
    } else {
      const ci = parseFloat(valCi);
      if (isNaN(ci) || ci <= 0) return;
      const penyebut = ci * 2000;
      setKonturResult({
        main: `1 : ${penyebut.toLocaleString('id-ID')}`,
        formula: `Penyebut Skala = CI × 2000`,
        steps: [
          `Langkah 1: Kontur Interval (CI) = ${ci} meter`,
          `Langkah 2: Hitung Penyebut = ${ci} × 2000`,
          `Langkah 3: Maka Skala Peta Topografi = 1 : ${penyebut.toLocaleString('id-ID')}`,
        ]
      });
    }
  };

  // Gravitasi Calculation
  const handleHitungGravitasi = () => {
    const pA = parseFloat(pa);
    const pB = parseFloat(pb);
    const d = parseFloat(jarak);
    if (isNaN(pA) || isNaN(pB) || isNaN(d) || pA <= 0 || pB <= 0 || d <= 0) return;

    const pembilang = pA * pB;
    const penyebut = Math.pow(d, 2);
    const interaksi = pembilang / penyebut;

    setGravitasiResult({
      main: `${Math.round(interaksi).toLocaleString('id-ID')} poin indeks`,
      steps: [
        `Langkah 1 (Perkalian Penduduk): ${pA.toLocaleString('id-ID')} × ${pB.toLocaleString('id-ID')} = ${pembilang.toLocaleString('id-ID')}`,
        `Langkah 2 (Kuadrat Jarak): ${d}² = ${penyebut} km²`,
        `Langkah 3 (Pembagian): ${pembilang.toLocaleString('id-ID')} / ${penyebut} = ${Math.round(interaksi).toLocaleString('id-ID')}`
      ]
    });
  };

  // Titik Henti Calculation
  const handleHitungTitikHenti = () => {
    const pA = parseFloat(thPa);
    const pB = parseFloat(thPb);
    const d = parseFloat(thJarak);
    if (isNaN(pA) || isNaN(pB) || isNaN(d) || pA <= 0 || pB <= 0 || d <= 0) return;

    const pKecil = Math.min(pA, pB);
    const pBesar = Math.max(pA, pB);
    const namaKecil = pA <= pB ? 'Kota A' : 'Kota B';
    const namaBesar = pA > pB ? 'Kota A' : 'Kota B';

    const rasio = pBesar / pKecil;
    const akarRasio = Math.sqrt(rasio);
    const penyebut = 1 + akarRasio;
    const jarakDariKecil = d / penyebut;
    const jarakDariBesar = d - jarakDariKecil;

    setTitikHentiResult({
      main: `${jarakDariKecil.toFixed(2)} km dari ${namaKecil}`,
      ratio: (jarakDariKecil / d) * 100,
      kotaKecil: namaKecil,
      jarakDariKecil: Number(jarakDariKecil.toFixed(2)),
      jarakDariBesar: Number(jarakDariBesar.toFixed(2)),
      steps: [
        `Langkah 1: Identifikasi Populasi (Besar: ${pBesar.toLocaleString('id-ID')}, Kecil: ${pKecil.toLocaleString('id-ID')} di ${namaKecil})`,
        `Langkah 2: Rasio Penduduk = ${pBesar.toLocaleString('id-ID')} / ${pKecil.toLocaleString('id-ID')} = ${rasio.toFixed(2)}`,
        `Langkah 3: Akar Rasio = √${rasio.toFixed(2)} = ${akarRasio.toFixed(2)}`,
        `Langkah 4: Penyebut Rumus = 1 + ${akarRasio.toFixed(2)} = ${penyebut.toFixed(2)}`,
        `Langkah 5: Jarak Titik Henti = ${d} km / ${penyebut.toFixed(2)} = ${jarakDariKecil.toFixed(2)} km (diukur dari ${namaKecil})`
      ]
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Introduction */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Laboratorium Matematis Geografi</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Kalkulator & Panduan Rumus Geografi</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
              Panduan interaktif anti-bingung untuk menghitung Skala Peta, Kontur Interval (CI), Kekuatan Interaksi Wilayah (Reilly), dan Teori Titik Henti disertai penjabaran langkah demi langkah yang gamblang.
            </p>
          </div>
        </div>

        {/* 3 Golden Rules Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
              Aturan Emas Konversi
            </div>
            <p className="text-xs font-mono font-bold text-emerald-950 bg-white/80 px-2 py-1 rounded inline-block">1 km = 100.000 cm</p>
            <p className="text-xs text-slate-600">Saat mencari skala, wajib ubah kilometer ke centimeter (kali 100.000) sebelum dibagi.</p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-1">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
              <span className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs">2</span>
              Rumus Pokok Skala
            </div>
            <p className="text-xs font-mono font-bold text-teal-950 bg-white/80 px-2 py-1 rounded inline-block">Skala = JP / JS</p>
            <p className="text-xs text-slate-600">JP adalah Jarak Peta (cm) dan JS adalah Jarak Sebenarnya yang telah diubah ke cm.</p>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100 space-y-1">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm">
              <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs">3</span>
              Interval Kontur (CI)
            </div>
            <p className="text-xs font-mono font-bold text-cyan-950 bg-white/80 px-2 py-1 rounded inline-block">CI = 1 / 2000 × Penyebut</p>
            <p className="text-xs text-slate-600">Konstanta 1/2000 adalah standar kartografi nasional untuk peta rupa bumi Indonesia.</p>
          </div>
        </div>
      </div>

      {/* Calculator Navigation Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveCalc('skala')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
            activeCalc === 'skala'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div>
            <span className={`block text-xs font-semibold uppercase ${activeCalc === 'skala' ? 'text-emerald-100' : 'text-slate-400'}`}>Alat 1</span>
            <span className="text-sm sm:text-base font-bold">Skala Peta</span>
          </div>
          <MapPin className={`w-5 h-5 shrink-0 ${activeCalc === 'skala' ? 'text-emerald-200' : 'text-slate-400'}`} />
        </button>

        <button
          onClick={() => setActiveCalc('kontur')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
            activeCalc === 'kontur'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div>
            <span className={`block text-xs font-semibold uppercase ${activeCalc === 'kontur' ? 'text-emerald-100' : 'text-slate-400'}`}>Alat 2</span>
            <span className="text-sm sm:text-base font-bold">Kontur Interval</span>
          </div>
          <Mountain className={`w-5 h-5 shrink-0 ${activeCalc === 'kontur' ? 'text-emerald-200' : 'text-slate-400'}`} />
        </button>

        <button
          onClick={() => setActiveCalc('gravitasi')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
            activeCalc === 'gravitasi'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div>
            <span className={`block text-xs font-semibold uppercase ${activeCalc === 'gravitasi' ? 'text-emerald-100' : 'text-slate-400'}`}>Alat 3</span>
            <span className="text-sm sm:text-base font-bold">Gravitasi Reilly</span>
          </div>
          <Building2 className={`w-5 h-5 shrink-0 ${activeCalc === 'gravitasi' ? 'text-emerald-200' : 'text-slate-400'}`} />
        </button>

        <button
          onClick={() => setActiveCalc('titikhenti')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
            activeCalc === 'titikhenti'
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
          }`}
        >
          <div>
            <span className={`block text-xs font-semibold uppercase ${activeCalc === 'titikhenti' ? 'text-emerald-100' : 'text-slate-400'}`}>Alat 4</span>
            <span className="text-sm sm:text-base font-bold">Titik Henti</span>
          </div>
          <TrendingUp className={`w-5 h-5 shrink-0 ${activeCalc === 'titikhenti' ? 'text-emerald-200' : 'text-slate-400'}`} />
        </button>
      </div>

      {/* CALCULATOR 1: SKALA PETA */}
      {activeCalc === 'skala' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900">Kalkulator Interaktif Skala Peta</h3>
            <p className="text-sm text-slate-500">Pilih variabel yang ingin Anda cari, masukkan angka yang diketahui, lalu klik tombol hitung.</p>
          </div>

          {/* Mode Switcher */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Pilih Nilai yang Ingin Dihitung:</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => { setSkalaMode('penyebut'); setSkalaResult(null); }}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition border text-left ${
                  skalaMode === 'penyebut'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                1. Cari Skala Peta (Ada JP & JS)
              </button>
              <button
                type="button"
                onClick={() => { setSkalaMode('jp'); setSkalaResult(null); }}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition border text-left ${
                  skalaMode === 'jp'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                2. Cari Jarak di Peta (JP)
              </button>
              <button
                type="button"
                onClick={() => { setSkalaMode('js'); setSkalaResult(null); }}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition border text-left ${
                  skalaMode === 'js'
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                3. Cari Jarak Sebenarnya (JS)
              </button>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">Contoh Soal Cepat:</span>
            <button
              onClick={() => { setSkalaMode('penyebut'); setValJp('4'); setValJs('8'); setSkalaResult(null); }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition"
            >
              JP: 4 cm, JS: 8 km (Soal Ujian No. 7)
            </button>
            <button
              onClick={() => { setSkalaMode('js'); setValJp('5'); setValPenyebut('100000'); setSkalaResult(null); }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition"
            >
              Skala 1:100.000, JP: 5 cm (Soal No. 30)
            </button>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skalaMode === 'penyebut' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Jarak pada Peta (JP) dalam cm</label>
                  <input
                    type="number"
                    value={valJp}
                    onChange={(e) => setValJp(e.target.value)}
                    placeholder="Contoh: 4"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Jarak Sebenarnya (JS) dalam km</label>
                  <input
                    type="number"
                    value={valJs}
                    onChange={(e) => setValJs(e.target.value)}
                    placeholder="Contoh: 8"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
              </>
            )}

            {skalaMode === 'jp' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Penyebut Skala (misal 200000 untuk 1:200.000)</label>
                  <input
                    type="number"
                    value={valPenyebut}
                    onChange={(e) => setValPenyebut(e.target.value)}
                    placeholder="Contoh: 200000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Jarak Sebenarnya (JS) dalam km</label>
                  <input
                    type="number"
                    value={valJs}
                    onChange={(e) => setValJs(e.target.value)}
                    placeholder="Contoh: 8"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
              </>
            )}

            {skalaMode === 'js' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Penyebut Skala (misal 100000 untuk 1:100.000)</label>
                  <input
                    type="number"
                    value={valPenyebut}
                    onChange={(e) => setValPenyebut(e.target.value)}
                    placeholder="Contoh: 100000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Jarak pada Peta (JP) dalam cm</label>
                  <input
                    type="number"
                    value={valJp}
                    onChange={(e) => setValJp(e.target.value)}
                    placeholder="Contoh: 5"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  />
                </div>
              </>
            )}
          </div>

          <button
            onClick={handleHitungSkala}
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" /> Hitung & Tampilkan Langkah Rumus
          </button>

          {/* Result Card */}
          {skalaResult && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Hasil Perhitungan Skala:</span>
                <span className="text-2xl font-extrabold text-emerald-900 font-mono">{skalaResult.main}</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-emerald-950 uppercase">Langkah-Langkah Perhitungan Lengkap:</h4>
                <div className="space-y-1 font-mono text-xs text-emerald-900 bg-white/70 p-3 rounded-xl border border-emerald-100">
                  {skalaResult.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-emerald-800 italic">{skalaResult.details}</p>
            </div>
          )}
        </div>
      )}

      {/* CALCULATOR 2: INTERVAL KONTUR (CI) */}
      {activeCalc === 'kontur' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900">Kalkulator Interval Kontur (CI) Peta Topografi</h3>
            <p className="text-sm text-slate-500">Mencari beda tinggi antar garis kontur atau mencari skala peta dari beda tinggi konturnya.</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => { setKonturMode('ci'); setKonturResult(null); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition border ${
                konturMode === 'ci'
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              Mencari CI (Beda Tinggi Kontur)
            </button>
            <button
              onClick={() => { setKonturMode('skala'); setKonturResult(null); }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition border ${
                konturMode === 'skala'
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}
            >
              Mencari Skala Peta dari CI
            </button>
          </div>

          {konturMode === 'ci' ? (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Penyebut Skala Peta (contoh: 50000 untuk peta 1:50.000)</label>
              <input
                type="number"
                value={valKonturPenyebut}
                onChange={(e) => setValKonturPenyebut(e.target.value)}
                placeholder="Contoh: 50000"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
          ) : (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Interval Kontur (CI) dalam meter</label>
              <input
                type="number"
                value={valCi}
                onChange={(e) => setValCi(e.target.value)}
                placeholder="Contoh: 25"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
          )}

          <button
            onClick={handleHitungKontur}
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" /> Hitung Kontur Interval
          </button>

          {konturResult && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Hasil Interval Kontur:</span>
                <span className="text-2xl font-extrabold text-emerald-900 font-mono">{konturResult.main}</span>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-emerald-800 font-mono bg-white/60 p-2 rounded">
                  Rumus yang Digunakan: {konturResult.formula}
                </p>
                <div className="space-y-1 font-mono text-xs text-emerald-900 bg-white/70 p-3 rounded-xl border border-emerald-100">
                  {konturResult.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CALCULATOR 3: INTERAKSI GRAVITASI (REILLY) */}
      {activeCalc === 'gravitasi' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900">Kalkulator Kekuatan Interaksi Wilayah (W.J. Reilly)</h3>
            <p className="text-sm text-slate-500">
              Rumus: <code className="bg-slate-100 px-2 py-0.5 rounded text-emerald-700 font-mono font-bold">I = (Pa × Pb) / (d²)</code>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Jumlah Penduduk Kota A (Pa)</label>
              <input
                type="number"
                value={pa}
                onChange={(e) => setPa(e.target.value)}
                placeholder="Contoh: 100000"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Jumlah Penduduk Kota B (Pb)</label>
              <input
                type="number"
                value={pb}
                onChange={(e) => setPb(e.target.value)}
                placeholder="Contoh: 400000"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Jarak Spasial A ke B (d dalam km)</label>
              <input
                type="number"
                value={jarak}
                onChange={(e) => setJarak(e.target.value)}
                placeholder="Contoh: 20"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
          </div>

          <button
            onClick={handleHitungGravitasi}
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" /> Hitung Kekuatan Interaksi
          </button>

          {gravitasiResult && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Kekuatan Interaksi (I):</span>
                <span className="text-2xl font-extrabold text-emerald-900 font-mono">{gravitasiResult.main}</span>
              </div>
              <div className="space-y-1 font-mono text-xs text-emerald-900 bg-white/70 p-3 rounded-xl border border-emerald-100">
                {gravitasiResult.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* CALCULATOR 4: TEORI TITIK HENTI (BREAKING POINT) */}
      {activeCalc === 'titikhenti' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900">Kalkulator Teori Titik Henti (Carrothers / Reilly)</h3>
            <p className="text-sm text-slate-500">
              Menentukan lokasi fasilitas umum (pasar, rumah sakit, SPBU) yang paling ideal dan adil di antara dua kota.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Penduduk Kota X (Pa)</label>
              <input
                type="number"
                value={thPa}
                onChange={(e) => setThPa(e.target.value)}
                placeholder="Contoh: 200000"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Penduduk Kota Y (Pb)</label>
              <input
                type="number"
                value={thPb}
                onChange={(e) => setThPb(e.target.value)}
                placeholder="Contoh: 800000"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Jarak Total Kedua Kota (d dalam km)</label>
              <input
                type="number"
                value={thJarak}
                onChange={(e) => setThJarak(e.target.value)}
                placeholder="Contoh: 30"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              />
            </div>
          </div>

          <button
            onClick={handleHitungTitikHenti}
            className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-xs transition active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" /> Hitung Posisi Titik Henti
          </button>

          {titikHentiResult && (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-5 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Posisi Titik Henti Ideal:</span>
                  <p className="text-xs text-emerald-700">Wajib diukur dari kota dengan populasi lebih kecil</p>
                </div>
                <span className="text-2xl font-extrabold text-emerald-900 font-mono">{titikHentiResult.main}</span>
              </div>

              {/* Visual Interactive Diagram between two cities */}
              <div className="p-4 bg-white rounded-2xl border border-emerald-200/80 space-y-3">
                <span className="text-xs font-bold text-slate-600 block">Visualisasi Keruangan Titik Henti:</span>
                <div className="relative pt-6 pb-4 px-4">
                  <div className="h-3 bg-slate-200 rounded-full relative">
                    <div 
                      className="h-3 bg-emerald-600 rounded-full" 
                      style={{ width: `${Math.min(100, Math.max(0, titikHentiResult.ratio))}%` }}
                    />
                    {/* Marker */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-amber-500 border-2 border-white rounded-full shadow flex items-center justify-center text-[10px] text-white font-bold"
                      style={{ left: `${Math.min(95, Math.max(5, titikHentiResult.ratio))}%` }}
                      title="Lokasi Fasilitas Umum"
                    >
                      ★
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mt-2">
                    <span>Kota X ({parseFloat(thPa).toLocaleString('id-ID')} jiwa)</span>
                    <span className="text-amber-600 font-bold">Fasilitas ({titikHentiResult.jarakDariKecil} km)</span>
                    <span>Kota Y ({parseFloat(thPb).toLocaleString('id-ID')} jiwa)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 font-mono text-xs text-emerald-900 bg-white/70 p-3 rounded-xl border border-emerald-100">
                {titikHentiResult.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
