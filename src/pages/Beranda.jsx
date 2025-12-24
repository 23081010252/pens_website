// Beranda.jsx

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // ⬅️ Import useTranslation
import AOS from "aos";
import "aos/dist/aos.css";

export default function Beranda({ setActivePage }) {
  // ⬅️ Ambil fungsi terjemahan (t) dari Hook
  const { t } = useTranslation("beranda"); // Scope namespace 'beranda'

  // ... (useEffect untuk AOS tetap sama)
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Fungsi utilitas untuk navigasi (tetap sama)
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      window.location.href = `${pageIdentifier}.html`;
    }
  };

  return (
    <div className="mb-10">
      <section className="text-center py-16">
        <h1 className="text-5xl w-xl lg:w-5xl mx-auto font-semibold mb-4">
          {/* ⬅️ Ganti teks statis dengan t() */}
          {t("tagline_judul")}
        </h1>
        <p className="text-gray-600 text-lg max-w-xl md:max-w-2xl mx-auto leading-tight mb-8">
          {/* ⬅️ Ganti teks statis dengan t() */}
          {t("tagline_deskripsi")}
        </p>
        <div className="flex justify-center items-center relative w-full h-[700px] overflow-hidden">
          <img
            src="image 3.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <img src="image 4.png" alt="" className="z-10 w-auto h-full" />
          <p className="absolute bottom-20 right-20 text-white text-lg text-left tracking-tighter leading-tight max-w-sm z-20">
            {/* ⬅️ Ganti teks statis dengan t() */}
            {t("tagline_pengiriman")} <br />
            <b>{t("tagline_furnitur")}</b> Jawa Timur
          </p>
        </div>
      </section>

      {/* konten */}
      <section className="space-y-16 mb-3">
        {/* program */}
        <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-8 leading-tight">
          <div>
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("program_judul")}
            </h2>
            <p className="text-gray-600 mb-4 max-w-md">
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("program_deskripsi")}
            </p>
            {/* ... (button tetap sama) */}
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("btn_selengkapnya")}
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
          <div className="relative max-w-full rounded-xl overflow-hidden">
            {/* ... (image dan overlay tetap sama) */}
            <img
              src="image 1.png"
              alt=""
              className="block w-full h-full object-cover"
            />
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent z-10 pointer-events-none"
            />
            <div className="absolute inset-0 flex flex-col p-6 z-20">
              <h2 className="text-xl max-w-lg font-semibold mb-3 text-white">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("tagline_pengiriman")}{" "}
              </h2>
              <p className="text-gray-100 mb-4 max-w-sm">
                Memastikan pengiriman produk mitra terkoordinasi secara
                profesional dengan pengelolaan pengiriman yang berstandar tinggi
              </p>
            </div>
          </div>
        </div>

        {/* layanan */}
        <div className=" grid grid-cols-2 gap-8 max-w-6xl mx-auto px-4 leading-tight">
          <div className="relative rounded-2xl overflow-hidden">
            {/* ... (gambar dan gradasi tetap sama) */}
            <img
              src="image 10.jpg"
              className="w-full h-full md:h-96 object-cover brightness-30"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent" />

            {/* gambar konten (card)*/}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="absolute left-1/2 bottom-0 md:translate-y-1/3 -translate-x-1/2 bg-white p-2 pb-16 md:pb-0 rounded-2xl shadow-lg w-4/5 md:w-2/3 md:min-h-[350px]">
                <img
                  src="image 1.png"
                  className="rounded-2xl object-cover w-full max-h-40"
                />
              </div>
            </div>

            {/* Konten teks */}
            <div className="absolute top-0 left-0 p-6 z-20 text-white">
              <h2 className="text-xl font-semibold max-w-lg mb-3">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("konsultasi_judul")}{" "}
              </h2>
              <p className="text-white/90 max-w-md">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("konsultasi_deskripsi")}
              </p>
            </div>
          </div>
          <div className="relative">
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("layanan_judul")}{" "}
            </h2>
            <p className="text-gray-600 max-w-md mb-4">
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("layanan_deskripsi")}
            </p>
            {/* ... (button tetap sama) */}
            <button
              onClick={() => handleNavigation("Layanan1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:bg-blue-100 font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("btn_selengkapnya")}
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

        {/* program */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5 leading-tight">
          <div className="flex justify-between space-x-5 max-w-6xl mx-auto leading-tight">
            <div className="space-y-3">
              <h2 className="text-4xl max-w-lg font-semibold">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("pengembangan_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-md">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("pengembangan_deskripsi")}
              </p>
            </div>
            {/* ... (button tetap sama) */}
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium px-4 py-2 rounded-xl w-fit self-end"
            >
              {/* ⬅️ Ganti teks statis dengan t() */}
              {t("btn_selengkapnya")}
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
          <div className="grid grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="relative">
              <img
                src="image 10.jpg"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-80 object-cover rounded-2xl z-0 brightness-50"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2 max-w-xs">
                <h2 className="font-semibold text-xl">
                  {/* ⬅️ Ganti teks statis dengan t() */}
                  {t("seminar_judul")}{" "}
                </h2>
                <p className="hidden md:block">
                  {/* ⬅️ Ganti teks statis dengan t() */}
                  {t("seminar_deskripsi")}
                </p>
              </div>
            </div>
            {/* Card 2, Card 3, dll. (gunakan t() dengan kunci yang sesuai) */}
            {/* ... */}
            <div className="relative">
              <img
                src="image 12.jpg"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-80 object-cover rounded-2xl z-0 brightness-50"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col md:justify-start justify-end p-4 text-white rounded-2xl space-y-2 max-w-xs">
                <h2 className="font-semibold text-xl">{t("seminar_judul")} </h2>
                <p className="hidden md:block">{t("seminar_deskripsi")}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="image 11.jpg"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-80 object-cover rounded-2xl z-0  brightness-50"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white rounded-2xl space-y-2 max-w-xs">
                <h2 className="font-semibold text-xl">{t("seminar_judul")} </h2>
                <p className="hidden md:block">{t("seminar_deskripsi")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* berita */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex justify-between space-x-10 leading-tight">
            <div>
              <img
                src="image 4.png"
                className="flex max-h-40 object-cover z-0"
                alt=""
              />
              {/* ... (button tetap sama) */}
              <button
                onClick={() => handleNavigation("Berita1")}
                className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium px-4 py-2 rounded-xl w-fit self-end z-10"
              >
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("btn_selengkapnya")}
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
            <div className="space-y-3">
              <h2 className="text-4xl max-w-lg font-semibold">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("berita_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-md">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("berita_deskripsi")}
              </p>
            </div>
          </div>
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Berita Card 1 */}
            <div className="relative max-w-80 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {/* ⬅️ Ganti teks statis dengan t() */}
                  {t("berita_card_judul")}{" "}
                </h2>
                <p className="text-gray-100 opacity-70">25 September 2025</p>
              </div>
            </div>
            {/* Berita Card 2 */}
            <div className="relative max-w-80 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {t("berita_card_judul")}{" "}
                </h2>
                <p className="text-gray-100 opacity-70">25 September 2025</p>
              </div>
            </div>
            {/* Berita Card 3 */}
            <div className="relative max-w-80 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {t("berita_card_judul")}{" "}
                </h2>
                <p className="text-gray-100 opacity-70">25 September 2025</p>
              </div>
            </div>
            {/* Berita Card 4 */}
            <div className="relative max-w-80 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {t("berita_card_deskripsi")}
                </h2>
                <p className="text-gray-100 opacity-70">25 September 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* mitra */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10 leading-tight">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("mitra_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {/* ⬅️ Ganti teks statis dengan t() */}
                {t("mitra_deskripsi")}
              </p>
            </div>
          </div>
          {/* ... (gambar mitra tetap sama) */}
          <div className="grid grid-cols justify-items-center items-center gap-5">
            <img src="mitra.png" className="flex max-h-20" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
