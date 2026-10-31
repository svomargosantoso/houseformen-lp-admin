import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://housemenformen.vercel.app'),
  title: 'Wellouse — EROJAN & Coffiy',
  description:
    'Landing page dan admin Wellouse untuk EROJAN dan Coffiy. Domain deployment yang ditetapkan: housemenformen.vercel.app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="brand">
              WELL<span>OUSE</span>
            </Link>
            <nav className="main-nav" aria-label="Navigasi utama">
              <Link href="/">Coffiy</Link>
              <Link href="/erojan">EROJAN</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            Wellouse — EROJAN &amp; Coffiy. Build lokal (belum di-push, belum
            di-deploy). Bagian bertanda TODO belum final dan bukan data nyata.
          </div>
        </footer>
      </body>
    </html>
  );
}
