import Link from 'next/link';
import {
  COFFIY_BENEFITS,
  COFFIY_BPOM,
  COFFIY_PRICE_PACKAGES,
  PRICE_FOOTER_NOTE,
  SHIPPING_TERMS,
  UNIT_PRICES,
} from '@/lib/data';
import { formatIDR } from '@/lib/utils';

export default function CoffiyLandingPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p>
            <span className="badge">BPOM {COFFIY_BPOM}</span>
            <span className="badge">Halal MUI</span>
          </p>
          <h1>TINGKATKAN STAMINA &amp; VITALITAS PRIA</h1>
          <p>
            Coffiy — Kopi Stamina Pria Dewasa. Minuman serbuk kopi, 1 box berisi
            10 sachet.
          </p>
          <img
            className="hero-img"
            src="/poster-coffiy-hero.webp"
            alt="Poster hero Coffiy — Minuman Serbuk Kopi, 10 sachet"
          />
          <div className="img-row" style={{ marginTop: 16 }}>
            <img
              className="product-img"
              src="/coffiy-1box.png"
              alt="Box Coffiy — Minuman Serbuk Kopi"
            />
            <img
              className="product-img"
              src="/coffiy-sachet-1.png"
              alt="Sachet Coffiy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Manfaat</h2>
          <div className="grid3">
            {COFFIY_BENEFITS.map((b) => (
              <article key={b.title} className="card">
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pilih Paket Anda</h2>
          <div className="grid2">
            {COFFIY_PRICE_PACKAGES.map((p) => (
              <article key={p.name} className="card">
                {p.badge ? <span className="badge gold">{p.badge}</span> : null}
                <h3>{p.name}</h3>
                <p>{p.detail}</p>
                {p.normal !== null ? (
                  <p>
                    Harga normal:{' '}
                    <span className="price-old">{formatIDR(p.normal)}</span>
                  </p>
                ) : null}
                <p>
                  <span className="price-promo">{formatIDR(p.promo)}</span>
                  {p.saving !== null ? (
                    <span className="price-save">
                      Hemat {formatIDR(p.saving)}
                    </span>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
          <p>
            <strong>Harga satuan:</strong> EROJAN{' '}
            {formatIDR(UNIT_PRICES.erojanPerBottle)} per botol; COFFIY{' '}
            {formatIDR(UNIT_PRICES.coffiyPerBoxPromo)} per box (promo, normal{' '}
            {formatIDR(UNIT_PRICES.coffiyPerBoxNormal)}).
          </p>
          <p>{PRICE_FOOTER_NOTE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Pengiriman &amp; Pemesanan</h2>
          <ul>
            {SHIPPING_TERMS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="todo">
            <strong>TODO — Form order &amp; tombol WhatsApp belum aktif</strong>
            <p>
              Alur adcuan (LPWA) dipertahankan: form order dan tombol WhatsApp
              memakai rotator CS dengan konteks produk, paket, dan sumber
              iklan. Integrasi rotator CS menunggu konfigurasi dan verifikasi
              ulang — formulir di bawah ini belum mengirim data apa pun.
            </p>
          </div>
          <div className="form-grid">
            <label className="field-label" htmlFor="nama">
              Nama
            </label>
            <input className="field" id="nama" name="nama" type="text" />
            <label className="field-label" htmlFor="wa">
              Nomor WhatsApp
            </label>
            <input className="field" id="wa" name="wa" type="tel" />
            <label className="field-label" htmlFor="paket">
              Paket
            </label>
            <select className="field" id="paket" name="paket">
              {COFFIY_PRICE_PACKAGES.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name} — {p.detail}
                </option>
              ))}
            </select>
            <button className="btn" type="button" disabled>
              Pesan via WhatsApp (menyusul)
            </button>
          </div>
          <p style={{ marginTop: 16 }}>
            <Link href="/blog" className="btn btn-outline">
              Baca Artikel Blog
            </Link>{' '}
            <Link href="/erojan" className="btn btn-gold">
              Lihat EROJAN
            </Link>{' '}
            <Link href="/faq" className="btn btn-outline">
              Pertanyaan Umum
            </Link>
          </p>
        </div>
      </section>

      <section className="section" id="testimoni">
        <div className="container">
          <h2>Testimoni</h2>
          <div className="todo">
            <strong>TODO — Testimoni belum dimigrasi</strong>
            <p>
              LP lama memakai 3 gambar testimoni tanpa teks yang terverifikasi
              di kode. Gambar dan teks testimoni dimigrasi setelah diverifikasi
              — tidak ada testimoni palsu di halaman ini.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
