export type Lang = "en" | "id";

const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  a11y: {
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
    toggleTheme: "Toggle theme",
    langSwitch: "Ganti bahasa ke Indonesia",
    primaryNav: "Primary",
    sectionNav: "Sections",
  },
  hero: {
    eyebrow: "Full-stack developer — Medan, Indonesia",
    name: "Muhammad Irfan Dzaky",
    taglinePlain: "I build web software end to end — the schema, the API, and ",
    taglineEm: "the way it feels.",
    sub: "Jek to most people. I ship products with Next.js, NestJS, and PostgreSQL, and twice a week I lead ten junior developers through their first real codebases at RevoU.",
    ctaProjects: "Selected work",
    ctaContact: "Get in touch",
    photoAlt: "Jek standing on warm asphalt, arms crossed, photographed from above",
    photoCaption: "Medan, North Sumatra — 3.59°N / 98.67°E",
    strip: {
      nowLabel: "Now",
      now: "Team Lead (part-time), RevoU",
      buildingLabel: "Building",
      building: "Products in Next.js & NestJS",
      statusLabel: "Status",
      status: "Open to full-time roles",
    },
  },
  projects: {
    eyebrow: "Index — 4 builds, 3 footnotes",
    title: "Projects",
    intro:
      "Each one written up the way I'd explain it in an interview: the problem, what I actually built, and what it changed in how I work.",
    labels: {
      role: "Role",
      context: "Context",
      year: "Year",
      stack: "Stack",
      problem: "The problem — ",
      build: "The build — ",
      taught: "What it taught me — ",
      also: "Also built",
    },
    items: [
      {
        slug: "dribble",
        name: "DRIBBLE",
        year: "2025",
        role: "Full-stack developer",
        context: "Capstone project, RevoU",
        stack: "Next.js · NestJS · PostgreSQL · TypeScript",
        essence: "Futsal court booking, minus the phone calls.",
        problem:
          "Futsal courts around Medan still run on phone calls, chat threads, and a paper schedule behind the counter. Players can't see what's free, owners double-book, and everyone wastes an evening sorting it out.",
        build:
          "A booking platform built end to end: authentication, live schedule views, booking flows, and role-based dashboards for players, administrators, and court owners. Next.js on the front, a NestJS API behind it, PostgreSQL underneath — developed in Scrum sprints with every endpoint exercised through Postman and Swagger before it shipped.",
        outcome:
          "The project that turned me from someone learning to code into someone shipping software. It covers the full arc — data model, API contract, interface — which is exactly the arc I want to own in a team.",
      },
      {
        slug: "daycare-saas",
        name: "Daycare SaaS",
        year: "2025",
        role: "Freelance developer",
        context: "Client work",
        stack: "Next.js · TypeScript · PostgreSQL",
        essence: "Admin software a real daycare actually runs on.",
        problem:
          "A daycare managing enrollment, daily schedules, and parent communication across spreadsheets and chat apps — workable at five kids, painful at fifty.",
        build:
          "A focused SaaS for the day-to-day: enrollment records, schedules, and the unglamorous admin flows that keep a childcare business legible. Built solo, directly with the client, which meant translating vague wishes into concrete screens and saying no to features that didn't earn their maintenance cost.",
        outcome:
          "Freelance work is a masterclass in scope: the client doesn't care how elegant the architecture is, only that Tuesday morning check-in takes two minutes instead of twenty.",
      },
      {
        slug: "pitchcrush-ai",
        name: "PitchCrush AI",
        year: "2026",
        role: "Solo build",
        context: "Technical assessment",
        stack: "Next.js · TypeScript · Tailwind CSS · OpenRouter",
        essence: "A pitch deck's least polite reader.",
        problem:
          "Founders rehearse their pitch with people who are nice to them. What they need is the skeptical investor, the wary customer, and the technical co-founder who asks the question they were hoping to avoid.",
        build:
          "An AI web app that stress-tests startup pitches from multiple business perspectives. LLM calls go through the OpenRouter API via secure server-side routes, and free-form model output gets converted into structured scores, risks, weak phrases, stronger rewrites, and likely follow-up questions. Runtime validation, provider error handling, and a local fallback analysis keep the product working even when the AI service isn't.",
        outcome:
          "My favorite engineering detail: the app degrades gracefully. If the external model is down, you still get an analysis — because a tool that only works when a third-party API feels like it isn't a tool.",
      },
      {
        slug: "tiketq",
        name: "TiketQ Dashboard",
        year: "2025–26",
        role: "Backend engineer",
        context: "Team project, RevoU × TiketQ",
        stack: "NestJS · TypeScript · Microservices",
        essence: "The transaction service behind a booking dashboard.",
        problem:
          "A smart booking dashboard needs trustworthy transaction data — sales, booking trends, customer behavior — and that trust is built or broken at the service layer.",
        build:
          "Contributed the transaction domain as part of a microservice team: defined domain models, implemented repository ports, and initialized a modular NestJS application designed to stay maintainable as the team grew. Built the transaction creation endpoint, hardened request validation, and tested API behavior across valid and hostile inputs.",
        outcome:
          "Pure backend work, no pixels to hide behind. The deliverable was an API another team could build on without reading my mind — which is its own kind of interface design.",
      },
    ],
    alsoBuilt: [
      {
        name: "Boarding-house management front-end",
        year: "2025",
        note: "Freelance. Responsive room listings, reservation flows, and availability views in vanilla HTML/CSS/JS, integrated against a partner's PHP/MySQL backend.",
      },
      {
        name: "PRD implementation",
        year: "2025",
        note: "Project manager for a team building from a Product Requirements Document — flagging unclear requirements and risks before they became rework.",
      },
      {
        name: "Internship report information system",
        year: "2023",
        note: "Internal MIS for Medan City's Dept. of Communication & Informatics, centralizing internship reports for mentors. Evaluated with real users post-design.",
      },
    ],
  },
  about: {
    eyebrow: "About",
    h1Before: "Goes by Jek. Builds the ",
    h1Em: "whole",
    h1After: " thing.",
    bio: [
      "I'm a full-stack developer based in Medan, Indonesia. The part of the job I love most is the hand-off between layers — the moment a data model, an API, and an interface stop being three separate things and start feeling like one product. I'd rather own that whole arc than any single slice of it.",
      "Twice a week I trade my editor for a whiteboard and lead ten junior developers at RevoU through their first real projects. Explaining code to beginners is merciless feedback on your own habits: every shortcut you can't justify out loud is a shortcut you probably shouldn't have taken.",
      "And yes — I build with AI in the loop. I treat it like an extremely fast junior developer: it types quicker than I ever will, but nothing ships until I've read every line. The taste, the architecture, and the blame stay fully human.",
    ],
    principlesTitle: "How I work",
    principles: [
      {
        title: "Server-first, client where it's earned.",
        body: "Most UI doesn't need JavaScript to exist — it needs it to react. I default to server rendering and spend the client budget only where interaction genuinely pays for it.",
      },
      {
        title: "Readable beats clever.",
        body: "Code gets read by juniors, reviewers, and a future me with no memory of writing it. If a beginner can't follow the logic, that's usually the logic's fault, not the beginner's.",
      },
      {
        title: "Write it down.",
        body: "An undocumented decision is a scheduled argument. I write READMEs, runbooks, and decision notes nobody asked for — and people keep ending up using them.",
      },
      {
        title: "Sweat the last four pixels.",
        body: "The gap between “works” and “feels right” lives in spacing, focus states, empty states, and error copy. That gap is where users decide whether they trust the thing.",
      },
    ],
    journeyTitle: "The journey so far",
    journey: [
      {
        period: "2026 — now",
        title: "Team Lead (part-time) — RevoU",
        body: "I guide a cohort of ten beginner full-stack developers through their first real codebases: twice-weekly group sessions, code review, and the slow, satisfying work of turning “it runs” into “I understand why it runs.” Teaching is the best code review training there is.",
      },
      {
        period: "2025",
        title: "From training intensively to shipping constantly",
        body: "A year of compounding: an intensive full-stack program at RevoU with DRIBBLE as the capstone, freelance work shipped for real clients alongside it, then team builds — backend engineer on a booking microservice, project manager on a PRD-driven product. Different seats, same lesson: software is a team sport played in writing.",
      },
      {
        period: "2023",
        title: "Intern — Medan City Dept. of Communication & Informatics",
        body: "Built a web-based information system that centralized internship reports for mentors, sat in the agile ceremonies, and ran a post-design evaluation with actual users. First contact with the truth that shipping is a conversation, not a handoff.",
      },
    ],
    interestsTitle: "Off the clock, still on the craft",
    interests: [
      {
        title: "AI-assisted building",
        body: "Vibe coding with the safety on. AI is a permanent part of my workflow — for speed, not for judgment.",
        wide: true,
      },
      {
        title: "Technical writing",
        body: "READMEs, runbooks, decision docs. Writing is how I find out whether I actually understand something.",
        wide: false,
      },
      {
        title: "Tax & accounting systems",
        body: "The unglamorous software that saves real people entire days. Rules, edge cases, and consequences — my favorite kind of problem space.",
        wide: false,
      },
      {
        title: "Games, studied closely",
        body: "Mostly story-heavy ones. The best games teach complex mechanics without a manual — it's the sharpest onboarding design anywhere, and I steal from it.",
        wide: true,
      },
    ],
  },
  contact: {
    eyebrow: "Contact — Medan, ID (GMT+7)",
    title: "Say hello.",
    intro:
      "Hiring for a full-stack role, need a hand on a build, or just want a second pair of eyes on something? My inbox is open.",
    emailNote: "Fastest. Usually answered within a day.",
    githubNote: "The code, including the imperfect parts.",
    linkedinNote: "For the formal version of all this.",
    footnote: "No contact form. Forms are where messages go to be ignored.",
    emailLabel: "Email",
  },
};

