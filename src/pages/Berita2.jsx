/**
 * komponen halaman detail berita (berita2) yang menampilkan isi artikel secara mendalam.
 * memiliki fitur breadcrumb untuk navigasi hirarkis dan daftar rekomendasi berita terkini.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk mengatur state halaman aktif pada aplikasi utama.
 */

import React from "react";
import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";

export default function Berita2({ setActivePage }) {
  /** * inisialisasi hook translasi untuk namespace 'berita2' dan 'header'. */
  const { t } = useTranslation("berita2");
  const { t: tHeader } = useTranslation("header");

  /** * mengambil data array berita rekomendasi dari file konfigurasi lokalisasi. */
  const rekomendasi = t("berita_rekomendasi", { returnObjects: true });

  /**
   * fungsi utilitas untuk mengelola navigasi antar halaman.
   * melakukan reset posisi scroll ke koordinat 0,0 dan memperbarui state halaman.
   * @param {string} pageIdentifier - identifier string untuk halaman tujuan.
   */
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
      {/** bagian hero untuk menampilkan navigasi breadcrumb, judul artikel, dan elemen visual pendukung */}
      <section>
        <div className="grid grid-cols-2">
          {/** teks konten hero */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              {/** breadcrumb tautan kembali ke halaman beranda */}
              <button
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_beranda")} /
              </button>
              {/** breadcrumb tautan kembali ke halaman berita */}
              <button
                onClick={() => handleNavigation("Berita1")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_berita")} /
              </button>
              {/** breadcrumb indikator posisi halaman artikel yang sedang diaskes */}
              <a href="#" className="font-bold">
                {t("judul_halaman")}
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("hero.judul_utama")}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("hero.deskripsi")}
            </p>
          </div>
          {/** gambar konten hero dengan teknik layering gambar latar dan objek utama */}
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

      {/** bagian konten untuk menampilkan detail artikel secara lengkap dan daftar rekomendasi  berita */}
      <section className="space-y-16 mb-3">
        {/** bagian rincian artikel untuk menampilkan judul, tanggal publikasi, gambar, dan konten berita */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="items-center justify-center max-w-screen space-y-7">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("detail.judul_artikel")}
              </h2>
              <div>
                <p className="text-gray-600 max-w-xl mx-auto">
                  {t("detail.tanggal_publikasi")}
                </p>
                <p className="text-gray-600 max-w-xl mx-auto">
                  {t("detail.penulis")}
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
                  {t("detail.konten_paragraf_1")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/** bagian berita terkait untuk menampilkan daftar horizontal rekomendasi berita terkini */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex items-center justify-start max-w-screen">
            <div className="max-w-6xl text-left leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("terkini.judul_terkini")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("terkini.deskripsi_terkini")}
              </p>
            </div>
          </div>
          {/** kontainer berita terkini dengan fitur gulir horizontal */}
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2 tracking-tighter leading-tight"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/** melakukan iterasi pada data 'berita_rekomendasi' untuk merender setiap kartu berita */}
            {rekomendasi.map((berita, index) => (
              <div
                key={index}
                className="relative max-w-80 shrink-0 cursor-pointer"
                onClick={() => handleNavigation(`BeritaDetail${berita.id}`)}
              >
                <img
                  /** * penggunaan gambar statis sebagai placeholder */
                  src="image 1.png"
                  className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                  alt={berita.judul}
                />
                <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                  <a href="#" className="text-2xl leading-none">
                    {berita.judul}
                  </a>
                  <p className="text-gray-100 opacity-70">{berita.tanggal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTASection />
      </section>
    </div>
  );
}
