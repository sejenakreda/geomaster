# GeoMaster SMA - Portal Belajar Geografi & Bank 100 Latihan Ujian

Portal media pembelajaran interaktif Geografi SMA Kurikulum Merdeka yang dirancang untuk membantu para siswa menguasai materi Kelas X, XI, dan XII, memahami rumus perhitungan skala peta, serta menguji kesiapan melalui simulasi 100 butir soal latihan dengan penilaian dan pembahasan otomatis.

Dibuat dengan **React + TypeScript + Vite + Tailwind CSS**, aplikasi ini 100% responsif di smartphone, tablet, maupun laptop, serta siap di-deploy secara **gratis ke GitHub dan Vercel**.

---

## 🌟 Fitur Utama

1. **Materi Pembelajaran Lengkap (Kelas X, XI, XII)**
   - Pembahasan konsep esensial, objek studi formal/material, pendekatan, prinsip, biosfer, dan pembangunan berkelanjutan.
   - Fitur **Dengarkan Bacaan (Text-to-Speech)** berbahasa Indonesia.
   - Tautan langsung ke video pembelajaran YouTube resmi.
   - Kolom pencarian konsep dan penanda progres belajar siswa.

2. **Kalkulator & Panduan Rumus Geografi Interaktif**
   - **Kalkulator Skala Peta**: Menghitung Skala, Jarak Peta (JP), atau Jarak Sebenarnya (JS) lengkap dengan langkah konversi cm <-> km tahap demi tahap.
   - **Kalkulator Interval Kontur (CI)**: Menghitung beda tinggi pada peta topografi (CI = 1/2000 × Penyebut).
   - **Kekuatan Interaksi Wilayah (W.J. Reilly)**: Menghitung interaksi gravitasi dua kota: $I = (Pa \times Pb) / d^2$.
   - **Teori Titik Henti (Carrothers)**: Menentukan lokasi ideal fasilitas umum di antara 2 kota dengan diagram visual.
   - Tombol "Contoh Soal Ujian Cepat" untuk pengujian instan.

3. **Bank 100 Soal Geografi & Evaluasi Nilai Otomatis**
   - 100 butir soal unik mencakup pilihan ganda, menjodohkan, dan interpretasi grafik/data.
   - Pilihan mode: Simulasi Penuh 100 Soal (90 Menit), Simulasi Standar 50 Soal (45 Menit), Latihan Kilat 10 Soal Acak, atau Latihan per Tingkat Kelas (X, XI, XII).
   - Fitur bendera ragu-ragu dan peta navigasi butir soal (1–100).
   - Evaluasi nilai otomatis (0–100) disertai predikat, rincian jawaban benar/salah, dan lembar pembahasan lengkap.
   - Tombol **Cetak / Unduh Lembar Hasil Ujian** untuk diserahkan ke guru.
   - Animasi konfeti perayaan jika nilai $\ge 70$.

4. **Ramah Smartphone (Mobile-Friendly)**
   - Dilengkapi bilah navigasi bawah (bottom navigation bar) untuk kemudahan jemari di smartphone.
   - Penyimpanan data lokal (*localStorage*) sehingga progres dan skor tersimpan di perangkat siswa.

---

## 🚀 Panduan Deploy Gratis ke GitHub & Vercel

### Langkah 1: Unggah ke GitHub
1. Buat repositori baru di akun [GitHub](https://github.com) Anda (contoh nama: `geomaster-sma`), pilih opsi **Public**.
2. Di terminal komputer Anda, jalankan perintah:
```bash
git init
git add .
git commit -m "feat: GeoMaster SMA portal belajar geografi"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/geomaster-sma.git
git push -u origin main
```

### Langkah 2: Deploy ke Vercel (Gratis Selamanya)
1. Buka [Vercel](https://vercel.com) dan masuk menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Temukan repositori `geomaster-sma` pada daftar lalu klik **"Import"**.
4. Pengaturan build akan otomatis terdeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Klik **"Deploy"**.

Dalam waktu kurang dari 1 menit, website Anda sudah aktif dan memiliki tautan publik gratis seperti `https://geomaster-sma.vercel.app` yang siap dibagikan kepada para siswa!

---

## 💻 Menjalankan di Komputer Lokal

```bash
# Pasang dependensi
npm install

# Jalankan server pengembangan
npm run dev

# Bangun versi produksi
npm run build
```

---
Dibuat untuk kemajuan pendidikan geografi di Indonesia 🇮🇩.
