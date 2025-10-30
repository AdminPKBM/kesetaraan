// File: data.js (Versi BARU v3 - Dengan Template Wawancara & Observasi)

const allData = [
  {
    butirId: "b1",
    butirTitleShort: "Butir 1. Dukungan Sosial Emosional",
    butirTitle: "Pendidik menyediakan dukungan sosial emosional bagi peserta didik dalam proses pembelajaran.",
    isMultiPaket: true,
    indicators: [
      {
        id: "b1_i1",
        title: "1. Interaksi yang setara dan saling menghargai",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`, // (Saya singkat agar tidak terlalu panjang, isinya sama)
        buktiFisik: `
          <ul>
            <li>Foto/video interaksi guru dan siswa (misal: diskusi kelompok, bimbingan).</li>
            <li>Jurnal/catatan harian guru.</li>
            <li>Hasil wawancara (catatan) dengan siswa mengenai sikap guru.</li>
          </ul>
        `,
        rekapDokumen: "Foto/Video Interaksi KBM<br>Jurnal Guru<br>Catatan Wawancara Siswa",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana Bpk/Ibu memastikan semua siswa merasa dihargai?<br>- Bagaimana cara merespon jika siswa berbeda pendapat?<br><br>Wawancara dgn Siswa:<br>- Apakah kamu merasa didengarkan oleh guru?<br>- Apakah guru pernah mengabaikan atau merendahkan pendapatmu?",
        rekapObservasi: "Pendidik merespon pertanyaan/komentar siswa dgn kontak mata & nada suportif.<br>Tidak ada siswa yg diabaikan saat mengacungkan tangan.<br>Pendidik aktif mendekati siswa yg terlihat diam/pasif.<br>Bahasa tubuh pendidik terbuka dan ramah."
      },
      {
        id: "b1_i2",
        title: "2. Interaksi yang membangun pola pikir bertumbuh.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `
          <ul>
            <li>RPP/Modul Ajar yang memuat kalimat motivasi/umpan balik konstruktif.</li>
            <li>Catatan anekdot guru tentang proses belajar siswa.</li>
            <li>Contoh umpan balik tertulis di tugas siswa (fokus pada proses).</li>
          </ul>
        `,
        rekapDokumen: "RPP/Modul Ajar<br>Catatan Anekdot<br>Hasil Penilaian (Umpan Balik)",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana cara Bpk/Ibu merespon siswa yg menjawab salah?<br>- Apa beda memuji 'kamu pintar' dgn 'kamu tekun berlatih'?<br><br>Wawancara dgn Siswa:<br>- Apa yg guru katakan jika kamu salah menjawab atau mendapat nilai jelek?<br>- Apakah kamu didorong untuk mencoba lagi jika gagal?",
        rekapObservasi: "Pendidik memberi umpan balik: 'Bagus, kamu sudah berani mencoba. Ada cara lain?' (Fokus pada proses/upaya, bukan hasil akhir).<br>Tidak menyalahkan siswa yg salah, tapi mengapresiasi usahanya.<br>Mendorong siswa lain utk memberikan tanggapan."
      },
      {
        id: "b1_i3",
        title: "3. Memberi perhatian dan bantuan pada peserta didik yang membutuhkan dukungan lebih/ekstra.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `
          <ul>
            <li>Catatan/jurnal guru mengenai siswa yang perlu perhatian khusus.</li>
            <li>Dokumen program bimbingan dan konseling.</li>
            <li>Bukti komunikasi (WA/buku penghubung) dengan orang tua/wali.</li>
            <li>Dokumen Program Pembelajaran Individual (PPI) jika ada siswa berkebutuhan khusus.</li>
          </ul>
        `,
        rekapDokumen: "Jurnal/Catatan Guru<br>Program & Catatan BK<br>Bukti Komunikasi Orang Tua<br>Dokumen PPI (jika ada)",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana Bpk/Ibu mengidentifikasi siswa yg perlu bantuan lebih?<br>- Strategi apa yg diterapkan untuk siswa tsb?<br>- Apakah ada komunikasi dgn wali/ortu siswa tsb?<br><br>Wawancara dgn Siswa (yg teridentifikasi):<br>- Apakah kamu merasa kesulitan mengikuti pelajaran?<br>- Apakah guru menawarkan bantuan padamu?",
        rekapObservasi: "Pendidik secara proaktif mendekati siswa yg terlihat bingung atau tertinggal.<br>Pendidik memberikan instruksi yg diulang/disederhanakan kpd siswa tsb.<br>Pendidik memberikan waktu ekstra atau pendampingan khusus."
      },
      {
        id: "b1_i4",
        title: "4. Strategi pembelajaran yang membangun keterampilan sosial emosional pada peserta didik.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `
          <ul>
            <li>RPP/Modul Ajar yang mengintegrasikan KSE (misal: teknik STOP, kerja kelompok).</li>
            <li>Materi ajar (video, artikel) yang membahas KSE.</li>
            <li>Foto/video kegiatan (misal: presentasi, role-playing, refleksi diri).</li>
          </ul>
        `,
        rekapDokumen: "RPP/Modul Ajar (Integrasi KSE)<br>Materi Ajar KSE<br>Foto/Video Kegiatan KSE",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Keterampilan sosial emosional apa yg dilatihkan hari ini (misal: empati, kerjasama, mengelola emosi)?<br>- Bagaimana cara melatihnya (teknik STOP, kerja kelompok, dll)?",
        rekapObservasi: "Pendidik memandu siswa melakukan refleksi diri/emosi di awal/akhir KBM.<br>Pendidik menggunakan metode kerja kelompok yg menuntut kolaborasi.<br>Pendidik mencontohkan cara mengelola emosi saat ada kendala teknis."
      }
    ]
  },
  {
    butirId: "b2",
    butirTitleShort: "Butir 2. Manajemen Kelas",
    butirTitle: "Pendidik mengelola kelas untuk menciptakan suasana belajar yang aman, nyaman, dan mendukung tercapainya tujuan pembelajaran.",
    isMultiPaket: true,
    indicators: [
      {
        id: "b2_i1",
        title: "1. Kesepakatan kelas/kelompok yang disusun secara partisipatif.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `
          <ul>
            <li>Foto dokumen "Kesepakatan Kelas" yang terpajang.</li>
            <li>Foto proses pembuatan kesepakatan bersama siswa.</li>
            <li>Dokumen kesepakatan yang ditandatangani guru dan siswa.</li>
          </ul>
        `,
        rekapDokumen: "Foto Kesepakatan Kelas<br>Foto Proses Pembuatan<br>Dokumen Kesepakatan",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Kapan kesepakatan kelas ini dibuat?<br>- Siapa saja yg terlibat dalam penyusunannya?<br><br>Wawancara dgn Siswa:<br>- Apakah kamu ikut membuat aturan/kesepakatan ini?<br>- Apa isi kesepakatan yg kamu ingat?",
        rekapObservasi: "Kesepakatan kelas terpajang jelas di dinding.<br>Pendidik merujuk pada kesepakatan kelas saat ada dinamika (misal: 'Ingat kesepakatan kita tentang menghargai pendapat?').<br>Isi kesepakatan menggunakan kalimat positif."
      },
      {
        id: "b2_i2",
        title: "2. Penegakan disiplin dengan pendekatan positif.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `
          <ul>
            <li>Catatan/jurnal penanganan kasus siswa (misal: menggunakan segitiga restitusi).</li>
            <li>Buku piket/catatan guru tentang tindak lanjut pelanggaran (dialog, bukan hukuman).</li>
            <li>SOP (Standar Operasional Prosedur) penanganan disiplin siswa.</li>
          </ul>
        `,
        rekapDokumen: "Catatan Kasus Siswa<br>Buku Piket/Jurnal Guru<br>SOP Penanganan Disiplin",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Apa yg Bpk/Ibu lakukan jika ada siswa yg melanggar kesepakatan?<br>- Apakah menggunakan hukuman atau konsekuensi?<br>- Pernah dengar/menerapkan segitiga restitusi?",
        rekapObservasi: "Pendidik menangani siswa yg mengganggu dgn tenang, tanpa berteriak/mempermalukan.<br>Pendidik mendekati siswa secara personal (tidak menegur di depan kelas).<br>Pendidik fokus pada solusi ('Apa yg bisa kamu lakukan agar lebih fokus?'), bukan pada kesalahan ('Kenapa kamu ribut?')."
      },
      {
        id: "b2_i3",
        title: "3. Kemampuan pendidik dalam mengelola kegiatan belajar sehingga peserta didik fokus pada aktivitas belajar.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `
          <ul>
            <li>RPP/Modul Ajar (menunjukkan manajemen waktu & variasi kegiatan).</li>
            <li>Instrumen dan hasil supervisi akademik oleh Kepala Sekolah/Pengelola.</li>
            <li>Foto/video yang menunjukkan siswa fokus dan terlibat aktif.</li>
          </ul>
        `,
        rekapDokumen: "RPP/Modul Ajar<br>Hasil Supervisi Akademik<br>Foto/Video KBM Kondusif",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Strategi apa yg disiapkan jika siswa mulai terlihat bosan/tidak fokus?<br>- Bagaimana cara mengelola transisi antar kegiatan?",
        rekapObservasi: "Pendidik memberikan instruksi yg jelas & ringkas.<br>Pendidik menggunakan variasi aktivitas (diskusi, kuis, nonton video).<br>Pendidik mengelola waktu KBM sesuai alokasi di RPP.<br>Sebagian besar siswa terlihat aktif terlibat (mencatat, bertanya, berdiskusi)."
      }
    ]
  },
  {
    butirId: "b3",
    butirTitleShort: "Butir 3. Pengelolaan Pembelajaran",
    butirTitle: "Pendidik mengelola proses pembelajaran secara efektif dan bermakna.",
    isMultiPaket: true,
    indicators: [
       {
        id: "b3_i1",
        title: "1. Perencanaan yang memadai untuk mendukung pelaksanaan pembelajaran.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Kumpulan RPP/Modul Ajar.</li><li>Program Tahunan (Prota).</li><li>Program Semester (Promes).</li></ul>`,
        rekapDokumen: "RPP/Modul Ajar<br>Prota<br>Promes",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Kapan RPP/Modul Ajar ini dibuat?<br>- Apakah RPP ini dibuat sendiri atau adaptasi?<br>- Apakah ada kendala dalam menyusun RPP yg sesuai dgn kondisi siswa kesetaraan?",
        rekapObservasi: "Telaah RPP/Modul Ajar:<br>- Kelengkapan komponen (Tujuan, Kegiatan, Asesmen).<br>- Keselarasan antara 3 komponen tsb.<br>- Apakah kegiatan belajar sudah berpusat pada siswa?"
      },
      {
        id: "b3_i2",
        title: "2. Penilaian formatif digunakan sebagai umpan balik dalam proses pembelajaran.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Contoh instrumen penilaian formatif (kuis, LKPD, rubrik observasi).</li><li>Contoh hasil pekerjaan siswa yang diberi umpan balik/catatan perbaikan.</li><li>Jurnal refleksi guru setelah mengajar.</li></ul>`,
        rekapDokumen: "Instrumen Penilaian Formatif<br>Hasil Tugas Siswa (dgn umpan balik)<br>Jurnal Refleksi Guru",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Kapan Bpk/Ibu melakukan penilaian formatif?<br>- Umpan balik seperti apa yg diberikan ke siswa?<br>- Bagaimana hasil formatif ini digunakan utk perbaikan pembelajaran berikutnya?",
        rekapObservasi: "Pendidik melakukan asesmen formatif di tengah KBM (misal: kuis singkat, tanya jawab).<br>Pendidik memberikan umpan balik langsung kpd siswa ('Jawabanmu sudah benar, tapi bisa dijelaskan alasannya?').<br>Pendidik mengumpulkan LKPD dan memberi catatan."
      },
      {
        id: "b3_i3",
        title: "3. Penilaian sumatif dilakukan dengan metode yang beragam menggunakan instrumen yang sesuai dengan tujuan pembelajaran.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Kumpulan instrumen penilaian sumatif (soal tes, rubrik proyek, rubrik portofolio).</li><li>SK/Pedoman Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).</li><li>Contoh hasil karya (portofolio, proyek) siswa.</li></ul>`,
        rekapDokumen: "Instrumen Penilaian Sumatif<br>Dokumen KKTP<br>Portofolio/Proyek Siswa",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Apa saja bentuk penilaian sumatif yg digunakan (selain tes tulis)?<br>- Bagaimana kesesuaian antara instrumen (misal: rubrik) dgn tujuan pembelajaran?<br>- Adakah penilaian proyek atau portofolio?",
        rekapObservasi: "Telaah Instrumen Sumatif:<br>- Variasi bentuk (tes, proyek, unjuk kerja).<br>- Ketersediaan rubrik penilaian yg jelas utk asesmen non-tes.<br>- Kesesuaian soal/tugas dgn TP/CP."
      },
      {
        id: "b3_i4",
        title: "4. Hasil penilaian dilaporkan secara informatif untuk mendorong tindak lanjut perbaikan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Contoh rapor/laporan hasil belajar yang berisi deskripsi/narasi.</li><li>Dokumen program tindak lanjut (remedial dan pengayaan).</li><li>Notulen/undangan rapat sosialisasi hasil belajar dengan orang tua.</li></ul>`,
        rekapDokumen: "Contoh Rapor (Deskriptif)<br>Dokumen Remedial & Pengayaan<br>Notulen Rapat Orang Tua",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana bentuk laporan hasil belajar siswa? Hanya angka atau ada deskripsi?<br>- Apa tindak lanjut setelah hasil penilaian keluar (remedial/pengayaan)?<br><br>Wawancara dgn Siswa/Ortu:<br>- Apakah rapornya mudah dipahami?<br>- Apakah ada saran perbaikan dari guru?",
        rekapObservasi: "Telaah Rapor:<br>- Adanya deskripsi kualitatif (narasi) pencapaian siswa.<br>- Adanya informasi ttg kompetensi yg sudah dicapai dan yg perlu ditingkatkan.<br>Telaah Dokumen Remedial:<br>- Ada daftar siswa & program remedial yg jelas."
      },
      {
        id: "b3_i5",
        title: "5. Praktik pembelajaran yang memfasilitasi peserta didik untuk menganalisis, mengutarakan gagasan, dan menghubungkan pengetahuannya dengan pengetahuan baru dan konteks aplikatif..",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>RPP/Modul Ajar yang menggunakan model (PBL, PjBL, Inkuiri).</li><li>Contoh LKPD atau tugas yang berisi pertanyaan HOTS.</li><li>Hasil karya siswa (makalah, poster, presentasi) yang menunjukkan analisis.</li></ul>`,
        rekapDokumen: "RPP (PBL/PjBL/Inkuiri)<br>LKPD/Tugas HOTS<br>Hasil Karya (Analisis) Siswa",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Kegiatan apa yg dirancang agar siswa bisa menganalisis?<br>- Bagaimana Bpk/Ibu memancing siswa mengutarakan gagasan?<br>- Bagaimana materi ini dihubungkan dgn kehidupan sehari-hari siswa?",
        rekapObservasi: "Pendidik menggunakan pertanyaan pemantik (HOTS) yg mendorong analisis ('Mengapa hal itu terjadi?', 'Apa dampaknya jika...?').<br>Siswa diberi kesempatan presentasi/diskusi.<br>Pendidik memberi contoh penerapan materi dlm konteks nyata (misal: menghitung diskon saat belajar persentase)."
      }
    ]
  },
   {
    butirId: "b4",
    butirTitleShort: "Butir 4. Fasilitasi Pembelajaran Efektif",
    butirTitle: "Pendidik memfasilitasi pembelajaran yang efektif dalam membangun keimanan, ketakwaan, komitmen kebangsaan, kemampuan bernalar dan memecahkan masalah, serta karakter dan kompetensi lainnya yang relevan bagi peserta didik.",
    isMultiPaket: true,
    indicators: [
       {
        id: "b4_i1",
        title: "1. Pembelajaran yang efektif dalam menguatkan keimanan dan ketakwaan peserta didik kepada Tuhan YME untuk membentuk akhlak yang mulia.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Jadwal kegiatan keagamaan rutin (doa bersama, ibadah).</li><li>Foto/video kegiatan keagamaan.</li><li>RPP/Modul Ajar (terutama Pendidikan Agama) yang fokus pada pembentukan akhlak.</li></ul>`,
        rekapDokumen: "Jadwal Kegiatan Keagamaan<br>Foto/Video Kegiatan<br>RPP/Modul Ajar Agama",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana nilai keimanan diintegrasikan dlm mapel non-agama?<br>- Selain doa, kegiatan apa lagi yg membangun akhlak?<br><br>Wawancara dgn Siswa:<br>- Apakah guru sering mengingatkan untuk jujur, amanah, dll?",
        rekapObservasi: "KBM diawali dan diakhiri dgn doa.<br>Pendidik mengaitkan materi dgn nilai spiritual (misal: menjaga alam saat belajar IPA).<br>Pendidik mencontohkan akhlak (jujur, sabar, adil) selama KBM."
      },
      {
        id: "b4_i2",
        title: "2. Pembelajaran yang efektif dalam menguatkan kecintaan terhadap sejarah, kekayaan budaya, alam Indonesia, pemikiran, dan karya anak bangsa.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>RPP/Modul Ajar (IPS, PKn, Sejarah) yang mengintegrasikan konten lokal/kebangsaan.</li><li>Foto/video kegiatan (peringatan hari besar nasional, penggunaan batik).</li><li>Dokumentasi kunjungan (museum, situs budaya) atau bakti sosial.</li></ul>`,
        rekapDokumen: "RPP (Integrasi Kebangsaan)<br>Foto/Video Kegiatan Nasionalisme<br>Laporan Kunjungan/Bakti Sosial",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana cara mengenalkan budaya lokal/karya anak bangsa dlm KBM?<br>- Apakah ada proyek/tugas yg terkait dgn hal ini?",
        rekapObservasi: "Pendidik menggunakan contoh dari konteks Indonesia.<br>Pendidik mengapresiasi karya/pemikiran tokoh bangsa.<br>Ada kegiatan (misal: menyanyikan lagu nasional, peringatan hari besar) yg menumbuhkan nasionalisme."
      },
      {
        id: "b4_i3",
        title: "3. Pembelajaran yang efektif dalam memfasilitasi peserta didik untuk mengembangkan kemampuan bernalar dan memecahkan masalah.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>RPP/Modul Ajar (PBL/PjBL).</li><li>Contoh soal/tugas HOTS.</li><li>Hasil proyek/karya siswa yang memecahkan masalah.</li></ul>`,
        rekapDokumen: "RPP (PBL/PjBL)<br>Instrumen Penilaian HOTS<br>Hasil Proyek Siswa",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Model pembelajaran apa yg dipakai utk melatih nalar (PBL/PjBL)?<br>- Bagaimana Bpk/Ibu membimbing siswa saat mereka kesulitan memecahkan masalah?",
        rekapObservasi: "Pendidik menyajikan studi kasus/masalah nyata di awal KBM.<br>Siswa berdiskusi dalam kelompok utk mencari solusi.<br>Pendidik berperan sbg fasilitator, bukan pemberi jawaban."
      },
      {
        id: "b4_i4",
        title: "4. Pembelajaran yang efektif dalam membangun kompetensi dan/atau karakter peserta didik sesuai kekhasan satuan pendidikan penyelenggara program pendidikan kesetaraan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen KOSP yang menyebutkan kekhasan (misal: <i>life skills</i>, vokasi).</li><li>Modul/jadwal pelatihan <i>life skills</i> / keterampilan vokasi.</li><li>Foto/video pameran hasil karya <i>life skills</i> siswa.</li></ul>`,
        rekapDokumen: "KOSP (Bagian Kekhasan)<br>Modul/Jadwal <i>Life Skills</i><br>Foto/Video Pameran Karya",
        rekapWawancara: "Wawancara dgn Pendidik/Pengelola:<br>- Apa kekhasan program di sini (misal: kewirausahaan, vokasi)?<br>- Bagaimana kekhasan itu diintegrasikan dlm pembelajaran sehari-hari?<br><br>Wawancara dgn Siswa:<br>- Keterampilan apa yg kamu dapatkan di sini selain pelajaran biasa?",
        rekapObservasi: "Telaah KOSP: Ada visi/misi/program yg menunjukkan kekhasan.<br>Observasi KBM: Adanya muatan lokal/vokasi/kewirausahaan yg diajarkan.<br>Observasi Lingkungan: Adanya pameran karya siswa hasil program kekhasan."
      }
    ]
  },
  {
    butirId: "b5",
    butirTitleShort: "Butir 5. Budaya Refleksi & Pengembangan",
    butirTitle: "Penyelenggara program pendidikan kesetaraan menerapkan budaya refleksi untuk perbaikan pembelajaran yang berpusat pada peserta didik, serta evaluasi kinerja untuk rencana pengembangan profesional bagi pendidik dan tenaga kependidikan.",
    isMultiPaket: false,
    indicators: [
       {
        id: "b5_i1",
        title: "1. Fasilitasi kepada pendidik dan tenaga kependidikan untuk melakukan refleksi kinerja dalam rangka perbaikan pembelajaran.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Jadwal/Agenda rapat evaluasi rutin.</li><li>Notulen rapat yang berisi agenda refleksi pembelajaran.</li><li>Instrumen refleksi diri yang diisi oleh pendidik.</li></ul>`,
        rekapDokumen: "Jadwal Rapat Evaluasi<br>Notulen Rapat Refleksi<br>Instrumen Refleksi Diri Guru",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Kapan forum refleksi ini diadakan?<br>- Apa yg dibahas dlm refleksi?<br><br>Wawancara dgn Pendidik:<br>- Apakah Bpk/Ibu rutin melakukan refleksi?<br>- Apa tindak lanjut dari refleksi tsb?",
        rekapObservasi: "Telaah Notulen: Adanya agenda 'Refleksi Pembelajaran'.<br>Telaah Instrumen: Ada format/lembar refleksi yg diisi pendidik."
      },
      {
        id: "b5_i2",
        title: "2. Evaluasi kinerja dalam rangka meningkatkan kualitas pembelajaran yang dilakukan oleh penyelenggara secara berkala dan sistematis.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>SK Tim Penjaminan Mutu (TPM) (jika ada).</li><li>Jadwal dan instrumen supervisi akademik.</li><li>Laporan hasil supervisi dan tindak lanjutnya.</li></ul>`,
        rekapDokumen: "SK TPM (jika ada)<br>Jadwal & Instrumen Supervisi<br>Laporan Hasil Supervisi",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Bagaimana mekanisme supervisi/evaluasi kinerja guru?<br>- Siapa yg melakukan supervisi?<br>- Apa instrumen yg digunakan?",
        rekapObservasi: "Telaah Laporan Supervisi:<br>- Adanya catatan/temuan hasil supervisi.<br>- Adanya rekomendasi perbaikan.<br>- Adanya tanda tangan supervisor dan yg disupervisi."
      },
      {
        id: "b5_i3",
        title: "3. Program pengembangan profesional pendidik untuk peningkatan kualitas pembelajaran telah dilakukan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Program/rencana PKB (Pengembangan Keprofesian Berkelanjutan) lembaga.</li><li>Laporan pelaksanaan PKB (IHT, workshop).</li><li>Sertifikat/surat tugas keikutsertaan pendidik dalam pelatihan.</li><li>Dokumentasi (foto, notulen) kegiatan komunitas belajar (Kombel) internal.</li></ul>`,
        rekapDokumen: "Program PKB Lembaga<br>Laporan IHT/Workshop<br>Sertifikat Pelatihan Guru<br>Dokumentasi Kombel",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Program pengembangan apa yg sudah diikuti pendidik tahun ini?<br>- Apakah program tsb sesuai dgn hasil evaluasi kinerja?<br><br>Wawancara dgn Pendidik:<br>- Pelatihan apa yg Bpk/Ibu ikuti?<br>- Bagaimana dampaknya ke cara mengajar?",
        rekapObservasi: "Telaah Program PKB: Ada daftar kebutuhan & rencana pelatihan.<br>Telaah Sertifikat: Relevansi sertifikat dgn kebutuhan mengajar."
      },
      {
        id: "b5_i4",
        title: "4. Pengelolaan pendidik dan tenaga kependidikan yang efektif dan akuntabel dalam hal pemberian penghargaan atau sanksi berbasis kinerja.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>SOP atau pedoman tentang manajemen kinerja guru.</li><li>Dokumen penilaian kinerja pendidik (misal: PKG).</li><li>Bukti pemberian penghargaan (sertifikat, insentif) atau sanksi (surat teguran).</li></ul>`,
        rekapDokumen: "SOP Manajemen Kinerja<br>Hasil Penilaian Kinerja (PKG)<br>Bukti <i>Reward/Punishment</i>",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Atas dasar apa pendidik mendapat penghargaan/sanksi?<br>- Bagaimana transparansi prosesnya?<br><br>Wawancara dgn Pendidik:<br>- Apakah Bpk/Ibu tahu apa yg dinilai dari kinerja Anda?<br>- Apakah ada sistem penghargaan yg adil?",
        rekapObservasi: "Telaah SOP: Adanya kriteria kinerja yg jelas.<br>Telaah Bukti: Ada SK/surat/bukti transfer insentif yg sesuai dgn penilaian kinerja."
      }
    ]
  },
  {
    butirId: "b6",
    butirTitleShort: "Butir 6. Layanan Partisipatif & Kolaboratif",
    isMultiPaket: false,
    butirTitle: "Penyelenggara program pendidikan kesetaraan menghadirkan layanan belajar yang partisipatif dan kolaboratif untuk tercapainya visi dan misi.",
    indicators: [
       {
        id: "b6_i1",
        title: "1. Penyelenggara program pendidikan kesetaraan memiliki visi dan misi yang jelas serta mengkomunikasikannya kepada para pemangku kepentingan .",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen Visi, Misi, dan Tujuan lembaga.</li><li>Foto pajangan Visi-Misi di tempat strategis.</li><li>Notulen/foto sosialisasi Visi-Misi kepada warga belajar dan orang tua.</li></ul>`,
        rekapDokumen: "Dokumen Visi-Misi-Tujuan<br>Foto Pajangan Visi-Misi<br>Notulen Sosialisasi",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Apa visi-misi lembaga ini?<br>- Bagaimana cara menyosialisasikannya?<br><br>Wawancara dgn Pendidik/Siswa:<br>- Apakah Anda tahu visi-misi PKBM ini?",
        rekapObservasi: "Visi-misi terpajang di dinding kantor/ruang belajar.<br>Visi-misi relevan dgn kondisi pendidikan kesetaraan."
      },
      {
        id: "b6_i2",
        title: "2. Adanya kolaborasi atau kemitraan dengan berbagai pihak (termasuk orang tua/wali, mitra, dudi, dst) dalam rangka mendukung penyelenggaraan layanan pendidikan secara efektif.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen MoU/PKS dengan mitra (DUDI, instansi, komunitas).</li><li>Undangan/notulen rapat dengan orang tua/wali (komite).</li><li>Laporan kegiatan yang melibatkan mitra atau orang tua.</li></ul>`,
        rekapDokumen: "MoU/PKS dengan Mitra<br>Notulen Rapat Komite/Ortu<br>Laporan Kegiatan Kemitraan",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Mitra siapa saja yg sudah bekerjasama?<br>- Apa bentuk kerjasamanya (magang, narasumber)?<br>- Bagaimana pelibatan orang tua?",
        rekapObservasi: "Telaah MoU: Ada daftar mitra yg jelas dan ruang lingkup kerjasama.<br>Telaah Laporan: Ada foto/laporan kegiatan yg melibatkan mitra/ortu."
      },
      {
        id: "b6_i3",
        title: "3. Pelaksanaan evaluasi/refleksi berbasis data yang melibatkan berbagai pihak yang relevan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Instrumen survei/evaluasi untuk orang tua, siswa, atau mitra.</li><li>Laporan hasil survei/evaluasi.</li><li>Notulen rapat evaluasi yang mengundang perwakilan pemangku kepentingan.</li></ul>`,
        rekapDokumen: "Instrumen Survei (Siswa, Ortu, Mitra)<br>Laporan Hasil Survei<br>Notulen Rapat Evaluasi",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Bagaimana cara mengevaluasi program?<br>- Siapa saja yg dilibatkan utk memberi masukan (survei)?",
        rekapObservasi: "Telaah Laporan Hasil Survei: Ada data (grafik/persentase) kepuasan/masukan dari siswa/ortu/mitra.<br>Telaah Notulen: Ada perwakilan ortu/mitra dlm rapat evaluasi."
      },
      {
        id: "b6_i4",
        title: "4. Perencanaan kegiatan tahunan dilakukan berdasarkan data yang diperoleh dari evaluasi/refleksi.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen RKT (Rencana Kerja Tahunan) atau RKAS/RKA.</li><li>Dokumen Evaluasi Diri Satuan Pendidikan (EDS) atau Rapor Pendidikan.</li><li>Notulen rapat penyusunan RKT/RKAS yang merujuk pada hasil evaluasi.</li></ul>`,
        rekapDokumen: "Dokumen RKT/RKAS<br>EDS / Rapor Pendidikan<br>Notulen Rapat Penyusunan RKT",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Apa dasar penyusunan RKT/RKAS tahun ini?<br>- Apakah menggunakan data Rapor Pendidikan atau hasil survei (poin 6.3)?",
        rekapObservasi: "Telaah RKT/RKAS: Ada program kerja yg menjawab temuan/kelemahan di EDS/Rapor Pendidikan.<br>Telaah Notulen: Rapat penyusunan RKT membahas hasil evaluasi tahun sebelumnya."
      }
    ]
  },
  {
    butirId: "b7",
    butirTitleShort: "Butir 7. Pengelolaan Anggaran",
    isMultiPaket: false,
    butirTitle: "Penyelenggara program pendidikan kesetaraan memastikan pengelolaan anggaran dilakukan sesuai perencanaan berdasarkan refleksi yang berbasis data secara transparan dan akuntabel.",
    indicators: [
       {
        id: "b7_i1",
        title: "1. Anggaran program pendidikan kesetaraan dilaksanakan sesuai dengan perencanaan tahunan",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen RKA (Rencana Kegiatan dan Anggaran).</li><li>Laporan Keuangan atau LPJ (misal: Laporan BOS Kesetaraan).</li><li>Bukti kesesuaian antara RKA dan LPJ.</li></ul>`,
        rekapDokumen: "Dokumen RKA<br>Laporan Keuangan/LPJ (BOS)",
        rekapWawancara: "Wawancara dgn Pengelola/Bendahara:<br>- Apakah semua kegiatan yg didanai sudah sesuai RKA?<br>- Bagaimana jika ada pergeseran anggaran?",
        rekapObservasi: "Telaah RKA vs LPJ: Kesesuaian pos anggaran dan realisasi.<br>Adanya bukti/nota/kuitansi yg lengkap pada LPJ."
      },
      {
        id: "b7_i2",
        title: "2. Rencana anggaran program pendidikan kesetaraan menunjukkan sumber pendanaan serta alokasi pemanfaatannya.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen RKA yang rinci (menunjukkan sumber dana dan alokasi pemanfaatan).</li></ul>`,
        rekapDokumen: "Dokumen RKA Rinci",
        rekapWawancara: "Wawancara dgn Pengelola/Bendahara:<br>- Sumber dana PKBM dari mana saja?<br>- Prioritas alokasi anggaran untuk apa?",
        rekapObservasi: "Telaah Dokumen RKA:<br>- Ada kolom sumber dana (BOS, Swadaya, Mitra).<br>- Ada rincian alokasi (Honor, Sarpras, Kegiatan Siswa)."
      },
      {
        id: "b7_i3",
        title: "3. Ada laporan berkala tentang pemanfaatan anggaran program pendidikan kesetaraan kepada pemangku kepentingan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Laporan keuangan (bulanan, triwulan, tahunan).</li><li>Bukti publikasi laporan (foto di papan pengumuman, tautan website).</li><li>Notulen rapat penyampaian laporan anggaran.</li></ul>`,
        rekapDokumen: "Laporan Keuangan Berkala<br>Bukti Publikasi Laporan<br>Notulen Rapat Laporan",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Kapan dan bagaimana laporan keuangan disampaikan (ke Ortu/Yayasan)?<br><br>Wawancara dgn Ortu/Wali:<br>- Apakah pernah menerima laporan keuangan dari PKBM?",
        rekapObservasi: "Observasi Mading/Website: Ada pajangan/info grafis laporan keuangan.<br>Telaah Notulen: Ada agenda penyampaian LPJ dlm rapat dgn komite/ortu."
      }
    ]
  },
  {
    butirId: "b8",
    butirTitleShort: "Butir 8. Pengelolaan Sarpras",
    isMultiPaket: false,
    butirTitle: "Penyelenggara program pendidikan kesetaraan memimpin pengelolaan sarana dan prasarana sesuai dengan kebutuhan pembelajaran yang berpusat pada peserta didik.",
    indicators: [
       {
        id: "b8_i1",
        title: "1. Pemenuhan sarana dan prasarana yang sesuai dengan kebutuhan belajar peserta didik (dapat disediakan secara mandiri maupun bermitra).",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Daftar inventaris barang (sarana) dan data lahan/bangunan (prasarana).</li><li>Foto kondisi sarpras (ruang belajar, toilet, perpustakaan, alat peraga).</li><li>Jika bermitra: Dokumen MoU/PKS pemanfaatan sarpras.</li></ul>`,
        rekapDokumen: "Daftar Inventaris Barang (KIR)<br>Data Prasarana<br>Foto Kondisi Sarpras<br>MoU/PKS Pemanfaatan Sarpras",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Sarpras apa saja yg dimiliki?<br>- Apakah ada sarpras yg meminjam/bermitra (misal: lab komputer, bengkel)?<br>- Apakah sudah sesuai kebutuhan siswa?",
        rekapObservasi: "Observasi Fisik:<br>- Ketersediaan & kelayakan ruang kelas, toilet, kantor.<br>- Ketersediaan alat peraga/media belajar.<br>- Jika bermitra, cek kondisi sarpras mitra (jika memungkinkan)."
      },
      {
        id: "b8_i2",
        title: "2. Pengelolaan sarana dan prasarana secara optimal.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Jadwal penggunaan ruang/sarana.</li><li>Buku/catatan pemeliharaan dan perbaikan sarpras.</li><li>SOP peminjaman alat/sarana.</li></ul>`,
        rekapDokumen: "Jadwal Penggunaan Ruang<br>Buku Pemeliharaan<br>SOP Peminjaman",
        rekapWawancara: "Wawancara dgn Pengelola/Penanggung Jawab Sarpras:<br>- Siapa yg bertanggung jawab atas sarpras?<br>- Bagaimana jadwal pemeliharaan/perbaikannya?<br>- Bagaimana prosedur peminjaman alat?",
        rekapObservasi: "Observasi Fisik: Sarpras terlihat terawat dan bersih.<br>Telaah Dokumen: Ada buku catatan pemeliharaan (terisi).<br>Telaah Jadwal: Jadwal penggunaan ruang terisi optimal."
      }
    ]
  },
  {
    butirId: "b9",
    butirTitleShort: "Butir 9. Pengembangan Kurikulum",
    isMultiPaket: false,
    butirTitle: "Penyelenggara program pendidikan kesetaraan mengembangkan kurikulum di tingkat satuan pendidikan yang selaras dengan kurikulum nasional.",
    indicators: [
       {
        id: "b9_i1",
        title: "1. Kepemilikan kurikulum program pendidikan kesetaraan sebagai rujukan penyelenggaraan proses proses pembelajaran",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen KOSP (Kurikulum Operasional Satuan Pendidikan) yang sudah disahkan.</li></ul>`,
        rekapDokumen: "Dokumen KOSP (Sah)",
        rekapWawancara: "Wawancara dgn Pengelola/TPK:<br>- Apakah PKBM sudah memiliki KOSP?<br>- Kapan disahkan dan oleh siapa?",
        rekapObservasi: "Telaah Dokumen KOSP:<br>- Ada lembar pengesahan (dari Pengelola & Penilik/Dinas)."
      },
      {
        id: "b9_i2",
        title: "2. Adanya mekanisme evaluasi terhadap penerapan kurikulum",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>SK Tim Pengembang Kurikulum (TPK).</li><li>Notulen/laporan rapat evaluasi kurikulum.</li><li>Instrumen evaluasi kurikulum (misal: survei ke pendidik/siswa).</li></ul>`,
        rekapDokumen: "SK Tim Pengembang Kurikulum<br>Notulen Rapat Evaluasi Kurikulum<br>Instrumen Evaluasi",
        rekapWawancara: "Wawancara dgn Pengelola/TPK:<br>- Kapan evaluasi kurikulum dilakukan?<br>- Siapa yg terlibat dlm TPK?<br>- Apa saja yg dievaluasi?",
        rekapObservasi: "Telaah Notulen: Ada agenda rapat evaluasi KOSP.<br>Telaah Instrumen: Ada kuesioner/lembar evaluasi yg diisi guru/siswa ttg kurikulum."
      },
      {
        id: "b9_i3",
        title: "3. Kurikulum program pendidikan kesetaraan relevan dengan kebutuhan belajar peserta didik, dan visimisi program pendidikan kesetaraan di satuan pendidikan yang bersangkutan",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Dokumen KOSP (bagian "Karakteristik Satuan Pendidikan").</li><li>Dokumen KOSP yang menunjukkan keselarasan visi-misi dan struktur kurikulum (misal: muatan lokal, <i>life skills</i>).</li></ul>`,
        rekapDokumen: "Dokumen KOSP (Bab Analisis Karakteristik & Kebutuhan)",
        rekapWawancara: "Wawancara dgn Pengelola/TPK:<br>- Apa kebutuhan utama peserta didik di sini (usia kerja, putus sekolah)?<br>- Bagaimana KOSP menjawab kebutuhan itu (misal: dgn *life skills*)?<br>- Bagaimana KOSP selaras dgn Visi-Misi?",
        rekapObservasi: "Telaah KOSP:<br>- Adanya Bab Analisis Karakteristik/Kebutuhan Siswa.<br>- Adanya program muatan lokal/kekhasan yg relevan.<br>- Ada benang merah antara Visi-Misi dgn program di struktur kurikulum."
      }
    ]
  },
  {
    butirId: "b10",
    butirTitleShort: "Butir 10. Iklim Kebinekaan",
    isMultiPaket: false,
    butirTitle: "Program pendidikan kesetaraan memastikan terbangunnya iklim kebinekaan bagi peserta didik, pendidik, dan tenaga kependidikan.",
    indicators: [
       {
        id: "b10_i1",
        title: "1. Iklim lingkungan belajar membangun sikap positif terhadap keberagaman",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Tata tertib/kode etik yang mempromosikan toleransi dan anti-diskriminasi.</li><li>Foto/video kegiatan perayaan keberagaman (hari besar, pekan budaya).</li><li>RPP/Modul Ajar yang mengintegrasikan nilai-nilai kebinekaan.</li></ul>`,
        rekapDokumen: "Tata Tertib/Kode Etik<br>Foto/Video Kegiatan Keberagaman<br>RPP (Integrasi Kebinekaan)",
        rekapWawancara: "Wawancara dgn Pendidik/Siswa:<br>- Bagaimana sikap Anda jika ada teman yg berbeda suku/agama/status?<br>- Apakah ada program yg merayakan keberagaman?",
        rekapObservasi: "Observasi Interaksi: Siswa dari berbagai latar belakang terlihat membaur.<br>Observasi Lingkungan: Tidak ada simbol/grafiti SARA.<br>Telaah Tata Tertib: Ada pasal tentang anti-diskriminasi."
      },
      {
        id: "b10_i2",
        title: "2. Iklim lingkungan belajar memfasilitasi hak sipil warga satuan pendidikan khususnya program pendidikan kesetaraan untuk beribadah dan berkegiatan secara setara..",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Jadwal/kebijakan yang memberi ruang untuk ibadah.</li><li>Foto/dokumentasi fasilitas ibadah atau kegiatan ibadah.</li></ul>`,
        rekapDokumen: "Jadwal/Kebijakan Ibadah<br>Foto Fasilitas/Kegiatan Ibadah",
        rekapWawancara: "Wawancara dgn Pendidik/Siswa:<br>- Apakah siswa dari agama non-mayoritas mendapat fasilitas ibadah/kegiatan?<br>- Apakah ada diskriminasi hak berpendapat?",
        rekapObservasi: "Ketersediaan fasilitas ibadah (mushola).<br>Adanya kebijakan yg memberi izin/dispensasi utk kegiatan ibadah agama lain."
      },
      {
        id: "b10_i3",
        title: "3. Iklim lingkungan belajar membangun kesadaran terhadap kesetaraan gender.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Tata tertib yang tidak bias gender.</li><li>Dokumentasi (foto) yang menunjukkan peran setara (piket, kepengurusan).</li><li>Materi/program yang membahas kesetaraan gender.</li></ul>`,
        rekapDokumen: "Tata Tertib<br>Foto Kegiatan (Peran Setara)<br>Materi/Program Kesetaraan Gender",
        rekapWawancara: "Wawancara dgn Pendidik/Siswa:<br>- Apakah ada tugas yg hanya boleh utk laki-laki/perempuan?<br>- Bagaimana pembagian peran di kepengurusan/kelompok?",
        rekapObservasi: "Observasi KBM: Pendidik memberi kesempatan yg sama kpd siswa laki-laki & perempuan.<br>Observasi Foto: Struktur organisasi/piket kelas menunjukkan peran yg setara."
      }
    ]
  },
  {
    butirId: "b11",
    butirTitleShort: "Butir 11. Lingkungan Belajar Inklusif",
    isMultiPaket: false,
    butirTitle: "Program pendidikan kesetaraan menyediakan lingkungan belajar yang inklusif untuk memenuhi kebutuhan belajar peserta didik yang beragam.",
    indicators: [
       {
        id: "b11_i1",
        title: "1. Kebijakan dan/atau prosedur yang menghadirkan lingkungan belajar yang inklusif .",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>SOP penerimaan peserta didik baru (PPDB) yang tidak diskriminatif.</li><li>Tata tertib yang menjamin hak semua siswa.</li></ul>`,
        rekapDokumen: "SOP PPDB<br>Tata Tertib",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Apakah PKBM ini menerima siswa berkebutuhan khusus (ABK)?<br>- Bagaimana kebijakan PPDB, apakah terbuka untuk semua?",
        rekapObservasi: "Telaah SOP PPDB: Tidak ada syarat yg diskriminatif (terkait SARA, fisik, kecuali utk program vokasi tertentu yg relevan)."
      },
      {
        id: "b11_i2",
        title: "2. Tersedianya program bagi pendidik, orang tua/wali/ masyarakat, dan peserta didik untuk menghadirkan lingkungan belajar yang inklusif",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>RPP/Modul Ajar yang menerapkan pembelajaran berdiferensiasi.</li><li>Notulen/foto sosialisasi tentang inklusivitas.</li><li>Program/layanan untuk siswa berkebutuhan khusus (jika ada).</li></ul>`,
        rekapDokumen: "RPP (Berdiferensiasi)<br>Notulen/Foto Sosialisasi Inklusif<br>Program Layanan Siswa (ABK)",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana cara mengajar jika ada siswa ABK atau siswa dgn kemampuan beragam?<br>- Apakah Bpk/Ibu menerapkan pembelajaran berdiferensiasi?",
        rekapObservasi: "Telaah RPP: Adanya diferensiasi (konten, proses, atau produk).<br>Observasi KBM: Pendidik memberi perlakuan/tugas berbeda sesuai kebutuhan siswa."
      }
    ]
  },
  {
    butirId: "b12",
    butirTitleShort: "Butir 12. Iklim Aman Psikis (Anti Perundungan)",
    isMultiPaket: false,
    butirTitle: "Program pendidikan kesetaraan mewujudkan iklim lingkungan belajar yang aman secara psikis bagi peserta didik, pendidik, dan tenaga kependidikan.",
    indicators: [
       {
        id: "b12_i1",
        title: "1. Kebijakan dalam pencegahan dan penanganan perundungan dan kekerasan",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>SK Tim TPPK (Tim Pencegahan dan Penanganan Kekerasan).</li><li>SOP/Alur pelaporan dan penanganan kasus.</li><li>Tata tertib yang memuat sanksi jelas untuk perundungan.</li></ul>`,
        rekapDokumen: "SK Tim TPPK<br>SOP Penanganan Kekerasan<br>Tata Tertib (Sanksi Perundungan)",
        rekapWawancara: "Wawancara dgn Pengelola/Pendidik:<br>- Apakah sudah ada Tim TPPK?<br>- Bagaimana alur pelaporan jika ada perundungan/kekerasan?<br><br>Wawancara dgn Siswa:<br>- Kamu tahu harus lapor ke siapa jika di-bully?",
        rekapObservasi: "Telaah SK TPPK: Ada SK yg masih berlaku.<br>Telaah SOP: Ada alur/bagan penanganan kasus.<br>Telaah Tata Tertib: Ada pasal spesifik ttg sanksi perundungan."
      },
      {
        id: "b12_i2",
        title: "2. Program bagi warga satuan pendidikan khususnya pada program pendidikan kesetaraan dalam pencegahan dan penanganan perundungan dan kekerasan",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Poster/banner anti-perundungan di lingkungan sekolah.</li><li>Notulen/foto/materi sosialisasi (kampanye) anti-perundungan.</li><li>Catatan penanganan kasus (jika ada) sesuai SOP.</li></ul>`,
        rekapDokumen: "Poster/Media KIE Anti-Perundungan<br>Dokumentasi Sosialisasi/Kampanye<br>Catatan Penanganan Kasus",
        rekapWawancara: "Wawancara dgn Pengelola/Pendidik:<br>- Program apa yg sudah dilakukan utk mencegah perundungan?<br>- Apakah ada sosialisasi/kampanye?",
        rekapObservasi: "Observasi Lingkungan: Ada poster/banner anti-perundungan.<br>Telaah Dokumentasi: Ada foto/notulen kegiatan sosialisasi."
      }
    ]
  },
  {
    butirId: "b13",
    butirTitleShort: "Butir 13. Keselamatan Fisik",
    isMultiPaket: false,
    butirTitle: "Program pendidikan kesetaraan memastikan keselamatan peserta didik, pendidik, dan tenaga kependidikan.",
    indicators: [
       {
        id: "b13_i1",
        title: "1. Iklim Lingkungan belajar yang menjaga keselamatan warga satuan Pendidikan khususnya pada program Pendidikan kesetaraan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Foto kondisi fisik bangunan yang aman (tidak bocor, tidak ada kabel terkelupas).</li><li>Tata tertib penggunaan alat/ruang (lab, bengkel).</li></ul>`,
        rekapDokumen: "Foto Kondisi Fisik Bangunan<br>Tata Tertib Penggunaan Alat/Ruang",
        rekapWawancara: "Wawancara dgn Pengelola/Siswa:<br>- Apakah ada bagian bangunan yg rawan/berbahaya (listrik, tangga)?<br>- Apakah alat-alat (jika ada vokasi) aman digunakan?",
        rekapObservasi: "Observasi Fisik:<br>- Kondisi bangunan aman (tidak retak, bocor, licin).<br>- Instalasi listrik aman (kabel terbungkus rapi).<br>- Tidak ada benda berbahaya yg mudah dijangkau."
      },
      {
        id: "b13_i2",
        title: "2. Kesiapan dalam pemberian Pertolongan Pertama pada Kecelakaan (P3K).",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Foto kotak P3K beserta isinya yang lengkap dan tidak kedaluwarsa.</li><li>Daftar isi kotak P3K.</li></ul>`,
        rekapDokumen: "Foto Kotak P3K & Isinya<br>Daftar Isi P3K",
        rekapWawancara: "Wawancara dgn Pengelola/Pendidik:<br>- Di mana letak kotak P3K?<br>- Siapa yg bertanggung jawab mengecek isinya?<br>- Apakah ada yg terlatih P3K?",
        rekapObservasi: "Observasi Fisik:<br>- Kotak P3K terlihat, mudah diakses.<br>- Isi P3K lengkap (perban, antiseptik, dll).<br>- Obat-obatan tidak kedaluwarsa."
      },
      {
        id: "b13_i3",
        title: "3. Kesiapan satuan pendidikan khususnya program pendidikan kesetaraan dalam menghadapi ragam potensi bencana.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>SOP mitigasi bencana (gempa, banjir, kebakaran).</li><li>Foto jalur evakuasi yang terpasang.</li><li>Foto Alat Pemadam Api Ringan (APAR) yang tersedia.</li><li>Dokumentasi simulasi/pelatihan tanggap bencana.</li></ul>`,
        rekapDokumen: "SOP Mitigasi Bencana<br>Foto Jalur Evakuasi<br>Foto APAR<br>Dokumentasi Simulasi Bencana",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Apa potensi bencana di wilayah ini?<br>- Apakah ada SOP mitigasi?<br>- Apakah APAR tersedia & berfungsi?<br>- Pernah ada simulasi?",
        rekapObservasi: "Observasi Fisik:<br>- APAR tersedia, tidak kedaluwarsa.<br>- Jalur evakuasi/titik kumpul terpasang jelas.<br>Telaah SOP: Ada dokumen SOP tanggap bencana."
      }
    ]
  },
  {
    butirId: "b14",
    butirTitleShort: "Butir 14. Lingkungan Sehat",
    isMultiPaket: false,
    butirTitle: "Program pendidikan kesetaraan menjamin lingkungan yang sehat dan memiliki/melaksanakan program yang membangun kesehatan fisik dan mental pada peserta didik, pendidik, dan tenaga kependidikan",
    indicators: [
       {
        id: "b14_i1",
        title: "1. Iklim lingkungan belajar membangun pola hidup bersih dan sehat (PHBS).",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Foto lingkungan bersih (toilet, tempat sampah terpilah, air bersih).</li><li>Jadwal piket kebersihan.</li><li>Program/kegiatan PHBS (cuci tangan, kerja bakti).</li></ul>`,
        rekapDokumen: "Foto Lingkungan Bersih (Toilet, dll)<br>Jadwal Piket<br>Dokumentasi Kegiatan PHBS",
        rekapWawancara: "Wawancara dgn Pengelola/Siswa:<br>- Bagaimana menjaga kebersihan lingkungan?<br>- Apakah air bersih & toilet memadai?<br>- Apakah ada program Jumat Bersih/serupa?",
        rekapObservasi: "Observasi Fisik:<br>- Toilet bersih, tidak berbau, air mengalir.<br>- Tempat sampah terpilah tersedia.<br>- Lingkungan umum bebas sampah.<br>- Ketersediaan tempat cuci tangan."
      },
      {
        id: "b14_i2",
        title: "2. Program untuk membangun kesehatan mental pada peserta didik, pendidik, dan tenaga kependidikan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Jadwal/layanan bimbingan konseling atau konsultasi.</li><li>Program ekstrakurikuler (olahraga, seni) untuk penyaluran bakat.</li><li>Materi/notulen sosialisasi tentang kesehatan mental.</li></ul>`,
        rekapDokumen: "Jadwal/Program Layanan BK<br>Program Ekstrakurikuler<br>Dokumentasi Sosialisasi Kesmen",
        rekapWawancara: "Wawancara dgn Pengelola/Pendidik:<br>- Jika siswa/guru stres, bisa cerita ke siapa?<br>- Apakah ada layanan konseling?<br>- Bagaimana program ekskul mendukung kesehatan mental?",
        rekapObservasi: "Telaah Program BK: Ada jadwal layanan konseling.<br>Telaah Program Ekskul: Ada variasi ekskul (olahraga, seni) sbg penyaluran bakat."
      },
      {
        id: "b14_i3",
        title: "3. Edukasi tentang pencegahan adiksi dan kesehatan reproduksi.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Materi/modul ajar yang terintegrasi (di IPA, Olahraga, Bimbingan).</li><li>Notulen/foto/materi seminar/penyuluhan (dari BNN, Puskesmas).</li><li>Poster/media informasi tentang bahaya narkoba dan kespro.</li></ul>`,
        rekapDokumen: "Materi/Modul Ajar Terintegrasi<br>Dokumentasi Penyuluhan (BNN/Puskesmas)<br>Poster/Media KIE Narkoba/Kespro",
        rekapWawancara: "Wawancara dgn Pengelola/Pendidik:<br>- Kapan materi ttg bahaya narkoba/kespro disampaikan?<br>- Apakah diintegrasikan di mapel atau ada seminar khusus?",
        rekapObservasi: "Telaah RPP/Materi: Ada materi ttg adiksi/kespro di mapel (IPA, Penjaskes).<br>Telaah Dokumentasi: Ada foto/laporan penyuluhan dari BNN/Puskesmas.<br>Observasi Lingkungan: Ada poster/mading ttg bahaya narkoba."
      }
    ]
  },
  {
    butirId: "b15",
    butirTitleShort: "Butir 15. Keterampilan Lulusan",
    isMultiPaket: false,
    butirTitle: "Lulusan dan/atau peserta didik memiliki keterampilan beradaptasi, berkarya, dan berperan dalam masyarakat.",
    indicators: [
       {
        id: "b15_i1",
        title: "1. Menunjukkan kemampuan menyampaikan gagasan.",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Portofolio tugas siswa (makalah, esai, naskah presentasi).</li><li>Video rekaman siswa saat presentasi, diskusi, atau debat.</li></ul>`,
        rekapDokumen: "Portofolio Tugas Siswa (Makalah, Esai)<br>Video Presentasi/Diskusi Siswa",
        rekapWawancara: "Wawancara dgn Pendidik:<br>- Bagaimana Bpk/Ibu melatih siswa menyampaikan gagasan?<br><br>Wawancara dgn Siswa:<br>- (Ajukan pertanyaan terbuka) - amati cara siswa menjawab, apakah runtut, jelas, dan percaya diri.",
        rekapObservasi: "Observasi KBM: Siswa aktif bertanya/menjawab/presentasi.<br>Telaah Portofolio: Ada tugas berupa makalah/esai yg menunjukkan alur pikir."
      },
      {
        id: "b15_i2",
        title: "2. Menghasilkan karya inovatif yang bermanfaat",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li>Foto/video hasil karya/proyek siswa (produk PjBL, karya wirausaha).</li><li>Laporan proyek atau portofolio karya.</li></ul>`,
        rekapDokumen: "Foto/Video Karya/Proyek Siswa<br>Laporan Proyek/Portofolio Karya",
        rekapWawancara: "Wawancara dgn Siswa:<br>- Karya/proyek apa yg pernah kamu buat?<br>- Apa manfaatnya?<br>- Apa ide baru (inovasi) dlm karya tsb?",
        rekapObservasi: "Observasi Pameran Karya (jika ada).<br>Telaah Portofolio/Laporan Proyek: Melihat orisinalitas dan kebermanfaatan karya."
      },
      {
        id: "b15_i3",
        title: "3. Kemandirian peserta didik/lulusan untuk berperan dalam kehidupan individu maupun bermasyarakat",
        rublik: `<h4>Rublik Penilaian</h4>... (rublik tetap sama) ...`,
        buktiFisik: `<ul><li><i>Tracer study</i> (penelusuran lulusan): Data lulusan yang (melanjutkan studi, bekerja, wirausaha).</li><li>Catatan partisipasi siswa dalam kegiatan masyarakat (magang, bakti sosial).</li><li>Testimoni dari lulusan atau mitra/DUDI.</li></ul>`,
        rekapDokumen: "<i>Tracer Study</i> (Penelusuran Lulusan)<br>Catatan Kegiatan Siswa di Masyarakat<br>Testimoni Lulusan/Mitra",
        rekapWawancara: "Wawancara dgn Pengelola:<br>- Bagaimana data lulusan dilacak?<br>- Berapa persen yg bekerja/kuliah/wirausaha?<br><br>Wawancara dgn Lulusan/Wali:<br>- Apa kegiatan setelah lulus? <br>- Keterampilan apa yg paling bermanfaat?",
        rekapObservasi: "Telaah Data Tracer Study: Adanya data kuantitatif ttg keterserapan lulusan."
      }
    ]
  }
];
