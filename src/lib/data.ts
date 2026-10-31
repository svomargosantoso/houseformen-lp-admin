// Konten TER VERIFIKASI — sumber dicatat per blok. Aturan: apa pun yang
// bernilai null / bertanda TODO di sini TIDAK BOLEH dirender sebagai data
// nyata di halaman. Lihat ../migrasi-xgsyujj12.md.

export const SITE_DOMAIN = 'https://housemenformen.vercel.app';

export const TOKENS = {
  greenDark: '#14532D',
  greenLeaf: '#3E9B4F',
  gold: '#D9A441',
  cream: '#F7F3E8',
  ink: '#222222',
  muted: '#666666',
} as const;

// Manfaat Coffiy — teks persis dari LP lama (src/app/page.tsx baris ~396-418).
export const COFFIY_BENEFITS = [
  {
    title: 'Energi Maksimal',
    desc: 'Tingkatkan stamina dan energi sepanjang hari tanpa efek samping',
  },
  {
    title: 'Vitalitas Pria',
    desc: 'Formula khusus untuk meningkatkan vitalitas dan performa pria dewasa',
  },
  {
    title: 'Performa Optimal',
    desc: 'Raih performa terbaik dalam aktivitas sehari-hari dan olahraga',
  },
];

// Harga satuan — TERKONFIRMASI user 31 Okt 2026 + poster harga.
// EROJAN Rp 769.000/botol; COFFIY Rp 659.000/box (promo) / Rp 739.000 (normal).
export const UNIT_PRICES = {
  erojanPerBottle: 769000,
  coffiyPerBoxPromo: 659000,
  coffiyPerBoxNormal: 739000,
} as const;

// Paket Coffiy dari LP lama (src/app/page.tsx baris ~278-366) — disimpan
// sebagai arsip migrasi. Halaman LP kini memakai COFFIY_PRICE_PACKAGES
// (daftar harga poster) sebagai daftar paket aktif.
export const COFFIY_PACKAGES = [
  {
    name: 'Paket 1 Box',
    detail: '10 Sachet @ 20g',
    bonus: 'GRATIS ONGKIR + BONUS KONSULTASI',
    badge: 'PAKET HEMAT',
    price: null as string | null,
  },
  {
    name: 'Paket 5 Sachet',
    detail: '5 Sachet @ 20g',
    bonus: 'GRATIS ONGKIR + BONUS KONSULTASI',
    badge: 'TERLARIS',
    price: null as string | null,
  },
];

// Legalitas Coffiy — DISETUJUI user 13:01 WIB 31 Okt 2026: nomor yang
// dipakai di halaman adalah nomor box MD 867031569523. Nomor LP lama
// berbeda dan tidak dipakai (perbedaan dicatat di migrasi-xgsyujj12.md).
export const COFFIY_BPOM = 'MD 867031569523';

// Fakta EROJAN — label botol depan/belakang asli + poster v3 Callout.
// Legalitas DISETUJUI user 13:01 WIB 31 Okt 2026: POM TI 223 079 121.
export const EROJAN_BOTTLE_FACTS = {
  labelText: "FOR MAINTENANCE OF MEN'S HEALTH",
  contents: '60 kapsul @ 418,4 mg',
  dosage: '1 kapsul pagi + 1 kapsul malam',
  warning: 'Hati-hati jika diberikan pada penderita hipertensi atau diabetes.',
  storage: 'Simpan pada suhu di bawah 30°C, lindungi dari cahaya dan kelembapan, jauhkan dari jangkauan anak-anak.',
  producer: 'MOH Pharmaceutical Technologies Sdn Bhd, Selangor — Malaysia',
  importer: 'PT Oui Nusantara Indonesia, Jakarta — Indonesia',
  legality: 'POM TI 223 079 121',
};

