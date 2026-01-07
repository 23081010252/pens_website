/**
 * komponen halaman utama (beranda) yang berfungsi sebagai landing page.
 * mengintegrasikan animasi scroll menggunakan library aos dan lokalisasi teks.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk mengubah status halaman aktif dalam sistem spa.
 */

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Beranda({ setActivePage }) {
  /** * hook translasi dengan scope namespace 'beranda' untuk mengambil data teks. */
  const { t } = useTranslation("beranda");

  /** * hook effect untuk inisialisasi library aos saat komponen pertama kali dirender. */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  /**
   * fungsi utilitas untuk menangani perpindahan halaman.
   * melakukan scroll ke atas dan mengeksekusi setter halaman atau navigasi file statis.
   * @param {string} pageIdentifier - identifier kunci untuk halaman tujuan.
   */
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
      {/** bagian hero berisi tagline utama dan elemen visual */}
      <section className="text-center py-16">
        <h1 className="text-5xl lg:w-5xl mx-auto font-semibold mb-4">
          {t("tagline_judul")}
        </h1>
        <p className="text-gray-600 text-md lg:max-w-2xl mx-auto leading-tight mb-8">
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
            {t("tagline_pengiriman")} <br />
            <b>{t("tagline_furnitur")}</b> Jawa Timur
          </p>
        </div>
      </section>

      {/** pembungkus konten utama halaman. */}
      <section className="space-y-16 mb-3">
        {/** bagian program: menampilkan informasi program kemitraan. */}
        <div className="grid grid-cols-2 max-w-6xl mx-auto px-4 gap-x-10 leading-tight">
          <div>
            <h2 className="text-4xl font-semibold mb-3">
              {t("program_judul")}
            </h2>
            <p className="text-gray-600 max-w-md mb-4">
              {t("program_deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
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
                {t("tagline_pengiriman")}{" "}
              </h2>
              <p className="text-gray-100 mb-4 max-w-sm">
                Memastikan pengiriman produk mitra terkoordinasi secara
                profesional dengan pengelolaan pengiriman yang berstandar tinggi
              </p>
            </div>
          </div>
        </div>

        {/** bagian layanan berisi informasi layanan konsultasi dengan card visual yang menggunakan interaksi aos anchor */}
        <div className=" grid grid-cols-2 gap-8 max-w-6xl mx-auto px-4 leading-tight">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="image 10.jpg"
              className="w-full h-full md:h-96 object-cover brightness-30"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/20 to-transparent" />

            {/** elemen gambar konten (card) yang diposisikan di tengah bawah */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="absolute left-1/2 bottom-0 md:translate-y-1/3 -translate-x-1/2 bg-white p-2 pb-16 md:pb-0 rounded-2xl shadow-lg w-4/5 md:w-2/3 min-h-[300px]">
                <img
                  src="image 10.jpg"
                  className="rounded-2xl object-cover w-full h-40"
                />
              </div>
            </div>

            {/** blok teks konten yang diletakkan di atas gambar latar */}
            <div className="absolute top-0 left-0 p-6 z-20 text-white">
              <h2 className="text-xl font-semibold max-w-lg mb-3">
                {t("konsultasi_judul")}{" "}
              </h2>
              <p className="text-white/90 max-w-md">
                {t("konsultasi_deskripsi")}
              </p>
            </div>
          </div>
          <div className="relative">
            <h2 className="text-4xl max-w-lg font-semibold mb-3">
              {t("layanan_judul")}{" "}
            </h2>
            <p className="text-gray-600 max-w-md mb-4">
              {t("layanan_deskripsi")}
            </p>
            <button
              onClick={() => handleNavigation("Layanan1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:bg-blue-100 font-medium mt-10 mb-5 px-4 py-2 rounded-xl w-fit"
            >
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

        {/** bagian program pengembangan: menampilkan daftar kartu seminar atau pelatihan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5 leading-tight">
          <div className="flex justify-between space-x-5 max-w-6xl mx-auto leading-tight">
            <div className="space-y-3">
              <h2 className="text-4xl max-w-lg font-semibold">
                {t("pengembangan_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-md">
                {t("pengembangan_deskripsi")}
              </p>
            </div>
            <button
              onClick={() => handleNavigation("Program1")}
              className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium px-4 py-2 rounded-xl w-fit self-end"
            >
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
            {/** card 1 */}
            <div className="relative flex flex-col">
              <img
                src="image 10.jpg"
                className="w-full md:h-3/5 object-cover rounded-2xl brightness-50 z-0"
                alt=""
              />
              <div className="relative -mt-34 p-4 text-white space-y-2 z-10 max-w-xs">
                <h2 className="font-semibold text-xl">{t("seminar_judul")}</h2>
                <p className="hidden md:block text-sm">
                  {t("seminar_deskripsi")}
                </p>
              </div>
            </div>
            {/** card 2 */}
            <div className="relative flex flex-col">
              <img
                src="image 10.jpg"
                className="w-full md:h-3/5 object-cover rounded-2xl brightness-50 z-0"
                alt=""
              />
              <div className="relative -mt-34 p-4 text-white space-y-2 z-10 max-w-xs">
                <h2 className="font-semibold text-xl">{t("seminar_judul")}</h2>
                <p className="hidden md:block text-sm">
                  {t("seminar_deskripsi")}
                </p>
              </div>
            </div>
            {/** card 3 */}
            <div className="relative flex flex-col">
              <img
                src="image 10.jpg"
                className="w-full md:h-3/5 object-cover rounded-2xl brightness-50 z-0"
                alt=""
              />
              <div className="relative -mt-34 p-4 text-white space-y-2 z-10 max-w-xs">
                <h2 className="font-semibold text-xl">{t("seminar_judul")}</h2>
                <p className="hidden md:block text-sm">
                  {t("seminar_deskripsi")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/** bagian berita berisi daftar artikel terbaru dengan navigasi gulir horizontal */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex justify-between space-x-10 leading-tight">
            <div>
              <img
                src="image 4.png"
                className="flex max-h-40 object-cover z-0"
                alt=""
              />
              <button
                onClick={() => handleNavigation("Berita1")}
                className="inline-flex items-center text-gray-800 bg-blue-50 hover:text-black font-medium px-4 py-2 rounded-xl w-fit self-end z-10"
              >
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
                {t("berita_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-md">{t("berita_deskripsi")}</p>
            </div>
          </div>
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/** card 1 */}
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
            {/** card 2 */}
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
            {/** card 3 */}
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
            {/** card 4 */}
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

        {/** bagian mitra untuk menampilkan logo mitra yang bekerja sama dengan perusahaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10 leading-tight">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("mitra_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("mitra_deskripsi")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols justify-items-center items-center gap-5">
            <img src="mitra.png" className="flex max-h-20" alt="" />
          </div>
        </div>
        <CTASection />
      </section>
    </div>
  );
}
