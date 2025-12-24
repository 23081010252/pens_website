// bantuan1.jsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // ⬅️ Import useTranslation

export default function Bantuan1({ setActivePage }) {
  // ⬅️ Gunakan namespace "bantuan" untuk konten utama
  const { t } = useTranslation("bantuan");
  // Dapatkan t dari namespace "header" untuk breadcrumb
  const { t: tHeader } = useTranslation("header");

  // 1. State untuk mengelola item accordion mana yang sedang terbuka
  const [openItem, setOpenItem] = useState(null);

  // Fungsi untuk menangani navigasi (jika ini bagian dari Single Page Application)
  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
    }
  };

  // 2. Fungsi untuk mengalihkan status accordion
  const toggleAccordion = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  // 3. Ambil data FAQ dari i18n
  const faqData = t("faq_data", { returnObjects: true });

  return (
    <div className="space-y-16">
      {/* hero */}
      <section>
        <div className="grid grid-cols-2">
          {/* text kiri */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              {/* Breadcrumb - menggunakan tHeader */}
              <button
                onClick={() => handleNavigation("beranda")}
                className="text-gray-500 hover:text-gray-700"
              >
                {tHeader("menu_beranda")} /{" "}
              </button>
              <button
                onClick={() => handleNavigation("bantuan1")}
                className="font-bold hover:text-gray-700"
              >
                {tHeader("menu_bantuan")}
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
      <section className="space-y-16 mb-10">
        {/* FAQ */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("faq_judul")}{" "}
              </h2>
            </div>
          </div>

          <div>
            <div className="w-full space-y-3">
              {/* Looping melalui data FAQ dari i18n */}
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden border border-gray-200"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span>{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform ${
                        openItem === item.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`px-4 pb-4 text-gray-600 transition-all duration-300 ease-in-out ${
                      openItem === item.id ? "block" : "hidden"
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
