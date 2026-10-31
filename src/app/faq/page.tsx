import Link from 'next/link';
import { FAQ_ITEMS, SITE_DOMAIN } from '@/lib/data';

// FAQ dimigrasikan dari src/app/faq/page.tsx repo lama (15 tanya jawab).
// Perubahan dari naskah lama dicatat di data.ts: nomor BPOM memakai nomor
// box MD 867031569523 (disetujui user), jawaban harga diperbarui ke daftar
// harga poster, dan tombol WhatsApp lama (link CTWA adcuan) TIDAK disalin.
export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: SITE_DOMAIN },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: `${SITE_DOMAIN}/faq`,
      },
    ],
  };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="container">
        <h1>Pertanyaan yang Sering Ditanyakan</h1>
        <p>
          Jawaban untuk pertanyaan umum tentang Coffiy — Kopi Stamina Pria
          Dewasa. Isi dimigrasikan dari halaman FAQ LP lama.
        </p>
        {FAQ_ITEMS.map((f) => (
          <details key={f.question} className="faq-item">
            <summary>{f.question}</summary>
            <p>{f.answer}</p>
          </details>
        ))}
        <div className="todo">
          <strong>TODO — Tombol konsultasi WhatsApp belum aktif</strong>
          <p>
            Tombol konsultasi di halaman FAQ lama memakai link CTWA adcuan
            yang belum terverifikasi ulang, sehingga tidak disalin ke halaman
            ini. Konsultasi memakai rotator CS setelah konfigurasi selesai.
          </p>
        </div>
        <p>
          <Link href="/" className="btn btn-outline">
            Kembali ke LP Coffiy
          </Link>{' '}
          <Link href="/erojan" className="btn btn-gold">
            Lihat EROJAN
          </Link>
        </p>
      </div>
    </section>
  );
}
