// File: data.js (Lengkap dengan SEMUA Rublik dari Manual)

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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Ketika peserta didik bertanya, atau berkomentar, pendidik:</p>
          <ul><li>Mengabaikan, atau</li><li>Menanggapi dengan merendahkan atau menggunakan bahasa berindikasi stigma, stereotip, atau label negatif.</li></ul>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik memberi kesempatan peserta didik bertanya/berkomentar, namun:</p>
          <ul><li>Hanya mendengarkan sepintas dan menanggapi seperlunya;</li><li>Terburu-buru menjawab tanpa memastikan pemahaman peserta didik.</li></ul>
          <p><strong>BAIK:</strong><br>Pendidik memberi kesempatan peserta didik bertanya/berkomentar, kemudian:</p>
          <ul><li>Mendengarkan dengan seksama;</li><li>Menanggapi dengan tanggapan yang relevan;</li><li>Memberi kesempatan pada peserta didik untuk bertanya atau memberi masukan/komentar.</li></ul>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik memberi kesempatan peserta didik bertanya/berkomentar, kemudian:</p>
          <ul><li>Mendengarkan dengan seksama;</li><li>Menanggapi dengan melakukan penggalian lebih lanjut, menggunakan diksi/kosa kata yang menghargai dan setara untuk membangun semangat peserta didik;</li><li>Memberi kesempatan peserta didik untuk bertanya atau memberi masukan/komentar.</li></ul>
        `
      },
      {
        id: "b1_i2",
        title: "2. Interaksi yang membangun pola pikir bertumbuh.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik mengabaikan pertanyaan/komentar peserta didik, atau menanggapi dengan mengkritik/menghakimi.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik mendengarkan pertanyaan/komentar peserta didik, namun menanggapi dengan jawaban akhir (menutup diskusi).</p>
          <p><strong>BAIK:</strong><br>Pendidik mendengarkan pertanyaan/komentar peserta didik, dan menanggapi dengan pertanyaan yang memancing proses berpikir.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik mendengarkan pertanyaan/komentar peserta didik, menanggapi dengan pertanyaan yang memancing proses berpikir, dan mendorong peserta didik lain untuk ikut merespon.</p>
        `
      },
      {
        id: "b1_i3",
        title: "3. Memberi perhatian dan bantuan pada peserta didik yang membutuhkan dukungan lebih/ekstra.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik mengabaikan peserta didik yang membutuhkan dukungan lebih/ekstra.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik berupaya membantu peserta didik yang membutuhkan, namun belum konsisten/belum melakukan penyesuaian strategi.</p>
          <p><strong>BAIK:</strong><br>Pendidik proaktif membantu peserta didik yang membutuhkan, dan melakukan penyesuaian strategi pembelajaran.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik proaktif membantu peserta didik yang membutuhkan, melakukan penyesuaian strategi pembelajaran, dan menggunakan strategi yang beragam untuk mendukung.</p>
        `
      },
      {
        id: "b1_i4",
        title: "4. Strategi pembelajaran yang membangun keterampilan sosial emosional pada peserta didik.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak menerapkan strategi pembelajaran yang membangun keterampilan sosial emosional.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik menerapkan strategi pembelajaran yang membangun KSE, namun belum efektif dalam membangun kesadaran, pengelolaan, dan keterampilan relasi sosial peserta didik.</p>
          <p><strong>BAIK:</strong><br>Pendidik menerapkan strategi pembelajaran yang cukup efektif dalam membangun kesadaran, pengelolaan, dan keterampilan relasi sosial peserta didik.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik menerapkan strategi pembelajaran yang konsisten dan efektif dalam membangun kesadaran, pengelolaan, dan keterampilan relasi sosial peserta didik.</p>
        `
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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak menyusun kesepakatan kelas/kelompok.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik menyusun kesepakatan kelas/kelompok, namun tidak secara partisipatif (misal: hanya ditetapkan sepihak).</p>
          <p><strong>BAIK:</strong><br>Pendidik menyusun kesepakatan kelas/kelompok secara partisipatif, namun belum konsisten diterapkan/diingatkan kembali.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik menyusun kesepakatan kelas/kelompok secara partisipatif, dan konsisten menerapkannya sebagai rujukan dalam proses belajar.</p>
        `
      },
      {
        id: "b2_i2",
        title: "2. Penegakan disiplin dengan pendekatan positif.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik menerapkan disiplin dengan hukuman fisik atau verbal yang merendahkan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik menerapkan disiplin, namun masih berfokus pada kesalahan peserta didik (bukan pada solusi/perbaikan).</p>
          <p><strong>BAIK:</strong><br>Pendidik menerapkan disiplin positif, mengajak peserta didik merefleksikan perilakunya, dan mencari solusi bersama.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik menerapkan disiplin positif, mengajak peserta didik merefleksikan perilakunya, mencari solusi bersama, dan konsisten menjadikannya sebagai rujukan.</p>
        `
      },
      {
        id: "b2_i3",
        title: "3. Kemampuan pendidik dalam mengelola kegiatan belajar sehingga peserta didik fokus pada aktivitas belajar.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak mampu mengelola kegiatan belajar sehingga sebagian besar peserta didik tidak fokus.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik mampu mengelola kegiatan belajar, namun sebagian kecil peserta didik masih belum fokus.</p>
          <p><strong>BAIK:</strong><br>Pendidik mampu mengelola kegiatan belajar sehingga seluruh peserta didik fokus pada aktivitas belajar.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik mampu mengelola kegiatan belajar, seluruh peserta didik fokus, dan pendidik melakukan transisi antar kegiatan secara efektif.</p>
        `
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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak dapat menunjukkan dokumen perencanaan pembelajaran (ATP, Modul Ajar/RPP).</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik dapat menunjukkan dokumen perencanaan, namun belum selaras antara tujuan, kegiatan, dan asesmen.</p>
          <p><strong>BAIK:</strong><br>Pendidik dapat menunjukkan dokumen perencanaan yang selaras antara tujuan, kegiatan, dan asesmen.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik dapat menunjukkan dokumen perencanaan yang selaras, dan menunjukkan adanya adaptasi/penyesuaian berdasarkan kebutuhan peserta didik.</p>
        `
      },
      {
        id: "b3_i2",
        title: "2. Penilaian formatif digunakan sebagai umpan balik dalam proses pembelajaran.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak melakukan penilaian formatif.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik melakukan penilaian formatif, namun tidak memberikan umpan balik yang jelas kepada peserta didik.</p>
          <p><strong>BAIK:</strong><br>Pendidik melakukan penilaian formatif, memberikan umpan balik, dan menggunakannya untuk perbaikan proses belajar.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik melakukan penilaian formatif, memberikan umpan balik yang konstruktif, menggunakannya untuk perbaikan, dan melibatkan peserta didik dalam proses perbaikan.</p>
        `
      },
      {
        id: "b3_i3",
        title: "3. Penilaian sumatif dilakukan dengan metode yang beragam menggunakan instrumen yang sesuai dengan tujuan pembelajaran.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak dapat menunjukkan bukti penilaian sumatif.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik melakukan penilaian sumatif, namun hanya menggunakan satu metode (misal: tes tulis saja) dan belum sesuai tujuan.</p>
          <p><strong>BAIK:</strong><br>Pendidik melakukan penilaian sumatif dengan instrumen yang sesuai tujuan, namun metodenya belum beragam.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik melakukan penilaian sumatif dengan metode yang beragam (tes tulis, praktik, proyek, dll.) dan instrumennya sesuai tujuan pembelajaran.</p>
        `
      },
      {
        id: "b3_i4",
        title: "4. Hasil penilaian dilaporkan secara informatif untuk mendorong tindak lanjut perbaikan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak melaporkan hasil penilaian.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik melaporkan hasil penilaian hanya dalam bentuk angka/skor.</p>
          <p><strong>BAIK:</strong><br>Pendidik melaporkan hasil penilaian dalam bentuk angka dan deskripsi pencapaian kompetensi.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik melaporkan hasil penilaian (angka dan deskripsi), serta menyertakan rekomendasi tindak lanjut perbaikan.</p>
        `
      },
      {
        id: "b3_i5",
        title: "5. Praktik pembelajaran yang memfasilitasi peserta didik untuk menganalisis, mengutarakan gagasan, dan menghubungkan pengetahuannya dengan pengetahuan baru dan konteks aplikatif..",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak memfasilitasi peserta didik untuk menganalisis, mengutarakan gagasan, atau menghubungkan pengetahuan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik memfasilitasi salah satu dari tiga aspek (menganalisis, mengutarakan gagasan, atau menghubungkan pengetahuan).</p>
          <p><strong>BAIK:</strong><br>Pendidik memfasilitasi dua dari tiga aspek tersebut.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik memfasilitasi ketiga aspek: menganalisis, mengutarakan gagasan, DAN menghubungkan pengetahuannya dengan konteks baru/aplikatif.</p>
        `
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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak mengintegrasikan nilai keimanan/ketakwaan dalam pembelajaran.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik mengintegrasikan nilai keimanan/ketakwaan, namun hanya sebatas pengetahuan (kognitif), belum menyentuh pembentukan akhlak.</p>
          <p><strong>BAIK:</strong><br>Pendidik mengintegrasikan nilai keimanan/ketakwaan secara efektif untuk membentuk akhlak mulia dalam konteks pembelajaran.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik mengintegrasikan nilai keimanan/ketakwaan, efektif membentuk akhlak mulia, dan mengajak peserta didik merefleksikan penerapannya dalam kehidupan sehari-hari.</p>
        `
      },
      {
        id: "b4_i2",
        title: "2. Pembelajaran yang efektif dalam menguatkan kecintaan terhadap sejarah, kekayaan budaya, alam Indonesia, pemikiran, dan karya anak bangsa.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pendidik tidak mengintegrasikan wawasan kebangsaan/kecintaan pada Indonesia dalam pembelajaran.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik mengintegrasikan wawasan kebangsaan, namun hanya sebatas pengetahuan (misal: menghafal).</p>
          <p><strong>BAIK:</strong><br>Pendidik mengintegrasikan wawasan kebangsaan secara efektif melalui metode yang relevan (misal: diskusi, kunjungan virtual, proyek).</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik mengintegrasikan wawasan kebangsaan secara efektif, dan mengajak peserta didik merefleksikan nilai-nilai tersebut dalam konteks kekinian.</p>
        `
      },
      {
        id: "b4_i3",
        title: "3. Pembelajaran yang efektif dalam memfasilitasi peserta didik untuk mengembangkan kemampuan bernalar dan memecahkan masalah.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pembelajaran berfokus pada hafalan/pemahaman konsep dasar, tidak ada penugasan yang menuntut penalaran/pemecahan masalah.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pendidik berupaya memberikan tugas yang menuntut penalaran/pemecahan masalah, namun belum terstruktur/belum efektif.</p>
          <p><strong>BAIK:</strong><br>Pendidik secara konsisten memberikan tugas yang terstruktur untuk melatih penalaran/pemecahan masalah.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pendidik secara konsisten memberikan tugas yang terstruktur, dan memfasilitasi peserta didik untuk menemukan solusi/strategi pemecahan masalah yang beragam.</p>
        `
      },
      {
        id: "b4_i4",
        title: "4. Pembelajaran yang efektif dalam membangun kompetensi dan/atau karakter peserta didik sesuai kekhasan satuan pendidikan penyelenggara program pendidikan kesetaraan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pembelajaran tidak mengintegrasikan/membangun kompetensi atau karakter khas satuan pendidikan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Pembelajaran berupaya mengintegrasikan kompetensi/karakter khas, namun belum efektif/belum terencana dengan baik.</p>
          <p><strong>BAIK:</strong><br>Pembelajaran secara konsisten dan terencana mengintegrasikan kompetensi/karakter khas satuan pendidikan.</p>
          <p><strong>SANGAT BAIK:</strong><br>Pembelajaran secara konsisten dan terencana mengintegrasikan kompetensi/karakter khas, dan terlihat dampaknya pada perilaku/keterampilan peserta didik.</p>
        `
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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Penyelenggara tidak memfasilitasi refleksi kinerja pendidik/tendik.</p>
          <p><strong>CUKUP BAIK:</strong><br>Penyelenggara memfasilitasi refleksi (misal: forum/waktu khusus), namun belum terstruktur dan belum fokus pada perbaikan pembelajaran.</p>
          <p><strong>BAIK:</strong><br>Penyelenggara memfasilitasi refleksi secara terstruktur dan fokus pada perbaikan pembelajaran.</p>
          <p><strong>SANGAT BAIK:</strong><br>Penyelenggara memfasilitasi refleksi secara terstruktur, fokus pada perbaikan, dan memiliki mekanisme tindak lanjut dari hasil refleksi.</p>
        `
      },
      {
        id: "b5_i2",
        title: "2. Evaluasi kinerja dalam rangka meningkatkan kualitas pembelajaran yang dilakukan oleh penyelenggara secara berkala dan sistematis.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Penyelenggara tidak melakukan evaluasi kinerja pendidik/tendik.</p>
          <p><strong>CUKUP BAIK:</strong><br>Penyelenggara melakukan evaluasi kinerja, namun belum berkala dan belum sistematis.</p>
          <p><strong>BAIK:</strong><br>Penyelenggara melakukan evaluasi kinerja secara berkala dan sistematis, menggunakan instrumen yang jelas.</p>
          <p><strong>SANGAT BAIK:</strong><br>Penyelenggara melakukan evaluasi kinerja secara berkala, sistematis, dan hasilnya didiskusikan sebagai dasar pengembangan profesional.</p>
        `
      },
      {
        id: "b5_i3",
        title: "3. Program pengembangan profesional pendidik untuk peningkatan kualitas pembelajaran telah dilakukan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Penyelenggara tidak memiliki program pengembangan profesional (P2) pendidik.</p>
          <p><strong>CUKUP BAIK:</strong><br>Penyelenggara memiliki program P2, namun belum berdasarkan hasil evaluasi kinerja/kebutuhan.</p>
          <p><strong>BAIK:</strong><br>Penyelenggara memiliki program P2 yang relevan berdasarkan hasil evaluasi kinerja/kebutuhan pendidik.</p>
          <p><strong>SANGAT BAIK:</strong><br>Penyelenggara memiliki program P2 yang relevan, terdokumentasi, dan menunjukkan dampak positif pada kualitas pembelajaran.</p>
        `
      },
      {
        id: "b5_i4",
        title: "4. Pengelolaan pendidik dan tenaga kependidikan yang efektif dan akuntabel dalam hal pemberian penghargaan atau sanksi berbasis kinerja.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada mekanisme penghargaan/sanksi yang jelas berbasis kinerja.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada mekanisme penghargaan/sanksi, namun belum transparan atau belum sepenuhnya berbasis kinerja.</p>
          <p><strong>BAIK:</strong><br>Ada mekanisme penghargaan/sanksi yang transparan, akuntabel, dan berbasis kinerja (sesuai hasil evaluasi).</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada mekanisme penghargaan/sanksi yang transparan, akuntabel, berbasis kinerja, dan terbukti efektif meningkatkan motivasi/kinerja pendidik & tendik.</p>
        `
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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Penyelenggara tidak memiliki visi dan misi yang jelas.</p>
          <p><strong>CUKUP BAIK:</strong><br>Penyelenggara memiliki visi dan misi, namun belum dikomunikasikan secara efektif kepada pemangku kepentingan.</p>
          <p><strong>BAIK:</strong><br>Penyelenggara memiliki visi dan misi yang jelas dan telah mengkomunikasikannya kepada pemangku kepentingan (ada bukti sosialisasi).</p>
          <p><strong>SANGAT BAIK:</strong><br>Penyelenggara memiliki visi dan misi yang jelas, telah dikomunikasikan, dan menjadi acuan dalam perencanaan program.</p>
        `
      },
      {
        id: "b6_i2",
        title: "2. Adanya kolaborasi atau kemitraan dengan berbagai pihak (termasuk orang tua/wali, mitra, dudi, dst) dalam rangka mendukung penyelenggaraan layanan pendidikan secara efektif.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada kolaborasi/kemitraan dengan pihak luar.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada kolaborasi/kemitraan, namun belum terencana (insidental) dan belum mendukung layanan pendidikan.</p>
          <p><strong>BAIK:</strong><br>Ada kolaborasi/kemitraan yang terencana dan mendukung layanan pendidikan (misal: narasumber, tempat magang, dll.).</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada kolaborasi/kemitraan yang terencana, mendukung layanan, dan dievaluasi secara berkala untuk perbaikan.</p>
        `
      },
      {
        id: "b6_i3",
        title: "3. Pelaksanaan evaluasi/refleksi berbasis data yang melibatkan berbagai pihak yang relevan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada evaluasi/refleksi program yang melibatkan pemangku kepentingan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada evaluasi/refleksi, namun hanya melibatkan internal penyelenggara (tidak melibatkan peserta didik, ortu, mitra).</p>
          <p><strong>BAIK:</strong><br>Ada evaluasi/refleksi berbasis data yang melibatkan berbagai pihak (internal dan eksternal).</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada evaluasi/refleksi berbasis data yang melibatkan berbagai pihak, dan hasilnya didokumentasikan sebagai dasar perencanaan.</p>
        `
      },
      {
        id: "b6_i4",
        title: "4. Perencanaan kegiatan tahunan dilakukan berdasarkan data yang diperoleh dari evaluasi/refleksi.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Penyelenggara tidak memiliki perencanaan kegiatan tahunan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Penyelenggara memiliki perencanaan, namun belum berdasarkan data hasil evaluasi/refleksi (misal: hanya mengulang tahun lalu).</p>
          <p><strong>BAIK:</strong><br>Penyelenggara memiliki perencanaan yang jelas dan disusun berdasarkan data hasil evaluasi/refleksi.</p>
          <p><strong>SANGAT BAIK:</strong><br>Penyelenggara memiliki perencanaan yang jelas, disusun berdasarkan evaluasi, dan menunjukkan perbaikan/peningkatan dari tahun sebelumnya.</p>
        `
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
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Pelaksanaan anggaran tidak sesuai dengan perencanaan tahunan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Sebagian besar pelaksanaan anggaran sesuai dengan perencanaan tahunan.</p>
          <p><strong>BAIK:</strong><br>Seluruh pelaksanaan anggaran sesuai dengan perencanaan tahunan.</p>
          <p><strong>SANGAT BAIK:</strong><br>Seluruh pelaksanaan anggaran sesuai perencanaan, dan didukung bukti pertanggungjawaban yang lengkap dan akuntabel.</p>
        `
      },
      {
        id: "b7_i2",
        title: "2. Rencana anggaran program pendidikan kesetaraan menunjukkan sumber pendanaan serta alokasi pemanfaatannya.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Rencana anggaran tidak menunjukkan sumber pendanaan dan alokasi pemanfaatan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Rencana anggaran menunjukkan sumber pendanaan ATAU alokasi pemanfaatan (salah satu).</p>
          <p><strong>BAIK:</strong><br>Rencana anggaran menunjukkan sumber pendanaan DAN alokasi pemanfaatan secara jelas.</p>
          <p><strong>SANGAT BAIK:</strong><br>Rencana anggaran menunjukkan sumber pendanaan dan alokasi pemanfaatan secara rinci, transparan, dan memprioritaskan kebutuhan pembelajaran.</p>
        `
      },
      {
        id: "b7_i3",
        title: "3. Ada laporan berkala tentang pemanfaatan anggaran program pendidikan kesetaraan kepada pemangku kepentingan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada laporan pemanfaatan anggaran kepada pemangku kepentingan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada laporan pemanfaatan anggaran, namun tidak berkala (misal: hanya jika diminta).</p>
          <p><strong>BAIK:</strong><br>Ada laporan pemanfaatan anggaran secara berkala kepada pemangku kepentingan (misal: di papan pengumuman, rapat).</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada laporan pemanfaatan anggaran secara berkala, transparan, akuntabel, dan mudah diakses oleh pemangku kepentingan.</p>
        `
      }
    ]
  },
   {
    butirId: "b8",
    butirTitleShort: "Butir 8. Sarana dan Prasarana",
    isMultiPaket: false,
    butirTitle: "Penyelenggara program pendidikan kesetaraan memimpin pengelolaan sarana dan prasarana sesuai dengan kebutuhan pembelajaran yang berpusat pada peserta didik.",
    indicators: [
       {
        id: "b8_i1",
        title: "1. Pemenuhan sarana dan prasarana yang sesuai dengan kebutuhan belajar peserta didik (dapat disediakan secara mandiri maupun bermitra).",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Sarana prasarana tidak memadai/tidak sesuai dengan kebutuhan belajar peserta didik.</p>
          <p><strong>CUKUP BAIK:</strong><br>Sarana prasarana (milik sendiri/bermitra) cukup memadai untuk sebagian besar kebutuhan belajar.</p>
          <p><strong>BAIK:</strong><br>Sarana prasarana (milik sendiri/bermitra) memadai dan sesuai dengan seluruh kebutuhan belajar peserta didik.</p>
          <p><strong>SANGAT BAIK:</strong><br>Sarana prasarana memadai, sesuai kebutuhan, dan dilengkapi dengan sarana pendukung TIK yang relevan.</p>
        `
      },
      {
        id: "b8_i2",
        title: "2. Pengelolaan sarana dan prasarana secara optimal.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Sarana prasarana tidak dikelola/dipelihara sehingga banyak yang tidak berfungsi.</p>
          <p><strong>CUKUP BAIK:</strong><br>Sarana prasarana dikelola (dicatat/dipelihara), namun pemanfaatannya belum optimal untuk pembelajaran.</p>
          <p><strong>BAIK:</strong><br>Sarana prasarana dikelola dengan baik dan dimanfaatkan secara optimal untuk pembelajaran.</p>
          <p><strong>SANGAT BAIK:</strong><br>Sarana prasarana dikelola dengan baik, dimanfaatkan optimal, dan ada mekanisme evaluasi untuk pemeliharaan/peningkatan.</p>
        `
      }
    ]
  },
  {
    butirId: "b9",
    butirTitleShort: "Butir 9. Kurikulum Operasional",
    isMultiPaket: false,
    butirTitle: "Penyelenggara program pendidikan kesetaraan mengembangkan kurikulum di tingkat satuan pendidikan yang selaras dengan kurikulum nasional.",
    indicators: [
      {
        id: "b9_i1",
        title: "1. Kepemilikan kurikulum program pendidikan kesetaraan sebagai rujukan penyelenggaraan proses proses pembelajaran",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Satuan pendidikan tidak memiliki dokumen kurikulum operasional program kesetaraan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Memiliki dokumen kurikulum operasional, namun belum mencerminkan visi, misi, dan karakteristik satuan pendidikan.</p>
          <p><strong>BAIK:</strong><br>Memiliki dokumen kurikulum operasional yang mencerminkan visi, misi, dan karakteristik, TAPI belum ada bukti evaluasi.</p>
          <p><strong>SANGAT BAIK:</strong><br>Memiliki dokumen kurikulum operasional yang mencerminkan visi, misi, dan karakteristik, dan ada bukti evaluasi serta penyesuaian sebagai dampaknya.</p>
        `
      },
       {
        id: "b9_i2",
        title: "2. Adanya mekanisme evaluasi terhadap penerapan kurikulum",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada mekanisme evaluasi penerapan kurikulum.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada mekanisme evaluasi, namun belum terstruktur/berkala dan belum melibatkan pemangku kepentingan.</p>
          <p><strong>BAIK:</strong><br>Ada mekanisme evaluasi yang terstruktur, berkala, dan melibatkan pemangku kepentingan (pendidik, peserta didik).</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada mekanisme evaluasi yang terstruktur, berkala, melibatkan pemangku kepentingan, dan hasilnya ditindaklanjuti untuk perbaikan kurikulum.</p>
        `
      },
      {
        id: "b9_i3",
        title: "3. Kurikulum program pendidikan kesetaraan relevan dengan kebutuhan belajar peserta didik, dan visimisi program pendidikan kesetaraan di satuan pendidikan yang bersangkutan",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Kurikulum belum relevan dengan kebutuhan belajar peserta didik DAN visi misi.</p>
          <p><strong>CUKUP BAIK:</strong><br>Kurikulum relevan dengan kebutuhan belajar ATAU visi misi (salah satu).</p>
          <p><strong>BAIK:</strong><br>Kurikulum relevan dengan kebutuhan belajar peserta didik DAN visi misi satuan pendidikan.</p>
          <p><strong>SANGAT BAIK:</strong><br>Kurikulum relevan dengan kebutuhan belajar dan visi misi, serta menunjukkan adaptasi terhadap perubahan/kebutuhan kontekstual.</p>
        `
      }
    ]
  },
   {
    butirId: "b10",
    butirTitleShort: "Butir 10. Iklim Kebinekaan",
    butirTitle: "Program pendidikan kesetaraan memastikan terbangunnya iklim kebinekaan bagi peserta didik, pendidik, dan tenaga kependidikan.",
    isMultiPaket: false,
    indicators: [
      {
        id: "b10_i1",
        title: "1. Iklim lingkungan belajar membangun sikap positif terhadap keberagaman",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Lingkungan belajar belum menunjukkan sikap positif terhadap keberagaman (misal: masih ada diskriminasi/eksklusivitas).</p>
          <p><strong>CUKUP BAIK:</strong><br>Lingkungan belajar menerima keberagaman (toleransi pasif), namun belum ada program/inisiatif untuk mempromosikannya.</p>
          <p><strong>BAIK:</strong><br>Lingkungan belajar secara aktif mempromosikan sikap positif terhadap keberagaman melalui program/kegiatan.</p>
          <p><strong>SANGAT BAIK:</strong><br>Lingkungan belajar secara aktif mempromosikan sikap positif, dan menjadikannya bagian dari budaya satuan pendidikan (tercermin dalam interaksi sehari-hari).</p>
        `
      },
      {
        id: "b10_i2",
        title: "2. Iklim lingkungan belajar memfasilitasi hak sipil warga satuan pendidikan khususnya program pendidikan kesetaraan untuk beribadah dan berkegiatan secara setara..",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Lingkungan belajar tidak memfasilitasi/menghalangi hak sipil (misal: beribadah) warga satuan pendidikan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Lingkungan belajar memberi kesempatan beribadah/berkegiatan, namun belum menyediakan sarana/dukungan yang memadai.</p>
          <p><strong>BAIK:</strong><br>Lingkungan belajar memfasilitasi hak sipil (beribadah, berkegiatan) secara setara bagi semua warga tanpa diskriminasi.</p>
          <p><strong>SANGAT BAIK:</strong><br>Lingkungan belajar memfasilitasi hak sipil secara setara, dan secara aktif memastikan tidak ada praktik diskriminatif.</p>
        `
      },
      {
        id: "b10_i3",
        title: "3. Iklim lingkungan belajar membangun kesadaran terhadap kesetaraan gender.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Muatan kesetaraan gender tidak menjadi bagian dari proses pembelajaran/interaksi.</p>
          <p><strong>CUKUP BAIK:</strong><br>Muatan kesetaraan gender sudah menjadi bagian, namun belum optimal (terpenuhi 1 dari 3 sub-indikator: sikap, peran, kesempatan).</p>
          <p><strong>BAIK:</strong><br>Muatan kesetaraan gender sudah terintegrasi dan efektif (terpenuhi 2 dari 3 sub-indikator).</p>
          <p><strong>SANGAT BAIK:</strong><br>Muatan kesetaraan gender sudah terintegrasi, efektif, dan konsisten (terpenuhi 3 dari 3 sub-indikator: sikap, peran, dan kesempatan yang setara).</p>
        `
      }
    ]
  },
  {
    butirId: "b11",
    butirTitleShort: "Butir 11. Lingkungan Belajar Inklusif",
    butirTitle: "Program pendidikan kesetaraan menyediakan lingkungan belajar yang inklusif untuk memenuhi kebutuhan belajar peserta didik yang beragam.",
    isMultiPaket: false,
    indicators: [
      {
        id: "b11_i1",
        title: "1. Kebijakan dan/atau prosedur yang menghadirkan lingkungan belajar yang inklusif .",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada kebijakan/prosedur yang mendukung lingkungan belajar inklusif.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada kebijakan/prosedur, namun belum tersosialisasi atau belum mencakup semua aspek keberagaman (fisik, kognitif, sosial-emosional).</p>
          <p><strong>BAIK:</strong><br>Ada kebijakan/prosedur yang tersosialisasi dan mencakup berbagai aspek keberagaman.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada kebijakan/prosedur yang tersosialisasi, mencakup berbagai aspek, dan terbukti efektif diterapkan (ada mekanisme monitoring).</p>
        `
      },
      {
        id: "b11_i2",
        title: "2. Tersedianya program bagi pendidik, orang tua/wali/ masyarakat, dan peserta didik untuk menghadirkan lingkungan belajar yang inklusif",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada program untuk pemangku kepentingan terkait inklusivitas.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada program, namun hanya menyasar satu kelompok (misal: pendidik saja) dan belum berkelanjutan.</p>
          <p><strong>BAIK:</strong><br>Ada program yang menyasar berbagai pemangku kepentingan (pendidik, ortu, peserta didik) untuk menghadirkan lingkungan inklusif.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada program yang menyasar berbagai pemangku kepentingan, dilaksanakan secara berkelanjutan, dan dievaluasi efektivitasnya.</p>
        `
      }
    ]
  },
   {
    butirId: "b12",
    butirTitleShort: "Butir 12. Iklim Aman (Psikis)",
    butirTitle: "Program pendidikan kesetaraan mewujudkan iklim lingkungan belajar yang aman secara psikis bagi peserta didik, pendidik, dan tenaga kependidikan.",
    isMultiPaket: false,
    indicators: [
      {
        id: "b12_i1",
        title: "1. Kebijakan dalam pencegahan dan penanganan perundungan dan kekerasan",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada kebijakan/prosedur terkait pencegahan dan penanganan (PP) perundungan/kekerasan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada kebijakan/prosedur, namun belum tersosialisasi dengan baik kepada seluruh warga satuan pendidikan.</p>
          <p><strong>BAIK:</strong><br>Ada kebijakan/prosedur yang jelas dan telah tersosialisasi dengan baik.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada kebijakan/prosedur yang jelas, tersosialisasi, dan didukung oleh mekanisme/tim penanganan yang berfungsi.</p>
        `
      },
      {
        id: "b12_i2",
        title: "2. Program bagi warga satuan pendidikan khususnya pada program pendidikan kesetaraan dalam pencegahan dan penanganan perundungan dan kekerasan",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada program PP perundungan/kekerasan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada program PP, namun bersifat insidental/reaktif (misal: hanya saat ada kasus).</p>
          <p><strong>BAIK:</strong><br>Ada program PP yang bersifat preventif (pencegahan) dan dilaksanakan secara berkala.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada program PP yang bersifat preventif dan kuratif (penanganan), dilaksanakan berkala, dan melibatkan partisipasi aktif warga (peserta didik, pendidik).</p>
        `
      }
    ]
  },
  {
    butirId: "b13",
    butirTitleShort: "Butir 13. Keselamatan Warga",
    butirTitle: "Program pendidikan kesetaraan memastikan keselamatan peserta didik, pendidik, dan tenaga kependidikan.",
    isMultiPaket: false,
    indicators: [
       {
        id: "b13_i1",
        title: "1. Iklim Lingkungan belajar yang menjaga keselamatan warga satuan Pendidikan khususnya pada program Pendidikan kesetaraan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Lingkungan belajar memiliki risiko keselamatan yang jelas (fisik/non-fisik) dan tidak ditangani.</p>
          <p><strong>CUKUP BAIK:</strong><br>Lingkungan belajar cukup aman, namun belum ada standar/prosedur keselamatan yang jelas.</p>
          <p><strong>BAIK:</strong><br>Lingkungan belajar aman dan memiliki standar/prosedur keselamatan yang dipahami warga.</p>
          <p><strong>SANGAT BAIK:</strong><br>Lingkungan belajar aman, memiliki standar/prosedur, dan secara rutin melakukan identifikasi/mitigasi risiko keselamatan.</p>
        `
      },
      {
        id: "b13_i2",
        title: "2. Kesiapan dalam pemberian Pertolongan Pertama pada Kecelakaan (P3K).",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada kesiapan P3K (tidak ada kotak P3K, tidak ada petugas terlatih).</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada kesiapan P3K (kotak/obat), namun belum memadai atau tidak ada petugas yang terlatih.</p>
          <p><strong>BAIK:</strong><br>Ada kesiapan P3K yang memadai (kotak, obat) dan ada petugas/pendidik yang terlatih.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada kesiapan P3K yang memadai, petugas terlatih, dan mekanisme/prosedur rujukan yang jelas jika terjadi keadaan darurat.</p>
        `
      },
      {
        id: "b13_i3",
        title: "3. Kesiapan satuan pendidikan khususnya program pendidikan kesetaraan dalam menghadapi ragam potensi bencana.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada kesiapan menghadapi potensi bencana.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada kesiapan (misal: jalur evakuasi/APAR), namun belum tersosialisasi/dilatihkan.</p>
          <p><strong>BAIK:</strong><br>Ada kesiapan dan prosedur yang telah disosialisasikan/dilatihkan kepada warga satuan pendidikan.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada kesiapan, prosedur yang dilatihkan, dan bekerjasama dengan pihak eksternal (BPBD, Damkar) untuk mitigasi bencana.</p>
        `
      }
    ]
  },
  {
    butirId: "b14",
    butirTitleShort: "Butir 14. Kesehatan Fisik & Mental",
    butirTitle: "Program pendidikan kesetaraan menjamin lingkungan yang sehat dan memiliki/melaksanakan program yang membangun kesehatan fisik dan mental pada peserta didik, pendidik, dan tenaga kependidikan",
    isMultiPaket: false,
    indicators: [
      {
        id: "b14_i1",
        title: "1. Iklim lingkungan belajar membangun pola hidup bersih dan sehat.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Lingkungan belajar tidak bersih dan tidak mendukung pola hidup sehat (misal: sanitasi buruk, area merokok sembarangan).</p>
          <p><strong>CUKUP BAIK:</strong><br>Lingkungan belajar cukup bersih, namun belum ada program/kebijakan yang aktif mempromosikan PHBS.</p>
          <p><strong>BAIK:</strong><br>Lingkungan belajar bersih dan sehat, serta memiliki program/kebijakan untuk mempromosikan PHBS (misal: kantin sehat, bebas asap rokok).</p>
          <p><strong>SANGAT BAIK:</strong><br>Lingkungan belajar bersih dan sehat, memiliki program PHBS, dan warga satuan pendidikan menunjukkan partisipasi aktif dalam budaya hidup sehat.</p>
        `
      },
       {
        id: "b14_i2",
        title: "2. Program untuk membangun kesehatan mental pada peserta didik, pendidik, dan tenaga kependidikan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada program/layanan terkait kesehatan mental.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada program/layanan, namun bersifat insidental/reaktif (penanganan masalah).</p>
          <p><strong>BAIK:</strong><br>Ada program/layanan yang bersifat preventif (pencegahan) untuk membangun kesadaran kesehatan mental.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada program/layanan yang bersifat preventif dan kuratif, terstruktur, dan mudah diakses oleh seluruh warga.</p>
        `
      },
      {
        id: "b14_i3",
        title: "3. Edukasi tentang pencegahan adiksi dan kesehatan reproduksi.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Tidak ada edukasi terkait pencegahan adiksi (NAPZA, rokok, judi online) dan kesehatan reproduksi.</p>
          <p><strong>CUKUP BAIK:</strong><br>Ada edukasi, namun belum memadai (misal: hanya salah satu topik) atau belum sesuai dengan kebutuhan/usia peserta didik.</p>
          <p><strong>BAIK:</strong><br>Ada edukasi yang memadai (mencakup adiksi dan kespro) dan dilaksanakan secara berkala.</p>
          <p><strong>SANGAT BAIK:</strong><br>Ada edukasi yang memadai, berkala, dan disampaikan melalui metode yang efektif dan relevan dengan konteks peserta didik.</p>
        `
      }
    ]
  },
  {
    butirId: "b15",
    butirTitleShort: "Butir 15. Keterampilan Lulusan",
    butirTitle: "Lulusan dan/atau peserta didik memiliki keterampilan beradaptasi, berkarya, dan berperan dalam masyarakat.",
    isMultiPaket: true,
    indicators: [
       {
        id: "b15_i1",
        title: "1. Menunjukkan kemampuan menyampaikan gagasan.",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Peserta didik/lulusan tidak menunjukkan kemampuan menyampaikan gagasan.</p>
          <p><strong>CUKUP BAIK:</strong><br>Peserta didik/lulusan menunjukkan kemampuan menyampaikan gagasan jika ditanya/ditugaskan.</p>
          <p><strong>BAIK:</strong><br>Peserta didik/lulusan menunjukkan kemampuan menyampaikan gagasan secara sukarela dalam forum/diskusi.</p>
          <p><strong>SANGAT BAIK:</strong><br>Peserta didik/lulusan menunjukkan kemampuan menyampaikan gagasan secara sukarela, terstruktur, dan memberikan dampak/memicu diskusi lebih lanjut.</p>
        `
      },
      {
        id: "b15_i2",
        title: "2. Menghasilkan karya inovatif yang bermanfaat",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Peserta didik/lulusan tidak menghasilkan karya.</p>
          <p><strong>CUKUP BAIK:</strong><br>Peserta didik/lulusan menghasilkan karya sebagai pemenuhan tugas, namun belum inovatif/bermanfaat.</p>
          <p><strong>BAIK:</strong><br>Peserta didik/lulusan menghasilkan karya yang inovatif ATAU bermanfaat (salah satu).</p>
          <p><strong>SANGAT BAIK:</strong><br>Peserta didik/lulusan menghasilkan karya yang inovatif DAN bermanfaat bagi diri sendiri/lingkungan/masyarakat.</p>
        `
      },
      {
        id: "b15_i3",
        title: "3. Kemandirian peserta didik/lulusan untuk berperan dalam kehidupan individu maupun bermasyarakat",
        rublik: `
          <h4>Rublik Penilaian</h4>
          <p><strong>KURANG:</strong><br>Peserta didik/lulusan belum menunjukkan kemandirian/peran di masyarakat.</p>
          <p><strong>CUKUP BAIK:</strong><br>Peserta didik/lulusan menunjukkan kemandirian dalam kehidupan individu (misal: mengelola diri).</p>
          <p><strong>BAIK:</strong><br>Peserta didik/lulusan menunjukkan kemandirian dan mulai mengambil peran di masyarakat (misal: ikut serta dalam kegiatan).</p>
          <p><strong>SANGAT BAIK:</strong><br>Peserta didik/lulusan menunjukkan kemandirian dan secara aktif mengambil peran/inisiatif yang berdampak di masyarakat (misal: menjadi penggerak, inisiator).</p>
        `
      }
    ]
  }
];