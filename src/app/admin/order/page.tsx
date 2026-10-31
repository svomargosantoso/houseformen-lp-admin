'use client';

import { useState } from 'react';
import { formatIDR } from '@/lib/utils';

type Order = {
  id: string;
  kontak: string;
  produk: string;
  paket: string;
  total: number;
  status: string;
  cs: string;
  waktu: string;
};

export default function AdminOrderPage() {
  const [rows, setRows] = useState<Order[]>([]);
  const [kontak, setKontak] = useState('');
  const [produk, setProduk] = useState('Coffiy');
  const [paket, setPaket] = useState('');
  const [total, setTotal] = useState('');
  const [status, setStatus] = useState('baru');
  const [cs, setCs] = useState('');

  function tambah(e: React.FormEvent) {
    e.preventDefault();
    if (!kontak.trim() || !total) return;
    setRows([
      ...rows,
      {
        id: `ORD-${String(rows.length + 1).padStart(3, '0')}`,
        kontak: kontak.trim(),
        produk,
        paket: paket.trim(),
        total: Number(total),
        status,
        cs: cs.trim(),
        waktu: new Date().toLocaleString('id-ID'),
      },
    ]);
    setKontak('');
    setPaket('');
    setTotal('');
    setStatus('baru');
    setCs('');
  }

  return (
    <>
      <h1>Order</h1>
      <p>Status order bergerak: baru → diproses → kirim → selesai / batal. Order selesai masuk pembukuan dan riwayat customer secara otomatis.</p>
      <form onSubmit={tambah} className="form-grid">
        <label className="field-label" htmlFor="o-kontak">Kontak</label>
        <input className="field" id="o-kontak" value={kontak} onChange={(e) => setKontak(e.target.value)} required />
        <label className="field-label" htmlFor="o-produk">Produk</label>
        <select className="field" id="o-produk" value={produk} onChange={(e) => setProduk(e.target.value)}>
          <option>Coffiy</option>
          <option>EROJAN</option>
        </select>
        <label className="field-label" htmlFor="o-paket">Paket</label>
        <input className="field" id="o-paket" value={paket} onChange={(e) => setPaket(e.target.value)} />
        <label className="field-label" htmlFor="o-total">Total (Rp)</label>
        <input className="field" id="o-total" type="number" min="0" value={total} onChange={(e) => setTotal(e.target.value)} required />
        <label className="field-label" htmlFor="o-status">Status</label>
        <select className="field" id="o-status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="baru">baru</option>
          <option value="diproses">diproses</option>
          <option value="kirim">kirim</option>
          <option value="selesai">selesai</option>
          <option value="batal">batal</option>
        </select>
        <label className="field-label" htmlFor="o-cs">CS</label>
        <input className="field" id="o-cs" value={cs} onChange={(e) => setCs(e.target.value)} />
        <button className="btn" type="submit">Tambah order</button>
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
            <th>Order</th>
            <th>Kontak</th>
            <th>Produk</th>
            <th>Paket</th>
            <th>Total</th>
            <th>Status</th>
            <th>CS</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={8}>
                <div className="empty">Belum ada data — modul ini menunggu koneksi database.</div>
              </td>
            </tr>
          ) : (
            rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.kontak}</td>
                <td>{r.produk}</td>
                <td>{r.paket || '—'}</td>
                <td>{formatIDR(r.total)}</td>
                <td>{r.status}</td>
                <td>{r.cs || '—'}</td>
                <td>{r.waktu}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="todo">
        <strong>TODO</strong>
        <ul>
          <li>Ubah kontak menjadi order + gerakkan status (otomatis ke pembukuan &amp; customer saat selesai)</li>
          <li>Event Purchase ke Meta saat order selesai (fase tracking)</li>
          <li>Simpan permanen setelah database terhubung</li>
        </ul>
      </div>
    </>
  );
}
