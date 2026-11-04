export interface Question {
  id: number;
  grade: 10 | 11 | 12;
  topic: string;
  type: 'pg' | 'matching' | 'chart';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  badge?: string;
}

export const bankQuestions: Question[] = [
  // --- 1 to 50 ---
  {
    id: 1,
    grade: 10,
    topic: "Kelas X - Konsep Dasar Geografi",
    type: "pg",
    question: "Pembangunan villa di kawasan Puncak Bogor sering kali menyebabkan banjir bandang di kawasan hilir Jakarta. Konsep esensial geografi yang paling tepat untuk menganalisis keterkaitan fenomena hulu-hilir ini adalah...",
    options: ["Konsep Lokasi", "Konsep Keterkaitan Keruangan", "Konsep Morfologi", "Konsep Aglomerasi", "Konsep Jarak Relatif"],
    answer: 1,
    explanation: "Pembahasan: Keterkaitan keruangan menyoroti hubungan sebab-akibat antarwilayah, di mana aktivitas perubahan penggunaan lahan di hulu (Puncak) berdampak langsung secara fisik hidrologis ke hilir (Jakarta)."
  },
  {
    id: 2,
    grade: 10,
    topic: "Kelas X - Pendekatan Geografi",
    type: "pg",
    question: "Penelitian mengenai dampak erupsi Gunung Merapi terhadap tingkat kesuburan tanah pertanian, pola permukiman, dan perubahan mata pencaharian penduduk sekitar lereng paling tepat menggunakan pendekatan...",
    options: ["Pendekatan Keruangan murni", "Pendekatan Kelingkungan (Ekologi)", "Pendekatan Kompleks Wilayah", "Pendekatan Historis", "Pendekatan Kartografis"],
    answer: 2,
    explanation: "Pembahasan: Pendekatan kompleks wilayah memadukan analisis keruangan (persebaran erupsi) dan ekologi (interaksi manusia dengan alam lereng) secara komprehensif untuk merumuskan solusi regional yang terintegrasi."
  },
  {
    id: 3,
    grade: 10,
    topic: "Kelas X - Prinsip Geografi",
    type: "pg",
    question: "Penyebaran barang tambang batu bara di pulau Kalimantan terkonsentrasi di daerah cekungan sedimen tertentu dan tidak ditemukan di setiap wilayah. Prinsip geografi yang tergambar dari fenomena tersebut adalah...",
    options: ["Prinsip Interelasi", "Prinsip Deskripsi", "Prinsip Korologi", "Prinsip Persebaran (Distribusi)", "Prinsip Morfologi"],
    answer: 3,
    explanation: "Pembahasan: Prinsip persebaran menjelaskan bahwa gejala atau fenomena geosfer, baik fisik maupun biotik, tersebar secara tidak merata di permukaan bumi."
  },
  {
    id: 4,
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
    id: 5,
    grade: 10,
    topic: "Kelas X - Objek Studi Geografi",
    type: "pg",
    question: "Fenomena El Nino yang memicu musim kemarau berkepanjangan dan kekeringan lahan di berbagai wilayah Indonesia dikaji dalam objek material geografi pada lapisan...",
    options: ["Litosfer", "Atmosfer", "Biosfer", "Antroposfer", "Pedosfer"],
    answer: 1,
    explanation: "Pembahasan: Objek material atmosfer mencakup seluruh dinamika udara, cuaca, iklim, pergerakan massa udara, serta osilasi iklim global seperti El Nino dan La Nina."
  },
  {
    id: 6,
    grade: 10,
    topic: "Kelas X - Analisis Grafik Iklim",
    type: "chart",
    question: "Grafik curah hujan bulanan di suatu wilayah menunjukkan puncak curah hujan tertinggi terjadi pada bulan Desember-Januari (>300 mm), sementara suhu udara rata-rata konstan tinggi (26°C - 28°C) sepanjang tahun. Ciri iklim wilayah tersebut adalah...",
    options: [
      "Iklim Tundra Kutub dengan permafrost beku",
      "Iklim Hujan Tropis (Koppen tipe Af/Am) dengan pengaruh monsun basah",
      "Iklim Gurun Pasir Kontinental dengan amplitudo suhu ekstrem",
      "Iklim Subtropis Kering Laut Tengah",
      "Iklim Sedang Kontinental Maritim"
    ],
    answer: 1,
    explanation: "Pembahasan: Wilayah tropis di dekat ekuator memiliki suhu hangat konstan sepanjang tahun dan pola curah hujan musiman yang sangat dipengaruhi oleh sirkulasi angin muson barat."
  },
  {
    id: 7,
    grade: 10,
    topic: "Kelas X - Pemetaan & Skala",
    type: "pg",
    question: "Jarak antara kota A dan B pada peta bersekala 1 : 200.000 adalah 4 cm. Jarak sebenarnya kedua kota tersebut di lapangan adalah...",
    options: ["4 km", "8 km", "20 km", "40 km", "80 km"],
    answer: 1,
    explanation: "Pembahasan: Rumus Jarak Sebenarnya (JS) = Jarak pada Peta (JP) × Penyebut Skala = 4 cm × 200.000 = 800.000 cm = 8 km."
  },
  {
    id: 8,
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
    id: 9,
    grade: 10,
    topic: "Kelas X - Sistem Informasi Geografis (SIG)",
    type: "pg",
    question: "Dalam analisis SIG, metode tumpang susun (overlay) antara peta jenis tanah, peta kemiringan lereng, dan peta intensitas curah hujan paling umum digunakan untuk menghasilkan peta...",
    options: [
      "Tingkat kerawanan bencana tanah longsor",
      "Jalur evakuasi gelombang tsunami pesisir",
      "Sebaran penduduk miskin perkotaan",
      "Estimasi cadangan minyak bumi lepas pantai",
      "Jangkauan sinyal menara telekomunikasi nirkabel"
    ],
    answer: 0,
    explanation: "Pembahasan: Faktor kemiringan lereng curam, jenis tanah yang mudah jenuh air, dan curah hujan tinggi adalah tiga parameter utama penentu zonasi potensi bencana longsor."
  },
  {
    id: 10,
    grade: 10,
    topic: "Kelas X - Penelitian Geografi",
    type: "pg",
    question: "Langkah ilmiah paling awal yang harus dilakukan oleh seorang peneliti sebelum menentukan rumusan masalah dalam penelitian geografi adalah...",
    options: [
      "Melakukan uji hipotesis secara statistik",
      "Menyusun simpulan dan saran rekomendasi",
      "Melakukan observasi pendahuluan dan identifikasi fenomena riil geosfer",
      "Mempublikasikan laporan penelitian ke jurnal",
      "Menyebarkan kuesioner ke responden luas"
    ],
    answer: 2,
    explanation: "Pembahasan: Sebelum merumuskan masalah dan hipotesis, peneliti wajib melakukan pengamatan lapangan (pra-observasi) untuk memahami konteks masalah riil di lapangan."
  },
  {
    id: 11,
    grade: 11,
    topic: "Kelas XI - Posisi Strategis Indonesia",
    type: "pg",
    question: "Letak astronomis Indonesia pada 6°LU - 11°LS dan 95°BT - 141°BT memberikan keuntungan ekologis bagi kehidupan berupa...",
    options: [
      "Wilayah Indonesia terbagi menjadi empat daerah waktu berbeda",
      "Mendapat penyinaran matahari sepanjang tahun dan keanekaragaman hayati (biodiversitas) yang sangat tinggi",
      "Suhu udara rata-rata sangat dingin sepanjang tahun",
      "Bebas sepenuhnya dari wilayah lempeng tektonik aktif",
      "Jumlah persebaran penduduk yang selalu merata di seluruh pulau"
    ],
    answer: 1,
    explanation: "Pembahasan: Berada di sabuk tropis memastikan suhu hangat, curah hujan tinggi, dan hutan hujan tropis lebat yang menjadi rumah bagi keanekaragaman flora dan fauna terkaya di dunia."
  },
  {
    id: 12,
    grade: 11,
    topic: "Kelas XI - Letak Geologis",
    type: "pg",
    question: "Pertemuan tiga lempeng tektonik utama dunia (Eurasia, Indo-Australia, dan Pasifik) di Indonesia menyebabkan terbentuknya banyak gunung api aktif. Manfaat positif jangka panjang dari kondisi geologis ini adalah...",
    options: [
      "Bebas dari risiko gelombang tsunami di pesisir",
      "Tanah menjadi sangat subur akibat pelapukan abu dan material vulkanik kaya mineral",
      "Ketersediaan air tanah menjadi sangat langka",
      "Suhu udara di dataran rendah menjadi sangat sejuk",
      "Luas daratan pulau mengalami penyusutan drastis setiap dekade"
    ],
    answer: 1,
    explanation: "Pembahasan: Material piroklastik dan abu vulkanik mengandung berbagai unsur hara mineral penting yang menyuburkan lahan pertanian setelah mengalami pelapukan bertahun-tahun."
  },
  {
    id: 13,
    grade: 11,
    topic: "Kelas XI - Pengelolaan SDA",
    type: "pg",
    question: "Penerapan prinsip pembangunan berkelanjutan (sustainable development) dalam pemanfaatan sumber daya kehutanan dilakukan dengan cara...",
    options: [
      "Melakukan penebangan habis (clear cutting) untuk perluasan industri kayu",
      "Menerapkan sistem tebang pilih tanam Indonesia (TPTI) dan reboisasi terencana",
      "Mengeksploitasi kayu keras bernilai tinggi tanpa batas kuota tahunan",
      "Mengubah status seluruh hutan konservasi menjadi jalan tol lintas provinsi",
      "Melarang masyarakat lokal mengambil hasil hutan bukan kayu (HHBK)"
    ],
    answer: 1,
    explanation: "Pembahasan: Sistem Tebang Pilih Tanam Indonesia (TPTI) dan penanaman kembali menjaga siklus regenerasi pohon dan kelestarian ekosistem hutan untuk generasi masa depan."
  },
  {
    id: 14,
    grade: 11,
    topic: "Kelas XI - Flora & Fauna",
    type: "matching",
    question: "Pilihlah pengelompokan fauna asli Indonesia beserta tipe persebarannya yang paling tepat:",
    options: [
      "Gajah Sumatra, Badak Jawa, Orangutan - Tipe Asiatis (Fauna Dangkalan Sunda)",
      "Komodo, Anoa, Babirusa - Tipe Australis (Fauna Dangkalan Sahul)",
      "Kanguru Pohon, Burung Cenderawasih - Tipe Asiatis",
      "Burung Maleo, Badak Bercula Satu - Tipe Peralihan Wallacea",
      "Kasuari, Bekantan, Komodo - Tipe Oriental Sunda"
    ],
    answer: 0,
    explanation: "Pembahasan: Mamalia bertubuh besar seperti gajah, badak, harimau, dan orangutan adalah fauna khas Asiatis di bagian barat Indonesia yang dibatasi garis Wallace."
  },
  {
    id: 15,
    grade: 11,
    topic: "Kelas XI - Garis Wallace & Weber",
    type: "pg",
    question: "Garis khayal biogeografi yang membatasi wilayah fauna tipe peralihan (Wallacea/Sulawesi & Nusa Tenggara) dengan wilayah fauna tipe Australis (Papua & Maluku) adalah...",
    options: ["Garis Wallace", "Garis Weber", "Garis Khatulistiwa", "Garis Isobar", "Garis Kontur"],
    answer: 1,
    explanation: "Pembahasan: Garis Weber adalah garis batas biogeografi timur yang memisahkan wilayah peralihan kepulauan Wallacea dengan fauna kawasan Papua/Sahul (Australis)."
  },
  {
    id: 16,
    grade: 11,
    topic: "Kelas XI - Bioma Dunia",
    type: "pg",
    question: "Bioma terestrial di kawasan subarktik yang didominasi oleh hutan pohon berdaun jarum (konifer/pinus) dan dihuni satwa seperti serigala kutub dan beruang cokelat adalah...",
    options: ["Bioma Tundra", "Bioma Taiga (Hutan Boreal)", "Bioma Hutan Gugur Iklim Sedang", "Bioma Sabana Tropis", "Bioma Gurun Gersang"],
    answer: 1,
    explanation: "Pembahasan: Taiga atau boreal forest membentang di Rusia utara, Skandinavia, dan Kanada, didominasi vegetasi konifer yang tahan terhadap musim dingin panjang."
  },
  {
    id: 17,
    grade: 11,
    topic: "Kelas XI - Konservasi Alam",
    type: "pg",
    question: "Kawasan suaka alam yang memiliki kekhasan tumbuhan, satwa, dan ekosistem unik yang dibiarkan berkembang secara alami dan dilindungi ketat untuk tujuan penelitian ilmiah disebut...",
    options: ["Cagar Alam", "Taman Wisata Alam Komersial", "Hutan Produksi Terbatas", "Kawasan Agrowisata", "Hutan Tanaman Industri"],
    answer: 0,
    explanation: "Pembahasan: Cagar alam dikhususkan untuk perlindungan ketat keanekaragaman hayati dan plasma nutfah tanpa adanya aktivitas rekreasi komersial."
  },
  {
    id: 18,
    grade: 11,
    topic: "Kelas XI - Kependudukan",
    type: "chart",
    question: "Suatu negara yang memiliki piramida penduduk berbentuk stasioner ('granat') dengan proporsi usia muda dan dewasa yang hampir seimbang mencerminkan kondisi...",
    options: [
      "Tingkat kelahiran dan kematian sama-sama rendah dengan pertumbuhan penduduk relatif stabil",
      "Angka kelahiran sangat tinggi dengan ledakan penduduk bayi tak terkendali",
      "Angka kematian bayi yang sangat tinggi pada kelompok usia dini",
      "Ketiadaan populasi penduduk usia lanjut",
      "Tingkat emigrasi keluar yang jauh melampaui kelahiran"
    ],
    answer: 0,
    explanation: "Pembahasan: Piramida stasioner umumnya dijumpai pada negara maju di mana fasilitas kesehatan dan kesadaran KB tinggi, sehingga angka kelahiran dan kematian seimbang dan stabil."
  },
  {
    id: 19,
    grade: 11,
    topic: "Kelas XI - Ketahanan Pangan",
    type: "pg",
    question: "Upaya meningkatkan hasil produksi pertanian pada lahan sawah yang sudah ada melalui penggunaan bibit unggul, pemupukan berimbang, dan irigasi teknis teratur disebut...",
    options: ["Intensifikasi Pertanian", "Ekstensifikasi Lahan Gambut", "Diversifikasi Pangan Lokal", "Reboisasi Lereng", "Monokultur Skala Besar"],
    answer: 0,
    explanation: "Pembahasan: Intensifikasi pertanian (panca usaha tani) berfokus memaksimalkan produktivitas per hektar lahan yang ada tanpa perlu membuka lahan hutan baru."
  },
  {
    id: 20,
    grade: 11,
    topic: "Kelas XI - Mitigasi Bencana",
    type: "pg",
    question: "Berikut ini yang merupakan contoh tindakan mitigasi struktural dalam menghadapi potensi gempa bumi adalah...",
    options: [
      "Mengadakan sosialisasi dan simulasi evakuasi berkala di sekolah",
      "Membangun gedung sekolah dan perkantoran menggunakan konstruksi tahan gempa berstandar SNI",
      "Membuat poster infografis penyelamatan diri saat bencana",
      "Membentuk tim relawan siaga bencana kelurahan",
      "Menyusun regulasi tata ruang zonasi gempa"
    ],
    answer: 1,
    explanation: "Pembahasan: Mitigasi struktural melibatkan rekayasa fisik/konstruksi teknik sipil, seperti pembangunan struktur rumah/gedung tahan gempa."
  },
  {
    id: 21,
    grade: 12,
    topic: "Kelas XII - Wilayah & Perwilayahan",
    type: "pg",
    question: "Perwilayahan formal (uniform/homogenous region) dibentuk atas dasar kesamaan kriteria tertentu, seperti...",
    options: [
      "Arus komuter pekerja harian dari kota satelit ke pusat bisnis",
      "Karakteristik fisik bentang alam yang seragam, seperti kawasan karst pegunungan kapur",
      "Jaringan trayek angkutan umum lintas batas kabupaten",
      "Penyebaran sinyal pemancar televisi swasta",
      "Interaksi ekonomi transaksi perbankan antar kota"
    ],
    answer: 1,
    explanation: "Pembahasan: Wilayah formal didasarkan pada homogenitas fisik (iklim, morfologi, tanah) atau sosial-ekonomi (wilayah bahasa, wilayah pertanian padi sawah)."
  },
  {
    id: 22,
    grade: 12,
    topic: "Kelas XII - Pusat Pertumbuhan",
    type: "pg",
    question: "Dalam Teori Tempat Sentral yang dicetuskan oleh Walter Christaller, tempat sentral yang berhierarki 4 (K=4) berfungsi sebagai prinsip...",
    options: [
      "Situasi pasar optimum dengan jangkauan barang maksimal",
      "Situasi lalu lintas optimum (traffic principle) dengan kemudahan konektivitas rute transportasi",
      "Situasi administrasi pemerintahan optimum (administrative principle)",
      "Kawasan industri berat berskala ekspor",
      "Sentra pertanian pangan swasembada"
    ],
    answer: 1,
    explanation: "Pembahasan: Christaller merumuskan K=3 sebagai asas pasar optimum, K=4 sebagai asas transportasi/lalu lintas optimum, dan K=7 sebagai asas administrasi optimum."
  },
  {
    id: 23,
    grade: 12,
    topic: "Kelas XII - Teori Titik Henti Carrothers",
    type: "pg",
    question: "Kota X memiliki penduduk 200.000 jiwa dan Kota Y memiliki penduduk 800.000 jiwa. Jarak kedua kota adalah 30 km. Lokasi titik henti yang ideal untuk mendirikan rumah sakit rujukan adalah...",
    options: [
      "10 km diukur dari Kota X",
      "15 km diukur dari Kota X",
      "20 km diukur dari Kota X",
      "10 km diukur dari Kota Y",
      "25 km diukur dari Kota Y"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Titik Henti: D_AB = Jarak / (1 + √(P_besar / P_kecil)) = 30 / (1 + √(800.000 / 200.000)) = 30 / (1 + √4) = 30 / (1 + 2) = 10 km diukur dari kota yang berpenduduk lebih kecil (Kota X)."
  },
  {
    id: 24,
    grade: 12,
    topic: "Kelas XII - Struktur Ruang Kota",
    type: "matching",
    question: "Pilihlah pasangan teori pola struktur ruang kota beserta tokoh penemunya yang paling tepat:",
    options: [
      "Teori Konsentris - Ernest W. Burgess (kota berkembang membentuk lingkaran melingkar keluar dari CBD)",
      "Teori Sektoral - Chauncy Harris & Edward Ullman (berkembang mengikuti rel kereta secara melingkar)",
      "Teori Inti Berganda - Homer Hoyt (kota hanya memiliki satu pusat tunggal yang dominan)",
      "Teori Konsentris - Walter Christaller (kota berbentuk jaring heksagonal)",
      "Teori Ketinggian Bangunan - Francois Perroux (kota bertingkat ke atas)"
    ],
    answer: 0,
    explanation: "Pembahasan: Teori Konsentris (Concentric Zone Model) dicetuskan oleh sosiolog Ernest W. Burgess pada tahun 1925 berdasarkan studi ruang kota Chicago."
  },
  {
    id: 25,
    grade: 12,
    topic: "Kelas XII - Interaksi Desa Kota",
    type: "pg",
    question: "Fenomena berkurangnya generasi muda terdidik di pedesaan akibat migrasi permanen ke kota besar untuk mencari pekerjaan jasa/industri dikenal dengan istilah...",
    options: [
      "Rural brain drain (pengurasan tenaga terdidik desa)",
      "Aglomerasi komersial desa",
      "Involusi pertanian tradisional",
      "Gentrifikasi kawasan perkebunan",
      "Pemberdayaan masyarakat mandiri"
    ],
    answer: 0,
    explanation: "Pembahasan: Rural brain drain menyebabkan pedesaan kehilangan inovator muda, sehingga sektor pertanian di desa banyak dikelola oleh generasi lanjut usia."
  },
  {
    id: 26,
    grade: 12,
    topic: "Kelas XII - Negara Maju & Berkembang",
    type: "pg",
    question: "Salah satu indikator komposit yang digunakan oleh UNDP untuk mengukur kualitas dan kesejahteraan hidup manusia di suatu negara adalah...",
    options: [
      "Indeks Pembangunan Manusia (IPM / Human Development Index)",
      "Jumlah cadangan devisa emas bank sentral",
      "Luas kedaulatan wilayah laut zona ekonomi eksklusif",
      "Jumlah armada kapal tempur militer",
      "Rasio kepemilikan telepon pintar per kepala keluarga"
    ],
    answer: 0,
    explanation: "Pembahasan: IPM mengombinasikan tiga dimensi utama: umur panjang dan hidup sehat (angka harapan hidup), pengetahuan (rata-rata lama sekolah), dan standar hidup layak (pengeluaran per kapita)."
  },
  {
    id: 27,
    grade: 10,
    topic: "Kelas X - Konsep Esensial Geografi",
    type: "pg",
    question: "Kawasan industri manufaktur seperti MM2100 di Cikarang mengelompokkan pabrik otomotif, elektronik, dan pergudangan dalam satu zona terpadu. Konsep geografi yang mendasari fenomena ini adalah...",
    options: ["Konsep Aglomerasi", "Konsep Morfologi", "Konsep Jarak Mutlak", "Konsep Keterjangkauan", "Konsep Nilai Guna"],
    answer: 0,
    explanation: "Pembahasan: Konsep aglomerasi menjelaskan kecenderungan pengelompokan aktivitas ekonomi dan permukiman pada wilayah tertentu untuk efisiensi biaya dan infrastruktur bersama."
  },
  {
    id: 28,
    grade: 10,
    topic: "Kelas X - Pendekatan Keruangan",
    type: "pg",
    question: "Pola persebaran permukiman suku Dayak di pedalaman Kalimantan yang cenderung memanjang linier mengikuti tepian aliran sungai Kapuas dikaji dengan pendekatan...",
    options: ["Pendekatan Keruangan (Spatial Approach)", "Pendekatan Historis Komparatif", "Pendekatan Ekologi Murni", "Pendekatan Perilaku Politik", "Pendekatan Sosiologis"],
    answer: 0,
    explanation: "Pembahasan: Pendekatan keruangan menganalisis pola, bentuk sebaran, dan variasi spasial objek buatan manusia di permukaan bumi."
  },
  {
    id: 29,
    grade: 10,
    topic: "Kelas X - Prinsip Korologi",
    type: "pg",
    question: "Kajian fenomena banjir rob di pesisir utara Semarang yang memaparkan data ketinggian pasang air laut, peta sebaran genangan, analisis amblesan tanah (land subsidence), serta dampak sosialnya merupakan penerapan prinsip...",
    options: ["Prinsip Persebaran", "Prinsip Interelasi", "Prinsip Deskripsi", "Prinsip Korologi", "Prinsip Morfometri"],
    answer: 3,
    explanation: "Pembahasan: Prinsip korologi memadukan ketiga prinsip lainnya (persebaran, keterkaitan sebab-akibat, dan penjelasan data/peta) secara komprehensif dalam satu kesatuan ruang."
  },
  {
    id: 30,
    grade: 10,
    topic: "Kelas X - Peta & Skala",
    type: "pg",
    question: "Sebuah peta kontur memiliki skala 1 : 100.000. Jika jarak titik C ke titik D pada peta tersebut terukur 5 cm, maka jarak sebenarnya di bumi adalah...",
    options: ["0.5 km", "5 km", "50 km", "500 km", "5.000 km"],
    answer: 1,
    explanation: "Pembahasan: JS = 5 cm × 100.000 = 500.000 cm = 5.000 meter = 5 kilometer."
  },
  {
    id: 31,
    grade: 10,
    topic: "Kelas X - Penginderaan Jauh",
    type: "pg",
    question: "Ukuran objek terkecil di permukaan bumi yang masih dapat dikenali dan dibedakan pada citra penginderaan jauh disebut...",
    options: ["Resolusi Spasial", "Resolusi Spektral", "Resolusi Temporal", "Resolusi Radiometrik", "Skala Kartometrik"],
    answer: 0,
    explanation: "Pembahasan: Resolusi spasial menggambarkan tingkat ketajaman detail citra satelit; semakin kecil ukuran piksel tanahnya, semakin tinggi resolusi spasialnya."
  },
  {
    id: 32,
    grade: 10,
    topic: "Kelas X - SIG",
    type: "pg",
    question: "Format data spasial dalam Sistem Informasi Geografis yang merepresentasikan permukaan bumi dalam bentuk matriks sel-sel piksel baris dan kolom disebut...",
    options: ["Data Vektor", "Data Raster", "Data Atribut", "Data Tabular Relasional", "Data Poligon Titik"],
    answer: 1,
    explanation: "Pembahasan: Data raster tersusun dari susunan kotak piksel (grid), contohnya seperti citra satelit dan foto udara digital; sedangkan vektor menggunakan koordinat titik, garis, dan poligon."
  },
  {
    id: 33,
    grade: 11,
    topic: "Kelas XI - Posisi Strategis Indonesia",
    type: "pg",
    question: "Salah satu tantangan atau kerentanan geopolitik yang dihadapi Indonesia akibat posisi silang strategis jalur pelayaran internasional adalah...",
    options: [
      "Potensi penyelundupan komoditas ilegal dan ancaman pelanggaran wilayah kedaulatan laut",
      "Tidak adanya kapal dagang asing yang melintasi perairan Indonesia",
      "Terisolasinya Indonesia dari hubungan diplomasi internasional",
      "Iklim tropis yang menghalangi ekspor hasil perkebunan",
      "Hilangnya potensi sumber daya perikanan tangkap"
    ],
    answer: 0,
    explanation: "Pembahasan: Jalur perdagangan ALKI yang sangat ramai menimbulkan kerentanan keamanan maritim seperti penyelundupan, penangkapan ikan ilegal (IUU fishing), dan polusi tumpahan minyak."
  },
  {
    id: 34,
    grade: 11,
    topic: "Kelas XI - SDA Tambang",
    type: "pg",
    question: "Daerah di Indonesia yang terkenal sebagai sentra deposit cadangan bijih nikel terbesar di dunia yang kini menjadi pusat hilirisasi baterai kendaraan listrik adalah...",
    options: [
      "Morowali (Sulawesi Tengah) dan Sorowako (Sulawesi Selatan)",
      "Cepu (Blora) dan Plaju (Palembang)",
      "Ombilin (Sawahlunto) dan Bukit Asam (Tanjung Enim)",
      "Tembagapura (Mimika) dan Ertsberg (Papua)",
      "Bontang (Kaltim) dan Arun (Aceh)"
    ],
    answer: 0,
    explanation: "Pembahasan: Kawasan Sulawesi bagian tengah dan tenggara (Morowali, Kolaka, Sorowako) memiliki endapan nikel laterit terbesar di dunia."
  },
  {
    id: 35,
    grade: 11,
    topic: "Kelas XI - Flora & Fauna",
    type: "pg",
    question: "Tumbuhan parasit langka endemik yang hidup menempel pada inang Tetrastigma dan menjadi bunga langka nasional berukuran raksasa adalah...",
    options: ["Rafflesia arnoldii", "Kantong Semar (Nepenthes)", "Anggrek Hitam Papua", "Kayu Cendana", "Edelweis Jawa"],
    answer: 0,
    explanation: "Pembahasan: Rafflesia arnoldii merupakan bunga parasit raksasa tanpa akar, batang, dan daun sejati yang ditemukan pertama kali di Bengkulu oleh Thomas Stamford Raffles dan Dr. Joseph Arnold."
  },
  {
    id: 36,
    grade: 11,
    topic: "Kelas XI - Kependudukan",
    type: "pg",
    question: "Angka beban ketergantungan (dependency ratio) dihitung dengan membandingkan...",
    options: [
      "Jumlah penduduk non-produktif (usia 0-14 tahun dan ≥65 tahun) terhadap jumlah penduduk usia produktif (15-64 tahun)",
      "Jumlah penduduk laki-laki terhadap jumlah penduduk perempuan",
      "Jumlah penduduk yang tinggal di pedesaan terhadap penduduk perkotaan",
      "Jumlah kelahiran bayi hidup terhadap jumlah kematian ibu bersalin",
      "Jumlah tenaga kerja sektor formal terhadap tenaga kerja informal"
    ],
    answer: 0,
    explanation: "Pembahasan: Rasio beban ketergantungan menunjukkan berapa banyak jiwa non-produktif yang harus ditanggung secara ekonomi oleh setiap 100 orang penduduk usia produktif."
  },
  {
    id: 37,
    grade: 11,
    topic: "Kelas XI - Ketahanan Pangan",
    type: "pg",
    question: "Kebijakan membuka lahan budidaya baru di luar Pulau Jawa seperti pembukaan lahan rawa pasang surut untuk persawahan berskala luas disebut...",
    options: ["Ekstensifikasi Pertanian", "Intensifikasi Terpadu", "Diversifikasi Polikultur", "Rotasi Tanaman Legum", "Agroforestri Tradisional"],
    answer: 0,
    explanation: "Pembahasan: Ekstensifikasi pertanian berfokus pada perluasan areal tanam garapan baru, misalnya proyek food estate di Kalimantan Tengah atau Papua."
  },
  {
    id: 38,
    grade: 11,
    topic: "Kelas XI - Mitigasi Bencana",
    type: "pg",
    question: "Fenomena alam paling khas di pesisir pantai sesaat sebelum datangnya gelombang tsunami pascagempa megathrust bawah laut adalah...",
    options: [
      "Air laut di garis pantai mendadak surut drastis hingga dasar laut terlihat",
      "Suhu air laut pesisir mendadak panas mendidih",
      "Munculnya kabut asap putih pekat dari arah laut lepas",
      "Turunnya hujan es batu di kawasan pantai",
      "Tiupan angin darat yang berputar menjadi tornado"
    ],
    answer: 0,
    explanation: "Pembahasan: Penurunan muka air laut secara tiba-tiba dan drastis terjadi akibat pembentukan palung gelombang tsunami raksasa sebelum dinding gelombang menghantam pantai."
  },
  {
    id: 39,
    grade: 12,
    topic: "Kelas XII - Pusat Pertumbuhan",
    type: "pg",
    question: "Dalam sistem perencanaan tata ruang nasional Indonesia, Kota Medan ditetapkan sebagai pusat pertumbuhan utama bagi Wilayah Pembangunan...",
    options: ["Wilayah Pembangunan Utama A", "Wilayah Pembangunan Utama B", "Wilayah Pembangunan Utama C", "Wilayah Pembangunan Utama D", "Wilayah Pembangunan Khusus IKN"],
    answer: 0,
    explanation: "Pembahasan: Wilayah Pembangunan Utama A berpusat di Kota Medan, mencakup wilayah Aceh dan Sumatra Utara; sedangkan Wilayah B berpusat di Jakarta, C di Surabaya, dan D di Makassar."
  },
  {
    id: 40,
    grade: 12,
    topic: "Kelas XII - Teori Gravitasi Reilly",
    type: "pg",
    question: "Berdasarkan Hukum Gravitasi W.J. Reilly, kekuatan interaksi spasial antara dua kota akan semakin besar apabila...",
    options: [
      "Jumlah populasi penduduk kedua kota semakin besar dan jarak spasial antar keduanya semakin dekat",
      "Jarak kedua kota semakin jauh dan topografinya berbukit-bukit",
      "Jumlah penduduk kedua kota mengalami penyusutan drastis",
      "Tingkat pendapatan per kapita kedua kota sangat rendah",
      "Fasilitas transportasi darat kedua kota tidak terhubung"
    ],
    answer: 0,
    explanation: "Pembahasan: Rumus Reilly: I_AB = k × (P_A × P_B) / (d_AB)². Kekuatan interaksi berbanding lurus dengan perkalian jumlah penduduk dan berbanding terbalik dengan kuadrat jarak."
  },
  {
    id: 41,
    grade: 12,
    topic: "Kelas XII - Teori Struktur Kota Hoyt",
    type: "pg",
    question: "Teori Sektoral yang dikemukakan oleh Homer Hoyt pada tahun 1939 menyatakan bahwa tata guna lahan kota berkembang...",
    options: [
      "Mengikuti sektor-sektor jalur rute transportasi yang memanjang menjauhi pusat kota (CBD)",
      "Membentuk lingkaran-lingkaran konsentris yang seragam",
      "Memiliki banyak titik nukleus fungsional yang terpisah",
      "Hanya terkonsentrasi di kawasan pinggiran garis pantai",
      "Mengikuti batas kontur ketinggian jurang perbukitan"
    ],
    answer: 0,
    explanation: "Pembahasan: Hoyt mengamati bahwa permukiman kelas atas, menengah, dan industri cenderung berekspansi di sepanjang rute transportasi utama (jalan arteri atau rel kereta) membentuk sektor baji."
  },
  {
    id: 42,
    grade: 12,
    topic: "Kelas XII - Urbanisasi",
    type: "pg",
    question: "Dampak positif dari fenomena urbanisasi bagi perekonomian sektor industri di kota metropolitan adalah...",
    options: [
      "Tersedianya pasokan tenaga kerja dalam jumlah memadai untuk menggerakkan operasional manufaktur dan jasa",
      "Menjamurnya kawasan permukiman kumuh (slum area) di bantaran sungai",
      "Meningkatnya beban kemacetan lalu lintas pada jam sibuk",
      "Menurunnya kualitas daya dukung lingkungan perkotaan",
      "Meningkatnya alih fungsi ruang terbuka hijau menjadi beton"
    ],
    answer: 0,
    explanation: "Pembahasan: Pasokan tenaga kerja migran dari desa menyediakan suplai tenaga kerja bagi sektor industri pengolahan, konstruksi, dan perhotelan di kota."
  },
  {
    id: 43,
    grade: 12,
    topic: "Kelas XII - Negara Maju",
    type: "pg",
    question: "Karakteristik dominan struktur perekonomian negara maju di kawasan Eropa Barat dan Amerika Utara adalah...",
    options: [
      "Didominasi oleh sektor jasa bernilai tambah tinggi, teknologi informasi, dan manufaktur berpresisi canggih",
      "Sebagian besar tenaga kerja bekerja di sektor pertanian subsisten tradisional",
      "Ketergantungan mutlak pada ekspor bahan mentah mentah tanpa olahan",
      "Tingkat melek huruf penduduk di bawah 50%",
      "Tingkat angka kematian bayi yang sangat tinggi"
    ],
    answer: 0,
    explanation: "Pembahasan: Negara maju ditandai dengan perekonomian pascaindustri (sektor tersier dan kuartener) dengan pendapatan per kapita tinggi (> USD 13.000) dan penguasaan sains teknologi tinggi."
  },
  {
    id: 44,
    grade: 10,
    topic: "Kelas X - Litosfer",
    type: "pg",
    question: "Tenaga endogen pembentuk pegunungan lipatan dan patahan dalam kurun waktu geologis yang relatif cepat pada wilayah sempit disebut tenaga...",
    options: ["Orogenesa (Orogenetik)", "Epirogenesa Positif", "Epirogenesa Negatif", "Pelapukan Eksogen", "Abrasi Gelombang"],
    answer: 0,
    explanation: "Pembahasan: Gerak orogenesa merupakan pergerakan lempeng tektonik yang cepat pada wilayah yang relatif sempit sehingga menghasilkan pelipatan dan patahan pegunungan (seperti Pegunungan Bukit Barisan)."
  },
  {
    id: 45,
    grade: 10,
    topic: "Kelas X - Hidrosfer",
    type: "pg",
    question: "Peristiwa naiknya massa air dingin yang kaya akan kandungan nutrien dan fitoplankton dari kedalaman laut menuju ke lapisan permukaan disebut...",
    options: ["Upwelling", "Downwelling", "Arus Thermohalin", "Gelombang Tsunami", "Pasang Surut Purnama"],
    answer: 0,
    explanation: "Pembahasan: Zona upwelling merupakan daerah paling subur bagi kehidupan ikan laut karena kaya plankton, seperti yang terjadi di perairan barat Sumatra dan selatan Jawa."
  },
  {
    id: 46,
    grade: 11,
    topic: "Kelas XI - Biosfer",
    type: "pg",
    question: "Faktor fisiografis/edafik yang paling menentukan kemampuan tanah dalam mendukung kelangsungan hidup vegetasi tanaman adalah...",
    options: [
      "Tekstur tanah, struktur kegemburan, aerasi, dan ketersediaan bahan organik humus",
      "Arah datangnya angin siklon muson",
      "Ketinggian satelit pengorbit cuaca",
      "Jarak wilayah terhadap garis pantai laut lepas",
      "Frekuensi sambaran kilat petir di atmosfer"
    ],
    answer: 0,
    explanation: "Pembahasan: Faktor edafik merujuk pada kondisi tanah (tekstur, kelembapan tanah, keasaman/pH, humus) yang menjadi media tumbuh akar tanaman."
  },
  {
    id: 47,
    grade: 11,
    topic: "Kelas XI - SDA Kelautan",
    type: "pg",
    question: "Prinsip pemanfaatan sumber daya perikanan tangkap laut yang menetapkan batas tangkapan maksimal tanpa merusak kelestarian populasi ikan disebut...",
    options: [
      "Maximum Sustainable Yield (MSY)",
      "Gross Domestic Product (GDP)",
      "Total Allowable Catch (TAC) Unlimited",
      "Free Open Access Fishery",
      "Subsidi Bahan Bakar Nelayan"
    ],
    answer: 0,
    explanation: "Pembahasan: MSY (Potensi Tangkap Lestari) adalah jumlah tangkapan ikan tertinggi yang dapat diambil secara berkelanjutan dari stok ikan setiap tahun tanpa membahayakan populasinya."
  },
  {
    id: 48,
    grade: 12,
    topic: "Kelas XII - Perencanaan Tata Ruang",
    type: "pg",
    question: "Penyusunan Rencana Tata Ruang Wilayah (RTRW) secara terpadu bertujuan untuk...",
    options: [
      "Mewujudkan pemanfaatan ruang yang aman, nyaman, produktif, dan berkelanjutan serta mencegah konflik fungsi lahan",
      "Memusatkan seluruh pembangunan sarana fisik hanya di ibu kota provinsi",
      "Menghilangkan fungsi hutan lindung demi investasi pertambangan",
      "Mempercepat alih fungsi seluruh sawah produktif menjadi kawasan perumahan",
      "Menghapus pembagian zona lindung dan zona budidaya"
    ],
    answer: 0,
    explanation: "Pembahasan: RTRW merupakan pedoman legal spasial untuk menyelaraskan pembangunan ekonomi, kenyamanan sosial, dan kelestarian daya dukung lingkungan hidup jangka panjang."
  },
  {
    id: 49,
    grade: 12,
    topic: "Kelas XII - Globalisasi Desa",
    type: "pg",
    question: "Pengaruh positif perkembangan teknologi komunikasi dan globalisasi terhadap aktivitas keruangan di pedesaan adalah...",
    options: [
      "Memudahkan petani mengakses informasi harga komoditas pasar secara real-time dan memperluas pemasaran digital desa",
      "Menghilangkan seluruh kearifan lokal gotong royong masyarakat",
      "Memicu ketergantungan mutlak desa pada produk impor pangan",
      "Menutup akses jalan transportasi antar desa",
      "Menghentikan seluruh aktivitas bercocok tanam di sawah"
    ],
    answer: 0,
    explanation: "Pembahasan: Internet masuk desa dan e-commerce memungkinkan petani memotong rantai tengkulak dan menjual produk pertanian langsung ke konsumen nasional."
  },
  {
    id: 50,
    grade: 12,
    topic: "Kelas XII - Evaluasi Pusat Pertumbuhan",
    type: "pg",
    question: "Salah satu indikator utama keberhasilan suatu pusat pertumbuhan wilayah dalam menjalankan fungsinya adalah terjadinya...",
    options: [
      "Penyebaran efek tetesan ke bawah (trickle-down effect) yang mendorong pertumbuhan ekonomi wilayah periferi di sekitarnya",
      "Konsentrasi modal dan lapangan kerja yang hanya terkunci di pusat kota tanpa mengalir ke daerah penyangga",
      "Meningkatnya ketimpangan ekonomi antara kota inti dengan desa sekitar",
      "Terhentinya arus mobilitas barang dan jasa ke daerah pelosok",
      "Terjadinya monopoli tunggal industri ekstraktif oleh satu badan usaha"
    ],
    answer: 0,
    explanation: "Pembahasan: Pusat pertumbuhan yang berhasil akan menyebarkan dampak positif (spread effect / trickle-down effect) berupa lapangan kerja, teknologi, dan pasar bagi wilayah satelit di sekitarnya."
  },

  // --- QUESTIONS 51 TO 100 (TAMBAHAN 50 SOAL SELEKSI AKADEMIK HOTS) ---
  {
    id: 51,
    grade: 10,
    topic: "Kelas X - Hidrologi & Geomorfologi",
    type: "pg",
    question: "Pola aliran sungai di mana anak-anak sungainya bermuara ke sungai utama membentuk sudut siku-siku (90 derajat) dan dikontrol oleh struktur kekar atau patahan batuan disebut pola...",
    options: ["Pola Rektangular", "Pola Dendritik", "Pola Trellis", "Pola Radial Sentrifugal", "Pola Anular"],
    answer: 0,
    explanation: "Pembahasan: Pola aliran rektangular terbentuk pada batuan dengan sistem rekahan, kekar, atau patahan yang saling berpotongan membentuk sudut tegak lurus (90°)."
  },
  {
    id: 52,
    grade: 10,
    topic: "Kelas X - Pedosfer (Ilmu Tanah)",
    type: "pg",
    question: "Jenis tanah yang terbentuk dari timbunan sisa-sisa vegetasi tanaman rawa yang membusuk secara anaerobik dan memiliki tingkat keasaman (pH) sangat tinggi adalah...",
    options: ["Tanah Organosol (Gambut)", "Tanah Aluvial", "Tanah Latosol", "Tanah Regosol", "Tanah Grumosol"],
    answer: 0,
    explanation: "Pembahasan: Tanah organosol atau tanah gambut tersusun dari bahan organik jenuh air dengan dekomposisi lambat, sangat masam (pH rendah), dan banyak ditemukan di dataran rendah Sumatra dan Kalimantan."
  },
  {
    id: 53,
    grade: 10,
    topic: "Kelas X - Atmosfer & Lapisan Udara",
    type: "pg",
    question: "Lapisan atmosfer bumi tempat terkonsentrasinya gas ozon (O3) yang berfungsi menyaring radiasi sinar ultraviolet berbahaya dari matahari adalah...",
    options: ["Stratosfer", "Troposfer", "Mesosfer", "Termosfer", "Eksosfer"],
    answer: 0,
    explanation: "Pembahasan: Lapisan ozonosfer berada di stratosfer (ketinggian sekitar 15–50 km). Troposfer adalah tempat terjadinya peristiwa cuaca seperti hujan dan angin."
  },
  {
    id: 54,
    grade: 10,
    topic: "Kelas X - Oseanografi & Zona Laut",
    type: "pg",
    question: "Zona perairan laut dangkal mulai dari garis pasang surut hingga kedalaman 200 meter yang kaya akan sinar matahari, fitoplankton, dan ikan bernilai ekonomis disebut...",
    options: ["Zona Neritik", "Zona Litoral", "Zona Batial", "Zona Abisal", "Zona Palung Hadal"],
    answer: 0,
    explanation: "Pembahasan: Zona neritik (0–200 m) merupakan zona paparan benua (continental shelf) yang paling produktif secara biologis karena ditembus penetrasi cahaya matahari penuh (zona fotik)."
  },
  {
    id: 55,
    grade: 10,
    topic: "Kelas X - Klasifikasi Iklim Junghuhn",
    type: "matching",
    question: "Berdasarkan pembagian iklim ketinggian Friedrich Junghuhn, komoditas perkebunan seperti teh, kina, dan sayur-sayuran kubis paling cocok dibudidayakan pada zona...",
    options: [
      "Zona Sejuk (ketinggian 1.500 - 2.500 meter di atas permukaan laut)",
      "Zona Panas (ketinggian 0 - 650 meter)",
      "Zona Sedang (ketinggian 650 - 1.500 meter)",
      "Zona Dingin (ketinggian > 2.500 meter)",
      "Zona Tropis Basah Ekuatorial"
    ],
    answer: 0,
    explanation: "Pembahasan: Menurut Junghuhn: Zona Panas (padi, kelapa, tebu), Zona Sedang (kopi, karet, cokelat), Zona Sejuk 1.500–2.500 m (teh, kina, sayuran pegunungan), Zona Dingin >2.500 m (lumut)."
  },
  {
    id: 56,
    grade: 10,
    topic: "Kelas X - Tektonisme & Gerak Lempeng",
    type: "pg",
    question: "Batas lempeng tektonik di mana dua lempeng saling bergesekan sejajar berlawanan arah secara horizontal (seperti Patahan San Andreas di California dan Sesar Semangko di Sumatra) dinamakan...",
    options: ["Batas Transform (Sesar Mendatar)", "Batas Konvergen Subduksi", "Batas Divergen Pemekaran", "Batas Kolisi Pegunungan", "Batas Obduksi Litosfer"],
    answer: 0,
    explanation: "Pembahasan: Batas sesar mendatar (transform fault) terjadi ketika lempeng berpapasan horizontal satu sama lain tanpa pembentukan atau penghancuran kerak baru."
  },
  {
    id: 57,
    grade: 10,
    topic: "Kelas X - Pelapukan Karst",
    type: "pg",
    question: "Bentukan endapan kalsium karbonat (CaCO3) yang menggantung menetes di langit-langit atap gua kapur akibat proses pelapukan kimiawi batuan gamping disebut...",
    options: ["Stalaktit", "Stalagmit", "Dolina", "Uvala", "Polje"],
    answer: 0,
    explanation: "Pembahasan: Stalaktit menggantung di langit-langit gua karst, sedangkan endapan kapur yang tumbuh mencuat tegak dari lantai gua dinamakan stalagmit."
  },
  {
    id: 58,
    grade: 10,
    topic: "Kelas X - Kartografi & Proyeksi Peta",
    type: "pg",
    question: "Proyeksi peta yang paling tepat dan minim distorsi untuk memetakan negara kepulauan Indonesia yang terletak tepat di sepanjang garis khatulistiwa adalah...",
    options: ["Proyeksi Silinder Normal (Cylindrical)", "Proyeksi Kerucut Konformal (Conic)", "Proyeksi Azimuthal Kutub", "Proyeksi Gnomonik", "Proyeksi Stereografis"],
    answer: 0,
    explanation: "Pembahasan: Proyeksi silinder paling sesuai untuk menggambarkan wilayah lintang rendah (khatulistiwa/ekuator) seperti Indonesia karena bidang proyeksinya menyinggung lingkaran ekuator."
  },
  {
    id: 59,
    grade: 10,
    topic: "Kelas X - Analisis SIG Spasial",
    type: "pg",
    question: "Dalam analisis Sistem Informasi Geografis, pembuatan zona jangkauan batas perlindungan sempadan sungai (misal 50 meter ke kiri dan ke kanan) dilakukan dengan teknik...",
    options: ["Buffering (Analisis Penyangga)", "Overlay Union", "Network Analysis", "Dissolve Poligon", "Raster Reclassification"],
    answer: 0,
    explanation: "Pembahasan: Buffer menghasilkan poligon zona penyangga dengan jarak radius tertentu di sekitar titik, garis (sungai/jalan), atau poligon."
  },
  {
    id: 60,
    grade: 10,
    topic: "Kelas X - Interpretasi Foto Udara",
    type: "chart",
    question: "Pada foto udara pankromatik hitam putih, objek pohon kelapa sawit dikenali dengan ciri-ciri interpretasi citra berupa...",
    options: [
      "Bentuk tajuk bintang berpelepah, pola teratur terencana dengan jarak tanam seragam, tekstur kasar",
      "Bentuk tajuk bulat tidak beraturan, pola acak liar di hutan lebat, tekstur halus",
      "Rona sangat cerah mengkilap, bentuk garis memanjang tanpa tajuk",
      "Pola mengelompok di puncak bukit terjal berbatu",
      "Situs selalu berada di air tawar berlumpur tanpa drainase"
    ],
    answer: 0,
    explanation: "Pembahasan: Pohon kelapa sawit memiliki tajuk khas berbentuk bintang (roset dedaunan), ditanam dengan pola kisi teratur, dan bertekstur kasar pada foto udara berskala besar."
  },
  {
    id: 61,
    grade: 11,
    topic: "Kelas XI - Hukum Laut & Geopolitik",
    type: "pg",
    question: "Deklarasi bersejarah yang dicetuskan pada 13 Desember 1957 yang menegaskan bahwa seluruh laut antarpulau di Indonesia merupakan satu kesatuan wilayah kedaulatan NKRI adalah...",
    options: ["Deklarasi Djuanda", "Konvensi Jenewa", "Perjanjian Linggarjati", "Deklarasi Bangkok", "Traktat Sunda Kelapa"],
    answer: 0,
    explanation: "Pembahasan: Deklarasi Djuanda diprakarsai oleh PM Djuanda Kartawidjaja, mengubah konsep laut teritorial warisan kolonial dan menjadi tonggak diakuinya Indonesia sebagai Negara Kepulauan (Archipelagic State) dalam UNCLOS 1982."
  },
  {
    id: 62,
    grade: 11,
    topic: "Kelas XI - Zona Ekonomi Eksklusif (ZEE)",
    type: "pg",
    question: "Berdasarkan Konvensi Hukum Laut Internasional (UNCLOS 1982), batas Zona Ekonomi Eksklusif (ZEE) suatu negara pantai diukur sejauh...",
    options: [
      "200 mil laut ditarik dari garis pangkal terluar kepulauan",
      "12 mil laut ditarik dari garis pantai surut",
      "24 mil laut zona tambahan",
      "350 mil laut batas landas kontinen dasar samudra",
      "100 mil laut alur laut kepulauan"
    ],
    answer: 0,
    explanation: "Pembahasan: Wilayah laut teritorial berjarak 12 mil laut, sedangkan ZEE memiliki lebar 200 mil laut di mana negara pantai memiliki hak berdaulat atas eksplorasi sumber daya hayati dan nonhayati."
  },
  {
    id: 63,
    grade: 11,
    topic: "Kelas XI - Energi Baru & Terbarukan (EBT)",
    type: "pg",
    question: "Indonesia memiliki potensi energi panas bumi (geothermal) sebesar 40% dari total potensi dunia. Kondisi tersebut erat kaitannya dengan posisi geologis Indonesia yang...",
    options: [
      "Dilewati jalur busur gunung api aktif cincin api pasifik (Ring of Fire)",
      "Beriklim tropis dengan curah hujan tinggi sepanjang tahun",
      "Memiliki perairan dangkal yang sangat luas di Paparan Sunda",
      "Dikelilingi oleh laut dalam dengan arus termohalin kencang",
      "Memiliki banyak kawasan hutan rawa gambut purba"
    ],
    answer: 0,
    explanation: "Pembahasan: Magma dangkal di bawah gunung-gunung api aktif memanaskan air tanah bertekanan tinggi menjadi uap geotermal berdaya panas raksasa untuk turbin PLTP."
  },
  {
    id: 64,
    grade: 11,
    topic: "Kelas XI - Iklim Global & Dampaknya",
    type: "pg",
    question: "Fenomena La Nina yang terjadi di Samudra Pasifik bagian tengah dan timur ditandai dengan suhu permukaan laut yang mendingin. Dampak nyata fenomena ini bagi kepulauan Indonesia adalah...",
    options: [
      "Peningkatan intensitas curah hujan di atas normal yang memicu potensi banjir dan tanah longsor",
      "Kemarau ekstrem berkepanjangan dan kebakaran hutan gambut meluas",
      "Suhu udara daratan menjadi beku bersalju",
      "Penurunan drastis pasokan air tanah di seluruh pulau",
      "Terhentinya hembusan angin monsun barat"
    ],
    answer: 0,
    explanation: "Pembahasan: La Nina mendorong massa udara basah kaya uap air berkumpul di perairan barat Pasifik (Indonesia), sehingga curah hujan di Indonesia meningkat drastis."
  },
  {
    id: 65,
    grade: 11,
    topic: "Kelas XI - Ekosistem Hutan Mangrove",
    type: "pg",
    question: "Fungsi ekologis dan fisik yang paling penting dari keberadaan sabuk hutan bakau (mangrove) di sepanjang garis pantai Indonesia adalah...",
    options: [
      "Meredam energi hempasan gelombang tsunami, mencegah abrasi, dan tempat pemijahan (nursery ground) biota laut",
      "Sumber utama pasokan kayu lapis komersial berskala ekspor",
      "Tempat pembuangan limbah industri cair perkotaan",
      "Mempercepat pendangkalan muara sungai untuk jalan raya",
      "Mengurangi kadar garam air laut menjadi tawar secara total"
    ],
    answer: 0,
    explanation: "Pembahasan: Akar napas (pneumatofor) mangrove menjebak sedimen, meredam gelombang badai dan tsunami, serta menjadi habitat perlindungan bibit ikan dan kepiting."
  },
  {
    id: 66,
    grade: 11,
    topic: "Kelas XI - Biogeografi Fauna Dunia",
    type: "matching",
    question: "Fauna khas kawasan Neotropik yang mendiami hutan hujan Amazon dan benua Amerika Selatan antara lain adalah...",
    options: [
      "Trenggiling raksasa (Armadillo), Kukang (Sloth), Ikan Piranha, dan Llama",
      "Jerapah, Singa, Zebra, dan Gorila pegunungan",
      "Panda raksasa, Harimau Siberia, dan Beruang Kutub",
      "Platipus, Kanguru, dan Burung Emu",
      "Unta punuk satu, Rubah fennec, dan Burung Unta"
    ],
    answer: 0,
    explanation: "Pembahasan: Wilayah fauna Neotropik mencakup Amerika Selatan dan Tengah, dihuni satwa khas seperti llama, alpaka, kukang lambat (sloth), armadillo, dan ikan karnivora piranha."
  },
  {
    id: 67,
    grade: 11,
    topic: "Kelas XI - Demografi & Bonus Demografi",
    type: "pg",
    question: "Peluang emas 'Bonus Demografi' yang diproyeksikan dialami Indonesia menuju Indonesia Emas 2045 hanya dapat dimanfaatkan secara optimal apabila negara berhasil...",
    options: [
      "Meningkatkan mutu pendidikan vokasi, keahlian digital, kesehatan gizi, dan ketersediaan lapangan kerja produktif",
      "Menaikkan angka kelahiran bayi secara drastis di setiap provinsi",
      "Membatasi kesempatan kaum perempuan mengenyam pendidikan tinggi",
      "Menutup investasi modal asing di semua sektor manufaktur",
      "Memperpanjang usia pensiun aparatur negara hingga di atas 75 tahun"
    ],
    answer: 0,
    explanation: "Pembahasan: Bonus demografi (rasio ketergantungan rendah) hanya menjadi berkah jika penduduk usia produktif memiliki kompetensi keterampilan tinggi, sehat, dan terserap dalam sektor lapangan kerja bernilai tambah."
  },
  {
    id: 68,
    grade: 11,
    topic: "Kelas XI - Kerentanan Bencana Likuefaksi",
    type: "pg",
    question: "Peristiwa likuefaksi tanah (tanah bergerak mencair seperti bubur) yang terjadi di Petobo dan Balaroa (Palu, 2018) dipicu oleh kombinasi faktor...",
    options: [
      "Getaran gempa bumi tektonik kuat yang mengguncang lapisan pasir porous jenuh air di bawah tanah",
      "Penebangan hutan bakau di tepi teluk secara liar",
      "Hujan asam yang melarutkan unsur kapur perbukitan",
      "Letusan gunung api abu vulkanik bersuhu ribuan derajat celcius",
      "Hantaman angin siklon tropis kategori 5"
    ],
    answer: 0,
    explanation: "Pembahasan: Likuefaksi terjadi pada lapisan tanah pasir jenuh air yang kehilangan daya ikat kohesi akibat peningkatan tekanan air pori saat diguncang gempa dahsyat."
  },
  {
    id: 69,
    grade: 11,
    topic: "Kelas XI - Pertanian & Ketahanan Pangan",
    type: "pg",
    question: "Upaya diversifikasi pangan lokal nasional bertujuan untuk mengurangi ketergantungan masyarakat Indonesia yang terlalu tinggi pada konsumsi komoditas...",
    options: ["Beras dan Gandum (Tepung Terigu)", "Kedelai dan Kelapa Sawit", "Ikan Cakalang dan Garam", "Sayuran Kol dan Wortel", "Buah Pisang dan Pepaya"],
    answer: 0,
    explanation: "Pembahasan: Diversifikasi pangan mendorong pemanfaatan karbohidrat lokal non-beras seperti sagu Papua, singkong, ubi jalar, jagung Madura, dan sorgum NTT."
  },
  {
    id: 70,
    grade: 11,
    topic: "Kelas XI - Konservasi Hayati",
    type: "pg",
    question: "Taman Nasional di Indonesia yang terkenal sebagai habitat alami terakhir mamalia langka Badak Jawa bercula satu (Rhinoceros sondaicus) adalah...",
    options: ["Taman Nasional Ujung Kulon (Banten)", "Taman Nasional Baluran (Jawa Timur)", "Taman Nasional Bukit Barisan Selatan (Lampung)", "Taman Nasional Lorentz (Papua)", "Taman Nasional Gunung Leuser (Aceh)"],
    answer: 0,
    explanation: "Pembahasan: Semenanjung Ujung Kulon di ujung barat Pulau Jawa merupakan benteng habitat terakhir di dunia bagi kelestarian satwa langka badak bercula satu."
  },
  {
    id: 71,
    grade: 12,
    topic: "Kelas XII - Teori Pusat Pertumbuhan Perroux",
    type: "pg",
    question: "Menurut ekonom Gunnar Myrdal, dampak negatif dari keberadaan suatu pusat pertumbuhan yang justru menyedot tenaga terampil, modal investasi, dan bahan baku dari wilayah pinggiran disebut efek...",
    options: ["Backwash Effect", "Spread Effect", "Trickle-down Effect", "Multiplier Effect", "Demonstration Effect"],
    answer: 0,
    explanation: "Pembahasan: Backwash effect merugikan daerah pinggiran karena sumber daya tersedot ke kota inti; sebaliknya spread effect adalah efek rembesan kemakmuran yang menyebar positif ke daerah sekitar."
  },
  {
    id: 72,
    grade: 12,
    topic: "Kelas XII - Indeks Konektivitas Kansky",
    type: "pg",
    question: "Suatu wilayah memiliki 4 kota/simpul (v = 4) yang dihubungkan oleh 6 ruas jalan raya (e = 6). Berdasarkan Indeks Konektivitas Kansky (Beta = e / v), nilai konektivitas wilayah tersebut adalah...",
    options: ["1.5 (konektivitas tinggi, pergerakan transportasi sangat lancar)", "0.67 (konektivitas rendah)", "2.4", "0.24", "4.0"],
    answer: 0,
    explanation: "Pembahasan: Rumus Beta = e / v = 6 / 4 = 1.5. Nilai beta lebih dari 1 (>1) mencerminkan jaringan transportasi yang telah terintegrasi dengan baik antar simpul kota."
  },
  {
    id: 73,
    grade: 12,
    topic: "Kelas XII - Zona Interaksi Desa Kota Bintarto",
    type: "matching",
    question: "Berdasarkan pembagian zona keruangan interaksi kota-desa menurut Bintarto, zona perbatasan luar yang menjadi daerah peralihan dengan penggunaan lahan campuran kota dan desa dinamakan...",
    options: [
      "Rural Urban Fringe (Zona Jalur Desa-Kota)",
      "City (Pusat Kota Utama)",
      "Suburban (Kawasan Permukiman Penglaju)",
      "Rural (Kawasan Pedesaan Murni)",
      "Central Business District (Kawasan Bisnis Inti)"
    ],
    answer: 0,
    explanation: "Pembahasan: Rural-Urban Fringe adalah zona peralihan yang memperlihatkan campuran pola tata guna lahan perumahan kota modern bersanding dengan persawahan dan tegalan desa."
  },
  {
    id: 74,
    grade: 12,
    topic: "Kelas XII - Teori Inti Berganda Harris-Ullman",
    type: "pg",
    question: "Faktor utama yang mendasari munculnya banyak inti pusat kegiatan (multiple nuclei) dalam kota modern menurut Harris dan Ullman adalah...",
    options: [
      "Aktivitas fungsional tertentu membutuhkan fasilitas khusus dan saling membutuhkan kedekatan jarak (seperti pelabuhan dengan pergudangan industri berat)",
      "Seluruh warga kota menolak tinggal di dekat jalan raya",
      "Ketiadaan kendaraan bermotor pribadi di tengah kota",
      "Pemerintah kota melarang pendirian pusat perbelanjaan baru",
      "Adanya pembagian wilayah berdasarkan batas sungai alami"
    ],
    answer: 0,
    explanation: "Pembahasan: Harris & Ullman menemukan bahwa kota berekspansi dengan nukleus jamak karena kegiatan sejenis berkumpul (aglomerasi pelabuhan, kampus, pabrik), sedangkan kegiatan yang tidak serasi akan saling menjauh."
  },
  {
    id: 75,
    grade: 12,
    topic: "Kelas XII - Tipologi Sosiologi Wilayah",
    type: "pg",
    question: "Hubungan sosial masyarakat pedesaan yang bersifat kekeluargaan, intim, berakar tradisi gotong royong, dan langgeng tanpa pamrih komersial disebut kelompok...",
    options: ["Gemeinschaft (Paguyuban)", "Gesellschaft (Patembayan)", "Aglomerasi Korporat", "Megalopolis Modern", "Urban Sprawl"],
    answer: 0,
    explanation: "Pembahasan: Ferdinand Tonnies membedakan Gemeinschaft (paguyuban: intim, alami, pedesaan) dengan Gesellschaft (patembayan: formal, kontraktual, berorientasi pamrih laba di perkotaan)."
  },
  {
    id: 76,
    grade: 12,
    topic: "Kelas XII - Klasifikasi Negara",
    type: "pg",
    question: "Suatu negara dikelompokkan ke dalam kategori Negara Maju apabila memiliki struktur demografi dengan piramida penduduk berbentuk...",
    options: [
      "Konstruktif (bentuk batu nisan), mencerminkan angka kelahiran rendah dan proporsi lansia tinggi",
      "Ekspansif (bentuk segitiga limas), mencerminkan ledakan bayi usia muda yang tinggi",
      "Tergantung pada migrasi masuk secara musiman saja",
      "Tidak beraturan dengan lonjakan angka kematian bayi ekstrem",
      "Berbentuk kerucut terbalik dengan harapan hidup di bawah 40 tahun"
    ],
    answer: 0,
    explanation: "Pembahasan: Negara maju (Jepang, Jerman, Singapura) memiliki piramida konstruktif di mana kelompok usia muda lebih sedikit akibat angka fertilitas rendah, sementara usia lanjut dominan karena layanan medis prima."
  },
  {
    id: 77,
    grade: 12,
    topic: "Kelas XII - Perencanaan Wilayah Megapolitan",
    type: "pg",
    question: "Penyatuan fisik beberapa kota metropolitan yang berdekatan menjadi satu kawasan perkotaan raksasa tak terputus (seperti kawasan Pantura Jakarta-Bekasi-Karawang) disebut...",
    options: ["Konurbasi (Conurbation / Megalopolis)", "Aglomerasi Desa", "Enklave Pertambangan", "Zonasi Eksklusif", "Gentrified Suburb"],
    answer: 0,
    explanation: "Pembahasan: Konurbasi terjadi ketika perkembangan kota-kota yang berdekatan saling menyatu secara spasial membentuk jaringan metropolitan gabungan tanpa jeda bentang alam pedesaan."
  },
  {
    id: 78,
    grade: 12,
    topic: "Kelas XII - Geografi Lingkungan Global",
    type: "pg",
    question: "Mekanisme perdagangan hak emisi gas rumah kaca internasional yang dirancang untuk mendorong negara maju mendanai pelestarian hutan di negara berkembang dikenal sebagai skema...",
    options: ["REDD+ (Reducing Emissions from Deforestation and Forest Degradation)", "World Trade Organization Tariff", "International Monetary Loan", "OPEC Quota Agreement", "Maritime Security Protocol"],
    answer: 0,
    explanation: "Pembahasan: Skema REDD+ memberikan insentif finansial berbasis hasil (result-based payment) bagi negara-negara yang sukses menurunkan emisi karbon dengan merawat hutan tropisnya."
  },
  {
    id: 79,
    grade: 10,
    topic: "Kelas X - Geologi Batuan Litosfer",
    type: "pg",
    question: "Batuan beku dalam (plutonik/intrusif) yang membeku secara perlahan jauh di dalam lapisan kerak bumi sehingga menghasilkan struktur kristal mineral sempurna dan berbutir kasar adalah...",
    options: ["Batu Granit dan Gabro", "Batu Apung dan Obsidian", "Batu Andesit dan Basalt", "Batu Marmer dan Kuarsit", "Batu Konglomerat dan Breksi"],
    answer: 0,
    explanation: "Pembahasan: Granit membeku di dalam dapur magma secara bertahap sehingga kristal kuarsa dan feldspar terbentuk sempurna; sedangkan batu apung dan obsidian adalah batuan beku luar (efusif) yang membeku seketika di udara."
  },
  {
    id: 80,
    grade: 10,
    topic: "Kelas X - Gempa Bumi & Seismologi",
    type: "pg",
    question: "Gelombang gempa bumi pertama yang merambat secara longitudinal di dalam lapisan bumi, berkecepatan paling tinggi, dan dapat merambat melalui zat padat, cair, maupun gas adalah...",
    options: ["Gelombang Primer (Gelombang P)", "Gelombang Sekunder (Gelombang S)", "Gelombang Rayleigh", "Gelombang Love", "Gelombang Tsunami Pesisir"],
    answer: 0,
    explanation: "Pembahasan: Gelombang Primer (P-wave) adalah gelombang seismik kompresional longitudinal yang tiba paling awal di stasiun pencatat seismograf, merambat pada semua fase materi."
  },
  {
    id: 81,
    grade: 10,
    topic: "Kelas X - Erosi & Konservasi Tanah",
    type: "pg",
    question: "Metode konservasi tanah secara vegetatif pada lahan miring berbukit untuk memperlambat laju aliran limpasan air hujan (run-off) dapat dilakukan dengan teknik...",
    options: ["Penanaman berjalur menurut garis kontur (Contour Strip Cropping)", "Pembuatan terasering bertingkat dari beton semen", "Pemberian insektisida kimia dosis tinggi", "Pembakaran rumput alang-alang liar", "Penebangan pohon pelindung"],
    answer: 0,
    explanation: "Pembahasan: Contour strip cropping menanam tanaman berselang-seling tegak lurus arah lereng mengikuti garis kontur, berfungsi sebagai penahan erosi alami (metode vegetatif)."
  },
  {
    id: 82,
    grade: 10,
    topic: "Kelas X - Gerak Udara & Efek Coriolis",
    type: "pg",
    question: "Angin siklon tropis (badai taifun/hurikan) tidak pernah terbentuk dan melintasi wilayah perairan tepat di garis ekuator (0 derajat lintang) karena...",
    options: [
      "Gaya pembelok Coriolis bernilai nol di garis khatulistiwa",
      "Suhu air laut khatulistiwa terlalu dingin di bawah 20°C",
      "Tekanan udara khatulistiwa selalu bernilai sangat tinggi",
      "Ketiadaan penguapan air di atas samudra tropis",
      "Pengaruh gravitasi bulan yang terlalu kuat"
    ],
    answer: 0,
    explanation: "Pembahasan: Badai siklon membutuhkan pusaran rotasi dari gaya Coriolis. Karena gaya Coriolis di ekuator bernilai 0, maka pusaran badai siklon tropis tidak dapat terbentuk di lintang 0°–5°."
  },
  {
    id: 83,
    grade: 10,
    topic: "Kelas X - Perhitungan Kemiringan Lereng",
    type: "pg",
    question: "Dua titik di peta topografi memiliki beda tinggi kontur 100 meter dan jarak datar sebenarnya di lapangan adalah 500 meter. Berapakah persentase kemiringan lerengnya?",
    options: ["20% (Kemiringan Agak Curam)", "5% (Landai)", "50% (Sangat Curam)", "2% (Datar)", "10% (Bergelombang)"],
    answer: 0,
    explanation: "Pembahasan: Rumus Kemiringan Lereng (%) = (Beda Tinggi / Jarak Sebenarnya) × 100% = (100 m / 500 m) × 100% = 0.2 × 100% = 20%."
  },
  {
    id: 84,
    grade: 11,
    topic: "Kelas XI - Bioma Gurun & Adaptasi Flora",
    type: "pg",
    question: "Tanaman kaktus di bioma gurun beradaptasi terhadap kekeringan ekstrem melalui ciri morfologi berupa...",
    options: [
      "Daun termodifikasi menjadi duri berlapisan lilin tebal untuk menekan transpirasi dan batang berongga sukulen untuk menyimpan air",
      "Daun lebar tipis dengan stomata terbuka sepanjang hari",
      "Akar napas yang menjulang ke atas permukaan air",
      "Menggugurkan seluruh daun saat musim semi basah",
      "Tidak memiliki klorofil fotosintesis"
    ],
    answer: 0,
    explanation: "Pembahasan: Tumbuhan xerofit gurun memodifikasi daun menjadi duri guna memperkecil penguapan air dan batangnya dilapisi kutikula lilin serta menyimpan cadangan air."
  },
  {
    id: 85,
    grade: 11,
    topic: "Kelas XI - Migrasi Penduduk",
    type: "pg",
    question: "Pergerakan penduduk yang tinggal di Bogor atau Depok menuju Jakarta setiap pagi hari untuk bekerja dan pulang kembali ke rumah pada sore/malam hari merupakan bentuk mobilitas non-permanen yang disebut...",
    options: ["Komutasi (Ulang-Alik / Penglaju)", "Transmigrasi Bedol Desa", "Emigrasi Politik", "Sirkulasi Musiman Panen", "Remigrasi Pasca Konflik"],
    answer: 0,
    explanation: "Pembahasan: Komutasi adalah mobilitas harian tanpa menginap di daerah tujuan; sedangkan sirkulasi biasanya menginap beberapa hari/minggu sebelum pulang."
  },
  {
    id: 86,
    grade: 11,
    topic: "Kelas XI - Terumbu Karang Indonesia",
    type: "pg",
    question: "Kawasan segitiga terumbu karang dunia (Coral Triangle) berpusat di perairan Indonesia timur (seperti Raja Ampat dan Wakatobi). Syarat oseanografi utama bagi pertumbuhan optimal karang koral adalah...",
    options: [
      "Air laut jernih tembus cahaya, suhu hangat 26°C - 28°C, salinitas normal 32 - 35 permil, dan bebas sedimentasi lumpur",
      "Air laut sangat keruh berlumpur dengan kedalaman palung > 2.000 meter",
      "Suhu air laut dingin di bawah 5°C",
      "Kadar air tawar dari muara sungai yang sangat dominan",
      "Ketiadaan gelombang laut dan pasang surut"
    ],
    answer: 0,
    explanation: "Pembahasan: Polip karang bersimbiosis dengan alga zooxanthellae yang membutuhkan fotosintesis, sehingga air laut wajib jernih, bersuhu hangat, dan bebas dari endapan lumpur erosi."
  },
  {
    id: 87,
    grade: 11,
    topic: "Kelas XI - Pembangunan Berkelanjutan",
    type: "pg",
    question: "Dokumen kajian lingkungan hidup komprehensif yang wajib disusun sebelum dimulainya usaha proyek jalan tol, smelter tambang, atau bendungan raksasa disebut...",
    options: ["AMDAL (Analisis Mengenai Dampak Lingkungan)", "Surat Izin Usaha Perdagangan (SIUP)", "Sertifikat Hak Guna Bangunan", "Laporan Pajak Bumi dan Bangunan", "Dokumen Rencana Anggaran Biaya"],
    answer: 0,
    explanation: "Pembahasan: AMDAL adalah kajian ilmiah mengenai dampak penting suatu usaha/kegiatan yang direncanakan pada lingkungan hidup, diperlukan bagi proses pengambilan keputusan izin usaha."
  },
  {
    id: 88,
    grade: 12,
    topic: "Kelas XII - Titik Henti Aplikasi Nyata",
    type: "pg",
    question: "Kota Sejahtera (penduduk 10.000 jiwa) dan Kota Makmur (penduduk 90.000 jiwa) berjarak 16 km. Di manakah lokasi terbaik untuk membangun pasar bersama menurut Teori Titik Henti?",
    options: [
      "4 km dari Kota Sejahtera",
      "8 km dari Kota Sejahtera",
      "4 km dari Kota Makmur",
      "12 km dari Kota Sejahtera",
      "2 km dari Kota Makmur"
    ],
    answer: 0,
    explanation: "Pembahasan: D = Jarak / (1 + √(P_besar / P_kecil)) = 16 / (1 + √(90.000 / 10.000)) = 16 / (1 + √9) = 16 / (1 + 3) = 16 / 4 = 4 km diukur dari kota berpenduduk lebih kecil (Kota Sejahtera)."
  },
  {
    id: 89,
    grade: 12,
    topic: "Kelas XII - Interaksi Keruangan Gravitasi",
    type: "pg",
    question: "Dua wilayah memiliki jumlah penduduk masing-masing 50.000 jiwa dan 20.000 jiwa, dipisahkan jarak 10 km. Berapakah kekuatan interaksi gravitasi (I) kedua kota tersebut?",
    options: ["10.000.000", "1.000.000", "100.000", "500.000", "2.000.000"],
    answer: 0,
    explanation: "Pembahasan: I = (Pa × Pb) / d² = (50.000 × 20.000) / 10² = 1.000.000.000 / 100 = 10.000.000."
  },
  {
    id: 90,
    grade: 12,
    topic: "Kelas XII - Teori Pusat Pertumbuhan Hierarki Christaller",
    type: "pg",
    question: "Dalam Teori Walter Christaller, tempat sentral yang berhierarki 7 (K=7) memiliki fungsi pelayanan optimum di bidang...",
    options: ["Administrasi Pemerintahan dan Pelayanan Publik", "Pasar Optimum Penjualan Barang", "Lalu Lintas dan Jaringan Jalan Tol", "Kawasan Pelabuhan Internasional", "Pusat Riset Nuklir"],
    answer: 0,
    explanation: "Pembahasan: K=3 untuk asas pasar optimum, K=4 untuk asas lalu lintas transportasi optimum, dan K=7 untuk situasi administrasi pemerintahan optimum."
  },
  {
    id: 91,
    grade: 12,
    topic: "Kelas XII - Struktur Kota Burgess Zona 2",
    type: "pg",
    question: "Pada model konsentris Burgess, Zona 2 yang terletak tepat melingkari Central Business District (CBD) dikenal sebagai 'Zona Transisi' karena dicirikan oleh...",
    options: [
      "Kawasan industri manufaktur ringan yang bersinggungan dengan permukiman kumuh, peremajaan kota yang dinamis, dan degradasi lingkungan",
      "Perumahan mewah pejabat dan kaum elit kelas atas",
      "Kawasan perkebunan sayuran dan sawah murni",
      "Hutan lindung kota yang asri tanpa polusi",
      "Zona bebas pajak tanpa aktivitas komersial"
    ],
    answer: 0,
    explanation: "Pembahasan: Zona transisi Burgess dicirikan oleh invasi bisnis ke daerah perumahan tua di dekat CBD, memunculkan kawasan sewa murah, permukiman kumuh, dan pabrik ringan sebelum ditata ulang."
  },
  {
    id: 92,
    grade: 12,
    topic: "Kelas XII - Smart City (Kota Cerdas)",
    type: "pg",
    question: "Penerapan konsep Smart City dalam tata ruang perkotaan era modern di Indonesia bertujuan utama untuk...",
    options: [
      "Mengintegrasikan teknologi informasi IoT dan data spasial untuk efisiensi layanan publik, manajemen transportasi, dan pengelolaan energi ramah lingkungan",
      "Mengganti seluruh tenaga kerja manusia dengan robot",
      "Menghilangkan ruang terbuka hijau perkotaan",
      "Memusatkan seluruh penduduk miskin di luar batas kota",
      "Menaikkan tarif angkutan umum setinggi mungkin"
    ],
    answer: 0,
    explanation: "Pembahasan: Konsep Kota Cerdas (Smart City) mengoptimalkan pemanfaatan teknologi digital, big data, dan sensor cerdas demi peningkatan kualitas hidup masyarakat, kenyamanan mobilitas, dan kelestarian lingkungan."
  },
  {
    id: 93,
    grade: 10,
    topic: "Kelas X - Geografi Tanah & Erosi",
    type: "pg",
    question: "Bentuk erosi tanah di mana butir-butir tanah terlempar lepas akibat pukulan tetesan air hujan secara langsung pada permukaan tanah gundul disebut...",
    options: ["Erosi Percik (Splash Erosion)", "Erosi Lembar (Sheet Erosion)", "Erosi Alur (Rill Erosion)", "Erosi Parit (Gully Erosion)", "Erosi Jurang (Ravine)"],
    answer: 0,
    explanation: "Pembahasan: Erosi percik adalah tahap awal erosi saat tenaga kinetik tetesan air hujan menghancurkan agregat tanah gundul dan melepaskan butirannya ke udara."
  },
  {
    id: 94,
    grade: 11,
    topic: "Kelas XI - Bioma Hutan Hujan Tropis",
    type: "pg",
    question: "Hutan hujan tropis di Pulau Kalimantan memiliki karakteristik struktur kanopi pohon berlapis-lapis. Tumbuhan merambat berkayu yang memanfaatkan pohon inang untuk menjangkau cahaya matahari di kanopi atas disebut...",
    options: ["Liana (misal: Rotan)", "Epifit (misal: Anggrek)", "Saprofit", "Xerofit", "Halofit"],
    answer: 0,
    explanation: "Pembahasan: Liana adalah tumbuhan memanjat berkayu panjang (contoh utamanya rotan) yang berakar di tanah namun merambat melilit pohon lain hingga tajuk tertinggi hutan hujan."
  },
  {
    id: 95,
    grade: 11,
    topic: "Kelas XI - Ketahanan Pangan Nasional",
    type: "pg",
    question: "Konsep di mana suatu negara memiliki kemandirian mutlak untuk menentukan kebijakan pertanian dan pangannya sendiri tanpa tekanan intervensi pasar luar negeri disebut...",
    options: ["Kedaulatan Pangan (Food Sovereignty)", "Ketergantungan Impor Pangan", "Subsidi Ekspor Agribisnis", "Monopoli Pangan Global", "Perdagangan Bebas Agraria"],
    answer: 0,
    explanation: "Pembahasan: Kedaulatan pangan adalah hak setiap bangsa dan rakyat untuk menentukan kebijakan pangannya sendiri secara mandiri sesuai potensi lokal tanpa didikte oleh korporasi multinasional."
  },
  {
    id: 96,
    grade: 12,
    topic: "Kelas XII - Perencanaan Tata Ruang RTRW",
    type: "pg",
    question: "Suatu kawasan lereng curam dengan kemiringan lebih dari 40% dan tanah yang peka erosi menurut undang-undang tata ruang wajib ditetapkan sebagai kawasan...",
    options: ["Kawasan Lindung (Resapan Air & Pencegah Bencana)", "Kawasan Budidaya Permukiman Mewah", "Kawasan Kawasan Industri Berat", "Kawasan Pusat Niaga Perbelanjaan", "Kawasan Bandara Internasional"],
    answer: 0,
    explanation: "Pembahasan: Lereng berkemiringan >40% memiliki risiko bencana longsor yang sangat tinggi, sehingga wajib dilindungi sebagai kawasan hutan lindung resapan air."
  },
  {
    id: 97,
    grade: 12,
    topic: "Kelas XII - Geopolitik & Kerja Sama Global",
    type: "pg",
    question: "Kemitraan strategis ekonomi kawasan Asia Tenggara (ASEAN) dalam mewujudkan integrasi pasar bebas barang, jasa, modal, dan tenaga kerja terampil diwujudkan melalui...",
    options: ["Masyarakat Ekonomi ASEAN (MEA / AEC)", "Pakta Pertahanan Atlantik Utara", "Perjanjian Pasifik Selatan", "Uni Moneter Euro", "Kartel Minyak Dunia"],
    answer: 0,
    explanation: "Pembahasan: MEA (Masyarakat Ekonomi ASEAN) bertujuan mentransformasi ASEAN menjadi kawasan yang stabil, makmur, berdaya saing ekonomi tinggi dengan arus bebas barang, jasa, investasi, dan tenaga kerja terampil."
  },
  {
    id: 98,
    grade: 10,
    topic: "Kelas X - Kartografi Interval Kontur",
    type: "pg",
    question: "Pada sebuah peta topografi, garis kontur digambarkan sangat rapat dan berdekatan satu sama lain. Kenampakan bentang alam di lapangan sesungguhnya mencerminkan...",
    options: ["Lereng yang sangat curam atau tebing terjal", "Dataran aluvial yang sangat landai", "Lembah sungai berawa tenang", "Kawasan danau air tenang", "Padang savana berpasir datar"],
    answer: 0,
    explanation: "Pembahasan: Kerapatan garis kontur berbanding lurus dengan kecuraman lereng; kontur yang saling berimpit rapat menandakan perubahan elevasi tajam (lereng curam/tebing tebing)."
  },
  {
    id: 99,
    grade: 11,
    topic: "Kelas XI - Kependudukan & Rasio Jenis Kelamin",
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
    id: 100,
    grade: 12,
    topic: "Kelas XII - Pembangunan Berkelanjutan Indonesia",
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
  }
];
