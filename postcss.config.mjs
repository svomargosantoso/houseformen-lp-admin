// Tailwind v4 di Next.js dijalankan lewat plugin PostCSS resmi
// (@tailwindcss/postcss); tanpa file ini, `@import "tailwindcss"` di
// globals.css tidak diproses saat build.
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
