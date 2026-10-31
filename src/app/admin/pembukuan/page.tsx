'use client';

import { useState } from 'react';
import { formatIDR } from '@/lib/utils';

type Entry = {
  tanggal: string;
  jenis: string;
  keterangan: string;
  produk: string;
  jumlah: number;
};

export default function AdminPembukuanPage() {
  const [rows, setRows] = useState<Entry[]>([]);
  const [tanggal, setTanggal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');
  const [keterangan, setKeterangan] = useState('');
  const [produk, setProduk] = useState('Coffiy');
  const [jumlah, setJumlah] = useState('');

  function tambah(e: React.FormEvent) {
    e.preventDefault();
    if (!tanggal || !jumlah) return;
    setRows([
      ...rows,
      {
        tanggal,
        jenis,
        keterangan: keterangan.trim(),
        produk,
        jumlah: Number(jumlah),
      },
    ]);
    setTanggal('');
    setKeterangan('');
    setJumlah('');
  }

  return (
    <>
      <h1>Pembukuan</h1>
      <p>
        Pemasukan (dari order selesai), pengeluaran (kategori + keterangan), dan laba
        per produk dan per periode. Tidak ada angka di halaman ini — semuanya
        menunggu data nyata.
      </p>
      <form onSubmit={tambah} className="form-grid">
        <label className="field-label" htmlFor="b-tanggal">Tanggal</label>
        <input className="field" id="b-tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
        <label className="field-label" htmlFor="b-jenis">Jenis</label>
        <select className="field" id="b-jenis" value={jenis} onChange={(e) => setJenis(e.target.value)}>
          <option value="pemasukan">pemasukan</option>
          <option value="pengeluaran">pengeluaran</option>
        </select>
        <label className="field-label" htmlFor="b-keterangan">Keterangan</label>
        <input className="field" id="b-keterangan" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} />
        <label className="field-label" htmlFor="b-produk">Produk</label>
        <select className="field" id="b-produk" value={produk} onChange={(e) => setProduk(e.target.value)}>
          <option>Coffiy</option>
          <option>EROJAN</option>
          <option>Lainnya</option>
        </select>
        <label className="field-label" htmlFor="b-jumlah">Jumlah (Rp)</label>
        <input className="field" id="b-jumlah" type="number" min="0" value={jumlah} onChange={(e) => setJumlah(e.target.value)} required />
        <button className="btn" type="submit">Tambah entri</button>
      </form>
      <p>
        <small>
          Data di halaman ini hanya tersimpan di sesi browser ini (demo) — belum ada
          database, dan tidak ada data awal yang dibuat-buat.
        </small>
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Jenis</th>
            <th>Keterangan</th>
            <th>Produk</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <div className="empty">Belum ada data — pembukuan terisi otomatis dari order selesai dan input pengeluaran.</div>
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={i}>
                <td>{r.tanggal}</td>
                <td>{r.jenis}</td>
                <td>{r.keterangan || '—'}</td>
                <td>{r.produk}</td>
                <td>{formatIDR(r.jumlah)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="todo">
        <strong>TODO</strong>
        <ul>
          <li>Laporan laba per produk dan per periode</li>
          <li>Pembukuan internal TIDAK dikirim ke Meta (hanya event konversi yang dikirim)</li>
          <li>Simpan permanen setelah database terhubung</li>
        </ul>
      </div>
    </>
  );
}
