// berita1.jsx (Menggunakan i18next dan MEMPERTANAHKAN LAYOUT ASLI)

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Berita1({ setActivePage }) {
  // 1. Ambil terjemahan dari namespace 'berita'
  const { t } = useTranslation("berita");
  // 2. Ambil terjemahan dari namespace 'header' untuk breadcrumb
  const { t: tHeader } = useTranslation("header");

  // 3. Ambil data berita dari i18n
  // Karena struktur Anda mengulang 3 kartu pertama dan 3 kartu tambahan,
  // saya akan mengambil 6 data pertama dan menggunakannya secara manual.
  const newsData = t("news_data", { returnObjects: true });
  const data1 = newsData[0] || { title: "Data Hilang", date: "" };
  const data2 = newsData[1] || { title: "Data Hilang", date: "" };
  const data3 = newsData[2] || { title: "Data Hilang", date: "" };
  const data4 = newsData[3] || { title: "Data Hilang", date: "" };
  const data5 = newsData[4] || { title: "Data Hilang", date: "" };
  const data6 = newsData[5] || { title: "Data Hilang", date: "" };

  // 1. State untuk mengontrol tampilan kartu berita tambahan
  const [showMore, setShowMore] = useState(false);

  // Teks tombol diambil dari i18n
  const buttonText = showMore ? t("btn_tutup") : t("btn_lihat_selengkapnya");

  // Fungsi untuk mengurus navigasi (dipertahankan agar konsisten dengan SPA jika dipakai)
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      // Fallback atau aksi default jika bukan SPA
      console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
    }
  };

  // 2. Fungsi untuk mengubah state saat tombol diklik
  const toggleShowMore = () => {
    // Ubah state
    setShowMore((prev) => !prev);
  };

  return (
    <div className="space-y-16">
      {/* hero */}
      <section>
        <div className="grid grid-cols-2">
          {/* text kiri */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              {/* Menggunakan button untuk navigasi (Breadcrumb) */}
              <button
                onClick={() => handleNavigation("beranda")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_beranda")} / {/* ⬅️ Terjemahan */}
              </button>
              <button
                onClick={() => handleNavigation("berita1")}
                className="font-bold hover:text-gray-700"
              >
                {tHeader("menu_berita")} {/* ⬅️ Terjemahan */}
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("judul_hero")} {/* ⬅️ Terjemahan */}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("deskripsi_hero")} {/* ⬅️ Terjemahan */}
            </p>
          </div>
          {/* gambar kanan */}
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
        {/* berita */}
        <div id="row-4" className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("judul_konten")} {/* ⬅️ Terjemahan */}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("deskripsi_konten")} {/* ⬅️ Terjemahan */}
              </p>
            </div>
          </div>
          <div>
            {/* INI ADALAH TIGA KARTU BERITA UTAMA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-28 gap-2 md:gap-4 p-2">
              {/* Kartu 1 - Menggunakan BUTTON dan Mengarahkan ke Berita2 */}
              <div className="relative space-y-2">
                <img
                  src={data1.image || "image 1.png"}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <button
                  className="absolute flex flex-col justify-start text-left space-y-2"
                  onClick={(e) => {
                    e.preventDefault();
                    // Fungsionalitas Navigasi Dikembalikan
                    setActivePage("Berita2");
                  }}
                >
                  <h2 className="text-2xl font-semibold leading-none">
                    {data1.title} {/* ⬅️ Data Terjemahan */}
                  </h2>
                  <p className="text-gray-700 opacity-70">
                    {data1.date} {/* ⬅️ Data Terjemahan */}
                  </p>
                </button>
              </div>

              {/* Kartu 2 - Menggunakan A (sesuai kode asli Anda) */}
              <div className="relative space-y-2">
                <img
                  src={data2.image || "image 1.png"}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <a
                  href="#"
                  className="absolute flex flex-col justify-start space-y-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("Berita3"); // Contoh: Mengarahkan ke Berita3
                  }}
                >
                  <h2 className="text-2xl font-semibold leading-none">
                    {data2.title} {/* ⬅️ Data Terjemahan */}
                  </h2>
                  <p className="text-gray-700 opacity-70">
                    {data2.date} {/* ⬅️ Data Terjemahan */}
                  </p>
                </a>
              </div>

              {/* Kartu 3 - Menggunakan A (sesuai kode asli Anda) */}
              <div className="relative space-y-2">
                <img
                  src={data3.image || "image 1.png"}
                  className="w-full h-full object-cover rounded-2xl"
                  alt=""
                />
                <a
                  href="#"
                  className="absolute flex flex-col justify-start space-y-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("Berita4"); // Contoh: Mengarahkan ke Berita4
                  }}
                >
                  <h2 className="text-2xl font-semibold leading-none">
                    {data3.title} {/* ⬅️ Data Terjemahan */}
                  </h2>
                  <p className="text-gray-700 opacity-70">
                    {data3.date} {/* ⬅️ Data Terjemahan */}
                  </p>
                </a>
              </div>
            </div>

            {/* berita tambahan - Dikelola oleh state showMore */}
            <div
              id="extra-cards"
              // Kelas 'contents' DIBIARKAN sesuai kode asli Anda
              className={`${showMore ? "contents" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-28 gap-2 md:gap-4 p-2 mt-28">
                {/* card 4 (extraNews 1) */}
                <div className="relative space-y-2">
                  <img
                    src={data4.image || "image 1.png"}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  {/* Menggunakan struktur <div> asli (sesuai kode asli Anda) */}
                  <div
                    className="absolute flex flex-col justify-start space-y-2 cursor-pointer"
                    onClick={() => setActivePage("Berita5")} // Tambahkan onClick di sini
                  >
                    <h2 className="text-2xl font-semibold leading-none">
                      {data4.title} {/* ⬅️ Data Terjemahan */}
                    </h2>
                    <p className="text-gray-700 opacity-70">
                      {data4.date} {/* ⬅️ Data Terjemahan */}
                    </p>
                  </div>
                </div>

                {/* card 5 (extraNews 2) */}
                <div className="relative space-y-2">
                  <img
                    src={data5.image || "image 1.png"}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  {/* Menggunakan struktur <div> asli (sesuai kode asli Anda) */}
                  <div
                    className="absolute flex flex-col justify-start space-y-2 cursor-pointer"
                    onClick={() => setActivePage("Berita6")} // Tambahkan onClick di sini
                  >
                    <h2 className="text-2xl font-semibold leading-none">
                      {data5.title} {/* ⬅️ Data Terjemahan */}
                    </h2>
                    <p className="text-gray-700 opacity-70">
                      {data5.date} {/* ⬅️ Data Terjemahan */}
                    </p>
                  </div>
                </div>

                {/* card 6 (extraNews 3) */}
                <div className="relative space-y-2">
                  <img
                    src={data6.image || "image 1.png"}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  {/* Menggunakan struktur <div> asli (sesuai kode asli Anda) */}
                  <div
                    className="absolute flex flex-col justify-start space-y-2 cursor-pointer"
                    onClick={() => setActivePage("Berita7")} // Tambahkan onClick di sini
                  >
                    <h2 className="text-2xl font-semibold leading-none">
                      {data6.title} {/* ⬅️ Data Terjemahan */}
                    </h2>
                    <p className="text-gray-700 opacity-70">
                      {data6.date} {/* ⬅️ Data Terjemahan */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button berita tambahan */}
        <div className="flex justify-center">
          <button
            id="show-more-btn"
            onClick={toggleShowMore} // Fungsi interaksi tombol
            className="border rounded-2xl px-6 py-2 mb-10 mt-20 hover:bg-blue-50"
          >
            {buttonText} {/* Teks tombol dinamis dan terjemahan */}
          </button>
        </div>
      </section>
    </div>
  );
}
