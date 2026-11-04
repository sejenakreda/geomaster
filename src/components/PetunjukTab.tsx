import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  Calculator, 
  Award, 
  Smartphone, 
  Check, 
  Lightbulb,
  Clock,
  Target,
  FileText,
  BookmarkCheck,
  Brain
} from 'lucide-react';

export const PetunjukTab: React.FC = () => {
  const [selectedGlossary, setSelectedGlossary] = useState<string | null>(null);

  const glossaryItems = [
    {
      term: "Objek Material Geosfer",
      definition: "5 lapisan fisik & hayati bumi yang dipelajari geografi: Litosfer (batuan), Atmosfer (udara), Hidrosfer (air), Biosfer (flora-fauna), dan Antroposfer (manusia)."
    },
    {
      term: "Prinsip Korologi",
      definition: "Prinsip paling komprehensif dalam geografi yang memadukan prinsip persebaran, interelasi sebab-akibat, dan deskripsi dalam satu ruang tertentu."
    },
    {
      term: "Garis Wallace & Weber",
      definition: "Garis Wallace memisahkan fauna Asiatis (barat) dengan wilayah Wallacea; Garis Weber memisahkan Wallacea dengan fauna Australis (timur)."
    },
    {
      term: "Teori Tempat Sentral (Christaller)",
      definition: "Model tata ruang heksagonal: K=3 (asas pasar optimum), K=4 (asas transportasi/lalu lintas optimum), dan K=7 (asas administrasi pemerintahan)."
    },
    {
      term: "Teori Titik Henti (Carrothers)",
      definition: "Rumus penentuan lokasi ideal fasilitas umum di antara 2 kota: D = d / (1 + √(P_besar / P_kecil)), di mana hasil jarak selalu diukur dari kota berpenduduk lebih kecil."
    },
    {
      term: "Interval Kontur (CI)",
      definition: "Beda tinggi antar garis kontur pada peta topografi Indonesia: CI = 1/2000 × Penyebut Skala. Semakin rapat kontur, semakin terjal lerengnya."
    },
    {
      term: "Upwelling",
      definition: "Gerakan naiknya massa air laut dingin dari dasar ke permukaan yang membawa zat hara dan plankton, menciptakan daerah penangkapan ikan yang melimpah."
    },
    {
      term: "AMDAL",
      definition: "Analisis Mengenai Dampak Lingkungan: kajian ilmiah kelayakan lingkungan hidup yang wajib dipenuhi sebelum izin proyek industri/pembangunan disahkan."
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>Panduan Belajar Siswa</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Panduan Belajar & Strategi Sukses Ujian Geografi
        </h2>
        <p className="text-slate-600 text-sm max-w-3xl">
          Panduan belajar mandiri yang efektif, strategi menaklukkan 100 butir soal seleksi, trik mengingat rumus matematis, serta glosarium konsep kunci Geografi SMA Kurikulum Merdeka.
        </p>
      </div>

      {/* 4 Steps User Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-extrabold text-base">
            1
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg">Pelajari Konsep Bertahap per Bab</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pilih menu <strong>Materi Lengkap X-XII</strong>, gunakan pencarian cepat untuk konsep yang belum dipahami. Dengarkan rangkuman audio atau tonton video pembelajaran YouTube pendukung, lalu tandai bab yang telah selesai dipelajari.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-extrabold text-base">
            2
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg">Pahami Langkah Matematis Skala Peta</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Gunakan <strong>Kalkulator & Rumus Skala</strong> untuk menguji pemahaman konversi cm ke km, interval kontur (CI), hukum gravitasi Reilly, serta titik henti. Perhatikan jabaran langkah demi langkah yang disajikan agar tidak keliru saat ujian.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-extrabold text-base">
            3
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg">Uji Kemampuan di Bank 100 Soal</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Masuk ke menu <strong>Bank 100 Soal</strong>. Mulailah dari latihan per kelas atau latihan cepat 10 soal, kemudian tantang diri Anda dengan paket 50 soal atau marathon 100 soal lengkap dengan timer.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-extrabold text-base">
            4
          </div>
          <h3 className="font-extrabold text-slate-900 text-lg">Evaluasi & Bedah Kunci Pembahasan</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Setelah menyelesaikan simulasi ujian, telaah lembar evaluasi. Manfaatkan filter ulasan untuk fokus membaca pembahasan pada nomor-nomor soal yang masih salah agar pemahaman Anda semakin matang.
          </p>
        </div>
      </div>

      {/* Strategi Manajemen Waktu Mengerjakan 100 Soal */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wide">
          <Clock className="w-4 h-4" />
          <span>Strategi Ujian Akademik</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Strategi Manajemen Waktu Mengerjakan Soal Seleksi
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
            <span className="font-bold text-emerald-900 text-sm block">1. Kerjakan Soal Mudah Dahulu</span>
            <p className="text-slate-600 leading-relaxed">
              Jawab butir soal teori dan definisi konsep terlebih dahulu (kurang dari 30 detik per soal) untuk mengamankan poin dan menghemat waktu.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-2">
            <span className="font-bold text-teal-900 text-sm block">2. Manfaatkan Tombol Ragu-ragu</span>
            <p className="text-slate-600 leading-relaxed">
              Jika menemukan soal analisis grafik yang rumit atau perhitungan titik henti, tandai dengan tombol <strong>Ragu-ragu</strong> dan lewati sementara.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50/70 border border-cyan-100 space-y-2">
            <span className="font-bold text-cyan-900 text-sm block">3. Gunakan Peta Soal Navigasi</span>
            <p className="text-slate-600 leading-relaxed">
              Buka menu <strong>Peta Soal</strong> untuk melihat nomor-nomor yang masih berwarna abu-abu (belum dijawab) atau kuning (ragu-ragu) dengan cepat.
            </p>
          </div>
        </div>
      </div>

      {/* Geografi Tips and Tricks: Rumus Skala & Titik Henti */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wide">
          <Lightbulb className="w-4 h-4" />
          <span>Trik Rumus Matematis</span>
        </div>
        <h3 className="text-xl font-extrabold text-slate-900">
          Trik Menghafal Rumus Skala & Titik Henti Tanpa Khawatir Lupa
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 block text-sm">Segitiga Rumus Skala Peta:</strong>
            <p className="text-slate-600">Bayangkan piramida dengan <strong>JP</strong> (Jarak Peta) di puncak, serta <strong>S</strong> (Skala) dan <strong>JS</strong> (Jarak Sebenarnya) di bawah:</p>
            <div className="font-mono bg-white p-3 rounded-xl border border-slate-200 text-emerald-800 font-bold space-y-1">
              <p>• Tutup JP → JP = S × JS</p>
              <p>• Tutup S → S = JP / JS</p>
              <p>• Tutup JS → JS = JP / S</p>
              <p className="text-[11px] text-slate-500 font-sans font-normal mt-1">*Ingat selalu: 1 km = 100.000 cm</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <strong className="text-slate-900 block text-sm">Kunci Teori Titik Henti Carrothers:</strong>
            <p className="text-slate-600">Fasilitas umum diletakkan <strong>lebih dekat ke kota yang berpenduduk lebih sedikit</strong> agar tercapai keadilan jangkauan pelayanan:</p>
            <div className="font-mono bg-white p-3 rounded-xl border border-slate-200 text-emerald-800 font-bold space-y-1">
              <p>D = Jarak / (1 + √(P_besar / P_kecil))</p>
              <p className="text-[11px] text-slate-500 font-sans font-normal mt-1">*Hasil jarak selalu dihitung DARI KOTA KECIL!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Glosarium Istilah Penting Geografi */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wide">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          <span>Glosarium Konsep Kunci</span>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Istilah & Konsep Penting yang Sering Muncul dalam Ujian
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Klik istilah untuk memahami pengertian ringkasnya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {glossaryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedGlossary(selectedGlossary === item.term ? null : item.term)}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition cursor-pointer space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span className="text-emerald-800">{item.term}</span>
                <span className="text-slate-400 text-[10px]">Detail</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
