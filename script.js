// File: script.js (Versi Lengkap Final - v8 - Pengecekan Elemen Ditingkatkan)

// Variabel global
let selectedPaket = [];
let savedProgressData = null;

// Pemetaan Grade ke Skor & Fungsi Penentuan Grade
const gradeMapping = { "SANGAT BAIK": 4, "BAIK": 3, "CUKUP BAIK": 2, "KURANG": 1, "": 0 };
const scoreToGrade = (scorePercent) => {
    if (scorePercent > 85) return { grade: "SANGAT BAIK", class: "grade-a" };
    if (scorePercent > 70) return { grade: "BAIK", class: "grade-b" };
    if (scorePercent > 50) return { grade: "CUKUP BAIK", class: "grade-c" };
    if (scorePercent >= 0) return { grade: "KURANG", class: "grade-tt" }; // Skor 0 sd 50
    return { grade: "-", class: "" }; // Jika tidak ada indikator dinilai
};

/** ==========================================================
 * FUNGSI HITUNG & UPDATE SKOR/GRADE
 * ========================================================== */
function calculateAndUpdateGrade() {
    let totalScore = 0, maxPossibleScore = 0, indicatorCount = 0;

    // Pastikan selectedPaket terisi (cek dari checkbox jika kosong)
    if (selectedPaket.length === 0) {
       selectedPaket = [];
       ['a', 'b', 'c'].forEach(p => { const check = document.getElementById(`check_paket_${p}`); if (check && check.checked) selectedPaket.push(p.toUpperCase()); });
    }

    const totalScoreElement = document.getElementById('total-score');
    const finalGradeElement = document.getElementById('final-grade');
    const asesorContainer = document.getElementById("data-asesor-container");

    // Keluar jika elemen skor tidak ada ATAU form asesor masih tampil
    if (!totalScoreElement || !finalGradeElement || (asesorContainer && asesorContainer.style.display !== 'none')) {
         if (totalScoreElement) totalScoreElement.textContent = "-";
         if (finalGradeElement) { finalGradeElement.textContent = "-"; finalGradeElement.className = ""; }
        return;
    }

    // Pastikan allData ada sebelum loop
     if (typeof allData === 'undefined' || !Array.isArray(allData)) { console.error("calculateAndUpdateGrade: allData is missing."); return; }

    allData.forEach(butir => {
         if (!butir || !butir.indicators || !Array.isArray(butir.indicators)) return;
        butir.indicators.forEach(indicator => {
            if (!indicator || !indicator.id) return;
            let scoreSumForIndicator = 0, paketWithValueCount = 0, isIndicatorConsidered = false;
            if (butir.isMultiPaket && selectedPaket.length > 0) {
                selectedPaket.forEach(paket => {
                    const selectId = `paket${paket}_${indicator.id}_nilai`;
                    const selectElement = document.getElementById(selectId);
                    if (selectElement && selectElement.value !== "") {
                        const scoreValue = gradeMapping[selectElement.value];
                        if (typeof scoreValue === 'number' && !isNaN(scoreValue)) { scoreSumForIndicator += scoreValue; paketWithValueCount++; isIndicatorConsidered = true; }
                    }
                });
                if (paketWithValueCount > 0) totalScore += (scoreSumForIndicator / paketWithValueCount);
                else isIndicatorConsidered = false;
            } else if (!butir.isMultiPaket) {
                const selectId = `${indicator.id}_nilai`;
                const selectElement = document.getElementById(selectId);
                if (selectElement && selectElement.value !== "") {
                     const scoreValue = gradeMapping[selectElement.value];
                     if (typeof scoreValue === 'number' && !isNaN(scoreValue)) { totalScore += scoreValue; isIndicatorConsidered = true; }
                }
            }
            if (isIndicatorConsidered) { maxPossibleScore += 4; indicatorCount++; }
        });
    });

    const percentageScore = maxPossibleScore > 0 ? ((totalScore / maxPossibleScore) * 100) : 0;
    const finalGradeInfo = indicatorCount > 0 ? scoreToGrade(percentageScore) : { grade: "-", class: "" };
    totalScoreElement.textContent = `${percentageScore.toFixed(1)}% (${indicatorCount} ind.)`;
    finalGradeElement.textContent = finalGradeInfo.grade;
    finalGradeElement.classList.remove('grade-a', 'grade-b', 'grade-c', 'grade-tt');
    if (finalGradeInfo.class) finalGradeElement.classList.add(finalGradeInfo.class);
}


