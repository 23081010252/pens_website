import React from "react";
import { useTranslation } from "react-i18next"; // import useTranslation dari i18next untuk menyediakan pustaka bahasa

export default function Footer({ setActivePage }) {
  const { t } = useTranslation("footer"); // menerima pustaka dari namespace "footer" di i18next melalui fungsi t (translate)

  //fungsi handleNavigation untuk menjalankan navigasi
  const handleNavigation = (e, pageKey) => {
    e.preventDefault();
    if (setActivePage) {
      setActivePage(pageKey);
    }
  };

  return (
    <footer className="bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] ">
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto px-6 py-10 gap-10 md:gap-36">
        <div>
          <img src="image 5.png" alt="Logo" className="h-10 mb-3" />
          <p className="max-w-sm text-gray-700 border-b border-gray-200 pb-2 mb-5">
            {t("tagline")} {/* menggunakan key dari namespace footer */}
          </p>

          {/* kontak narahubung perusahaan */}
          <div className="flex gap-5">
            <h4 className="font-bold mb-3">{t("judul_kontak")}</h4>{" "}
            <ul className="space-y-2 text-gray-800">
              <li>
                <a
                  href="https://wa.me/08123456789?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20ekspor%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-950 hover:font-bold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/USERNAME_INSTAGRAM_ANDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-950 hover:font-bold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/NAMA_PERUSAHAAN_ANDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-950 hover:font-bold"
                >
                  Linkedln
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* informasi layanan perusahaan */}
        <div className="space-y-10">
          <div className="grid grid-cols-2">
            <div>
              <h4 className="font-bold mb-3">{t("judul_layanan")}</h4>{" "}
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Layanan1")}
                  >
                    {t("layanan_konsultasi")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Layanan1")}
                  >
                    {t("layanan_kurasi")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Layanan1")}
                  >
                    {t("layanan_legalitas")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Layanan1")}
                  >
                    {t("layanan_pembiayaan")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Layanan1")}
                  >
                    {t("layanan_pengiriman")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Layanan1")}
                  >
                    {t("layanan_sertifikasi")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3">{t("judul_informasi")}</h4>{" "}
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Berita1")}
                  >
                    {t("informasi_berita")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-950 hover:font-semibold"
                    onClick={(e) => handleNavigation(e, "Bantuan1")}
                  >
                    {t("informasi_bantuan")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* informasi alamat perusahaan */}
          <div className="space-y-5">
            <div>
              <h4 className="font-bold mb-3">{t("judul_lokasi")}</h4>
              <p className="text-gray-700">{t("lokasi_alamat")}</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm w-80 h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3812347380575!2d110.41433027477557!3d-7.853345678194411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57b645abcb1b%3A0x6c2e42c7b7b7279b!2sKantor%20Perusahaan%20Contoh!5e0!3m2!1sid!2sid!4v1696504812345!5m2!1sid!2sid" // Pertahankan ini atau ganti dengan embed yang benar
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
