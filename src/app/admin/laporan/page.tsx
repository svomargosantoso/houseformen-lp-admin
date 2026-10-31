import { META_EVENTS } from '@/lib/data';

export default function AdminLaporanPage() {
  return (
    <>
      <h1>Laporan konversi ke Meta</h1>
      <p>
        Yang dikirim ke Meta adalah event konversi (bukan pembukuan). Tabel di
        bawah menjelaskan event yang AKAN dikirim sesuai spesifikasi — ini
        bukan laporan berjalan, dan tidak ada angka di sini.
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>Event</th>
            <th>Pemicu</th>
            <th>Parameter penting</th>
          </tr>
        </thead>
        <tbody>
          {META_EVENTS.map((e) => (
            <tr key={e.event}>
              <td>{e.event}</td>
              <td>{e.trigger}</td>
              <td>{e.params}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="todo">
        <strong>TODO — Fase tracking</strong>
        <ul>
          <li>Pixel ID dan token Conversions API</li>
          <li>Akun iklan Meta yang dipakai (pilih dari Meta Business yang sudah terhubung)</li>
          <li>Deduplikasi event_id antara Pixel dan Conversions API</li>
          <li>Unggah offline conversions sebagai cadangan</li>
          <li>Verifikasi domain dan persetujuan privasi pengunjung</li>
        </ul>
      </div>
    </>
  );
}
