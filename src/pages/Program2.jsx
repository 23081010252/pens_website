/**
 * komponen halaman detail program yang menampilkan informasi spesifik, deskripsi,
 * dan daftar program terbaru lainnya. menggunakan i18next untuk manajemen bahasa.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk mengatur navigasi halaman aktif.
 */

import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";

export default function Program2({ setActivePage }) {
  /** inisialisasi hook terjemahan dengan namespace 'program2'. */
  const { t } = useTranslation("program2");

  /**
   * fungsi untuk menangani perpindahan halaman, mereset posisi scroll,
   * dan mendukung mekanisme single page application (spa) atau link statis.
   * @param {string} pageIdentifier - nama halaman tujuan.
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
    <div className="space-y-16 mb-10">
      {/** * bagian hero yang menampilkan breadcrumb
       * serta judul utama dan visualisasi latar belakang
       */}
      <section>
        <div className="grid grid-cols-2 gap-x-20">
          {/** kontainer teks hero yang mencakup navigasi breadcrumb dan deskripsi program */}
          <div className="max-w-xl mx-auto px-4 md:px-5 mt-10">
            <div className="mb-6 text-base">
              <button
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-500"
              >
                {t("breadcrumb_beranda")} /{" "}
              </button>
              <button
                onClick={() => handleNavigation("Program1")}
                className="text-gray-500"
              >
                {t("breadcrumb_program")} /{" "}
              </button>
              <button
                onClick={() => handleNavigation("Program2")}
                className="font-bold"
              >
                {t("breadcrumb_detail")}
              </button>
            </div>
            {/** judul halaman detail program */}
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("hero_title")}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("hero_subtitle")}
            </p>
          </div>
          {/** gambar konten halaman detail program */}
          <div className="relative flex w-full h-auto md:h-[500px] ">
            <img
              src="image 6.png"
              alt=""
              className="absolute w-full h-full object-cover z-0"
            />
            <img
              src="image 2.png"
              alt=""
              className="z-10 w-auto h-full md:-translate-x-10"
            />
          </div>
        </div>
      </section>

      {/** * konten utama yang berisi rincian mendalam mengenai program dan carousel program terbaru
       */}
      <section className="space-y-16 mb-3">
        {/** rincian program yang menampilkan judul detail, tenggat waktu, gambar utama, dan deskripsi program */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="items-center justify-center max-w-screen space-y-7">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("detail_title")}{" "}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("detail_deadline")}
              </p>
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
                {/** paragraf deskripsi dengan gaya indentasi dan perataan teks rata kanan-kiri */}
                <p className="[text-indent:5em] text-justify">
                  {t("detail_description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/** * pilihan program yang menampilkan card program terbaru dalam format gulir horizontal
         */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex items-center justify-start max-w-screen">
            <div className="max-w-6xl text-left leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("section_title")}{" "}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("section_subtitle")}
              </p>
            </div>
          </div>
          {/** carousel card dengan pengaturan scrollbar */}
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2 tracking-tighter leading-tight"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/**card 1 */}
            <div className="relative max-w-80 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 text-white space-y-2">
                <button
                  onClick={() => handleNavigation("Program2")}
                  className="text-2xl leading-none text-left"
                >
                  {t("latest_program_title")}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("latest_program_date")}
                </p>
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
                <button
                  onClick={() => handleNavigation("Program2")}
                  className="text-2xl leading-none text-left"
                >
                  {t("latest_program_title")}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("latest_program_date")}
                </p>
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
                <button
                  onClick={() => handleNavigation("Program2")}
                  className="text-2xl leading-none text-left"
                >
                  {t("latest_program_title")}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("latest_program_date")}
                </p>
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
                <button
                  onClick={() => handleNavigation("Program2")}
                  className="text-2xl leading-none text-left"
                >
                  {t("latest_program_title")}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("latest_program_date")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <CTASection />
      </section>
    </div>
  );
}
