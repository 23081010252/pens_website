/**
 * komponen header navigasi utama dengan fitur sticky (fixed).
 * mendukung navigasi dinamis, sistem multibahasa (i18n), dan tampilan responsif (mobile menu).
 * * @component
 * @param {object} props - properti komponen.
 * @param {string} props.activePage - kunci (key) halaman yang sedang aktif saat ini.
 * @param {function} props.setActivePage - fungsi setter untuk memperbarui halaman aktif di state utama.
 * @param {array} [props.menuItems=defaultMenuItems] - daftar item menu yang akan ditampilkan.
 * * @description
 * komponen menggunakan hook `useTranslation` untuk menangani teks multibahasa.
 * memiliki dua state internal utama:
 * 1. `isLangMenuOpen` untuk mengontrol dropdown pilihan bahasa (id/en).
 * 2. `isMobileMenuOpen` untuk mengontrol visibilitas menu pada layar kecil.
 * * @example
 * <Header activePage="Beranda" setActivePage={(key) => handlePageChange(key)} />
 * * @returns {jsx.element} bar navigasi dengan logo, link menu dinamis, dropdown bahasa, dan menu hamburger mobile.
 */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * konfigurasi standar untuk item navigasi.
 * setiap objek berisi:
 * - name: nama fallback (untuk referensi pengembang).
 * - key: identitas unik untuk kontrol state aktif.
 * - i18nKey: kunci referensi untuk mengambil teks terjemahan dari file json.
 */
const defaultMenuItems = [
  { name: "Beranda", key: "Beranda", i18nKey: "menu_beranda" },
  { name: "Layanan", key: "Layanan1", i18nKey: "menu_layanan" },
  { name: "Keanggotaan", key: "Anggota1", i18nKey: "menu_keanggotaan" },
  { name: "Tentang Kami", key: "Profil1", i18nKey: "menu_profil" },
  { name: "Berita", key: "Berita1", i18nKey: "menu_berita" },
  { name: "Bantuan", key: "Bantuan1", i18nKey: "menu_bantuan" },
];

export default function Header({
  activePage,
  setActivePage,
  menuItems = defaultMenuItems,
}) {
  /** * hook untuk mengakses fungsi terjemahan dan instans i18n.
   * menggunakan namespace "header" untuk pengelolaan teks multibahasa.
   */
  const { t, i18n } = useTranslation("header");

  /** * state boolean untuk mengontrol visibilitas menu dropdown pilihan bahasa.
   * bernilai true jika menu terbuka, dan false jika tertutup.
   */
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  /** * mengambil kode bahasa yang sedang aktif dari i18n.
   * diubah menjadi huruf kapital (contoh: 'ID', 'EN') untuk standarisasi tampilan ui.
   */
  const activeLang = i18n.language.toUpperCase();

  /** * state boolean untuk mengontrol tampilan menu navigasi pada perangkat mobile.
   * digunakan untuk menampilkan atau menyembunyikan menu hamburger.
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /**
   * mengubah visibilitas dropdown bahasa.
   */
  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  /**
   * mengubah visibilitas menu mobile dan memastikan dropdown bahasa tertutup.
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLangMenuOpen(false);
  };

  /**
   * mengubah bahasa aplikasi menggunakan instance i18n.
   * @param {string} lang - kode bahasa (contoh: "IDN" atau "ENG").
   */
  const changeLanguage = (lang) => {
    const lowerLang = lang.toLowerCase();
    i18n.changeLanguage(lowerLang);

    setIsLangMenuOpen(false);
  };

  /**
   * menentukan kelas css berdasarkan status aktif halaman.
   * @param {string} key - kunci halaman yang akan dicek.
   * @returns {string} string kelas tailwind.
   */
  const getLinkClass = (key) => {
    const baseClasses = "text-gray-700 hover:text-black cursor-pointer";
    if (activePage === key) {
      return "font-semibold text-black";
    }
    return baseClasses;
  };

  /**
   * menangani klik pada item menu untuk navigasi.
   * @param {string} key - kunci halaman tujuan.
   */
  const handleMenuClick = (key) => {
    setActivePage(key);
    console.log(`Navigasi ke halaman: ${key}`);
  };

  return (
    <header className="fixed top-0 w-full z-50 shadow bg-white">
      <div className="mx-auto px-4">
        <div className="flex h-16 justify-between items-center text-lg ">
          {/* mengatur aktivasi tombol beranda saat ditekan */}
          <a
            href="#"
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("Beranda");
            }}
          >
            <img src="image 5.png" alt="Logo" className="h-8 z-0" />
            <p className="font-semibold text-sm">PT. Pegiat Ekspor Nusantara</p>
          </a>

          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-end">
            <div className="flex flex-1 justify-center space-x-5">
              {/* desktop loop menu */}
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.key);
                  }}
                  className={`${getLinkClass(
                    item.key
                  )} text-gray-700 hover:text-black`}
                >
                  {/* menggunakan fungsi t() untuk mengambil terjemahan */}
                  {t(item.i18nKey)}{" "}
                </a>
              ))}
            </div>

            {/* dropdown Bahasa */}
            <div className="relative">
              <button
                id="langBtn"
                onClick={toggleLangMenu}
                className="flex items-center text-gray-700 hover:text-black focus:outline-none"
              >
                {activeLang}{" "}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    isLangMenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="langMenu"
                className={`${
                  isLangMenuOpen ? "block" : "hidden"
                } absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-md`}
              >
                {/* IDN */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage("IDN");
                  }}
                  className={`block px-4 py-2 text-sm ${
                    activeLang === "IDN"
                      ? "font-bold bg-gray-100 text-black"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  IDN
                </a>
                {/* ENG */}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage("ENG");
                  }}
                  className={`block px-4 py-2 text-sm ${
                    activeLang === "ENG"
                      ? "font-bold bg-gray-100 text-black"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  ENG
                </a>
              </div>
            </div>
          </nav>

          {/* tombol menu mobile */}
          <div className="md:hidden">
            <button
              id="menuBtn"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* menu mobile */}
      <div
        id="mobileMenu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden text-lg border-t border-gray-200`}
      >
        <div className="px-4 py-3 space-y-2">
          {/*mobile menu loop */}
          {menuItems.map((item) => (
            <a
              key={item.key}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item.key);
                toggleMobileMenu(); // menutup menu setelah di tekan
              }}
              className={`block py-2 ${getLinkClass(
                item.key
              )} text-gray-700 hover:text-black`}
            >
              {/* menggunakan fungsi t() untuk mengambil terjemahan */}
              {t(item.i18nKey)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
