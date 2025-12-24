// Layanan1.jsx (Menggunakan i18next)

import React from "react";
import { useTranslation } from "react-i18next";

export default function Layanan1({ setActivePage }) {
  // Ambil terjemahan dari namespace 'layanan' (Konten utama)
  const { t } = useTranslation("layanan");
  // Ambil terjemahan dari namespace 'header' (Breadcrumb/Menu)
  const { t: tHeader } = useTranslation("header");

  // Fungsi placeholder untuk Breadcrumb
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    // Jika Anda mengirim setActivePage, uncomment baris di bawah ini:
    // if (setActivePage) { setActivePage(pageIdentifier); }
    console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
  };

  // Komponen Gambar Tumpuk yang dapat digunakan kembali
  const ServiceImageStack = ({ altText }) => (
    <div className="relative">
      {/* Gambar Latar (saturate-0) */}
      <img
        src="image 8.png"
        alt={`${altText} (Background)`}
        className="flex rounded-xl shadow-md saturate-0 object-cover overflow-hidden w-full h-full"
      />
      {/* Gambar Depan */}
      <div className="absolute inset-0 z-10">
        <img
          src="image 9.png"
          alt={`${altText} (Foreground)`}
          className="flex rounded-xl shadow-md object-cover overflow-hidden w-full h-full"
        />
      </div>
    </div>
  );

  return (
    <section className="space-y-16 mb-10">
      <section className="text-center">
        <div className="flex justify-center relative w-full h-[700px] md:h-[900px] z-0">
          <img
            src="image 7.png"
            alt="Hero Background Export"
            className="absolute inset-0 w-full h-auto object-cover self-end" // Diperbaiki agar full cover
          />
          <div className="mt-10 z-10">
            <div className="mb-3 text-base">
              {/* Breadcrumb: Beranda */}
              <a
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-700 cursor-pointer"
              >
                {tHeader("menu_beranda")} /{" "}
              </a>
              {/* Breadcrumb: Layanan */}
              <a href="#" className="font-bold">
                {tHeader("menu_layanan")}
              </a>
            </div>
            {/* HERO JUDUL */}
            <h1 className="text-5xl font-semibold tracking-tighter leading-none mb-4">
              {t("hero.judul_utama_1")} <br />
              {t("hero.judul_utama_2")}
            </h1>
            {/* HERO DESKRIPSI */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-tight mb-8">
              {t("hero.deskripsi")}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-16">
        {/* layanan 1: Konsultasi Ekspor (GAMBAR KIRI, TEKS KANAN) */}
        <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight">
          <ServiceImageStack altText={t("layanan_1.judul")} />
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_1.judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {t("layanan_1.deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {t("tombol_skema")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* layanan 2: Kurasi Produk (TEKS KIRI, GAMBAR KANAN) */}
        <div
          id="row-1"
          className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight"
        >
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_2.judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {t("layanan_2.deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {t("tombol_skema")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <ServiceImageStack altText={t("layanan_2.judul")} />
        </div>

        {/* layanan 3: Pendampingan Legalitas/ Perizinan (GAMBAR KIRI, TEKS KANAN) */}
        <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight">
          <ServiceImageStack altText={t("layanan_3.judul")} />
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_3.judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {t("layanan_3.deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {t("tombol_skema")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* layanan 4: Pendampingan Pembiayaan Ekspor (TEKS KIRI, GAMBAR KANAN) */}
        <div
          id="row-1"
          className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight"
        >
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_4.judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {t("layanan_4.deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {t("tombol_skema")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <ServiceImageStack altText={t("layanan_4.judul")} />
        </div>

        {/* layanan 5: Pendampingan Pengiriman Produk (GAMBAR KIRI, TEKS KANAN) */}
        <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight">
          <ServiceImageStack altText={t("layanan_5.judul")} />
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_5.judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {t("layanan_5.deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {t("tombol_skema")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* layanan 6: Seritifkasi Profesi Ekspor (TEKS KIRI, GAMBAR KANAN) */}
        <div
          id="row-1"
          className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight"
        >
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_6.judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {t("layanan_6.deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {t("tombol_skema")}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <ServiceImageStack altText={t("layanan_6.judul")} />
        </div>
      </section>
    </section>
  );
}
