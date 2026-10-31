import Link from 'next/link';
import {
  EROJAN_BOTTLE_FACTS,
  EROJAN_PRICE_PACKAGES,
  PRICE_FOOTER_NOTE,
  SHIPPING_TERMS,
  UNIT_PRICES,
} from '@/lib/data';
import { formatIDR } from '@/lib/utils';

export default function ErojanLandingPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>EROJAN</h1>
          <p>{EROJAN_BOTTLE_FACTS.labelText}</p>
          <p>
            {EROJAN_BOTTLE_FACTS.contents} — aturan pakai:{' '}
            {EROJAN_BOTTLE_FACTS.dosage}.
          </p>
          <img
            className="hero-img"
            src="/poster-erojan-hero.webp"
            alt="Poster hero EROJAN — Buktikan Sendiri"
          />
          <div className="img-row" style={{ marginTop: 16 }}>
            <img
              className="product-img"
              src="/erojan-botol-depan.jpg"
              alt="Botol EROJAN tampak depan"
            />
            <img
              className="product-img"
              src="/poster-erojan-tongkat-ali.webp"
              alt="Poster edukasi EROJAN — Tongkat Ali, akar alami stamina pria"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Tentang EROJAN</h2>
          <p>
            Suplemen pria dewasa untuk pemeliharaan kesehatan pria — copy
            halaman ini mengikuti angle energi dan stamina harian serta
            wellness umum sesuai spesifikasi (tanpa klaim eksplisit dan tanpa
            janji hasil pasti).
          </p>
          <ul>
            <li>Isi: {EROJAN_BOTTLE_FACTS.contents}</li>
            <li>Aturan pakai: {EROJAN_BOTTLE_FACTS.dosage}</li>
            <li>Peringatan: {EROJAN_BOTTLE_FACTS.warning}</li>
            <li>Penyimpanan: {EROJAN_BOTTLE_FACTS.storage}</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Paket &amp; Harga</h2>
          <div className="grid2">
            {EROJAN_PRICE_PACKAGES.map((p) => (
              <article key={p.name} className="card">
                {p.badge ? <span className="badge gold">{p.badge}</span> : null}
                <h3>{p.name}</h3>
                <p>{p.detail}</p>
                <p>
                  Harga normal:{' '}
                  <span className="price-old">{formatIDR(p.normal)}</span>
                </p>
                <p>
                  <span className="price-promo">{formatIDR(p.promo)}</span>
                  <span className="price-save">
                    Hemat {formatIDR(p.saving)}
                  </span>
                </p>
              </article>
            ))}
          </div>
          <p>
            <strong>Harga satuan:</strong> EROJAN{' '}
            {formatIDR(UNIT_PRICES.erojanPerBottle)} per botol.
          </p>
          <p>{PRICE_FOOTER_NOTE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Legalitas &amp; Label</h2>
          <ul>
            <li>Nomor registrasi: {EROJAN_BOTTLE_FACTS.legality}</li>
            <li>Diproduksi oleh: {EROJAN_BOTTLE_FACTS.producer}</li>
            <li>Diimpor oleh: {EROJAN_BOTTLE_FACTS.importer}</li>
          </ul>
          <img
            className="product-img"
            src="/erojan-botol-belakang.jpg"
            alt="Botol EROJAN tampak belakang — label registrasi, produsen, dan importir"
          />
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
              Sama seperti LP Coffiy: form order dan tombol WhatsApp memakai
              rotator CS dan menunggu konfigurasi serta verifikasi ulang.
            </p>
          </div>
          <div className="form-grid">
            <label className="field-label" htmlFor="nama-erojan">
              Nama
            </label>
            <input className="field" id="nama-erojan" name="nama" type="text" />
            <label className="field-label" htmlFor="wa-erojan">
              Nomor WhatsApp
            </label>
            <input className="field" id="wa-erojan" name="wa" type="tel" />
            <label className="field-label" htmlFor="paket-erojan">
              Paket
            </label>
            <select className="field" id="paket-erojan" name="paket">
              {EROJAN_PRICE_PACKAGES.map((p) => (
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
            <Link href="/" className="btn btn-outline">
              Lihat Coffiy
            </Link>{' '}
            <Link href="/faq" className="btn btn-outline">
              Pertanyaan Umum
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
