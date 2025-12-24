// Program1.jsx
import { useTranslation } from "react-i18next"; // ⬅️ Import useTranslation

export default function Program1({ setActivePage }) {
  // ⬅️ Inisialisasi useTranslation dengan namespace 'program1'
  const { t } = useTranslation("program1");

  const handleNavigation = (pageIdentifier) => {
    window.scrollTo(0, 0);
    if (setActivePage) {
      setActivePage(pageIdentifier);
    } else {
      // Jika setActivePage tidak disediakan, gunakan navigasi HTML
      window.location.href = `${pageIdentifier}.html`;
    }
  };

  return (
    <div className="space-y-16 mb-10">
      {/* hero */}
      <section>
        <div className="grid grid-cols-2">
          {/* text konten */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              {/* Gunakan key terjemahan */}
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
            {/* Gunakan key terjemahan */}
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("hero_title")}
            </h1>
            {/* Gunakan key terjemahan */}
            <p className="hidden md:block text-gray-600 mb-8">
              {t("hero_subtitle")}
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
      {/* konten */}
      <section className="space-y-16 mb-3">
        {/* pilihan program */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-5">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              {/* Gunakan key terjemahan */}
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("section_title_1")} <br />
                {t("section_title_1_bold")}
              </h2>
              {/* Gunakan key terjemahan */}
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("section_subtitle_1")}
              </p>
            </div>
          </div>
          <div
            id="row-4"
            className="flex gap-4 overflow-x-auto p-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
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
                {/* Gunakan key terjemahan */}
                <p className="text-2xl leading-none">
                  {t("program_card_title")}{" "}
                </p>
                {/* Gunakan key terjemahan */}
                <p className="text-gray-100 opacity-70">
                  {t("program_card_date_1")}
                </p>
              </button>
            </div>
            {/* Card 2 - 4 mengikuti pola terjemahan yang sama */}
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
        {/* banner pemberitahuan program */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10 leading-tight">
          <div className="items-center justify-center max-w-screen space-y-7">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              {/* Gunakan key terjemahan */}
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("section_title_2")} <br />
                {t("section_title_2_bold")}{" "}
              </h2>
              {/* Gunakan key terjemahan */}
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("section_subtitle_2")}
              </p>
            </div>
            <div className="space-y-5">
              {/* Card besar kiri */}
              <div className="grid grid-cols-[2fr_1fr] gap-5 rounded-2xl overflow-hidden h-72">
                {/* kiri */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white space-y-2">
                    {/* Gunakan key terjemahan */}
                    <h2 className="text-2xl max-w-sm">
                      {t("program_card_title")}{" "}
                    </h2>
                    {/* Gunakan key terjemahan */}
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_1")}
                    </p>
                  </div>
                </div>
                {/* kanan */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white space-y-2">
                    {/* Gunakan key terjemahan */}
                    <h2 className="text-2xl">{t("program_card_title")} </h2>
                    {/* Gunakan key terjemahan */}
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_2")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Card besar kanan */}
              <div className="grid grid-cols-[1fr_2fr] gap-5 rounded-2xl overflow-hidden h-72">
                {/* kiri */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 p-4 text-white space-y-2 flex flex-col justify-end">
                    {/* Gunakan key terjemahan */}
                    <h2 className="text-2xl">{t("program_card_title")} </h2>
                    {/* Gunakan key terjemahan */}
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_1")}
                    </p>
                  </div>
                </div>
                {/* Kolom kanan */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="image 1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 p-4 text-white space-y-2 flex flex-col justify-end">
                    {/* Gunakan key terjemahan */}
                    <h2 className="text-2xl max-w-sm">
                      {t("program_card_title")}{" "}
                    </h2>
                    {/* Gunakan key terjemahan */}
                    <p className="text-gray-100 opacity-70">
                      {t("program_card_date_2")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Gunakan key terjemahan */}
              <p className=" text-gray-500 max-w-xl">{t("footer_note")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
