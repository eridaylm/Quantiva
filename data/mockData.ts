import { Question, LeaderboardEntry, SubTopic, Level, MasteryStatus } from '@/types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // 1. ALJABAR
  // ==========================================
  // SMA Level (Aljabar)
  {
    id: 'ALJ-SMA-01',
    subtopic: 'Aljabar',
    level: 'SMA',
    question: 'Akar-akar persamaan kuadrat x² - 5x + 6 = 0 adalah α dan β. Nilai dari α² + β² adalah...',
    options: ['13', '19', '25', '31'],
    correctAnswer: 0,
    explanation: 'Dari x² - 5x + 6 = 0 didapat α + β = 5 dan αβ = 6. Maka α² + β² = (α + β)² - 2αβ = 5² - 2(6) = 25 - 12 = 13.',
    conceptTag: 'Persamaan Kuadrat SMA',
    hint: 'Gunakan rumus jumlah dan hasil kali akar: α + β = -b/a dan αβ = c/a.'
  },
  {
    id: 'ALJ-SMA-02',
    subtopic: 'Aljabar',
    level: 'SMA',
    question: 'Diketahui fungsi f(x) = 2x - 3 dan g(x) = x² + 1. Nilai dari komposisi fungsi (g ∘ f)(2) adalah...',
    options: ['2', '3', '5', '7'],
    correctAnswer: 0,
    explanation: 'Hitung f(2) terlebih dahulu: f(2) = 2(2) - 3 = 1. Lalu substitusikan ke g(x): g(f(2)) = g(1) = 1² + 1 = 2.',
    conceptTag: 'Fungsi Komposisi SMA',
    hint: 'Kerjakan fungsi dalam terlebih dahulu: tentukan f(2), lalu masukkan hasilnya ke fungsi g.'
  },
  {
    id: 'ALJ-SMA-03',
    subtopic: 'Aljabar',
    level: 'SMA',
    question: 'Jika sistem persamaan linear x + y = 7 dan 2x - y = 8 dipenuhi oleh (x, y), maka nilai dari 2x + 3y adalah...',
    options: ['16', '14', '18', '12'],
    correctAnswer: 0,
    explanation: 'Jumlahkan kedua persamaan: 3x = 15 ⇒ x = 5. Substitusi x = 5 ke x + y = 7 ⇒ y = 2. Maka 2x + 3y = 2(5) + 3(2) = 10 + 6 = 16.',
    conceptTag: 'SPLDV Metode Eliminasi SMA',
    hint: 'Eliminasi variabel y dengan menjumlahkan kedua persamaan.'
  },

  // SMP Level (Aljabar)
  {
    id: 'ALJ-SMP-01',
    subtopic: 'Aljabar',
    level: 'SMP',
    question: 'Bentuk sederhana dari operasi aljabar 3(2x - 4y) - 2(x - 5y) adalah...',
    options: ['4x - 2y', '4x + 2y', '4x - 22y', '8x - 2y'],
    correctAnswer: 0,
    explanation: 'Kalikan ke dalam kurung: 6x - 12y - 2x + 10y = (6x - 2x) + (-12y + 10y) = 4x - 2y.',
    conceptTag: 'Suku Sejenis Aljabar SMP',
    hint: 'Perhatikan tanda negatif saat mengalikan -2 dengan -5y.'
  },
  {
    id: 'ALJ-SMP-02',
    subtopic: 'Aljabar',
    level: 'SMP',
    question: 'Faktorisasi yang benar dari bentuk aljabar x² - 9x + 20 adalah...',
    options: ['(x - 4)(x - 5)', '(x - 2)(x - 10)', '(x + 4)(x + 5)', '(x - 1)(x - 20)'],
    correctAnswer: 0,
    explanation: 'Cari dua bilangan yang jika dikalikan bernilai +20 dan jika dijumlahkan bernilai -9. Bilangan tersebut adalah -4 dan -5.',
    conceptTag: 'Pemfaktoran Persamaan Kuadrat SMP',
    hint: 'Dua bilangan negatif menghasilkan perkalian positif dan penjumlahan negatif.'
  },
  {
    id: 'ALJ-SMP-03',
    subtopic: 'Aljabar',
    level: 'SMP',
    question: 'Penyelesaian dari persamaan linear satu variabel 4x - 7 = 2x + 5 adalah...',
    options: ['x = 6', 'x = 4', 'x = 3', 'x = 8'],
    correctAnswer: 0,
    explanation: 'Pindahkan suku bervariabel ke ruas kiri: 4x - 2x = 5 + 7 ⇒ 2x = 12 ⇒ x = 6.',
    conceptTag: 'PLSV SMP',
    hint: 'Kumpulkan suku dengan variabel x di sisi kiri dan konstanta di sisi kanan.'
  },

  // SD Level (Aljabar)
  {
    id: 'ALJ-SD-01',
    subtopic: 'Aljabar',
    level: 'SD',
    question: 'Jika n + 17 = 35, maka nilai n yang benar adalah...',
    options: ['18', '16', '22', '19'],
    correctAnswer: 0,
    explanation: 'Kurangkan kedua ruas dengan 17: n = 35 - 17 = 18.',
    conceptTag: 'Operasi Dasar Variabel SD',
    hint: 'Kebalikan dari penjumlahan adalah pengurangan.'
  },
  {
    id: 'ALJ-SD-02',
    subtopic: 'Aljabar',
    level: 'SD',
    question: 'Perhatikan pola bilangan berikut: 4, 8, 12, 16, ..., nilai bilangan ke-6 adalah...',
    options: ['24', '20', '28', '32'],
    correctAnswer: 0,
    explanation: 'Pola bilangan ini bertambah 4 pada tiap suku (kelipatan 4). Bilangan ke-5 = 20, dan bilangan ke-6 = 24.',
    conceptTag: 'Pola Bilangan Loncat SD',
    hint: 'Setiap suku bertambah 4 dari suku sebelumnya.'
  },
  {
    id: 'ALJ-SD-03',
    subtopic: 'Aljabar',
    level: 'SD',
    question: 'Ibu membeli 3 kantong jeruk yang masing-masing berisi k jeruk. Jika seluruh jeruk ada 24 buah, berapa nilai k?',
    options: ['8', '6', '7', '9'],
    correctAnswer: 0,
    explanation: '3 × k = 24. Maka k = 24 ÷ 3 = 8.',
    conceptTag: 'Konsep Perkalian Variabel SD',
    hint: 'Bagi jumlah total jeruk dengan jumlah kantong.'
  },

  // ==========================================
  // 2. GEOMETRI
  // ==========================================
  // SMA Level (Geometri)
  {
    id: 'GEO-SMA-01',
    subtopic: 'Geometri',
    level: 'SMA',
    question: 'Diketahui kubus ABCD.EFGH dengan rusuk 6 cm. Jarak titik A ke titik G (diagonal ruang) adalah...',
    options: ['6√3 cm', '6√2 cm', '12 cm', '3√3 cm'],
    correctAnswer: 0,
    explanation: 'Panjang diagonal ruang kubus dengan rusuk s adalah s√3. Karena rusuk = 6 cm, maka AG = 6√3 cm.',
    conceptTag: 'Dimensi Tiga Diagonal Ruang SMA',
    hint: 'Diagonal sisi = s√2, sedangkan diagonal ruang = s√3.'
  },
  {
    id: 'GEO-SMA-02',
    subtopic: 'Geometri',
    level: 'SMA',
    question: 'Persamaan lingkaran yang berpusat di titik (2, -3) dan memiliki jari-jari 5 adalah...',
    options: ['(x - 2)² + (y + 3)² = 25', '(x + 2)² + (y - 3)² = 25', '(x - 2)² + (y - 3)² = 25', '(x - 2)² + (y + 3)² = 5'],
    correctAnswer: 0,
    explanation: 'Bentuk umum persamaan lingkaran berpusat di (a, b) dengan jari-jari r adalah (x - a)² + (y - b)² = r². Substitusi (2, -3) dan r = 5: (x - 2)² + (y + 3)² = 25.',
    conceptTag: 'Persamaan Lingkaran Analitik SMA',
    hint: 'Perhatikan perubahan tanda: y - (-3) menjadi (y + 3).'
  },
  {
    id: 'GEO-SMA-03',
    subtopic: 'Geometri',
    level: 'SMA',
    question: 'Titik P(3, -2) ditranslasikan oleh T = [-1, 4], kemudian dicerminkan terhadap sumbu X. Koordinat bayangan akhir titik P adalah...',
    options: ['(2, -2)', '(2, 2)', '(-2, 2)', '(4, 2)'],
    correctAnswer: 0,
    explanation: 'Translasi T[-1, 4] menghasilkan P\'(3 - 1, -2 + 4) = P\'(2, 2). Refleksi terhadap sumbu X mengubah tanda ordinat: P\'\'(2, -2).',
    conceptTag: 'Transformasi Geometri SMA',
    hint: 'Lakukan translasi dahulu (tambah koordinat), lalu cerminkan terhadap sumbu X (ubah tanda y).'
  },

  // SMP Level (Geometri)
  {
    id: 'GEO-SMP-01',
    subtopic: 'Geometri',
    level: 'SMP',
    question: 'Sebuah segitiga siku-siku memiliki panjang sisi siku-siku 9 cm dan 12 cm. Panjang sisi miring (hipotenusa) segitiga tersebut adalah...',
    options: ['15 cm', '14 cm', '16 cm', '21 cm'],
    correctAnswer: 0,
    explanation: 'Dengan teorema Pythagoras: c² = a² + b² = 9² + 12² = 81 + 144 = 225. Maka c = √225 = 15 cm.',
    conceptTag: 'Teorema Pythagoras SMP',
    hint: 'Tripel Pythagoras dasar 3-4-5 dikalikan 3 menjadi 9-12-15.'
  },
  {
    id: 'GEO-SMP-02',
    subtopic: 'Geometri',
    level: 'SMP',
    question: 'Sebuah tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Volume tabung tersebut adalah... (gunakan π = 22/7)',
    options: ['1.540 cm³', '1.450 cm³', '770 cm³', '2.156 cm³'],
    correctAnswer: 0,
    explanation: 'Volume tabung = π × r² × t = (22/7) × 7 × 7 × 10 = 22 × 7 × 10 = 1.540 cm³.',
    conceptTag: 'Bangun Ruang Sisi Lengkung SMP',
    hint: 'Rumus volume tabung adalah luas alas lingkaran dikali tinggi.'
  },
  {
    id: 'GEO-SMP-03',
    subtopic: 'Geometri',
    level: 'SMP',
    question: 'Dua sudut saling berpelurus (suplemen). Jika besar sudut pertama adalah 65°, maka besar sudut kedua adalah...',
    options: ['115°', '25°', '125°', '95°'],
    correctAnswer: 0,
    explanation: 'Sudut saling berpelurus berjumlah 180°. Sudut kedua = 180° - 65° = 115°.',
    conceptTag: 'Hubungan Antar Sudut SMP',
    hint: 'Ingat bahwa sudut berpelurus selalu berjumlah 180° (garis lurus).'
  },

  // SD Level (Geometri)
  {
    id: 'GEO-SD-01',
    subtopic: 'Geometri',
    level: 'SD',
    question: 'Sebuah persegi panjang memiliki panjang 14 cm dan lebar 8 cm. Keliling persegi panjang tersebut adalah...',
    options: ['44 cm', '112 cm', '22 cm', '56 cm'],
    correctAnswer: 0,
    explanation: 'Keliling persegi panjang = 2 × (p + l) = 2 × (14 + 8) = 2 × 22 = 44 cm.',
    conceptTag: 'Keliling Persegi Panjang SD',
    hint: 'Keliling adalah jumlah seluruh panjang sisi tepi.'
  },
  {
    id: 'GEO-SD-02',
    subtopic: 'Geometri',
    level: 'SD',
    question: 'Bangun ruang yang memiliki 6 sisi berbentuk persegi yang kongruen, 12 rusuk sama panjang, dan 8 titik sudut adalah...',
    options: ['Kubus', 'Balok', 'Prisma Segitiga', 'Limas Segiempat'],
    correctAnswer: 0,
    explanation: 'Kubus memiliki 6 sisi berbentuk persegi yang sama besar dan sebangun (kongruen).',
    conceptTag: 'Sifat Bangun Ruang Kubus SD',
    hint: 'Perhatikan ciri sisi persegi yang sama panjang semua rusuknya.'
  },
  {
    id: 'GEO-SD-03',
    subtopic: 'Geometri',
    level: 'SD',
    question: 'Sebuah segitiga memiliki panjang alas 12 cm dan tinggi 7 cm. Luas segitiga tersebut adalah...',
    options: ['42 cm²', '84 cm²', '19 cm²', '38 cm²'],
    correctAnswer: 0,
    explanation: 'Luas segitiga = (alas × tinggi) ÷ 2 = (12 × 7) ÷ 2 = 84 ÷ 2 = 42 cm².',
    conceptTag: 'Luas Segitiga Dasar SD',
    hint: 'Jangan lupa membagi dua perkalian alas dan tingginya.'
  },

  // ==========================================
  // 3. KALKULUS
  // ==========================================
  // SMA Level (Kalkulus)
  {
    id: 'KAL-SMA-01',
    subtopic: 'Kalkulus',
    level: 'SMA',
    question: 'Turunan pertama dari fungsi f(x) = 3x⁴ - 5x² + 7x - 2 adalah f\'(x) = ...',
    options: ['12x³ - 10x + 7', '12x³ - 5x + 7', '7x³ - 10x + 7', '12x⁴ - 10x² + 7'],
    correctAnswer: 0,
    explanation: 'Gunakan aturan pangkat turunan d/dx [a x^n] = a · n x^(n-1). f\'(x) = 3(4)x³ - 5(2)x + 7(1) - 0 = 12x³ - 10x + 7.',
    conceptTag: 'Aturan Pangkat Turunan SMA',
    hint: 'Kalikan koefisien dengan pangkat lama, lalu kurangi pangkat dengan 1.'
  },
  {
    id: 'KAL-SMA-02',
    subtopic: 'Kalkulus',
    level: 'SMA',
    question: 'Hasil dari integral tak tentu ∫ (6x² + 4x - 1) dx adalah...',
    options: ['2x³ + 2x² - x + C', '3x³ + 4x² - x + C', '12x + 4 + C', '2x³ + 4x² - x + C'],
    correctAnswer: 0,
    explanation: 'Gunakan aturan integral ∫ a x^n dx = (a/(n+1)) x^(n+1). ∫ (6x² + 4x - 1) dx = (6/3)x³ + (4/2)x² - x + C = 2x³ + 2x² - x + C.',
    conceptTag: 'Integral Tak Tentu Polinomial SMA',
    hint: 'Integral adalah anti-turunan; tambahkan 1 pada pangkat lalu bagi dengan pangkat baru tersebut.'
  },
  {
    id: 'KAL-SMA-03',
    subtopic: 'Kalkulus',
    level: 'SMA',
    question: 'Nilai dari lim (x→3) [(x² - 9) / (x - 3)] adalah...',
    options: ['6', '3', '0', 'Tak hingga'],
    correctAnswer: 0,
    explanation: 'Faktorkan pembilang: (x² - 9) = (x - 3)(x + 3). Maka bentuk limit menjadi lim (x→3) (x + 3) = 3 + 3 = 6.',
    conceptTag: 'Limit Fungsi Aljabar Pemfaktoran SMA',
    hint: 'Substitusi langsung menghasilkan bentuk tak tentu 0/0, sehingga perlu difaktorkan terlebih dahulu.'
  },

  // SMP Level (Kalkulus Foundation: Fungsi & Gradien)
  {
    id: 'KAL-SMP-01',
    subtopic: 'Kalkulus',
    level: 'SMP',
    question: 'Gradien (kemiringan garis) yang melalui titik A(1, 2) dan B(4, 11) adalah...',
    options: ['3', '2', '4', '5'],
    correctAnswer: 0,
    explanation: 'Rumus gradien m = (y₂ - y₁) / (x₂ - x₁) = (11 - 2) / (4 - 1) = 9 / 3 = 3.',
    conceptTag: 'Gradien Garis Lurus SMP',
    hint: 'Kemiringan adalah perubahan y dibagi perubahan x (laju perubahan rata-rata).'
  },
  {
    id: 'KAL-SMP-02',
    subtopic: 'Kalkulus',
    level: 'SMP',
    question: 'Diketahui fungsi linear f(x) = 4x - 5. Jika f(a) = 11, maka nilai a adalah...',
    options: ['4', '3', '5', '6'],
    correctAnswer: 0,
    explanation: 'Substitusi f(a) = 4a - 5 = 11 ⇒ 4a = 16 ⇒ a = 4.',
    conceptTag: 'Nilai Fungsi Linear SMP',
    hint: 'Bentuk persamaan aljabar dari nilai output fungsi f(a) = 11.'
  },
  {
    id: 'KAL-SMP-03',
    subtopic: 'Kalkulus',
    level: 'SMP',
    question: 'Sebuah mobil melaju dengan kecepatan konstan menempuh jarak 180 km dalam waktu 3 jam. Laju perubahan jarak terhadap waktu (kecepatan) adalah...',
    options: ['60 km/jam', '50 km/jam', '90 km/jam', '45 km/jam'],
    correctAnswer: 0,
    explanation: 'Kecepatan rata-rata = Jarak / Waktu = 180 km / 3 jam = 60 km/jam.',
    conceptTag: 'Laju Perubahan Konstan SMP',
    hint: 'Kecepatan merupakan bentuk paling mendasar dari konsep laju turunan.'
  },

  // SD Level (Kalkulus Foundation: Pola Perubahan & Perbandingan)
  {
    id: 'KAL-SD-01',
    subtopic: 'Kalkulus',
    level: 'SD',
    question: 'Sebuah keran air mengisi ember sebanyak 2 liter air setiap menit. Dalam waktu 8 menit, ember tersebut terisi air sebanyak...',
    options: ['16 liter', '10 liter', '14 liter', '18 liter'],
    correctAnswer: 0,
    explanation: 'Total isi = Laju pengisian × Waktu = 2 liter/menit × 8 menit = 16 liter.',
    conceptTag: 'Akumulasi Laju Perubahan SD',
    hint: 'Kalikan laju penambahan per menit dengan total waktu yang berjalan.'
  },
  {
    id: 'KAL-SD-02',
    subtopic: 'Kalkulus',
    level: 'SD',
    question: 'Harga 3 buku tulis adalah Rp12.000,00. Harga 5 buku tulis yang sama adalah...',
    options: ['Rp20.000,00', 'Rp18.000,00', 'Rp24.000,00', 'Rp15.000,00'],
    correctAnswer: 0,
    explanation: 'Harga 1 buku = Rp12.000 ÷ 3 = Rp4.000. Maka 5 buku = 5 × Rp4.000 = Rp20.000,00.',
    conceptTag: 'Perbandingan Senilai SD',
    hint: 'Cari harga satuannya terlebih dahulu dengan membagi total harga.'
  },
  {
    id: 'KAL-SD-03',
    subtopic: 'Kalkulus',
    level: 'SD',
    question: 'Sebuah lilin dinyalakan. Setiap jam panjangnya berkurang 3 cm. Jika awalnya panjang lilin 20 cm, setelah 4 jam panjangnya tinggal...',
    options: ['8 cm', '12 cm', '7 cm', '9 cm'],
    correctAnswer: 0,
    explanation: 'Pengurangan total = 4 jam × 3 cm = 12 cm. Sisa panjang lilin = 20 cm - 12 cm = 8 cm.',
    conceptTag: 'Pengurangan Konstan (Laju Berkurang) SD',
    hint: 'Hitung total pengurangan lilin selama 4 jam terlebih dahulu.'
  },

  // ==========================================
  // 4. STATISTIKA
  // ==========================================
  // SMA Level (Statistika)
  {
    id: 'STA-SMA-01',
    subtopic: 'Statistika',
    level: 'SMA',
    question: 'Variansi (ragam) dari kumpulan data tunggal: 3, 5, 7, 7, 8 adalah...',
    options: ['3,2', '4,0', '2,8', '1,6'],
    correctAnswer: 0,
    explanation: 'Rata-rata x̄ = (3 + 5 + 7 + 7 + 8) / 5 = 30 / 5 = 6. Kuadrat deviasi: (3-6)² + (5-6)² + (7-6)² + (7-6)² + (8-6)² = 9 + 1 + 1 + 1 + 4 = 16. Variansi = 16 / 5 = 3,2.',
    conceptTag: 'Ukuran Penyebaran Variansi Data Tunggal SMA',
    hint: 'Cari rata-rata terlebih dahulu, lalu hitung jumlah kuadrat selisih tiap data terhadap rata-rata dibagi n.'
  },
  {
    id: 'STA-SMA-02',
    subtopic: 'Statistika',
    level: 'SMA',
    question: 'Dari 8 orang calon pengurus OSIS, akan dipilih 3 orang untuk menjadi delegasi lomba. Banyak cara pemilihan yang mungkin adalah...',
    options: ['56 cara', '336 cara', '24 cara', '120 cara'],
    correctAnswer: 0,
    explanation: 'Karena urutan tidak diperhatikan, gunakan kombinasi: ₈C₃ = 8! / (3! × 5!) = (8 × 7 × 6) / (3 × 2 × 1) = 56 cara.',
    conceptTag: 'Kombinasi Peluang SMA',
    hint: 'Gunakan kombinasi karena pemilihan delegasi tidak memperhatikan jabatan/urutan.'
  },
  {
    id: 'STA-SMA-03',
    subtopic: 'Statistika',
    level: 'SMA',
    question: 'Dalam sebuah kantong terdapat 5 kelereng merah dan 3 kelereng biru. Diambil 2 kelereng satu per satu tanpa pengembalian. Peluang terambilnya kedua kelereng berwarna merah adalah...',
    options: ['5/14', '25/64', '5/28', '15/56'],
    correctAnswer: 0,
    explanation: 'Peluang kelereng pertama merah = 5/8. Karena tidak dikembalikan, sisa kelereng merah = 4 dari total 7. Peluang kedua merah = 4/7. Peluang total = (5/8) × (4/7) = 20/56 = 5/14.',
    conceptTag: 'Peluang Kejadian Bersyarat SMA',
    hint: 'Perhatikan bahwa jumlah kelereng berkurang 1 pada pengambilan kedua.'
  },

  // SMP Level (Statistika)
  {
    id: 'STA-SMP-01',
    subtopic: 'Statistika',
    level: 'SMP',
    question: 'Nilai rata-rata ulangan matematika dari 9 siswa adalah 70. Jika digabungkan dengan nilai seorang siswa baru, rata-ratanya menjadi 72. Nilai siswa baru tersebut adalah...',
    options: ['90', '88', '92', '86'],
    correctAnswer: 0,
    explanation: 'Total nilai 9 siswa = 9 × 70 = 630. Total nilai 10 siswa = 10 × 72 = 720. Nilai siswa baru = 720 - 630 = 90.',
    conceptTag: 'Rata-rata Gabungan Mean SMP',
    hint: 'Hitung jumlah nilai total sebelum dan sesudah siswa baru bergabung.'
  },
  {
    id: 'STA-SMP-02',
    subtopic: 'Statistika',
    level: 'SMP',
    question: 'Median dari data: 7, 4, 9, 5, 8, 6, 7, 8, 9 adalah...',
    options: ['7', '7,5', '8', '6,5'],
    correctAnswer: 0,
    explanation: 'Urutkan data: 4, 5, 6, 7, 7, 8, 8, 9, 9. Ada 9 data (ganjil). Median adalah data ke-(9+1)/2 = data ke-5, yaitu 7.',
    conceptTag: 'Median Data Ganjil SMP',
    hint: 'Wajib mengurutkan data dari nilai terkecil ke terbesar terlebih dahulu.'
  },
  {
    id: 'STA-SMP-03',
    subtopic: 'Statistika',
    level: 'SMP',
    question: 'Sebuah dadu bermata enam dilempar sekali. Peluang munculnya mata dadu bilangan prima adalah...',
    options: ['1/2', '1/3', '2/3', '1/6'],
    correctAnswer: 0,
    explanation: 'Ruang sampel S = {1, 2, 3, 4, 5, 6} (n(S) = 6). Bilangan prima pada dadu = {2, 3, 5} (n(A) = 3). Peluang = 3/6 = 1/2.',
    conceptTag: 'Peluang Teoritik Tunggal SMP',
    hint: 'Mata dadu prima adalah 2, 3, dan 5 (ingat 1 bukan bilangan prima).'
  },

  // SD Level (Statistika)
  {
    id: 'STA-SD-01',
    subtopic: 'Statistika',
    level: 'SD',
    question: 'Nilai ulangan Andi adalah 80, 75, 85, dan 80. Nilai rata-rata ulangan Andi adalah...',
    options: ['80', '82', '78', '85'],
    correctAnswer: 0,
    explanation: 'Rata-rata = (80 + 75 + 85 + 80) ÷ 4 = 320 ÷ 4 = 80.',
    conceptTag: 'Menghitung Rata-rata Sederhana SD',
    hint: 'Jumlahkan seluruh nilai lalu bagi dengan banyaknya ulangan.'
  },
  {
    id: 'STA-SD-02',
    subtopic: 'Statistika',
    level: 'SD',
    question: 'Data berat badan (kg) 7 anak: 32, 35, 32, 34, 32, 36, 35. Modus dari data tersebut adalah...',
    options: ['32 kg', '35 kg', '34 kg', '36 kg'],
    correctAnswer: 0,
    explanation: 'Modus adalah nilai yang paling sering muncul. Nilai 32 muncul sebanyak 3 kali (terbanyak).',
    conceptTag: 'Menentukan Modus SD',
    hint: 'Cari bilangan yang memiliki frekuensi kemunculan paling banyak.'
  },
  {
    id: 'STA-SD-03',
    subtopic: 'Statistika',
    level: 'SD',
    question: 'Pada diagram penjualan buah, Senin terjual 15 kg, Selasa 20 kg, dan Rabu 25 kg. Total buah yang terjual selama tiga hari adalah...',
    options: ['60 kg', '55 kg', '65 kg', '70 kg'],
    correctAnswer: 0,
    explanation: 'Total = 15 + 20 + 25 = 60 kg.',
    conceptTag: 'Membaca Data Penjumlahan SD',
    hint: 'Jumlahkan seluruh penjualan dari ketiga hari tersebut.'
  },

  // ==========================================
  // 5. ARITMATIKA
  // ==========================================
  // SMA Level (Aritmatika)
  {
    id: 'ARI-SMA-01',
    subtopic: 'Aritmatika',
    level: 'SMA',
    question: 'Jumlah tak hingga dari deret geometri: 18 + 6 + 2 + 2/3 + ... adalah...',
    options: ['27', '24', '36', '54'],
    correctAnswer: 0,
    explanation: 'Suku pertama a = 18. Rasio r = 6/18 = 1/3. Rumus jumlah deret geometri tak hingga S∞ = a / (1 - r) = 18 / (1 - 1/3) = 18 / (2/3) = 18 × (3/2) = 27.',
    conceptTag: 'Deret Geometri Tak Hingga SMA',
    hint: 'Gunakan rumus S∞ = a / (1 - r) dengan syarat -1 < r < 1.'
  },
  {
    id: 'ARI-SMA-02',
    subtopic: 'Aritmatika',
    level: 'SMA',
    question: 'Nilai dari ²log 24 + ²log 6 - ²log 9 adalah...',
    options: ['4', '3', '5', '6'],
    correctAnswer: 0,
    explanation: 'Gunakan sifat logaritma: log a + log b - log c = log (a · b / c). Maka ²log (24 × 6 / 9) = ²log (144 / 9) = ²log 16 = 4 karena 2⁴ = 16.',
    conceptTag: 'Sifat-sifat Operasi Logaritma SMA',
    hint: 'Penjumlahan logaritma setara perkalian argumen, pengurangan setara pembagian.'
  },
  {
    id: 'ARI-SMA-03',
    subtopic: 'Aritmatika',
    level: 'SMA',
    question: 'Modal sebesar Rp5.000.000,00 ditabung dengan bunga majemuk 10% per tahun. Besar tabungan setelah 2 tahun adalah...',
    options: ['Rp6.050.000,00', 'Rp6.000.000,00', 'Rp5.500.000,00', 'Rp6.100.000,00'],
    correctAnswer: 0,
    explanation: 'Rumus bunga majemuk Mn = M(1 + i)^n = 5.000.000 × (1 + 0,10)² = 5.000.000 × (1,1)² = 5.000.000 × 1,21 = Rp6.050.000,00.',
    conceptTag: 'Aritmatika Finansial Bunga Majemuk SMA',
    hint: 'Pada bunga majemuk, bunga periode berikutnya dihitung dari modal yang telah berbunga.'
  },

  // SMP Level (Aritmatika)
  {
    id: 'ARI-SMP-01',
    subtopic: 'Aritmatika',
    level: 'SMP',
    question: 'Suku ke-25 dari barisan aritmatika 5, 9, 13, 17, ... adalah...',
    options: ['101', '97', '105', '93'],
    correctAnswer: 0,
    explanation: 'Suku pertama a = 5, beda b = 9 - 5 = 4. Rumus suku ke-n: Un = a + (n - 1)b. U₂₅ = 5 + (25 - 1)4 = 5 + 24(4) = 5 + 96 = 101.',
    conceptTag: 'Barisan Aritmatika Suku ke-n SMP',
    hint: 'Gunakan rumus suku ke-n barisan aritmatika Un = a + (n-1)b.'
  },
  {
    id: 'ARI-SMP-02',
    subtopic: 'Aritmatika',
    level: 'SMP',
    question: 'Seorang pedagang membeli sepeda seharga Rp800.000,00 lalu menjualnya kembali dengan keuntungan 15%. Harga jual sepeda tersebut adalah...',
    options: ['Rp920.000,00', 'Rp900.000,00', 'Rp950.000,00', 'Rp880.000,00'],
    correctAnswer: 0,
    explanation: 'Besar keuntungan = 15% × Rp800.000 = Rp120.000. Harga jual = Harga beli + Untung = Rp800.000 + Rp120.000 = Rp920.000,00.',
    conceptTag: 'Aritmatika Sosial Persentase Untung SMP',
    hint: 'Hitung nilai keuntungan rupiahnya terlebih dahulu, lalu tambahkan ke harga beli.'
  },
  {
    id: 'ARI-SMP-03',
    subtopic: 'Aritmatika',
    level: 'SMP',
    question: 'Hasil dari operasi perpangkatan 2⁻³ + 4⁻¹ adalah...',
    options: ['3/8', '1/8', '1/4', '5/8'],
    correctAnswer: 0,
    explanation: '2⁻³ = 1/2³ = 1/8. 4⁻¹ = 1/4 = 2/8. Maka 1/8 + 2/8 = 3/8.',
    conceptTag: 'Pangkat Negatif dan Pecahan SMP',
    hint: 'Ingat rumus pangkat negatif: a^(-n) = 1/(a^n).'
  },

  // SD Level (Aritmatika)
  {
    id: 'ARI-SD-01',
    subtopic: 'Aritmatika',
    level: 'SD',
    question: 'Hasil dari operasi hitung pecahan 2/3 + 1/4 adalah...',
    options: ['11/12', '3/7', '3/12', '9/12'],
    correctAnswer: 0,
    explanation: 'Samakan penyebut dengan KPK(3, 4) = 12: 2/3 = 8/12 dan 1/4 = 3/12. Maka 8/12 + 3/12 = 11/12.',
    conceptTag: 'Penjumlahan Pecahan Beda Penyebut SD',
    hint: 'Samakan penyebut kedua pecahan terlebih dahulu menggunakan KPK.'
  },
  {
    id: 'ARI-SD-02',
    subtopic: 'Aritmatika',
    level: 'SD',
    question: 'Faktor Persekutuan Terbesar (FPB) dari bilangan 24 dan 36 adalah...',
    options: ['12', '6', '8', '18'],
    correctAnswer: 0,
    explanation: 'Faktorisasi prima: 24 = 2³ × 3; 36 = 2² × 3². FPB = 2² × 3 = 4 × 3 = 12.',
    conceptTag: 'FPB Dua Bilangan SD',
    hint: 'Ambil faktor prima yang sama dengan pangkat terkecil.'
  },
  {
    id: 'ARI-SD-03',
    subtopic: 'Aritmatika',
    level: 'SD',
    question: 'Hasil dari 45 + 15 × 3 - 20 adalah...',
    options: ['70', '160', '80', '65'],
    correctAnswer: 0,
    explanation: 'Dahulukan operasi perkalian: 15 × 3 = 45. Lalu operasi penjumlahan dan pengurangan urut dari kiri: 45 + 45 - 20 = 90 - 20 = 70.',
    conceptTag: 'Urutan Operasi Campuran (KABATAKU) SD',
    hint: 'Perkalian harus dikerjakan lebih dahulu sebelum penjumlahan dan pengurangan.'
  },
];

