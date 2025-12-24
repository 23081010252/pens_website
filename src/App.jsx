// App.jsx

import React, { useState, Suspense } from "react"; // ⬅️ Tambahkan Suspense
import "./i18n"; // ⬅️ Import konfigurasi i18n
import { I18nextProvider } from "react-i18next"; // ⬅️ Import Provider
import i18n from "./i18n"; // ⬅️ Import instance i18n

import Header from "./components/Header";
// ... (import komponen lain tetap sama)
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Beranda from "./pages/Beranda";
import Layanan1 from "./pages/Layanan1";
import Anggota1 from "./pages/Anggota1";
import Profil1 from "./pages/Profil1";
import Berita1 from "./pages/Berita1";
import Berita2 from "./pages/Berita2";
import Program1 from "./pages/Program1";
import Program2 from "./pages/Program2";
import Bantuan1 from "./pages/Bantuan1";

export default function App() {
  const [activePage, setActivePage] = useState("Beranda");

  // Fungsi untuk me-render komponen berdasarkan state activePage
  const renderPage = () => {
    switch (activePage) {
      // ... (kasus-kasus lainnya tetap sama)
      case "Beranda":
        return <Beranda setActivePage={setActivePage} />;
      case "Layanan1":
        return <Layanan1 setActivePage={setActivePage} />;
      case "Anggota1":
        return <Anggota1 setActivePage={setActivePage} />;
      case "Profil1":
        return <Profil1 setActivePage={setActivePage} />;
      case "Berita1":
        return <Berita1 setActivePage={setActivePage} />;
      case "Berita2":
        return <Berita2 setActivePage={setActivePage} />;
      case "Program1":
        return <Program1 setActivePage={setActivePage} />;
      case "Program2":
        return <Program2 setActivePage={setActivePage} />;
      case "Bantuan1":
        return <Bantuan1 />;
      default:
        // Render halaman default jika state tidak cocok
        return <Beranda />;
    }
  };

  return (
    // Membungkus App dengan I18nextProvider
    <I18nextProvider i18n={i18n}>
      {/* Suspense diperlukan karena terjemahan dimuat secara asinkron (dari file JSON)
        Anda bisa menambahkan komponen loading di sini jika perlu. 
      */}
      <div className="bg-white font-sans min-h-screen pt-16">
        {/* Header tidak perlu lagi mengirim activeLang/setActiveLang */}
        <Header activePage={activePage} setActivePage={setActivePage} />

        <main className="flex-1">
          {/* Memanggil fungsi renderPage untuk menampilkan halaman yang aktif */}
          {renderPage()}
        </main>

        <Banner />
        <Footer activePage={activePage} setActivePage={setActivePage} />
      </div>
    </I18nextProvider>
  );
}
