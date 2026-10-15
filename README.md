# Project Promnet1 — Website Perusahaan Game Minecraft (Craftverse)

## Identitas
- **Nama** : Muhaamd Nazrel Purkon
- **NIM**  : 2510755
- **Kelas** : 3C

## Deskripsi Singkat
Website company profile untuk studio game Minecraft bernama Craftverse. Menyediakan layanan
seperti server hosting, pengembangan mod/plugin, custom map, texture & skin, setup Realm, serta
event dan turnamen. Website dibangun dengan React + Vite, styling Tailwind CSS, dan navigasi
menggunakan React Router.

## Fitur
- Beranda: hero section, ringkasan perusahaan, highlight layanan unggulan
- Tentang Kami: sejarah singkat, visi & misi, profil tim
- Layanan: daftar layanan beserta deskripsi
- Portofolio: contoh proyek, daftar klien, dokumentasi kegiatan
- Kontak: form kontak (nama, email, pesan) dengan validasi sederhana, alamat, info kontak & media sosial

## Teknologi
- React 19 + Vite 8
- Tailwind CSS (via CDN browser)
- React Router DOM 7
- JavaScript (ES Modules)

## Struktur Folder
```
src/
  components/   (Navbar, Footer, Card)
  data/         (highlights, services, team, portfolio, clients, gallery)
  page/         (home, about, services, porto, contact, layout)
  App.jsx
  main.jsx
```

## Cara Menjalankan Project
```bash
npm install
npm run dev
```
Buka `http://localhost:5173` di browser.

Build production:
```bash
npm run build
npm run preview
```

## Screenshot Halaman

### Beranda (Home)


### Tentang Kami (About)


### Layanan (Services)


### Portofolio (Portfolio)


### Kontak (Contact)
