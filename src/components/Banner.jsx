import React from "react";
import { useTranslation } from "react-i18next"; // import useTranslation dari i18next untuk menyediakan pustaka bahasa

export default function Banner({ setActivePage }) {
  const { t } = useTranslation("banner"); // menerima pustaka dari namespace "banner" di i18next melalui fungsi t (translate)

  return (
    <div className="relative gap-0 max-w-6xl mx-auto px-4 mb-5">
      <div className="grid grid-cols-[1fr_2fr] justify-between gap-0">
        <img src="image 4.png" className="h-full hoverflow-hidden" alt="" />
        <div className="bg-gray-900 space-y-4 p-8">
          <h2 className="text-4xl max-w-xl font-semibold text-white">
            {t("banner_judul")} {/* menggunakan key dari namespace banner */}
          </h2>
          <p className="text-white opacity-50 max-w-lg">
            {t("banner_deskripsi")}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