// Subtopics sequence
export const SUBTOPICS_SEQUENCE: SubTopic[] = [
  'Aljabar',
  'Geometri',
  'Kalkulus',
  'Statistika',
  'Aritmatika',
];

// Diagnostic root-cause pedagogical mapping
export const ROOT_CAUSE_MAP: Record<SubTopic, Record<MasteryStatus, { title: string; description: string; missingPrerequisite: string; modules: string[] }>> = {
  Aljabar: {
    SMA_MASTERED: {
      title: 'Pemahaman Konseptual Aljabar Tingkat Tinggi Sangat Kuat',
      description: 'Siswa menguasai fungsi komposisi, sistem persamaan linear, dan karakteristik akar kuadrat dengan pemikiran analitis tajam.',
      missingPrerequisite: 'Tidak ada celah signifikan.',
      modules: ['Pengayaan Aljabar Olimpiade', 'Matriks & Transformasi Lanjutan']
    },
    SMP_FOUNDATIONAL: {
      title: 'Kesulitan Pemodelan Kompleks SMA Berakar dari Manipulasi Aljabar Abstrak',
      description: 'Siswa paham operasi aljabar dasar SMP, namun mengalami kesulitan ketika variabel digabungkan dalam fungsi kuadrat atau bentuk komposisi bertingkat.',
      missingPrerequisite: 'Pemfaktoran kuadrat sempurna dan analisis diskriminan fungsi.',
      modules: ['Review Tuntas Pemfaktoran SMP', 'Transisi Fungsi Kuadrat SMA', 'Latihan Manipulasi Simbolik']
    },
    SD_FOUNDATIONAL: {
      title: 'Kendala Aljabar Berakar dari Logika Persamaan Tingkat SMP',
      description: 'Siswa menguasai operasi variabel dasar tingkat SD, namun masih ragu saat memindahkan ruas tanda negatif dan mengoperasikan suku tak sejenis.',
      missingPrerequisite: 'Konsep kesamaan nilai pada persamaan satu variabel dan sifat distributif perkalian suku aljabar.',
      modules: ['Fondasi Persamaan Linear Satu Variabel', 'Penguasaan Sifat Distributif Aljabar', 'Visualisasi Neraca Nilai']
    },
    BASIC_REMEDIAL: {
      title: 'Fondasi Numerasi dan Simbolik Aritmatika SD Perlu Dibangun',
      description: 'Siswa merasa kewalahan memahami aljabar SMA karena konsep pola bilangan dan variabel pengganti bilangan belum terinternalisasi secara intuitif.',
      missingPrerequisite: 'Pola kelipatan angka dasar dan arti simbol huruf sebagai pengganti bilangan.',
      modules: ['Remedial Logika Pola Bilangan SD', 'Pengantar Pengganti Huruf Intuitif', 'Latihan Aritmatika Bertahap']
    }
  },
  Geometri: {
    SMA_MASTERED: {
      title: 'Spasial Ruang Tiga Dimensi dan Analitik Unggul',
      description: 'Visualisasi proyeksi titik ke bidang serta formulasi persamaan lingkaran dikuasai secara komprehensif.',
      missingPrerequisite: 'Tidak ada celah.',
      modules: ['Vektor Ruang R3 Lanjutan', 'Irisan Kerucut Analitik']
    },
    SMP_FOUNDATIONAL: {
      title: 'Hambatan Dimensi Tiga SMA Berakar dari Kerapuhan Konsep Pythagoras 3D',
      description: 'Siswa hafal rumus bidang datar SMP, tetapi belum mampu mengabstraksikan segitiga siku-siku di dalam ruang kubus/balok.',
      missingPrerequisite: 'Proyeksi garis siku-siku dalam ruang dan penguraian bangun ruang ke jaring-jaring datar.',
      modules: ['Eksplorasi Tripel Pythagoras Terapan', 'Konstruksi Kerangka Ruang Digital', 'Jarak Titik ke Garis']
    },
    SD_FOUNDATIONAL: {
      title: 'Hambatan Geometri Berakar dari Konsep Luas & Volume SMP',
      description: 'Siswa memahami keliling dan bangun datar SD, namun belum mengaitkan hubungan dimensi panjang terhadap kapasitas volume.',
      missingPrerequisite: 'Hubungan luas alas dengan tinggi prisma/tabung serta rumus hubungan antar sudut.',
      modules: ['Pondasi Bangun Ruang Sisi Datar', 'Konsep Sudut Berpelurus & Berseberangan', 'Visualisasi Luas Permukaan']
    },
    BASIC_REMEDIAL: {
      title: 'Pemahaman Sifat Bangun Datar dan Satuan Dimensi Memerlukan Bimbingan',
      description: 'Siswa belum membedakan secara intuitif antara ukuran satu dimensi (keliling), dua dimensi (luas), dan tiga dimensi (volume).',
      missingPrerequisite: 'Pengenalan ciri bangun geometri dan pengukuran panjang dasar SD.',
      modules: ['Eksplorasi Bentuk Bangun Datar Dasar', 'Pengukuran Keliling Melalui Objek Konkret', 'Latihan Satuan Baku']
    }
  },
  Kalkulus: {
    SMA_MASTERED: {
      title: 'Intuisi Laju Perubahan dan Akumulasi Sangat Matang',
      description: 'Mahir mengaplikasikan aturan turunan polinomial serta anti-turunan integral dengan dasar batas limit yang kokoh.',
      missingPrerequisite: 'Tidak ada kendala prasyarat.',
      modules: ['Aplikasi Turunan Ekstrem & Optimasi', 'Metode Integrasi Substitusi & Parsial']
    },
    SMP_FOUNDATIONAL: {
      title: 'Kesulitan Aturan Rantai Kalkulus Berakar dari Pemahaman Gradien & Grafik',
      description: 'Siswa dapat menghitung fungsi linear sederhana, namun belum melihat turunan f\'(x) sebagai gradien garis singgung sesaat.',
      missingPrerequisite: 'Makna fisis dan geometris kemiringan garis (Δy/Δx) serta manipulasi pecahan bentuk aljabar limit.',
      modules: ['Membedah Gradien Garis Singgung Dinamis', 'Teknik Pemfaktoran Bentuk Tak Tentu 0/0', 'Konsep Laju Perubahan Rata-rata']
    },
    SD_FOUNDATIONAL: {
      title: 'Kesulitan Memahami Turunan Berakar dari Konsep Laju & Perbandingan SD',
      description: 'Konsep kecepatan sebagai laju perubahan jarak terhadap waktu belum dipahami sebagai rasio per satuan waktu.',
      missingPrerequisite: 'Penalaran perbandingan senilai dan laju satuan (unit rate).',
      modules: ['Pemahaman Rasio dan Laju Satuan', 'Grafik Pergerakan Sederhana', 'Fondasi Variabel Berubah']
    },
    BASIC_REMEDIAL: {
      title: 'Memerlukan Penguatan Konsep Penambahan & Pengurangan Proporsional',
      description: 'Siswa membutuhkan analogi visual nyata bagaimana suatu nilai bertambah atau menyusut secara teratur dari waktu ke waktu.',
      missingPrerequisite: 'Hubungan perkalian sebagai akumulasi penjumlahan berulang.',
      modules: ['Pola Akumulasi Penjumlahan Konkret', 'Analogi Keran & Pengisian Wadah', 'Aritmatika Laju Sederhana']
    }
  },
  Statistika: {
    SMA_MASTERED: {
      title: 'Pemikiran Probabilistik dan Analisis Sebaran Data Sangat Baik',
      description: 'Siswa mampu menghitung ukuran variabilitas (ragam/simpangan baku) dan kombinasi peluang majemuk dengan akurasi tinggi.',
      missingPrerequisite: 'Tidak ada celah.',
      modules: ['Distribusi Probabilitas Normal', 'Inferensi Statistik & Uji Hipotesis']
    },
    SMP_FOUNDATIONAL: {
      title: 'Kesulitan Ukuran Sebaran Berakar dari Konsep Rata-rata Berbobot SMP',
      description: 'Siswa mampu menghitung rata-rata tunggal sederhana, namun bingung pada konsep pembobotan frekuensi dan penggabungan sampel.',
      missingPrerequisite: 'Penjumlahan sigma total nilai frekuensi dan logika median data tersusun.',
      modules: ['Penguasaan Rata-rata Gabungan', 'Logika Ruang Sampel Dua Kejadian', 'Latihan Variansi Berpola']
    },
    SD_FOUNDATIONAL: {
      title: 'Kendala Peluang Berakar dari Pembacaan Tabel & Proporsi Pecahan',
      description: 'Siswa memahami data modus langsung, tetapi kesulitan menyatakan peluang kejadian sebagai bentuk pecahan n(A)/n(S).',
      missingPrerequisite: 'Mengubah frekuensi data menjadi representasi pecahan dari total keseluruhan.',
      modules: ['Representasi Data ke Pecahan', 'Membaca Diagram dengan Kritis', 'Peluang Eksperimental Sederhana']
    },
    BASIC_REMEDIAL: {
      title: 'Pengelompokan Objek dan Penghitungan Frekuensi Perlu Diperkuat',
      description: 'Perlu bimbingan membaca data tabel visual dan menghitung jumlah total pengamatan sebelum melangkah ke konsep rata-rata.',
      missingPrerequisite: 'Pencatatan data dengan turus (tally) dan operasi pembagian rata pembagian kue.',
      modules: ['Menghitung Rata Melalui Pembagian Benda Konkret', 'Pencatatan Turus & Diagram Batang', 'Konsep Nilai Terbanyak']
    }
  },
  Aritmatika: {
    SMA_MASTERED: {
      title: 'Literasi Bilangan Eksponensial dan Finansial Sangat Fasih',
      description: 'Menguasai konsep deret tak hingga konvergen, hukum logaritma, serta pemodelan bunga majemuk secara menyeluruh.',
      missingPrerequisite: 'Tidak ada.',
      modules: ['Aplikasi Logaritma Skala Richter & pH', 'Anuitas & Amortisasi Pinjaman']
    },
    SMP_FOUNDATIONAL: {
      title: 'Hambatan Eksponensial SMA Berakar dari Sifat Bilangan Berpangkat SMP',
      description: 'Siswa mengerti deret aritmatika dasar, namun masih rancu menerapkan sifat pangkat negatif dan pecahan pada logaritma.',
      missingPrerequisite: 'Sifat perkalian eksponen a^m · a^n dan aturan pertambahan deret beda tetap.',
      modules: ['Mastery Sifat Bilangan Berpangkat SMP', 'Jembatan Pangkat ke Logaritma', 'Aritmatika Sosial Persentase']
    },
    SD_FOUNDATIONAL: {
      title: 'Kendala Barisan Bilangan Berakar dari Pecahan & KPK Dasar SD',
      description: 'Siswa bisa menghitung bilangan bulat, namun melambat signifikan saat deret atau soal rasio melibatkan pecahan beda penyebut.',
      missingPrerequisite: 'Kelipatan persekutuan terkecil (KPK) untuk penyamaan penyebut pecahan.',
      modules: ['Mastery Pecahan Beda Penyebut', 'FPB & KPK Metode Pohon Faktor', 'Urutan Operasi Hitung Campuran']
    },
    BASIC_REMEDIAL: {
      title: 'Pondasi Operasi Hitung Campuran (KABATAKU) Harus Diperbaiki',
      description: 'Siswa sering melakukan kesalahan urutan operasi (menghitung penjumlahan sebelum perkalian) dan perkalian dasar.',
      missingPrerequisite: 'Hierarki operasi hitung dasar dan tabel perkalian 1-10.',
      modules: ['Aturan Hirarki KABATAKU Interaktif', 'Penguatan Otomatisasi Tabel Perkalian', 'Latihan Soal Cerita Terbimbing']
    }
  }
};

