'use client';

import { useState } from 'react';

type Cs = { nama: string; wa: string; jadwal: string };

export default function AdminCsPage() {
  const [rows, setRows] = useState<Cs[]>([]);
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');
  const [jadwal, setJadwal] = useState('');

  function tambah(e: React.FormEvent) {
    e.preventDefault();
    if (!nama.trim() || !wa.trim()) return;
    setRows([...rows, { nama: nama.trim(), wa: wa.trim(), jadwal: jadwal.trim() }]);
    setNama('');
    setWa('');
    setJadwal('');
  }

  return (
    <>
      <h1>CS &amp; rotator</h1>
      <p>
        Rotator membagi lead ke CS yang bertugas; konteks (produk, paket, sumber
        iklan) ikut terbawa ke chat. Performa CS terlihat di sini.
      </p>
      <form onSubmit={tambah} className="form-grid">
        <label className="field-label" htmlFor="cs-nama">Nama CS</label>
        <input className="field" id="cs-nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
        <label className="field-label" htmlFor="cs-wa">Nomor WA</label>
        <input className="field" id="cs-wa" value={wa} onChange={(e) => setWa(e.target.value)} required />
        <label className="field-label" htmlFor="cs-jadwal">Jadwal rotator</label>
        <input className="field" id="cs-jadwal" value={jadwal} onChange={(e) => setJadwal(e.target.value)} />
        <button className="btn" type="submit">Tambah CS</button>
      </form>
      <p>
        <small>
          Lead ditangani dan closing rate dihitung dari lead → order selesai — selama
          belum ada data, kolom itu tampil '—'. Data di sini hanya tersimpan di sesi
          browser ini (demo).
        </small>
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>Nama CS</th>
            <th>Nomor WA</th>
            <th>Jadwal rotator</th>
            <th>Lead ditangani</th>
            <th>Closing rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <div className="empty">Belum ada data — CS dan jadwal rotator menunggu konfigurasi.</div>
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={i}>
                <td>{r.nama}</td>
                <td>{r.wa}</td>
                <td>{r.jadwal || '—'}</td>
                <td>—</td>
                <td>—</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="todo">
        <strong>TODO</strong>
        <ul>
          <li>Link WA rotator di LP (pengganti link CTWA lama, perlu verifikasi ulang)</li>
          <li>Hitung closing rate dari lead → order selesai</li>
          <li>Simpan permanen setelah database terhubung</li>
        </ul>
      </div>
    </>
  );
}
