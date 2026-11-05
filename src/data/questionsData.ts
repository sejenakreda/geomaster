export interface VisualStimulus {
  type: 
    | 'contour_map' 
    | 'climate_graph' 
    | 'population_pyramid' 
    | 'tectonic_plate' 
    | 'river_pattern' 
    | 'satellite_landuse' 
    | 'urban_zones' 
    | 'soil_profile' 
    | 'gis_overlay' 
    | 'energy_chart' 
    | 'spi_drought'
    | 'volcano_cross_section'
    | 'ocean_currents_wind'
    | 'karst_topography'
    | 'central_place_hex'
    | 'delta_types'
    | 'water_cycle'
    | 'mangrove_zonation'
    | 'atmospheric_layers';
  title: string;
  caption?: string;
  data?: any;
}

export interface Question {
  id: number;
  grade: 10 | 11 | 12;
  topic: string;
  type: 'pg' | 'matching' | 'chart' | 'complex_pg';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  badge?: string;
  source?: string;
  visual?: VisualStimulus;
}

export const bankQuestions: Question[] = [
  // ==========================================
  // PAKET MODEL DEFANTRI & SELEKSI MANDIRI PTN
  // ==========================================
  {
    id: 1,
    grade: 10,
    topic: "Konsep Esensial Geografi (Model Defantri)",
    type: "pg",
    question: "Pak Seno membeli sebidang tanah di kawasan Puncak Bogor untuk dibangun villa peristirahatan dan kebun bunga karena udaranya sejuk. Di sisi lain, Pak Dadang memilih membeli lahan di Karawang untuk membuka usaha persawahan padi karena ketersediaan air irigasi melimpah dan tanah aluvialnya subur. Fenomena perbedaan pemanfaatan lahan oleh kedua orang tersebut paling tepat dianalisis menggunakan konsep esensial geografi...",
    options: [
      "Konsep Nilai Kegunaan (Value Concept)",
      "Konsep Aglomerasi",
      "Konsep Morfologi",
      "Konsep Keterjangkauan (Accessibility)",
      "Konsep Diferensiasi Area murni"
    ],
    answer: 0,
    explanation: "Pembahasan: Konsep Nilai Kegunaan mengkaji kelebihan atau potensi suatu wilayah yang memberikan nilai manfaat berbeda bagi masing-masing orang. Lahan Puncak bernilai guna tinggi untuk rekreasi bagi Pak Seno, sedangkan lahan Karawang bernilai guna agraris produktif bagi Pak Dadang.",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 2,
    grade: 10,
    topic: "Pendekatan Geografi (Model Defantri)",
    type: "pg",
    question: "Masalah banjir tahunan dan pendangkalan sungai yang melanda kawasan permukiman hilir di wilayah Bekasi dan Jakarta dipicu oleh kebiasaan warga membuang sampah domestik ke bantaran sungai serta alih fungsi sempadan sungai menjadi hunian liar dan pabrik. Pendekatan geografi yang paling tepat untuk mengkaji interaksi timbal balik antara perilaku manusia dan kerusakan lingkungan sungai tersebut adalah...",
    options: [
      "Pendekatan Kelingkungan (Ekologi)",
      "Pendekatan Keruangan (Spasial)",
      "Pendekatan Kompleks Wilayah",
      "Pendekatan Kronologis Sejarah",
      "Pendekatan Topik Deskriptif"
    ],
    answer: 0,
    explanation: "Pembahasan: Pendekatan Kelingkungan (Ekologi) mengkaji keterkaitan interaksi antara organisme hidup (manusia dengan aktivitas buang sampah dan alih fungsi lahan) dengan lingkungan abiotik fisiknya (pendangkalan sungai dan banjir).",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 3,
    grade: 10,
    topic: "Prinsip Geografi & Tektonisme (Model Defantri)",
    type: "pg",
    question: "Aktivitas gempa bumi tektonik bermagnitudo besar yang sering melanda pesisir barat Pulau Sumatera berkaitan erat dengan posisi jalur tumbukan (subduksi megathrust) antara Lempeng Samudra Indo-Australia yang menunjam ke bawah Lempeng Benua Eurasia. Keterkaitan hubungan sebab-akibat antarfenomena geosfer fisik ini merupakan penerapan dari...",
    options: [
      "Prinsip Interelasi",
      "Prinsip Deskripsi",
      "Prinsip Persebaran (Distribusi)",
      "Prinsip Korologi",
      "Prinsip Keruangan"
    ],
    answer: 0,
    explanation: "Pembahasan: Prinsip Interelasi menelaah hubungan timbal balik atau keterkaitan sebab-akibat antara satu fenomena geosfer dengan fenomena lainnya (dalam kasus ini: tumbukan lempeng tektonik sebagai penyebab gempa bumi di pesisir barat Sumatera).",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'tectonic_plate',
      title: 'Diagram Penampang Subduksi Lempeng Sumatra - Palung Jawa',
      caption: 'Menunjukkan penunjaman Lempeng Indo-Australia di bawah Lempeng Eurasia memicu gempa megathrust'
    }
  },
  {
    id: 4,
    grade: 10,
    topic: "Kartografi & Pembacaan Peta Kontur (Model Defantri)",
    type: "chart",
    question: "Perhatikan peta kontur topografi dengan skala 1 : 50.000 pada gambar stimulus. Titik A berada pada lereng dengan garis kontur yang sangat berimpit rapat, sedangkan Titik B berada pada lereng dengan garis kontur yang saling renggang berjauhan. Kesimpulan karakteristik medan dan bentang lahan yang paling tepat adalah...",
    options: [
      "Titik A merupakan lereng terjal/curam yang rawan longsor, sedangkan Titik B merupakan lereng landai yang cocok untuk permukiman",
      "Titik A merupakan dataran rendah aluvial, sedangkan Titik B adalah tebing jurang",
      "Titik A memiliki elevasi absolut lebih rendah daripada Titik B",
      "Titik B memiliki aliran air permukaan (run-off) yang jauh lebih deras daripada Titik A",
      "Kedua titik memiliki tingkat kemiringan sudut lereng (slope) yang identik sama"
    ],
    answer: 0,
    explanation: "Pembahasan: Pada peta topografi, kerapatan garis kontur mencerminkan derajat kecuraman lereng. Kontur yang sangat rapat (Titik A) menandakan perubahan ketinggian drastis dalam jarak horizontal pendek (lereng terjal/tebing). Sebaliknya, garis kontur renggang (Titik B) menandakan medan landai.",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'contour_map',
      title: 'Peta Kontur Topografi Skala 1 : 50.000 (CI = 25m)',
      caption: 'Analisis lereng Titik A (kontur rapat) versus Titik B (kontur renggang)'
    }
  },
  {
    id: 5,
    grade: 10,
    topic: "Meteorologi & Analisis SPI BMKG (Model Defantri)",
    type: "chart",
    question: "Berdasarkan peta Standardized Precipitation Index (SPI) BMKG pada gambar stimulus, wilayah Jawa bagian timur serta Kepulauan Nusa Tenggara (NTB & NTT) mengalami indeks SPI bernilai di bawah -2.0. Hal ini mengindikasikan bahwa wilayah tersebut berada dalam kondisi...",
    options: [
      "Kekeringan meteorologis ekstrem yang berdampak defisit ketersediaan air dan puso pertanian",
      "Curah hujan di atas rata-rata normal dengan potensi banjir bandang meluap",
      "Kelembapan nisbi udara jenuh 100% dengan intensitas petir tinggi",
      "Zona iklim basah tipe Af Koppen tanpa bulan kering",
      "Anomali La Nina kuat yang memicu badai tropis monsunal"
    ],
    answer: 0,
    explanation: "Pembahasan: Menurut klasifikasi BMKG, nilai Standardized Precipitation Index (SPI) < -2.0 dikategorikan sebagai 'Kekeringan Ekstrem' (Extreme Drought), yang memicu krisis air bersih, kekeringan waduk irigasi, dan kegagalan panen tanaman pangan.",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'spi_drought',
      title: 'Peta Sebaran Indeks Kekeringan SPI Nasional BMKG',
      caption: 'Indeks defisit presipitasi curah hujan antarprovinsi di Indonesia'
    }
  },
  {
    id: 6,
    grade: 12,
    topic: "Penginderaan Jauh & Pola Permukiman (Model Defantri)",
    type: "chart",
    question: "Perhatikan citra penginderaan jauh multispektoral pada stimulus yang menampilkan petak-petak sawah irigasi berbentuk kotak simetris serta deretan perumahan seragam yang tertata rapi sejajar sepanjang jalan raya utama. Kenampakan pola spasial tersebut merupakan karakteristik khas dari...",
    options: [
      "Kawasan transmigrasi terencana (Unit Permukiman Transmigrasi)",
      "Kawasan permukiman kumuh (slum area) perkotaan metropolitan",
      "Perkampungan nelayan tradisional di pesisir delta rawa pasang surut",
      "Perladangan berpindah di pedalaman hutan lindung tropis",
      "Pola permukiman memusat (nucleated) di sekitar kawah aktif"
    ],
    answer: 0,
    explanation: "Pembahasan: Ciri khas kawasan transmigrasi adalah perencanaan tata ruang geometris teratur: rumah penduduk berderet rapi di pinggir jalan raya (linear terencana) dengan petak lahan pertanian sawah irigasi teknis berukuran sama di belakang permukiman.",
    badge: "Model Defantri D",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'satellite_landuse',
      title: 'Interpretasi Citra Satelit: Pola Lahan Kawasan Transmigrasi',
      caption: 'Pola geometris sawah irigasi teknis dan permukiman tertata di sepanjang jalan'
    }
  },
  {
    id: 7,
    grade: 11,
    topic: "Energi Baru Terbarukan EBT (Model Defantri)",
    type: "chart",
    question: "Pemerintah Indonesia menargetkan bauran Energi Baru Terbarukan (EBT) dalam bauran energi nasional untuk mencapai target Net Zero Emission 2060. Berdasarkan grafik potensi EBT nasional pada gambar, jenis energi terbarukan yang pemanfaatannya paling strategis di wilayah cincin api tektonik (ring of fire) Pulau Jawa dan Sumatera adalah...",
    options: [
      "Energi Panas Bumi (Geothermal) dari aktivitas hidrotermal vulkanik",
      "Energi Pasang Surut Air Laut di selat sempit",
      "Energi Angin Lepas Pantai lepas pantai Samudra Hindia",
      "Pembangkit Listrik Tenaga Nuklir Uranium murni",
      "Energi Surya Gurun Fotovoltaik"
    ],
    answer: 0,
    explanation: "Pembahasan: Indonesia terletak di pertemuan 3 lempeng tektonik aktif (Ring of Fire), memiliki cadangan panas bumi (geothermal) terbesar kedua di dunia (~40% potensi dunia) seperti di Kamojang, Dieng, Wayang Windu, dan Sarulla.",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'energy_chart',
      title: 'Target Bauran Energi Nasional (EBT Menuju NZE 2060)',
      caption: 'Komposisi fosil vs energi baru terbarukan (Surya, Panas Bumi, Air, Angin)'
    }
  },
  {
    id: 8,
    grade: 10,
    topic: "Hidrologi & Pola Aliran Sungai (Model Defantri)",
    type: "chart",
    question: "Perhatikan diagram pola aliran sungai pada stimulus. Pola aliran sungai berbentuk seperti cabang ranting pohon (Dendritik) umumnya berkembang pada wilayah dengan karakteristik batuan dan struktur geologi...",
    options: [
      "Batuan sedimen berbutir seragam atau batuan kristalin homogen dengan kemiringan landai",
      "Daerah lipatan antiklin dan sinklin sejajar dengan batuan resisten berselang-seling",
      "Kawasan patahan (sesar) dengan rekahan batuan bersudut siku 90 derajat",
      "Puncak gunung berapi berbentuk kerucut tunggal (stratovolcano)",
      "Cekungan depresi danau tertutup tanpa saluran pembuangan ke laut"
    ],
    answer: 0,
    explanation: "Pembahasan: Pola aliran dendritik menyerupai ranting pohon dan terbentuk di daerah batuan yang homogen (resistensi seragam), tanah berbutir halus, atau dataran aluvial landai di mana sungai tidak dikontrol oleh struktur sesar/lipatan.",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'river_pattern',
      title: 'Komparasi 4 Pola Aliran Sungai Utama (Dendritik, Trellis, Radial, Rektangular)',
      caption: 'Identifikasi struktur geologi pengontrol arah dan geometri sungai'
    }
  },
  {
    id: 9,
    grade: 12,
    topic: "Struktur Keruangan Kota Konsentris (Model Defantri)",
    type: "chart",
    question: "Pada Model Keruangan Kota Teori Konsentris yang dikemukakan oleh Ernest Burgess (lihat diagram stimulus), Zona nomor 2 yang berada tepat melingkari Daerah Pusat Kegiatan (CBD) disebut Zona Transisi. Ciri khas utama dari zona peralihan/transisi ini adalah...",
    options: [
      "Peremajaan kawasan yang diwarnai pabrik manufaktur ringan dan permukiman kumuh (slum area) kaum imigran buruh",
      "Kompleks perumahan mewah dengan fasilitas lapangan golf dan taman terbuka hijau luas",
      "Kawasan persawahan abadi penghasil pasokan bahan pangan segar kota",
      "Pusat pemerintahan istana kepresidenan dan gedung parlemen",
      "Zona para penglaju (commuter) yang memiliki rumah bertingkat di pinggiran kota"
    ],
    answer: 0,
    explanation: "Pembahasan: Zona 2 (Transition Zone) dalam Teori Konsentris Burgess merupakan wilayah perbatasan luar CBD yang mengalami penurunan kualitas lingkungan fisik, banyak terdapat industri manufaktur ringan, perumahan sewa padat, dan kantong slum area kaum pendatang/buruh.",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'urban_zones',
      title: 'Model Keruangan Teori Konsentris Kota (Ernest W. Burgess)',
      caption: 'Zona 1 (CBD) hingga Zona 5 (Commuter Zone) dan karakteristik pemanfaatannya'
    }
  },
  {
    id: 10,
    grade: 10,
    topic: "Pedosfer & Profil Horizon Tanah (Model Defantri)",
    type: "chart",
    question: "Perhatikan gambar penampang profil horizon tanah pada stimulus. Horizon tanah yang menjadi tempat terjadinya akumulasi pengendapan partikel liat halus, oksida besi, dan aluminium yang tercuci dari lapisan di atasnya (zona iluviasi) adalah...",
    options: [
      "Horizon B (Subsoil)",
      "Horizon O (Lapisan Organik Humus)",
      "Horizon A (Topsoil Eluviasi)",
      "Horizon C (Regolit Batuan Lapuk)",
      "Horizon R (Batuan Induk Keras / Bedrock)"
    ],
    answer: 0,
    explanation: "Pembahasan: Horizon B dikenal sebagai zona iluviasi (pengendapan/penumpukan bahan mineral dan liat yang tercuci dari Horizon A di atasnya). Horizon A adalah zona eluviasi (pencucian), sedangkan Horizon O adalah lapisan serasah organik teratas.",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'soil_profile',
      title: 'Profil Vertikal Horizon Tanah Lengkap (Horizon O, A, B, C, R)',
      caption: 'Lapisan eluviasi pencucian vs iluviasi pengendapan mineral hara'
    }
  },
  {
    id: 11,
    grade: 10,
    topic: "SIG & Pemodelan Bencana Longsor (Model Defantri)",
    type: "chart",
    question: "Dalam Sistem Informasi Geografis (SIG), untuk memetakan wilayah rentan bahaya tanah longsor dilakukan teknik tumpang susun (overlay) beberapa peta tematik berbobot. Berdasarkan diagram alur stimulus, tiga parameter peta dasar yang paling wajib di-overlay adalah...",
    options: [
      "Peta Kemiringan Lereng, Peta Jenis Tanah/Tekstur, dan Peta Intensitas Curah Hujan",
      "Peta Jaringan Jalan Tol, Peta Persebaran Supermarket, dan Peta Batas Kelurahan",
      "Peta Kepadatan Penduduk, Peta Nilai Jual Objek Pajak, dan Peta Zonasi Sekolah",
      "Peta Salinitas Air Laut, Peta Terumbu Karang, dan Peta Alur Pelayaran Kapal",
      "Peta Persebaran Tambang Emas, Peta Titik Panas Kilang, dan Peta Kecepatan Angin Fohn"
    ],
    answer: 0,
    explanation: "Pembahasan: Tiga variabel fisik pemicu longsor paling krusial adalah kemiringan lereng (gaya gravitasi), sifat fisik/daya ikat jenis tanah (kepekaan erosi), dan intensitas presipitasi curah hujan (kejenuhan air tanah).",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'gis_overlay',
      title: 'Mekanisme Tumpang Susun (Overlay SIG) Pemodelan Bahaya Longsor',
      caption: 'Integrasi peta lereng, peta tanah, dan peta curah hujan menjadi peta risiko'
    }
  },
  {
    id: 12,
    grade: 11,
    topic: "Demografi & Piramida Penduduk (Model Defantri)",
    type: "chart",
    question: "Perhatikan bentuk piramida penduduk pada stimulus yang memiliki dasar sangat lebar dan mengerucut runcing ke atas (piramida ekspansif). Implikasi kebijakan demografis dan sosial-ekonomi yang paling mendesak bagi pemerintah negara tersebut adalah...",
    options: [
      "Penyediaan sarana fasilitas pendidikan dasar, layanan imunisasi anak, dan penciptaan lapangan kerja masa depan",
      "Penyediaan panti jompo skala besar karena ledakan populasi lanjut usia (aging population)",
      "Membuka program imigrasi pekerja asing karena krisis tenaga kerja muda",
      "Menutup sekolah dasar karena angka kelahiran bayi mendekati angka nol",
      "Memberikan insentif finansial tunjangan anak bagi keluarga dengan anak lebih dari tiga"
    ],
    answer: 0,
    explanation: "Pembahasan: Piramida ekspansif (dasar lebar) menunjukkan angka kelahiran (natalitas) tinggi dan proporsi anak-anak (usia muda 0-14 tahun) sangat mendominasi. Kebutuhan utamanya adalah pemenuhan gizi, sekolah dasar/menengah, serta persiapan lapangan kerja agar bonus demografi produktif tercapai.",
    badge: "Model Defantri D",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'population_pyramid',
      title: 'Piramida Penduduk Tipe Ekspansif (Bentuk Segitiga / Muda)',
      caption: 'Karakteristik angka kelahiran tinggi dan proporsi usia belum produktif mendominasi'
    }
  },
  {
    id: 13,
    grade: 10,
    topic: "Klimatologi & Grafik Suhu-Hujan (Model Defantri)",
    type: "chart",
    question: "Berdasarkan grafik iklim pada gambar stimulus, suhu rata-rata bulanan relatif tinggi dan stabil sepanjang tahun (26°C - 28°C), dengan puncak curah hujan terjadi pada bulan Desember hingga Februari (>300 mm) dan penurunan curah hujan pada bulan Juli-Agustus. Karakteristik iklim wilayah tersebut sesuai dengan klasifikasi iklim Koppen tipe...",
    options: [
      "Iklim Am (Tropis Monsun dengan periode kemarau singkat)",
      "Iklim BW (Gurun Pasir Kering Ekstrem)",
      "Iklim Cs (Mediterania Laut Tengah)",
      "Iklim ET (Tundra Kutub Beku)",
      "Iklim Df (Boreal Hutan Salju Dingin)"
    ],
    answer: 0,
    explanation: "Pembahasan: Suhu tahunan hangat >18°C sepanjang tahun adalah ciri khas iklim tropis kelompok A. Pola curah hujan dengan bulan basah melimpah saat monsun barat dan beberapa bulan kering singkat (<60 mm) pada pertengahan tahun sesuai dengan tipe Am (Tropical Monsoon).",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'climate_graph',
      title: 'Grafik Klimatologi: Fluktuasi Curah Hujan (mm) & Suhu Udara (°C)',
      caption: 'Pola musiman monsun wilayah tropis Indonesia'
    }
  },
  {
    id: 14,
    grade: 10,
    topic: "Konsep Dasar Geografi (SIMAK Seleksi Mandiri PTN)",
    type: "pg",
    question: "Konsep geografi yang mengkaji jenis mata pencaharian penduduk di daerah dataran tinggi (perkebunan teh dan sayuran hortikultura) dibandingkan dengan penduduk di daerah dataran rendah aluvial (persawahan padi dan kawasan industri) adalah konsep...",
    options: [
      "Nilai Kegunaan",
      "Ketergantungan (Interdependence)",
      "Pola Keruangan",
      "Aglomerasi Pemukiman",
      "Morfologi Bentuk Lahan"
    ],
    answer: 0,
    explanation: "Pembahasan: Soal Seleksi Masuk PTN (SIMAK UI Model Defantri). Jenis kegiatan ekonomi penduduk yang berbeda antara dataran tinggi dan dataran rendah mencerminkan konsep Nilai Kegunaan (lahan memiliki nilai manfaat spesifik sesuai karakteristik fisiknya).",
    badge: "Seleksi Mandiri PTN",
    source: "Defantri - Arsip Seleksi Masuk PTN Geografi"
  },
  {
    id: 15,
    grade: 11,
    topic: "Biosfer & Fungsi Hutan (SIMAK Seleksi Mandiri PTN)",
    type: "pg",
    question: "Hutan memiliki berbagai fungsi penting bagi kelangsungan biosfer dan geosfer. Salah satu fungsi tidak langsung dari hutan adalah 'fungsi orologis', yaitu...",
    options: [
      "Mencegah terjadinya erosi permukaan tanah dan bahaya tanah longsor pada lereng",
      "Menyerap air hujan ke dalam pori tanah dan mengisi cadangan akuifer air tanah",
      "Mengatur keseimbangan iklim mikro melalui pelepasan uap air transpirasi",
      "Menghasilkan komoditas kayu gelondongan bermutu untuk industri furnitur",
      "Menyediakan habitat plasma nutfah bagi fauna endemik langka"
    ],
    answer: 0,
    explanation: "Pembahasan: Soal Seleksi Mandiri PTN Model C. Fungsi orologis hutan adalah kemampuan sistem perakaran pepohonan dalam mencengkeram partikel tanah di lereng bukit/gunung sehingga mencegah erosi dan tanah longsor. Fungsi hidrologis = tata air tanah; fungsi klimatologis = iklim mikro.",
    badge: "Seleksi Mandiri PTN",
    source: "Defantri - Arsip Seleksi Masuk PTN Geografi"
  },
  {
    id: 16,
    grade: 10,
    topic: "Kartografi & Oseanografi (Model Defantri B)",
    type: "pg",
    question: "Informasi pokok dari peta tematik dasar batimetri laut yang dapat digunakan oleh pakar oseanografi dan teknisi navigasi maritim adalah...",
    options: [
      "Kedalaman dasar laut (garis isobath) dan kontur morfologi bawah laut",
      "Pola migrasi ikan tuna sirip kuning di zona ekonomi eksklusif",
      "Tingkat keasaman air laut akibat kenaikan emisi karbon",
      "Kecepatan rata-rata angin pasat timur di atas perairan",
      "Jalur kabel serat optik telekomunikasi bawah laut antarnegara"
    ],
    answer: 0,
    explanation: "Pembahasan: Peta batimetri adalah peta tematik dasar yang menyajikan data kedalaman laut menggunakan garis-garis isobath (garis yang menghubungkan titik-titik dengan kedalaman laut yang sama) serta morfologi dasar laut (paparan, lereng benua, palung).",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 17,
    grade: 11,
    topic: "Geomorfologi Karst & Pelarutan Kimiawi",
    type: "pg",
    question: "Bentuk lahan karst yang berkembang luas di kawasan Pegunungan Sewu (Gunungkidul-Wonogiri-Pacitan) menghasilkan kenampakan bentang alam khas berupa bukit kerucut (conical hills), luweng (sinkhole/dolina), dan gua kapur dengan stalaktit-stalagmit. Proses geomorfologis utama yang mendasari pembentukan bentang lahan ini adalah...",
    options: [
      "Karsifikasi melalui pelarutan kalsium karbonat (CaCO3) oleh air hujan yang mengandung asam karbonat (H2CO3)",
      "Proses pelapukan mekanik akibat pembekuan es di celah batuan pada suhu sub-zero",
      "Aktivitas magmatisme intrusi batolit granit di kerak dangkal",
      "Pengendapan aluvial sedimen laut dangkal oleh pasang surut air laut",
      "Deflasi butiran pasir kuarsa oleh hembusan angin pantai barat"
    ],
    answer: 0,
    explanation: "Pembahasan: Kawasan karst terbentuk melalui proses kimiawi karsifikasi, di mana air hujan yang melarutkan CO2 di udara membentuk asam karbonat lemah (H2CO3) yang bereaksi dan melarutkan batuan kapur/gamping (CaCO3 menjadi Ca(HCO3)2 yang larut air).",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 18,
    grade: 10,
    topic: "Meteorologi: Angin Lokal Fohn (Kering Panas)",
    type: "matching",
    question: "Di berbagai daerah Indonesia terdapat fenomena angin terjun kering dan panas (Angin Fohn) yang bertiup menuruni lereng pegunungan dan dapat merusak daun tanaman perkebunan. Pasangkanlah nama lokal angin Fohn berikut dengan daerah persebarannya yang tepat!",
    options: [
      "Angin Bohorok di Deli Serdang (Sumatera Utara) yang merusak perkebunan tembakau",
      "Angin Gending di Cirebon yang bertiup dari Gunung Slamet",
      "Angin Kumbang di Pasuruan dan Probolinggo Jawa Timur",
      "Angin Wambraw di Makassar Sulawesi Selatan",
      "Angin Brubu di Biak Papua Barat"
    ],
    answer: 0,
    explanation: "Pembahasan: Pasangan yang tepat: Angin Bohorok di Deli (Sumut), Angin Kumbang di Cirebon-Brebes (Jabar-Jateng), Angin Gending di Pasuruan-Probolinggo (Jatim), Angin Brubu di Makassar (Sulsel), dan Angin Wambraw di Biak (Papua).",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 19,
    grade: 12,
    topic: "Interaksi Keruangan: Teori Gravitasi W.J. Reilly",
    type: "pg",
    question: "Jumlah penduduk Kota X adalah 20.000 jiwa, sedangkan Kota Y adalah 5.000 jiwa. Jarak mutlak antara Kota X dan Kota Y adalah 20 km. Berapakah kekuatan interaksi spasial antara kedua kota tersebut menurut Teori Gravitasi Reilly?",
    options: [
      "250.000",
      "50.000",
      "100.000",
      "500.000",
      "1.000.000"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Reilly: I_xy = k × (P_x × P_y) / (d_xy)^2. Dengan k=1: I_xy = (20.000 × 5.000) / (20)^2 = 100.000.000 / 400 = 250.000.",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 20,
    grade: 12,
    topic: "Teori Titik Henti (Breaking Point Theory Carrothers)",
    type: "pg",
    question: "Kota P memiliki jumlah penduduk 64.000 jiwa dan Kota Q memiliki penduduk 4.000 jiwa. Jarak antara kedua kota tersebut adalah 30 km. Pemerintah daerah berencana membangun Rumah Sakit Umum Daerah (RSUD) di antara kedua kota. Lokasi ideal pembangunan rumah sakit agar berkeadilan menurut Teori Titik Henti adalah...",
    options: [
      "6 km diukur dari Kota Q (kota berpenduduk lebih sedikit)",
      "6 km diukur dari Kota P (kota berpenduduk lebih banyak)",
      "15 km tepat di tengah-tengah antara Kota P dan Q",
      "10 km dari Kota P ke arah Kota Q",
      "24 km dari Kota Q ke arah Kota P"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Titik Henti: D_AB = d / (1 + √(P_besar / P_kecil)) = 30 / (1 + √(64.000 / 4.000)) = 30 / (1 + √16) = 30 / (1 + 4) = 30 / 5 = 6 km dari kota yang berpenduduk lebih kecil (Kota Q).",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 21,
    grade: 11,
    topic: "Oseanografi: Arus Lintas Indonesia (ARLINDO)",
    type: "pg",
    question: "Massa air laut hangat dalam jumlah raksasa mengalir dari Samudra Pasifik barat melintasi perairan kepulauan Indonesia (melalui Selat Makassar, Selat Lombok, dan Laut Banda) menuju Samudra Hindia. Sirkulasi oseanografi global ini dikenal dengan nama...",
    options: [
      "Arus Lintas Indonesia (ARLINDO / Indonesian Throughflow)",
      "Arus Dingin Oyashio Samudra Pasifik Utara",
      "Arus Teluk Hangat (Gulf Stream) Atlantik",
      "Arus Dingin Humboldt Peru yang memicu upwelling",
      "Arus Muson Barat Barat Daya Maritim"
    ],
    answer: 0,
    explanation: "Pembahasan: ARLINDO (Indonesian Throughflow) adalah fenomena pergerakan massa air laut hangat dari Samudra Pasifik ke Samudra Hindia yang dipicu oleh perbedaan gradien tekanan muka laut antara kedua samudra dan berperan penting dalam regulasi iklim global.",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 22,
    grade: 11,
    topic: "Biogeografi: Garis Wallace dan Garis Weber",
    type: "pg",
    question: "Fauna di wilayah Kepulauan Wallacea (Sulawesi, Kepulauan Maluku, dan Nusa Tenggara) memiliki keunikan biologis tersendiri yang disebut fauna tipe peralihan (endemik). Contoh satwa endemik khas yang hanya dapat dijumpai secara alami di zona peralihan Sulawesi adalah...",
    options: [
      "Anoa dataran, Babirusa, dan Burung Maleo",
      "Gajah Sumatera, Harimau loreng, dan Badak bercula satu",
      "Cendrawasih botak, Kasuari gelambir, dan Kanguru pohon",
      "Bekantan hidung panjang dan Orangutan pedalaman",
      "Burung Jalak Bali dan Macan Tutul Jawa"
    ],
    answer: 0,
    explanation: "Pembahasan: Anoa (Bubalus depressicornis), Babirusa, dan Burung Maleo adalah hewan endemik murni zona peralihan Sulawesi (diapit oleh Garis Wallace di barat dan Garis Weber/Lydekker di timur).",
    badge: "Model Defantri D",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 23,
    grade: 12,
    topic: "Pusat Pertumbuhan: Teori Tempat Sentral Christaller",
    type: "pg",
    question: "Dalam Teori Tempat Sentral (Central Place Theory) yang dikemukakan oleh Walter Christaller, suatu pusat pelayanan hierarki K=3 (kasus pasar optimum) memiliki fungsi utama untuk...",
    options: [
      "Menyediakan kebutuhan barang dagangan pasar secara optimum bagi 1/3 dari wilayah sekitar tempat sentral di sekitarnya",
      "Menyediakan sistem jaringan lalu lintas transportasi transportasi tercepat (K=4)",
      "Menyediakan administrasi pemerintahan dan keamanan optimum (K=7)",
      "Menyediakan seluruh komoditas bahan baku industri berat tanpa batas jarak",
      "Mengurangi pajak perdagangan antarkota secara bilateral"
    ],
    answer: 0,
    explanation: "Pembahasan: Teori Tempat Sentral hierarki K=3 adalah hierarki pasar optimum di mana pusat pelayanan mencakup 1/3 bagian dari enam tempat sentral di sekelilingnya (1 + 6×(1/3) = 3). K=4 lalu lintas, K=7 administrasi pemerintahan.",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 24,
    grade: 11,
    topic: "Mitigasi Bencana: Likuefaksi Tanah Gempa",
    type: "pg",
    question: "Bencana likuefaksi (pencairan tanah) dahsyat yang melanda wilayah Petobo dan Balaroa (Palu) pascagempa bumi Palu 2018 terjadi akibat kondisi geologis dan hidrologis berupa...",
    options: [
      "Lapisan sedimen pasir lepas yang jenuh air tanah mengalami getaran seismik kuat sehingga kehilangan kekuatan geser dan berubah perilakunya seperti cairan",
      "Retakan magma cair dari gunung api bawah tanah merembes ke pemukiman",
      "Tanah kapur larut seketika oleh asam belerang dari patahan bumi",
      "Air laut pasang menembus tanggul pantai dan merendam kota",
      "Suhu tanah meningkat mendadak di atas titik didih air permukaan"
    ],
    answer: 0,
    explanation: "Pembahasan: Likuefaksi terjadi pada lapisan tanah pasiran berpori yang jenuh air. Getaran gempa menaikkan tekanan air pori secara mendadak sehingga tegangan efektif tanah menjadi nol, butiran pasir mengapung, dan tanah kehilangan daya dukungnya bagaikan lumpur cair.",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 25,
    grade: 10,
    topic: "Kartografi: Menghitung Skala Foto Udara",
    type: "pg",
    question: "Sebuah kamera udara dengan panjang fokus lensa (f) 15 cm digunakan untuk memotret wilayah dataran yang berada pada ketinggian rata-rata 500 m dpl. Pesawat terbang pemotret berada pada ketinggian terbang absolut (H) 3.500 m dpl. Berapakah skala foto udara yang dihasilkan?",
    options: [
      "1 : 20.000",
      "1 : 10.000",
      "1 : 30.000",
      "1 : 40.000",
      "1 : 50.000"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Skala Foto Udara: S = f / (H - h). Panjang fokus f = 15 cm = 0,15 m. Ketinggian terbang di atas medan = H - h = 3.500 m - 500 m = 3.000 m = 300.000 cm. Skala = 15 / 300.000 = 1 : 20.000.",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 26,
    grade: 12,
    topic: "Teori Lokasi Industri: Alfred Weber",
    type: "pg",
    question: "Pabrik semen dan peleburan timah umumnya didirikan di dekat lokasi tambang bahan baku, bukan di dekat pasar konsumen. Menurut Teori Lokasi Industri Alfred Weber, hal ini disebabkan oleh nilai Indeks Material (Material Index / MI) yang...",
    options: [
      "Lebih besar dari 1 (MI > 1), karena bahan baku mengalami susut berat drastis dalam proses pengolahan (weight-losing materials)",
      "Lebih kecil dari 1 (MI < 1), karena produk akhir lebih berat daripada bahan baku",
      "Sama dengan 1 (MI = 1), sehingga biaya angkut ke pasar maupun tambang sama persis",
      "Bernilai negatif karena bahan baku tergolong bahan lokal tersebar luas",
      "Ditentukan sepenuhnya oleh upah buruh minimum regional setempat"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Indeks Material Weber: MI = Berat Bahan Baku Lokal / Berat Produk Jadi. Jika bahan baku mengalami penyusutan bobot besar (seperti batu kapur menjadi semen atau bijih timah), maka MI > 1, sehingga lokasi pabrik paling efisien diletakkan dekat bahan baku (orientasi bahan baku).",
    badge: "Model Defantri B",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 27,
    grade: 11,
    topic: "Demografi: Menghitung Angka Beban Ketergantungan",
    type: "pg",
    question: "Berdasarkan sensus penduduk suatu kabupaten, tercatat data komposisi umur penduduk sebagai berikut: Usia muda (0-14 tahun) = 30.000 jiwa; Usia produktif (15-64 tahun) = 60.000 jiwa; dan Usia lanjut (65+ tahun) = 6.000 jiwa. Berapakah Angka Beban Ketergantungan (Dependency Ratio) kabupaten tersebut?",
    options: [
      "60",
      "36",
      "50",
      "72",
      "45"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Dependency Ratio = [(Penduduk Non-Produktif Usia Muda + Tua) / Penduduk Produktif] × 100 = [(30.000 + 6.000) / 60.000] × 100 = [36.000 / 60.000] × 100 = 60. Artinya, setiap 100 jiwa penduduk produktif menanggung beban 60 jiwa penduduk non-produktif.",
    badge: "Model Defantri D",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 28,
    grade: 11,
    topic: "Geografi Lingkungan: Daya Dukung Lingkungan Hidup",
    type: "pg",
    question: "Kondisi di mana kebutuhan konsumsi air bersih dan ruang hunian oleh penduduk di suatu wilayah metropolitan telah melampaui kemampuan alam untuk memulihkan ketersediaan sumber dayanya secara lestari disebut wilayah tersebut telah melampaui...",
    options: [
      "Daya Dukung Lingkungan (Carrying Capacity)",
      "Ambang Batas Keanekaragaman Genetik",
      "Tingkat Pertumbuhan Penduduk Alami",
      "Kapasitas Ekspor Komoditas Pertanian",
      "Zona Resapan Air Konservasi Primer"
    ],
    answer: 0,
    explanation: "Pembahasan: Daya dukung lingkungan hidup (environmental carrying capacity) adalah kemampuan lingkungan hidup untuk mendukung perikehidupan manusia, makhluk hidup lain, dan keseimbangan antarkeduanya tanpa mengalami degradasi kualitas lingkungan yang permanen.",
    badge: "Model Defantri C",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 29,
    grade: 10,
    topic: "Atmosfer: Lapisan Pelindung Bumi dari Radiasi UV",
    type: "pg",
    question: "Lapisan atmosfer bumi yang mengandung konsentrasi gas ozon (O3) tertinggi yang berfungsi vital menyerap radiasi ultraviolet berbahaya dari matahari adalah lapisan...",
    options: [
      "Stratosfer",
      "Troposfer",
      "Mesosfer",
      "Termosfer (Ionosfer)",
      "Eksosfer"
    ],
    answer: 0,
    explanation: "Pembahasan: Lapisan ozon (ozonosfer) terkonsentrasi di lapisan stratosfer (ketinggian sekitar 15–35 km di atas permukaan bumi) dan bertindak sebagai perisai alami bumi dari sengatan radiasi sinar UV-B matahari.",
    badge: "Model Defantri A",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 30,
    grade: 12,
    topic: "Pembangunan Berkelanjutan: Indikator SDGs Nomor 13",
    type: "pg",
    question: "Tujuan Pembangunan Berkelanjutan (Sustainable Development Goals / SDGs) Nomor 13 berfokus pada 'Penanganan Perubahan Iklim' (Climate Action). Contoh tindakan nyata mitigasi adaptasi berbasis keruangan yang paling tepat di wilayah pesisir Indonesia adalah...",
    options: [
      "Restorasi dan penanaman kembali sabuk hijau hutan bakau (mangrove) untuk meredam abrasi serta menyerap karbon biru (blue carbon)",
      "Membangun kawasan reklamasi pulau buatan untuk perumahan elite",
      "Menebang hutan mangrove untuk memperluas tambak udang intensif",
      "Membuka tambang pasir laut komersial di sekitar pulau-pulau kecil terluar",
      "Membangun dermaga beton masif tanpa analisis mengenai dampak lingkungan (AMDAL)"
    ],
    answer: 0,
    explanation: "Pembahasan: Ekosistem mangrove memiliki kapasitas penyerapan dan penyimpanan karbon biru (blue carbon) hingga 3-5 kali lebih tinggi dibanding hutan daratan tropis serta melindungi garis pantai dari abrasi gelombang badai dan intrusi air laut.",
    badge: "Model Defantri D",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },

  // ==========================================
  // BANK SOAL KURIKULUM & MATERI ESENSIAL LENGKAP
  // ==========================================
  {
    id: 31,
    grade: 10,
    topic: "Kelas X - Konsep Dasar Geografi",
    type: "pg",
    question: "Pembangunan villa di kawasan Puncak Bogor sering kali menyebabkan banjir bandang di kawasan hilir Jakarta. Konsep esensial geografi yang paling tepat untuk menganalisis keterkaitan fenomena hulu-hilir ini adalah...",
    options: ["Konsep Lokasi", "Konsep Keterkaitan Keruangan", "Konsep Morfologi", "Konsep Aglomerasi", "Konsep Jarak Relatif"],
    answer: 1,
    explanation: "Pembahasan: Keterkaitan keruangan menyoroti hubungan sebab-akibat antarwilayah, di mana aktivitas perubahan penggunaan lahan di hulu (Puncak) berdampak langsung secara fisik hidrologis ke hilir (Jakarta)."
  },
  {
    id: 32,
    grade: 10,
    topic: "Kelas X - Pendekatan Geografi",
    type: "pg",
    question: "Penelitian mengenai dampak erupsi Gunung Merapi terhadap tingkat kesuburan tanah pertanian, pola permukiman, dan perubahan mata pencaharian penduduk sekitar lereng paling tepat menggunakan pendekatan...",
    options: ["Pendekatan Keruangan murni", "Pendekatan Kelingkungan (Ekologi)", "Pendekatan Kompleks Wilayah", "Pendekatan Historis", "Pendekatan Kartografis"],
    answer: 2,
    explanation: "Pembahasan: Pendekatan kompleks wilayah memadukan analisis keruangan (persebaran erupsi) dan ekologi (interaksi manusia dengan alam lereng) secara komprehensif untuk merumuskan solusi regional yang terintegrasi."
  },
  {
    id: 33,
    grade: 10,
    topic: "Kelas X - Prinsip Geografi",
    type: "pg",
    question: "Penyebaran barang tambang batu bara di pulau Kalimantan terkonsentrasi di daerah cekungan sedimen tertentu dan tidak ditemukan di setiap wilayah. Prinsip geografi yang tergambar dari fenomena tersebut adalah...",
    options: ["Prinsip Interelasi", "Prinsip Deskripsi", "Prinsip Korologi", "Prinsip Persebaran (Distribusi)", "Prinsip Morfologi"],
    answer: 3,
    explanation: "Pembahasan: Prinsip persebaran menjelaskan bahwa gejala atau fenomena geosfer, baik fisik maupun biotik, tersebar secara tidak merata di permukaan bumi."
  },
  {
    id: 34,
    grade: 10,
    topic: "Kelas X - Tokoh Geografi",
    type: "matching",
    question: "Manakah pasangan tokoh geografi dan kontribusi ilmiah utamanya yang paling tepat di bawah ini?",
    options: [
      "Eratosthenes - Menghitung keliling bumi dengan bayangan tongkat matahari di Syene dan Alexandria",
      "Bernhard Varenius - Menemukan konsep zona iklim modern dan vegetasi ketinggian",
      "Alexander von Humboldt - Mengemukakan Teori Tempat Sentral hierarki heksagonal",
      "Carl Ritter - Menulis buku Geographia Generalis",
      "Paul Vidal de la Blache - Bapak Determinisme Lingkungan mutlak"
    ],
    answer: 0,
    explanation: "Pembahasan: Eratosthenes (276–194 SM) dikenal sebagai Bapak Geografi Dunia yang pertama kali menggunakan istilah geografi dan berhasil menghitung keliling bumi secara matematis akurat."
  },
  {
    id: 35,
    grade: 10,
    topic: "Kelas X - Objek Studi Geografi",
    type: "pg",
    question: "Fenomena El Nino yang memicu musim kemarau berkepanjangan dan kekeringan lahan di berbagai wilayah Indonesia dikaji dalam objek material geografi pada lapisan...",
    options: ["Litosfer", "Atmosfer", "Biosfer", "Antroposfer", "Pedosfer"],
    answer: 1,
    explanation: "Pembahasan: Objek material atmosfer mencakup seluruh dinamika udara, cuaca, iklim, pergerakan massa udara, serta osilasi iklim global seperti El Nino dan La Nina."
  },
  {
    id: 36,
    grade: 10,
    topic: "Kelas X - Pemetaan & Skala",
    type: "pg",
    question: "Jarak antara kota A dan B pada peta bersekala 1 : 200.000 adalah 4 cm. Jarak sebenarnya kedua kota tersebut di lapangan adalah...",
    options: ["4 km", "8 km", "20 km", "40 km", "80 km"],
    answer: 1,
    explanation: "Pembahasan: Rumus Jarak Sebenarnya (JS) = Jarak pada Peta (JP) × Penyebut Skala = 4 cm × 200.000 = 800.000 cm = 8 km."
  },
  {
    id: 37,
    grade: 10,
    topic: "Kelas X - Penginderaan Jauh",
    type: "pg",
    question: "Dalam citra penginderaan jauh, objek badan air tawar jernih (danau/waduk) selalu tampak berwarna gelap/hitam pada saluran inframerah karena...",
    options: [
      "Badan air jernih menyerap hampir seluruh energi gelombang inframerah yang dipancarkan",
      "Air memantulkan gelombang inframerah dengan intensitas paling kuat",
      "Resolusi spasial citra satelit terlalu rendah untuk merekam air",
      "Suhu air danau selalu berada di bawah titik beku",
      "Tingkat keasaman air danau membiaskan spektrum elektromagnetik"
    ],
    answer: 0,
    explanation: "Pembahasan: Air memiliki daya serap (absorpsi) sangat tinggi terhadap radiasi inframerah dekat, sehingga nyaris tidak ada gelombang yang dipantulkan kembali ke sensor dan objek tampak gelap/hitam."
  },
  {
    id: 38,
    grade: 10,
    topic: "Kelas X - Litosfer & Tektonik Lempeng",
    type: "pg",
    question: "Batas lempeng tektonik di mana dua lempeng saling bergerak saling menjauh dan membentuk punggung tengah samudra (mid-ocean ridge) disebut batas...",
    options: ["Divergen", "Konvergen", "Transform (Sesar Mendatar)", "Subduksi", "Obduksi"],
    answer: 0,
    explanation: "Pembahasan: Batas divergen terjadi saat dua lempeng tektonik bergerak saling memisah/menjauh, memungkinkan magma astenosfer naik dan membeku membentuk kerak samudra baru (sea-floor spreading)."
  },
  {
    id: 39,
    grade: 10,
    topic: "Kelas X - Vulkanisme & Bentuk Gunung Api",
    type: "pg",
    question: "Sebagian besar gunung api aktif di Indonesia (seperti Gunung Merapi, Semeru, Sinabung) berbentuk kerucut berlapis karena letusannya berupa kombinasi efusif dan eksplosif secara bergantian. Tipe gunung api ini disebut...",
    options: ["Strato (Stratovolcano)", "Maar", "Perisai (Shield volcano)", "Kaldera", "Kubah Lava murni"],
    answer: 0,
    explanation: "Pembahasan: Gunung api tipe strato memiliki bentuk kerucut tinggi berlapis-lapis yang tersusun dari selang-seling lava beku dan material piroklastik (abu, pasir, bom) hasil letusan bergantian."
  },
  {
    id: 40,
    grade: 10,
    topic: "Kelas X - Seisme & Titik Gempa",
    type: "pg",
    question: "Pusat sumber getaran gempa bumi yang terletak di dalam lapisan kerak bumi disebut...",
    options: ["Hiposentrum", "Episentrum", "Seismograf", "Isoseista", "Pleistoseista"],
    answer: 0,
    explanation: "Pembahasan: Hiposentrum adalah titik pusat gempa di kedalaman litosfer bumi, sedangkan episentrum adalah proyeksi tegak lurus hiposentrum di permukaan bumi."
  },
  {
    id: 41,
    grade: 10,
    topic: "Kelas X - Atmosfer & Tekanan Udara",
    type: "pg",
    question: "Menurut Hukum Barometrik Laplace, setiap kenaikan ketinggian tempat sebesar 100 meter di lapisan troposfer, maka suhu udara akan mengalami penurunan rata-rata sebesar...",
    options: ["0,6°C", "1,0°C", "2,5°C", "0,1°C", "3,0°C"],
    answer: 0,
    explanation: "Pembahasan: Gradien temperatur vertikal standar (lapse rate) di lapisan troposfer tropis adalah penurunan suhu sebesar ~0,6°C per kenaikan elevasi 100 meter dpl."
  },
  {
    id: 42,
    grade: 10,
    topic: "Kelas X - Hidrologi & Siklus Air",
    type: "pg",
    question: "Proses peresapan air hujan ke dalam pori-pori tanah secara vertikal akibat gaya gravitasi bumi disebut...",
    options: ["Infiltrasi", "Perkolasi", "Kondensasi", "Evapotranspirasi", "Sublimasi"],
    answer: 0,
    explanation: "Pembahasan: Infiltrasi adalah masuknya air permukaan ke lapisan tanah teratas melalui pori-pori tanah. Aliran lanjutan di bawahnya disebut perkolasi."
  },
  {
    id: 43,
    grade: 11,
    topic: "Kelas XI - Poros Maritim Dunia",
    type: "pg",
    question: "Indonesia memiliki empat selat strategis utama dari total sembilan jalur sempit (chokepoints) pelayaran perdagangan minyak dan barang dunia. Keempat selat tersebut adalah...",
    options: [
      "Selat Malaka, Selat Sunda, Selat Lombok, dan Selat Makassar",
      "Selat Karimata, Selat Madura, Selat Bali, dan Selat Badung",
      "Selat Hormuz, Selat Malaka, Selat Gibraltar, dan Terusan Suez",
      "Selat Bosporus, Selat Dardanella, Selat Sunda, dan Selat Flores",
      "Selat Bangka, Selat Berhala, Selat Gaspar, dan Selat Riau"
    ],
    answer: 0,
    explanation: "Pembahasan: 4 chokepoints maritim internasional Indonesia adalah Selat Malaka (terpadat di dunia), Selat Sunda, Selat Lombok (jalur kapal tanker raksasa dalam), dan Selat Makassar."
  },
  {
    id: 44,
    grade: 11,
    topic: "Kelas XI - Sumber Daya Kelautan",
    type: "pg",
    question: "Batas laut wilayah di mana suatu negara berhak secara eksklusif untuk mengeksplorasi, mengeksploitasi, mengelola, dan mengkonservasi sumber daya alam hayati dan non-hayati hingga sejauh 200 mil laut dari garis pangkal disebut...",
    options: [
      "Zona Ekonomi Eksklusif (ZEE)",
      "Laut Teritorial",
      "Landas Kontinen",
      "Zona Tambahan",
      "Laut Lepas (High Seas)"
    ],
    answer: 0,
    explanation: "Pembahasan: ZEE (Zona Ekonomi Eksklusif) membentang sejauh 200 mil laut dari garis pangkal pantai menurut Konvensi Hukum Laut PBB (UNCLOS 1982)."
  },
  {
    id: 45,
    grade: 11,
    topic: "Kelas XI - Bioma Dunia",
    type: "pg",
    question: "Bioma yang didominasi oleh hutan pohon berdaun jarum (konifer seperti cemara dan pinus), memiliki musim dingin yang sangat panjang dan ekstrem beku, serta tersebar luas di kawasan Skandinavia, Rusia (Siberia), dan Kanada utara adalah bioma...",
    options: ["Taiga", "Tundra", "Hutan Gugur Iklim Sedang", "Padang Rumput Stepa", "Hutan Hujan Tropis"],
    answer: 0,
    explanation: "Pembahasan: Bioma Taiga (boreal forest) berada di kawasan sub-arktik dengan vegetasi konifer berdaun jarum yang tahan dingin beku berkepanjangan."
  },
  {
    id: 46,
    grade: 11,
    topic: "Kelas XI - Flora Indonesia",
    type: "pg",
    question: "Tumbuhan endemik langka di Pulau Sumatra yang tidak memiliki daun, batang, maupun akar sejati, serta mengeluarkan bau busuk menyengat untuk menarik serangga penyerbuk adalah...",
    options: ["Rafflesia arnoldii", "Amorphophallus titanum (Bunga Bangkai)", "Nepenthes (Kantong Semar)", "Cendana", "Damar"],
    answer: 0,
    explanation: "Pembahasan: Rafflesia arnoldii adalah tumbuhan parasit obligat tanpa klorofil dan organ sejati yang merupakan puspa langka nasional Indonesia di hutan Bengkulu dan Sumatra."
  },
  {
    id: 47,
    grade: 11,
    topic: "Kelas XI - Sumber Daya Alam Tambang",
    type: "pg",
    question: "Barang tambang golongan A (strategis) yang menjadi bahan baku utama pembuatan baja tahan karat (stainless steel) serta baterai kendaraan listrik (EV) di mana Indonesia merupakan produsen terbesar di dunia adalah...",
    options: ["Nikel", "Batu Bara", "Bauksit", "Minyak Bumi", "Gas Alam Cair"],
    answer: 0,
    explanation: "Pembahasan: Indonesia menguasai sekitar 22-24% cadangan nikel dunia, terkonsentrasi di Sulawesi Tengah, Sulawesi Tenggara, Maluku Utara, dan Papua Barat."
  },
  {
    id: 48,
    grade: 11,
    topic: "Kelas XI - Kependudukan & Bonus Demografi",
    type: "pg",
    question: "Kondisi di mana rasio ketergantungan (dependency ratio) suatu negara berada pada titik terendah karena proporsi penduduk usia produktif (15–64 tahun) mencapai lebih dari 65% dari total populasi disebut...",
    options: [
      "Bonus Demografi",
      "Ledakan Penduduk (Baby Boom)",
      "Transisi Demografi Fase 1",
      "Aging Population",
      "Depopulasi Wilayah"
    ],
    answer: 0,
    explanation: "Pembahasan: Bonus demografi memberikan peluang akselerasi pertumbuhan ekonomi karena jumlah angkatan kerja produktif jauh lebih banyak daripada tanggungan anak-anak dan lansia."
  },
  {
    id: 49,
    grade: 11,
    topic: "Kelas XI - Mitigasi Bencana Kebencanaan",
    type: "pg",
    question: "Tindakan struktural dalam mitigasi bencana tsunami di sepanjang garis pantai rawan gempa dapat dilakukan melalui pembangunan...",
    options: [
      "Tembok laut pemecah gelombang (breakwater) dan penanaman sabuk hijau hutan mangrove pantai",
      "Pemasangan sirine peringatan dini tsunami BMKG saja",
      "Penyuluhan materi simulasi evakuasi warga",
      "Pembuatan peta jalur evakuasi",
      "Pemberian bantuan logistik sembako darurat"
    ],
    answer: 0,
    explanation: "Pembahasan: Mitigasi struktural melibatkan pembangunan fisik rekayasa teknik (seperti tanggul pemecah gelombang atau pelindung pantai alami hutan mangrove), sedangkan sirine dan penyuluhan merupakan mitigasi non-struktural."
  },
  {
    id: 50,
    grade: 11,
    topic: "Kelas XI - Kearifan Lokal Konservasi",
    type: "pg",
    question: "Kearifan lokal masyarakat adat Maluku dan Papua dalam mengelola sumber daya laut secara berkelanjutan dengan menerapkan larangan adat mengambil ikan atau biota laut tertentu dalam kurun waktu tertentu agar populasi pulih kembali disebut tradisi...",
    options: ["Sasi", "Subak", "Pranata Mangsa", "Nyabuk Gunung", "Hutan Larangan"],
    answer: 0,
    explanation: "Pembahasan: Sasi adalah hukum adat di Kepulauan Maluku dan Papua yang melarang eksploitasi sumber daya alam (seperti teripang, lola, ikan) selama periode tertentu demi keberlanjutan ekosistem."
  },

  // --- KELAS XII SOAL-SOAL HOTS ---
  {
    id: 51,
    grade: 12,
    topic: "Kelas XII - Wilayah & Tata Ruang",
    type: "pg",
    question: "Wilayah yang dicirikan oleh adanya keseragaman (homogenitas) berdasarkan kriteria fisik tertentu seperti jenis batuan, kesamaan iklim, atau jenis tutupan vegetasi disebut wilayah...",
    options: ["Wilayah Formal (Homogen)", "Wilayah Fungsional (Nodal)", "Wilayah Perencanaan", "Wilayah Administratif", "Wilayah Polarisasi"],
    answer: 0,
    explanation: "Pembahasan: Wilayah formal (uniform region) ditandai oleh keseragaman kriteria tertentu (misal wilayah karst, wilayah iklim tropis basah). Sebaliknya wilayah fungsional ditandai oleh interkoneksi dan arus barang/jasa."
  },
  {
    id: 52,
    grade: 12,
    topic: "Kelas XII - Teori Pusat Pertumbuhan",
    type: "pg",
    question: "Teori Kutub Pertumbuhan (Growth Poles Theory) yang menyatakan bahwa pembangunan ekonomi tidak terjadi di semua tempat secara serentak, melainkan muncul di titik-titik kutub tertentu dengan intensitas berbeda dikemukakan oleh...",
    options: ["Francois Perroux", "Walter Christaller", "August Losch", "Gunnar Myrdal", "Albert Hirschman"],
    answer: 0,
    explanation: "Pembahasan: Ekonom Prancis Francois Perroux (1955) mencetuskan Teori Kutub Pertumbuhan (Pole de Croissance), yang kemudian diperluas oleh Boudeville ke dalam konteks geografis wilayah."
  },
  {
    id: 53,
    grade: 12,
    topic: "Kelas XII - Interaksi Desa dan Kota",
    type: "pg",
    question: "Dampak positif perkembangan kota terhadap kehidupan masyarakat di desa sekitarnya adalah...",
    options: [
      "Meningkatnya arus pertukaran informasi teknologi pertanian dan terbukanya peluang pasar bagi komoditas desa",
      "Menyusutnya tenaga kerja muda produktif desa karena urbanisasi massal",
      "Meningkatnya alih fungsi lahan sawah produktif menjadi perumahan liar",
      "Munculnya kesenjangan gaya hidup konsumtif ekstrem di pedesaan",
      "Tergusurnya kearifan lokal gotong royong masyarakat desa"
    ],
    answer: 0,
    explanation: "Pembahasan: Hubungan timbal balik desa-kota berdampak positif pada transfer teknologi, diversifikasi mata pencaharian, dan peningkatan nilai jual hasil panen desa di pasar perkotaan."
  },
  {
    id: 54,
    grade: 12,
    topic: "Kelas XII - Zona Interaksi Keruangan (Bintarto)",
    type: "pg",
    question: "Menurut Prof. R. Bintarto, zona terluar yang menjadi batas pertemuan antara wilayah pengaruh kota dan wilayah pedesaan di mana sifat kehidupan kota dan desa saling bercampur disebut zona...",
    options: ["Rural-Urban Fringe", "City Core", "Suburban", "Suburban Fringe", "Urban Fringe"],
    answer: 0,
    explanation: "Pembahasan: Zona Rural-Urban Fringe adalah zona jalur wilayah batas terluar kota yang bersinggungan langsung dengan perdesaan dan memperlihatkan percampuran pola pemanfaatan lahan desa dan kota."
  },
  {
    id: 55,
    grade: 12,
    topic: "Kelas XII - Karakteristik Negara Maju",
    type: "pg",
    question: "Salah satu indikator demografis utama yang mencirikan negara maju (seperti Jepang, Jerman, dan Norwegia) adalah...",
    options: [
      "Angka harapan hidup sangat tinggi (>80 tahun) dan angka kematian bayi (infant mortality) sangat rendah",
      "Laju pertumbuhan penduduk alami tinggi di atas 2,5% per tahun",
      "Angka beban ketergantungan usia muda sangat mendominasi piramida penduduk",
      "Sebagian besar angkatan kerja terserap di sektor pertanian subsisten tradisional",
      "Tingkat buta huruf aksara masih di atas 20%"
    ],
    answer: 0,
    explanation: "Pembahasan: Negara maju ditandai oleh sistem kesehatan dan nutrisi prima sehingga memiliki usia harapan hidup tinggi, angka kematian bayi sangat rendah (<4 per 1.000 kelahiran), dan IPM (HDI) tinggi."
  },
  {
    id: 56,
    grade: 12,
    topic: "Kelas XII - Indeks Pembangunan Manusia (IPM / HDI)",
    type: "pg",
    question: "Indeks Pembangunan Manusia (Human Development Index) yang dirumuskan oleh UNDP mengukur capaian pembangunan manusia berbasis tiga dimensi dasar utama, yaitu...",
    options: [
      "Kesehatan (umur panjang & sehat), Pendidikan (pengetahuan), dan Standar Hidup Layak (pengeluaran per kapita)",
      "Kekuatan militer, jumlah pabrik industri, dan cadangan emas moneter",
      "Luas wilayah daratan, jumlah pulau terluar, dan panjang garis pantai",
      "Tingkat konsumsi listrik, jumlah kendaraan pribadi, dan panjang jalan tol",
      "Besarnya utang luar negeri, stabilitas kurs valuta asing, dan devisa"
    ],
    answer: 0,
    explanation: "Pembahasan: Tiga pilar pembentuk IPM adalah: (1) Umur Panjang dan Hidup Sehat (Angka Harapan Hidup saat lahir), (2) Pengetahuan (Harapan Lama Sekolah & Rata-rata Lama Sekolah), dan (3) Standar Hidup Layak (PDB per kapita paritas daya beli)."
  },
  {
    id: 57,
    grade: 12,
    topic: "Kelas XII - Geopolitik & Kerja Sama Kawasan",
    type: "pg",
    question: "Forum kerja sama ekonomi antarnegara di kawasan lingkar Samudra Pasifik yang bertujuan mendorong perdagangan bebas dan fasilitasi investasi tanpa ikatan pakta pertahanan adalah...",
    options: ["APEC (Asia-Pacific Economic Cooperation)", "NATO", "OPEC", "Uni Eropa", "Pakta Warsawa"],
    answer: 0,
    explanation: "Pembahasan: APEC didirikan tahun 1989 untuk memfasilitasi pertumbuhan ekonomi, perdagangan bebas, dan kerja sama investasi di kawasan Asia-Pasifik secara non-mengikat."
  },
  {
    id: 58,
    grade: 10,
    topic: "Kelas X - Kartografi Interval Kontur",
    type: "pg",
    question: "Jika sebuah peta topografi memiliki kontur interval (CI) sebesar 50 meter, maka skala angka peta topografi tersebut menurut rumus standar kartografi adalah...",
    options: ["1 : 100.000", "1 : 50.000", "1 : 25.000", "1 : 200.000", "1 : 20.000"],
    answer: 0,
    explanation: "Pembahasan: Rumus CI = 1/2.000 × Penyebut Skala. Maka: Penyebut Skala = CI × 2.000 = 50 × 2.000 = 100.000. Jadi skala peta adalah 1 : 100.000."
  },
  {
    id: 59,
    grade: 11,
    topic: "Kelas XI - Demografi Sex Ratio",
    type: "pg",
    question: "Suatu daerah memiliki rasio jenis kelamin (Sex Ratio) sebesar 98. Interpretasi angka demografis tersebut adalah...",
    options: [
      "Terdapat 98 penduduk laki-laki untuk setiap 100 penduduk perempuan",
      "Terdapat 98 penduduk perempuan untuk setiap 100 penduduk laki-laki",
      "98% penduduk adalah laki-laki produktif",
      "Jumlah kelahiran laki-laki dan perempuan tepat berimbang",
      "Jumlah penduduk laki-laki lebih banyak 2% dari perempuan"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Sex Ratio = (Jumlah Laki-laki / Jumlah Perempuan) × 100. Jika nilainya 98, berarti setiap 100 jiwa perempuan terdapat 98 jiwa laki-laki."
  },
  {
    id: 60,
    grade: 12,
    topic: "Kelas XII - Pembangunan Spasial Nusantara",
    type: "pg",
    question: "Visi pembangunan spasial 'Indonesia Emas 2045' berorientasi pada pemerataan pembangunan antarpulau untuk mengatasi disparitas (ketimpangan) historis antara...",
    options: [
      "Kawasan Barat Indonesia (Jawa-Sumatra) dengan Kawasan Timur Indonesia (Kalimantan, Sulawesi, Maluku, Papua)",
      "Kawasan perkotaan elite dengan kawasan pantai pelabuhan",
      "Kawasan pulau karang dengan pegunungan kapur",
      "Kawasan kutub selatan dengan khatulistiwa",
      "Kawasan agraris dengan pertambangan batu bara"
    ],
    answer: 0,
    explanation: "Pembahasan: Paradigma pembangunan Indonesia saat ini bergeser dari Jawa-sentris menuju Indonesia-sentris, menghubungkan konektivitas infrastruktur dan sentra ekonomi di Kawasan Timur Indonesia secara adil dan berkelanjutan."
  },

  // ==========================================
  // PAKET MODEL ASESMEN AKADEMIK 2025 (50 SOAL VARIATIF)
  // Termasuk Soal Bergambar, Menjodohkan, Pilihan Ganda Kompleks
  // ==========================================
  {
    id: 61,
    grade: 10,
    topic: "Litosfer: Struktur Vulkanisme & Intrusi Magma",
    type: "chart",
    question: "Perhatikan penampang struktur vulkanisme gunung api dan intrusi magma pada stimulus. Bentukan magma beku yang membeku di antara dua lapisan batuan sedimen dengan bentuk melengkung cembung di bagian atas dan mendatar di bagian alasnya disebut...",
    options: [
      "Lakolit",
      "Sill (Intrusi Mendatar)",
      "Batolit (Dapur Magma)",
      "Dike / Gang (Retas Tegak)",
      "Diatrema (Pipa Kawah)"
    ],
    answer: 0,
    explanation: "Pembahasan: Lakolit adalah intrusi magma yang menerobos di antara lapisan batuan dengan bagian atas melengkung cembung seperti kubah sementara bagian dasarnya tetap rata. Sill mendatar sejajar lapisan, Dike memotong tegak lurus, dan Batolit adalah dapur magma raksasa tak berakar.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'volcano_cross_section',
      title: 'Penampang Struktur Vulkanisme Strato & Bentuk Intrusi Magma',
      caption: 'Identifikasi Lakolit, Sill, Dike, dan Batolit di dalam tubuh gunung api'
    }
  },
  {
    id: 62,
    grade: 10,
    topic: "Atmosfer: Dinamika Angin Muson Barat & Curah Hujan",
    type: "chart",
    question: "Berdasarkan diagram dinamika sirkulasi atmosfer pada stimulus, pada periode Oktober hingga April angin muson barat berhembus melintasi khatulistiwa Indonesia. Sesuai Hukum Buys Ballot, massa udara yang melintasi garis khatulistiwa mengalami pembelokan arah karena...",
    options: [
      "Pengaruh Gaya Coriolis akibat rotasi bumi dari arah barat ke timur",
      "Perbedaan gaya gravitasi antara kutub utara dan kutub selatan",
      "Perbedaan salinitas air laut Samudra Pasifik dan Samudra Hindia",
      "Letusan gunung api yang mengubah tekanan lokal",
      "Pengaruh gerak semu harian bintang di langit malam"
    ],
    answer: 0,
    explanation: "Pembahasan: Hukum Buys Ballot menyatakan bahwa udara mengalir dari daerah bertekanan tinggi ke rendah. Karena rotasi bumi (Gaya Coriolis), arah angin berbelok ke kanan di Belahan Bumi Utara (BBU) dan berbelok ke kiri di Belahan Bumi Selatan (BBS) setelah melewati garis khatulistiwa.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'ocean_currents_wind',
      title: 'Dinamika Angin Muson Barat & Pembelokan Coriolis di Khatulistiwa',
      caption: 'Aliran massa udara lembap dari Benua Asia menuju Benua Australia'
    }
  },
  {
    id: 63,
    grade: 10,
    topic: "Geomorfologi Karst: Sistem Drainase Bawah Tanah",
    type: "chart",
    question: "Perhatikan diagram penampang bentang alam karst pada stimulus. Lubang rekahan vertikal di permukaan bukit kapur yang menjadi saluran masuknya air limpasan permukaan menuju lorong gua dan sistem sungai bawah tanah disebut...",
    options: [
      "Ponor (Luweng)",
      "Dolina (Sinkhole tertutup)",
      "Stalaktit",
      "Stalagmit",
      "Uvala (Gabungan dolina)"
    ],
    answer: 0,
    explanation: "Pembahasan: Ponor (di Jawa dikenal dengan sebutan Luweng) adalah lubang bukaan alami vertikal pada topografi karst yang berfungsi menyerap dan menelan aliran air permukaan ke dalam lorong sistem gua dan sungai bawah tanah.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'karst_topography',
      title: 'Penampang Geomorfologi Karst & Gua Bawah Tanah',
      caption: 'Identifikasi bentukan eksokarst (bukit, dolina, ponor) dan endokarst (gua, stalaktit)'
    }
  },
  {
    id: 64,
    grade: 10,
    topic: "Sedimentologi: Morfologi Delta Sungai",
    type: "chart",
    question: "Perhatikan perbandingan 4 tipe morfologi delta sungai pada stimulus. Delta yang terbentuk dengan percabangan banyak menyerupai jari-jari cakar unggas (seperti Delta Sungai Mississippi di Teluk Meksiko) digolongkan sebagai delta tipe...",
    options: [
      "Delta Kaki Burung (Birdfoot / Digitate Delta)",
      "Delta Busur (Arcuate Delta seperti Sungai Nil)",
      "Delta Runcing (Cuspate Delta seperti Sungai Tiber)",
      "Delta Estuaria (Corong pasang surut)",
      "Delta Terbengkalai (Abandoned Delta)"
    ],
    answer: 0,
    explanation: "Pembahasan: Delta Kaki Burung (Birdfoot/Digitate Delta) terbentuk di perairan laut tenang di mana pasokan debit sedimen sungai jauh lebih dominan dibandingkan daya kikis gelombang laut dan pasang surut, sehingga saluran distributari menjulur panjang ke laut.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'delta_types',
      title: 'Komparasi Morfologi Delta: Birdfoot, Arcuate, Cuspate, Estuaria',
      caption: 'Pengaruh dominasi pasokan sedimen fluvial vs energi gelombang marin'
    }
  },
  {
    id: 65,
    grade: 10,
    topic: "Hidrologi: Dinamika Siklus Air Lengkap",
    type: "chart",
    question: "Berdasarkan diagram siklus hidrologi pada stimulus, proses pemindahan massa uap air awan dari atas permukaan laut menuju ke wilayah daratan pegunungan oleh tiupan angin horizontal disebut...",
    options: [
      "Adveksi",
      "Kondensasi",
      "Transpirasi",
      "Infiltrasi",
      "Perkolasi"
    ],
    answer: 0,
    explanation: "Pembahasan: Adveksi adalah pergerakan uap air atau awan secara mendatar/horizontal yang didorong oleh angin dari satu lokasi ke lokasi lain (misal dari laut ke atas lereng pegunungan sebelum mengalami presipitasi).",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'water_cycle',
      title: 'Siklus Hidrologi Lengkap (Evaporasi, Adveksi, Presipitasi, Limpasan)',
      caption: 'Keseimbangan massa air global dari samudra ke daratan dan kembali ke laut'
    }
  },
  {
    id: 66,
    grade: 11,
    topic: "Biosfer: Zonasi Suksesi Hutan Mangrove Pesisir",
    type: "chart",
    question: "Berdasarkan profil zonasi mangrove pada gambar stimulus, spesies tumbuhan perintis yang berada pada zona paling depan berhadapan langsung dengan deburan ombak laut lepas dan memiliki sistem perakaran napas tegak (pneumatofor) adalah...",
    options: [
      "Avicennia sp. (Api-api) dan Sonneratia sp. (Pidada)",
      "Rhizophora mucronata (Bakau dengan akar tunjang)",
      "Bruguiera gymnorrhiza (Lindur dengan akar lutut)",
      "Nypa fruticans (Palem nipah di muara payau darat)",
      "Pandanus tectorius (Pandan laut)"
    ],
    answer: 0,
    explanation: "Pembahasan: Zonasi mangrove dari laut ke darat: Zona terluar (paling asin & sering tergenang pasang) didominasi Avicennia dan Sonneratia (akar napas pensil); zona tengah didominasi Rhizophora (akar tunjang melengkung); zona dalam didominasi Bruguiera (akar lutut); dan zona peralihan tawar didominasi Nypa.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'mangrove_zonation',
      title: 'Zonasi Vegetasi Ekosistem Mangrove dari Tepi Laut ke Daratan',
      caption: 'Suksesi Avicennia (akar napas) -> Rhizophora (akar tunjang) -> Bruguiera -> Nypa'
    }
  },
  {
    id: 67,
    grade: 10,
    topic: "Atmosfer: Struktur Lapisan & Karakteristik Termal",
    type: "chart",
    question: "Perhatikan grafik struktur lapisan atmosfer bumi pada gambar stimulus. Lapisan atmosfer yang memiliki suhu paling dingin mencapai minus 90°C dan berfungsi sebagai perisai pelindung bumi dari serbuan benda angkasa (meteoroid) yang terbakar habis adalah lapisan...",
    options: [
      "Mesosfer (ketinggian 50 - 85 km)",
      "Troposfer (ketinggian 0 - 12 km)",
      "Stratosfer (ketinggian 12 - 50 km)",
      "Termosfer (ketinggian 85 - 500 km)",
      "Eksosfer (ketinggian > 500 km)"
    ],
    answer: 0,
    explanation: "Pembahasan: Lapisan Mesosfer (50-85 km) merupakan lapisan terdingin atmosfer bumi di puncaknya (mesopause ~ -90°C). Lapisan ini menghasilkan gaya gesek udara yang membakar habis meteor sebelum mencapai tanah.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'atmospheric_layers',
      title: 'Struktur Lapisan Atmosfer Bumi & Kurva Fluktuasi Suhu Vertikal',
      caption: 'Troposfer (cuaca), Stratosfer (ozon), Mesosfer (meteor), Termosfer (ionosfer)'
    }
  },
  {
    id: 68,
    grade: 12,
    topic: "Pusat Pertumbuhan: Heksagonal Christaller K=3",
    type: "chart",
    question: "Perhatikan diagram heksagonal Teori Tempat Sentral Walter Christaller pada stimulus. Pada asas pasar optimum (Hierarki K=3), jika sebuah kota sentral orde I melayani kebutuhan 6 kota orde di sekelilingnya, maka proporsi wilayah tetangga yang dilayani oleh pusat sentral tersebut adalah...",
    options: [
      "1/3 bagian dari masing-masing 6 wilayah sekitarnya (K = 1 + 6×1/3 = 3)",
      "1/2 bagian dari masing-masing wilayah sekitarnya (K = 1 + 6×1/2 = 4)",
      "Seluruh bagian utuh dari 6 wilayah sekitarnya (K = 1 + 6×1 = 7)",
      "1/4 bagian dari wilayah sekitarnya",
      "Tidak ada wilayah luar yang dilayani karena bersifat autarki"
    ],
    answer: 0,
    explanation: "Pembahasan: Dalam model heksagonal Christaller K=3 (asas pasar), titik-titik sudut heksagon berada di perbatasan tiga heksagon tetangga sehingga pusat utama hanya melayani 1/3 bagian dari enam heksagon di sekitarnya. 1 + 6(1/3) = 3.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA",
    visual: {
      type: 'central_place_hex',
      title: 'Jaringan Tempat Sentral Heksagonal Christaller (Hierarki K=3)',
      caption: 'Analisis prinsip pasar optimum jangkauan barang (range) dan ambang batas (threshold)'
    }
  },

  // --- SOAL MENJODOHKAN (MATCHING MATRIX) ---
  {
    id: 69,
    grade: 10,
    topic: "Petrologi: Pasangan Batuan & Proses Pembentukannya",
    type: "matching",
    question: "Manakah pasangan antara jenis batuan dan contoh spesimennya yang paling tepat di bawah ini?",
    options: [
      "Batuan Beku Luar (Efusif) - Obsidian dan Basalt",
      "Batuan Beku Dalam (Plutonis) - Batu Apung dan Riolit",
      "Batuan Sedimen Kimiawi - Batubara dan Minyak Bumi",
      "Batuan Metamorf Dinamo - Marmer dari Batu Kapur",
      "Batuan Sedimen Klastik - Stalaktit dan Gips"
    ],
    answer: 0,
    explanation: "Pembahasan: Obsidian dan Basalt adalah batuan beku luar (efusif) yang membeku sangat cepat di permukaan bumi sehingga kristalnya halus atau berupa kaca. Granit dan Diorit adalah batuan beku dalam.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 70,
    grade: 10,
    topic: "Klimatologi: Pasangan Kode Iklim Koppen & Bioma Vegetasi",
    type: "matching",
    question: "Pasangkanlah kode klasifikasi iklim W. Koppen berikut dengan bentang vegetasi alaminya yang paling sinkron!",
    options: [
      "Iklim Af - Hutan Hujan Tropis dengan kanopi lebat dan pohon liana epifit",
      "Iklim Aw - Padang Lumut Tundra dan Permafrost",
      "Iklim BW - Hutan Hujan Iklim Sedang Berdaun Jarum",
      "Iklim ET - Sabana Padang Rumput Tropis Berseling Semak",
      "Iklim Cs - Hutan Taiga Siberia Cemara Pinus"
    ],
    answer: 0,
    explanation: "Pembahasan: Af = Tropis Basah (Hutan Hujan Tropis); Aw = Sabana Tropis; BW = Gurun Pasir Kering; ET = Tundra Kutub; Cs = Iklim Laut Tengah Mediterania.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 71,
    grade: 11,
    topic: "Oseanografi: Pasangan Zona Kedalaman Laut & Biota",
    type: "matching",
    question: "Manakah pasangan zona kedalaman laut dan karakteristik biologisnya yang paling tepat?",
    options: [
      "Zona Neritik (kedalaman 0 - 200 m) - Tempat hidup konsentrasi ikan terbanyak karena cahaya matahari tembus optimal (zona fotik)",
      "Zona Abisal (kedalaman > 2.000 m) - Dipenuhi terumbu karang hidup yang melakukan fotosintesis aktif",
      "Zona Litoral (pesisir pasang surut) - Terdapat palung laut palung dalam tanpa oksigen",
      "Zona Batial (kedalaman 200 - 2.000 m) - Tempat bertelur penyu laut di pasir pantai",
      "Zona Hadal (kedalaman palung > 6.000 m) - Menghasilkan pasokan rumput laut terbesar untuk pangan"
    ],
    answer: 0,
    explanation: "Pembahasan: Zona Neritik (0–200 m) adalah zona paling produktif secara biologis di laut karena masih dapat ditembus sinar matahari (fotik) untuk fotosintesis fitoplankton sebagai produsen primer rantai makanan laut.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 72,
    grade: 10,
    topic: "Kartografi: Pasangan Proyeksi Peta & Wilayah Distorsi Minimum",
    type: "matching",
    question: "Pilihlah pasangan proyeksi peta dan wilayah geografis yang paling ideal (minim distorsi) saat digambarkan!",
    options: [
      "Proyeksi Silinder (Cylindrical) - Sangat tepat untuk memetakan daerah ekuator/khatulistiwa seperti Indonesia",
      "Proyeksi Kerucut (Conical) - Paling akurat untuk memetakan Kutub Utara dan Kutub Selatan",
      "Proyeksi Azimuthal (Planar) - Sangat tepat untuk daerah lintang sedang (subtropis 30° - 60°)",
      "Proyeksi Gall-Peters - Hanya cocok untuk wilayah kutub beku",
      "Proyeksi Mercator - Akurat tanpa distorsi sama sekali di wilayah kutub Greenland"
    ],
    answer: 0,
    explanation: "Pembahasan: Proyeksi silinder menyinggung garis khatulistiwa sehingga distorsi terkecil ada di daerah ekuator (Indonesia). Proyeksi kerucut ideal untuk lintang sedang; Proyeksi azimuthal/planar ideal untuk daerah kutub.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 73,
    grade: 10,
    topic: "Kelembagaan Geospasial: Lembaga Pemerintah & Tugas Pokok",
    type: "matching",
    question: "Pasangkanlah nama lembaga pemerintah non-kementerian di Indonesia dengan tugas pokoknya yang benar di bidang kebumian!",
    options: [
      "Badan Informasi Geospasial (BIG) - Penyelenggara Informasi Geospasial Dasar dan Peta Rupa Bumi Indonesia (RBI)",
      "BMKG - Mengelola pemetaan tanah sertifikasi hak milik perkebunan",
      "PVMBG - Mengatur jalur pelayaran kapal selam niaga internasional",
      "LAPAN/BRIN - Mengeluarkan surat izin penambangan nikel dan batu bara",
      "BNPB - Meneliti kadar garam air laut di samudra pasifik"
    ],
    answer: 0,
    explanation: "Pembahasan: BIG (Badan Informasi Geospasial) bertugas menyelenggarakan Informasi Geospasial Dasar (IGD) peta rupa bumi nasional; BMKG untuk cuaca, iklim, dan gempa; PVMBG untuk mitigasi gunung api dan gerakan tanah; BNPB untuk penanggulangan bencana.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 74,
    grade: 12,
    topic: "Teori Morfologi Kota: Tokoh & Karakteristik Model",
    type: "matching",
    question: "Manakah pasangan teori struktur keruangan kota dan karakteristik penataannya yang benar di bawah ini?",
    options: [
      "Teori Sektoral (Homer Hoyt) - Pola zona permukiman berkembang memanjang mengikuti jalur rute transportasi jalan raya dan rel kereta",
      "Teori Konsentris (Burgess) - Kota berkembang dari banyak inti pertumbuhan terpisah yang saling menyatu",
      "Teori Inti Ganda (Harris & Ullman) - Kota berkembang melingkar berbentuk cincin konsentris sempurna dari 1 titik",
      "Teori Poros (Babcock) - Kota tidak memiliki jalur transportasi sama sekali",
      "Teori Ketinggian Bangunan (Bergel) - Kota berkembang murni karena pengaruh gravitasi antarplanet"
    ],
    answer: 0,
    explanation: "Pembahasan: Teori Sektoral Homer Hoyt (1939) menyatakan zona-zona fungsi kota tumbuh dalam bentuk baji atau sektor-sektor yang memanjang sepanjang koridor transportasi utama keluar dari CBD.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 75,
    grade: 11,
    topic: "Biogeografi Indonesia: Pasangan Zona & Fauna Endemik",
    type: "matching",
    question: "Pasangkanlah wilayah persebaran biogeografi di Indonesia dengan satwa khasnya yang paling sinkron!",
    options: [
      "Zona Asiatis (Paparan Sunda) - Badak bercula satu, Orangutan, dan Harimau Sumatera",
      "Zona Peralihan (Wallacea) - Cendrawasih paruh sabit dan Kasuari gelambir",
      "Zona Australis (Paparan Sahul) - Gajah Sumatera dan Tapir Asia",
      "Zona Sundaland - Burung Maleo dan Anoa pegunungan",
      "Zona Weber - Komodo liar di pedalaman hutan Kalimantan"
    ],
    answer: 0,
    explanation: "Pembahasan: Asiatis (Sunda): mamalia besar plasental (Badak, Harimau, Gajah, Orangutan); Peralihan (Wallacea): satwa endemik (Anoa, Babirusa, Maleo, Komodo); Australis (Sahul): mamalia berkantung dan burung berbulu indah (Kasuari, Cendrawasih, Kanguru pohon).",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 76,
    grade: 10,
    topic: "Tenaga Endogen: Bentuk Gerak Epirogenesa & Orogenesa",
    type: "matching",
    question: "Manakah pasangan gerakan tektonik dan manifestasi perubahan muka buminya yang paling tepat?",
    options: [
      "Epirogenesa Negatif - Turunnya permukaan laut atau naiknya daratan secara lambat sehingga garis pantai maju ke arah laut",
      "Epirogenesa Positif - Pembentukan pegunungan lipatan Himalaya dalam waktu singkat",
      "Orogenesa Lipatan - Penurunan daratan sangat luas dan lambat di seluruh benua",
      "Orogenesa Patahan - Naiknya pulau-pulau karang koral secara merata tanpa sesar",
      "Epirogenesa Cepat - Terjadinya letusan abu vulkanik efusif"
    ],
    answer: 0,
    explanation: "Pembahasan: Epirogenesa adalah gerak pembentuk benua dalam skala sangat luas dan waktu sangat lambat. Negatif = daratan naik (pantai seolah turun/surut); Positif = daratan turun (permukaan air laut seolah naik menenggelamkan pantai). Orogenesa adalah gerak pembentuk pegunungan (lipatan & patahan) dalam tempo lebih cepat.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 77,
    grade: 11,
    topic: "Demografi Dunia: Bentuk Piramida & Karakteristik Negara",
    type: "matching",
    question: "Pasangkanlah bentuk piramida penduduk berikut dengan negara yang memiliki profil demografi tersebut!",
    options: [
      "Piramida Konstruktif (Bentuk Guci/Batu Nisan) - Jepang dan Jerman (kelahiran sangat rendah, proporsi lansia tinggi)",
      "Piramida Ekspansif (Bentuk Segitiga) - Swedia dan Norwegia (pertumbuhan nol)",
      "Piramida Stasioner (Bentuk Granat) - Nigeria dan Chad (angka kelahiran sangat tinggi)",
      "Piramida Granat - Afghanistan dan Somalia",
      "Piramida Tua - Yaman dan Angola"
    ],
    answer: 0,
    explanation: "Pembahasan: Piramida Konstruktif (usia tua > muda) khas negara maju dengan fertilitas rendah seperti Jepang & Jerman. Piramida Ekspansif (usia muda dominan) khas negara berkembang seperti Nigeria. Piramida Stasioner (seimbang) khas negara maju stabil seperti Singapura/Belanda.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 78,
    grade: 10,
    topic: "Penginderaan Jauh: Macam Resolusi Sensor Satelit",
    type: "matching",
    question: "Pasangkanlah istilah resolusi sensor penginderaan jauh berikut dengan maknanya yang tepat!",
    options: [
      "Resolusi Spasial - Ukuran terkecil objek di permukaan bumi yang dapat direkam dan dibedakan oleh sensor (satuan meter/piksel)",
      "Resolusi Temporal - Jumlah saluran panjang gelombang spektrum elektromagnetik yang dimiliki sensor",
      "Resolusi Spektral - Waktu yang dibutuhkan satelit untuk merekam ulang area yang sama",
      "Resolusi Radiometrik - Sudut kemiringan kamera udara terhadap garis horison",
      "Resolusi Termal - Jarak orbit satelit dari pusat bumi"
    ],
    answer: 0,
    explanation: "Pembahasan: Spasial = ukuran piksel objek terkecil (misal 10m Sentinel vs 0.3m WorldView); Temporal = periode pengulangan rekam (revisit time); Spektral = jumlah dan lebar pita saluran gelombang; Radiometrik = kepekaan nilai kuantisasi bit warna (8-bit, 12-bit, 16-bit).",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 79,
    grade: 12,
    topic: "Geografi Pedesaan: Pola Persebaran Permukiman",
    type: "matching",
    question: "Manakah pasangan antara pola persebaran permukiman desa dan faktor geografis penentunya yang paling akurat?",
    options: [
      "Pola Linier (Memanjang) - Mengikuti bantaran sungai atau tepian jalan raya untuk memudahkan mobilitas",
      "Pola Memusat (Nucleated) - Tersebar di puncak lereng gunung terjal tanpa sumber air",
      "Pola Tersebar (Dispersed) - Terdapat di dataran aluvial sawah irigasi teknis yang padat penduduk",
      "Pola Melingkar - Mengikuti garis kontur tebing jurang vertikal",
      "Pola Radial - Menjauhi sumber air bersih"
    ],
    answer: 0,
    explanation: "Pembahasan: Pola linier/memanjang terbentuk sepanjang jalur prasarana transportasi (sungai, jalan, pantai). Pola memusat mengitari sumber daya sentral (mata air/danau di daerah kering). Pola terpencar umum di daerah karst berbatu atau perbukitan terjal.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 80,
    grade: 11,
    topic: "Mitigasi Bencana Kebumian: Bencana & Faktor Pemicu Utama",
    type: "matching",
    question: "Pasangkanlah jenis bencana alam kebumian berikut dengan faktor pemicu utamanya!",
    options: [
      "Banjir Lahar Hujan - Hujan lebat berintensitas tinggi mengguyur endapan material piroklastik di puncak gunung api pascaerupsi",
      "Tsunami - Getaran gempa darat dangkal di tengah daratan lembah graben",
      "Likuefaksi - Pengeringan tanah liat pada musim kemarau panjang",
      "Abrasi Pantai - Aktivitas intrusi magma granit di dasar samudra",
      "Tanah Amblesan - Penanaman pohon bakau di sempadan pantai"
    ],
    answer: 0,
    explanation: "Pembahasan: Lahar hujan (lahar dingin) dipicu oleh air hujan deras yang menghanyutkan jutaan meter kubik abu, pasir, dan batu vulkanik yang masih lepas di lereng/hulu sungai gunung berapi aktif.",
    badge: "Menjodohkan",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },

  // --- SOAL PILIHAN GANDA KOMPLEKS (ANALISIS MULTIVARIAT & PERNYATAAN) ---
  {
    id: 81,
    grade: 12,
    topic: "Perencanaan Wilayah: Analisis Urban Sprawl Jabodetabek",
    type: "complex_pg",
    question: "Perhatikan pernyataan terkait fenomena urban sprawl (perembetan kenampakan fisik kota ke wilayah pinggiran) di kawasan megapolitan Jabodetabek:\n(1) Terjadinya alih fungsi lahan sawah produktif beririgasi teknis menjadi perumahan kluster dan pergudangan\n(2) Meningkatnya volume kendaraan bermotor penglaju (commuter) yang memicu emisi karbon dan kemacetan koridor tol\n(3) Menurunnya luas ruang terbuka hijau (RTH) sebagai daerah resapan air di wilayah hulu dan sempadan sungai\n(4) Menurunnya harga lahan di pinggiran kota secara drastis karena ditinggalkan penduduk\n\nPernyataan yang merupakan dampak nyata dari fenomena urban sprawl tersebut ditunjukkan oleh nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan (1), (2), (3), dan (4) benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Pernyataan (1), (2), dan (3) adalah dampak nyata urban sprawl. Pernyataan (4) salah karena perembetan kota justru memicu kenaikan spekulatif harga lahan pinggiran kota secara drastis, bukan menurun.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 82,
    grade: 11,
    topic: "Oseanografi Fisik: Analisis Fenomena Upwelling Perairan Selatan",
    type: "complex_pg",
    question: "Perhatikan fenomena oseanografi perairan selatan Jawa hingga Kepulauan Bali-Lombok:\n(1) Bertiupnya angin monsun timur mendorong massa air permukaan laut menjauhi pantai (Ekman Transport)\n(2) Naiknya massa air laut lapisan dalam yang bersuhu dingin dan kaya nutrien fosfat serta nitrat ke permukaan (Upwelling)\n(3) Meningkatnya populasi fitoplankton yang ditandai dengan tingginya konsentrasi klorofil-a pada citra satelit laut\n(4) Terjadinya kematian massal seluruh biota ikan pelagis karena suhu air permukaan menjadi beku\n\nFaktor dan indikator ilmiah yang benar terkait potensi perikanan tangkap pada peristiwa upwelling ditunjukkan oleh...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Upwelling mengangkat nutrien dasar laut sehingga memicu ledakan fitoplankton (klorofil-a tinggi), yang menarik ikan pelagis (tuna, cakalang, lemuru) berkumpul. Pernyataan (4) salah karena upwelling justru menjadi musim puncak panen nelayan tangkap.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 83,
    grade: 11,
    topic: "Biogeografi: Karakteristik Hutan Hujan Tropis Indonesia",
    type: "complex_pg",
    question: "Karakteristik ekologis yang mencirikan bioma Hutan Hujan Tropis (Tropical Rain Forest) di wilayah Kalimantan dan Sumatra adalah:\n(1) Memiliki kanopi daun bertingkat (strata tajuk A, B, C, D) yang lebat dan selalu hijau sepanjang tahun (evergreen)\n(2) Terdapat tumbuhan memanjat (liana seperti rotan) dan tumbuhan menempel (epifit seperti anggrek dan paku-pakuan)\n(3) Terjadi daur hara sangat cepat di mana lantai hutan memiliki lapisan serasah tipis yang cepat terurai oleh dekomposer\n(4) Didominasi oleh satu spesies pohon tunggal (monokultur) seperti pinus berdaun jarum\n\nPernyataan yang benar adalah...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Hutan hujan tropis memiliki biodiversitas flora tertinggi di dunia (heterogen/polikultur), kanopi bertingkat, kaya epifit dan liana, serta siklus hara cepat. Pernyataan (4) adalah ciri bioma taiga/hutan konifer, bukan hutan hujan tropis.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 84,
    grade: 11,
    topic: "SDA Energi: Bauran EBT Menuju Transisi Berkeadilan",
    type: "complex_pg",
    question: "Dalam upaya mempercepat transisi energi menuju Net Zero Emission, pemerintah Indonesia mengembangkan Pembangkit Listrik Tenaga Surya (PLTS) Terapung Cirata. Keunggulan teknis dan geografis dari PLTS terapung di atas waduk dibandingkan PLTS di daratan adalah:\n(1) Mengurangi efek pemanasan tanah dan menghemat penggunaan lahan daratan yang bernilai ekonomis tinggi\n(2) Efek pendinginan alami oleh air waduk meningkatkan efisiensi kinerja konversi panel surya fotovoltaik\n(3) Bayangan panel surya mengurangi laju penguapan (evaporasi) air waduk pada musim kemarau\n(4) Memusnahkan seluruh populasi plankton waduk sehingga air menjadi steril sepenuhnya\n\nKeunggulan yang tepat ditunjukkan oleh nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: PLTS terapung memiliki efisiensi panel lebih tinggi karena pendinginan air, menghemat lahan darat, dan menekan laju penguapan waduk. Pernyataan (4) adalah disinformasi yang keliru.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 85,
    grade: 10,
    topic: "Geologi Kebencanaan: Karakteristik Zona Megathrust Selatan Jawa",
    type: "complex_pg",
    question: "Kajian geodinamika Pusat Studi Gempa Nasional (PuSGeN) memetakan potensi gempa megathrust di pesisir selatan Jawa. Karakteristik bahaya gempa megathrust ini mencakup:\n(1) Berada pada bidang kontak antar-lempeng tektonik konvergen dengan kedalaman hiposentrum relatif dangkal (<50 km)\n(2) Memiliki potensi mekanisme patahan naik (thrust fault) dengan deformasi vertikal dasar laut yang dapat memicu tsunami\n(3) Adanya periode kuncian lempeng (seismic gap) yang menyimpan akumulasi energi regangan elastis batuan selama ratusan tahun\n(4) Dapat dihentikan dengan membuat dinding beton penghalang di dasar palung samudra\n\nFakta geologis yang valid mengenai zona megathrust tersebut adalah...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Zona megathrust merupakan sesar naik raksasa dangkal di bidang kontak penunjaman lempeng yang terkunci (seismic gap). Pernyataan (4) salah karena tenaga tektonik lempeng berdaya gigantis dan tidak mungkin dibendung secara fisik di palung laut.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 86,
    grade: 10,
    topic: "Geografi Lingkungan: Masalah Amblesan Tanah (Land Subsidence) Pantura",
    type: "complex_pg",
    question: "Fenomena penurunan muka tanah (land subsidence) yang berlangsung cepat (5 - 15 cm per tahun) di wilayah Semarang dan Jakarta Utara dipicu oleh kombinasi faktor:\n(1) Pengambilan air tanah dalam (deep groundwater extraction) secara berlebihan oleh industri dan hotel tanpa kendali\n(2) Beban konstruksi bangunan gedung tinggi dan infrastruktur masif di atas lapisan sedimen lempung muda (aluvium kompaksi alami)\n(3) Hilangnya kawasan resapan air hujan akibat pembetonan permukaan tanah perkotaan\n(4) Letusan abu vulkanik yang menekan kerak bumi ke bawah secara terus menerus\n\nFaktor penyebab utama amblesan tanah tersebut adalah...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Land subsidence dipicu oleh desakan beban bangunan di atas aluvium lunak, ekstraksi air tanah berlebih yang mengempiskan pori tanah, dan minimnya resapan air. Erupsi abu vulkanik tidak memiliki keterkaitan dengan amblesan tanah Pantura.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 87,
    grade: 12,
    topic: "Pembangunan Berkelanjutan: Prinsip Pembangunan Berkelanjutan (SDGs)",
    type: "complex_pg",
    question: "Penerapan paradigma pembangunan berkelanjutan (Sustainable Development) di bidang pengelolaan sumber daya alam harus memadukan tiga pilar utama yang saling mengunci, yaitu:\n(1) Keberlanjutan Ekologi (mempertahankan integritas daya dukung biosfer dan keanekaragaman hayati)\n(2) Keberlanjutan Ekonomi (efisiensi alokasi sumber daya dan peningkatan kesejahteraan finansial)\n(3) Keadilan Sosial (pemerataan akses antar-kelompok masyarakat dan antar-generasi yang akan datang)\n(4) Pengeksploitasian seluruh cadangan tambang secepat mungkin sebelum harga komoditas turun\n\nPilar utama pembangunan berkelanjutan yang tepat adalah nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Tiga pilar SDGs dikenal sebagai 'Triple Bottom Line': Lingkungan (Planet), Ekonomi (Profit/Prosperity), dan Sosial (People). Pernyataan (4) bertentangan secara diametral dengan etika antargenerasi pembangunan berkelanjutan.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 88,
    grade: 10,
    topic: "Penginderaan Jauh: Keunggulan Citra Radar (SAR) vs Optik",
    type: "complex_pg",
    question: "Kondisi wilayah kepulauan Indonesia yang berada di sabuk ekuator sering kali tertutup awan tebal sepanjang tahun. Keunggulan citra radar bukaan sintetis (Synthetic Aperture Radar / SAR seperti Sentinel-1) dibandingkan citra satelit optik (seperti Landsat-8) dalam pemantauan banjir adalah:\n(1) Mampu menembus tutupan awan, asap kebakaran, dan kabut tebal karena menggunakan gelombang mikro (microwave)\n(2) Dapat melakukan perekaman aktif pada siang maupun malam hari tanpa bergantung pada pencahayaan matahari\n(3) Permukaan air genangan banjir memantulkan gelombang radar secara cermin (specular reflection) sehingga tampak hitam kontras\n(4) Mampu merekam warna asli foto visual dedaunan pohon persis seperti mata manusia\n\nKeunggulan sensor radar yang tepat ditunjukkan oleh...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Radar bekerja dengan sensor aktif gelombang mikro sehingga tembus awan/asap dan bekerja malam hari. Air tenang tampak gelap karena pantulan specular menjauh dari antena. Pernyataan (4) keliru karena radar menghasilkan citra intensitas hamburan balik (grayscale/warna semu), bukan warna alami optik.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 89,
    grade: 11,
    topic: "Klimatologi Global: Dinamika Indian Ocean Dipole (IOD)",
    type: "complex_pg",
    question: "Fenomena anomali suhu muka laut di Samudra Hindia bagian barat (pantai timur Afrika) dan bagian timur (pantai barat Sumatra) dikenal sebagai Indian Ocean Dipole (IOD). Ketika terjadi fenomena IOD Positif:\n(1) Suhu permukaan laut di perairan barat Sumatra dan selatan Jawa mendingin di bawah normal\n(2) Terjadi penurunan intensitas curah hujan secara drastis di sebagian besar wilayah Indonesia bagian barat\n(3) Potensi kekeringan panjang dan kebakaran lahan gambut di Sumatra dan Kalimantan meningkat\n(4) Terjadi badai salju ekstrem di seluruh dataran rendah khatulistiwa\n\nDampak dan mekanisme fenomena IOD Positif yang benar adalah...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: IOD Positif ditandai dengan suhu muka laut dingin di dekat Indonesia dan hangat di dekat Afrika, menyebabkan uap air tertarik ke Afrika barat dan Indonesia mengalami defisit curah hujan/kemarau parah. Badai salju (4) tidak mungkin terjadi di dataran rendah tropis.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 90,
    grade: 11,
    topic: "Mitigasi Bencana: Pengelolaan Daerah Aliran Sungai (DAS) Terpadu",
    type: "complex_pg",
    question: "Upaya penataan tata ruang Daerah Aliran Sungai (DAS) secara terpadu dari hulu ke hilir untuk mencegah banjir bandang musiman meliputi strategi:\n(1) Zona hulu: Mempertahankan tutupan vegetasi hutan lindung berketinggian dan melarang permukiman masif\n(2) Zona tengah: Menerapkan teknik terasering dan pembuatan dam penahan (check dam) untuk mengendalikan sedimen erosi\n(3) Zona hilir: Menormalisasi sempadan sungai, membangun kolam retensi, dan polder pompa pengendali genangan\n(4) Membeton seluruh badan sungai dari hulu hingga hilir dan menebang seluruh pepohonan sempadan\n\nStrategi pengelolaan DAS terpadu yang benar adalah nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Pengelolaan DAS terpadu membagi peran hulu (konservasi air), tengah (pengendalian erosi & sedimentasi), dan hilir (drainase & retensi banjir). Membeton seluruh sungai dan menebang pohon (4) justru merusak ekosistem akuatik dan mempercepat laju debit puncak banjir.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 91,
    grade: 10,
    topic: "Sistem Informasi Geografis: Jenis Data Spasial Vektor vs Raster",
    type: "complex_pg",
    question: "Dalam Sistem Informasi Geografis (SIG), data spasial dikelompokkan menjadi format data vektor dan raster. Karakteristik yang benar mengenai model data vektor adalah:\n(1) Merepresentasikan objek permukaan bumi dalam bentuk titik (point), garis (polyline), dan poligon (area)\n(2) Sangat akurat dalam menggambarkan batas kepemilikan persil tanah, jaringan jalan tol, dan jaringan pipa air PDAM\n(3) Memerlukan ruang penyimpanan memori yang lebih efisien dibandingkan raster untuk data jaringan diskrit\n(4) Tersusun atas grid sel-sel piksel seragam berdimensi baris dan kolom seperti foto digital\n\nKarakteristik data vektor yang tepat ditunjukkan oleh nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Data vektor berbasis koordinat titik (X, Y) yang membentuk garis dan poligon batas tegas. Pernyataan (4) adalah karakteristik model data raster (piksel matriks baris-kolom seperti citra satelit atau DEM).",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 92,
    grade: 11,
    topic: "Kependudukan: Dinamika Transisi Demografi Indonesia",
    type: "complex_pg",
    question: "Tahapan transisi demografi menggambarkan pergeseran pola angka kelahiran dan kematian suatu bangsa. Karakteristik transisi demografi Indonesia saat ini berada pada tahap:\n(1) Angka kematian (mortalitas) telah menurun drastis seiring peningkatan kualitas fasilitas sanitasi dan medis modern\n(2) Angka kelahiran (fertilitas) berangsur turun menuju angka penggantian (replacement level TFR ~ 2,1)\n(3) Terjadi pertambahan jumlah penduduk usia kerja produktif secara signifikan (fase jendela peluang bonus demografi)\n(4) Angka kelahiran dan kematian keduanya masih sangat tinggi di atas 40 per mil seperti zaman purba\n\nKondisi transisi demografi yang tepat adalah...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Indonesia berada pada tahap transisi demografi tahap 3 lanjut menuju tahap 4, di mana mortalitas rendah, TFR menurun mendekati 2,1, dan proporsi usia produktif tinggi. Pernyataan (4) adalah ciri tahap 1 masyarakat pra-industri.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 93,
    grade: 11,
    topic: "Kearifan Lokal Mitigasi: Tradisi Smong Pulau Simeulue",
    type: "complex_pg",
    question: "Saat gempa dahsyat dan tsunami Samudra Hindia 2004 melanda Aceh, warga Pulau Simeulue yang berada sangat dekat dengan pusat gempa hanya mencatat korban jiwa sangat minim. Hal ini disebabkan oleh kearifan lokal 'Smong' yang diwariskan turun-temurun:\n(1) Jika merasakan gempa bumi kuat dan melihat air laut surut tiba-tiba, warga tidak mencari ikan melainkan segera lari ke bukit\n(2) Nilai mitigasi evakuasi mandiri diajarkan melalui syair lagu pengantar tidur dan cerita tutur anak-anak\n(3) Pembelajaran mitigasi berbasis komunitas tanpa bergantung pada teknologi sirine elektronik peringatan dini\n(4) Warga bersembunyi di dalam kamar tidur sambil mengunci pintu rapat-rapat\n\nFaktor keberhasilan mitigasi kearifan lokal Smong tersebut ditunjukkan oleh...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Kearifan lokal Smong di Simeulue adalah teladan mitigasi non-struktural berbasis edukasi budaya tutur yang terbukti menyelamatkan nyawa saat tsunami. Pernyataan (4) salah karena bersembunyi di kamar saat tsunami adalah tindakan fatal.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 94,
    grade: 10,
    topic: "Pedosfer: Degradasi Lahan & Metode Konservasi Mekanik",
    type: "complex_pg",
    question: "Upaya konservasi tanah mekanik pada lahan pertanian lereng pegunungan untuk memperlambat kecepatan aliran permukaan dan menahan erosi tanah meliputi:\n(1) Pembuatan teras bangku (terasering) bertingkat pada lereng berkemiringan curam\n(2) Pembuatan saluran pembuangan air (SPA) berundak dengan tanaman penguat bibir teras\n(3) Pembuatan rorak (lubang jebakan sedimen) untuk menampung endapan lumpur dan meresapkan air ke tanah\n(4) Mencangkul tanah searah garis lurus dari puncak lereng menuju ke lembah bawah\n\nMetode konservasi mekanik yang tepat ditunjukkan oleh nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: Terasering, SPA berundak, dan rorak adalah teknik mekanik standar konservasi lereng. Mencangkul atau membajak searah kemiringan lereng (4) adalah kekeliruan fatal yang justru mempercepat erosi alur dan parit.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 95,
    grade: 12,
    topic: "Tata Ruang Wilayah: Pengendalian Alih Fungsi Lahan LP2B",
    type: "complex_pg",
    question: "Undang-Undang Nomor 41 Tahun 2009 mengatur tentang Perlindungan Lahan Pertanian Pangan Berkelanjutan (LP2B). Tujuan strategis penetapan LP2B dalam Rencana Tata Ruang Wilayah (RTRW) adalah:\n(1) Menjaga kedaulatan dan kemandirian pangan nasional dari ancaman defisit beras\n(2) Melindungi lahan sawah beririgasi teknis dengan produktivitas tinggi dari alih fungsi menjadi kawasan industri dan komersial\n(3) Mempertahankan fungsi hidrologis persawahan sebagai penampung limpasan air dan penyuplai oksigen kawasan peri-urban\n(4) Mengharuskan seluruh petani beralih profesi menjadi buruh pabrik semen\n\nTujuan strategis yang benar ditunjukkan oleh nomor...",
    options: [
      "(1), (2), dan (3) benar",
      "(1) dan (3) benar",
      "(2) dan (4) benar",
      "(4) saja yang benar",
      "Semua pernyataan benar"
    ],
    answer: 0,
    explanation: "Pembahasan: LP2B ditetapkan untuk mengamankan sawah beririgasi teknis demi ketahanan pangan dan keseimbangan ekologis tata ruang. Pernyataan (4) adalah disinformasi yang bertolak belakang dengan cita-cita kedaulatan agraria.",
    badge: "Pilihan Ganda Kompleks",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },

  // --- SOAL PENALARAN SPASIAL & HOTS SELEKSI AKADEMIK ---
  {
    id: 96,
    grade: 12,
    topic: "Geografi Transportasi: Teori Konektivitas Indeks Beta Kansky",
    type: "pg",
    question: "Suatu wilayah pembangunan regional memiliki 5 kota simpul (nodes / e = 5) yang dihubungkan oleh 7 ruas jaringan jalan raya utama (edges / v = 7). Menurut Teori Indeks Konektivitas K.J. Kansky, berapakah nilai Indeks Beta (β) wilayah tersebut dan bagaimana interpretasi keterhubungannya?",
    options: [
      "β = 1,4 (Konektivitas tinggi, jaringan jalan sudah membentuk sirkuit lengkap yang memperlancar mobilitas barang dan jasa)",
      "β = 0,7 (Konektivitas sangat rendah, antar-kota terisolasi)",
      "β = 2,5 (Konektivitas jenuh)",
      "β = 0,2 (Wilayah tanpa akses transportasi darat)",
      "β = 3,5 (Hanya ada satu jalan buntu)"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Indeks Konektivitas Beta: β = e / v, di mana e = jumlah ruas jalan (edges = 7) dan v = jumlah kota simpul (vertices = 5). Maka β = 7 / 5 = 1,4. Nilai β > 1 menandakan jaringan jalan telah membentuk sirkuit tertutup dengan tingkat konektivitas tinggi.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 97,
    grade: 12,
    topic: "Teori Lokasi Industri: Lokasi Optimum Segitiga Weber",
    type: "pg",
    question: "Sebuah industri pengolahan minuman sari buah membutuhkan buah segar lokal seberat 4 ton untuk menghasilkan 1 ton sari buah kemasan siap konsumsi. Nilai Indeks Material (MI) dari industri tersebut adalah 4 (MI > 1). Menurut teori lokasi industri Alfred Weber, lokasi pabrik yang memberikan total ongkos transportasi minimum adalah...",
    options: [
      "Diletakkan tepat di lokasi perkebunan bahan baku buah segar (Orientasi Bahan Baku)",
      "Diletakkan di pusat kota konsumen pasar (Orientasi Pasar)",
      "Diletakkan persis di tengah-tengah jarak antara kebun dan pasar",
      "Diletakkan di pelabuhan laut internasional di luar negeri",
      "Lokasi pabrik bebas di mana saja tanpa dipengaruhi biaya angkut"
    ],
    answer: 0,
    explanation: "Pembahasan: Indeks Material MI = Berat Bahan Baku / Berat Produk Jadi = 4 / 1 = 4. Karena MI > 1 (bahan baku menyusut berat saat diolah), maka mengangkut bahan baku mentah jauh lebih mahal daripada mengangkut produk jadi. Lokasi pabrik harus berada di lokasi bahan baku (raw-material oriented).",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 98,
    grade: 10,
    topic: "Rotasi Bumi & Perhitungan Garis Bujur Waktu",
    type: "pg",
    question: "Kota Pontianak terletak pada garis bujur 109° BT dan saat ini menunjukkan waktu lokal pukul 09.00 WIB. Pada saat yang bersamaan, sebuah kapal kargo berada di perairan internasional pada garis bujur 139° BT. Waktu lokal pada kapal kargo tersebut adalah pukul...",
    options: [
      "11.00 WIT",
      "10.00 WITA",
      "08.00 WIB",
      "12.00 WIT",
      "07.00 WIB"
    ],
    answer: 0,
    explanation: "Pembahasan: Selisih garis bujur = 139° - 109° = 30°. Setiap 15° bujur setara dengan perbedaan waktu 1 jam. Selisih waktu = 30° / 15° = 2 jam. Karena kapal berada lebih ke timur (139° BT > 109° BT), maka waktunya ditambah: 09.00 + 2 jam = 11.00 WIT.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 99,
    grade: 11,
    topic: "Hukum Laut Internasional: Rezim Alur Laut Kepulauan Indonesia (ALKI)",
    type: "pg",
    question: "Berdasarkan Konvensi Hukum Laut PBB (UNCLOS 1982), Indonesia sebagai Negara Kepulauan (Archipelagic State) telah menetapkan tiga Alur Laut Kepulauan Indonesia (ALKI). Jalur ALKI II yang menjadi rute pelayaran internasional strategis dari Selat Lombok melintasi perairan...",
    options: [
      "Selat Lombok melintasi Selat Makassar hingga Laut Sulawesi menuju Samudra Pasifik",
      "Selat Sunda melintasi Laut Jawa dan Selat Karimata menuju Laut Natuna",
      "Laut Sawu melintasi Selat Ombai dan Laut Banda menuju Laut Maluku",
      "Selat Malaka melintasi Laut Andaman menuju Teluk Benggala",
      "Laut Arafura melintasi Laut Timor menuju Australia Barat"
    ],
    answer: 0,
    explanation: "Pembahasan: ALKI II merupakan koridor maritim dalam yang menghubungkan Samudra Hindia bagian selatan melalui Selat Lombok, Selat Makassar, hingga Laut Sulawesi ke Samudra Pasifik utara (sangat diminati kapal tanker VLCC berbobot mati raksasa).",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 100,
    grade: 10,
    topic: "Geomorfologi Pantai: Pembentukan Endapan Spit & Tombolo",
    type: "pg",
    question: "Bentukan endapan pasir memanjang (spit) akibat arus sejajar pantai (longshore drift) yang menghubungkan daratan pulau utama dengan pulau karang kecil di lepas pantai disebut...",
    options: [
      "Tombolo",
      "Nehrung (Lido)",
      "Barchan (Gumuk pasir)",
      "Delta estuaria",
      "Fiord tebing glasial"
    ],
    answer: 0,
    explanation: "Pembahasan: Tombolo adalah tanggul endapan pasir atau kerikil yang terakumulasi oleh aksi ombak dan arus longshore drift sehingga menghubungkan daratan pulau utama dengan pulau kecil di lepas pantai (misal di Tanah Lot Bali).",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 101,
    grade: 11,
    topic: "Demografi: Migrasi Penduduk Non-Permanen Komuter",
    type: "pg",
    question: "Setiap hari kerja pada pagi hari, ratusan ribu penduduk dari wilayah Bodetabek (Bogor, Depok, Tangerang, Bekasi) bergerak masuk ke pusat Kota Jakarta untuk bekerja menggunakan KRL Commuter Line dan kembali pulang ke rumah masing-masing pada petang hari. Pola perpindahan penduduk tanpa berniat menetap permanen ini disebut...",
    options: [
      "Komutasi (Mobilitas Sirkuler Ulang-Alik)",
      "Transmigrasi Bedol Desa",
      "Ruralisasi Kembali ke Desa",
      "Emigrasi Menetap Permanen",
      "Evakuasi Pengungsi Bencana"
    ],
    answer: 0,
    explanation: "Pembahasan: Komutasi (penglaju) adalah bentuk mobilitas penduduk non-permanen sirkuler harian di mana seseorang melakukan perjalanan pergi-pulang setiap hari melintasi batas administratif wilayah tempat tinggal ke tempat kerja.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 102,
    grade: 12,
    topic: "Perencanaan Kota Modern: Konsep Forest City Ibu Kota Nusantara (IKN)",
    type: "pg",
    question: "Konsep tata ruang pembangunan Ibu Kota Nusantara (IKN) di Kalimantan Timur dirancang sebagai kota cerdas hijau berbasis hutan (Smart Forest City). Prinsip keruangan utama dari konsep ini adalah...",
    options: [
      "Mempertahankan minimal 75% dari total kawasan sebagai area tutupan hijau alami hutan tropis dan ruang terbuka hijau",
      "Menebang seluruh hutan untuk membangun gedung pencakar langit berlapis beton",
      "Menjadikan seluruh wilayah kota sebagai kawasan pertambangan batu bara terbuka",
      "Membuka jalan tol berlapis 10 tanpa jalur pedestrian pejalan kaki",
      "Melarang penggunaan listrik berbasis energi baru terbarukan"
    ],
    answer: 0,
    explanation: "Pembahasan: Visi Forest City IKN menetapkan bahwa 75% kawasan dipertahankan dan direstorasi sebagai ruang terbuka hijau hutan hujan tropis terintegrasi dengan sistem transportasi publik listrik ramah lingkungan beremisi nol.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 103,
    grade: 10,
    topic: "Pedosfer: Klasifikasi Tingkat Erosi Lembar (Sheet Erosion)",
    type: "pg",
    question: "Bentuk erosi tanah di mana lapisan tipis topsoil bagian atas terkelupas dan terhanyut secara seragam dan merata oleh aliran air permukaan yang tipis tanpa membentuk alur-alur parit yang dalam disebut erosi...",
    options: [
      "Erosi Lembar (Sheet Erosion)",
      "Erosi Parit (Gully Erosion)",
      "Erosi Alur (Rill Erosion)",
      "Erosi Jurang (Canyon Erosion)",
      "Erosi Percikan (Splash Erosion) murni"
    ],
    answer: 0,
    explanation: "Pembahasan: Erosi lembar (sheet erosion) adalah hilangnya lapisan tipis tanah humus teratas secara seragam oleh limpasan permukaan tipis. Jika aliran terkonsentrasi membentuk celah kecil disebut erosi alur (rill), dan jika semakin dalam melebihi 30 cm disebut erosi parit (gully).",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 104,
    grade: 11,
    topic: "Biogeografi: Peran Garis Khayal Weber & Lyddeker",
    type: "pg",
    question: "Garis khayal biogeografi yang ditarik oleh Max Weber membatasi sebaran fauna di mana keseimbangan proporsi fauna bercorak Asia dan fauna bercorak Australia mencapai perbandingan 50% : 50% melintasi perairan antara...",
    options: [
      "Sebelah timur Pulau Sulawesi dan Kepulauan Nusa Tenggara dengan Kepulauan Maluku dan Papua",
      "Selat Sunda antara Jawa dan Sumatra",
      "Selat Karimata antara Bangka dan Kalimantan",
      "Selat Madura antara Jawa dan Madura",
      "Laut Andaman di utara Aceh"
    ],
    answer: 0,
    explanation: "Pembahasan: Garis Weber ditarik di sebelah timur Sulawesi dan Kepulauan Tanimbar/Maluku untuk menunjukkan zona keseimbangan fauna (50% fauna bercorak Oriental dan 50% fauna bercorak Australis). Garis Lydekker di sebelah barat Paparan Sahul menjadi batas barat fauna murni Australis.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 105,
    grade: 10,
    topic: "Kartografi Sistem Koordinat: Proyeksi Universal Transverse Mercator (UTM)",
    type: "pg",
    question: "Sistem proyeksi peta Universal Transverse Mercator (UTM) yang digunakan secara resmi dalam pemetaan Rupa Bumi Indonesia (RBI) membagi seluruh permukaan bumi menjadi 60 zona bujur. Lebar zona meridian setiap zona bujur UTM adalah...",
    options: [
      "6 derajat bujur",
      "15 derajat bujur",
      "10 derajat bujur",
      "1 derajat bujur",
      "30 derajat bujur"
    ],
    answer: 0,
    explanation: "Pembahasan: Sistem proyeksi silinder transversal UTM membagi bumi menjadi 60 zona bujur dari 180° BB sampai 180° BT, di mana masing-masing zona memiliki lebar tepat 6° bujur dengan meridian sentralnya sendiri untuk meminimalkan distorsi peta.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 106,
    grade: 12,
    topic: "Teori Perkembangan Wilayah: Backwash Effects Gunnar Myrdal",
    type: "pg",
    question: "Menurut Teori Polarisasi Ekonomi Gunnar Myrdal, ketika suatu pusat pertumbuhan (growth center) berkembang pesat, sering kali memicu penarikan modal, tenaga kerja terampil, dan bahan mentah dari wilayah pinggiran sekitarnya sehingga wilayah pinggiran semakin terbelakang. Efek negatif polarisasi ini disebut...",
    options: [
      "Backwash Effects (Efek Pengurasan Wilayah Pinggiran)",
      "Spread Effects (Efek Penjalaran Kemakmuran)",
      "Trickle-Down Effects (Efek Menetes ke Bawah)",
      "Multiplier Effects (Efek Pengganda Ekonomi)",
      "Centripetal Force Effects murni"
    ],
    answer: 0,
    explanation: "Pembahasan: Gunnar Myrdal (1957) menyatakan bahwa pertumbuhan polarisasi kota sering kali memicu Backwash Effects (efek pengurasan sumber daya pinggiran). Sebaliknya jika perkembangan kota menyebarkan kemakmuran dan teknologi ke desa sekitarnya disebut Spread Effects.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 107,
    grade: 10,
    topic: "Hidrologi: Karakteristik Zona Airtanah Dangkal (Akuifer Bebas)",
    type: "pg",
    question: "Lapisan batuan penyimpan air tanah (akuifer) yang bagian atasnya tidak dibatasi oleh lapisan batuan kedap air (impermeabel) sehingga muka air tanahnya (water table) berfluktuasi langsung mengikuti musim hujan dan kemarau disebut...",
    options: [
      "Akuifer Bebas (Unconfined Aquifer / Air Tanah Freatik)",
      "Akuifer Tertekan (Confined Aquifer / Air Tanah Artesis)",
      "Akuifer Bertengger (Perched Aquifer)",
      "Akuiklud Batuan Liat",
      "Akuifug Batuan Granit Utuh"
    ],
    answer: 0,
    explanation: "Pembahasan: Akuifer bebas (unconfined aquifer) memiliki water table yang langsung berhubungan dengan tekanan atmosfer dan lapisan tanah atasnya permeabel, sehingga volume air sumur gali penduduk naik saat musim hujan dan surut saat kemarau.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 108,
    grade: 11,
    topic: "Ekologi Pesisir: Peran Terumbu Karang Sebagai Pemecah Gelombang Alami",
    type: "pg",
    question: "Kawasan terumbu karang tepi (fringing reef) yang sehat di sepanjang pesisir pulau-pulau kecil memiliki fungsi fisik ekologis penting sebagai...",
    options: [
      "Peredam energi kinetik gelombang badai laut sehingga melindungi garis pantai dari abrasi dahsyat",
      "Pemasok pasir silika untuk bahan baku kaca pabrik",
      "Pencegah terjadinya pasang surut air laut harian",
      "Penghangat suhu air laut hingga mendidih",
      "Penyerap limbah plastik beracun tanpa batas"
    ],
    answer: 0,
    explanation: "Pembahasan: Struktur kalsium karbonat masif terumbu karang tepi bertindak sebagai pemecah gelombang alami (natural breakwater) yang meredam hingga 97% energi hantaman ombak badai dan tsunami sebelum mencapai pemukiman pesisir.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 109,
    grade: 10,
    topic: "Klimatologi: Klasifikasi Iklim Menurut Junghuhn",
    type: "pg",
    question: "Menurut pembagian zona iklim berdasarkan ketinggian tempat dan jenis tanaman budidaya oleh Franz Wilhelm Junghuhn, wilayah dengan ketinggian antara 650 meter hingga 1.500 meter di atas permukaan laut dengan suhu 17,1°C - 22°C termasuk ke dalam...",
    options: [
      "Zona Iklim Sedang (cocok untuk budidaya teh, kopi, kina, dan sayur-sayuran)",
      "Zona Iklim Panas (cocok untuk padi, tebu, dan kelapa)",
      "Zona Iklim Sejuk (cocok untuk tanaman pinus dan cemara)",
      "Zona Iklim Dingin (hanya ditumbuhi lumut)",
      "Zona Tropis Basah Murni Aluvial"
    ],
    answer: 0,
    explanation: "Pembahasan: Klasifikasi Junghuhn: 0–650 m (Zona Panas: padi, tebu, kelapa); 650–1.500 m (Zona Sedang: teh, kopi, kina, kina, hortikultura); 1.500–2.500 m (Zona Sejuk: cemara, pinus); >2.500 m (Zona Dingin: lumut/tanpa tanaman budidaya).",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  },
  {
    id: 110,
    grade: 12,
    topic: "Integrasi Geografi: Analisis Holistik Penanganan Banjir Rob Pantura",
    type: "pg",
    question: "Penanganan komprehensif bencana banjir pasang air laut (rob) yang menggenangi permukiman dan jalur pantura Jawa secara holistik memadukan tiga pendekatan geografi sekaligus (Keruangan, Kelingkungan, dan Kompleks Wilayah). Tindakan berbasis pendekatan kelingkungan (ekologi) yang paling mendasar adalah...",
    options: [
      "Menghentikan eksploitasi penyedotan air tanah dalam, merestorasi hutan bakau mangrove, dan menegakkan zonasi sempadan pantai",
      "Membangun tanggul laut raksasa dari beton baja tanpa memperbaiki perilaku industri",
      "Membuat peta batas administrasi kelurahan yang baru",
      "Menaikkan tarif pajak tanah air rob di pesisir",
      "Memindahkan seluruh pelabuhan niaga ke tengah samudra"
    ],
    answer: 0,
    explanation: "Pembahasan: Pendekatan kelingkungan (ekologi) berfokus pada interaksi manusia dengan alam: mengendalikan ekstraksi air tanah untuk mencegah laju penurunan tanah (subsidence) serta merestorasi mangrove alami sebagai penyangga penahan air pasang laut.",
    badge: "Model Asesmen 2025",
    source: "Catatan Calon Guru - Defantri Geografi SMA"
  }
];

