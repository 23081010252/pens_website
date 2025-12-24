// anggota1.jsx

import React from "react";
import { useTranslation } from "react-i18next"; // menerima data dari useTranslation

export default function Anggota1({ setActivePage }) {
  // namespace "keanggotaan"
  const { t } = useTranslation("keanggotaan");
  // menerima data t dari namespace "header" untuk breadcrumb
  const { t: tHeader } = useTranslation("header");

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // fungsi untuk menangani navigasi (jika ini bagian dari Single Page Application)
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
    }
  };

  // kode SVG untuk ikon check circle
  const CheckCircleIcon = () => (
    <svg
      className="w-6 h-6 mx-auto"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        className="text-gray-900"
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM10.5 16.5l-3-3 1.5-1.5 1.5 1.5 4.5-4.5 1.5 1.5-6 6Z"
        clipRule="evenodd"
      />
      {/* Menggunakan path centang dengan fill warna putih */}
      <path
        fill="white"
        d="M10.5 16.5l-3-3 1.5-1.5 1.5 1.5 4.5-4.5 1.5 1.5-6 6Z"
      />
    </svg>
  );

  return (
    <div className="space-y-16">
      {/* hero */}
      <section>
        <div className="grid grid-cols-2">
          {/* text konten */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              <button
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-500"
              >
                {tHeader("menu_beranda")} / {/* ⬅️ Terjemahan Header */}
              </button>
              <button
                onClick={() => handleNavigation("Anggota1")}
                className="font-bold"
              >
                {tHeader("menu_keanggotaan")} {/* ⬅️ Terjemahan Header */}
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("judul_hero")} {/* ⬅️ Terjemahan Keanggotaan */}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("deskripsi_hero")} {/* ⬅️ Terjemahan Keanggotaan */}
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

      {/* konten (Diterjemahkan) */}
      <section className="space-y-16 mb-3">
        {/* rincian keanggotaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 gap-8 leading-tight">
            <div className="relative">
              <img
                src="image 1.png"
                alt=""
                className="flex rounded-xl shadow-md  object-cover overflow-hidden w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-4xl max-w-lg font-semibold mb-3">
                {t("rincian_judul")}{" "}
              </h2>
              <p className="text-gray-600 mb-4 max-w-md">
                {t("rincian_deskripsi")}
              </p>
              <button
                onClick={() => handleScroll("jenis_keanggotaan")}
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
          </div>
        </div>
        {/* jenis keanggotaan */}
        <div
          id="jenis_keanggotaan"
          className="relative max-w-6xl mx-auto px-4 space-y-5"
        >
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("jenis_judul")} <br /> {t("jenis_judul_perusahaan")}{" "}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("jenis_deskripsi")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <img
                src="image 10.jpg"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-80 object-cover rounded-2xl z-0 brightness-50"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                <h2 className="font-semibold text-xl">
                  {t("kartu_konsultasi_judul")}{" "}
                </h2>
                <p>{t("kartu_konsultasi_deskripsi")}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="image 12.jpg"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-80 object-cover rounded-2xl z-0 brightness-50"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col md:justify-start justify-end p-4 text-white rounded-2xl space-y-2">
                <h2 className="font-semibold text-xl">
                  {t("kartu_konsultasi_judul")}{" "}
                </h2>
                <p>{t("kartu_konsultasi_deskripsi")}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="image 11.jpg"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-80 object-cover rounded-2xl z-0 brightness-50"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white rounded-2xl space-y-2">
                <h2 className="font-semibold text-xl">
                  {t("kartu_konsultasi_judul")}{" "}
                </h2>
                <p>{t("kartu_konsultasi_deskripsi")}</p>
              </div>
            </div>
          </div>
        </div>
        {/* skema keanggotaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("skema_judul")} <br />
                {t("jenis_judul_perusahaan")}{" "}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("skema_deskripsi")}
              </p>
            </div>
          </div>
          <div>
            <img
              src="image 13.jpg"
              className="rounded-2xl h-full w-full"
              alt=""
            />
          </div>
        </div>

        {/* Syarat dan Ketentuan Keanggotaan (Tabel) */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("tabel_syarat_judul")} <br />
                {t("jenis_judul_perusahaan")}{" "}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("tabel_deskripsi")}
              </p>
            </div>
          </div>
          <div>
            <div className="border border-gray-300 rounded-lg">
              <table className="table-fixed w-full rounded-lg overflow-hidden">
                <thead className="bg-gray-50 text-xl">
                  <tr>
                    <th className="px-4 py-5 text-center">
                      {t("tabel_kolom_klasifikasi")}
                    </th>
                    <th className="px-4 py-5 text-center">
                      {t("tabel_kolom_pens")}
                    </th>
                    <th className="px-4 py-5 text-center">
                      {t("tabel_kolom_lainnya")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-100 px-4 py-5 text-start">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                    <td className="px-4 py-5 text-center" />
                  </tr>
                  <tr className="bg-gray-50 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center" />
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                  </tr>
                  <tr className="bg-blue-100 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                  </tr>
                  <tr className="bg-gray-50 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                    <td className="px-4 py-5 text-center" />
                  </tr>
                  <tr className="bg-blue-100 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-start">
                      <p className="text-gray-700">
                        {t("tabel_kaki_deskripsi")}**
                      </p>
                    </td>
                    <td className="px-4 py-5 text-center" />
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 max-w-md mt-5">
              **{t("tabel_kaki_deskripsi")}
            </p>
          </div>
        </div>

        {/* Keunggulan Layanan (Tabel) */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("tabel_keunggulan_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("tabel_deskripsi")}
              </p>
            </div>
          </div>
          <div>
            <div className="border border-gray-300 rounded-lg">
              <table className="table-fixed w-full rounded-lg overflow-hidden">
                <thead className="bg-gray-50 text-xl">
                  <tr>
                    <th className="px-4 py-5 text-center">
                      {t("tabel_kolom_klasifikasi")}
                    </th>
                    <th className="px-4 py-5 text-center">
                      {t("tabel_kolom_pens")}
                    </th>
                    <th className="px-4 py-5 text-center">
                      {t("tabel_kolom_lainnya")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-blue-100 px-4 py-5 text-start">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                    <td className="px-4 py-5 text-center" />
                  </tr>
                  <tr className="bg-gray-50 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center" />
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                  </tr>
                  <tr className="bg-blue-100 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                  </tr>
                  <tr className="bg-gray-50 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-center">
                      <CheckCircleIcon />
                    </td>
                    <td className="px-4 py-5 text-center" />
                  </tr>
                  <tr className="bg-blue-100 px-4 py-2">
                    <td className="px-4 py-5 text-start">
                      {t("tabel_row_manfaat")}
                    </td>
                    <td className="px-4 py-5 text-start">
                      <p className="text-gray-700">
                        {t("tabel_kaki_deskripsi")}**
                      </p>
                    </td>
                    <td className="px-4 py-5 text-center" />
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 max-w-md mt-5">
              **{t("tabel_kaki_deskripsi")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
