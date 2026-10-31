'use client';

import { useState } from 'react';

type Kontak = {
  nama: string;
  wa: string;
  produk: string;
  paket: string;
  sumber: string;
  cs: string;
  status: string;
  waktu: string;
};

export default function AdminKontakPage() {
  const [rows, setRows] = useState<Kontak[]>([]);
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [produk, setProduk] = useState('Coffiy');
  const [paket, setPaket] = useState('');
  const [sumber, setSumber] = useState('');
  const [cs, setCs] = useState('');
  const [status, setStatus] = useState('Baru');

  function tambah(e: React.FormEvent) {
    e.preventDefault();
    if (!nama.trim() || !wa.trim()) return;
    setRows([
      ...rows,
      {
        nama: nama.trim(),
        wa: wa.trim(),
        produk,
        paket: paket.trim(),
        sumber: sumber.trim(),
        cs: cs.trim(),
        status,
        waktu: new Date().toLocaleString('id-ID'),
      },
    ]);
    setNama('');
    setWa('');
    setPaket('');
    setSumber('');
    setCs('');
    setStatus('Baru');
  }

  return (
    <>
      <h1>Kontak masuk (leads)</h1>
      <p>Kontak dari form order dan klik WhatsApp, lengkap dengan sumber iklan dan ID klik.</p>
      <form onSubmit={tambah} className="form-grid">
        <label className="field-label" htmlFor="k-nama">Nama</label>
        <input className="field" id="k-nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
        <label className="field-label" htmlFor="k-wa">Nomor WA</label>
        <input className="field" id="k-wa" value={wa} onChange={(e) => setWa(e.target.value)} required />
        <label className="field-label" htmlFor="k-produk">Produk</label>
        <select className="field" id="k-produk" value={produk} onChange={(e) => setProduk(e.target.value)}>
          <option>Coffiy</option>
          <option>EROJAN</option>
        </select>
        <label className="field-label" htmlFor="k-paket">Paket</label>
        <input className="field" id="k-paket" value={paket} onChange={(e) => setPaket(e.target.value)} />
        <label className="field-label" htmlFor="k-sumber">Sumber iklan</label>
        <input className="field" id="k-sumber" value={sumber} onChange={(e) => setSumber(e.target.value)} />
        <label className="field-label" htmlFor="k-cs">CS</label>
        <input className="field" id="k-cs" value={cs} onChange={(e) => setCs(e.target.value)} />
        <label className="field-label" htmlFor="k-status">Status</label>
        <select className="field" id="k-status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Baru</option>
          <option>Diproses</option>
          <option>Ditindaklanjuti</option>
        </select>
        <button className="btn" type="submit">Tambah kontak</button>
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
            <th>Nama</th>
            <th>Nomor WA</th>
            <th>Produk</th>
            <th>Paket</th>
            <th>Sumber iklan</th>
            <th>CS</th>
            <th>Status</th>
            <th>Waktu masuk</th>
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
            rows.map((r, i) => (
              <tr key={i}>
                <td>{r.nama}</td>
                <td>{r.wa}</td>
                <td>{r.produk}</td>
                <td>{r.paket || '—'}</td>
                <td>{r.sumber || '—'}</td>
                <td>{r.cs || '—'}</td>
                <td>{r.status}</td>
                <td>{r.waktu}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="todo">
        <strong>TODO</strong>
        <ul>
          <li>Impor dari form order LP + filter per produk, CS, dan status follow-up</li>
          <li>Penempelan UTM / fbclid / ID klik dari LP</li>
          <li>Simpan permanen setelah database terhubung</li>
        </ul>
      </div>
    </>
  );
}
