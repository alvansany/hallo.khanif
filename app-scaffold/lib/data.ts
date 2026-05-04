export const WORKS = [
  {
    slug: "mediverse-healthcare-superapp",
    title: "Mediverse: Indonesia's Healthcare Superapp",
    category: "Healthcare / Superapp",
    year: "2023",
    cover: "/images/mediverse/Display Mediverse.png",
    tags: ["Healthcare", "Superapp", "Design System", "BUMN"],
    summary: "Merancang ekosistem digital layanan kesehatan terintegrasi mulai dari aplikasi seluler untuk pasien hingga back-office untuk dokter dan apotek.",
    client: "Holding BUMN Farmasi (Biofarma)",
    role: "UI/UX Designer & Business Process Contributor",
    duration: "April 2022 - Maret 2023",
    problem: "",
    solution: "",
    result: "",
    images: ["/images/mediverse/Display Mediverse.png"],
    content: [
      {
        id: "overview",
        title: "Project Overview (The Hook)",
        description: "<strong>Menyatukan Ekosistem Kesehatan Indonesia dalam Satu Genggaman</strong><br/><br/>Mediverse adalah healthcare superapp yang dikembangkan oleh Holding BUMN Farmasi untuk memfasilitasi layanan kesehatan holistik (pencegahan, penyembuhan, dan promosi kesehatan). Tantangan utama dalam project ini bukan sekadar membuat aplikasi yang menarik, melainkan merancang sistem berskala besar yang menghubungkan pasien, dokter, apotek (merchant), dan admin dalam satu alur yang terpusat.<br/><br/><strong>My Role & Scope:</strong><br/>Sebagai UI/UX Designer, saya memegang tanggung jawab atas 80% dari total desain ekosistem, yang mencakup:<br/><br/><ul><li>Membangun arsitektur Design System dari nol.</li><li>Mendesain Mobile App (iOS & Android) untuk pengguna akhir.</li><li>Mendesain Back-Office System (Dashboard Admin, Merchant, dan Panel Dokter).</li><li>Merancang antarmuka Website dan Progressive Web Apps (PWAs).</li><li>Berperan aktif dalam merumuskan dan memetakan alur Proses Bisnis (Business Process).</li></ul>",
        image: "/images/mediverse/Main Screen.png"
      },
      {
        id: "empathize",
        title: "Empathize: Memahami Ekosistem yang Kompleks",
        description: "Membangun superapp berarti merancang untuk banyak tipe pengguna dengan kebutuhan yang berbeda-beda. Kami membedah fokus ke dalam beberapa pilar layanan utama Mediverse:<br/><br/><ul><li><strong>Medevo (Telemedicine):</strong> Pasien butuh akses konsultasi cepat, sementara dokter butuh antarmuka yang efisien untuk mendiagnosis dan memberi resep.</li><li><strong>Medpharm (Pharmacy Delivery):</strong> Pasien ingin proses tebus obat yang transparan (kurang dari 60 menit), sementara merchant (apotek) butuh manajemen stok dan pesanan yang real-time.</li><li><strong>Medpoint (Reservasi Faskes):</strong> Menghubungkan pasien dengan fasilitas kesehatan terdekat untuk jadwal pertemuan luring.</li><li><strong>EHR (Electronic Health Record):</strong> Kebutuhan akan sistem rekam medis yang sangat aman namun mudah diakses oleh pasien dan dokter yang berwenang.</li></ul>",
      },
      {
        id: "define",
        title: "Define: Memetakan Proses Bisnis & Alur Pengguna",
        description: "Karena keterlibatan saya tidak hanya di ranah visual, tahap ini menjadi sangat krusial. Saya membantu merumuskan Business Process agar logika dari sistem operasional dapat diterjemahkan ke dalam antarmuka yang ramah pengguna.<br/><br/><ul><li><strong>Ecosystem Mapping:</strong> Kami membuat diagram alur bagaimana sebuah data bergerak. Misalnya, ketika pengguna selesai konsultasi (Medevo), bagaimana resep digital otomatis masuk ke dashboard apotek terdekat (Medpharm), dan status pengiriman dapat dilacak oleh pengguna.</li><li><strong>Friction Identification:</strong> Kami menemukan bahwa kerumitan terbesar ada di sisi operasional (Back-Office). Jika dashboard dokter atau merchant terlalu rumit, pelayanan ke pasien akan terhambat.</li></ul>",
      },
      {
        id: "ideate",
        title: "Ideate: Arsitektur Informasi & Wireframing",
        description: "Fokus utama di sini adalah standardisasi. Dengan platform yang membentang dari aplikasi seluler hingga dashboard web berbasis data berat, arsitektur informasi harus solid.<br/><br/><ul><li><strong>Wireframing:</strong> Kami memetakan hierarki informasi melalui Low-Fidelity wireframes, memastikan bahwa user flow untuk pendaftaran pengguna baru, booking dokter, hingga proses checkout obat memiliki sesedikit mungkin langkah (clicks).</li><li><strong>Omnichannel Strategy:</strong> Untuk memastikan aksesibilitas maksimal, desain tidak hanya dikunci pada native app (iOS/Android), tetapi juga dioptimalkan secara penuh sebagai Progressive Web Apps (PWAs), memungkinkan pengguna dengan memori perangkat terbatas tetap bisa mengakses layanan kesehatan dengan performa layaknya aplikasi native.</li></ul>",
      },
      {
        id: "prototype",
        title: "Prototype: Menghidupkan Antarmuka (The Execution)",
        description: "Di sinilah eksekusi desain mengambil tempat, berpusat pada konsistensi, estetika, dan skalabilitas.<br/><br/><ul><li><strong>Establishing the Design System:</strong> Untuk menjaga konsistensi di 5 platform yang berbeda (App, PWA, Web, Dashboard Admin/Merchant/Dokter), saya membangun Design System yang komprehensif. Mulai dari token warna, tipografi, hingga puluhan komponen UI yang reusable. Ini mempercepat kolaborasi dengan developer secara drastis.</li><li><strong>Clean, Creative, & Professional Aesthetics:</strong> Mengingat ini adalah aplikasi kesehatan (BUMN), visual harus mencerminkan kepercayaan (trust), keamanan, dan kebersihan. Saya menerapkan gaya desain yang clean, profesional, namun tetap modern dan kreatif agar tidak terasa kaku.</li><li><strong>Light Mode & Dark Mode Support:</strong> Empati terhadap kondisi pengguna sangat penting di ranah medis. Saya merancang seluruh komponen agar mendukung Light Mode dan Dark Mode secara sempurna. Ini memberikan kenyamanan visual yang krusial, terutama bagi pasien yang mengakses aplikasi di malam hari atau dalam kondisi kurang sehat.</li></ul>",
        gallery: [
          { src: "/images/mediverse/Fitur_ Medevo.png", caption: "Fitur Medevo" },
          { src: "/images/mediverse/Fitur_ Medpharm.png", caption: "Fitur Medpharm" },
          { src: "/images/mediverse/Fitur_ Medpoint.png", caption: "Fitur Medpoint" },
          { src: "/images/mediverse/Fitur_ EHR (Electronic Health Record).png", caption: "Fitur EHR (Electronic Health Record)" }
        ]
      },
      {
        id: "test",
        title: "Test & Iterate (Kolaborasi Pengembangan)",
        description: "Setelah desain mencapai tahap High-Fidelity, proses beralih ke kolaborasi intens dengan tim Engineering. Penggunaan Design System yang terpusat memastikan setiap komponen yang dikembangkan memiliki tingkat pixel-perfect yang tinggi. Kami melakukan penyesuaian iteratif berdasarkan batasan teknis (technical constraints) selama masa pengembangan Back-Office dan integrasi API faskes.",
      },
      {
        id: "outcomes",
        title: "Outcomes & Impact",
        description: "Project Mediverse berhasil diselesaikan dan dirilis ke publik, melayani pengguna di seluruh Indonesia melalui ekosistem BUMN Farmasi.<br/><br/><ul><li><strong>Live App:</strong> Tersedia di <a href=\"https://apps.apple.com/id/app/mediverse-healthcare-superapps/id1625572956\" target=\"_blank\" style=\"text-decoration: underline;\">App Store</a> dan <a href=\"https://play.google.com/store/apps/details?id=com.biofarma.mediverse\" target=\"_blank\" style=\"text-decoration: underline;\">Google Play Store</a>.</li><li><strong>Web Portal:</strong> <a href=\"https://mediverse.id/\" target=\"_blank\" style=\"text-decoration: underline;\">Mediverse.id</a> berhasil menjadi pintu gerbang utama informasi dan layanan edukasi kesehatan.</li><li><strong>Scalable Foundation:</strong> Design system dan rancangan proses bisnis yang dibangun selama periode April 2022 - Maret 2023 kini menjadi pondasi yang kokoh untuk pengembangan fitur-fitur baru Mediverse di masa depan.</li></ul>"
      }
    ]
  },
  {
    slug: "bind-design-system",
    title: "BIND: Biofarma Innovative Next-level Design System",
    category: "Design System / Web & Mobile",
    year: "2024",
    cover: "/images/bind/Display Bind.png",
    tags: ["Design Tokens", "Component Library", "Documentation", "BUMN"],
    summary: "Membangun fondasi digital tunggal untuk Holding Biofarma melalui sistem desain yang terukur, mencakup standarisasi komponen UI untuk Mobile dan Web serta dokumentasi teknis yang komprehensif.",
    client: "Holding BUMN Farmasi (Biofarma)",
    role: "Lead UI/UX Designer & Developer",
    duration: "November 2024 - Desember 2024",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "overview",
        title: "Project Overview (The Hook)",
        description: "<strong>Satu Bahasa Visual untuk Inovasi Kesehatan</strong><br/><br/>Sebagai perusahaan holding farmasi terbesar di Indonesia, Biofarma memiliki berbagai lini produk digital yang terus berkembang. Tantangannya adalah memastikan konsistensi visual dan efisiensi pengembangan di seluruh platform. BIND (Biofarma Innovative Next-level Design) hadir sebagai solusi end-to-end untuk menjembatani kesenjangan antara desainer dan pengembang, menciptakan ekosistem produk yang lebih cepat dirilis ke pasar (Time-to-Market) dengan kualitas yang konsisten.<br/><br/><strong>My Role & Scope:</strong><br/>Dalam project ini, saya bertanggung jawab penuh dari hulu ke hilir:<br/><br/><ul><li><strong>Requirements Gathering:</strong> Berkolaborasi dengan stakeholder untuk memetakan kebutuhan UI di seluruh unit bisnis.</li><li><strong>Design System Architect:</strong> Merancang Design Tokens, anatomi komponen, dan panduan penggunaan (How-to-use).</li><li><strong>Component Development:</strong> Mengonversi desain menjadi komponen UI siap pakai secara teknis.</li><li><strong>Technical Documentation:</strong> Membangun website dokumentasi sebagai pusat referensi tunggal bagi tim produk.</li></ul>",
      },
      {
        id: "discovery",
        title: "Discovery: Identifikasi Masalah & Kebutuhan",
        description: "Sebelum mulai mendesain, saya melakukan observasi pada produk-produk yang ada untuk menemukan pola yang berulang dan masalah yang sering muncul:<br/><br/><ul><li><strong>Inkonsistensi:</strong> Variasi warna, tipografi, dan spacing yang berbeda antar platform (Web vs Mobile).</li><li><strong>Redundansi Kerja:</strong> Developer sering membangun kembali komponen yang sama dari nol.</li><li><strong>Lack of Documentation:</strong> Sulitnya akses panduan penggunaan desain bagi anggota tim baru.</li></ul>",
      },
      {
        id: "foundations",
        title: "Defining the Foundation: Design Tokens & Tokens Logic",
        description: "Saya memulai dengan membangun \"Atom\" atau unit terkecil dari sistem desain ini.<br/><br/><ul><li><strong>Design Tokens:</strong> Saya merancang sistem token untuk Warna (Primary, Success, Warning, Error), Tipografi, Shadow, dan Spacing. Token ini memastikan bahwa jika ada perubahan branding, kita hanya perlu mengubah satu sumber data untuk memperbarui seluruh platform.</li><li><strong>Design Principles:</strong> Menetapkan prinsip \"Innovative & Professional\" agar setiap komponen tetap terasa modern namun memiliki tingkat kepercayaan tinggi khas industri kesehatan.</li></ul>",
        gallery: [
          { src: "/images/bind/Foundations_ Colors.png", caption: "Color Tokens" },
          { src: "/images/bind/Foundations_ Typography.png", caption: "Typography Tokens" }
        ]
      },
      {
        id: "atomic-design",
        title: "The Design Process: Atomic Design Approach",
        description: "Menggunakan pendekatan Atomic Design, saya menyusun komponen di Figma dengan struktur yang sangat rapi:<br/><br/><ul><li><strong>Atoms:</strong> Buttons, Inputs, Icons, Badges.</li><li><strong>Molecules:</strong> Search bars, Card headers, Form groups.</li><li><strong>Organisms:</strong> Navigation bars, Data tables, Complex modals.</li><li><strong>Figma Infrastructure:</strong> Memanfaatkan fitur Variables, Auto Layout, dan Component Properties agar tim desain lain dapat menggunakan komponen ini dengan fleksibel namun tetap patuh pada aturan sistem.</li></ul>",
        gallery: [
          { src: "/images/bind/Komponen_ Button.png", caption: "Button Component Structure" },
          { src: "/images/bind/Komponen_ Accordion.png", caption: "Accordion Component Pattern" }
        ]
      },
      {
        id: "development",
        title: "Bridging the Gap: Development & Documentation",
        description: "Keunikan saya dalam project ini adalah tidak berhenti pada desain. Saya mengimplementasikan komponen-komponen tersebut menjadi kode yang fungsional.<br/><br/><ul><li><strong>UI Component Development:</strong> Membangun pustaka komponen yang ringan, accessible, dan responsif.</li><li><strong>Documentation Site:</strong> Saya membangun website BIND UI Documentation yang interaktif. Di sini, desainer bisa melihat aturan visual, sementara developer bisa langsung menyalin cuplikan kode (code snippets).</li><li><strong>Accessibility Standards:</strong> Memastikan kontras warna dan ukuran elemen memenuhi standar WCAG untuk aksesibilitas pengguna di berbagai perangkat.</li></ul>",
        gallery: [
          { src: "/images/bind/Documentation_ Guide.png", caption: "Guidelines Documentation" },
          { src: "/images/bind/Documentation_ Storybook.png", caption: "Component Implementation (Storybook)" }
        ]
      },
      {
        id: "outcomes",
        title: "Outcomes & Impact",
        description: "Dalam waktu singkat (2 bulan), BIND Design System berhasil diluncurkan dan mulai diintegrasikan ke dalam alur kerja tim:<br/><br/><ul><li><strong>Efficiency:</strong> Mempercepat proses desain dan handover ke pengembang hingga 40%.</li><li><strong>Consistency:</strong> Menghilangkan disparitas visual antara produk Mobile dan Web.</li><li><strong>Single Source of Truth:</strong> Seluruh tim kini merujuk pada satu dokumentasi terpusat di bind-ui.biofarma.co.id.</li></ul>"
      }
    ]
  },
  {
    slug: "mytok-hris-revamp",
    title: "Mytok: HRIS Ecosystem Revamp for MPM Distributor",
    category: "HRIS / Mobile & Web",
    year: "2024 - 2025",
    cover: "/images/mytok/Display Mytok.png",
    tags: ["HRIS", "App Revamp", "Back Office", "Enterprise"],
    summary: "Transformasi aplikasi HRIS melalui perombakan total Arsitektur Informasi dan penyederhanaan fitur untuk meningkatkan produktivitas karyawan dan efisiensi admin.",
    client: "MPM Distributor",
    role: "UI/UX Designer",
    duration: "Fase 1 (Feb - Mei 2024) & Fase 2 (Jun - Agst 2025)",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "overview",
        title: "Project Overview (The Hook)",
        description: "<strong>Menyederhanakan Kompleksitas HRIS dalam Satu Sistem Terpadu</strong><br/><br/>MYTOK adalah aplikasi HRIS internal untuk MPM Distributor yang melayani ribuan karyawan. Namun, sistem lama memiliki masalah pada redundansi fitur dan navigasi yang membingungkan. Project revamp ini bertujuan untuk menyegarkan tampilan UI sekaligus melakukan \"pembersihan\" besar-besaran pada struktur data dan alur kerja agar lebih intuitif bagi pengguna mobile maupun admin pusat.<br/><br/><strong>My Role & Scope:</strong><br/>Sebagai UI/UX Designer, saya memimpin transformasi ini dalam dua fase utama:<br/><ul><li><strong>Fase 1 (Mobile App):</strong> Fokus pada redesain UI, perombakan total Arsitektur Informasi (IA), dan eliminasi fitur redundan pada aplikasi MYTOK.</li><li><strong>Fase 2 (Back Office):</strong> Revamp dan pengembangan fitur baru untuk sistem web-based yang digunakan oleh tim HR dan Admin.</li></ul>",
        image: "/images/mytok/Main Screen Mytok.png"
      },
      {
        id: "empathize",
        title: "Empathize: Mengidentifikasi Hambatan Operasional",
        description: "Melalui audit terhadap aplikasi MYTOK versi lama, ditemukan beberapa poin krusial yang menghambat produktivitas:<br/><ul><li><strong>Feature Redundancy:</strong> Terdapat fitur-fitur dengan fungsi serupa yang membingungkan pengguna saat ingin melakukan tugas spesifik (misal: pengajuan izin vs cuti yang tumpang tindih).</li><li><strong>Complex Navigation:</strong> Arsitektur informasi yang terlalu dalam membuat pengguna membutuhkan banyak klik untuk mencapai fitur utama seperti clock-in/out.</li><li><strong>Visual Fatigue:</strong> Tampilan UI yang terasa kaku dan tidak mendukung kenyamanan penggunaan jangka panjang.</li></ul>",
      },
      {
        id: "define",
        title: "Define: Restrukturisasi & Simplifikasi",
        description: "Tahap ini adalah inti dari kontribusi saya dalam project ini. Saya tidak hanya mempercantik tampilan, tapi memperbaiki logika sistemnya.<br/><ul><li><strong>IA Overhaul:</strong> Memetakan ulang seluruh pohon navigasi. Saya menyederhanakan hierarki informasi agar fitur yang paling sering digunakan (Absensi, Slip Gaji, Cuti) berada di jangkauan utama.</li><li><strong>Feature Consolidation:</strong> Menggabungkan fitur-fitur redundan menjadi satu modul yang lebih cerdas, sehingga mengurangi beban kognitif pengguna.</li><li><strong>Problem Statement:</strong> \"Bagaimana kita bisa membuat sistem HRIS yang kompleks terasa ringan dan mudah digunakan oleh karyawan dengan berbagai tingkat literasi digital?\"</li></ul>",
      },
      {
        id: "ideate",
        title: "Ideate: Perancangan Alur yang Efisien",
        description: "Dengan struktur baru yang lebih ramping, saya mulai merancang solusi visual:<br/><ul><li><strong>User Flow:</strong> Merancang ulang alur attendance dan submission agar lebih cepat (minimal klik).</li><li><strong>Wireframing:</strong> Membuat kerangka kerja untuk aplikasi mobile dan dashboard back-office secara paralel untuk memastikan sinkronisasi data yang mulus antara input karyawan dan tampilan admin.</li></ul>",
      },
      {
        id: "prototype",
        title: "Prototype: Transformasi Visual (Mobile & Web)",
        description: "Saya menerapkan prinsip desain yang clean, creative, dan professional sesuai dengan identitas perusahaan namun tetap modern.<br/><ul><li><strong>UI Redesign (Mobile):</strong> Menggunakan palet warna yang menyegarkan dan layout yang bersih. Saya memastikan keterbacaan data tetap tinggi meski pada layar perangkat yang kecil.</li><li><strong>Back Office Revamp (Web-base):</strong> Merancang dashboard admin yang fungsional dengan fokus pada manajemen data besar, visualisasi laporan, dan kemudahan navigasi menu administratif.</li><li><strong>Adaptability:</strong> Seluruh desain dirancang untuk mendukung Light Mode dan Dark Mode, memberikan fleksibilitas bagi karyawan yang bekerja dalam berbagai kondisi lingkungan.</li></ul>",
        gallery: [
          { src: "/images/mytok/Menu_ My Development.png", caption: "Mobile App - My Development" },
          { src: "/images/mytok/Menu_ Pengajuan.png", caption: "Mobile App - Pengajuan" },
          { src: "/images/mytok/Menu_ Approval Pengajuan.png", caption: "Mobile App - Approval" },
          { src: "/images/mytok/Menu_ Profile.png", caption: "Mobile App - Profile" },
          { src: "/images/mytok/Back Office System_ Master Accomodation.png", caption: "Back Office - Master Accomodation" },
          { src: "/images/mytok/Back Office System_ Approval Travel Claim.png", caption: "Back Office - Approval Travel Claim" }
        ]
      },
      {
        id: "test",
        title: "Test & Implementation",
        description: "Project ini berjalan secara bertahap untuk memastikan transisi yang mulus bagi pengguna lama:<br/><ul><li><strong>Fase 1 Launch:</strong> Aplikasi mobile dirilis terlebih dahulu dengan fokus pada perbaikan pengalaman harian karyawan.</li><li><strong>Fase 2 Development:</strong> Pengembangan sistem back-office dilakukan dengan mempertimbangkan feedback dari fase pertama, memastikan admin memiliki kontrol penuh atas fitur-fitur baru yang telah disederhanakan.</li></ul>",
      },
      {
        id: "outcomes",
        title: "Outcomes & Impact",
        description: "<ul><li><strong>Improved Usability:</strong> Navigasi yang lebih sederhana berhasil memangkas waktu pengguna dalam menyelesaikan tugas HR rutin.</li><li><strong>System Efficiency:</strong> Menghilangkan redundansi fitur mengurangi kebingungan pengguna dan beban pemeliharaan sistem di sisi backend.</li><li><strong>Successful Release:</strong> Aplikasi kini telah tersedia secara publik di <a href=\"https://play.google.com/store/apps/details?id=id.co.mytok2024.mpmdistributor&pcampaignid=web_share\" target=\"_blank\" style=\"text-decoration: underline;\">Google Play Store</a> dan digunakan aktif oleh ekosistem internal MPM Distributor.</li></ul>"
      }
    ]
  },
  {
    slug: "gpts-procurement-system",
    title: "GPTS: Automated Procurement System for PT Gaya Motor",
    category: "Procurement / Back Office",
    year: "2023",
    cover: "/images/gaya-motor/Display Procurement System.png",
    tags: ["Procurement", "Admin Dashboard", "Vendor Portal", "Bootstrap"],
    summary: "Transformasi proses pengadaan barang (procurement) melalui sistem back-office yang dirancang untuk kecepatan operasional dan akurasi data vendor.",
    client: "PT Gaya Motor",
    role: "UI/UX Designer",
    duration: "November 2023 - Desember 2023",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "overview",
        title: "Project Overview (The Hook)",
        description: "<strong>Efisiensi Pengadaan dalam Ekosistem Tertutup</strong><br/><br/>Gaya Motor Purchase & Trading System (GPTS) adalah solusi back-office komprehensif yang dirancang untuk mengotomatisasi alur pengadaan barang antara vendor dan internal admin PT Gaya Motor. Tantangan utama project ini adalah membangun sistem yang mampu menangani data dalam jumlah besar dengan alur persetujuan yang kompleks, namun harus diselesaikan dalam waktu singkat (1 bulan).<br/><br/><strong>My Role & Scope:</strong><br/>Dalam project ini, saya bertanggung jawab penuh pada fase perancangan antarmuka:<br/><ul><li>Mendesain modul Vendor Information dan Activation Flow.</li><li>Merancang dashboard Tender Procurement dan Matrix Approval.</li><li>Membangun fondasi desain berbasis Bootstrap 5 untuk menjamin kecepatan handover ke tim developer.</li></ul>"
      },
      {
        id: "empathize",
        title: "Empathize: Mengatasi Hambatan Administrasi",
        description: "Proses pengadaan manual sering kali terhambat oleh verifikasi data vendor yang lambat dan transparansi status tender. Fokus utama saya adalah:<br/><ul><li><strong>Vendor Onboarding:</strong> Bagaimana membuat proses aktivasi akun dan pengisian data legal (NPWP, SIUP) terasa mudah dan terstruktur.</li><li><strong>Data Clarity:</strong> Memastikan admin dapat melihat status tender (Open, Submitted, Done, Expired) secara instan tanpa harus membuka detail satu per satu.</li></ul>"
      },
      {
        id: "define",
        title: "Define: Strategi Desain \"Fast-Track\"",
        description: "Mengingat durasi project yang singkat (November - Desember 2023), saya dan tim mengambil keputusan strategis:<br/><ul><li><strong>Pragmatic Design:</strong> Memilih Bootstrap 5 sebagai base desain sistem. Hal ini memungkinkan saya fokus pada logika alur pengguna sementara komponen visual menggunakan standar yang sudah teruji dan mudah diimplementasikan secara teknis.</li><li><strong>Consistent Branding:</strong> Mengadopsi palet warna identitas PT Gaya Motor (Merah, Putih, Abu-abu) untuk memberikan kesan profesional dan kredibel bagi pengguna internal dan vendor.</li></ul>"
      },
      {
        id: "ideate",
        title: "Ideate: Arsitektur Informasi & Manajemen Tabel",
        description: "Sistem back-office adalah tentang efisiensi data. Saya merancang:<br/><ul><li><strong>Matrix Approval:</strong> Sistem tabel yang dinamis untuk mengatur hierarki persetujuan (Sequence 1, 2, 3) agar proses birokrasi terpeta dengan jelas.</li><li><strong>Filter & Search:</strong> Fitur pencarian dan filter tanggal yang kuat pada setiap daftar tender untuk mempercepat penemuan data spesifik.</li></ul>"
      },
      {
        id: "prototype",
        title: "Prototype: Eksekusi Visual (High-Fidelity)",
        description: "Berdasarkan lampiran desain, berikut adalah fitur kunci yang diimplementasikan:<br/><ul><li><strong>Clean Login & Activation:</strong> Antarmuka masuk yang bersih dengan fokus pada keamanan akun (syarat password yang ketat).</li><li><strong>Structured Forms:</strong> Pengelompokan data vendor (General Data, Identification Number) untuk meminimalisir kesalahan input.</li><li><strong>Dashboard Status:</strong> Penggunaan label warna yang kontras untuk status tender guna meningkatkan scannability.</li><li><strong>Detail-Oriented:</strong> Panel detail tender yang mencakup informasi legal, anggaran, hingga daftar vendor yang diundang dalam satu tampilan terpadu.</li></ul>",
        gallery: [
          { src: "/images/gaya-motor/Halaman_ Login.png", caption: "Halaman Login" },
          { src: "/images/gaya-motor/Halaman_ Aktivasi Akun.png", caption: "Halaman Aktivasi Akun" },
          { src: "/images/gaya-motor/Halaman_ Homepage Vendor.png", caption: "Halaman Homepage Vendor" },
          { src: "/images/gaya-motor/Halaman_ Vendor Information.png", caption: "Halaman Vendor Information" },
          { src: "/images/gaya-motor/Halaman_ List Tender (Vendor).png", caption: "Halaman List Tender (Vendor)" },
          { src: "/images/gaya-motor/Halaman_ List Tender (Admin).png", caption: "Halaman List Tender (Admin)" },
          { src: "/images/gaya-motor/Halaman_ Detail Tender (Admin).png", caption: "Halaman Detail Tender (Admin)" },
          { src: "/images/gaya-motor/Halaman_ Working List Approval (Admin).png", caption: "Halaman Working List Approval (Admin)" }
        ]
      },
      {
        id: "outcomes",
        title: "Outcomes & Impact",
        description: "<ul><li><strong>Rapid Delivery:</strong> Berhasil menyerahkan desain sistem yang siap dikembangkan hanya dalam waktu satu bulan.</li><li><strong>Technical Synergy:</strong> Penggunaan Bootstrap 5 meminimalisir kendala teknis saat fase development, memastikan hasil akhir aplikasi identik dengan desain asli.</li><li><strong>Operational Readiness:</strong> Menyediakan sistem yang aman dan efisien untuk digunakan secara internal oleh PT Gaya Motor dan mitra vendor terpilih.</li></ul>"
      }
    ]
  },
  {
    slug: "ikipay-redesign",
    title: "IKIPay: Redesign of E-Wallet Application",
    category: "Mobile App / Fintech",
    year: "2025",
    cover: "/images/ikipay/Display IKIPAY.png",
    tags: ["E-Wallet", "Mobile App", "UI/UX"],
    summary: "Redesign of E-Wallet Application untuk platform iOS dan Android.",
    client: "IKIPay",
    role: "UI/UX Designer",
    duration: "Juli 2025 - September 2025",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "coming-soon",
        title: "Coming Soon...",
        description: "Detail dari case study ini sedang dalam tahap penyusunan dan akan segera dirilis."
      }
    ]
  },
  {
    slug: "kurirmoo-delivery-app",
    title: "Kurirmoo: Mobile Application for Delivery Services",
    category: "Mobile App / Logistics",
    year: "2023",
    cover: "/images/kurirmoo/Display Kurirmoo.png",
    tags: ["Logistics", "Mobile App", "UI/UX"],
    summary: "Mobile Application for Delivery Services untuk platform iOS dan Android.",
    client: "Kurirmoo",
    role: "UI/UX Designer",
    duration: "Februari 2023 - Juni 2023",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "coming-soon",
        title: "Coming Soon...",
        description: "Detail dari case study ini sedang dalam tahap penyusunan dan akan segera dirilis."
      }
    ]
  },
  {
    slug: "portal-vendor-dashboard",
    title: "Portal Vendor: Vendor Management Dashboard",
    category: "Web Dashboard / Management",
    year: "2023",
    cover: "/images/portal-vendor/Display Portal Vendor.png",
    tags: ["Dashboard", "Web App", "UI/UX", "Vendor Management"],
    summary: "Vendor Management Dashboard untuk pengelolaan mitra secara efisien.",
    client: "Portal Vendor",
    role: "UI/UX Designer",
    duration: "Agustus 2023 - Desember 2023",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "coming-soon",
        title: "Coming Soon...",
        description: "Detail dari case study ini sedang dalam tahap penyusunan dan akan segera dirilis."
      }
    ]
  },
  {
    slug: "k24klik-redesign",
    title: "K24Klik: Redesign of Pharmacy Mobile Application",
    category: "Mobile App / Healthcare",
    year: "2025",
    cover: "/images/k24klik/Display K24Klik.png",
    tags: ["Healthcare", "Mobile App", "UI/UX"],
    summary: "Redesign of Pharmacy Mobile Application untuk platform iOS dan Android.",
    client: "K24Klik",
    role: "UI/UX Designer",
    duration: "Januari 2025 - Maret 2025",
    problem: "",
    solution: "",
    result: "",
    content: [
      {
        id: "coming-soon",
        title: "Coming Soon...",
        description: "Detail dari case study ini sedang dalam tahap penyusunan dan akan segera dirilis."
      }
    ]
  }
];