// Realistic mock leaderboard dataset: 10 students per subtopic
export const INITIAL_LEADERBOARD: LeaderboardEntry[] = [
  // Aljabar
  { id: 'LD-ALJ-01', rank: 1, studentName: 'Fajar Pratama', schoolLevel: 'SMA', schoolName: 'SMAN 8 Jakarta', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 94, formattedTime: '01m 34s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-02', rank: 2, studentName: 'Alya Putri Salsabila', schoolLevel: 'SMA', schoolName: 'SMA Labschool Kebayoran', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 108, formattedTime: '01m 48s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-03', rank: 3, studentName: 'Jonathan Aditya', schoolLevel: 'SMA', schoolName: 'SMAN 3 Bandung', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 122, formattedTime: '02m 02s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-04', rank: 4, studentName: 'Rian Firmansyah', schoolLevel: 'SMA', schoolName: 'SMAN 1 Surabaya', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 135, formattedTime: '02m 15s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-05', rank: 5, studentName: 'Clara Michelle', schoolLevel: 'SMA', schoolName: 'SMA Santa Ursula', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 147, formattedTime: '02m 27s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-06', rank: 6, studentName: 'Bagas Wicaksono', schoolLevel: 'SMA', schoolName: 'SMAN 1 Yogyakarta', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 159, formattedTime: '02m 39s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-07', rank: 7, studentName: 'Zahra Anindya', schoolLevel: 'SMP', schoolName: 'SMPN 1 Surabaya', subtopic: 'Aljabar', masteryLevel: 'SMP_FOUNDATIONAL', masteryLabel: 'SMP Foundational', timeSeconds: 168, formattedTime: '02m 48s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-08', rank: 8, studentName: 'Dimas Setiawan', schoolLevel: 'SMA', schoolName: 'SMAN 5 Semarang', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 180, formattedTime: '03m 00s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-09', rank: 9, studentName: 'Nadia Rahmawati', schoolLevel: 'SMA', schoolName: 'SMAN 2 Malang', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 195, formattedTime: '03m 15s', date: '10 Sep 2026', accuracy: 100 },
  { id: 'LD-ALJ-10', rank: 10, studentName: 'Kevin Wijaya', schoolLevel: 'SMA', schoolName: 'SMA Kanisius Jakarta', subtopic: 'Aljabar', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 210, formattedTime: '03m 30s', date: '10 Sep 2026', accuracy: 100 },

  // Geometri
  { id: 'LD-GEO-01', rank: 1, studentName: 'Muhammad Rizky', schoolLevel: 'SMA', schoolName: 'SMAN 1 Denpasar', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 88, formattedTime: '01m 28s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-02', rank: 2, studentName: 'Jessica Tanuwijaya', schoolLevel: 'SMA', schoolName: 'SMA Kristen Petra 1', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 102, formattedTime: '01m 42s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-03', rank: 3, studentName: 'Farhan Dwi Cahyo', schoolLevel: 'SMA', schoolName: 'SMAN 3 Semarang', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 115, formattedTime: '01m 55s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-04', rank: 4, studentName: 'Tiara Aurelia', schoolLevel: 'SMA', schoolName: 'SMAN 70 Jakarta', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 129, formattedTime: '02m 09s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-05', rank: 5, studentName: 'Arif Hidayatullah', schoolLevel: 'SMA', schoolName: 'SMAN 1 Padang', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 141, formattedTime: '02m 21s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-06', rank: 6, studentName: 'Naufal Izzudin', schoolLevel: 'SMA', schoolName: 'SMAN 4 Surakarta', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 154, formattedTime: '02m 34s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-07', rank: 7, studentName: 'Dina Kusuma', schoolLevel: 'SMP', schoolName: 'SMP Labschool Cibubur', subtopic: 'Geometri', masteryLevel: 'SMP_FOUNDATIONAL', masteryLabel: 'SMP Foundational', timeSeconds: 167, formattedTime: '02m 47s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-08', rank: 8, studentName: 'Eko Prasetyo', schoolLevel: 'SMA', schoolName: 'SMAN 2 Purwokerto', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 179, formattedTime: '02m 59s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-09', rank: 9, studentName: 'Sabrina Khairunnisa', schoolLevel: 'SMA', schoolName: 'SMAN 1 Medan', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 192, formattedTime: '03m 12s', date: '10 Sep 2026', accuracy: 100 },
  { id: 'LD-GEO-10', rank: 10, studentName: 'Andre Kurniawan', schoolLevel: 'SMA', schoolName: 'SMA Methodist 3 Medan', subtopic: 'Geometri', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 206, formattedTime: '03m 26s', date: '10 Sep 2026', accuracy: 100 },

  // Kalkulus
  { id: 'LD-KAL-01', rank: 1, studentName: 'Daniel Alexander', schoolLevel: 'SMA', schoolName: 'SMAK 1 BPK Penabur', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 78, formattedTime: '01m 18s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-02', rank: 2, studentName: 'Rania Alatas', schoolLevel: 'SMA', schoolName: 'SMAN 8 Jakarta', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 91, formattedTime: '01m 31s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-03', rank: 3, studentName: 'Ahmad Fauzi', schoolLevel: 'SMA', schoolName: 'MAN Insan Cendekia Serpong', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 104, formattedTime: '01m 44s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-04', rank: 4, studentName: 'Grace Natalia', schoolLevel: 'SMA', schoolName: 'SMA Sutomo 1 Medan', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 119, formattedTime: '01m 59s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-05', rank: 5, studentName: 'Ilham Maulana', schoolLevel: 'SMA', schoolName: 'SMAN 3 Yogyakarta', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 133, formattedTime: '02m 13s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-06', rank: 6, studentName: 'Vania Amanda', schoolLevel: 'SMA', schoolName: 'SMAN 2 Bandung', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 148, formattedTime: '02m 28s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-07', rank: 7, studentName: 'Felix Gunawan', schoolLevel: 'SMA', schoolName: 'SMA Katolik St. Louis 1', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 161, formattedTime: '02m 41s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-08', rank: 8, studentName: 'Putri Maharani', schoolLevel: 'SMA', schoolName: 'SMAN 1 Palembang', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 174, formattedTime: '02m 54s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-09', rank: 9, studentName: 'Rafi Ramadhan', schoolLevel: 'SMA', schoolName: 'SMAN 68 Jakarta', subtopic: 'Kalkulus', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 189, formattedTime: '03m 09s', date: '10 Sep 2026', accuracy: 100 },
  { id: 'LD-KAL-10', rank: 10, studentName: 'Syifa Nuraini', schoolLevel: 'SMP', schoolName: 'SMP Al Azhar 1 Jakarta', subtopic: 'Kalkulus', masteryLevel: 'SMP_FOUNDATIONAL', masteryLabel: 'SMP Foundational', timeSeconds: 202, formattedTime: '03m 22s', date: '10 Sep 2026', accuracy: 100 },

  // Statistika
  { id: 'LD-STA-01', rank: 1, studentName: 'Nabila Syahrani', schoolLevel: 'SMA', schoolName: 'SMAN 2 Jakarta', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 82, formattedTime: '01m 22s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-02', rank: 2, studentName: 'Kenzo Alvaro', schoolLevel: 'SMA', schoolName: 'SMA Kharisma Bangsa', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 95, formattedTime: '01m 35s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-03', rank: 3, studentName: 'Siti Maryam', schoolLevel: 'SMA', schoolName: 'MAN 2 Kota Malang', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 109, formattedTime: '01m 49s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-04', rank: 4, studentName: 'David Santoso', schoolLevel: 'SMA', schoolName: 'SMA Kristen Gloria 1', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 124, formattedTime: '02m 04s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-05', rank: 5, studentName: 'Annisa Fitriani', schoolLevel: 'SMA', schoolName: 'SMAN 1 Makassar', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 137, formattedTime: '02m 17s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-06', rank: 6, studentName: 'Bima Satria', schoolLevel: 'SMA', schoolName: 'SMAN 5 Surabaya', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 151, formattedTime: '02m 31s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-07', rank: 7, studentName: 'Alisha Safira', schoolLevel: 'SMP', schoolName: 'SMP Taruna Nusantara Magelang', subtopic: 'Statistika', masteryLevel: 'SMP_FOUNDATIONAL', masteryLabel: 'SMP Foundational', timeSeconds: 165, formattedTime: '02m 45s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-08', rank: 8, studentName: 'Fathan Akbar', schoolLevel: 'SMA', schoolName: 'SMAN 1 Balikpapan', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 178, formattedTime: '02m 58s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-09', rank: 9, studentName: 'Celine Octavia', schoolLevel: 'SMA', schoolName: 'SMA Trinitas Bandung', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 193, formattedTime: '03m 13s', date: '10 Sep 2026', accuracy: 100 },
  { id: 'LD-STA-10', rank: 10, studentName: 'Yusuf Habibi', schoolLevel: 'SMA', schoolName: 'SMAN 3 Banda Aceh', subtopic: 'Statistika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 207, formattedTime: '03m 27s', date: '10 Sep 2026', accuracy: 100 },

  // Aritmatika
  { id: 'LD-ARI-01', rank: 1, studentName: 'Rizki Darmawan', schoolLevel: 'SMA', schoolName: 'SMAN 1 Bogor', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 72, formattedTime: '01m 12s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-02', rank: 2, studentName: 'Chantika Devina', schoolLevel: 'SMA', schoolName: 'SMAN 3 Jakarta', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 86, formattedTime: '01m 26s', date: '14 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-03', rank: 3, studentName: 'Samuel Christian', schoolLevel: 'SMA', schoolName: 'SMA Santa Maria Cirebon', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 99, formattedTime: '01m 39s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-04', rank: 4, studentName: 'Hafiz Prasetya', schoolLevel: 'SMA', schoolName: 'SMAN 1 Surakarta', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 112, formattedTime: '01m 52s', date: '13 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-05', rank: 5, studentName: 'Dhiya Ulhaq', schoolLevel: 'SMA', schoolName: 'SMAN 8 Medan', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 126, formattedTime: '02m 06s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-06', rank: 6, studentName: 'Nadira Alya', schoolLevel: 'SMA', schoolName: 'SMAN 1 Sukabumi', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 140, formattedTime: '02m 20s', date: '12 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-07', rank: 7, studentName: 'Taufik Hidayat', schoolLevel: 'SMP', schoolName: 'SMPN 2 Semarang', subtopic: 'Aritmatika', masteryLevel: 'SMP_FOUNDATIONAL', masteryLabel: 'SMP Foundational', timeSeconds: 153, formattedTime: '02m 33s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-08', rank: 8, studentName: 'Jessica Wijaya', schoolLevel: 'SMA', schoolName: 'SMA Katolik Rajawali Makassar', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 167, formattedTime: '02m 47s', date: '11 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-09', rank: 9, studentName: 'Adnan Zaidan', schoolLevel: 'SMA', schoolName: 'SMAN 1 Pontianak', subtopic: 'Aritmatika', masteryLevel: 'SMA_MASTERED', masteryLabel: 'SMA Mastered', timeSeconds: 181, formattedTime: '03m 01s', date: '10 Sep 2026', accuracy: 100 },
  { id: 'LD-ARI-10', rank: 10, studentName: 'Bella Amanda', schoolLevel: 'SD', schoolName: 'SD Mentari Grand Surya', subtopic: 'Aritmatika', masteryLevel: 'SD_FOUNDATIONAL', masteryLabel: 'SD Foundational', timeSeconds: 198, formattedTime: '03m 18s', date: '10 Sep 2026', accuracy: 100 },
];
