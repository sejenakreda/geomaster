export interface MateriBab {
  id: string;
  grade: 10 | 11 | 12;
  babNumber: number;
  title: string;
  subtitle: string;
  estimatedReadTime: string;
  summary: string;
  fullContent: string;
  keyPoints: string[];
  youtubeQuery: string;
  tags: string[];
}

export const materiData: MateriBab[] = [
  // --- KELAS X ---
  {
    id: "x-bab-1",
    grade: 10,
    babNumber: 1,
    title: "Kajian & Perkembangan Ilmu Geografi",
    subtitle: "Pengertian etimologis, ruang lingkup geosfer, dan evolusi sejarah pemikiran geografi dari klasik hingga era modern digital.",
    estimatedReadTime: "5 menit baca",
    summary: "Memahami akar kata 'Geo' dan 'Graphein', batasan keilmuan geografi menurut Bintarto dan IGI, serta lintasan sejarah dari masa Yunani kuno hingga era Sistem Informasi Geografis.",
    fullContent: `1. Pengertian Geografi:
Secara etimologis, geografi berasal dari bahasa Yunani kuno, yaitu 'Geo' yang berarti bumi dan 'Graphein' yang berarti tulisan, lukisan, atau deskripsi. Jadi, secara harfiah geografi bermakna ilmu yang mendeskripsikan atau melukiskan tentang bumi.

Definisi Menurut Para Ahli:
• Prof. Bintarto: Geografi adalah ilmu pengetahuan yang mencitrakan, menerangkan sifat-sifat bumi, menganalisis gejala-gejala alam dan penduduk, serta mempelajari corak yang khas mengenai kehidupan dan berusaha mencari fungsi dari unsur-unsur bumi dalam ruang dan waktu.
• Seminar dan Lokakarya IGI (Ikatan Geograf Indonesia) di Semarang (1988): Geografi adalah ilmu yang mempelajari persamaan dan perbedaan fenomena geosfer dengan sudut pandang kelingkungan dan kewilayahan dalam konteks keruangan.

2. Sejarah & Perkembangan Ilmu Geografi:
• Geografi Klasik (Abad ke-6 SM - Abad Pertengahan):
Dipelopori bangsa Yunani kuno dan Romawi. Tokoh utama antara lain Herodotus (sejarah dan geografi saling bertautan), Eratosthenes (Bapak Geografi yang pertama menghitung keliling bumi dengan presisi memakai bayangan tongkat di Alexandria dan Syene), serta Strabo yang menulis karya monumental 'Geographica'.
• Geografi Abad Pertengahan & Renaisans (Abad Penjelajahan):
Didorong pelayaran samudra oleh Marco Polo, Columbus, Vasco da Gama, dan Ibnu Battuta untuk memetakan benua-benua baru. Tokoh Bernhard Varenius (1622–1650) menerbitkan 'Geographia Generalis' yang membagi geografi menjadi Geografi Umum (fisis, matematis) dan Geografi Khusus (regional).
• Geografi Modern (Abad 18–19):
Peletakan dasar geografi sebagai disiplin ilmiah mandiri oleh Alexander von Humboldt (klimatologi & biogeografi) dan Carl Ritter (geografi sosial-manusia). Muncul perdebatan paham Fisis Determinisme (alam mengontrol manusia) versus Possibilisme oleh Paul Vidal de la Blache (alam memberi peluang, manusia yang memilih).
• Geografi Mutakhir (Abad 20 - Sekarang):
Penerapan metode kuantitatif, analisis keruangan spasial, penginderaan jauh satelit, big data, dan Sistem Informasi Geografis (SIG) untuk perencanaan pembangunan berkelanjutan.`,
    keyPoints: [
      "Etimologis: Geo (Bumi) + Graphein (Tulisan/Deskripsi)",
      "Tokoh Eratosthenes: Pelopor penghitung keliling bumi matematis",
      "Varenius: Membagi Geografi Generalis vs Khusus/Regional",
      "Mazhab: Determinisme (alam menentukan) vs Possibilisme (manusia menentukan)"
    ],
    youtubeQuery: "kajian dan perkembangan ilmu geografi sma kelas 10",
    tags: ["Etimologi", "Eratosthenes", "Varenius", "Sejarah Geografi"]
  },
  {
    id: "x-bab-2",
    grade: 10,
    babNumber: 2,
    title: "Tokoh-Tokoh Penting Ilmu Geografi",
    subtitle: "Biografi ringkas dan gagasan fundamental para bapak geografi dunia yang merevolusi cara pandang manusia terhadap bumi.",
    estimatedReadTime: "4 menit baca",
    summary: "Mengenal Eratosthenes, Bernhard Varenius, Alexander von Humboldt, Carl Ritter, dan Paul Vidal de la Blache.",
    fullContent: `1. Eratosthenes dari Kirene (276–194 SM):
Disebut sebagai 'Bapak Geografi Dunia'. Beliau adalah kepala perpustakaan Alexandria yang pertama kali menggunakan istilah 'Geographika'. Kontribusi terbesarnya adalah menghitung keliling lingkar bumi dengan metode matematis sudut bayangan matahari di sumur Syene dan tugu Alexandria pada titik balik matahari (solstis musim panas), dengan deviasi kesalahan kurang dari 2%.

2. Bernhard Varenius (1622–1650):
Ilmuwan Jerman-Belanda yang merevolusi metodologi geografi lewat bukunya 'Geographia Generalis'. Varenius membagi studi geografi menjadi dua pilar:
- Geografi Absolut / Umum: Menelaah bumi secara menyeluruh (geometri bumi, astronomi, atmosfer, hidrosfer).
- Geografi Khusus / Komparatif: Mempelajari karakteristik spesifik wilayah atau negara tertentu secara mendalam.

3. Alexander von Humboldt (1769–1859):
Penjelajah alam dan ilmuwan Prusia yang meletakkan dasar biogeografi dan klimatologi modern. Melakukan ekspedisi ilmiah legendaris ke Amerika Latin, mengidentifikasi arus dingin Samudra Pasifik (Arus Humboldt), dan merumuskan konsep zona vegetasi berdasarkan ketinggian tempat (hukum zonasi).

4. Carl Ritter (1779–1859):
Guru besar geografi pertama di Universitas Berlin. Menekankan pendekatan historis dan teleologis, berpendapat bahwa bumi dirancang sebagai panggung tempat manusia berkembang dan berbudaya (Bapak Geografi Sosial).

5. Paul Vidal de la Blache (1845–1918):
Geograf terkemuka Prancis pencetus mazhab Possibilisme dan konsep 'Genre de Vie' (cara hidup kelompok masyarakat). Beliau menolak anggapan kaku determinisme lingkungan dan menegaskan bahwa alam menawarkan berbagai kemungkinan (possibilities) yang bebas dipilih oleh kebudayaan manusia.`,
    keyPoints: [
      "Eratosthenes: Perintis istilah Geografi & hitung keliling bumi",
      "Varenius: Penggagas Geographia Generalis",
      "Humboldt: Peletak klimatologi & biogeografi alamiah",
      "Vidal de la Blache: Pelopor mazhab Possibilisme Prancis"
    ],
    youtubeQuery: "tokoh tokoh geografi penting dunia dan kontribusinya sma",
    tags: ["Tokoh Geografi", "Humboldt", "Ritter", "Possibilisme"]
  },
  {
    id: "x-bab-3",
    grade: 10,
    babNumber: 3,
    title: "Objek Studi Geografi (Formal & Material)",
    subtitle: "Kupas tuntas lima lapisan geosfer bumi serta tiga cara pandang analisis spasial formal.",
    estimatedReadTime: "6 menit baca",
    summary: "Membedakan objek material (Litosfer, Atmosfer, Hidrosfer, Biosfer, Antroposfer) dan objek formal (keruangan, kelingkungan, kewilayahan).",
    fullContent: `A. Objek Material Geografi (Apa yang dipelajari?):
Objek material adalah seluruh fenomena dan substansi fisik serta hayati yang ada di permukaan bumi (lapisan geosfer):
1. Litosfer: Lapisan kerak batuan padat penyusun muka bumi, mencakup bentang alam morfologi, tektonisme lempeng, vulkanisme, dan pedosfer (lapisan tanah).
2. Atmosfer: Lapisan selimut gas udara yang mengelilingi bumi, mencakup fenomena cuaca (harian/singkat) dan iklim (rata-rata tahunan), tekanan udara, awan, kelembapan, dan angin.
3. Hidrosfer: Lapisan seluruh perairan di bumi, meliputi perairan darat (sungai, danau, rawa, air tanah) dan perairan laut (samudra, teluk, arus laut).
4. Biosfer: Lapisan kehidupan makhluk hidup, mencakup persebaran flora (tumbuhan), fauna (hewan), serta ekosistem bioma dunia.
5. Antroposfer: Lapisan kehidupan manusia sebagai makhluk sosial dan budaya, meliputi dinamika jumlah penduduk, mata pencaharian, migrasi, dan kebudayaan.

B. Objek Formal Geografi (Bagaimana cara memandangnya?):
Objek formal adalah sudut pandang (cara pandang dan metode berpikir) khas geografi dalam menganalisis fenomena geosfer. Terdapat 3 aspek formal:
1. Aspek Keruangan (Spatial): Mempelajari sebaran gejala geosfer di suatu ruang muka bumi, pola lokasi, dan aksesibilitas. Menjawab pertanyaan 5W + 1H geografi (Where, What, When, Why, Who, How).
2. Aspek Kelingkungan (Ecological): Mempelajari interaksi timbal balik antara organisme hidup (khususnya manusia) dengan lingkungan biofisiknya (misal: penebangan hutan memicu erosi).
3. Aspek Kewilayahan (Regional Complex): Memadukan analisis keruangan dan kelingkungan untuk memahami karakteristik unik serta perbedaan relasi antarwilayah.`,
    keyPoints: [
      "Objek Material: 5 Geosfer (Litosfer, Atmosfer, Hidrosfer, Biosfer, Antroposfer)",
      "Objek Formal: Cara pandang khas geografis (Keruangan, Kelingkungan, Kewilayahan)",
      "Pertanyaan Utama: Where (di mana) & Why there (mengapa di situ)"
    ],
    youtubeQuery: "objek studi material dan formal geografi kelas 10 sma",
    tags: ["Geosfer", "Litosfer", "Atmosfer", "Objek Formal"]
  },
  {
    id: "x-bab-4",
    grade: 10,
    babNumber: 4,
    title: "Pendekatan & 4 Prinsip Geografi",
    subtitle: "Pilar metodologi keruangan, kelingkungan, kompleks wilayah, serta prinsip persebaran, interelasi, deskripsi, korologi.",
    estimatedReadTime: "6 menit baca",
    summary: "Memahami 3 pendekatan riset geografi dan 4 prinsip dasar untuk membedah masalah nyata seperti banjir, gempa, hingga tata guna lahan.",
    fullContent: `A. 3 Pendekatan Utama Geografi:
1. Pendekatan Keruangan (Spatial Approach):
Menekankan analisis terhadap variasi lokasi, aglomerasi, jarak, dan pola sebaran keruangan. Contoh: Memetakan sebaran daerah rawan longsor di Kabupaten Magelang.
2. Pendekatan Kelingkungan / Ekologi (Ecological Approach):
Menganalisis keterkaitan timbal balik antara aktivitas organisme hidup (manusia) dengan komponen abiotik lingkungannya. Contoh: Mengkaji pencemaran Sungai Citarum yang disebabkan limbah pabrik tekstil dan perilaku warga membuang sampah.
3. Pendekatan Kompleks Wilayah (Regional Complex Approach):
Kombinasi antara pendekatan keruangan dan ekologi yang melihat wilayah memiliki diferensiasi area dan saling berinteraksi secara fungsional. Contoh: Mengatasi banjir Jakarta melalui kerja sama tata ruang terpadu DAS Ciliwung bersama Pemprov DKI, Bogor, dan Depok.

B. 4 Prinsip Geografi:
1. Prinsip Persebaran (Distribusi):
Gejala geosfer tersebar tidak merata di permukaan bumi. Contoh: Cadangan minyak bumi di Indonesia terkonsentrasi di Sumatra bagian timur, pesisir utara Jawa, dan Kalimantan Timur.
2. Prinsip Interelasi:
Adanya hubungan timbal balik atau keterkaitan sebab-akibat antar fenomena geosfer. Contoh: Kemarau panjang akibat El Nino menyebabkan gagal panen dan kebakaran hutan gambut.
3. Prinsip Deskripsi:
Penyajian penjelasan mendalam mengenai gejala geosfer secara naratif yang diperkuat oleh data tabel, peta tematik, diagram, dan grafik statistik.
4. Prinsip Korologi:
Prinsip paling komprehensif yang memadukan prinsip persebaran, interelasi, dan deskripsi dalam satu kesatuan ruang tertentu untuk menemukan keunikan wilayah.`,
    keyPoints: [
      "3 Pendekatan: Keruangan (Spatial), Ekologi (Kelingkungan), Kompleks Wilayah",
      "Prinsip Persebaran: Tidak merata di muka bumi",
      "Prinsip Interelasi: Hubungan sebab-akibat antar gejala",
      "Prinsip Korologi: Sintesis komprehensif persebaran + interelasi + deskripsi"
    ],
    youtubeQuery: "pendekatan dan prinsip geografi contoh soal kelas 10 sma",
    tags: ["Pendekatan", "Prinsip Korologi", "Interelasi", "Persebaran"]
  },
  {
    id: "x-bab-5",
    grade: 10,
    babNumber: 5,
    title: "10 Konsep Esensial Geografi",
    subtitle: "Sepuluh konsep kunci IGI yang wajib dikuasai untuk menganalisis setiap soal dan fenomena nyata.",
    estimatedReadTime: "7 menit baca",
    summary: "Mengupas Konsep Lokasi, Jarak, Keterjangkauan, Pola, Morfologi, Aglomerasi, Nilai Guna, Interaksi, Diferensiasi Area, dan Keterkaitan Keruangan.",
    fullContent: `1. Lokasi:
- Lokasi Absolut: Letak pasti berdasarkan garis koordinat lintang & bujur (contoh: Indonesia 6°LU–11°LS dan 95°BT–141°BT).
- Lokasi Relatif: Letak berdasarkan objek lain di sekitarnya (contoh: Indonesia terletak di antara dua benua dan dua samudra).

2. Jarak:
- Jarak Absolut: Panjang ruang terukur secara pasti (misal: Jarak Jakarta–Bandung 150 km).
- Jarak Relatif: Jarak yang diukur berdasarkan waktu tempuh atau biaya (misal: Jakarta–Bandung lewat tol kereta cepat Whoosh hanya 45 menit).

3. Keterjangkauan (Aksesibilitas):
Kemudahan mencapai suatu lokasi berdasarkan ketersediaan sarana transportasi dan medan jalan.

4. Pola:
Bentuk susunan sebaran fenomena di muka bumi, seperti pola permukiman linier di sepanjang jalan raya atau pola menyebar di pegunungan.

5. Morfologi:
Bentuk relief muka bumi sebagai hasil tenaga endogen dan eksogen, misalnya dataran rendah, pegunungan lipatan, dan lembah ngarai.

6. Nilai Guna:
Kelebihan atau potensi suatu wilayah untuk dimanfaatkan manusia. Daerah pegunungan bernilai guna tinggi untuk rekreasi dan kebun teh, sementara dataran aluvial bernilai guna untuk sawah padi.

7. Aglomerasi:
Kecenderungan pengelompokan aktivitas manusia dalam satu kawasan tertentu. Contoh: Kawasan industri Jababeka di Cikarang.

8. Interaksi & Interdependensi:
Hubungan timbal balik dan saling ketergantungan antarwilayah. Misalnya desa menyuplai bahan pangan ke kota, sedangkan kota memasok barang industri ke desa.

9. Diferensiasi Area:
Karakteristik unik atau ciri khas yang membedakan satu wilayah dengan wilayah lainnya (contoh: pesisir berpenghasilan nelayan garam, pegunungan berpenghasilan sayur mayur).

10. Keterkaitan Keruangan:
Derajat keterkaitan persebaran suatu fenomena di suatu tempat dengan tempat lain (contoh: alih fungsi hutan di Bogor menyebabkan banjir di Jakarta).`,
    keyPoints: [
      "Lokasi: Absolut (koordinat) vs Relatif (posisi lingkungan)",
      "Aglomerasi: Pengelompokan aktivitas sejenis",
      "Diferensiasi Area: Keunikan pembeda antar wilayah",
      "Keterkaitan Keruangan: Hubungan sebab-akibat lintas wilayah"
    ],
    youtubeQuery: "10 konsep esensial geografi mudah dipahami kelas 10 sma",
    tags: ["10 Konsep", "Aglomerasi", "Morfologi", "Aksesibilitas"]
  },
  {
    id: "x-bab-6",
    grade: 10,
    babNumber: 6,
    title: "Penelitian Geografi, Skala Peta, PJ & SIG",
    subtitle: "Metode ilmiah pemetaan, rumus interval kontur, interpretasi citra satelit, dan komponen data raster-vektor SIG.",
    estimatedReadTime: "8 menit baca",
    summary: "Dasar kartografi praktis, konversi rumus skala, rumus kontur interval (CI), unsur interpretasi foto udara, dan subsistem SIG.",
    fullContent: `1. Kartografi & Rumus Skala Peta:
• Skala Peta adalah perbandingan antara jarak di peta (JP) dengan jarak sesungguhnya di lapangan (JS).
  Rumus: Skala = JP / JS
  Kaidah Emas: 1 km = 100.000 cm. Selalu ubah kilometer ke centimeter terlebih dahulu saat menghitung penyebut skala!

• Kontur Interval (CI):
  CI adalah beda tinggi antara dua garis kontur yang berdekatan pada peta topografi.
  Rumus: CI = 1 / 2000 × Penyebut Skala
  Contoh: Peta skala 1 : 50.000 memiliki CI = 1 / 2000 × 50.000 = 25 meter.

2. Penginderaan Jauh (PJ / Remote Sensing):
Pengumpulan informasi tentang suatu objek dari kejauhan tanpa kontak fisik langsung menggunakan sensor satelit atau drone.
• 8 Unsur Interpretasi Citra: Rona/Warna, Bentuk, Ukuran, Tekstur, Pola, Bayangan, Situs, dan Asosiasi.
• Rona Air: Pada saluran inframerah dekat, air tampak gelap/hitam pekat karena sifat penyerapan gelombangnya yang tinggi.

3. Sistem Informasi Geografis (SIG / GIS):
Sistem berbasis komputer untuk memasukkan, menyimpan, memanipulasi, menganalisis, dan memvisualisasikan data spasial bergeoreferensi.
• Komponen SIG: Perangkat Keras (Hardware), Perangkat Lunak (Software), Data Spasial, Sumber Daya Manusia (Brainware), dan Metode.
• Tipe Data Spasial:
  - Data Vektor: Disajikan dalam koordinat geometri titik (point), garis (line/polyline), dan area (polygon).
  - Data Raster: Disajikan dalam susunan matriks kisi sel piksel (grid baris dan kolom), seperti foto udara dan citra satelit.`,
    keyPoints: [
      "Rumus Skala: JP / JS (ingat 1 km = 100.000 cm)",
      "Rumus CI: 1/2000 × Penyebut Skala",
      "Data Raster: Berbasis grid piksel; Data Vektor: Titik, Garis, Poligon",
      "8 Unsur Interpretasi: Rona, Ukuran, Bentuk, Tekstur, Pola, Bayangan, Situs, Asosiasi"
    ],
    youtubeQuery: "rumus skala peta kontur interval dan penginderaan jauh sig kelas 10",
    tags: ["Skala Peta", "Kontur Interval", "Penginderaan Jauh", "SIG"]
  },

  // --- KELAS XI ---
  {
    id: "xi-bab-1",
    grade: 11,
    babNumber: 1,
    title: "Posisi Strategis Indonesia & Poros Maritim Dunia",
    subtitle: "Analisis letak astronomis, geografis, geologis, alur kepulauan ALKI, dan geopolitik kemaritiman nusantara.",
    estimatedReadTime: "6 menit baca",
    summary: "Dampak letak astronomis bagi iklim tropis & zona waktu, letak geografis jalur perdagangan dunia, dan 5 pilar poros maritim.",
    fullContent: `1. Letak Astronomis (6°LU–11°LS dan 95°BT–141°BT):
- Beriklim tropis dengan amplitudo suhu harian kecil dan curah hujan tahunan tinggi.
- Terbagi menjadi tiga zona waktu: Waktu Indonesia Barat (WIB / UTC+7), Waktu Indonesia Tengah (WITA / UTC+8), dan Waktu Indonesia Timur (WIT / UTC+9).

2. Letak Geografis (Posisi Silang Dunia):
Terletak di antara Benua Asia dan Benua Australia, serta di antara Samudra Hindia dan Samudra Pasifik.
- Menjadikan perairan Indonesia jalur perdagangan maritim paling ramai di dunia melalui Selat Malaka, Selat Sunda, dan Selat Lombok.
- Ditetapkannya 3 Alur Laut Kepulauan Indonesia (ALKI I, II, III) untuk pelayaran damai internasional.

3. Letak Geologis:
- Terletak pada titik pertemuan tiga lempeng tektonik raksasa: Lempeng Eurasia di utara, Lempeng Indo-Australia di selatan, dan Lempeng Pasifik di timur.
- Dilalui dua jalur pegunungan muda dunia: Sirkum Mediterania dan Sirkum Pasifik (Ring of Fire).
- Menyebabkan tingginya aktivitas vulkanisme (tanah vulkanik subur dan kaya bahan tambang mineral) sekaligus kerentanan gempa bumi dan tsunami.

4. 5 Pilar Poros Maritim Dunia:
1. Pembangunan kembali budaya maritim Indonesia.
2. Menjaga dan mengelola sumber daya kelautan.
3. Pengembangan infrastruktur dan konektivitas maritim (Tol Laut).
4. Diplomasi maritim bersama negara-negara mitra.
5. Pembangunan kekuatan pertahanan dan keamanan maritim.`,
    keyPoints: [
      "Astronomis: Iklim tropis + 3 zona waktu (WIB, WITA, WIT)",
      "Geografis: Posisi silang Asia-Australia & Hindia-Pasifik",
      "Geologis: Pertemuan 3 lempeng aktif & cincin api vulkanik",
      "ALKI: 3 Alur pelayaran internasional nusantara"
    ],
    youtubeQuery: "posisi strategis indonesia sebagai poros maritim dunia geografi kelas 11",
    tags: ["Poros Maritim", "ALKI", "Letak Geologis", "Tol Laut"]
  },
  {
    id: "xi-bab-2",
    grade: 11,
    babNumber: 2,
    title: "Pengelolaan Sumber Daya Alam (SDA) Indonesia",
    subtitle: "Klasifikasi sumber daya alam terbarukan & tak terbarukan, pertambangan strategis, dan AMDAL berwawasan lingkungan.",
    estimatedReadTime: "7 menit baca",
    summary: "Memahami potensi tambang nikel, batubara, minyak bumi, prinsip ekonomi hijau, serta kewajiban AMDAL dalam eksploitasi alam.",
    fullContent: `1. Klasifikasi Sumber Daya Alam (SDA):
• Berdasarkan Sifat Pembaharuan:
  - SDA Terbarukan (Renewable): Air, tanah, udara, hutan, energi surya, biomassa.
  - SDA Tidak Terbarukan (Non-Renewable): Minyak bumi, gas alam, batu bara, bijih nikel, tembaga, emas, bauksit.

2. Potensi Pertambangan Strategis Nasional:
• Nikel: Indonesia memiliki cadangan nikel laterit terbesar di dunia (terkonsentrasi di Morowali Sulteng, Sorowako Sulsel, dan Pulau Obi Malut), bahan baku utama ekosistem baterai kendaraan listrik.
• Batu Bara: Cadangan masif di Kalimantan Timur, Kalimantan Selatan, dan Sumatra Selatan.
• Tembaga & Emas: Tambang Grasberg Freeport di Mimika, Papua Tengah.
• Gas Alam: Blok Masela di Maluku dan Tangguh di Teluk Bintuni, Papua Barat.

3. Prinsip Pengelolaan Berkelanjutan:
Pembangunan yang memenuhi kebutuhan generasi sekarang tanpa mengurangi kemampuan generasi mendatang untuk memenuhi kebutuhannya.
- Penerapan AMDAL (Analisis Mengenai Dampak Lingkungan) sebelum proyek industri dimulai.
- Kebijakan hilirisasi tambang (smelter dalam negeri) agar memberikan nilai tambah ekonomi tinggi.
- Transisi menuju energi baru dan terbarukan (EBT) seperti geotermal/panas bumi, PLTS, dan PLTA.`,
    keyPoints: [
      "Terbarukan vs Tak Terbarukan: Karakteristik regenerasi",
      "Nikel Indonesia: Nomor 1 dunia untuk rantai pasok EV",
      "AMDAL: Kajian dampak lingkungan wajib sebelum operasi industri",
      "Hilirisasi: Pengolahan mineral di dalam negeri untuk nilai tambah"
    ],
    youtubeQuery: "pengelolaan sumber daya alam dan amdal geografi kelas 11",
    tags: ["SDA", "Nikel", "AMDAL", "Pembangunan Berkelanjutan"]
  },
  {
    id: "xi-bab-3",
    grade: 11,
    babNumber: 3,
    title: "Persebaran Flora & Fauna Indonesia & Dunia",
    subtitle: "Garis Wallace-Weber, fauna Asiatis, Peralihan, Australis, 6 bioma dunia, serta strategi konservasi in-situ & ex-situ.",
    estimatedReadTime: "7 menit baca",
    summary: "Mempelajari garis pembagi biogeografi Alfred Russel Wallace dan Max Weber, fauna endemik, serta bioma tundra, taiga, hingga hutan hujan tropis.",
    fullContent: `1. Garis Biogeografi Indonesia:
Alfred Russel Wallace dan Max Weber membagi fauna Indonesia menjadi 3 kawasan:
• Kawasan Asiatis / Oriental (Paparan Sunda: Sumatra, Jawa, Bali, Kalimantan):
  - Mamalia besar: Gajah sumatra, harimau, badak bercula satu, orangutan, banteng.
  - Dibatasi di sebelah timur oleh Garis Wallace.
• Kawasan Peralihan / Wallacea (Sulawesi, Nusa Tenggara, Maluku):
  - Bersifat endemik (hanya ada di situ): Komodo (NTT), Anoa, Babirusa, Burung Maleo (Sulawesi).
  - Dibatasi Garis Wallace di barat dan Garis Weber di timur.
• Kawasan Australis (Paparan Sahul: Papua dan pulau-pulau sekitarnya):
  - Mamalia berkantung dan burung berbulu indah: Kanguru pohon, kuskus bertutul, burung cenderawasih, kasuari.

2. Bioma Dunia (Zona Iklim Terestrial):
• Tundra: Kawasan lingkar kutub beku, didominasi lumut kerak (liken) dan lumut daun, tanah permafrost.
• Taiga (Boreal): Hutan konifer berdaun jarum (pinus, cemara) di belahan bumi utara.
• Hutan Gugur (Deciduous): Daerah 4 musim, daun meranggas saat musim gugur (ek, maple).
• Padang Rumput: Stepa (rumput pendek) dan Sabana (padang rumput diselingi semak dan pohon akasia).
• Gurun: Curah hujan sangat rendah (<250 mm/tahun), tumbuhan sukulen/kaktus xerofit.
• Hutan Hujan Tropis: Kanopi bertingkat lebat, kelembapan tinggi, keanekaragaman hayati tertinggi di bumi.

3. Upaya Konservasi:
- Konservasi In-Situ (di habitat aslinya): Taman Nasional (misal TN Komodo, TN Ujung Kulon), Cagar Alam, Suaka Margasatwa.
- Konservasi Ex-Situ (di luar habitat aslinya): Kebun Binatang, Taman Safari, Kebun Raya Bogor, bank benua plasma nutfah.`,
    keyPoints: [
      "Fauna Asiatis (Mamalia besar), Peralihan (Endemik Komodo/Anoa), Australis (Berkantung & Cenderawasih)",
      "Garis Wallace: Batas barat; Garis Weber: Batas timur",
      "Konservasi In-Situ (habitat asli) vs Ex-Situ (di luar habitat)",
      "Bioma: Tundra, Taiga, Hutan Gugur, Sabana, Gurun, Hutan Tropis"
    ],
    youtubeQuery: "persebaran flora fauna indonesia garis wallace weber geografi kelas 11",
    tags: ["Flora Fauna", "Wallacea", "Bioma", "Konservasi"]
  },

  // --- KELAS XII ---
  {
    id: "xii-bab-1",
    grade: 12,
    babNumber: 1,
    title: "Wilayah, Perwilayahan & Pusat Pertumbuhan",
    subtitle: "Teori Tempat Sentral Walter Christaller, kutub pertumbuhan Perroux, serta hierarki perencanaan tata ruang nasional.",
    estimatedReadTime: "7 menit baca",
    summary: "Membedakan wilayah formal dan fungsional, hierarki K=3, K=4, K=7 Christaller, dan 4 wilayah pembangunan utama di Indonesia.",
    fullContent: `1. Konsep Wilayah (Region):
• Wilayah Formal (Uniform / Homogeneous): Ditandai oleh keseragaman kriteria tertentu, baik kriteria fisik (misal: kawasan karst, lembah persawahan) maupun sosial-budaya.
• Wilayah Fungsional (Nodal): Ditandai oleh adanya interaksi aktif yang berpusat pada satu titik sentral (node) dan jaringan transportasi/komunikasi yang menghubungkannya (misal: Kawasan Jabodetabek).

2. Teori Pusat Pertumbuhan (Growth Pole Theory):
• Francois Perroux (Teori Kutub Pertumbuhan): Pembangunan tidak terjadi di segala tempat secara serentak, melainkan muncul di kutub-kutub pertumbuhan dengan intensitas yang berbeda, lalu memancar ke sekitarnya.
• Teori Tempat Sentral (Walter Christaller):
Menggambarkan tata ruang heksagonal optimal berdasarkan Range (jangkauan) dan Threshold (ambang batas populasi):
- Kasus K=3: Asas Pasar Optimum (konsumen dapat memenuhi kebutuhan dengan jarak tempuh minimal).
- Kasus K=4: Asas Transportasi / Lalu Lintas Optimum (memaksimalkan jalur rute transportasi langsung antar kota).
- Kasus K=7: Asas Administrasi Pemerintahan Optimum (seluruh wilayah bawahan tercakup dalam satu komando administratif).

3. Wilayah Pembangunan Utama Indonesia:
- Wilayah Pembangunan Utama A: Berpusat di Kota Medan (Sumatra bagian utara).
- Wilayah Pembangunan Utama B: Berpusat di Kota Jakarta (Sumatra bagian selatan, Jawa Barat, Kalimantan Barat).
- Wilayah Pembangunan Utama C: Berpusat di Kota Surabaya (Jawa Tengah, Jawa Timur, Bali, Kalimantan Selatan/Tengah/Timur).
- Wilayah Pembangunan Utama D: Berpusat di Kota Makassar (Sulawesi, Maluku, Nusa Tenggara, Papua).`,
    keyPoints: [
      "Wilayah Formal (Homogenitas) vs Wilayah Fungsional (Nodal/Interaksi)",
      "Christaller: K=3 (Pasar), K=4 (Lalu Lintas), K=7 (Administrasi)",
      "Pusat Utama Indonesia: Medan (A), Jakarta (B), Surabaya (C), Makassar (D)"
    ],
    youtubeQuery: "teori tempat sentral christaller dan pusat pertumbuhan geografi kelas 12",
    tags: ["Pusat Pertumbuhan", "Christaller", "Wilayah Formal", "Wilayah Nodal"]
  },
  {
    id: "xii-bab-2",
    grade: 12,
    babNumber: 2,
    title: "Interaksi Keruangan Desa & Kota",
    subtitle: "Struktur morfologi kota menurut Burgess, Hoyt, Harris-Ullman, klasifikasi desa, dan dinamika urbanisasi.",
    estimatedReadTime: "7 menit baca",
    summary: "Memahami Teori Konsentris, Sektoral, Inti Berganda, dampak positif-negatif interaksi desa-kota, serta fenomena rural-urban fringe.",
    fullContent: `1. Tipologi dan Perkembangan Desa:
• Desa Swadaya: Tradisional, terisolasi, kebutuhan hidup dipenuhi sendiri secara subsisten, adat istiadat sangat ketat.
• Desa Swakarya: Sedang mengalami transisi, mulai mengenal teknologi pertanian dan menjual surplus panen ke luar.
• Desa Swasembada: Modern, tingkat pendidikan tinggi, mata pencaharian beragam, mobilitas transportasi sangat lancar.

2. Teori Struktur Keruangan Kota:
• Teori Konsentris (Ernest W. Burgess, 1925):
Kota berkembang melingkar keluar dari satu titik pusat:
Zona 1: Daerah Pusat Kegiatan (CBD)
Zona 2: Zona Transisi (pabrik tua, kawasan permukiman kumuh)
Zona 3: Zona Permukiman Kelas Buruh / Pekerja
Zona 4: Zona Permukiman Kelas Menengah
Zona 5: Zona Penglaju (Komuter / Suburb)

• Teori Sektoral (Homer Hoyt, 1939):
Pola tata guna lahan kota berkembang menurut sektor-sektor jalur rute transportasi utama (jalan raya dan rel kereta api) memanjang keluar dari CBD.

• Teori Inti Berganda (Chauncy Harris & Edward Ullman, 1945):
Kota modern tidak memiliki satu CBD tunggal, melainkan berkembang dari beberapa pusat nukleus mandiri yang memiliki fungsi spesifik (kawasan pelabuhan, sentra industri, universitas, perumahan elit).

3. Dampak Interaksi Desa - Kota:
• Bagi Desa: Masuknya modal dan teknologi modern; namun dapat memicu fenomena 'rural brain drain' (pemuda terdidik pindah ke kota) dan kekurangan tenaga kerja petani.
• Bagi Kota: Mendapat pasokan bahan pangan mentah dan tenaga kerja; namun memicu kemacetan, lonjakan permukiman kumuh (slum area), dan polusi jika tidak diimbangi daya dukung kota.`,
    keyPoints: [
      "Desa: Swadaya (tradisional) -> Swakarya (transisi) -> Swasembada (modern)",
      "Burgess: Konsentris 5 lingkaran",
      "Hoyt: Sektoral mengikuti jalur transportasi",
      "Harris-Ullman: Inti Berganda (Multi-nuclei)"
    ],
    youtubeQuery: "teori konsentris sektoral inti berganda interaksi desa kota geografi kelas 12",
    tags: ["Desa Kota", "Burgess", "Hoyt", "Harris Ullman", "Urbanisasi"]
  },
  {
    id: "xii-bab-3",
    grade: 12,
    babNumber: 3,
    title: "Perhitungan Geografis Interaksi Wilayah",
    subtitle: "Rumus interaksi gravitasi Reilly, Teori Titik Henti Carrothers, dan Indeks Konektivitas Kansky.",
    estimatedReadTime: "8 menit baca",
    summary: "Menguasai 3 rumus kuantitatif penting geografi yang selalu keluar dalam ujian seleksi masuk perguruan tinggi dan asesmen sekolah.",
    fullContent: `1. Hukum Gravitasi Interaksi Wilayah (W.J. Reilly):
Diadaptasi dari hukum gravitasi Newton untuk mengukur kekuatan interaksi ekonomi antar dua wilayah.
Rumus:
  I_AB = k × (P_A × P_B) / (d_AB)²
Keterangan:
• I_AB = Kekuatan interaksi antar kota A dan kota B
• P_A = Jumlah penduduk kota A
• P_B = Jumlah penduduk kota B
• d_AB = Jarak mutlak antara kota A dan kota B
• k = Konstanta empiris (biasanya bernilai 1)

2. Teori Titik Henti (Breaking Point Theory - William J. Reilly & Carrothers):
Digunakan untuk menentukan lokasi geografis yang ideal dan adil dalam menempatkan fasilitas pelayanan umum (seperti pasar induk, rumah sakit, SPBU, atau sekolah) di antara dua pusat populasi berbeda ukuran.
Rumus:
  D_AB = d / (1 + √(P_besar / P_kecil))
Keterangan:
• D_AB = Jarak lokasi titik henti diukur DARI KOTA DENGAN POPULASI LEBIH KECIL!
• d = Jarak spasial total kedua kota
• P_besar = Jumlah penduduk kota yang lebih banyak
• P_kecil = Jumlah penduduk kota yang lebih sedikit

3. Indeks Konektivitas Jaringan Jalan (Kansky):
Mengukur potensi interaksi berdasarkan kelengkapan jaringan jalan penghubung.
Rumus:
  β (Beta) = e / v
Keterangan:
• e = Jumlah ruas jalan (edges)
• v = Jumlah kota / simpul (vertices)
Semakin tinggi nilai beta (β > 1), semakin tinggi konektivitas dan kemudahan pergerakan barang dan jasa.`,
    keyPoints: [
      "Hukum Reilly: I = (Pa × Pb) / d² (berbanding lurus populasi, terbalik kuadrat jarak)",
      "Titik Henti: D = Jarak / (1 + √(P_besar / P_kecil)) DIUKUR DARI KOTA KECIL",
      "Indeks Konektivitas: Beta = Jaringan jalan (e) / Jumlah kota (v)"
    ],
    youtubeQuery: "rumus gravitasi reilly dan teori titik henti geografi kelas 12",
    tags: ["Gravitasi Reilly", "Titik Henti", "Indeks Konektivitas", "Rumus Geografi"]
  },
  {
    id: "xii-bab-4",
    grade: 12,
    babNumber: 4,
    title: "Negara Maju & Berkembang di Era Globalisasi",
    subtitle: "Indikator IPM, pendapatan GNI, dinamika geopolitik, dan transformasi keruangan pedesaan-perkotaan global.",
    estimatedReadTime: "6 menit baca",
    summary: "Membedakan karakteristik ekonomi dan demografi negara maju vs berkembang, serta peran organisasi ekonomi dunia.",
    fullContent: `1. Indikator Klasifikasi Negara:
• Indikator Kuantitatif:
  - Pendapatan Nasional Bruto (GNI) per kapita: Negara maju > USD 13.000 per kapita per tahun.
  - Angka Pertumbuhan Penduduk: Rendah di negara maju (< 1% atau nol/negatif), tinggi di negara berkembang.
  - Angka Kematian Bayi (Infant Mortality Rate): Sangat rendah di negara maju berkat fasilitas sanitasi dan medis modern.
• Indikator Kualitatif:
  - Tingkat Pendidikan dan Melek Huruf: Di negara maju mencapai >99%.
  - Mata Pencaharian: Negara maju didominasi sektor tersier (jasa profesional, keuangan) dan kuartener (penelitian, IT); negara berkembang didominasi sektor primer (pertanian subsisten, pertambangan mentah).
  - Indeks Pembangunan Manusia (IPM / HDI): Negara maju memiliki skor kategori Very High Human Development (IPM > 0.80).

2. Persebaran Wilayah:
- Negara Maju: Terkonsentrasi di Benua Eropa (Jerman, Inggris, Prancis, Norwegia), Amerika Utara (AS, Kanada), Asia Timur (Jepang, Korea Selatan, Singapura), serta Australia dan Selandia Baru.
- Negara Berkembang: Tersebar di sebagian besar Benua Asia, Afrika, dan Amerika Latin.

3. Kerja Sama Global & Globalisasi:
Peran lembaga multilateral dunia seperti WTO, World Bank, IMF, ASEAN, dan G20 dalam fasilitasi perdagangan bebas, transfer teknologi, serta menjaga stabilitas ekonomi global di tengah tantangan krisis iklim.`,
    keyPoints: [
      "Negara Maju: GNI tinggi, IPM > 0.80, dominasi sektor jasa & riset berteknologi tinggi",
      "Negara Berkembang: Didominasi sektor pertanian agraris dan ekspor bahan mentah",
      "IPM: 3 Dimensi (Kesehatan, Pendidikan, Standar Hidup Layak)"
    ],
    youtubeQuery: "karakteristik indikator negara maju dan berkembang geografi kelas 12",
    tags: ["Negara Maju", "Negara Berkembang", "IPM", "GNI", "Globalisasi"]
  }
];
