/**
 * komponen footer utama untuk navigasi bawah dan informasi perusahaan.
 * menampilkan logo, tagline, kontak media sosial, daftar layanan, dan lokasi map.
 * * @component
 * @param {object} props - properti komponen.
 * @param {function} props.setActivePage - fungsi setter untuk mengatur state halaman aktif.
 */

import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer({ setActivePage }) {
  const { t } = useTranslation("footer");

  /**
   * menangani navigasi internal saat link diklik.
   * mencegah reload halaman default dan memperbarui state halaman aktif.
   */
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
          {/** logo perusahaan */}
          <img src="image 5.png" alt="Logo" className="h-10 mb-3" />

          {/** tagline perusahaan dari namespace i18n */}
          <p className="max-w-sm text-gray-700 border-b border-gray-200 pb-2 mb-5">
            {t("tagline")}
          </p>

          {/** daftar kontak media sosial dan email */}
          <div className="flex gap-5">
            <h4 className="font-bold mb-3">{t("judul_kontak")}</h4>{" "}
            <ul className="space-y-2 text-gray-800">
              <li>
                <a
                  href="https://wa.me/6281515272829?text=Halo%20admin%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20ekspor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-950 hover:font-bold"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pegiatekspor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-950 hover:font-bold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:pegiatekspornusantara@gmail.com"
                  className="hover:text-gray-950 hover:font-bold"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <div className="grid grid-cols-2">
            {/** kolom navigasi layanan */}
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

            {/** kolom informasi tambahan */}
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

          {/** bagian alamat dan peta lokasi (google maps embed) */}
          <div className="space-y-5">
            <div>
              <h4 className="font-bold mb-3">{t("judul_lokasi")}</h4>
              <p className="text-gray-700">{t("lokasi_alamat")}</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm w-80 h-40">
              {/** iframe dengan url embed google maps yang valid */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.000000000000!2d112.7323556!3d-7.2401184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2453b84ac89c7%3A0x2a45776471487757!2sJl.%20Indrapura%20No.32%20A%2C%20Krembangan%20Sel.%2C%20Kec.%20Krembangan%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
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