export const SERVICES = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "End-to-end product design from user research and strategy through wireframes, prototypes, and production-ready Figma files. I embed with your team to ship experiences that are intuitive and business-aligned.",
    deliverables: ["UX Research & Audits", "Wireframes & Prototypes", "High-Fidelity UI", "Design Handoff"],
    price: "Let's Talk",
  },
  {
    number: "02",
    title: "Design Systems",
    description:
      "Foundation-first design systems that scale. I architect token-based systems with full Figma library and component documentation — so your team ships faster with guaranteed consistency.",
    deliverables: ["Token Architecture", "Component Library", "Figma Library", "Documentation"],
    price: "Let's Talk",
  },
  {
    number: "03",
    title: "Interaction Design",
    description:
      "Crafting meaningful micro-interactions and user flows that feel natural and delightful. From tap feedback to complex multi-step flows — every interaction is intentional.",
    deliverables: ["Interaction Patterns", "Micro-animations", "Flow Design", "Prototyping"],
    price: "Let's Talk",
  },
  {
    number: "04",
    title: "UX Audit & Strategy",
    description:
      "An evidence-based audit of your current product's UX — covering heuristics, user flows, information architecture, and usability. Delivered as a prioritised action plan.",
    deliverables: ["Heuristic Evaluation", "Usability Testing", "Accessibility Review", "Prioritised Roadmap"],
    price: "Let's Talk",
  },
  {
    number: "05",
    title: "AI-Assisted Design",
    description:
      "Leveraging cutting-edge AI workflows and vibecoding techniques to accelerate rapid prototyping, enhance strategic thinking, and drive forward-looking product innovation.",
    deliverables: ["AI-Powered Prototyping", "Design Automation", "Rapid Iteration", "AI Strategy"],
    price: "Let's Talk",
  },
  {
    number: "06",
    title: "Consulting & Workshops",
    description:
      "Half-day or full-day workshops to level-up your design team, align stakeholders, or unblock strategic product decisions. Available remotely or on-site.",
    deliverables: ["Design Sprint Facilitation", "Team Training", "Stakeholder Alignment", "Design Critique"],
    price: "Let's Talk",
  },
];

