/**
 * komponen banner untuk bagian banner persuasif untuk mendaftar member pada footer halaman.
 * menampilkan gambar di sisi kiri dan teks informasi (judul & deskripsi) di sisi kanan dengan latar belakang gelap.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk mengatur navigasi halaman aktif.
 * * @description
 * komponen ini mengandalkan `react-i18next` untuk internasionalisasi (i18n).
 * mengambil data teks dari namespace "banner" dengan kunci `banner_judul` dan `banner_deskripsi`.
 * * @example
 * <Banner setActivePage={(page) => console.log(page)} />
 * * @returns {jsx.element} struktur div pembungkus dengan sistem grid, gambar, dan blok teks informasi.
 */

import React from "react";
import { useTranslation } from "react-i18next";

export default function Banner({ setActivePage }) {
  const { t } = useTranslation("banner");

  return (
    <div className="relative gap-0 max-w-6xl mx-auto px-4 mb-5">
      <div className="grid grid-cols-[1fr_2fr] justify-between gap-0">
        {/* gambar ilustrasi */}
        <img src="image 4.png" className="h-full hoverflow-hidden" alt="" />
        {/* menggunakan key dari namespace banner */}
        <div className="bg-gray-900 space-y-4 p-8">
          <h2 className="text-4xl max-w-xl font-semibold text-white">
            {t("banner_judul")}
          </h2>
          <p className="text-white opacity-50 max-w-lg">
            {t("banner_deskripsi")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
