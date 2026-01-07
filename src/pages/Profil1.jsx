/**
 * komponen halaman profil perusahaan yang menampilkan sejarah, visi-misi, dan pencapaian.
 * menggunakan tata letak timeline vertikal untuk menampilkan perjalanan waktu (milestones).
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi untuk mengatur status halaman aktif dalam aplikasi.
 */

import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";

/** * data statis untuk mendefinisikan tahun dan nomor urut kartu pada bagian sejarah. */
const milestonesData = [
  { tahun: "2015", card_number: 1 },
  { tahun: "2018", card_number: 2 },
  { tahun: "2020", card_number: 3 },
  { tahun: "2023", card_number: 4 },
];

export default function Profil1({ setActivePage }) {
  /** * inisialisasi hook lokalisasi menggunakan namespace 'profil'. */
  const { t } = useTranslation("profil");

  /** * memisahkan data milestones untuk kebutuhan rendering kolom kiri dan kanan secara spesifik. */
  const leftMilestones = milestonesData.filter((_, index) => index % 2 === 0);
  const rightCards = milestonesData.filter((_, index) => index % 2 !== 0);

  /**
   * sub-komponen untuk merender konten teks milestone di sisi kiri timeline.
   * @param {object} data - objek data milestone tunggal.
   * @param {number} index - indeks urutan item.
   * @param {number} totalLeft - total jumlah item di kolom kiri.
   */
  const MilestoneLeft = ({ data, index, totalLeft }) => {
    const isLastItem = index === totalLeft - 1;
    const itemClassName = index < totalLeft - 1 ? "mb-64 md:mb-44" : "";
    const itemMarginTop = index === 0 ? "mt-5" : "";

    /** * fungsi internal untuk mengurus navigasi dan reset posisi scroll. */
    const handleNavigation = (pageIdentifier) => {
      window.scrollTo(0, 0);
      if (setActivePage) {
        setActivePage(pageIdentifier);
      } else {
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

  /**
   * sub-komponen untuk merender kartu informasi milestone di sisi kanan timeline.
   * @param {object} data - objek data milestone tunggal.
   * @param {number} index - indeks urutan kartu.
   * @param {number} totalRight - total jumlah kartu di kolom kanan.
   */
  const MilestoneRight = ({ data, index, totalRight }) => {
    const isLastItem = index === totalRight - 1;
    const cardPadding = isLastItem ? "pb-28" : "pb-36";

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
      {/** bagian hero yang mencakup navigasi breadcrumb dan ringkasan profil perusahaan */}
      <section>
        <div className="grid grid-cols-2 gap-x-20">
          <div className="max-w-lg mx-auto pt-10 px-5">
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
          {/** visual hero dengan komposisi gambar latar dan gambar */}
          <div className="relative flex w-full h-auto md:h-[500px]">
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

      {/** bagian konten untuk menyajikan nilai-nilai inti, visi, dan misi perusahaan */}
      <section className="space-y-16 mb-3">
        {/** profil perusahaan yang menjelaskan mengenai identitas organisasi */}
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
            {/** daftar nilai-nilai perusahaan dan visi perusahaan */}
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
            {/** memadukan aset visual (gambar) dengan daftar misi perusahaan */}
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

        {/** sejarah perusahaan yang mencakup implementasi timeline */}
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
            {/** label tahun dan judul milestone perusahaan */}
            <div className="flex flex-col text-right">
              {/** item 1 */}
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
              {/** item 2 */}
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
              {/** item 3 */}
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
              {/** item 4 */}
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

            {/** garis vertikal dengan elemen visual yang membatasi timeline dengan marker penanda (tick) */}
            <div className="relative flex justify-center">
              {/** garis latar belakang */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-gray-300 z-0" />
              {/** sekumpulan marker hitam untuk menandai titik waktu tertentu pada garis */}
              <div className="space-y-50">
                {" "}
                <div className="absolute top-7 bottom-0 w-0.5 h-50 bg-black z-10"></div>
                <div className="absolute top-85 bottom-0 w-0.5 h-50 bg-black z-10"></div>
                <div className="absolute top-165 bottom-0 w-0.5 h-50 bg-black z-10"></div>
                <div className="absolute bottom-35 w-0.5 h-50 bg-black z-10"></div>
              </div>
            </div>

            {/** kolom kanan yang memuat card informasi dengan angka urutan di latar belakang */}
            <div className="flex flex-col justify-between space-y-4">
              {/** milestone 1 */}
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
              {/** milestone 2 */}
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
              {/** milestone 3 */}
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
              {/** milestone 4 */}
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

        {/** struktur perusahaan yang menampilkan bagan organisasi dalam format gambar */}
        <div className="relative max-w-6xl mx-auto px-4 space-y-10">
          <div className="flex items-center justify-center max-w-screen">
            <div className="max-w-6xl text-center leading-tight space-y-3">
              <h2 className="text-4xl max-w-2xl font-semibold mx-auto">
                {t("struktur_judul")}
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

        {/** pencapaian perusahaan yang memuat galeri horizontal (carousel) untuk menampilkan sertifikat atau pencapaian perusahaan */}
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
            {/** card 1 */}
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
            {/** card 2 */}
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
            {/** card 3 */}
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
            {/** card 4 */}
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

        {/** komitmen perusahaan pada bagian akhir yang menampilkan komitmen perusahaan */}
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
            {/** bentuk komitmen organisasi. */}
            <div className="relative space-y-4">
              {/** item 1 */}
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
              {/** item 2 */}
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
              {/** item 3 */}
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
            {/** bagian kanan yang memuat visualisasi menggunakan tumpukan gambar (layered images) */}
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
        <CTASection />
      </section>
    </div>
  );
}
