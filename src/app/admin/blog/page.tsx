'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/lib/data';

type Draft = { judul: string; kategori: string };

const CATEGORIES = [
  'High Intent',
  'Emotional',
  'Review',
  'Kesehatan',
  'Edukasi',
  'Lifestyle',
  'Solusi',
];

export default function AdminBlogPage() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState(CATEGORIES[0]);

  function tambah(e: React.FormEvent) {
    e.preventDefault();
    if (!judul.trim()) return;
    setDrafts([...drafts, { judul: judul.trim(), kategori }]);
    setJudul('');
    setKategori(CATEGORIES[0]);
  }

  return (
    <>
      <h1>Kelola blog</h1>
      <p>
        14 artikel dari blog lama terdaftar di bawah. Isi tiap artikel belum
        dimigrasi — statusnya menunggu migrasi isi per artikel.
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Kategori</th>
            <th>Tanggal</th>
            <th>Status migrasi</th>
          </tr>
        </thead>
        <tbody>
          {BLOG_ARTICLES.map((a) => (
            <tr key={a.slug}>
              <td>
                <Link href={`/blog/${a.slug}`}>{a.title}</Link>
              </td>
              <td>{a.category}</td>
              <td>{a.date}</td>
              <td>Isi belum dimigrasi</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 style={{ marginTop: 28 }}>Tambah draf artikel</h2>
      <form onSubmit={tambah} className="form-grid">
        <label className="field-label" htmlFor="ab-judul">Judul</label>
        <input className="field" id="ab-judul" value={judul} onChange={(e) => setJudul(e.target.value)} required />
        <label className="field-label" htmlFor="ab-kategori">Kategori</label>
        <select className="field" id="ab-kategori" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button className="btn" type="submit">Tambah draf</button>
      </form>
      <p>
        <small>
          Draf hanya tersimpan di sesi browser ini (demo) — belum ada database dan
          belum ada editor MDX.
        </small>
      </p>
      {drafts.length > 0 ? (
        <table className="data">
          <thead>
            <tr>
              <th>Judul draf</th>
              <th>Kategori</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {drafts.map((d, i) => (
              <tr key={i}>
                <td>{d.judul}</td>
                <td>{d.kategori}</td>
                <td>Draf lokal (belum tersimpan)</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <div className="todo">
        <strong>TODO</strong>
        <ul>
          <li>Migrasi isi per artikel dari page.tsx masing-masing slug di repo lama</li>
          <li>Form ubah artikel (editor MDX, mengikuti repo lama)</li>
          <li>Status terbit / draf per artikel</li>
        </ul>
      </div>
    </>
  );
}
