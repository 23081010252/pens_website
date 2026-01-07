/**
 * komponen halaman daftar berita yang menampilkan ringkasan artikel.
 * mendukung fitur 'lihat selengkapnya' untuk memunculkan konten tambahan secara dinamis.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk navigasi antar halaman dalam aplikasi.
 */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";

export default function Berita1({ setActivePage }) {
  /** * pengambilan fungsi translasi untuk namespace 'berita' dan 'header'. */
  const { t } = useTranslation("berita");
  const { t: tHeader } = useTranslation("header");

  /** * ekstraksi data berita dari file json bahasa sebagai array objek. */
  const newsData = t("news_data", { returnObjects: true });

  /** * inisialisasi variabel data individu dengan nilai default jika data tidak ditemukan. */
  const data1 = newsData[0] || { title: "Berita tidak ditemukan", date: "" };
  const data2 = newsData[1] || { title: "Berita tidak ditemukan", date: "" };
  const data3 = newsData[2] || { title: "Berita tidak ditemukan", date: "" };
  const data4 = newsData[3] || { title: "Berita tidak ditemukan", date: "" };
  const data5 = newsData[4] || { title: "Berita tidak ditemukan", date: "" };
  const data6 = newsData[5] || { title: "Berita tidak ditemukan", date: "" };

  /** * state untuk mengatur visibilitas baris berita tambahan (load more). */
  const [showMore, setShowMore] = useState(false);

  /** * penentuan teks tombol secara kondisional berdasarkan status showmore. */
  const buttonText = showMore ? t("btn_tutup") : t("btn_lihat_selengkapnya");

  /**
   * fungsi internal untuk menangani logika navigasi dan reset posisi scroll.
   * @param {string} pageIdentifier - nama halaman tujuan.
   */
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
    }
  };

  /** * fungsi untuk membalikkan status state showmore (toggle). */
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="space-y-16">
      {/** bagian hero untuk menampilkan breadcrumb, komposisi gambar, dan text hero banner */}
      <section>
        <div className="grid grid-cols-2">
          {/** kontainer teks */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              {/** navigasi breadcrumb untuk menavigasi pengguna ke halaman beranda atau berita */}
              <button
                onClick={() => handleNavigation("beranda")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_beranda")} /
              </button>
              <button
                onClick={() => handleNavigation("berita1")}
                className="font-bold hover:text-gray-700"
              >
                {tHeader("menu_berita")}
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("judul_hero")}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("deskripsi_hero")}
            </p>
          </div>
          {/** kontainer gambar dengan efek tumpuk (layering) */}
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

      {/** bagian konten untuk menampilkan grid berita utama dan berita tambahan */}
      <section className="space-y-16 mb-3">
        {/** kontainer utama daftar berita */}
        <div id="row-4" className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("judul_konten")}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("deskripsi_konten")}
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-28 gap-2 md:gap-4 p-2">
              {/** card berita 1 */}
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
                    setActivePage("Berita2");
                  }}
                >
                  <h2 className="text-2xl font-semibold leading-none">
                    {data1.title}
                  </h2>
                  <p className="text-gray-700 opacity-70">{data1.date}</p>
                </button>
              </div>

              {/** card berita 2 */}
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
                    setActivePage("Berita3");
                  }}
                >
                  <h2 className="text-2xl font-semibold leading-none">
                    {data2.title}
                  </h2>
                  <p className="text-gray-700 opacity-70">{data2.date}</p>
                </a>
              </div>

              {/** card berita 3 */}
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
                    setActivePage("Berita4");
                  }}
                >
                  <h2 className="text-2xl font-semibold leading-none">
                    {data3.title}
                  </h2>
                  <p className="text-gray-700 opacity-70">{data3.date}</p>
                </a>
              </div>
            </div>

            {/** baris berita tambahan yang diatur oleh state showmore */}
            <div
              id="extra-cards"
              className={`${showMore ? "contents" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-28 gap-2 md:gap-4 p-2 mt-28">
                {/** card berita 4 */}
                <div className="relative space-y-2">
                  <img
                    src={data4.image || "image 1.png"}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <div
                    className="absolute flex flex-col justify-start space-y-2 cursor-pointer"
                    onClick={() => setActivePage("Berita5")}
                  >
                    <h2 className="text-2xl font-semibold leading-none">
                      {data4.title}
                    </h2>
                    <p className="text-gray-700 opacity-70">{data4.date}</p>
                  </div>
                </div>

                {/** card berita 5 */}
                <div className="relative space-y-2">
                  <img
                    src={data5.image || "image 1.png"}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <div
                    className="absolute flex flex-col justify-start space-y-2 cursor-pointer"
                    onClick={() => setActivePage("Berita6")}
                  >
                    <h2 className="text-2xl font-semibold leading-none">
                      {data5.title}
                    </h2>
                    <p className="text-gray-700 opacity-70">{data5.date}</p>
                  </div>
                </div>

                {/** card berita 6 */}
                <div className="relative space-y-2">
                  <img
                    src={data6.image || "image 1.png"}
                    className="w-full h-full object-cover rounded-2xl"
                    alt=""
                  />
                  <div
                    className="absolute flex flex-col justify-start space-y-2 cursor-pointer"
                    onClick={() => setActivePage("Berita7")}
                  >
                    <h2 className="text-2xl font-semibold leading-none">
                      {data6.title}
                    </h2>
                    <p className="text-gray-700 opacity-70">{data6.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** area tombol kontrol untuk menampilkan atau menyembunyikan berita tambahan */}
        <div className="flex justify-center">
          <button
            id="show-more-btn"
            onClick={toggleShowMore}
            className="border rounded-2xl px-6 py-2 mb-10 mt-20 hover:bg-blue-50"
          >
            {buttonText}
          </button>
        </div>
        <CTASection />
      </section>
    </div>
  );
}