// Daftar harga Coffiy — POSTER 2 'COFFIY PRICE LIST' (disetujui user).
// Nama 'Paket Hemat' di halaman Coffiy = 2 box (konteks halaman Coffiy);
// di halaman EROJAN 'Paket Hemat' = 3 botol EROJAN (lihat EROJAN_PRICE_PACKAGES).
export const COFFIY_PRICE_PACKAGES = [
  {
    name: 'Paket Super',
    detail: '3 Box COFFIY — isi 30 sachet',
    normal: 2017000,
    promo: 1830000,
    saving: 187000,
    badge: null as string | null,
  },
  {
    name: 'Combo Super',
    detail: '1 Box COFFIY + 1 Botol EROJAN',
    normal: null as number | null,
    promo: 1428000,
    saving: null as number | null,
    badge: null as string | null,
  },
  {
    name: 'Paket Hemat',
    detail: '2 Box COFFIY — isi 20 sachet',
    normal: 1318000,
    promo: 1245000,
    saving: 73000,
    badge: null as string | null,
  },
  {
    name: 'Paket Pemula',
    detail: '1 Box COFFIY — isi 10 sachet',
    normal: 739000,
    promo: 659000,
    saving: 80000,
    badge: null as string | null,
  },
];

// Daftar harga EROJAN — POSTER 1 'PILIH PAKET ANDA' (disetujui user).
export const EROJAN_PRICE_PACKAGES = [
  {
    name: 'Paket Hemat',
    detail: '3 Botol EROJAN',
    normal: 2307000,
    promo: 2133000,
    saving: 174000,
    badge: 'PAKET HEMAT',
  },
  {
    name: 'Paket Komplit',
    detail: '1 Botol EROJAN + 1 Box COFFIY',
    normal: 1420000,
    promo: 1178000,
    saving: 242000,
    badge: 'BEST SELLER',
  },
  {
    name: 'Paket Praktis',
    detail: '1 Botol EROJAN + 1 Sachet COFFIY',
    normal: 950000,
    promo: 838000,
    saving: 112000,
    badge: null as string | null,
  },
];

// Syarat pengiriman & footer harga — POSTER 1 + POSTER 2 (disetujui user).
export const SHIPPING_TERMS = [
  'GRATIS ONGKIR seluruh Indonesia',
  'BISA COD — bayar di tempat',
  'Pesan hari ini, kirim same day (pesanan hari ini diproses hari ini)',
];
export const PRICE_FOOTER_NOTE = 'Harga bisa berubah sewaktu-waktu.';

// 14 artikel blog — pasangan slug + judul + tanggal + kategori terverifikasi
// dari src/app/blog/page.tsx repo lama (array articles, urutan file).
export const BLOG_ARTICLES = [
  { slug: 'cara-mengatasi-ejakulasi-dini-secara-alami', title: 'Cara Mengatasi Ejakulasi Dini Secara Alami Tanpa Obat Kimia', date: '26 Februari 2024', category: 'High Intent' },
  { slug: 'cara-tahan-lama-saat-berhubungan', title: 'Cara Tahan Lama Saat Berhubungan (Terbukti Efektif)', date: '27 Februari 2024', category: 'High Intent' },
  { slug: 'penyebab-pria-cepat-keluar-dan-cara-mengatasinya', title: 'Penyebab Pria Cepat Keluar dan Cara Mengatasinya', date: '28 Februari 2024', category: 'High Intent' },
  { slug: 'cara-meningkatkan-stamina-pria-usia-30', title: 'Cara Meningkatkan Stamina Pria Usia 30+: Panduan Khusus', date: '29 Februari 2024', category: 'High Intent' },
  { slug: 'solusi-alami-vitalitas-pria-menurun', title: 'Solusi Alami untuk Vitalitas Pria yang Menurun', date: '1 Maret 2024', category: 'Solusi' },
  { slug: 'kenapa-pria-dulu-kuat-sekarang-cepat-selesai', title: 'Kenapa Pria yang Dulu Kuat Sekarang Cepat Selesai?', date: '2 Maret 2024', category: 'Emotional' },
  { slug: 'tanda-stamina-pria-mulai-menurun', title: '7 Tanda-Tanda Stamina Pria Mulai Menurun yang Sering Diabaikan', date: '3 Maret 2024', category: 'Emotional' },
  { slug: 'masalah-pria-yang-jarang-dibahas', title: 'Masalah yang Jarang Dibahas Pria… Tapi Sering Terjadi', date: '6 Maret 2024', category: 'Emotional' },
  { slug: 'review-coffiy-kopi-stamina-pria', title: 'Review Coffiy: Benarkah Bisa Meningkatkan Stamina Pria?', date: '4 Maret 2024', category: 'Review' },
  { slug: 'pengalaman-pria-40-tahun-mengatasi-vitalitas', title: 'Pengalaman Pria 40 Tahun Mengatasi Masalah Vitalitas dengan Coffiy', date: '5 Maret 2024', category: 'Review' },
  { slug: 'cara-mengatasi-stamina-pria-menurun', title: 'Cara Mengatasi Stamina Pria yang Menurun: Panduan Lengkap 2024', date: '25 Februari 2024', category: 'Kesehatan' },
  { slug: 'manfaat-kopi-untuk-stamina-pria', title: 'Manfaat Kopi untuk Stamina Pria: Rahasia Energi Maksimal', date: '21 Februari 2024', category: 'Kesehatan' },
  { slug: 'tips-meningkatkan-vitalitas-pria-secara-alami', title: 'Tips Meningkatkan Vitalitas Pria Secara Alami', date: '20 Februari 2024', category: 'Lifestyle' },
  { slug: 'perbedaan-kopi-biasa-vs-kopi-stamina', title: 'Perbedaan Kopi Biasa vs Kopi Stamina: Mana yang Lebih Baik?', date: '19 Februari 2024', category: 'Edukasi' },
];