/** ==========================================================
 * FUNGSI UNTUK EKSPOR WORD (.DOC) - MENGGUNAKAN HTML DATA URI (OFFLINE/ONLINE COMPATIBLE)
 * ========================================================== */
async function exportToWord() {
    console.log("Export to Word function called (HTML Data URI method - Bukti Only).");
    try {
        // Ambil data dari formulir
        const getElementValue = (id) => document.getElementById(id)?.value || '';
        const namaAsesor = getElementValue("nama_asesor");
        const nia = getElementValue("nia_asesor");
        const namaSatuan = getElementValue("nama_satuan");
        const npsn = getElementValue("npsn_satuan");

        // --- Helper untuk mengambil konten Rekap/Catatan (TIDAK MENGAMBIL NILAI) ---
        const getRekapContent = (dataType, isMultiPaket, indicatorId) => {
            let content = '';
            if (isMultiPaket && selectedPaket.length > 0) {
                selectedPaket.forEach(paket => {
                    const data = document.querySelector(`textarea[name="${dataType}_paket${paket}_${indicatorId}"]`)?.value || "";
                    if (data.trim()) {
                        // Hanya tampilkan Paket dan Rekap Data (Nilai/Grade dihilangkan)
                        content += `<b>Paket ${paket}:</b><br>${data.replace(/\n/g, '<br>')}<br>`;
                    }
                });
            } else if (!isMultiPaket) {
                const data = document.querySelector(`textarea[name="${dataType}_${indicatorId}"]`)?.value || "";
                if (data.trim()) {
                    content = data.replace(/\n/g, '<br>');
                }
            }
            return content;
        };
        
        // --- 1. Mulai Buat String HTML ---
        let htmlContent = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head>
                <meta charset='utf-8'>
                <title>Laporan Asesmen</title>
                <style>
                    body { font-family: 'Times New Roman', Times, serif; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #000; padding: 8px; text-align: left; vertical-align: top; font-size: 10pt; }
                    th { background-color: #f2f2f2; text-align: center; font-weight: bold; }
                    .header-table td { border: none; padding: 2px 0; }
                    .butir-title-cell { font-weight: bold; text-align: center; vertical-align: middle; background-color: #f9f9f9; }
                    .butir-title-cell-butir { font-weight: bold; }
                </style>
            </head>
            <body>
        `;

        // 2. Data Asesor Header
        htmlContent += `
            <h1 style="text-align: center;">Rekapitulasi Data Penggalian Akreditasi</h1>
            <table class="header-table" style="width: 80%; margin: 10px auto;">
                <tr>
                    <td style="width: 25%;"><b>Nama Satuan Pendidikan:</b></td>
                    <td style="width: 25%;">${namaSatuan}</td>
                    <td style="width: 25%;"><b>Nama Asesor:</b></td>
                    <td style="width: 25%;">${namaAsesor}</td>
                </tr>
                <tr>
                    <td><b>NPSN:</b></td>
                    <td>${npsn}</td>
                    <td><b>NIA:</b></td>
                    <td>${nia}</td>
                </tr>
            </table>
            <br>
        `;

        // 3. Main Table Header
        htmlContent += `
            <table>
                <thead>
                    <tr>
                        <th style="width:10%;">Butir</th>
                        <th style="width:25%;">Indikator</th>
                        <th style="width:22%;">Rekap Dokumen</th>
                        <th style="width:22%;">Rekap Wawancara</th>
                        <th style="width:21%;">Rekap Observasi</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // 4. Main Table Body (Loop data)
        allData.forEach((butir) => {
            if (!butir || !butir.indicators || butir.indicators.length === 0) return;
            const rowSpan = butir.indicators.length;

            butir.indicators.forEach((indicator, index) => {
                
                let indicatorTitle = indicator.title || '';
                
                // Menghilangkan penambahan Nilai/Grade untuk Butir Tunggal
                // if (!butir.isMultiPaket) { ... } <- Bagian ini telah dihapus

                htmlContent += '<tr>';
                
                // Butir Cell (Merged)
                if (index === 0) {
                    htmlContent += `<td class="butir-title-cell" rowspan="${rowSpan}"><span class="butir-title-cell-butir">${butir.butirTitleShort || butir.butirTitle}</span></td>`;
                }

                // Indicator and Data Cells 
                htmlContent += `
                    <td>${indicatorTitle}</td>
                    <td>${getRekapContent('rekap_doc', butir.isMultiPaket, indicator.id)}</td>
                    <td>${getRekapContent('rekap_waw', butir.isMultiPaket, indicator.id)}</td>
                    <td>${getRekapContent('rekap_obs', butir.isMultiPaket, indicator.id)}</td>
                </tr>`;
            });
        });

        htmlContent += '</tbody></table>';

        // Bagian Summary Nilai Akhir tetap dihilangkan

        htmlContent += '</body></html>';
        
        // --- 6. Menggunakan Data URI ---
        const safeNamaSatuan = namaSatuan.replace(/[^a-zA-Z0-9]/g, '_') || 'SatuanPendidikan';
        const safeNamaAsesor = namaAsesor.replace(/[^a-zA-Z0-9]/g, '_') || 'Asesor';
        const fileName = `Rekap_Asesmen_${safeNamaSatuan}_${safeNamaAsesor}.doc`;
        
        // Data URI untuk Word
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(htmlContent);
        
        // Membuat elemen <a> untuk memicu download
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        
        fileDownload.href = source;
        fileDownload.download = fileName;
        fileDownload.click();
        
        document.body.removeChild(fileDownload);
        console.log("HTML-based Word download triggered successfully.");

    } catch (e) {
        console.error("FATAL Error saat membuat file Word:", e);
        alert(`Terjadi error kritis saat membuat file Word:\n${e.message}`);
    }
}


/** ==========================================================
 * FUNGSI UNTUK JUSTIFIKASI
 * ========================================================== */
function checkJustification(selectElement, textareaId) {
  const textarea = document.getElementById(textareaId);
  if (!textarea) return;
  const selectedValue = selectElement?.value || ""; // Tambah pengaman jika selectElement null
  if (selectedValue === "KURANG" || selectedValue === "SANGAT BAIK") {
    textarea.disabled = false; textarea.placeholder = "Mohon berikan justifikasi/rasional...";
  } else {
    textarea.disabled = true; textarea.placeholder = "Hanya untuk KURANG/SANGAT BAIK";
  }
}

/** ==========================================================
 * FUNGSI UNTUK PINDAH TAB PAKET
 * ========================================================== */
function switchTab(event, butirId, paket) {
    if (!butirId || !paket) return; // Pengaman
    const tabContents = document.querySelectorAll(`#butir-content-${butirId} .paket-tab-content`);
    tabContents.forEach(content => { content.style.display = "none"; content.classList.remove("active"); });
    const tabButtons = document.querySelectorAll(`#butir-tabs-${butirId} .paket-tab`);
    tabButtons.forEach(button => { button.classList.remove("active"); });
    const currentTabContent = document.getElementById(`paket-${paket}-${butirId}`);
    if (currentTabContent) { currentTabContent.style.display = "block"; currentTabContent.classList.add("active"); }
    if (event && event.currentTarget) { event.currentTarget.classList.add("active"); }
}

/** ==========================================================
 * FUNGSI PEMBUAT HTML KARTU INDIKATOR
 * ========================================================== */
function createIndicatorCardHTML(indicator, paketPrefix = "") {
    if (!indicator || typeof indicator !== 'object' || !indicator.id || !indicator.title) {
         console.error("createIndicatorCardHTML: Invalid indicator data:", indicator); return "";
    }
    const uniqueIdBase = paketPrefix ? `${paketPrefix}_${indicator.id}` : indicator.id;
    const justifikasiId = `just_${uniqueIdBase}`;
    const rublikContent = indicator.rublik || '<p>Rublik tidak tersedia.</p>';
    // Pastikan label memiliki 'for'
    return `
    <div class="indicator-card">
        <div class="indicator-header"><h3 class="indicator-title">${indicator.title}</h3></div>
        <div class="card-grid">
            <div class="grid-item rekap-doc"><label for="rekap_doc_${uniqueIdBase}">Rekap Dokumen/Dokumentasi</label><textarea id="rekap_doc_${uniqueIdBase}" name="rekap_doc_${uniqueIdBase}"></textarea></div>
            <div class="grid-item rekap-waw"><label for="rekap_waw_${uniqueIdBase}">Rekap Hasil Wawancara</label><textarea id="rekap_waw_${uniqueIdBase}" name="rekap_waw_${uniqueIdBase}"></textarea></div>
            <div class="grid-item rekap-obs"><label for="rekap_obs_${uniqueIdBase}">Rekap hasil observasi</label><textarea id="rekap_obs_${uniqueIdBase}" name="rekap_obs_${uniqueIdBase}"></textarea></div>
            <div class="grid-item-span"><div class="rubric-box">${rublikContent}</div></div>
            <div class="grid-item penilaian">
                <label for="${uniqueIdBase}_nilai">Penilaian</label>
                <select id="${uniqueIdBase}_nilai" class="penilaian-select"
                        onchange="checkJustification(this, '${justifikasiId}'); calculateAndUpdateGrade();">
                    <option value="">--Pilih--</option>
                    <option value="KURANG">KURANG</option>
                    <option value="CUKUP BAIK">CUKUP BAIK</option>
                    <option value="BAIK">BAIK</option>
                    <option value="SANGAT BAIK">SANGAT BAIK</option>
                </select>
            </div>
            <div class="grid-item justifikasi">
                <label for="${justifikasiId}">Justifikasi/Rasional</label>
                <textarea id="${justifikasiId}" name="just_${uniqueIdBase}" disabled placeholder="Hanya untuk KURANG/SANGAT BAIK"></textarea>
            </div>
        </div>
    </div>`;
}

/** ==========================================================
 * FUNGSI SIMPAN PROGRES
 * ========================================================== */
function saveProgress() {
    const dataToSave = {};
    const elementsToSave = document.querySelectorAll('#data-asesor-container input, #formulir-container textarea, #formulir-container select');
    elementsToSave.forEach(el => { if (el.id) { dataToSave[el.id] = (el.type === 'checkbox' ? el.checked : el.value); } });
    try {
        localStorage.setItem('asesmenProgress', JSON.stringify(dataToSave));
        const saveStatus = document.getElementById('save-status');
        if (saveStatus) { saveStatus.textContent = 'Progres tersimpan!'; setTimeout(() => { if(saveStatus) saveStatus.textContent = ''; }, 3000); }
        console.log("Progress saved.");
    } catch (e) { /* ... (error handling sama) ... */ }
}

/** ==========================================================
 * FUNGSI MUAT PROGRES
 * ========================================================== */
function loadProgress() {
     const savedData = localStorage.getItem('asesmenProgress');
    if (!savedData) { console.log("Tidak ada data tersimpan."); return null; }
    try {
        const data = JSON.parse(savedData);
        ['nama_asesor', 'nia_asesor', 'nama_satuan', 'npsn_satuan'].forEach(id => { const el = document.getElementById(id); if (el) el.value = data[id] || ''; });
        ['check_paket_a', 'check_paket_b', 'check_paket_c'].forEach(id => { const el = document.getElementById(id); if(el) el.checked = data[id] || false; });
        const errorMessage = document.getElementById("error-message");
        if (data['nama_asesor'] && errorMessage) {
             errorMessage.textContent = "Data tersimpan dimuat. Klik 'Mulai Penilaian' atau ubah data.";
             errorMessage.style.color = "#28a745"; // Hijau
        }
        console.log("Progress loaded.");
        return data;
    } catch (e) { /* ... (error handling sama) ... */ }
}

/** ==========================================================
 * FUNGSI ISI FORMULIR UTAMA (setelah dibuat)
 * ========================================================== */
function populateMainForm(data) {
    if (!data) { console.log("No saved data to populate."); return; }
    console.log("Populating main form...");
    // Perlu cari elemen lagi karena form baru dibuat
    const elementsToPopulate = document.querySelectorAll('#formulir-container textarea, #formulir-container select');
    console.log(`Found ${elementsToPopulate.length} elements to populate.`);
    elementsToPopulate.forEach(el => {
        if (el.id && data[el.id] !== undefined) {
             // Pastikan elemen masih ada di DOM
             if (document.body.contains(el)) {
                 el.value = data[el.id];
                 // console.log(`Populated ${el.id} with value: ${data[el.id]}`);
                 if (el.tagName === 'SELECT' && el.classList.contains('penilaian-select')) {
                      const justifikasiId = `just_${el.id.substring(0, el.id.lastIndexOf('_nilai'))}`;
                      const justifikasiEl = document.getElementById(justifikasiId);
                      if(justifikasiEl) {
                          checkJustification(el, justifikasiId); // Langsung panggil, tidak perlu timeout
                      }
                 }
             }
        } else if (el.tagName === 'SELECT' && document.body.contains(el)) {
             el.value = ""; // Default ke --Pilih--
        }
    });
    console.log("Form population complete.");
    // Hitung skor awal setelah form diisi
    calculateAndUpdateGrade();
}

/** ==========================================================
* FUNGSI HAPUS DATA TERSIMPAN
* ========================================================== */
function clearSavedData() {
    const confirmation = confirm("Apakah Anda yakin ingin menghapus semua data yang tersimpan di browser ini? Tindakan ini akan memuat ulang halaman.");
    if (confirmation) {
        try {
            localStorage.removeItem('asesmenProgress');
            console.log("Saved data cleared.");
            alert("Data tersimpan telah dihapus. Halaman akan dimuat ulang.");
            location.reload();
        } catch (e) { console.error("Failed to clear saved data:", e); alert("Gagal menghapus data."); }
    } else { console.log("Clear data cancelled."); }
}


/** ==========================================================
 * FUNGSI UTAMA (DOMContentLoaded)
 * ========================================================== */
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded. Initializing script...");

    // --- Persiapan Elemen (dengan try-catch) ---
    let mainContainer, wordButton, saveButton, clearButton, asesorContainer, mulaiBtn, errorMessage, actionContainer, namaAsesorInput, niaInput, namaSatuanInput, npsnInput, checkPaketA, checkPaketB, checkPaketC;
    try {
        mainContainer = document.getElementById("formulir-container");
        wordButton = document.getElementById("export-word-btn");
        saveButton = document.getElementById("save-progress-btn");
        clearButton = document.getElementById("clear-data-btn"); // Tombol Hapus
        asesorContainer = document.getElementById("data-asesor-container");
        mulaiBtn = document.getElementById("mulai-penilaian-btn");
        errorMessage = document.getElementById("error-message");
        actionContainer = document.querySelector(".action-buttons-container");
        namaAsesorInput = document.getElementById("nama_asesor");
        niaInput = document.getElementById("nia_asesor");
        namaSatuanInput = document.getElementById("nama_satuan");
        npsnInput = document.getElementById("npsn_satuan");
        checkPaketA = document.getElementById("check_paket_a");
        checkPaketB = document.getElementById("check_paket_b");
        checkPaketC = document.getElementById("check_paket_c");

        // Pengecekan Kritis
        if (!mainContainer || !wordButton || !saveButton || !clearButton || !asesorContainer || !mulaiBtn || !errorMessage || !actionContainer || !namaAsesorInput || !niaInput || !namaSatuanInput || !npsnInput || !checkPaketA || !checkPaketB || !checkPaketC) {
            throw new Error("Satu atau lebih elemen HTML penting tidak ditemukan!");
        }
         console.log("All critical elements verified.");

    } catch (e) {
        console.error("FATAL ERROR during element preparation:", e);
        const body = document.querySelector('body');
        if(body) body.innerHTML = `<div style="padding: 20px; text-align: center; color: red;"><h1>Error Kritis</h1><p>Gagal memuat aplikasi: ${e.message}. Periksa file index.html.</p></div>`;
        return;
    }

    // --- 1. MUAT PROGRES ---
    savedProgressData = loadProgress();

    // --- 2. LOGIKA TOMBOL "MULAI PENILAIAN" ---
    mulaiBtn.addEventListener("click", function() {
        console.log("Mulai Penilaian button clicked.");

        selectedPaket = []; // Reset dan ambil ulang
        if (checkPaketA.checked) selectedPaket.push('A');
        if (checkPaketB.checked) selectedPaket.push('B');
        if (checkPaketC.checked) selectedPaket.push('C');

        // Validasi
        if (!namaAsesorInput.value.trim() || !niaInput.value.trim() || !namaSatuanInput.value.trim() || !npsnInput.value.trim()) { errorMessage.textContent = "Semua data asesor wajib diisi!"; errorMessage.style.color = "#dc3545"; return; }
        if (selectedPaket.length === 0) { errorMessage.textContent = "Mohon pilih minimal satu Program Penugasan!"; errorMessage.style.color = "#dc3545"; return; }

        console.log("Validation passed. Selected Paket:", selectedPaket);
        errorMessage.textContent = "";
        asesorContainer.style.display = "none";
        mainContainer.style.display = "block";

        // Hapus butir-butir lama
        const oldButirBlocks = mainContainer.querySelectorAll('.butir-block');
        oldButirBlocks.forEach(block => block.remove());
        console.log("Old butir blocks removed.");

        // --- 3. BUAT FORMULIR ---
        console.log("Creating form...");
        if (typeof allData === 'undefined' || !Array.isArray(allData)) { console.error("'allData' is missing!"); errorMessage.textContent = "Error: Gagal memuat data butir."; errorMessage.style.color = "red"; return; }

        allData.forEach((butir) => {
            if (!butir || typeof butir !== 'object') { console.warn("Invalid butir data:", butir); return; }
            const butirBlock = document.createElement("div"); butirBlock.className = "butir-block";
            const butirTitle = document.createElement("h2"); butirTitle.className = "butir-title"; butirTitle.textContent = butir.butirTitleShort || `Butir ${butir.butirId}`; butirTitle.title = butir.butirTitle || ''; butirBlock.appendChild(butirTitle);

            if (butir.isMultiPaket) {
                const tabContainer = document.createElement("div"); tabContainer.className = "paket-tab-container"; tabContainer.id = `butir-tabs-${butir.butirId}`;
                const tabContentWrapper = document.createElement("div"); tabContentWrapper.id = `butir-content-${butir.butirId}`;
                selectedPaket.forEach((paket, index) => {
                    const tabButton = document.createElement("button"); tabButton.className = "paket-tab"; tabButton.textContent = `Paket ${paket}`; tabButton.onclick = (event) => switchTab(event, butir.butirId, paket);
                    const tabContent = document.createElement("div"); tabContent.id = `paket-${paket}-${butir.butirId}`; tabContent.className = "paket-tab-content";
                    if (index === 0) { tabButton.classList.add("active"); tabContent.classList.add("active"); tabContent.style.display = "block"; } else { tabContent.style.display = "none"; }
                    if(butir.indicators && Array.isArray(butir.indicators)){
                        butir.indicators.forEach(indicator => {
                            const cardHTML = createIndicatorCardHTML(indicator, `paket${paket}`);
                            if(cardHTML) { const tempDiv = document.createElement('div'); tempDiv.innerHTML = cardHTML.trim(); const cardElement = tempDiv.firstChild; if (cardElement) { tabContent.appendChild(cardElement); } }
                        });
                    }
                    tabContainer.appendChild(tabButton); tabContentWrapper.appendChild(tabContent);
                });
                butirBlock.appendChild(tabContainer); butirBlock.appendChild(tabContentWrapper);
            } else {
                if(butir.indicators && Array.isArray(butir.indicators)){
                    butir.indicators.forEach(indicator => {
                        const cardHTML = createIndicatorCardHTML(indicator, '');
                         if(cardHTML) { const tempDiv = document.createElement('div'); tempDiv.innerHTML = cardHTML.trim(); const indicatorCardElement = tempDiv.firstChild; if (indicatorCardElement) { butirBlock.appendChild(indicatorCardElement); } }
                    });
                }
            }
             // Masukkan butir SEBELUM wadah tombol aksi
             mainContainer.insertBefore(butirBlock, actionContainer);
        });
        console.log("Form creation complete.");

        // --- 4. ISI FORMULIR & HITUNG SKOR AWAL ---
        populateMainForm(savedProgressData);
    });

    // --- 5. LOGIKA TOMBOL SIMPAN, EKSPOR, HAPUS ---
    saveButton.addEventListener("click", saveProgress);
    wordButton.addEventListener("click", exportToWord);
    clearButton.addEventListener("click", clearSavedData); // Tambahkan listener hapus

    // --- 6. Otomatis klik "Mulai Penilaian" jika data valid tersimpan ---
    if (savedProgressData && savedProgressData['nama_asesor'] && asesorContainer.style.display !== 'none') {
        const savedPaketSelected = ['A', 'B', 'C'].some(p => savedProgressData[`check_paket_${p.toLowerCase()}`]);
        const asesorDataValid = savedProgressData['nama_asesor'].trim() !== '' && savedProgressData['nia_asesor'].trim() !== '' && savedProgressData['nama_satuan'].trim() !== '' && savedProgressData['npsn_satuan'].trim() !== '';

        if (savedPaketSelected && asesorDataValid) {
            console.log("Valid saved data found, auto-starting assessment...");
             setTimeout(() => { const btn = document.getElementById("mulai-penilaian-btn"); if(btn) btn.click(); }, 300);
        } else if (errorMessage && (!savedPaketSelected || !asesorDataValid)) {
             errorMessage.textContent = "Data tersimpan tidak lengkap. Periksa data asesor dan pilihan paket.";
             errorMessage.style.color = "#dc3545"; // Merah
        }
    } else {
         // Jika tidak auto-start, panggil hitung skor (untuk menampilkan '-' jika form belum dibuat)
         setTimeout(calculateAndUpdateGrade, 200);
    }

    // Panggil hitung skor sekali lagi setelah semua siap
     setTimeout(calculateAndUpdateGrade, 500);

});