export type Dict = typeof en;

const id: Dict = {
  nav: {
    home: "Beranda",
    projects: "Proyek",
    about: "Tentang",
    contact: "Kontak",
  },
  a11y: {
    toDark: "Ganti ke tema gelap",
    toLight: "Ganti ke tema terang",
    toggleTheme: "Ganti tema",
    langSwitch: "Switch language to English",
    primaryNav: "Utama",
    sectionNav: "Bagian",
  },
  hero: {
    eyebrow: "Full-stack developer — Medan, Indonesia",
    name: "Muhammad Irfan Dzaky",
    taglinePlain: "Saya membangun software web dari ujung ke ujung — skema, API, dan ",
    taglineEm: "rasa saat dipakai.",
    sub: "Biasa dipanggil Jek. Saya membangun produk dengan Next.js, NestJS, dan PostgreSQL, dan dua kali seminggu memimpin sepuluh developer junior melewati codebase nyata pertama mereka di RevoU.",
    ctaProjects: "Karya pilihan",
    ctaContact: "Hubungi saya",
    photoAlt: "Jek berdiri di atas aspal hangat, tangan bersilang, difoto dari atas",
    photoCaption: "Medan, Sumatera Utara — 3.59°LU / 98.67°BT",
    strip: {
      nowLabel: "Sekarang",
      now: "Team Lead (paruh waktu), RevoU",
      buildingLabel: "Membangun",
      building: "Produk dengan Next.js & NestJS",
      statusLabel: "Status",
      status: "Terbuka untuk peran full-time",
    },
  },
  projects: {
    eyebrow: "Indeks — 4 proyek, 3 catatan kaki",
    title: "Proyek",
    intro:
      "Setiap proyek ditulis seperti saya menjelaskannya di wawancara: masalahnya, apa yang benar-benar saya bangun, dan apa yang berubah dari cara saya bekerja.",
    labels: {
      role: "Peran",
      context: "Konteks",
      year: "Tahun",
      stack: "Stack",
      problem: "Masalahnya — ",
      build: "Yang dibangun — ",
      taught: "Pelajarannya — ",
      also: "Juga pernah dibangun",
    },
    items: [
      {
        slug: "dribble",
        name: "DRIBBLE",
        year: "2025",
        role: "Full-stack developer",
        context: "Proyek capstone, RevoU",
        stack: "Next.js · NestJS · PostgreSQL · TypeScript",
        essence: "Booking lapangan futsal, tanpa telepon-teleponan.",
        problem:
          "Lapangan futsal di sekitar Medan masih mengandalkan telepon, utas chat, dan jadwal kertas di balik meja kasir. Pemain tidak tahu slot yang kosong, pemilik bisa double-booking, dan semua orang membuang semalaman untuk membereskannya.",
        build:
          "Platform booking yang dibangun utuh: autentikasi, tampilan jadwal langsung, alur booking, dan dashboard berbasis peran untuk pemain, admin, dan pemilik lapangan. Next.js di depan, API NestJS di belakang, PostgreSQL di bawahnya — dikerjakan dalam sprint Scrum dan setiap endpoint diuji lewat Postman dan Swagger sebelum rilis.",
        outcome:
          "Proyek yang mengubah saya dari orang yang belajar koding menjadi orang yang merilis software. Cakupannya utuh — model data, kontrak API, antarmuka — persis busur kerja yang ingin saya pegang di sebuah tim.",
      },
      {
        slug: "daycare-saas",
        name: "Daycare SaaS",
        year: "2025",
        role: "Developer freelance",
        context: "Proyek klien",
        stack: "Next.js · TypeScript · PostgreSQL",
        essence: "Software admin yang benar-benar dipakai sebuah daycare.",
        problem:
          "Sebuah daycare mengelola pendaftaran, jadwal harian, dan komunikasi orang tua lewat spreadsheet dan aplikasi chat — masih oke untuk lima anak, menyakitkan di lima puluh.",
        build:
          "SaaS yang fokus pada operasional harian: data pendaftaran, jadwal, dan alur admin tak glamor yang membuat bisnis penitipan anak tetap tertata. Dikerjakan sendiri, langsung dengan klien — menerjemahkan keinginan yang samar menjadi layar yang konkret, dan berani menolak fitur yang tidak sepadan dengan biaya perawatannya.",
        outcome:
          "Kerja freelance adalah sekolah terbaik soal scope: klien tidak peduli seberapa elegan arsitekturnya, yang penting check-in Selasa pagi selesai dua menit, bukan dua puluh.",
      },
      {
        slug: "pitchcrush-ai",
        name: "PitchCrush AI",
        year: "2026",
        role: "Proyek solo",
        context: "Asesmen teknis",
        stack: "Next.js · TypeScript · Tailwind CSS · OpenRouter",
        essence: "Pembaca pitch deck yang paling tidak sopan.",
        problem:
          "Founder biasanya melatih pitch di depan orang-orang yang baik padanya. Yang mereka butuhkan justru investor skeptis, calon pelanggan yang ragu, dan co-founder teknis yang menanyakan pertanyaan yang paling ingin dihindari.",
        build:
          "Aplikasi web AI yang menguji pitch startup dari berbagai sudut pandang bisnis. Panggilan LLM lewat OpenRouter API melalui route server-side yang aman, dan keluaran model diubah menjadi skor terstruktur, risiko, frasa lemah, saran penulisan ulang, dan pertanyaan lanjutan yang mungkin muncul. Validasi runtime, penanganan error provider, dan analisis fallback lokal menjaga produk tetap berfungsi bahkan saat layanan AI-nya tidak.",
        outcome:
          "Detail teknis favorit saya: aplikasinya gagal dengan anggun. Kalau model eksternal mati, kamu tetap mendapat analisis — karena alat yang hanya jalan saat API pihak ketiga sedang baik hati bukanlah alat.",
      },
      {
        slug: "tiketq",
        name: "TiketQ Dashboard",
        year: "2025–26",
        role: "Backend engineer",
        context: "Proyek tim, RevoU × TiketQ",
        stack: "NestJS · TypeScript · Microservices",
        essence: "Service transaksi di balik dashboard booking.",
        problem:
          "Dashboard booking yang pintar butuh data transaksi yang bisa dipercaya — penjualan, tren booking, perilaku pelanggan — dan kepercayaan itu dibangun atau dihancurkan di lapisan service.",
        build:
          "Berkontribusi pada domain transaksi sebagai bagian dari tim microservice: mendefinisikan domain model, mengimplementasikan repository port, dan menginisialisasi aplikasi NestJS modular yang dirancang tetap maintainable saat tim membesar. Membangun endpoint pembuatan transaksi, memperketat validasi request, dan menguji perilaku API untuk input valid maupun berbahaya.",
        outcome:
          "Kerja backend murni, tidak ada piksel untuk bersembunyi. Deliverable-nya adalah API yang bisa dipakai tim lain tanpa harus membaca pikiran saya — dan itu juga sebentuk desain antarmuka.",
      },
    ],
    alsoBuilt: [
      {
        name: "Front-end manajemen kos-kosan",
        year: "2025",
        note: "Freelance. Daftar kamar responsif, alur reservasi, dan info ketersediaan dengan HTML/CSS/JS murni, terintegrasi dengan backend PHP/MySQL milik rekan.",
      },
      {
        name: "Implementasi PRD",
        year: "2025",
        note: "Project manager untuk tim yang membangun dari Product Requirements Document — menandai kebutuhan yang ambigu dan risiko sebelum berubah menjadi rework.",
      },
      {
        name: "Sistem informasi laporan magang",
        year: "2023",
        note: "MIS internal untuk Dinas Kominfo Kota Medan, memusatkan laporan magang untuk mentor. Dievaluasi bersama pengguna nyata pasca-desain.",
      },
    ],
  },
  about: {
    eyebrow: "Tentang",
    h1Before: "Dipanggil Jek. Membangun ",
    h1Em: "seutuhnya",
    h1After: ", bukan sepotong.",
    bio: [
      "Saya full-stack developer yang tinggal di Medan, Indonesia. Bagian pekerjaan yang paling saya sukai adalah serah-terima antar lapisan — momen ketika model data, API, dan antarmuka berhenti menjadi tiga hal terpisah dan mulai terasa seperti satu produk. Saya lebih memilih memegang busur utuh itu daripada satu irisan saja.",
      "Dua kali seminggu saya menukar editor dengan papan tulis dan memimpin sepuluh developer junior di RevoU melewati proyek nyata pertama mereka. Menjelaskan kode ke pemula adalah umpan balik paling kejam untuk kebiasaan sendiri: setiap jalan pintas yang tidak bisa kamu pertanggungjawabkan dengan lantang, sebaiknya memang tidak diambil.",
      "Dan ya — saya membangun dengan AI di dalam alur kerja. Saya memperlakukannya seperti developer junior yang sangat cepat: mengetiknya lebih cepat dari saya, tapi tidak ada yang rilis sebelum saya baca setiap barisnya. Selera, arsitektur, dan tanggung jawabnya tetap sepenuhnya manusia.",
    ],
    principlesTitle: "Cara saya bekerja",
    principles: [
      {
        title: "Server dulu, client kalau memang layak.",
        body: "Sebagian besar UI tidak butuh JavaScript untuk ada — ia butuh JavaScript untuk bereaksi. Saya default ke render server dan menghabiskan jatah client hanya di tempat interaksi benar-benar membayar dirinya sendiri.",
      },
      {
        title: "Terbaca mengalahkan pintar.",
        body: "Kode dibaca oleh junior, reviewer, dan saya di masa depan yang sudah lupa pernah menulisnya. Kalau pemula tidak bisa mengikuti logikanya, biasanya yang salah logikanya, bukan pemulanya.",
      },
      {
        title: "Tulis semuanya.",
        body: "Keputusan yang tidak terdokumentasi adalah debat yang dijadwalkan ulang. Saya menulis README, runbook, dan catatan keputusan yang tidak diminta siapa pun — dan orang-orang terus memakainya.",
      },
      {
        title: "Peduli empat piksel terakhir.",
        body: "Jarak antara “jalan” dan “terasa benar” hidup di spacing, focus state, empty state, dan teks error. Di jarak itulah pengguna memutuskan percaya atau tidak.",
      },
    ],
    journeyTitle: "Perjalanan sejauh ini",
    journey: [
      {
        period: "2026 — sekarang",
        title: "Team Lead (paruh waktu) — RevoU",
        body: "Saya membimbing sepuluh developer full-stack pemula melewati codebase nyata pertama mereka: sesi kelompok dua kali seminggu, code review, dan kerja pelan yang memuaskan untuk mengubah “jalan kok” menjadi “saya paham kenapa jalan.” Mengajar adalah latihan code review terbaik yang ada.",
      },
      {
        period: "2025",
        title: "Dari latihan intensif ke rilis terus-menerus",
        body: "Setahun yang berlipat: program full-stack intensif di RevoU dengan DRIBBLE sebagai capstone, kerja freelance untuk klien nyata di sela-selanya, lalu proyek tim — backend engineer di microservice booking, project manager di produk berbasis PRD. Kursi berbeda, pelajaran sama: software adalah olahraga tim yang dimainkan lewat tulisan.",
      },
      {
        period: "2023",
        title: "Magang — Dinas Kominfo Kota Medan",
        body: "Membangun sistem informasi berbasis web yang memusatkan laporan magang untuk mentor, ikut dalam seremoni agile, dan menjalankan evaluasi pasca-desain dengan pengguna sungguhan. Kontak pertama dengan kenyataan bahwa merilis adalah percakapan, bukan serah terima.",
      },
    ],
    interestsTitle: "Di luar jam kerja, masih soal craft",
    interests: [
      {
        title: "Membangun dengan bantuan AI",
        body: "Vibe coding dengan rem tetap terpasang. AI bagian permanen dari alur kerja saya — untuk kecepatan, bukan untuk penilaian.",
        wide: true,
      },
      {
        title: "Penulisan teknis",
        body: "README, runbook, dokumen keputusan. Menulis adalah cara saya tahu apakah saya benar-benar paham.",
        wide: false,
      },
      {
        title: "Sistem pajak & akuntansi",
        body: "Software tak glamor yang menghemat hari-hari orang sungguhan. Aturan, edge case, dan konsekuensi — ruang masalah favorit saya.",
        wide: false,
      },
      {
        title: "Game, dipelajari serius",
        body: "Kebanyakan yang berat cerita. Game terbaik mengajarkan mekanik rumit tanpa manual — desain onboarding paling tajam di mana pun, dan saya mencurinya.",
        wide: true,
      },
    ],
  },
  contact: {
    eyebrow: "Kontak — Medan, ID (GMT+7)",
    title: "Sapa saja.",
    intro:
      "Sedang merekrut untuk peran full-stack, butuh bantuan di sebuah proyek, atau sekadar ingin sepasang mata kedua? Inbox saya terbuka.",
    emailNote: "Paling cepat. Biasanya dibalas dalam sehari.",
    githubNote: "Kodenya, termasuk bagian yang belum sempurna.",
    linkedinNote: "Untuk versi formal dari semua ini.",
    footnote: "Tanpa formulir kontak. Formulir adalah tempat pesan pergi untuk diabaikan.",
    emailLabel: "Email",
  },
};

export const dictionaries: Record<Lang, Dict> = { en, id };
