import React, { useState } from 'react';
import { 
  ZoomIn, 
  Layers, 
  MapPin, 
  TrendingUp, 
  Compass, 
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { VisualStimulus } from '../data/questionsData.ts';

interface VisualQuestionRendererProps {
  visual: VisualStimulus;
}

export const VisualQuestionRenderer: React.FC<VisualQuestionRendererProps> = ({ visual }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const renderContent = () => {
    switch (visual.type) {
      case 'contour_map':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 260" className="w-full max-w-lg h-auto select-none rounded-xl bg-emerald-950/5 border border-emerald-900/10">
              <defs>
                <linearGradient id="contourGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d1fae5" />
                  <stop offset="100%" stopColor="#a7f3d0" />
                </linearGradient>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="440" height="260" fill="#f8fafc" />
              <rect width="440" height="260" fill="url(#grid)" />

              {/* North Arrow Compass */}
              <g transform="translate(400, 35)">
                <circle cx="0" cy="0" r="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                <path d="M 0 -12 L 5 4 L 0 1 L -5 4 Z" fill="#047857" />
                <path d="M 0 12 L 5 4 L 0 1 L -5 4 Z" fill="#94a3b8" />
                <text x="0" y="-14" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#065f46">U</text>
              </g>

              {/* River Line flowing through valley */}
              <path 
                d="M 50 20 C 120 70, 160 120, 210 140 C 260 160, 300 190, 390 240" 
                fill="none" 
                stroke="#0284c7" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
              />
              <text x="290" y="185" fill="#0369a1" fontSize="9" fontWeight="bold" fontStyle="italic">Sungai Brantas</text>
              {/* River flow arrow */}
              <polygon points="350,210 365,220 350,225" fill="#0284c7" />

              {/* Outer Contour line: 50m */}
              <path d="M 40 220 C 70 120, 150 40, 280 40 C 370 40, 420 120, 380 230" fill="none" stroke="#78350f" strokeWidth="1.2" strokeDasharray="4 2" />
              <text x="110" y="70" fill="#78350f" fontSize="8" fontWeight="bold">50 m</text>

              {/* Contour line 100m */}
              <path d="M 70 200 C 95 130, 160 70, 270 70 C 350 70, 380 130, 350 210" fill="none" stroke="#78350f" strokeWidth="1.5" />
              <text x="145" y="90" fill="#78350f" fontSize="8" fontWeight="bold">100 m</text>

              {/* Contour line 150m (Thicker index) */}
              <path d="M 110 180 C 130 140, 180 100, 260 100 C 320 100, 340 140, 320 190" fill="none" stroke="#78350f" strokeWidth="2.2" />
              <text x="180" y="112" fill="#78350f" fontSize="8" fontWeight="bold">150 m</text>

              {/* Contour line 200m */}
              <ellipse cx="230" cy="140" rx="45" ry="30" fill="none" stroke="#78350f" strokeWidth="1.5" />
              <text x="220" y="125" fill="#78350f" fontSize="8" fontWeight="bold">200 m</text>

              {/* Contour line 250m Peak */}
              <ellipse cx="230" cy="140" rx="18" ry="12" fill="#fed7aa" fillOpacity="0.4" stroke="#78350f" strokeWidth="1.8" />
              <circle cx="230" cy="140" r="2.5" fill="#991b1b" />
              <text x="238" y="143" fill="#991b1b" fontSize="8" fontWeight="bold">▲ 265 m (Puncak)</text>

              {/* Point A (Curam: rapat di sisi barat) */}
              <circle cx="120" cy="155" r="4" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
              <text x="115" y="148" fill="#dc2626" fontSize="10" fontWeight="extrabold">A</text>
              <rect x="70" y="162" width="75" height="16" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="0.8" />
              <text x="107" y="173" textAnchor="middle" fill="#991b1b" fontSize="7.5" fontWeight="bold">Garis Kontur Rapat</text>

              {/* Point B (Landai: renggang di sisi timur) */}
              <circle cx="330" cy="160" r="4" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
              <text x="337" y="160" fill="#2563eb" fontSize="10" fontWeight="extrabold">B</text>
              <rect x="300" y="172" width="85" height="16" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.8" />
              <text x="342" y="183" textAnchor="middle" fill="#1e40af" fontSize="7.5" fontWeight="bold">Garis Kontur Renggang</text>

              {/* Graphical Scale bar */}
              <g transform="translate(30, 235)">
                <rect x="0" y="0" width="120" height="6" fill="#ffffff" stroke="#334155" strokeWidth="1" />
                <rect x="0" y="0" width="30" height="6" fill="#0f172a" />
                <rect x="60" y="0" width="30" height="6" fill="#0f172a" />
                <text x="0" y="15" fontSize="7" fill="#475569">0</text>
                <text x="30" y="15" fontSize="7" fill="#475569">1 km</text>
                <text x="60" y="15" fontSize="7" fill="#475569">2 km</text>
                <text x="120" y="15" fontSize="7" fill="#475569">4 km</text>
                <text x="60" y="-3" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#0f172a">Skala 1 : 50.000 (CI = 25m)</text>
              </g>
            </svg>
          </div>
        );

      case 'climate_graph':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 260" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="260" fill="#ffffff" />
              
              {/* Axes and Grid */}
              <line x1="50" y1="210" x2="410" y2="210" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="50" y1="30" x2="50" y2="210" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="410" y1="30" x2="410" y2="210" stroke="#94a3b8" strokeWidth="1.5" />

              {/* Left axis label: Curah Hujan (mm) */}
              <text x="18" y="120" transform="rotate(-90 18 120)" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0284c7">
                Curah Hujan (mm)
              </text>
              {/* Right axis label: Suhu (°C) */}
              <text x="442" y="120" transform="rotate(90 442 120)" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">
                Suhu Udara (°C)
              </text>

              {/* Ticks Left */}
              <text x="42" y="213" textAnchor="end" fontSize="7.5" fill="#64748b">0</text>
              <line x1="47" y1="210" x2="410" y2="210" stroke="#f1f5f9" strokeWidth="1" />
              <text x="42" y="165" textAnchor="end" fontSize="7.5" fill="#64748b">100</text>
              <line x1="50" y1="165" x2="410" y2="165" stroke="#f1f5f9" strokeWidth="1" />
              <text x="42" y="120" textAnchor="end" fontSize="7.5" fill="#64748b">200</text>
              <line x1="50" y1="120" x2="410" y2="120" stroke="#f1f5f9" strokeWidth="1" />
              <text x="42" y="75" textAnchor="end" fontSize="7.5" fill="#64748b">300</text>
              <line x1="50" y1="75" x2="410" y2="75" stroke="#f1f5f9" strokeWidth="1" />
              <text x="42" y="35" textAnchor="end" fontSize="7.5" fill="#64748b">400</text>
              <line x1="50" y1="35" x2="410" y2="35" stroke="#f1f5f9" strokeWidth="1" />

              {/* Ticks Right: Temperature */}
              <text x="418" y="213" fontSize="7.5" fill="#dc2626">20°</text>
              <text x="418" y="150" fontSize="7.5" fill="#dc2626">25°</text>
              <text x="418" y="85" fontSize="7.5" fill="#dc2626">30°</text>

              {/* Monthly Bars: Jan to Dec */}
              {[
                { m: 'Jan', r: 360, t: 26.5 },
                { m: 'Feb', r: 330, t: 26.8 },
                { m: 'Mar', r: 270, t: 27.2 },
                { m: 'Apr', r: 190, t: 27.8 },
                { m: 'Mei', r: 110, t: 28.0 },
                { m: 'Jun', r: 60,  t: 27.5 },
                { m: 'Jul', r: 40,  t: 26.9 },
                { m: 'Agu', r: 35,  t: 27.1 },
                { m: 'Sep', r: 75,  t: 28.2 },
                { m: 'Okt', r: 160, t: 28.4 },
                { m: 'Nov', r: 280, t: 27.5 },
                { m: 'Des', r: 375, t: 26.7 },
              ].map((item, idx) => {
                const x = 65 + idx * 29;
                const barHeight = (item.r / 400) * 175;
                const barY = 210 - barHeight;
                return (
                  <g key={idx}>
                    {/* Bar for rainfall */}
                    <rect 
                      x={x - 9} 
                      y={barY} 
                      width="18" 
                      height={barHeight} 
                      fill="#38bdf8" 
                      rx="2"
                    />
                    {/* Month Label */}
                    <text x={x} y="225" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#334155">
                      {item.m}
                    </text>
                  </g>
                );
              })}

              {/* Temperature Line Path */}
              <path 
                d="M 65 130 Q 150 115, 239 120 T 384 125" 
                fill="none" 
                stroke="#dc2626" 
                strokeWidth="2.5" 
              />
              {[
                { x: 65, y: 132 },
                { x: 94, y: 128 },
                { x: 123, y: 123 },
                { x: 152, y: 118 },
                { x: 181, y: 115 },
                { x: 210, y: 120 },
                { x: 239, y: 127 },
                { x: 268, y: 125 },
                { x: 297, y: 114 },
                { x: 326, y: 112 },
                { x: 355, y: 121 },
                { x: 384, y: 129 },
              ].map((pt, i) => (
                <circle key={i} cx={pt.x} cy={pt.y} r="2.8" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
              ))}

              {/* Legend Box */}
              <g transform="translate(150, 10)">
                <rect x="0" y="0" width="160" height="18" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <rect x="8" y="5" width="10" height="8" fill="#38bdf8" rx="1" />
                <text x="22" y="12" fontSize="7.5" fill="#334155" fontWeight="medium">Curah Hujan (mm)</text>
                <line x1="105" y1="9" x2="120" y2="9" stroke="#dc2626" strokeWidth="2" />
                <circle cx="112.5" cy="9" r="2" fill="#dc2626" />
                <text x="124" y="12" fontSize="7.5" fill="#dc2626" fontWeight="medium">Suhu (°C)</text>
              </g>
            </svg>
          </div>
        );

      case 'population_pyramid':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="440" height="250" fill="#ffffff" />
              <text x="220" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Piramida Penduduk Tipe Ekspansif (Muda / Segitiga)
              </text>

              {/* Axis Line in Center */}
              <line x1="220" y1="30" x2="220" y2="215" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Age cohort labels and horizontal bars */}
              {[
                { age: '75+', m: 18, f: 22 },
                { age: '70-74', m: 28, f: 32 },
                { age: '65-69', m: 42, f: 45 },
                { age: '60-64', m: 58, f: 60 },
                { age: '50-54', m: 76, f: 78 },
                { age: '40-44', m: 98, f: 99 },
                { age: '30-34', m: 122, f: 124 },
                { age: '20-24', m: 145, f: 148 },
                { age: '10-14', m: 168, f: 169 },
                { age: '5-9',   m: 182, f: 183 },
                { age: '0-4',   m: 195, f: 193 },
              ].map((row, idx) => {
                const y = 35 + idx * 16;
                const mWidth = (row.m / 200) * 160;
                const fWidth = (row.f / 200) * 160;
                return (
                  <g key={idx}>
                    {/* Age Text in Center */}
                    <rect x="207" y={y - 1} width="26" height="12" fill="#f1f5f9" rx="2" />
                    <text x="220" y={y + 8} textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#475569">
                      {row.age}
                    </text>

                    {/* Male bar (leftward) */}
                    <rect 
                      x={203 - mWidth} 
                      y={y} 
                      width={mWidth} 
                      height="10" 
                      fill="#3b82f6" 
                      rx="2" 
                    />
                    {/* Female bar (rightward) */}
                    <rect 
                      x={237} 
                      y={y} 
                      width={fWidth} 
                      height="10" 
                      fill="#ec4899" 
                      rx="2" 
                    />
                  </g>
                );
              })}

              {/* Labels Bottom */}
              <text x="120" y="235" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#2563eb">
                ◄ Laki-laki (Juta Jiwa)
              </text>
              <text x="320" y="235" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#db2777">
                Perempuan (Juta Jiwa) ►
              </text>

              {/* Annotations */}
              <rect x="18" y="195" width="90" height="20" rx="4" fill="#fef3c7" stroke="#fcd34d" strokeWidth="0.8" />
              <text x="63" y="208" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#92400e">Dasar Lebar: Kelahiran Tinggi</text>

              <rect x="330" y="40" width="88" height="20" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="0.8" />
              <text x="374" y="53" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#991b1b">Puncak Runcing: Harapan Rendah</text>
            </svg>
          </div>
        );

      case 'tectonic_plate':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-slate-900 border border-slate-700">
              <defs>
                <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#082f49" />
                </linearGradient>
                <linearGradient id="mantleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#451a03" />
                </linearGradient>
              </defs>

              {/* Ocean Water */}
              <path d="M 0 45 L 230 45 L 210 120 L 0 120 Z" fill="url(#oceanGrad)" />
              <text x="90" y="70" fill="#bae6fd" fontSize="9" fontWeight="bold">Samudra Hindia</text>

              {/* Subducting Oceanic Plate (Lempeng Indo-Australia) */}
              <path 
                d="M 0 120 L 190 120 L 300 240 L 260 240 L 150 150 L 0 150 Z" 
                fill="#475569" 
                stroke="#64748b" 
                strokeWidth="1.5" 
              />
              <text x="70" y="138" fill="#f8fafc" fontSize="8" fontWeight="bold">Lempeng Samudra Indo-Australia</text>
              {/* Motion Arrow */}
              <polygon points="120,132 140,132 135,127" fill="#fbbf24" />
              <line x1="100" y1="132" x2="135" y2="132" stroke="#fbbf24" strokeWidth="2.5" />
              <text x="110" y="146" fill="#fbbf24" fontSize="7" fontWeight="bold">Arah Tunjaman</text>

              {/* Deep Ocean Trench (Palung Jawa/Sumatra) */}
              <polygon points="188,118 198,135 208,118" fill="#0369a1" />
              <text x="185" y="105" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">Palung Laut (Trench)</text>

              {/* Continental Plate (Lempeng Benua Eurasia / Sumatra-Jawa) */}
              <path 
                d="M 205 118 Q 240 100, 260 65 Q 280 40, 310 40 Q 330 60, 360 50 Q 390 40, 460 70 L 460 240 L 300 240 Z" 
                fill="#78716c" 
                stroke="#a8a29e" 
                strokeWidth="1.5" 
              />
              <text x="350" y="100" fill="#f5f5f4" fontSize="8.5" fontWeight="bold">Lempeng Benua Eurasia (Sumatera/Jawa)</text>

              {/* Volcanoes & Magma Chambers */}
              {/* Magma melting zone */}
              <ellipse cx="290" cy="200" rx="20" ry="12" fill="#ef4444" opacity="0.9" />
              <path d="M 290 190 Q 295 130, 310 42" stroke="#f97316" strokeWidth="3" fill="none" strokeDasharray="3 2" />
              {/* Volcano 1 */}
              <polygon points="295,45 310,25 325,45" fill="#dc2626" />
              {/* Eruption smoke */}
              <circle cx="310" cy="18" r="5" fill="#fca5a5" opacity="0.8" />
              <circle cx="313" cy="11" r="7" fill="#cbd5e1" opacity="0.6" />
              <text x="310" y="8" textAnchor="middle" fill="#fef08a" fontSize="7.5" fontWeight="extrabold">Busur Vulkanik Aktif</text>

              {/* Earthquake Hypocenter / Benioff Zone */}
              <circle cx="250" cy="170" r="5" fill="#facc15" stroke="#dc2626" strokeWidth="2" />
              <text x="250" y="160" textAnchor="middle" fill="#facc15" fontSize="7" fontWeight="bold">Zona Wadati-Benioff (Gempa)</text>

              {/* Lower Mantle / Astenosfer */}
              <rect x="0" y="240" width="460" height="10" fill="url(#mantleGrad)" />
            </svg>
          </div>
        );

      case 'river_pattern':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="440" height="240" fill="#ffffff" />
              <text x="220" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Karakteristik 4 Pola Aliran Sungai Utama di Indonesia
              </text>

              {/* 1. Dendritik (Top-Left) */}
              <g transform="translate(10, 30)">
                <rect width="200" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="10" y="16" fontSize="8.5" fontWeight="bold" fill="#0f172a">Pola Dendritik (Ranting Pohon)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Batuan sedimen homogen / dataran rendah</text>
                <path d="M 180 80 C 130 65, 80 55, 30 50" stroke="#0284c7" strokeWidth="2.5" fill="none" />
                <path d="M 80 55 C 60 40, 40 35, 20 35" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 120 63 C 100 80, 80 85, 60 85" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 145 70 C 135 85, 120 90, 105 88" stroke="#0284c7" strokeWidth="1.2" fill="none" />
                <path d="M 50 45 C 40 55, 30 60, 20 62" stroke="#0284c7" strokeWidth="1.2" fill="none" />
              </g>

              {/* 2. Trellis (Top-Right) */}
              <g transform="translate(230, 30)">
                <rect width="200" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="10" y="16" fontSize="8.5" fontWeight="bold" fill="#0f172a">Pola Trellis (Pagar / Teralis)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Daerah lipatan sinklin & antiklin sejajar</text>
                {/* Main trunk */}
                <line x1="20" y1="50" x2="180" y2="50" stroke="#0284c7" strokeWidth="2.5" />
                {/* Perpendicular tributaries */}
                <line x1="60" y1="20" x2="60" y2="50" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="60" y1="50" x2="60" y2="80" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="110" y1="20" x2="110" y2="50" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="110" y1="50" x2="110" y2="80" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="150" y1="20" x2="150" y2="50" stroke="#0284c7" strokeWidth="1.5" />
                <line x1="150" y1="50" x2="150" y2="80" stroke="#0284c7" strokeWidth="1.5" />
              </g>

              {/* 3. Radial Sentrifugal (Bottom-Left) */}
              <g transform="translate(10, 135)">
                <rect width="200" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="10" y="16" fontSize="8.5" fontWeight="bold" fill="#0f172a">Pola Radial Sentrifugal</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Menyebar menuruni puncak gunung api/kubah</text>
                {/* Central Peak */}
                <circle cx="100" cy="60" r="10" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
                <text x="100" y="63" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#c2410c">Puncak</text>
                {/* Radiating rivers */}
                <line x1="100" y1="48" x2="100" y2="28" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="100" y1="72" x2="100" y2="92" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="88" y1="60" x2="65" y2="60" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="112" y1="60" x2="135" y2="60" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="91" y1="51" x2="72" y2="38" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="109" y1="69" x2="128" y2="82" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="91" y1="69" x2="72" y2="82" stroke="#0284c7" strokeWidth="1.8" />
                <line x1="109" y1="51" x2="128" y2="38" stroke="#0284c7" strokeWidth="1.8" />
              </g>

              {/* 4. Rektangular (Bottom-Right) */}
              <g transform="translate(230, 135)">
                <rect width="200" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="10" y="16" fontSize="8.5" fontWeight="bold" fill="#0f172a">Pola Rektangular (Patah Siku-Siku)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Daerah patahan sesar batuan keras (90°)</text>
                <path d="M 30 75 L 80 75 L 80 40 L 140 40 L 140 85 L 180 85" stroke="#0284c7" strokeWidth="2.2" fill="none" />
                <path d="M 80 55 L 110 55 L 110 70" stroke="#0284c7" strokeWidth="1.5" fill="none" />
                <path d="M 50 75 L 50 90 L 70 90" stroke="#0284c7" strokeWidth="1.5" fill="none" />
              </g>
            </svg>
          </div>
        );

      case 'satellite_landuse':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-slate-900 border border-slate-700">
              <rect width="460" height="250" fill="#0f172a" />
              
              {/* Simulated False-Color Multispectral Classification Map */}
              {/* 1. Agricultural Irrigated Ricefields (Light Green Geometrical Grid) */}
              <g transform="translate(20, 30)">
                <rect width="180" height="130" fill="#15803d" stroke="#22c55e" strokeWidth="1" rx="4" />
                {/* Farm plot lines */}
                <line x1="20" y1="0" x2="20" y2="130" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="60" y1="0" x2="60" y2="130" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="100" y1="0" x2="100" y2="130" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="140" y1="0" x2="140" y2="130" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="35" x2="180" y2="35" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="180" y2="70" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="105" x2="180" y2="105" stroke="#86efac" strokeWidth="0.8" strokeDasharray="3 3" />
                <text x="90" y="65" textAnchor="middle" fill="#f0fdf4" fontSize="8.5" fontWeight="bold">Sawah Irigasi Teknis (Pola Teratur)</text>
              </g>

              {/* 2. Planned Transmigration Housing Settlement (Linear along road) */}
              <g transform="translate(220, 30)">
                <rect width="220" height="130" fill="#334155" rx="4" />
                {/* Main asphalt road */}
                <line x1="0" y1="65" x2="220" y2="65" stroke="#f1f5f9" strokeWidth="4" />
                <line x1="0" y1="65" x2="220" y2="65" stroke="#eab308" strokeWidth="1" strokeDasharray="6 4" />
                {/* Houses arranged uniformly */}
                {[20, 50, 80, 110, 140, 170, 200].map((x, i) => (
                  <g key={i}>
                    <rect x={x - 8} y="38" width="16" height="16" fill="#ef4444" rx="1" />
                    <rect x={x - 8} y="78" width="16" height="16" fill="#ef4444" rx="1" />
                  </g>
                ))}
                <text x="110" y="24" textAnchor="middle" fill="#fecaca" fontSize="8" fontWeight="bold">
                  Unit Permukiman Transmigrasi (Linear Berjajar)
                </text>
              </g>

              {/* 3. Water body / River Reservoir */}
              <path d="M 0 180 Q 150 160, 240 190 T 460 210 L 460 250 L 0 250 Z" fill="#0284c7" />
              <text x="230" y="225" textAnchor="middle" fill="#e0f2fe" fontSize="9" fontWeight="bold">
                Saluran Irigasi Induk & Waduk Penampung Air
              </text>

              {/* Top Banner */}
              <rect x="0" y="0" width="460" height="22" fill="#1e293b" />
              <text x="15" y="15" fill="#94a3b8" fontSize="8" fontWeight="mono">
                CITRA SATELIT MULTISPEKTRAL: Analisis Tutupan Lahan Wilayah Transmigrasi
              </text>
            </svg>
          </div>
        );

      case 'spi_drought':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 230" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="230" fill="#ffffff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Peta Indeks Kekeringan Meteorologis (Standardized Precipitation Index - SPI) BMKG
              </text>

              {/* Island Regions Representation */}
              {/* Sumatra */}
              <g transform="translate(30, 40)">
                <path d="M 10 10 L 40 40 L 70 120 L 55 130 L 25 60 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
                <text x="20" y="70" fontSize="7.5" fontWeight="bold" fill="#0369a1">Sumatera</text>
                <text x="18" y="82" fontSize="6.5" fill="#0369a1">Basah (+1.2)</text>
              </g>

              {/* Jawa */}
              <g transform="translate(100, 150)">
                <path d="M 0 10 L 120 15 L 140 25 L 30 25 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
                <text x="60" y="20" fontSize="7.5" fontWeight="bold" fill="#854d0e">Jawa (Agak Kering, -0.8)</text>
              </g>

              {/* Kalimantan */}
              <g transform="translate(140, 50)">
                <path d="M 20 10 L 80 5 L 90 70 L 20 80 Z" fill="#4ade80" stroke="#16a34a" strokeWidth="1.2" />
                <text x="45" y="45" fontSize="7.5" fontWeight="bold" fill="#15803d">Kalimantan</text>
                <text x="40" y="56" fontSize="6.5" fill="#15803d">Normal (0.0)</text>
              </g>

              {/* Sulawesi */}
              <g transform="translate(250, 55)">
                <path d="M 20 0 L 35 15 L 20 40 L 40 60 L 30 75 L 15 50 Z" fill="#fb923c" stroke="#ea580c" strokeWidth="1.2" />
                <text x="45" y="40" fontSize="7.5" fontWeight="bold" fill="#c2410c">Sulawesi</text>
                <text x="45" y="50" fontSize="6.5" fill="#c2410c">Kering (-1.4)</text>
              </g>

              {/* Bali, NTB, NTT */}
              <g transform="translate(250, 160)">
                <path d="M 0 10 L 30 12 L 60 14 L 110 15 L 105 25 L 0 22 Z" fill="#ef4444" stroke="#dc2626" strokeWidth="1.2" />
                <text x="50" y="20" fontSize="7.5" fontWeight="bold" fill="#ffffff">Bali, NTB & NTT</text>
                <text x="40" y="32" fontSize="6.5" fontWeight="extrabold" fill="#b91c1c">Sangat Kering Ekstrem (-2.6)</text>
              </g>

              {/* SPI Legend Scale Bar */}
              <g transform="translate(60, 205)">
                <rect x="0" y="0" width="60" height="10" fill="#1d4ed8" />
                <rect x="60" y="0" width="60" height="10" fill="#38bdf8" />
                <rect x="120" y="0" width="60" height="10" fill="#4ade80" />
                <rect x="180" y="0" width="60" height="10" fill="#facc15" />
                <rect x="240" y="0" width="60" height="10" fill="#fb923c" />
                <rect x="300" y="0" width="50" height="10" fill="#ef4444" />
                <text x="0" y="-3" fontSize="6.5" fill="#475569">Sangat Basah (&gt;+2.0)</text>
                <text x="135" y="-3" fontSize="6.5" fill="#475569">Normal</text>
                <text x="270" y="-3" fontSize="6.5" fontWeight="bold" fill="#dc2626">Kekeringan Ekstrem (&lt;-2.0)</text>
              </g>
            </svg>
          </div>
        );

      case 'urban_zones':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="440" height="240" fill="#ffffff" />
              <text x="220" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Model Keruangan Teori Konsentris (Ernest Burgess)
              </text>

              {/* Concentric Circles */}
              <g transform="translate(170, 125)">
                {/* Zone 5: Commuter Zone */}
                <circle cx="0" cy="0" r="100" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
                {/* Zone 4: Better Residences */}
                <circle cx="0" cy="0" r="80" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="1" />
                {/* Zone 3: Workingmen's Homes */}
                <circle cx="0" cy="0" r="60" fill="#dcfce7" stroke="#4ade80" strokeWidth="1" />
                {/* Zone 2: Transition Zone */}
                <circle cx="0" cy="0" r="40" fill="#fef3c7" stroke="#facc15" strokeWidth="1" />
                {/* Zone 1: CBD (Central Business District) */}
                <circle cx="0" cy="0" r="20" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
                
                {/* Center label */}
                <text x="0" y="3" textAnchor="middle" fontSize="7.5" fontWeight="extrabold" fill="#991b1b">1: CBD</text>
              </g>

              {/* Legend on right */}
              <g transform="translate(290, 45)">
                <rect x="0" y="0" width="140" height="155" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="10" y="16" fontSize="8" fontWeight="bold" fill="#0f172a">Keterangan Zona:</text>
                
                <circle cx="15" cy="35" r="5" fill="#fee2e2" stroke="#ef4444" />
                <text x="25" y="38" fontSize="7" fill="#334155">1. Daerah Pusat Kegiatan (CBD)</text>

                <circle cx="15" cy="60" r="5" fill="#fef3c7" stroke="#facc15" />
                <text x="25" y="63" fontSize="7" fill="#334155">2. Zona Peralihan / Transisi</text>

                <circle cx="15" cy="85" r="5" fill="#dcfce7" stroke="#4ade80" />
                <text x="25" y="88" fontSize="7" fill="#334155">3. Permukiman Buruh / Pekerja</text>

                <circle cx="15" cy="110" r="5" fill="#e0f2fe" stroke="#38bdf8" />
                <text x="25" y="113" fontSize="7" fill="#334155">4. Permukiman Kelas Menengah</text>

                <circle cx="15" cy="135" r="5" fill="#f1f5f9" stroke="#94a3b8" />
                <text x="25" y="138" fontSize="7" fill="#334155">5. Zona Penglaju (Commuter)</text>
              </g>
            </svg>
          </div>
        );

      case 'soil_profile':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="440" height="240" fill="#ffffff" />
              <text x="220" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Profil Vertikal Horizon Tanah Lengkap (Pedosfer)
              </text>

              {/* Soil Layers */}
              <g transform="translate(40, 35)">
                {/* Horizon O: Organik */}
                <rect x="0" y="0" width="180" height="25" fill="#3f2e1e" />
                <text x="90" y="16" textAnchor="middle" fill="#fde68a" fontSize="8" fontWeight="bold">Horizon O (Lapisan Organik / Humus)</text>

                {/* Horizon A: Topsoil */}
                <rect x="0" y="25" width="180" height="40" fill="#714e30" />
                <text x="90" y="48" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">Horizon A (Topsoil / Zona Eluviasi)</text>

                {/* Horizon B: Subsoil */}
                <rect x="0" y="65" width="180" height="50" fill="#a16207" />
                <text x="90" y="93" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">Horizon B (Subsoil / Zona Iluviasi)</text>

                {/* Horizon C: Regolit */}
                <rect x="0" y="115" width="180" height="40" fill="#a8a29e" />
                <text x="90" y="138" textAnchor="middle" fill="#1c1917" fontSize="8" fontWeight="bold">Horizon C (Batuan Induk Lapuk)</text>

                {/* Horizon R: Bedrock */}
                <rect x="0" y="155" width="180" height="35" fill="#44403c" />
                <text x="90" y="175" textAnchor="middle" fill="#fafaf9" fontSize="8" fontWeight="bold">Horizon R (Batuan Dasar Keras / Bedrock)</text>
              </g>

              {/* Explanatory Annotations */}
              <g transform="translate(235, 35)">
                <rect x="0" y="0" width="170" height="190" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="10" y="18" fontSize="8.5" fontWeight="bold" fill="#0f172a">Karakteristik Kimia & Biologis:</text>
                
                <text x="10" y="38" fontSize="7" fontWeight="bold" fill="#3f2e1e">• Horizon O: Sisa daun & mikroba</text>
                <text x="10" y="50" fontSize="6.5" fill="#64748b">Kaya unsur hara, paling aktif biologi</text>

                <text x="10" y="70" fontSize="7" fontWeight="bold" fill="#714e30">• Horizon A: Pencucian (Eluviasi)</text>
                <text x="10" y="82" fontSize="6.5" fill="#64748b">Mineral larut terserap akar tanaman</text>

                <text x="10" y="105" fontSize="7" fontWeight="bold" fill="#a16207">• Horizon B: Pengendapan (Iluviasi)</text>
                <text x="10" y="117" fontSize="6.5" fill="#64748b">Akumulasi liat, besi, dan aluminium</text>

                <text x="10" y="140" fontSize="7" fontWeight="bold" fill="#57534e">• Horizon C & R: Regolit & Batuan Dasar</text>
                <text x="10" y="152" fontSize="6.5" fill="#64748b">Belum terlapuk sempurna oleh cuaca</text>
              </g>
            </svg>
          </div>
        );

      case 'gis_overlay':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="240" fill="#ffffff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Mekanisme Tumpang Susun (Overlay SIG) untuk Pemetaan Kerentanan Longsor
              </text>

              {/* 3 Input Layers */}
              {/* Layer 1: Slope */}
              <g transform="translate(30, 45)">
                <polygon points="10,0 120,0 110,40 0,40" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
                <text x="55" y="24" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#713f12">1. Peta Kemiringan Lereng</text>
              </g>

              {/* Layer 2: Soil */}
              <g transform="translate(30, 100)">
                <polygon points="10,0 120,0 110,40 0,40" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.2" />
                <text x="55" y="24" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#7c2d12">2. Peta Jenis & Tekstur Tanah</text>
              </g>

              {/* Layer 3: Rainfall */}
              <g transform="translate(30, 155)">
                <polygon points="10,0 120,0 110,40 0,40" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.2" />
                <text x="55" y="24" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#0369a1">3. Peta Intensitas Curah Hujan</text>
              </g>

              {/* Arrows pointing to Overlay Operator */}
              <path d="M 155 65 L 210 115" stroke="#475569" strokeWidth="1.8" strokeDasharray="3 2" />
              <path d="M 155 120 L 210 120" stroke="#475569" strokeWidth="1.8" strokeDasharray="3 2" />
              <path d="M 155 175 L 210 125" stroke="#475569" strokeWidth="1.8" strokeDasharray="3 2" />

              {/* Overlay Engine Node */}
              <g transform="translate(210, 100)">
                <rect width="60" height="40" rx="8" fill="#10b981" stroke="#047857" strokeWidth="1.5" />
                <text x="30" y="20" textAnchor="middle" fontSize="8" fontWeight="extrabold" fill="#ffffff">Operasi</text>
                <text x="30" y="30" textAnchor="middle" fontSize="8" fontWeight="extrabold" fill="#ffffff">Overlay</text>
              </g>

              <line x1="270" y1="120" x2="310" y2="120" stroke="#047857" strokeWidth="2.5" />
              <polygon points="310,116 320,120 310,124" fill="#047857" />

              {/* Output Map Result */}
              <g transform="translate(325, 75)">
                <rect width="115" height="90" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
                <text x="57" y="20" textAnchor="middle" fontSize="8" fontWeight="extrabold" fill="#991b1b">PETA HASIL (OUTPUT):</text>
                <text x="57" y="34" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#b91c1c">Zona Kerentanan</text>
                <text x="57" y="46" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#b91c1c">Bencana Longsor</text>
                
                {/* Mini Risk legend */}
                <rect x="15" y="58" width="12" height="7" fill="#ef4444" />
                <text x="32" y="64" fontSize="6.5" fill="#7f1d1d">Sangat Rawan</text>
                <rect x="15" y="70" width="12" height="7" fill="#22c55e" />
                <text x="32" y="76" fontSize="6.5" fill="#14532d">Aman/Rendah</text>
              </g>
            </svg>
          </div>
        );

      case 'energy_chart':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 440 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="440" height="240" fill="#ffffff" />
              <text x="220" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Target Bauran Energi Nasional (EBT Menuju Net Zero Emission 2060)
              </text>

              {/* Bar comparison */}
              {[
                { name: 'Batu Bara (Fosil)', pct: 61, color: '#475569' },
                { name: 'Minyak Bumi', pct: 16, color: '#d97706' },
                { name: 'Gas Bumi', pct: 10, color: '#0284c7' },
                { name: 'Tenaga Surya & Angin (PLTS/PLTB)', pct: 5, color: '#eab308' },
                { name: 'Panas Bumi (Geotermal)', pct: 4, color: '#dc2626' },
                { name: 'Tenaga Air (PLTA/Mikrohidro)', pct: 4, color: '#10b981' },
              ].map((item, idx) => {
                const y = 35 + idx * 32;
                const barWidth = (item.pct / 70) * 250;
                return (
                  <g key={idx}>
                    <text x="15" y={y + 11} fontSize="7.5" fontWeight="bold" fill="#1e293b">
                      {item.name}
                    </text>
                    <rect 
                      x="145" 
                      y={y} 
                      width={barWidth} 
                      height="15" 
                      fill={item.color} 
                      rx="3" 
                    />
                    <text x={155 + barWidth} y={y + 12} fontSize="7.5" fontWeight="extrabold" fill={item.color}>
                      {item.pct}%
                    </text>
                  </g>
                );
              })}

              <rect x="15" y="215" width="410" height="18" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.8" />
              <text x="220" y="227" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#166534">
                Indonesia berkomitmen menaikkan porsi EBT menjadi &gt;23% melalui PLTS terapung & PLTP
              </text>
            </svg>
          </div>
        );

      case 'volcano_cross_section':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 260" className="w-full max-w-lg h-auto select-none rounded-xl bg-slate-900 border border-slate-700">
              <defs>
                <linearGradient id="magmaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
              <rect width="460" height="260" fill="#0f172a" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#f8fafc">
                Penampang Struktur Vulkanisme Gunung Api Strato & Intrusi Magma
              </text>

              {/* Volcano Cone Layers */}
              <polygon points="50,220 230,60 410,220" fill="#334155" stroke="#475569" strokeWidth="1.5" />
              <polygon points="110,220 230,80 350,220" fill="#475569" stroke="#64748b" strokeWidth="1.2" />

              {/* Main Vent / Pipa Kawah */}
              <rect x="224" y="60" width="12" height="150" fill="url(#magmaGrad)" />

              {/* Parasitic Cone / Kawah Samping */}
              <path d="M 230 140 L 320 120 L 340 140" stroke="#f97316" strokeWidth="5" fill="none" />
              <polygon points="310,140 330,120 350,140" fill="#ef4444" />
              <text x="355" y="125" fontSize="7.5" fontWeight="bold" fill="#fca5a5">Kawah Parasit</text>

              {/* Main Crater / Kawah Utama Erupsi */}
              <polygon points="215,60 230,75 245,60" fill="#0f172a" />
              <ellipse cx="230" cy="45" rx="25" ry="12" fill="#ef4444" opacity="0.8" />
              <circle cx="230" cy="30" r="14" fill="#cbd5e1" opacity="0.5" />
              <circle cx="238" cy="22" r="18" fill="#94a3b8" opacity="0.4" />
              <text x="230" y="14" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#fef08a">Awan Panas Piroklastik</text>

              {/* Intrusi: Sill (mendatar) */}
              <rect x="90" y="160" width="134" height="8" fill="url(#magmaGrad)" rx="2" />
              <text x="140" y="155" fontSize="7" fontWeight="bold" fill="#fed7aa">Sill (Intrusi Mendatar)</text>

              {/* Intrusi: Lakolit (cembung atas) */}
              <path d="M 236 185 Q 290 160 340 185 Z" fill="url(#magmaGrad)" />
              <text x="290" y="177" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fed7aa">Lakolit (Kubah)</text>

              {/* Intrusi: Dike / Gang (tegak memotong) */}
              <path d="M 120 215 L 145 168" stroke="#f97316" strokeWidth="7" strokeLinecap="round" />
              <text x="90" y="200" fontSize="7" fontWeight="bold" fill="#fed7aa">Dike (Retas Tegak)</text>

              {/* Batholith / Dapur Magma Raksasa */}
              <ellipse cx="230" cy="245" rx="140" ry="30" fill="url(#magmaGrad)" />
              <text x="230" y="248" textAnchor="middle" fontSize="9" fontWeight="extrabold" fill="#ffffff">
                Batolit (Dapur Magma Utama di Kerak Bumi)
              </text>
            </svg>
          </div>
        );

      case 'ocean_currents_wind':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="250" fill="#ffffff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Dinamika Angin Muson Barat (Musim Hujan) Melintasi Kepulauan Indonesia
              </text>

              {/* Equator Line */}
              <line x1="20" y1="125" x2="440" y2="125" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" />
              <text x="435" y="122" textAnchor="end" fontSize="7" fontWeight="bold" fill="#ef4444">Khatulistiwa (0°)</text>

              {/* Asia Continent (Top-Left) */}
              <path d="M 20 30 L 140 30 L 160 70 L 40 85 Z" fill="#cbd5e1" stroke="#94a3b8" />
              <text x="75" y="55" fontSize="8" fontWeight="bold" fill="#334155">Benua Asia (Maksimum Tekanan)</text>

              {/* Australia Continent (Bottom-Right) */}
              <path d="M 310 180 L 430 180 L 420 240 L 320 235 Z" fill="#fed7aa" stroke="#fb923c" />
              <text x="365" y="210" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#9a3412">Benua Australia (Minimum)</text>

              {/* Indonesian Archipelagic islands silhouettes */}
              {/* Sumatra */}
              <path d="M 60 95 L 110 135 L 95 155 L 50 110 Z" fill="#86efac" stroke="#16a34a" />
              <text x="80" y="120" fontSize="7" fontWeight="bold" fill="#15803d">Sumatra</text>
              {/* Jawa */}
              <path d="M 120 160 L 220 165 L 215 178 L 125 175 Z" fill="#86efac" stroke="#16a34a" />
              <text x="165" y="172" fontSize="7" fontWeight="bold" fill="#15803d">Jawa</text>
              {/* Kalimantan */}
              <path d="M 140 90 L 210 85 L 220 135 L 145 130 Z" fill="#86efac" stroke="#16a34a" />
              <text x="175" y="112" fontSize="7" fontWeight="bold" fill="#15803d">Kalimantan</text>
              {/* Sulawesi */}
              <path d="M 240 95 L 265 110 L 250 145 L 235 120 Z" fill="#86efac" stroke="#16a34a" />
              <text x="255" y="125" fontSize="7" fontWeight="bold" fill="#15803d">Sulawesi</text>
              {/* Papua */}
              <path d="M 330 125 L 420 120 L 415 150 L 340 145 Z" fill="#86efac" stroke="#16a34a" />
              <text x="375" y="137" fontSize="7" fontWeight="bold" fill="#15803d">Papua</text>

              {/* Wind Arrows: Angin Muson Barat dari Asia berbelok ke kanan di utara, belok ke kiri di selatan (Hukum Buys Ballot) */}
              <g stroke="#0284c7" strokeWidth="2.5" fill="none">
                <path d="M 90 40 Q 110 80, 100 115" />
                <path d="M 130 50 Q 160 90, 150 140" />
                <path d="M 190 60 Q 230 110, 260 170" />
                <path d="M 230 135 Q 280 160, 340 190" />
              </g>
              <polygon points="96,118 106,112 103,122" fill="#0284c7" />
              <polygon points="146,143 156,137 153,147" fill="#0284c7" />
              <polygon points="263,173 257,163 268,166" fill="#0284c7" />
              <polygon points="345,193 335,188 340,198" fill="#0284c7" />

              {/* Explanatory Box */}
              <rect x="20" y="195" width="220" height="45" rx="6" fill="#f0fdf4" stroke="#86efac" />
              <text x="30" y="210" fontSize="7.5" fontWeight="bold" fill="#166534">Muson Barat (Oktober - April):</text>
              <text x="30" y="222" fontSize="6.5" fill="#14532d">Angin melewati Samudra Pasifik basah membawa banyak uap air,</text>
              <text x="30" y="232" fontSize="6.5" fill="#14532d">menyebabkan musim hujan lebat merata di seluruh Indonesia.</text>
            </svg>
          </div>
        );

      case 'karst_topography':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="250" fill="#f8fafc" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Penampang Bentang Alam Karst (Pelarutan Kapur / Karsifikasi)
              </text>

              {/* Limestone Bedrock Block */}
              <rect x="20" y="80" width="420" height="150" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />

              {/* Surface Hills and Sinkholes (Dolina / Uvala) */}
              <path 
                d="M 20 80 Q 60 40 90 80 Q 110 110 130 80 Q 170 35 210 80 Q 235 125 260 80 Q 300 40 340 80 Q 370 115 400 80 L 440 80 L 440 230 L 20 230 Z" 
                fill="#cbd5e1" 
                stroke="#64748b" 
                strokeWidth="1.5" 
              />

              {/* Conical Hills label */}
              <text x="60" y="42" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#334155">Bukit Kerucut (Conical)</text>
              <text x="170" y="37" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#334155">Mogote / Kegelkarst</text>

              {/* Sinkhole / Dolina (Lembah Depresi) */}
              <ellipse cx="110" cy="95" rx="15" ry="6" fill="#64748b" />
              <text x="110" y="90" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0f172a">Dolina (Sinkhole)</text>

              {/* Ponor / Luweng (Lubang Masuk Air ke Bawah Tanah) */}
              <path d="M 235 105 L 235 150" stroke="#0284c7" strokeWidth="4" />
              <text x="248" y="115" fontSize="7" fontWeight="bold" fill="#0369a1">Ponor (Luweng)</text>

              {/* Underground Cave (Gua Karst) */}
              <ellipse cx="280" cy="170" rx="60" ry="25" fill="#475569" />
              <text x="280" y="165" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#f8fafc">Gua Kapur Bawah Tanah</text>

              {/* Stalactite (menjalar turun dari atap gua) */}
              <polygon points="260,145 265,160 270,145" fill="#e2e8f0" />
              <polygon points="280,145 284,163 288,145" fill="#e2e8f0" />
              <text x="270" y="140" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#facc15">Stalaktit (Atas)</text>

              {/* Stalagmite (menumpuk naik dari dasar gua) */}
              <polygon points="280,195 284,178 288,195" fill="#e2e8f0" />
              <text x="284" y="206" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#facc15">Stalagmit (Bawah)</text>

              {/* Subterranean River (Sungai Bawah Tanah) */}
              <path d="M 220 185 Q 280 180 340 190 Q 400 195 440 185" stroke="#38bdf8" strokeWidth="4" fill="none" />
              <text x="350" y="202" fontSize="7.5" fontWeight="bold" fill="#0284c7">Sungai Bawah Tanah</text>
            </svg>
          </div>
        );

      case 'central_place_hex':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="250" fill="#ffffff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Hierarki Tempat Sentral Heksagonal Walter Christaller (Kasus Pasar K=3)
              </text>

              {/* Central Hexagon */}
              <g transform="translate(190, 125)">
                {/* Center Core City */}
                <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                <circle cx="0" cy="0" r="8" fill="#dc2626" />
                <text x="0" y="3" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">A</text>
                <text x="0" y="18" textAnchor="middle" fontSize="7.5" fontWeight="extrabold" fill="#991b1b">Pusat Sentral Orde 1</text>

                {/* 6 Peripheral Hexagon Centers at vertices */}
                {[
                  { x: 0, y: -60, label: 'B1' },
                  { x: 52, y: -30, label: 'B2' },
                  { x: 52, y: 30,  label: 'B3' },
                  { x: 0, y: 60,   label: 'B4' },
                  { x: -52, y: 30, label: 'B5' },
                  { x: -52, y: -30,label: 'B6' },
                ].map((pt, idx) => (
                  <g key={idx}>
                    <line x1="0" y1="0" x2={pt.x} y2={pt.y} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#2563eb" />
                    <text x={pt.x} y={pt.y + 2.5} textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#ffffff">
                      {pt.label}
                    </text>
                  </g>
                ))}
              </g>

              {/* Explanatory Formula on Right */}
              <g transform="translate(310, 45)">
                <rect width="135" height="160" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <text x="12" y="20" fontSize="8" fontWeight="bold" fill="#0f172a">Asas Teori K=3:</text>
                
                <text x="12" y="40" fontSize="7" fontWeight="bold" fill="#b45309">Prinsip Pasar Optimum</text>
                <text x="12" y="55" fontSize="6.5" fill="#475569">Setiap tempat sentral</text>
                <text x="12" y="65" fontSize="6.5" fill="#475569">melayani 1/3 bagian dari</text>
                <text x="12" y="75" fontSize="6.5" fill="#475569">6 wilayah di sekitarnya:</text>
                
                <rect x="12" y="85" width="110" height="24" rx="4" fill="#fee2e2" />
                <text x="67" y="100" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#991b1b">
                  K = 1 + 6(1/3) = 3
                </text>

                <text x="12" y="125" fontSize="6.5" fill="#334155">• K=4: Lalu Lintas Optimum</text>
                <text x="12" y="137" fontSize="6.5" fill="#334155">• K=7: Administrasi Optimum</text>
              </g>
            </svg>
          </div>
        );

      case 'delta_types':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="240" fill="#ffffff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Tipe Morfologi Delta Sungai Berdasarkan Pengaruh Gelombang & Sedimen
              </text>

              {/* 1. Delta Kaki Burung / Digitate (Birdfoot) */}
              <g transform="translate(15, 35)">
                <rect width="205" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                <text x="10" y="16" fontSize="8" fontWeight="bold" fill="#0f172a">1. Delta Kaki Burung (Birdfoot)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Pasokan sedimen sungai mendominasi (Cth: Mississippi)</text>
                <path d="M 10 55 L 70 55" stroke="#0284c7" strokeWidth="3" />
                {/* Branches spreading into sea */}
                <path d="M 70 55 L 140 40 L 190 35" stroke="#0284c7" strokeWidth="2" />
                <path d="M 70 55 L 150 55 L 195 55" stroke="#0284c7" strokeWidth="2.5" />
                <path d="M 70 55 L 135 70 L 185 80" stroke="#0284c7" strokeWidth="2" />
                <polygon points="135,35 155,42 140,48" fill="#86efac" />
                <polygon points="145,50 170,55 150,62" fill="#86efac" />
                <polygon points="130,68 150,73 135,80" fill="#86efac" />
              </g>

              {/* 2. Delta Busur / Melengkung (Arcuate) */}
              <g transform="translate(240, 35)">
                <rect width="205" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                <text x="10" y="16" fontSize="8" fontWeight="bold" fill="#0f172a">2. Delta Busur (Arcuate)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Seimbang antara sedimen dan gelombang laut (Cth: Sungai Nil)</text>
                <path d="M 10 55 L 70 55" stroke="#0284c7" strokeWidth="3" />
                <path d="M 70 55 Q 120 25 180 30 L 180 80 Q 120 85 70 55 Z" fill="#86efac" stroke="#16a34a" />
                <path d="M 70 55 L 130 40 L 180 35" stroke="#0284c7" strokeWidth="1.5" />
                <path d="M 70 55 L 140 55 L 185 55" stroke="#0284c7" strokeWidth="1.5" />
                <path d="M 70 55 L 130 70 L 180 75" stroke="#0284c7" strokeWidth="1.5" />
              </g>

              {/* 3. Delta Runcing (Cuspate) */}
              <g transform="translate(15, 135)">
                <rect width="205" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                <text x="10" y="16" fontSize="8" fontWeight="bold" fill="#0f172a">3. Delta Runcing (Cuspate)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Arus gelombang laut kuat membentuk gigi runcing (Cth: Sungai Tiber)</text>
                <path d="M 10 60 L 90 60" stroke="#0284c7" strokeWidth="3" />
                <polygon points="90,40 180,60 90,80" fill="#86efac" stroke="#16a34a" />
                <line x1="90" y1="60" x2="180" y2="60" stroke="#0284c7" strokeWidth="2" />
              </g>

              {/* 4. Delta Estuaria (Corong) */}
              <g transform="translate(240, 135)">
                <rect width="205" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                <text x="10" y="16" fontSize="8" fontWeight="bold" fill="#0f172a">4. Delta Estuaria (Corong Pasang)</text>
                <text x="10" y="27" fontSize="6.5" fill="#64748b">Pasang surut kuat mengikis muara melebar (Cth: Sungai Ob / Amazon)</text>
                <path d="M 10 60 L 60 60" stroke="#0284c7" strokeWidth="3" />
                <path d="M 60 60 Q 110 30 190 20 L 190 100 Q 110 90 60 60 Z" fill="#bae6fd" stroke="#0284c7" />
                <text x="130" y="63" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0369a1">Muara Melebar</text>
              </g>
            </svg>
          </div>
        );

      case 'water_cycle':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 250" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="250" fill="#f0f9ff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Siklus Hidrologi Lengkap (Evaporasi, Transpirasi, Adveksi, Presipitasi, Infiltrasi)
              </text>

              {/* Sun */}
              <circle cx="50" cy="50" r="16" fill="#facc15" />
              <line x1="50" y1="28" x2="50" y2="20" stroke="#facc15" strokeWidth="2" />
              <line x1="50" y1="72" x2="50" y2="80" stroke="#facc15" strokeWidth="2" />
              <line x1="28" y1="50" x2="20" y2="50" stroke="#facc15" strokeWidth="2" />
              <line x1="72" y1="50" x2="80" y2="50" stroke="#facc15" strokeWidth="2" />

              {/* Ocean Water on Left */}
              <path d="M 0 170 L 140 170 L 120 250 L 0 250 Z" fill="#0284c7" />
              <text x="55" y="215" fill="#e0f2fe" fontSize="8" fontWeight="bold">Samudra (Laut)</text>

              {/* Mountains & Land on Right */}
              <polygon points="120,250 140,170 230,150 340,70 460,200 460,250" fill="#15803d" />
              <polygon points="310,95 340,70 380,110" fill="#f8fafc" />
              <text x="340" y="65" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#0f172a">Pegunungan Tinggi</text>

              {/* Evaporation Wavy Arrows */}
              <path d="M 50 160 Q 45 130 55 105" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="3 2" />
              <path d="M 80 160 Q 75 130 85 105" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="3 2" />
              <text x="65" y="135" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0369a1">Evaporasi</text>

              {/* Transpiration from forest */}
              <path d="M 230 145 Q 225 125 235 105" stroke="#22c55e" strokeWidth="1.8" fill="none" strokeDasharray="3 2" />
              <text x="235" y="125" fontSize="7" fontWeight="bold" fill="#15803d">Transpirasi</text>

              {/* Cloud & Condensation */}
              <ellipse cx="160" cy="80" rx="30" ry="14" fill="#cbd5e1" />
              <ellipse cx="180" cy="72" rx="24" ry="16" fill="#cbd5e1" />
              <text x="170" y="77" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#334155">Kondensasi</text>

              {/* Advection wind arrow */}
              <line x1="210" y1="75" x2="270" y2="75" stroke="#475569" strokeWidth="2.5" />
              <polygon points="270,71 278,75 270,79" fill="#475569" />
              <text x="245" y="68" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#475569">Adveksi Angin</text>

              {/* Rainfall / Precipitation over mountain */}
              <ellipse cx="320" cy="85" rx="35" ry="16" fill="#64748b" />
              <line x1="310" y1="105" x2="305" y2="135" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="325" y1="105" x2="320" y2="135" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />
              <line x1="340" y1="105" x2="335" y2="135" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="350" y="125" fontSize="7.5" fontWeight="bold" fill="#0369a1">Presipitasi (Hujan)</text>

              {/* Surface Runoff River */}
              <path d="M 330 140 Q 250 170 140 175" stroke="#0284c7" strokeWidth="3" fill="none" />
              <text x="250" y="168" fontSize="7" fontWeight="bold" fill="#0284c7">Limpasan Permukaan (Run-off)</text>

              {/* Infiltration into ground */}
              <line x1="280" y1="175" x2="280" y2="215" stroke="#a16207" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="277,215 280,222 283,215" fill="#a16207" />
              <text x="290" y="200" fontSize="7" fontWeight="bold" fill="#78350f">Infiltrasi & Perkolasi</text>
            </svg>
          </div>
        );

      case 'mangrove_zonation':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 240" className="w-full max-w-lg h-auto select-none rounded-xl bg-white border border-slate-200">
              <rect width="460" height="240" fill="#ffffff" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
                Zonasi Ekosistem Mangrove dari Tepi Laut Menuju Daratan Pedalaman
              </text>

              {/* Sea Water Gradient */}
              <rect x="0" y="70" width="110" height="140" fill="#bae6fd" />
              <text x="50" y="120" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0369a1">Laut Terbuka</text>
              <text x="50" y="132" textAnchor="middle" fontSize="6.5" fill="#0369a1">(Salinitas Tinggi)</text>

              {/* High / Low tide lines */}
              <line x1="0" y1="100" x2="460" y2="100" stroke="#0284c7" strokeWidth="1" strokeDasharray="4 2" />
              <text x="450" y="96" textAnchor="end" fontSize="6" fill="#0284c7">Pasang Tertinggi</text>

              {/* Coastal slope ground */}
              <path d="M 0 170 Q 150 170 460 130 L 460 210 L 0 210 Z" fill="#78716c" />

              {/* Zone 1: Avicennia & Sonneratia (Paling Depan) */}
              <g transform="translate(120, 105)">
                <ellipse cx="20" cy="30" rx="18" ry="14" fill="#22c55e" />
                <line x1="20" y1="44" x2="20" y2="60" stroke="#713f12" strokeWidth="3" />
                {/* Pencil roots / akar napas pneumatofor */}
                <line x1="8" y1="60" x2="8" y2="50" stroke="#a16207" strokeWidth="1.5" />
                <line x1="14" y1="60" x2="14" y2="48" stroke="#a16207" strokeWidth="1.5" />
                <line x1="26" y1="60" x2="26" y2="49" stroke="#a16207" strokeWidth="1.5" />
                <line x1="32" y1="60" x2="32" y2="52" stroke="#a16207" strokeWidth="1.5" />
                <text x="20" y="73" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#14532d">Zona 1: Avicennia</text>
                <text x="20" y="81" textAnchor="middle" fontSize="6" fill="#475569">(Api-api / Akar Napas)</text>
              </g>

              {/* Zone 2: Rhizophora (Tengah - Akar Tunjang) */}
              <g transform="translate(210, 95)">
                <ellipse cx="25" cy="25" rx="22" ry="16" fill="#16a34a" />
                <line x1="25" y1="41" x2="25" y2="60" stroke="#713f12" strokeWidth="3" />
                {/* Stilt roots / akar tunjang melengkung */}
                <path d="M 25 45 Q 10 55 5 65" stroke="#713f12" strokeWidth="2" fill="none" />
                <path d="M 25 45 Q 40 55 45 65" stroke="#713f12" strokeWidth="2" fill="none" />
                <text x="25" y="77" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#14532d">Zona 2: Rhizophora</text>
                <text x="25" y="85" textAnchor="middle" fontSize="6" fill="#475569">(Bakau / Akar Tunjang)</text>
              </g>

              {/* Zone 3: Bruguiera (Belakang) */}
              <g transform="translate(305, 85)">
                <ellipse cx="25" cy="22" rx="20" ry="16" fill="#15803d" />
                <line x1="25" y1="38" x2="25" y2="60" stroke="#713f12" strokeWidth="3.5" />
                {/* Knee roots / akar lutut */}
                <path d="M 12 60 L 16 52 L 20 60" stroke="#713f12" strokeWidth="2" fill="none" />
                <text x="25" y="75" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#14532d">Zona 3: Bruguiera</text>
                <text x="25" y="83" textAnchor="middle" fontSize="6" fill="#475569">(Lindur / Akar Lutut)</text>
              </g>

              {/* Zone 4: Nypa / Palem (Paling Dalam / Muara Air Tawar) */}
              <g transform="translate(390, 75)">
                <path d="M 10 55 L 25 20 L 40 55" stroke="#16a34a" strokeWidth="3" fill="none" />
                <path d="M 5 55 L 25 15 L 45 55" stroke="#15803d" strokeWidth="2.5" fill="none" />
                <text x="25" y="70" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#14532d">Zona 4: Nypa</text>
                <text x="25" y="78" textAnchor="middle" fontSize="6" fill="#475569">(Nipah / Dekat Darat)</text>
              </g>

              {/* Direction Indicator */}
              <g transform="translate(80, 225)">
                <line x1="0" y1="0" x2="300" y2="0" stroke="#0f172a" strokeWidth="1.5" />
                <polygon points="300,-3 308,0 300,3" fill="#0f172a" />
                <text x="150" y="-4" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0f172a">
                  Arah Menuju Daratan Pedalaman (Kadar Garam Menurun) ►
                </text>
              </g>
            </svg>
          </div>
        );

      case 'atmospheric_layers':
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 460 260" className="w-full max-w-lg h-auto select-none rounded-xl bg-slate-900 border border-slate-700">
              <rect width="460" height="260" fill="#0f172a" />
              <text x="230" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#f8fafc">
                Struktur Lapisan Atmosfer Bumi & Dinamika Profil Suhu
              </text>

              {/* Earth Surface */}
              <rect x="50" y="235" width="370" height="15" fill="#15803d" />
              <text x="235" y="246" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#f0fdf4">Permukaan Bumi (0 km)</text>

              {/* Altitude scale on left */}
              <line x1="50" y1="30" x2="50" y2="235" stroke="#64748b" strokeWidth="1.5" />
              <text x="45" y="233" textAnchor="end" fontSize="7" fill="#94a3b8">0 km</text>
              <text x="45" y="195" textAnchor="end" fontSize="7" fill="#94a3b8">12 km</text>
              <text x="45" y="145" textAnchor="end" fontSize="7" fill="#94a3b8">50 km</text>
              <text x="45" y="95" textAnchor="end" fontSize="7" fill="#94a3b8">85 km</text>
              <text x="45" y="45" textAnchor="end" fontSize="7" fill="#94a3b8">500 km</text>

              {/* Boundary Dash lines */}
              <line x1="50" y1="195" x2="420" y2="195" stroke="#334155" strokeDasharray="3 3" />
              <line x1="50" y1="145" x2="420" y2="145" stroke="#334155" strokeDasharray="3 3" />
              <line x1="50" y1="95" x2="420" y2="95" stroke="#334155" strokeDasharray="3 3" />
              <line x1="50" y1="45" x2="420" y2="45" stroke="#334155" strokeDasharray="3 3" />

              {/* Layer 1: Troposfer */}
              <text x="130" y="215" fontSize="8" fontWeight="bold" fill="#38bdf8">1. Troposfer (0 - 12 km)</text>
              <text x="130" y="225" fontSize="6.5" fill="#94a3b8">Tempat fenomena cuaca (awan, hujan, petir)</text>

              {/* Layer 2: Stratosfer with Ozone */}
              <text x="130" y="165" fontSize="8" fontWeight="bold" fill="#a78bfa">2. Stratosfer (12 - 50 km)</text>
              <rect x="260" y="155" width="130" height="18" rx="4" fill="#7c3aed" opacity="0.4" />
              <text x="325" y="167" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ddd6fe">Lapisan Ozon (O3) - Serap UV</text>

              {/* Layer 3: Mesosfer */}
              <text x="130" y="115" fontSize="8" fontWeight="bold" fill="#f43f5e">3. Mesosfer (50 - 85 km)</text>
              <text x="130" y="125" fontSize="6.5" fill="#94a3b8">Suhu terdingin (-90°C), membakar meteor</text>
              {/* Burning meteor illustration */}
              <circle cx="340" cy="115" r="3" fill="#facc15" />
              <line x1="340" y1="115" x2="365" y2="105" stroke="#f97316" strokeWidth="2" />

              {/* Layer 4: Termosfer / Ionosfer */}
              <text x="130" y="65" fontSize="8" fontWeight="bold" fill="#fbbf24">4. Termosfer / Ionosfer (85 - 500 km)</text>
              <text x="130" y="75" fontSize="6.5" fill="#94a3b8">Memantulkan gelombang radio & aurora</text>

              {/* Temperature Curve */}
              <path 
                d="M 280 235 L 200 195 L 260 145 L 180 95 L 380 45" 
                stroke="#ef4444" 
                strokeWidth="2.5" 
                fill="none" 
              />
              <text x="385" y="45" fontSize="7" fontWeight="bold" fill="#ef4444">Kurva Suhu</text>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs my-3">
      {/* Header Bar */}
      <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
            <Compass className="w-3.5 h-3.5" />
          </span>
          <div>
            <h4 className="text-xs font-bold text-slate-800 leading-none">
              {visual.title}
            </h4>
            {visual.caption && (
              <span className="text-[11px] text-slate-500">{visual.caption}</span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-slate-200/60 transition"
          title="Perbesar Tampilan Stimulus"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Visual Canvas Area */}
      <div className="p-3 sm:p-4 bg-slate-50/50 flex justify-center">
        {renderContent()}
      </div>

      {/* Modal Fullscreen Zoom if clicked */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-700" />
                <h3 className="font-extrabold text-slate-900 text-base">{visual.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="max-h-[75vh] overflow-auto flex justify-center p-2">
              {renderContent()}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs transition"
              >
                Tutup Tampilan Penuh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
