/**
 * komponen utama untuk halaman program yang menampilkan daftar inisiatif dan pengumuman.
 * menggunakan i18next untuk internasionalisasi dan mendukung navigasi internal.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk memperbarui status halaman aktif.
 */

import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";

export default function Program1({ setActivePage }) {
  /** insialisasi hook terjemahan dengan namespace 'program1'. */
  const { t } = useTranslation("program1");

  /**
   * mengelola logika navigasi, pengaturan posisi scroll ke atas, dan fallback link statis.
   * @param {string} pageIdentifier - id atau nama halaman tujuan.
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
      {/** * bagian hero yang menampilkan breadcrumb navigasi dan identitas visual
       */}
      <section>
        <div className="grid grid-cols-2 gap-x-20">
          {/** konten yang berisi judul dan deskripsi program */}
          <div className="max-w-xl mx-auto pt-10 px-5">
            <div className="mb-6 text-base">
              {/** navigasi breadcrumb untuk kembali ke beranda atau halaman program. */}
              <button
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-500"
              >
                {t("breadcrumb_beranda")} /{" "}
              </button>
              <button
                onClick={() => handleNavigation("Program1")}
                className="font-bold"
              >
                {t("breadcrumb_program")}
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("hero_title")}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("hero_subtitle")}
            </p>
          </div>
          {/** visual hero dengan teknik layering gambar */}
          <div className="relative flex w-full h-auto md:h-[500px]">
            <img
              src="image 6.png"
              alt=""
              className="absolute w-full h-full object-cover z-0"
            />
            <img
              src="image 2.png"
              alt=""
              className="z-10 w-full h-full md:-translate-x-10"
            />
          </div>
        </div>
      </section>

      {/** * bagian konten utama yang berisi daftar program dan informasi detail lainnya
       */}
      <section className="space-y-16 mb-3">
        {/** * pilihan program dengan carousel horizontal yang menampilkan berbagai program yang tersedia
         */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("section_title_1")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("section_subtitle_1")}
              </p>
            </div>
          </div>
          {/** kontainer gulir horizontal untuk card program */}
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/** card program 1 */}
            <div className="relative max-w-80 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-48 lg:h-60 object-cover rounded-2xl z-0"
                alt=""
              />
              <button
                onClick={() => handleNavigation("Program2")}
                className="absolute inset-0 flex flex-col self-end text-left p-4 text-white space-y-2"
              >
                <p className="text-2xl leading-none">
                  {t("program_card_title")}{" "}
                </p>
                <p className="text-gray-100 opacity-70">
                  {t("program_card_date_1")}
                </p>
              </button>
            </div>
            {/** card program 2 */}
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
                  {t("program_card_title")}{" "}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("program_card_date_1")}
                </p>
              </div>
            </div>
            {/** card program 3 */}
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
                  {t("program_card_title")}{" "}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("program_card_date_1")}
                </p>
              </div>
            </div>
            {/** card program 4 */}
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
                  {t("program_card_title")}{" "}
                </button>
                <p className="text-gray-100 opacity-70">
                  {t("program_card_date_1")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/** * pemberitahuan program dengan grid asimetris yang menampilkan program terbaru
         */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10 leading-tight">
          <div className="items-center justify-center max-w-screen space-y-7">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("section_title_2")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("section_subtitle_2")}
              </p>
            </div>
            <div className="space-y-5">
              {/** baris grid pertama */}
              <div className="grid grid-cols-[2fr_1fr] gap-5 rounded-2xl overflow-hidden h-72">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white space-y-2">
                    <h2 className="text-2xl max-w-sm">
                      {t("program_card_title")}{" "}
                    </h2>
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_1")}
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white space-y-2">
                    <h2 className="text-2xl">{t("program_card_title")} </h2>
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_2")}
                    </p>
                  </div>
                </div>
              </div>
              {/** baris grid kedua */}
              <div className="grid grid-cols-[1fr_2fr] gap-5 rounded-2xl overflow-hidden h-72">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 p-4 text-white space-y-2 flex flex-col justify-end">
                    <h2 className="text-2xl">{t("program_card_title")} </h2>
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_1")}
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 p-4 text-white space-y-2 flex flex-col justify-end">
                    <h2 className="text-2xl max-w-sm">
                      {t("program_card_title")}{" "}
                    </h2>
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_2")}
                    </p>
                  </div>
                </div>
              </div>
              <p className=" text-gray-500 max-w-xl">{t("footer_note")}</p>
            </div>
          </div>
        </div>
        <CTASection />
      </section>
    </div>
  );
}