// FAQ — dimigrasikan dari src/app/faq/page.tsx repo lama (15 tanya jawab).
// Perubahan dari naskah lama, dicatat jujur:
// - Jawaban 'Apakah Coffiy aman dikonsumsi?' memakai nomor BPOM box
//   MD 867031569523 (disetujui user 13:01), bukan nomor LP lama
//   MD 867031211059. Nomor Halal MUI 00150099991220 dipertahankan dari
//   naskah lama (tidak ada konflik yang dilaporkan atas nomor itu).
// - Jawaban 'Berapa harga Coffiy?' diperbarui dari 'hubungi WhatsApp'
//   menjadi daftar harga poster, karena harga kini dipublikasikan di LP.
// - Tombol WhatsApp lama (link CTWA adcuan) TIDAK disalin; CTA di halaman
//   FAQ baru bertanda TODO sampai rotator CS terverifikasi.
export const FAQ_ITEMS = [
  {
    question: 'Apa itu Coffiy?',
    answer: 'Coffiy adalah kopi premium khusus pria dewasa dengan formula alami yang dirancang untuk meningkatkan stamina, energi, dan vitalitas. Produk ini sudah terdaftar BPOM dan bersertifikat Halal MUI.',
  },
  {
    question: 'Apa manfaat utama Coffiy?',
    answer: 'Coffiy membantu meningkatkan stamina dan energi sepanjang hari, meningkatkan vitalitas pria dewasa, dan mendukung performa optimal dalam aktivitas sehari-hari dan olahraga. Semua dengan bahan alami tanpa efek samping.',
  },
  {
    question: 'Bagaimana cara konsumsi Coffiy?',
    answer: 'Seduh 1 sachet Coffiy dengan 150ml air panas. Aduk hingga larut sempurna. Konsumsi 1-2 kali sehari, pagi dan/atau sore hari untuk hasil optimal.',
  },
  {
    question: 'Apakah Coffiy aman dikonsumsi?',
    answer: 'Ya, sangat aman. Coffiy sudah terdaftar resmi di BPOM dengan nomor MD 867031569523 dan bersertifikat Halal MUI nomor 00150099991220. Terbuat dari bahan alami berkualitas tinggi.',
  },
  {
    question: 'Apakah ada efek samping?',
    answer: 'Coffiy terbuat dari bahan alami dan aman dikonsumsi. Tidak ada efek samping yang berbahaya. Namun, jika Anda memiliki kondisi kesehatan khusus atau sedang mengonsumsi obat tertentu, konsultasikan dengan dokter terlebih dahulu.',
  },
  {
    question: 'Berapa lama efek Coffiy terasa?',
    answer: 'Efek energi dan stamina dapat dirasakan dalam 60-120 menit setelah konsumsi. Untuk hasil optimal dan jangka panjang, konsumsi rutin selama 7-14 hari.',
  },
  {
    question: 'Siapa yang boleh mengonsumsi Coffiy?',
    answer: 'Coffiy diperuntukkan untuk pria dewasa usia 18 tahun ke atas yang ingin meningkatkan stamina, energi, dan vitalitas. Tidak direkomendasikan untuk wanita hamil, menyusui, atau anak-anak.',
  },
  {
    question: 'Berapa harga Coffiy?',
    answer: 'Coffiy tersedia dalam paket: Paket Pemula 1 box (10 sachet) Rp 659.000 (promo, normal Rp 739.000), Paket Hemat 2 box (20 sachet) Rp 1.245.000, Paket Super 3 box (30 sachet) Rp 1.830.000, dan Combo Super 1 box + 1 botol EROJAN Rp 1.428.000. Harga bisa berubah sewaktu-waktu.',
  },
  {
    question: 'Apakah ada promo atau diskon?',
    answer: 'Ya! Kami sering memberikan promo spesial seperti gratis ongkir dan bonus konsultasi. Klik tombol WhatsApp untuk info promo terbaru hari ini.',
  },
  {
    question: 'Bagaimana cara pemesanan?',
    answer: 'Pemesanan sangat mudah! Klik tombol konsultasi gratis via WhatsApp di website kami, tim kami akan membantu proses pemesanan dan menjawab pertanyaan Anda.',
  },
  {
    question: 'Berapa lama pengiriman?',
    answer: 'Pengiriman ke seluruh Indonesia memakan waktu 2-5 hari kerja tergantung lokasi. Kami menggunakan jasa ekspedisi terpercaya untuk memastikan produk sampai dengan aman.',
  },
  {
    question: 'Apakah Coffiy mengandung bahan kimia berbahaya?',
    answer: 'Tidak sama sekali. Coffiy terbuat dari 100% bahan alami pilihan tanpa bahan kimia berbahaya. Semua bahan sudah melalui uji lab dan terdaftar resmi di BPOM.',
  },
  {
    question: 'Bisakah dikonsumsi bersamaan dengan obat lain?',
    answer: 'Untuk keamanan, sebaiknya beri jeda 2-3 jam antara konsumsi Coffiy dengan obat lain. Jika Anda sedang dalam pengobatan rutin, konsultasikan dengan dokter terlebih dahulu.',
  },
  {
    question: 'Apakah Coffiy menyebabkan ketergantungan?',
    answer: 'Tidak. Coffiy terbuat dari bahan alami dan tidak menyebabkan ketergantungan. Anda dapat mengonsumsinya sesuai kebutuhan tanpa khawatir efek ketergantungan.',
  },
  {
    question: 'Bagaimana cara penyimpanan Coffiy?',
    answer: 'Simpan Coffiy di tempat kering, sejuk, dan terhindar dari sinar matahari langsung. Pastikan kemasan tertutup rapat setelah dibuka untuk menjaga kualitas produk.',
  },
];

// Event tracking Meta (SPESIFIKASI, bukan laporan berjalan) — dari dokumen
// spesifikasi bagian 5. Tidak ada angka di sini.
export const META_EVENTS = [
  { event: 'ViewContent', trigger: 'LP produk dibuka', params: 'content_ids (produk), content_type' },
  { event: 'Lead', trigger: 'Form order terkirim / klik WA tercatat', params: 'produk, paket, sumber iklan, ID klik' },
  { event: 'Purchase', trigger: 'Order berstatus selesai', params: 'value (IDR), currency, content_ids, ID klik' },
];