export const STATS = [
  { value: "15+", label: "Digital Products Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "3", label: "Companies Collaborated" },
  { value: "100%", label: "Client Satisfaction" },
];

export const SKILLS = [
  "UI/UX Design",
  "Interaction Design",
  "User Research",
  "Information Architecture",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Usability Testing",
  "Design Thinking",
  "Visual Design",
  "Design Strategy",
  "AI Prompting",
  "Design Critique",
];

export const TOOLS = {
  design: ["Figma", "Stitch", "Paper"],
  ai: ["ChatGPT", "Claude", "Gemini", "Lovable"],
};

export const EXPERIENCE = [
  {
    company: "K24Klik",
    role: "UI/UX Designer",
    type: "Freelance",
    duration: "Jan 2025 – Mar 2025",
    location: "Yogyakarta, DI Yogyakarta",
    description:
      "Spearheaded the development of the K24Klik application design system, establishing foundational standards for typography, color, and spacing while creating 15+ reusable components to streamline the product team's workflow. Led the UI redesign of the application and provided strategic UX recommendations to enhance overall user experience and interface consistency.",
  },
  {
    company: "Refactory",
    role: "UI/UX Designer",
    type: "Full Time",
    duration: "Feb 2022 – Jan 2026",
    location: "Sleman, DI Yogyakarta",
    description:
      "Led the end-to-end design and delivery of 15+ digital products, including mobile apps, websites, and complex back-office systems. By bridging user research with business flow analysis, I ensure every design aligns perfectly with client goals and user needs. Specialize in building and maintaining design systems that guarantee consistency and streamline developer handoff.",
  },
  {
    company: "Slab! Design Studio",
    role: "UI/UX Designer",
    type: "Internship",
    duration: "Dec 2021 – Jan 2022",
    location: "Sleman, DI Yogyakarta",
    description:
      "Focused on mastering the intricacies of design systems, crafting versatile stock UI assets ranging from responsive websites and mobile apps to complex dashboard interfaces. Combined technical structure with continuous UI design exploration to deliver high-quality, scalable components for diverse digital platforms.",
  },
  {
    company: "Bank BPD DIY",
    role: "UI/UX Designer",
    type: "Internship",
    duration: "Feb 2020 – Apr 2020",
    location: "Yogyakarta, DI Yogyakarta",
    description:
      "Transformed complex product requirements into intuitive digital experiences by conducting thorough design analysis and architecting low-fidelity wireframes. Provided expert high-fidelity design recommendations, bridging the gap between initial concepts and polished, user-ready interfaces.",
  },
];

export const PROFILE = {
  name: "Khanif Alfan",
  fullName: "Muhammad Khanif Alfan Akhsani",
  title: "UI/UX Designer",
  shortBio:
    "Innovative UI/UX Designer crafting intuitive digital experiences — blending design thinking, AI workflows, and human-centered principles.",
  bio: "An innovative UI/UX Designer with over 5 years of experience delivering 15+ successful digital products, including mobile apps, responsive websites, and complex back-office systems. I specialize in building scalable design systems and fostering cross-functional collaboration to create intuitive, business-aligned solutions. Passionate about the evolution of technology, I actively integrate cutting-edge AI workflows and \"vibecoding\" techniques into my design and development processes.",
  location: "Sleman, DI Yogyakarta",
  availability: "Open to opportunities",
  email: "hallo.khanif@gmail.com",
  phone: "085727776760",
  education: {
    major: "Teknik Informatika",
    university: "Universitas Ahmad Dahlan",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/m-khanif-alfan-akhsani-49a2431b9/",
    github: "https://github.com/alvansany",
    dribbble: "https://dribbble.com/hallokhanif",
    twitter: "https://x.com/hialpan?s=21&t=2AJ0wRfkmjp0Apq-dPtYbw",
    medium: "https://medium.com/@hallo.khanif",
    instagram: "https://www.instagram.com/alvansany/",
  },
};
