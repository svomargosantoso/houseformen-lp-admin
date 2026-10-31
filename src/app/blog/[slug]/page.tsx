import Link from 'next/link';
import { BLOG_ARTICLES } from '@/lib/data';

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="section">
        <div className="container">
          <h1>Artikel tidak ditemukan di daftar migrasi</h1>
          <p>Slug &ldquo;{slug}&rdquo; tidak ada di 14 artikel blog lama yang terverifikasi.</p>
          <p>
            <Link href="/blog">Kembali ke daftar blog</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <span className="badge">{article.category}</span>
        <h1>{article.title}</h1>
        <p>{article.date}</p>
        <div className="todo">
          <strong>TODO — Isi artikel belum dimigrasi</strong>
          <p>
            Judul, tanggal, dan kategori di atas terverifikasi dari indeks
            blog repo lama. Isi lengkap artikel ini (page.tsx per slug di
            repo lama) belum dibaca dan belum dipindahkan — halaman ini
            sengaja tidak menampilkan isi karangan.
          </p>
        </div>
        <p>
          <Link href="/blog">Kembali ke daftar blog</Link>
        </p>
      </div>
    </section>
  );
}
