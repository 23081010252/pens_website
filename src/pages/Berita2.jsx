// Berita2.jsx (Menggunakan i18next)

import React from "react";
import { useTranslation } from "react-i18next";

export default function Berita2({ setActivePage }) {
  // Ambil terjemahan dari namespace 'berita2'
  const { t } = useTranslation("berita2");
  // Ambil terjemahan dari namespace 'header' untuk menu navigasi
  const { t: tHeader } = useTranslation("header");

  // Ambil data berita rekomendasi (diperlakukan sebagai array objek)
  const rekomendasi = t("berita_rekomendasi", { returnObjects: true });

  // Fungsi untuk mengurus navigasi (tetap menggunakan setActivePage)
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
    }
  };

  return (
    <div className="space-y-16">
      {/* hero */}
      <section>
        <div className="grid grid-cols-2">
          {/* text konten */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              {/* Breadcrumb: Beranda */}
              <button
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_beranda")} / {/* ⬅️ Terjemahan Header */}
              </button>
              {/* Breadcrumb: Berita */}
              <button
                onClick={() => handleNavigation("Berita1")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_berita")} / {/* ⬅️ Terjemahan Header */}
              </button>
              {/* Breadcrumb: Judul Artikel */}
              <a href="#" className="font-bold">
                {t("judul_halaman")} {/* ⬅️ Terjemahan Berita2 */}
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("hero.judul_utama")} {/* ⬅️ Terjemahan Berita2 */}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("hero.deskripsi")} {/* ⬅️ Terjemahan Berita2 */}
            </p>
          </div>
          {/* gambar konten */}
          <div className="relative flex justify-center items-center w-full h-auto md:h-[500px] overflow-hidden">
            <img
              src="image 6.png"
              alt=""
              className="absolute w-full h-full object-cover z-0"
            />
            <img
              src="image 2.png"
              alt=""
              className="z-10 w-auto h-full sm:h-80 md:h-[600px] md:-translate-x-10"
            />
          </div>
        </div>
      </section>

      {/* konten */}
      <section className="space-y-16 mb-3">
        {/* rincian program */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="items-center justify-center max-w-screen space-y-7">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("detail.judul_artikel")} {/* ⬅️ Terjemahan Berita2 */}
              </h2>
              <div>
                <p className="text-gray-600 max-w-xl mx-auto">
                  {t("detail.tanggal_publikasi")} {/* ⬅️ Terjemahan Berita2 */}
                </p>
                <p className="text-gray-600 max-w-xl mx-auto">
                  {t("detail.penulis")} {/* ⬅️ Terjemahan Berita2 */}
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="image 1.png"
                  className="max-h-96 w-full object-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="[text-indent:5em] text-justify">
                  {t("detail.konten_paragraf_1")} {/* ⬅️ Terjemahan Berita2 */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* pilihan program */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex items-center justify-start max-w-screen">
            <div className="max-w-6xl text-left leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("terkini.judul_terkini")} {/* ⬅️ Terjemahan Berita2 */}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("terkini.deskripsi_terkini")} {/* ⬅️ Terjemahan Berita2 */}
              </p>
            </div>
          </div>
          {/* Daftar Berita Terkini/Rekomendasi (di-looping) */}
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2 tracking-tighter leading-tight"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Menggunakan data dari 'berita_rekomendasi' */}
            {rekomendasi.map((berita, index) => (
              <div
                key={index}
                className="relative max-w-80 shrink-0 cursor-pointer"
                onClick={() => handleNavigation(`BeritaDetail${berita.id}`)} // Navigasi ke detail berita
              >
                <img
                  // Menggunakan image statis karena data di JSON tidak menyediakan URL unik
                  src="image 1.png"
                  className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                  alt={berita.judul}
                />
                <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                  <a href="#" className="text-2xl leading-none">
                    {berita.judul} {/* ⬅️ Data Terjemahan Berita2 */}
                  </a>
                  <p className="text-gray-100 opacity-70">
                    {berita.tanggal} {/* ⬅️ Data Terjemahan Berita2 */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
