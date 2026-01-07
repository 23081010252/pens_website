// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  // === BAHASA INDONESIA (IDN) ===
  idn: {
    header: {
      menu_beranda: "Beranda",
      menu_layanan: "Layanan",
      menu_keanggotaan: "Keanggotaan",
      menu_profil: "Tentang Kami",
      menu_berita: "Berita",
      menu_bantuan: "Bantuan",
    },
    beranda: {
      tagline_judul:
        "Mendukung Peningkatan Ekspor Nasional Bersama PT. Pegiat Ekspor Nusantara",
      tagline_deskripsi:
        "Bergerak dalam bidang jasa dan perdagangan untuk produk lokal mendukung pasar diservisifikasi global pasar melalui menembus pendampingan yang profesional.",
      tagline_pengiriman: "Pengiriman Komoditas",
      tagline_furnitur: "Furnitur",
      pengiriman_deskripsi:
        "Memastikan pengiriman produk mitra terkoordinasi secara profesional dengan pengelolaan pengiriman yang berstandar tinggi",
      program_judul:
        "Mendukung Ekspor Nasional untuk Meningkatkan Ekosistem Ekspor",
      program_deskripsi:
        "Berkomitmen menghadirkan layanan ekspor yang andal bagi pelaku UKM dari berbagai komoditas untuk memasarkan produknya di pasar global",
      btn_selengkapnya: "Selengkapnya",
      layanan_judul:
        "Layanan Ekspor Profesional untuk meningkatkan daya saing produk lokal",
      layanan_deskripsi:
        "Meningkatkan pemahaman ekspor melalui layanan profesional untuk mendukung produk lokal menembus pasar internasional",
      konsultasi_judul: "Konsultasi Ekspor",
      konsultasi_deskripsi:
        "Membantu pelaku usaha memahami potensi ekspor produk mereka, regulasi yang berlaku, dan strategi penetrasi pasar luar negeri.",
      pengembangan_judul: "Program Pengembangan Bisnis yang Terintegrasi",
      pengembangan_deskripsi:
        "Menyediakan berbagai program pengembangan bisnis untuk memperkuat daya saing produk lokal di pasar insternasional",
      seminar_judul: "Seminar Pengembangan Bisnis UKM Wilayah Jawa Timur",
      seminar_deskripsi:
        "Membahas strategi dan peluang bisnis UKM dalam orientasi ekspor",
      berita_judul: "Informasi Seputar PT Pegiat Ekspor Nusantara",
      berita_deskripsi:
        "Menyajikan berita terkini seputar PT Pegiat Ekspor Nusantara dengan memastikan pembaruan informasi",
      berita_card_judul:
        "Program Pengembangan Bisnis PT Pegiat Ekspor Nusantara",
      berita_card_deskripsi: "Pendampingan ekspor yang profesional",
      mitra_judul:
        "Membangun Kolaborasi Strategis Bersama PT.Pegiat Ekspor Nusantara",
      mitra_deskripsi:
        "Mendukung kerja sama strategis bagi pelaku usaha dari berbagai komoditas dalam upaya memperkuat eksosistem ekspor nasional",
    },
    program2: {
      breadcrumb_beranda: "Beranda",
      breadcrumb_program: "Program",
      breadcrumb_detail: "Seminar Pengembangan Bisnis",
      hero_title:
        "Program Pengembangan Bisnis yang Terintegrasi Bersama PT Pegiat Ekspor Nusantara",
      hero_subtitle:
        "Menyediakan berbagai program pengembangan bisnis untuk memperkuat daya saing produk lokal di pasar insternasional",
      detail_title: "Seminar Pengembangan Bisnis PT Pegiat Ekspor Nusantara",
      detail_deadline: "25 September 2025",
      detail_description:
        "Seminar Pengembangan Bisnis UKM Wilayah Jawa Timur merupakan program yang dirancang untuk membantu pelaku usaha kecil dan menengah meningkatkan kapasitas, daya saing, serta kemampuan adaptasi dalam menghadapi dinamika pasar. Program ini menghadirkan pembicara dari kalangan profesional, praktisi bisnis, dan instansi terkait yang memberikan wawasan strategis mengenai manajemen usaha, pemasaran modern, pemanfaatan teknologi, hingga penguatan jejaring kemitraan. Melalui seminar ini, peserta diharapkan memperoleh pemahaman yang lebih terarah tentang langkah-langkah pengembangan bisnis yang efektif, sekaligus membuka peluang kolaborasi yang dapat mendukung pertumbuhan UKM di wilayah Jawa Timur secara berkelanjutan.",
      section_title: "Program Terbaru",
      section_subtitle:
        "Menyediakan berbagai program pengembangan bisnis untuk memperkuat daya saing produk lokal di pasar insternasional",
      latest_program_title:
        "Seminar Pengembangan Bisnis PT Pegiat Ekspor Nusantara",
      latest_program_date: "25 September 2025",
    },
    program1: {
      breadcrumb_beranda: "Beranda",
      breadcrumb_program: "Program",
      hero_title:
        "Program Pengembangan Bisnis yang Terintegrasi Bersama PT Pegiat Ekspor Nusantara",
      hero_subtitle:
        "Menyediakan berbagai program pengembangan bisnis untuk memperkuat daya saing produk lokal di pasar insternasional",
      section_title_1: "Program Pengembangan Bisnis PT.Pegiat Ekspor Nusantara",
      section_subtitle_1:
        "Menyediakan berbagai program pengembangan bisnis untuk memperkuat daya saing produk lokal di pasar insternasional",
      program_card_title:
        "Seminar Pengembangan Bisnis PT.Pegiat Ekspor Nusantara",
      program_card_date_1: "25 September 2025",
      program_card_date_2: "10 Oktober 2025",
      section_title_2:
        "Informasi dan Pengumuman Program PT.Pegiat Ekspor Nusantara",
      section_subtitle_2:
        "Memberikan informasi program pengembangan bisnis PT Pegiat Ekspor Nusantara",
      footer_note:
        "**Syarat dan ketentuan pengumuman atau informasi program di publikasikan",
    },
    keanggotaan: {
      judul_hero:
        "Tingkatkan Keanggotaan untuk Akses Layanan Profesional PT Pegiat Ekspor Nusantara",
      deskripsi_hero:
        "Keanggotaan memberikan akses terstruktur bagi mitra untuk memperoleh layanan, informasi, dan dukungan profesional untuk mendorong kolaborasi bisnis di sektor ekspor",
      rincian_judul: "Program Keanggotaan Menuju Kolaborasi Profesional",
      rincian_deskripsi:
        "Keanggotaan memberikan akses terstruktur bagi mitra untuk memperoleh layanan, informasi, dan dukungan profesional yang dirancang untuk mendorong kolaborasi dan pertumbuhan bisnis di sektor ekspor",
      btn_selengkapnya: "Selengkapnya",
      jenis_judul: "Bentuk Keanggotaan PT Pegiat Ekspor Nusantara",
      jenis_deskripsi:
        "Keanggotaan memberikan akses terstruktur bagi mitra untuk mendorong kolaborasi bisnis di sektor ekspor",
      kartu_konsultasi_judul: "Konsultasi Profesional",
      kartu_konsultasi_deskripsi:
        "Keanggotaan Konsultasi Ekspor tersedia dalam beberapa tingkat yang dirancang untuk menyesuaikan kebutuhan bagi mitra",
      keuntungan_judul: "Keuntungan Keanggotaan",
      keuntungan_deskripsi:
        "Keanggotaan memberikan akses terstruktur bagi mitra untuk mendorong kolaborasi bisnis di sektor ekspor",
      keuntungan_card_1:
        "Anggota mendapatkan akses prioritas dan dukungan profesional yang memperkuat pengembangan bisnis.",
      keuntungan_card_2_deskripsi:
        "Untuk dapat memperoleh seluruh keuntungan keanggotaan, pengguna diharapkan melakukan registrasi ulang melalui prosedur yang telah ditentukan",
      skema_judul: "Skema Keanggotaan PT. Pegiat Ekspor Nusantara",
      skema_deskripsi:
        "Keanggotaan memberikan akses terstruktur bagi mitra untuk mendorong kolaborasi bisnis di sektor ekspor",
      tabel_syarat_judul:
        "Syarat dan Ketentuan Keanggotaan PT Pegiat Ekspor Nusantara",
      tabel_keunggulan_judul: "Keunggulan Layanan PT Pegiat Ekspor Nusantara",
      tabel_deskripsi:
        "Keanggotaan memberikan akses terstruktur bagi mitra untuk mendorong kolaborasi bisnis di sektor ekspor",
      tabel_kolom_klasifikasi: "Klasifikasi",
      tabel_kolom_pens: "PT. Pegiat Ekspor Nusantara",
      tabel_kolom_lainnya: "Penyedia Jasa Lainnya",
      tabel_row_manfaat:
        "Memiliki legalitas usaha dan komitmen aktif berkelanjutan.",
      tabel_kaki_deskripsi:
        "Memperkuat daya saing melalui jaringan strategis yang mendukung PT. Pegiat Ekspor Nusantara",
    },
    bantuan: {
      judul_hero: "Dukungan dan Bantuan Layanan PT Pegiat Ekspor Nusantara",
      deskripsi_hero:
        "Membantu anda dalam menemukan solusi mengenai sistem layanan PT Pegiat Ekspor Nusantara",
      faq_judul: "Pertanyaan yang diajukan Terkait Aplikasi",
      faq_data: [
        {
          id: 1,
          question:
            "Bagaimana cara mengetahui regulasi yang berlaku untuk produk saya?",
          answer:
            "Anda dapat berkonsultasi dengan ahli ekspor atau mencari informasi dari lembaga pemerintah yang berwenang di negara tujuan Anda. Kami juga dapat membantu Anda mengidentifikasi regulasi yang relevan untuk produk Anda.",
        },
        {
          id: 2,
          question: "Apa saja dokumen yang diperlukan untuk proses ekspor?",
          answer:
            "Dokumen yang umumnya dibutuhkan antara lain invoice, packing list, bill of lading, dan sertifikat asal barang (COO).",
        },
        {
          id: 3,
          question:
            "Apakah PT. Pegiat Ekspor Nusantara membantu dengan pengiriman barang?",
          answer:
            "Ya, kami menyediakan layanan pendampingan menyeluruh, termasuk pengurusan logistik dan asuransi untuk memastikan produk Anda sampai dengan aman di negara tujuan.",
        },
      ],
    },
    berita2: {
      judul_halaman: "Pendampingan ekspor yang profesional",

      hero: {
        judul_utama:
          "Menghadirkan Informasi Seputar PT Pegiat Ekspor Nusantara",
        deskripsi:
          "Bergerak dalam bidang ekspor untuk mendukung produk lokal Indonesia menembus pasar global melalui pendampingan ekspor yang profesional",
      },

      detail: {
        judul_artikel:
          "Pendampingan ekspor profesional Bersama PT Pegiat Ekspor Nusantara",
        tanggal_publikasi: "25 November 2025",
        penulis: "Penulis: PT Pegiat Ekspor Nusantara",
        konten_paragraf_1:
          "Pendampingan ekspor yang profesional bersama PT Pegiat Ekspor Nusantara kembali dilaksanakan sebagai upaya memperkuat kemampuan pelaku usaha dalam memasuki pasar internasional. Kegiatan ini menghadirkan pendampingan terstruktur mulai dari pemahaman regulasi ekspor, penyusunan dokumen, hingga strategi pemasaran global yang relevan dengan kebutuhan industri. Melalui program ini, PT Pegiat Ekspor Nusantara berkomitmen mendukung pelaku usaha agar mampu bersaing secara kompetitif, meningkatkan kualitas produk, serta memperluas jangkauan pemasaran ke berbagai negara tujuan. Pendampingan ini diharapkan menjadi kontribusi nyata dalam mendorong pertumbuhan ekspor nasional secara berkelanjutan.",
      },

      terkini: {
        judul_terkini: "Berita Terkini",
        deskripsi_terkini:
          "Menyajikan berita terkini seputar PT Pegiat Ekspor Nusantara dengan memastikan pembaruan informasi",
      },

      berita_rekomendasi: [
        {
          id: 1,
          judul: "Pendampingan ekspor yang profesional",
          tanggal: "25 September 2025",
        },
        {
          id: 2,
          judul: "Strategi Baru Mencapai Target Ekspor Tahun Ini", // Contoh disamakan dengan Berita1
          tanggal: "10 Oktober 2025",
        },
        {
          id: 3,
          judul: "Pelatihan Kualitas Produk untuk Pasar Eropa",
          tanggal: "2 November 2025",
        },
        {
          id: 4,
          judul: "Tips Mengurus Dokumen Bea Cukai Ekspor",
          tanggal: "20 Desember 2025",
        },
      ],
    },
    layanan: {
      hero: {
        judul_utama_1:
          "Layanan Ekspor Profesional Bersama PT. Pegiat Ekspor Nusantara",
        deskripsi:
          "Meningkatkan pemahaman ekspor melalui layanan profesional untuk mendukung produk lokal menembus pasar internasional",
      },
      tombol_skema: "Lihat Skema Layanan",
      layanan_1: {
        judul: "Konsultasi Ekspor Bersama Tenaga Profesional",
        deskripsi:
          "Layanan ini membantu pelaku usaha memahami potensi ekspor produk mereka, regulasi yang berlaku, dan strategi penetrasi pasar luar negeri. Konsultasi dilakukan oleh tim ahli ekspor yang berpengalaman di bidang perdagangan internasional",
      },
      layanan_2: {
        judul: "Kurasi Produk untuk Menghadirkan Produk Berkualitas",
        deskripsi:
          "Kurasi produk bertujuan memastikan produk memenuhi standar internasional dari segi kualitas, kemasan, dan daya saing harga. Proses ini juga menilai kesesuaian produk terhadap permintaan pasar di negara tujuan",
      },
      layanan_3: {
        judul: "Pendampingan Legalitas/ Perizinan",
        deskripsi:
          "Membantu pelaku usaha dalam pengurusan dokumen dan legalitas yang diperlukan untuk ekspor, seperti NIB, izin usaha, HS Code, dan perizinan negara tujuan",
      },
      layanan_4: {
        judul: "Pendampingan Pembiayaan Ekspor",
        deskripsi:
          "Memberikan solusi pembiayaan bagi pelaku usaha yang membutuhkan modal kerja untuk kegiatan ekspor, baik melalui lembaga keuangan, pembiayaan ekspor pemerintah, maupun skema kredit ekspor",
      },
      layanan_5: {
        judul: "Pendampingan Pengiriman Produk",
        deskripsi:
          "Layanan ini membantu dalam proses logistik ekspor, mulai dari pemilihan metode pengiriman, negosiasi dengan freight forwarder, hingga penyiapan dokumen pengapalan (Bill of Lading, Packing List, Invoice, dll)",
      },
      layanan_6: {
        judul: "Seritifkasi Profesi Ekspor bagi Para Pelaku Usaha",
        deskripsi:
          "Layanan ini bertujuan meningkatkan kapasitas SDM ekspor dengan memberikan pelatihan dan sertifikasi profesi dari lembaga resmi (misalnya BNSP). Peserta akan memahami proses ekspor secara komprehensif dan mendapat pengakuan kompetensi.",
      },
    },
    profil: {
      hero_link_beranda: "Beranda",
      hero_link_profil: "Profil",
      hero_judul:
        "Mendukung Ekspor Nasional untuk Meningkatkan Ekosistem Ekspor",
      hero_deskripsi:
        "Berkomitmen menghadirkan layanan ekspor yang andal bagi pelaku UKM dari berbagai komoditas untuk memasarkan produknya di pasar global",

      profil_judul: "Menguatkan Komitmen Melalui Visi dan Misi Perusahaan",
      profil_deskripsi:
        "Visi dan misi perusahaan menjadi dasar dalam menentukan arah, tujuan, dan komitmen untuk mencapai pertumbuhan yang berkelanjutan",

      nilai_judul: "Nilai - nilai",
      nilai_1:
        "Profesionalisme yakni memberikan layanan berbasis keahlian dan pengalaman nyata di bidang ekspor.",
      nilai_2:
        "Empowerment yakni mendorong kemandirian pelaku usaha agar mampu menembus pasar global.",
      nilai_3:
        "Networking yakni menjalin kolaborasi luas dengan pemangku kepentingan nasional dan internasional.",
      nilai_4:
        "Sustainability yakni mendorong ekspor yang berkelanjutan dan berdampak ekonomi bagi masyarakat lokal.",
      nilai_5:
        "Integrity yakni menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam setiap proses pendampingan.",

      visi_judul: "Visi",
      visi_deskripsi:
        "Menjadi lembaga pendamping ekspor terdepan di Indonesia yang melahirkan pelaku ekspor tangguh, berdaya saing global, dan berkelanjutan",

      misi_judul: "Misi",
      misi_1:
        "Memberdayakan UMKM dan pelaku usaha lokal agar mampu memahami dan menjalankan proses ekspor secara mandiri dan profesional.",
      misi_2:
        "Membangun ekosistem ekspor terintegrasi melalui sinergi antara pelaku usaha, lembaga pemerintah, perbankan, dan buyer internasional.",
      misi_3:
        "Meningkatkan kompetensi SDM ekspor nasional melalui pelatihan, sertifikasi profesi, dan pendampingan lapangan.",
      misi_4:
        "Mendukung percepatan pertumbuhan ekonomi nasional melalui peningkatan volume dan kualitas ekspor produk-produk unggulan daerah.",
      misi_5:
        "Menjadi pusat informasi dan konsultasi ekspor yang kredibel dan berbasis data pasar global terkini.",

      sejarah_judul: "Menelusuri Perjalanan PT Pegiat Ekspor Nusantara",
      sejarah_deskripsi:
        "Milestone perusahaan menggambarkan rangkaian tonggak penting yang menandai perkembangan dan pencapaian strategis dalam perjalanan bisnis",

      sejarah_milestone_judul: "Ekspansi Layanan Strategis",
      sejarah_milestone_deskripsi:
        "perusahaan mencapai tonggak penting melalui perluasan layanan utama yang meningkatkan jangkauan operasional",

      sejarah_card_judul: "Perluasan Layanan PT Pegiat Ekspor Nusantara",
      sejarah_card_deskripsi:
        "PT Pegiat Ekspor Nusantara mencatat peningkatan kapasitas operasional sebesar 35% dan berhasil memperluas layanan ke 12 kota baru di wilayah Jawa Timur",

      struktur_judul: "Struktur Organisasi PT Pegiat Ekspor Nusantara",
      struktur_deskripsi:
        "Struktur perusahaan menggambarkan tata kelola dan susunan organisasi yang memastikan setiap fungsi berjalan sesuai tujuan perusahaan",

      pencapaian_judul: "Pencapaian Strategis",
      pencapaian_deskripsi:
        "Perusahaan menegaskan komitmennya terhadap kontribusi nyata dalam membangun ekosistem ekspor bagi pelaku usaha",
      pencapaian_card_judul: "Peningkatan Kapasitas dan Ekspansi Layanan",

      komitmen_judul:
        "Komitmen PT Pegiat Ekspor Nusantara dalam Memberikan Kontribusi Nyata",
      komitmen_deskripsi:
        "Perusahaan menegaskan komitmennya terhadap kontribusi nyata dalam membangun ekosistem ekspor bagi pelaku usaha",

      komitmen_1_judul: "Komitmen terhadap Tanggung Jawab Sosial",
      komitmen_1_deskripsi:
        "Menjalankan tata kelola perusahaan yang beretika dan bertanggung jawab",

      komitmen_2_judul: "Dedikasi pada Keberlanjutan Usaha",
      komitmen_2_deskripsi:
        "Perusahaan menjalankan operasional yang bertanggung jawab dengan memprioritaskan berkelanjutan usaha",

      komitmen_3_judul: "Kontribusi Nyata bagi Pertumbuhan Ekonomi",
      komitmen_3_deskripsi:
        "PT Pegiat Ekspor Nusantara berusaha meningkatkan daya saing produk lokal melalui dukungan terhadap pelaku usaha",
    },
    berita: {
      judul_hero: "Menghadirkan Berita Seputar PT Pegiat Ekspor Nusantara",
      deskripsi_hero:
        "Menyajikan berita terkini seputar PT Pegiat Ekspor Nusantara dengan memastikan pembaruan informasi",

      judul_konten: "Menghadirkan Informasi Seputar PT Pegiat Ekspor Nusantara",
      deskripsi_konten:
        "Menyajikan berita terkini seputar PT Pegiat Ekspor Nusantara dengan memastikan pembaruan informasi",

      news_data: [
        {
          id: 1,
          image: "image 1.png",
          title: "Pendampingan Ekspor yang Profesional dan Terpercaya",
          date: "25 September 2025",
        },
        {
          id: 2,
          image: "image 1.png",
          title: "Strategi Baru Mencapai Target Ekspor Tahun Ini",
          date: "10 Oktober 2025",
        },
        {
          id: 3,
          image: "image 1.png",
          title: "Pelatihan Kualitas Produk untuk Pasar Eropa",
          date: "2 November 2025",
        },
        {
          id: 4,
          image: "image 1.png",
          title: "Sinergi Pemerintah dan Swasta Dorong Produk Lokal",
          date: "10 Desember 2025",
        },
        {
          id: 5,
          image: "image 1.png",
          title: "Sukses Menembus Pasar Timur Tengah",
          date: "15 Desember 2025",
        },
        {
          id: 6,
          image: "image 1.png",
          title: "Tips Mengurus Dokumen Bea Cukai Ekspor",
          date: "20 Desember 2025",
        },
      ],

      btn_lihat_selengkapnya: "Lihat Selengkapnya",
      btn_tutup: "Tutup",
      btn_read_more: "Baca Selengkapnya",
    },
    banner: {
      banner_judul:
        "Tingkatkan Peluang ekspor bersama PT. Pegiat Ekspor Nusantara",
      banner_deskripsi:
        "Mendukung bisnis anda menembus pasar internasional dengan dukungan layanan ekspor yang profesional",
    },
    footer: {
      tagline: "Dari Nusantara untuk Dunia — Bersama PENS, Ekspor Jadi Nyata",
      judul_kontak: "Kontak",
      judul_layanan: "Layanan",
      judul_informasi: "Informasi",
      judul_lokasi: "Lokasi PT. Pegiat Ekspor Nusantara",
      layanan_konsultasi: "Konsultasi Ekspor",
      layanan_kurasi: "Kurasi Produk",
      layanan_legalitas: "Pendampingan Legalitas dan Perizinan",
      layanan_pembiayaan: "Pendampingan Pembiayaan Ekspor",
      layanan_pengiriman: "Pendampingan Pengiriman Produk",
      layanan_sertifikasi: "Seritifkasi Profesi Ekspor",
      informasi_berita: "Berita",
      informasi_bantuan: "Bantuan",
      lokasi_alamat:
        "Jl. Indrapura No.32A, Krembangan Sel., Krembangan, Surabaya, Jawa Timur, Indonesia",
    },
  },
  // === BAHASA INGGRIS (ENG) ===
  eng: {
    header: {
      menu_beranda: "Home",
      menu_layanan: "Services",
      menu_keanggotaan: "Membership",
      menu_profil: "About Us",
      menu_berita: "News",
      menu_bantuan: "Help",
    },
    beranda: {
      tagline_judul:
        "Supporting National Export Growth with PT. Pegiat Ekspor Nusantara",
      tagline_deskripsi:
        "Engaged in services and trade for local products, supporting market diversification through professional export assistance.",
      tagline_pengiriman: "Commodity Shipment",
      tagline_furnitur: "Furniture",
      pengiriman_deskripsi:
        "Ensuring partners' product shipments are professionally coordinated with high-standard logistics management",
      program_judul:
        "Supporting National Export to Enhance the Export Ecosystem",
      program_deskripsi:
        "Committed to providing reliable export services for SME players across various commodities to market their products in the global arena",
      btn_selengkapnya: "Read More",
      layanan_judul:
        "Professional Export Services to improve the competitiveness of local products",
      layanan_deskripsi:
        "Improving export understanding through professional services to support local products penetrate international markets",
      konsultasi_judul: "Export Consultation",
      konsultasi_deskripsi:
        "Helping business actors understand their product's export potential, applicable regulations, and foreign market penetration strategies.",
      pengembangan_judul: "Integrated Business Development Program",
      pengembangan_deskripsi:
        "Providing various business development programs to strengthen the competitiveness of local products in international markets",
      seminar_judul: "SME Business Development Seminar East Java Region",
      seminar_deskripsi:
        "Discussing strategies and business opportunities for SMEs in export orientation",
      berita_judul: "Information about PT Pegiat Ekspor Nusantara",
      berita_deskripsi:
        "Presenting the latest news about PT Pegiat Ekspor Nusantara while ensuring information updates",
      berita_card_judul:
        "PT Pegiat Ekspor Nusantara Business Development Program",
      berita_card_deskripsi: "Professional export assistance",
      mitra_judul:
        "Building Strategic Collaboration with PT.Pegiat Ekspor Nusantara",
      mitra_deskripsi:
        "Supporting strategic cooperation for business actors from various commodities in an effort to strengthen the national export ecosystem",
    },
    program2: {
      breadcrumb_beranda: "Home",
      breadcrumb_program: "Program",
      breadcrumb_detail: "Business Development Seminar",
      hero_title:
        "Integrated Business Development Program with PT Pegiat Ekspor Nusantara",
      hero_subtitle:
        "Providing various business development programs to strengthen the competitiveness of local products in international markets",
      detail_title: "PT Pegiat Ekspor Nusantara Business Development Seminar",
      detail_deadline: "September 25, 2025",
      detail_description:
        "The East Java Region SME Business Development Seminar is a program designed to help small and medium-sized enterprises increase capacity, competitiveness, and adaptability in facing market dynamics. This program features speakers from professional circles, business practitioners, and relevant agencies who provide strategic insights on business management, modern marketing, technology utilization, and strengthening partnership networks. Through this seminar, participants are expected to gain a more focused understanding of effective business development steps, as well as open collaboration opportunities that can sustainably support SME growth in the East Java region.",
      section_title: "Latest Program",
      section_subtitle:
        "Providing various business development programs to strengthen the competitiveness of local products in international markets",
      latest_program_title:
        "PT Pegiat Ekspor Nusantara Business Development Seminar",
      latest_program_date: "September 25, 2025",
    },
    program1: {
      breadcrumb_beranda: "Home",
      breadcrumb_program: "Program",
      hero_title:
        "Integrated Business Development Program with PT Pegiat Ekspor Nusantara",
      hero_subtitle:
        "Providing various business development programs to strengthen the competitiveness of local products in international markets",
      section_title_1:
        "Business Development Program PT.Pegiat Ekspor Nusantara",
      section_subtitle_1:
        "Providing various business development programs to strengthen the competitiveness of local products in international markets",
      program_card_title:
        "PT.Pegiat Ekspor Nusantara Business Development Seminar",
      program_card_date_1: "September 25, 2025",
      program_card_date_2: "October 10, 2025",
      section_title_2:
        "Program Information and Announcement PT.Pegiat Ekspor Nusantara",
      section_subtitle_2:
        "Providing information on PT Pegiat Ekspor Nusantara's business development program",
      footer_note:
        "**Terms and conditions for program announcements or information are published",
    },
    keanggotaan: {
      judul_hero:
        "Upgrade Your Membership for Access to PT Pegiat Ekspor Nusantara Professional Services",
      deskripsi_hero:
        "Membership provides structured access for partners to obtain professional services, information, and support to encourage business collaboration in the export sector",
      rincian_judul: "Membership Program towards Professional Collaboration",
      rincian_deskripsi:
        "Membership provides structured access for partners to obtain professional services, information, and support designed to encourage collaboration and business growth in the export sector",
      btn_selengkapnya: "Read More",
      jenis_judul: "Membership Types PT Pegiat Ekspor Nusantara",
      jenis_deskripsi:
        "Membership provides structured access for partners to encourage business collaboration in the export sector",
      kartu_konsultasi_judul: "Professional Consultation",
      kartu_konsultasi_deskripsi:
        "Export Consultation Membership is available in several levels designed to adapt to the needs of partners",
      keuntungan_judul: "Membership Benefits",
      keuntungan_deskripsi:
        "Membership provides structured access for partners to encourage business collaboration in the export sector",
      keuntungan_card_1:
        "Members get priority access and professional support that strengthens business development.",
      keuntungan_card_2_deskripsi:
        "To obtain all membership benefits, users are expected to re-register through the specified procedure",
      skema_judul: "Membership Scheme PT Pegiat Ekspor Nusantara",
      skema_deskripsi:
        "Membership provides structured access for partners to encourage business collaboration in the export sector",
      tabel_syarat_judul: "Membership Terms and Conditions",
      tabel_keunggulan_judul:
        "Advantages of PT Pegiat Ekspor Nusantara Services",
      tabel_deskripsi:
        "Membership provides structured access for partners to encourage business collaboration in the export sector",
      tabel_kolom_klasifikasi: "Classification",
      tabel_kolom_pens: "PT. Pegiat Ekspor Nusantara",
      tabel_kolom_lainnya: "Other Service Providers",
      tabel_row_manfaat:
        "Possess business legality and sustained active commitment.",
      tabel_kaki_deskripsi:
        "Strengthening competitiveness through a strategic network that supports PT. Pegiat Ekspor Nusantara",
    },
    bantuan: {
      judul_hero: "Support and Help Services of PT Pegiat Ekspor Nusantara",
      deskripsi_hero:
        "Helping you find solutions regarding the service system of PT Pegiat Ekspor Nusantara",
      faq_judul: "Frequently Asked Questions Regarding the Application",
      faq_data: [
        {
          id: 1,
          question:
            "How do I find out the regulations applicable to my product?",
          answer:
            "You can consult with export experts or seek information from the authorized government agencies in your destination country. We can also help you identify the regulations relevant to your product.",
        },
        {
          id: 2,
          question: "What documents are required for the export process?",
          answer:
            "Documents generally required include the invoice, packing list, bill of lading, and certificate of origin (COO).",
        },
        {
          id: 3,
          question:
            "Does PT. Pegiat Ekspor Nusantara assist with product shipment?",
          answer:
            "Yes, we provide comprehensive assistance services, including logistics management and insurance to ensure your product arrives safely in the destination country.",
        },
      ],
    },
    berita2: {
      judul_halaman: "Professional export assistance",

      hero: {
        judul_utama: "Presenting Information about PT Pegiat Ekspor Nusantara",
        deskripsi:
          "Engaged in the export field to support local Indonesian products penetrate the global market through professional export assistance",
      },

      detail: {
        judul_artikel:
          "Professional export assistance with PT Pegiat Ekspor Nusantara",
        tanggal_publikasi: "November 25, 2025",
        penulis: "Author: PT Pegiat Ekspor Nusantara",
        konten_paragraf_1:
          "Professional export assistance with PT Pegiat Ekspor Nusantara is carried out again as an effort to strengthen the capacity of business actors in entering the international market. This activity provides structured assistance ranging from understanding export regulations, document preparation, to global marketing strategies relevant to industry needs. Through this program, PT Pegiat Ekspor Nusantara is committed to supporting business actors to be able to compete competitively, improve product quality, and expand marketing reach to various destination countries. This assistance is expected to be a real contribution in promoting sustainable national export growth.",
      },

      terkini: {
        judul_terkini: "Latest News",
        deskripsi_terkini:
          "Presenting the latest news about PT Pegiat Ekspor Nusantara while ensuring information updates",
      },

      berita_rekomendasi: [
        {
          id: 1,
          judul: "Professional export assistance",
          tanggal: "September 25, 2025",
        },
        {
          id: 2,
          judul: "New Strategy to Achieve This Year's Export Target", // Contoh disamakan dengan Berita1
          tanggal: "October 10, 2025",
        },
        {
          id: 3,
          judul: "Product Quality Training for the European Market",
          tanggal: "November 2, 2025",
        },
        {
          id: 4,
          judul: "Tips for Managing Export Customs Documents",
          tanggal: "December 20, 2025",
        },
      ],
    },
    layanan: {
      hero: {
        judul_utama_1:
          "Professional Export Services with PT. Pegiat Ekspor Nusantara",
        deskripsi:
          "Improving export understanding through professional services to support local products penetrate international markets",
      },
      tombol_skema: "View Service Scheme",
      layanan_1: {
        judul: "Export Consultation with Professionals",
        deskripsi:
          "This service helps business actors understand their product's export potential, applicable regulations, and foreign market penetration strategies. Consultation is conducted by an experienced team of export experts in the field of international trade",
      },
      layanan_2: {
        judul: "Product Curation to Deliver Quality Products",
        deskripsi:
          "Product curation aims to ensure products meet international standards in terms of quality, packaging, and price competitiveness. This process also assesses the product's suitability to market demand in the destination country",
      },
      layanan_3: {
        judul: "Legal/Permit Assistance",
        deskripsi:
          "Assisting business actors in managing the necessary documents and legality for export, such as NIB, business permits, HS Code, and destination country permits",
      },
      layanan_4: {
        judul: "Export Financing Assistance",
        deskripsi:
          "Providing financing solutions for business actors who need working capital for export activities, either through financial institutions, government export financing, or export credit schemes",
      },
      layanan_5: {
        judul: "Product Shipment Assistance",
        deskripsi:
          "This service assists in the export logistics process, from selecting the shipping method, negotiating with freight forwarders, to preparing shipping documents (Bill of Lading, Packing List, Invoice, etc.)",
      },
      layanan_6: {
        judul: "Export Professional Certification for Business Actors",
        deskripsi:
          "This service aims to increase the capacity of export human resources by providing training and professional certification from official institutions (e.g., BNSP). Participants will comprehensively understand the export process and receive competency recognition.",
      },
    },
    profil: {
      hero_link_beranda: "Home",
      hero_link_profil: "Profile",
      hero_judul: "Supporting National Export to Enhance the Export Ecosystem",
      hero_deskripsi:
        "Committed to providing reliable export services for SME players across various commodities to market their products in the global arena",

      profil_judul:
        "Strengthening Commitment Through Company Vision and Mission",
      profil_deskripsi:
        "The company's vision and mission serve as the basis for determining direction, goals, and commitment to achieving sustainable growth",

      nilai_judul: "Values",
      nilai_1:
        "Professionalism, namely providing services based on real expertise and experience in the export field.",
      nilai_2:
        "Empowerment, namely encouraging the independence of business actors to be able to penetrate the global market.",
      nilai_3:
        "Networking, namely establishing broad collaboration with national and international stakeholders.",
      nilai_4:
        "Sustainability, namely promoting sustainable export that has an economic impact on the local community.",
      nilai_5:
        "Integrity, namely upholding honesty, transparency, and responsibility in every assistance process.",

      visi_judul: "Vision",
      visi_deskripsi:
        "To become the leading export assistance institution in Indonesia that produces resilient, globally competitive, and sustainable export actors",

      misi_judul: "Mission",
      misi_1:
        "Empowering MSMEs and local business actors to be able to understand and execute the export process independently and professionally.",
      misi_2:
        "Building an integrated export ecosystem through synergy between business actors, government institutions, banking, and international buyers.",
      misi_3:
        "Increasing the competence of national export human resources through training, professional certification, and field assistance.",
      misi_4:
        "Supporting the acceleration of national economic growth through increasing the volume and quality of exports of superior regional products.",
      misi_5:
        "Becoming a credible export information and consultation center based on the latest global market data.",

      sejarah_judul: "Tracing the Journey of PT Pegiat Ekspor Nusantara",
      sejarah_deskripsi:
        "Company milestones describe a series of important landmarks marking strategic development and achievements in the business journey",

      sejarah_milestone_judul: "Strategic Service Expansion",
      sejarah_milestone_deskripsi:
        "The company achieved an important milestone through the expansion of key services that increased operational reach",

      sejarah_card_judul: "Service Expansion of PT Pegiat Ekspor Nusantara",
      sejarah_card_deskripsi:
        "PT Pegiat Ekspor Nusantara recorded a 35% increase in operational capacity and successfully expanded services to 12 new cities in the East Java region",

      struktur_judul: "Organizational Structure PT Pegiat Ekspor Nusantara",
      struktur_deskripsi:
        "The company structure describes the governance and organizational arrangement that ensures every function runs according to company goals",

      pencapaian_judul: "Strategic Achievements",
      pencapaian_deskripsi:
        "The company affirms its commitment to real contribution in building the export ecosystem for business actors",
      pencapaian_card_judul: "Capacity Increase and Service Expansion",

      komitmen_judul:
        "PT Pegiat Ekspor Nusantara's Commitment to Making a Real Contribution",
      komitmen_deskripsi:
        "The company affirms its commitment to real contribution in building the export ecosystem for business actors",

      komitmen_1_judul: "Commitment to Social Responsibility",
      komitmen_1_deskripsi:
        "Implementing ethical and responsible corporate governance",

      komitmen_2_judul: "Dedication to Business Sustainability",
      komitmen_2_deskripsi:
        "The company carries out responsible operations by prioritizing business sustainability",

      komitmen_3_judul: "Real Contribution to Economic Growth",
      komitmen_3_deskripsi:
        "PT Pegiat Ekspor Nusantara strives to increase the competitiveness of local products through support for business actors",
    },
    berita: {
      judul_hero: "Presenting News about PT Pegiat Ekspor Nusantara",
      deskripsi_hero:
        "Presenting the latest news about PT Pegiat Ekspor Nusantara while ensuring information updates",

      judul_konten: "Presenting Information about PT Pegiat Ekspor Nusantara",
      deskripsi_konten:
        "Presenting the latest news about PT Pegiat Ekspor Nusantara while ensuring information updates",

      news_data: [
        {
          id: 1,
          image: "image 1.png",
          title: "Professional and Trusted Export Assistance",
          date: "September 25, 2025",
        },
        {
          id: 2,
          image: "image 1.png",
          title: "New Strategy to Achieve This Year's Export Target",
          date: "October 10, 2025",
        },
        {
          id: 3,
          image: "image 1.png",
          title: "Product Quality Training for the European Market",
          date: "November 2, 2025",
        },
        {
          id: 4,
          image: "image 1.png",
          title:
            "Synergy Between Government and Private Sector Boosts Local Products",
          date: "December 10, 2025",
        },
        {
          id: 5,
          image: "image 1.png",
          title: "Success Penetrating the Middle East Market",
          date: "December 15, 2025",
        },
        {
          id: 6,
          image: "image 1.png",
          title: "Tips for Managing Export Customs Documents",
          date: "December 20, 2025",
        },
      ],

      btn_lihat_selengkapnya: "View More",
      btn_tutup: "Close",
      btn_read_more: "Read More",
    },
    banner: {
      banner_judul:
        "Increase export opportunities with PT. Pegiat Ekspor Nusantara",
      banner_deskripsi:
        "Support your business to penetrate the international market with professional export service support",
    },
    footer: {
      tagline:
        "From Nusantara to the World — With PENS, Export Becomes Reality",
      judul_kontak: "Contact",
      judul_layanan: "Services",
      judul_informasi: "Information",
      judul_lokasi: "Location of PT. Pegiat Ekspor Nusantara",
      layanan_konsultasi: "Export Consultation",
      layanan_kurasi: "Product Curation",
      layanan_legalitas: "Legal and Permit Assistance",
      layanan_pembiayaan: "Export Financing Assistance",
      layanan_pengiriman: "Product Shipment Assistance",
      layanan_sertifikasi: "Export Professional Certification",
      informasi_berita: "News",
      informasi_bantuan: "Help",
      lokasi_alamat:
        "Jl. Indrapura No.32A, Krembangan Sel., Krembangan, Surabaya, East Java, Indonesia",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "idn",
  fallbackLng: "idn",
  debug: true,
  resources,
  interpolation: {
    escapeValue: false,
  },
  ns: [
    "header",
    "beranda",
    "footer",
    "bantuan",
    "berita",
    "keanggotaan",
    "berita2",
    "banner",
    "profil",
    "program1",
    "program2",
  ],
  defaultNS: "beranda",
});

export default i18n;
