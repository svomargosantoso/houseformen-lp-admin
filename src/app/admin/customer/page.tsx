'use client';

import { useState } from 'react';

type Customer = { nama: string; wa: string };

export default function AdminCustomerPage() {
  const [rows, setRows] = useState<Customer[]>([]);
  const [nama, setNama] = useState('');
  const [wa, setWa] = useState('');

  function tambah(e: React.FormEvent) {
    e.preventDefault();
    if (!nama.trim() || !wa.trim()) return;
    setRows([...rows, { nama: nama.trim(), wa: wa.trim() }]);
    setNama('');
    setWa('');
  }

  return (
    <>
      <h1>Data customer</h1>
      <p>Identitas, nomor WA, riwayat beli, total belanja, dan terakhir beli per customer.</p>
      <form onSubmit={tambah} className="form-grid">
        <label className="field-label" htmlFor="c-nama">Nama</label>
        <input className="field" id="c-nama" value={nama} onChange={(e) => setNama(e.target.value)} required />
        <label className="field-label" htmlFor="c-wa">Nomor WA</label>
        <input className="field" id="c-wa" value={wa} onChange={(e) => setWa(e.target.value)} required />
        <button className="btn" type="submit">Tambah customer</button>
      </form>
      <p>
        <small>
          Riwayat beli, total belanja, dan terakhir beli dihitung dari order selesai —
          selama belum ada order, kolom itu tampil '—'. Data di sini hanya tersimpan di
          sesi browser ini (demo).
        </small>
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nomor WA</th>
            <th>Riwayat order</th>
            <th>Total belanja</th>
            <th>Terakhir beli</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <div className="empty">Belum ada data — customer terbentuk otomatis dari order selesai.</div>
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={i}>
                <td>{r.nama}</td>
                <td>{r.wa}</td>
                <td>—</td>
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
          <li>Gabungkan kontak berulang menjadi satu customer (berdasar nomor WA)</li>
          <li>Riwayat beli dan total belanja dihitung dari order selesai, bukan input manual</li>
          <li>Simpan permanen setelah database terhubung</li>
        </ul>
      </div>
    </>
  );
}
