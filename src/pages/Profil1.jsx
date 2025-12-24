import { useTranslation } from "react-i18next";

// Data Milestone statis disederhanakan hanya untuk tahun dan nomor kartu,
// karena I18N key untuk deskripsi dan judulnya sama untuk semua item.
const milestonesData = [
  { tahun: "2015", card_number: 1 },
  { tahun: "2018", card_number: 2 },
  { tahun: "2020", card_number: 3 },
  { tahun: "2023", card_number: 4 },
];

export default function Profil1({ setActivePage }) {
  // Gunakan hook useTranslation dan tentukan namespace 'profil'
  const { t } = useTranslation("profil");

  // Membagi data menjadi Kolom Kiri (indeks genap) dan Kolom Kanan (indeks ganjil)
  const leftMilestones = milestonesData.filter((_, index) => index % 2 === 0); // Item 1 (2015), Item 3 (2020)
  const rightCards = milestonesData.filter((_, index) => index % 2 !== 0); // Item 2 (2018), Item 4 (2023)

  /* --- KOMPONEN REUSABLE UNTUK MENJAGA KEBERSIHAN KODE --- */

  // Komponen untuk Milestone Kiri (Teks dan Tahun)
  const MilestoneLeft = ({ data, index, totalLeft }) => {
    // Tiga item kiri (2015, 2020) menggunakan margin bawah statis, kecuali item terakhir.
    const isLastItem = index === totalLeft - 1;
    // Menggunakan margin/jarak besar yang Anda berikan di desain awal
    const itemClassName = index < totalLeft - 1 ? "mb-64 md:mb-44" : "";
    const itemMarginTop = index === 0 ? "mt-5" : ""; // Margin atas untuk item 2015 sesuai desain

    // Fungsi untuk mengurus navigasi (dipertahankan agar konsisten dengan SPA jika dipakai)
    const handleNavigation = (pageIdentifier) => {
      window.scrollTo(0, 0);
      if (setActivePage) {
        setActivePage(pageIdentifier);
      } else {
        // Fallback atau aksi default jika bukan SPA
        console.warn(`Navigasi ke halaman: ${pageIdentifier}`);
      }
    };

    return (
      <div key={index} className={`${itemClassName} ${itemMarginTop}`}>
        <h1 className="font-semibold text-5xl mb-5">{data.tahun}</h1>
        <h6 className="font-semibold text-lg">
          {t("sejarah_milestone_judul")}
        </h6>
        <p className="text-gray-600">{t("sejarah_milestone_deskripsi")}</p>
      </div>
    );
  };

  // Komponen untuk Card Milestone Kanan
  const MilestoneRight = ({ data, index, totalRight }) => {
    // Card 1, 2, 3 menggunakan pb-36. Card 4 menggunakan pb-28.
    const isLastItem = index === totalRight - 1;
    const cardPadding = isLastItem ? "pb-28" : "pb-36";
    // Nomor kartu 1, 2, 3, 4 disesuaikan. Kita hanya merender kartu genap di sini.

    return (
      <div
        key={index}
        className={`relative bg-white rounded-2xl shadow-[inset_3px_0_1px_rgba(0,0,0,0.3)] p-6 ${cardPadding}`}
      >
        <h6 className="relative font-semibold text-xl z-10 whitespace-pre-line">
          {t("sejarah_card_judul", { replace: { "\n": "\n" } })}
        </h6>
        <p className="relative text-gray-600 mt-2 z-10">
          {t("sejarah_card_deskripsi")}
        </p>
        <p
          className={`absolute -right-4 -bottom-4 text-[200px] font-bold text-gray-100 leading-none z-0 select-none ${
            data.card_number === 4 ? "-right-1.5" : "-right-4"
          }`}
        >
          {data.card_number}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-16">
      {/* hero */}
      <section>
        <div className="grid grid-cols-2">
          {/* text kiri */}
          <div className="max-w-xl mx-auto pt-10 px-4 md:px-5">
            <div className="mb-6 text-base">
              <button
                onClick={() => handleNavigation("Beranda")}
                className="text-gray-500"
              >
                {t("hero_link_beranda")} /{" "}
              </button>
              <button
                onClick={() => handleNavigation("Profil1")}
                className="font-bold"
              >
                {t("hero_link_profil")}
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-none">
              {t("hero_judul")}
            </h1>
            <p className="hidden md:block text-gray-600 mb-8">
              {t("hero_deskripsi")}
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
      <section className="space-y-16 mb-3">
        {/* profil perusahaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("profil_judul")}{" "}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("profil_deskripsi")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 max-w-4xl mx-auto">
            {/* text kiri: Nilai & Visi */}
            <div className="flex flex-col gap-2">
              <div className="bg-white rounded-2xl shadow-[inset_-3px_0_1px_rgba(0,0,0,0.3)] p-6 pb-28">
                <h3 className="font-semibold text-xl">{t("nilai_judul")} </h3>
                <div class="text-gray-700 mt-2 space-y-2">
                  <div class="flex ">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("nilai_1")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("nilai_2")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("nilai_3")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("nilai_4")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("nilai_5")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-[inset_0_3px_1px_rgba(0,0,0,0.3)] p-6 pb-28">
                <h3 className="font-semibold text-xl">{t("visi_judul")} </h3>
                <p className="text-gray-700 mt-2">{t("visi_deskripsi")}</p>
              </div>
            </div>
            {/* text kanan: Gambar & Misi */}
            <div className="flex flex-col gap-2">
              <img
                src="image 1.png"
                alt="Container ekspor"
                className="rounded-2xl object-cover w-full h-[170px]"
              />
              <div className="bg-white rounded-2xl shadow-[inset_3px_0_1px_rgba(0,0,0,0.3)] p-6 pb-40">
                <h3 className="font-semibold text-xl">{t("misi_judul")} </h3>
                <div class="text-gray-700 mt-2 space-y-2">
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("misi_1")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("misi_2")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("misi_3")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("misi_4")}
                    </p>
                  </div>
                  <div class="flex">
                    <p class="flex-1 bg-gray-200/20 rounded-2xl p-4">
                      {t("misi_5")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* sejarah perusahaan (Milestone Timeline) */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("sejarah_judul")}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("sejarah_deskripsi")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_0.1fr_1fr] max-w-4xl mx-auto gap-8">
            {/* Kolom kiri (Milestone genap: 2015, 2020) */}
            <div className="flex flex-col text-right">
              {/* Kami menggunakan 4 item untuk mereplikasi struktur dari desain asli */}
              <div className="mt-5 mb-64 md:mb-38">
                <h1 className="font-semibold text-5xl mb-5">
                  {milestonesData[0].tahun}
                </h1>
                <h6 className="font-semibold text-lg">
                  {t("sejarah_milestone_judul")}
                </h6>
                <p className="text-gray-600">
                  {t("sejarah_milestone_deskripsi")}
                </p>
              </div>
              <div className="mb-64 md:mb-38">
                <h1 className="font-semibold text-5xl mb-5">
                  {milestonesData[1].tahun}
                </h1>
                <h6 className="font-semibold text-lg">
                  {t("sejarah_milestone_judul")}
                </h6>
                <p className="text-gray-600">
                  {t("sejarah_milestone_deskripsi")}
                </p>
              </div>
              <div className="mb-64 md:mb-38">
                <h1 className="font-semibold text-5xl mb-5">
                  {milestonesData[2].tahun}
                </h1>
                <h6 className="font-semibold text-lg">
                  {t("sejarah_milestone_judul")}
                </h6>
                <p className="text-gray-600">
                  {t("sejarah_milestone_deskripsi")}
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-5xl mb-5">
                  {milestonesData[3].tahun}
                </h1>
                <h6 className="font-semibold text-lg">
                  {t("sejarah_milestone_judul")}
                </h6>
                <p className="text-gray-600">
                  {t("sejarah_milestone_deskripsi")}
                </p>
              </div>
            </div>

            {/* garis vertikal (Timeline Line) DENGAN GARIS HORIZONTAL SEBAGAI MARKER */}
            <div className="relative flex justify-center">
              {/* Garis Vertikal */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300 z-0" />
              {/* Marker Garis Horizontal */}
              <div className="space-y-50">
                {" "}
                <div className="absolute top-7 bottom-0 w-0.5 h-50 bg-black z-10"></div>
                <div className="absolute top-85 bottom-0 w-0.5 h-50 bg-black z-10"></div>
                <div className="absolute top-165 bottom-0 w-0.5 h-50 bg-black z-10"></div>
                <div className="absolute bottom-35 w-0.5 h-50 bg-black z-10"></div>
              </div>
            </div>

            {/* Kolom kanan (Card Milestone) */}
            <div className="flex flex-col justify-between space-y-4">
              {/* card 1 */}
              <div className="relative bg-white rounded-2xl shadow-[inset_3px_0_1px_rgba(0,0,0,0.3)] p-6 pb-36">
                <h6 className="relative font-semibold text-xl z-10">
                  {t("sejarah_card_judul", { replace: { "\n": "\n" } })}
                </h6>
                <p className="relative text-gray-600 mt-2 z-10">
                  {t("sejarah_card_deskripsi")}
                </p>
                <p className="absolute -right-4 -bottom-4 text-[200px] font-bold text-gray-100 leading-none z-0 select-none">
                  1
                </p>
              </div>
              {/* card 2 */}
              <div className="relative bg-white rounded-2xl shadow-[inset_3px_0_1px_rgba(0,0,0,0.3)] p-6 pb-36">
                <h6 className="relative font-semibold text-xl z-10">
                  {t("sejarah_card_judul", { replace: { "\n": "\n" } })}
                </h6>
                <p className="relative text-gray-600 mt-2 z-10">
                  {t("sejarah_card_deskripsi")}
                </p>
                <p className="absolute -right-4 -bottom-4 text-[200px] font-bold text-gray-100 leading-none z-0 select-none">
                  2
                </p>
              </div>
              {/* card 3 */}
              <div className="relative bg-white rounded-2xl shadow-[inset_3px_0_1px_rgba(0,0,0,0.3)] p-6 pb-36">
                <h6 className="relative font-semibold text-xl z-10">
                  {t("sejarah_card_judul", { replace: { "\n": "\n" } })}
                </h6>
                <p className="relative text-gray-600 mt-2 z-10">
                  {t("sejarah_card_deskripsi")}
                </p>
                <p className="absolute -right-4 -bottom-4 text-[200px] font-bold text-gray-100 leading-none z-0 select-none">
                  3
                </p>
              </div>
              {/* card 4 */}
              <div className="relative bg-white rounded-2xl shadow-[inset_3px_0_1px_rgba(0,0,0,0.3)] p-6 pb-28">
                <h6 className="relative font-semibold text-xl z-10">
                  {t("sejarah_card_judul", { replace: { "\n": "\n" } })}
                </h6>
                <p className="relative text-gray-600 mt-2 z-10">
                  {t("sejarah_card_deskripsi")}
                </p>
                <p className="absolute -right-1.5 -bottom-4 text-[200px] font-bold text-gray-100 leading-none z-0 select-none">
                  4
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* struktur perusahaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("struktur_judul")}
                <br />
                PT Pegiat Ekspor Nusantara
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("struktur_deskripsi")}
              </p>
            </div>
          </div>
          <div>
            <img src="image 1.png" className="rounded-2xl" alt="" />
          </div>
        </div>
        {/* pencapian perusahaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("pencapaian_judul")}
                <br />
                PT Pegiat Ekspor Nusantara{" "}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                {t("pencapaian_deskripsi")}
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 items-end overflow-x-auto p-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="relative max-w-72 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-80 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 pb-10 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {t("pencapaian_card_judul")}
                </h2>
              </div>
            </div>
            <div className="flex flex-col max-w-72 shrink-0">
              <div className="relative text-blue-950">
                <h2 className="text-9xl font-bold">2025</h2>
              </div>
              <div className="relative">
                <img
                  src="image 1.png"
                  className="overflow-hidden w-full h-48 md:h-48 object-cover saturate-0 brightness-125 rounded-2xl z-0"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col self-end p-4 pb-10 text-white space-y-2">
                  <h2 className="text-2xl leading-none">
                    {t("pencapaian_card_judul")}
                  </h2>
                </div>
              </div>
            </div>
            <div className="relative max-w-72 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-80 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 pb-10 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {t("pencapaian_card_judul")}
                </h2>
              </div>
            </div>
            <div className="relative max-w-72 shrink-0">
              <img
                src="image 1.png"
                className="overflow-hidden w-full h-80 md:h-80 object-cover rounded-2xl z-0"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col self-end p-4 pb-10 text-white space-y-2">
                <h2 className="text-2xl leading-none">
                  {t("pencapaian_card_judul")}
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* pencapian perusahaan */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("komitmen_judul")}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                {t("komitmen_deskripsi")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-center">
            {/* kolom kiri */}
            <div className="relative space-y-4">
              {/* item 1 */}
              <div className="border-l-2 border-gray-400">
                <div className="relative pl-6 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 group">
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-transparent rounded-full transition-all duration-300 group-hover:bg-blue-900" />
                  <h6 className="font-semibold text-xl text-gray-900">
                    {t("komitmen_1_judul")}
                  </h6>
                  <p className="text-gray-600 mt-1">
                    {t("komitmen_1_deskripsi")}
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="border-l-2 border-gray-400">
                <div className="relative pl-6 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 group">
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-transparent rounded-full transition-all duration-300 group-hover:bg-blue-900" />
                  <h6 className="font-semibold text-xl text-gray-900">
                    {t("komitmen_2_judul")}
                  </h6>
                  <p className="text-gray-600 mt-1">
                    {t("komitmen_2_deskripsi")}
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="border-l-2 border-gray-400">
                <div className="relative pl-6 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 group">
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-transparent rounded-full transition-all duration-300 group-hover:bg-blue-900" />
                  <h6 className="font-semibold text-xl text-gray-900">
                    {t("komitmen_3_judul")}
                  </h6>
                  <p className="text-gray-600 mt-1">
                    {t("komitmen_3_deskripsi")}
                  </p>
                </div>
              </div>
            </div>
            {/* Bagian kanan */}
            <div className="relative">
              <img
                src="image 8.png"
                alt=""
                className="flex rounded-xl shadow-md saturate-0 object-cover overflow-hidden w-full h-96"
              />
              <div className="absolute inset-0 z-10">
                <img
                  src="image 9.png"
                  alt=""
                  className="flex rounded-xl shadow-md object-cover overflow-hidden w-full h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
