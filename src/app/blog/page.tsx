import Link from 'next/link';
import { BLOG_ARTICLES } from '@/lib/data';

export default function BlogIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Blog — Artikel &amp; Tips Kesehatan Pria</h1>
        <p>
          14 artikel dari blog lama (judul, tanggal, dan kategori terverifikasi
          dari indeks blog repo lama). Isi tiap artikel menyusul pada migrasi
          per artikel.
        </p>
        <div className="grid2">
          {BLOG_ARTICLES.map((a) => (
            <article key={a.slug} className="card">
              <span className="badge">{a.category}</span>
              <h3>
                <Link href={`/blog/${a.slug}`}>{a.title}</Link>
              </h3>
              <p>{a.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
