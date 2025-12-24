import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// menggunakan defaultMenuItems untuk memanggil key dari i18n
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
  const { t, i18n } = useTranslation("header"); // memanggil fungsi terjemahan (t) dan instance i18n dari Hook

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); // state untuk dropdown bahasa

  const activeLang = i18n.language.toUpperCase(); // menggunakan toLocaleUpperCase() untuk memastikan output ID/EN konsisten dengan input

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State  untuk Menu Mobile

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLangMenuOpen(false);
  };

  const changeLanguage = (lang) => {
    const lowerLang = lang.toLowerCase();
    i18n.changeLanguage(lowerLang);

    setIsLangMenuOpen(false);
  };

  const getLinkClass = (key) => {
    const baseClasses = "text-gray-700 hover:text-black cursor-pointer";
    if (activePage === key) {
      return "font-semibold text-black";
    }
    return baseClasses;
  };

  // melakukan update state yang akan merender halaman di App.jsx
  const handleMenuClick = (key) => {
    setActivePage(key);
    console.log(`Navigasi ke halaman: ${key}`);
  };

  return (
    <header className="fixed top-0 w-full z-50 shadow bg-white">
      <div className="mx-auto px-4">
        <div className="flex h-16 justify-between items-center text-lg ">
          <a
            href="#"
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("Beranda"); // mengatur beranda menjadi halaman aktif saat logo ditekan
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
                    changeLanguage("IDN"); // Memanggil fungsi yang sudah diperbaiki
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
                    changeLanguage("ENG"); // Memanggil fungsi yang sudah diperbaiki
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
