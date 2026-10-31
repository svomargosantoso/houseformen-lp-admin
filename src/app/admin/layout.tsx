import Link from 'next/link';
// globals.css TIDAK diimpor di sini: Next.js App Router hanya mengizinkan
// impor CSS global di root layout (src/app/layout.tsx), dan impor itu sudah
// berlaku global untuk seluruh segmen termasuk admin.

const NAV = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/kontak', label: 'Kontak masuk' },
  { href: '/admin/order', label: 'Order' },
  { href: '/admin/customer', label: 'Data customer' },
  { href: '/admin/pembukuan', label: 'Pembukuan' },
  { href: '/admin/cs', label: 'CS & rotator' },
  { href: '/admin/blog', label: 'Blog' },
  { href: '/admin/laporan', label: 'Laporan Meta' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <p>
          <strong>Admin Wellouse</strong>
          <br />
          <small>Skeleton Fase 1 — login admin menyusul</small>
        </p>
        <nav aria-label="Navigasi admin">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <p>
          <small>
            <Link href="/" style={{ color: '#fff' }}>
              ← Kembali ke LP
            </Link>
          </small>
        </p>
      </aside>
      <div className="admin-main">{children}</div>
    </div>
  );
}
