export default function AdminDashboardPage() {
  const stats = [
    { label: 'Kontak masuk', value: '—', note: 'Data belum tersedia' },
    { label: 'Order selesai', value: '—', note: 'Data belum tersedia' },
    { label: 'Closing rate', value: '—', note: 'Data belum tersedia' },
    { label: 'Nilai order selesai', value: '—', note: 'Data belum tersedia' },
  ];
  return (
    <>
      <h1>Dashboard iklan cepat</h1>
      <p>
        Ringkasan iklan + order internal. Angka di sini baru muncul setelah
        database dan tracking terhubung — tidak ada angka simulasi.
      </p>
      <div className="grid2">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <div className="value">{s.value}</div>
            <div className="label">{s.label}</div>
            <p>{s.note}</p>
          </div>
        ))}
      </div>
      <div className="todo">
        <strong>TODO — Dashboard menunggu</strong>
        <ul>
          <li>Koneksi database (model baru: kontak, order, customer, pembukuan, CS)</li>
          <li>Pixel ID + token Conversions API + akun iklan Meta (fase tracking)</li>
          <li>Login admin</li>
        </ul>
      </div>
    </>
  );
}
