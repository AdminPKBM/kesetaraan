// File: script.js (Versi Final - Tabs untuk 1,2,3,4,15 + Listener Klik)

// --- Variabel Global & Fungsi Skor/Grade (TIDAK BERUBAH) ---
let selectedPaket = [];
let savedProgressData = null;
const LOCAL_STORAGE_KEY = 'asesmenProgress_v2';
const gradeMapping = { "SANGAT BAIK": 4, "BAIK": 3, "CUKUP BAIK": 2, "KURANG": 1, "": 0 };
const scoreToGrade = (scorePercent) => {
    if (scorePercent > 85) return { grade: "SANGAT BAIK", class: "grade-a" };
    if (scorePercent > 70) return { grade: "BAIK", class: "grade-b" };
    if (scorePercent > 50) return { grade: "CUKUP BAIK", class: "grade-c" };
    if (scorePercent >= 0) return { grade: "KURANG", class: "grade-tt" };
    return { grade: "-", class: "" };
};

/** ==========================================================
 * FUNGSI HITUNG & UPDATE SKOR (Sudah Benar)
 * ========================================================== */
function calculateAndUpdateGrade() {
    let totalScore = 0, maxPossibleScore = 0, indicatorCount = 0;
    const specialNavButirIds = ["b1", "b2", "b3", "b4", "b15"];

    if (selectedPaket.length === 0) {
       selectedPaket = [];
       ['a', 'b', 'c'].forEach(p => { 
           const check = document.getElementById(`check_paket_${p}`); 
           if (check && check.checked) selectedPaket.push(p.toUpperCase()); 
        });
    }

    const totalScoreElement = document.getElementById('total-score');
    const finalGradeElement = document.getElementById('final-grade');
    if (!totalScoreElement || !finalGradeElement) return;
    if (typeof allData === 'undefined' || !Array.isArray(allData)) { return; }

    allData.forEach(butir => {
         if (!butir || !butir.indicators || !Array.isArray(butir.indicators)) return;
        
        butir.indicators.forEach(indicator => {
            if (!indicator || !indicator.id) return;
            let scoreSumForIndicator = 0, paketWithValueCount = 0, isIndicatorConsidered = false;

            const useTabs = specialNavButirIds.includes(butir.butirId);

            if (butir.isMultiPaket && useTabs && selectedPaket.length > 0) {
                // KASUS 1: Butir 1, 2, 3, 4, 15 (Baca data per paket dan rata-rata)
                selectedPaket.forEach(paket => {
                    const selectId = `paket${paket}_${indicator.id}_nilai`;
                    const selectElement = document.getElementById(selectId);
                    if (selectElement && selectElement.value !== "") {
                        const scoreValue = gradeMapping[selectElement.value];
                        if (typeof scoreValue === 'number' && !isNaN(scoreValue)) { 
                            scoreSumForIndicator += scoreValue; 
                            paketWithValueCount++; 
                            isIndicatorConsidered = true; 
                        }
                    }
                });
                if (paketWithValueCount > 0) totalScore += (scoreSumForIndicator / paketWithValueCount);
            
            } else {
                // KASUS 2: Butir "Umum" (SEMUA butir lain)
                const selectId = `${indicator.id}_nilai`;
                const selectElement = document.getElementById(selectId);
                if (selectElement && selectElement.value !== "") {
                     const scoreValue = gradeMapping[selectElement.value];
                     if (typeof scoreValue === 'number' && !isNaN(scoreValue)) { 
                         totalScore += scoreValue; 
                         isIndicatorConsidered = true; 
                    }
                }
            }
            if (isIndicatorConsidered) { maxPossibleScore += 4; indicatorCount++; }
        });
    });

    const percentageScore = maxPossibleScore > 0 ? ((totalScore / maxPossibleScore) * 100) : 0;
    const finalGradeInfo = indicatorCount > 0 ? scoreToGrade(percentageScore) : { grade: "-", class: "" };
    
    totalScoreElement.textContent = `${percentageScore.toFixed(1)}% (${indicatorCount} ind.)`;
    finalGradeElement.textContent = finalGradeInfo.grade;
    finalGradeElement.className = '';
    if (finalGradeInfo.class) finalGradeElement.classList.add(finalGradeInfo.class);
}


/** ==========================================================
 * FUNGSI EKSPOR WORD (Sudah Benar)
 * ========================================================== */
async function exportToWord() {
    try {
        const getElementValue = (id) => document.getElementById(id)?.value || '';
        const namaAsesor = getElementValue("nama_asesor");
        const nia = getElementValue("nia_asesor");
        const namaSatuan = getElementValue("nama_satuan");
        const npsn = getElementValue("npsn_satuan");
        const specialNavButirIds = ["b1", "b2", "b3", "b4", "b15"];

        const getRekapContent = (dataType, isMultiPaket, indicatorId, butirId) => {
            let content = '';
            const useTabs = specialNavButirIds.includes(butirId);
            if (isMultiPaket && useTabs && selectedPaket.length > 0) {
                selectedPaket.forEach(paket => {
                    const data = document.querySelector(`textarea[name="${dataType}_paket${paket}_${indicatorId}"]`)?.value || "";
                    if (data.trim()) content += `<b>Paket ${paket}:</b><br>${data.replace(/\n/g, '<br>')}<br>`;
                });
            } else {
                const data = document.querySelector(`textarea[name="${dataType}_${indicatorId}"]`)?.value || "";
                if (data.trim()) content = data.replace(/\n/g, '<br>');
            }
            return content || '-';
        };
        
        let htmlContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Laporan Asesmen</title><style>body { font-family: 'Times New Roman', Times, serif; } table { width: 100%; border-collapse: collapse; margin-top: 20px; } th, td { border: 1px solid #000; padding: 8px; text-align: left; vertical-align: top; font-size: 10pt; } th { background-color: #f2f2f2; text-align: center; font-weight: bold; } .header-table td { border: none; padding: 2px 0; } .butir-title-cell { font-weight: bold; text-align: center; vertical-align: middle; background-color: #f9f9f9; }</style></head><body>`;
        htmlContent += `<h1 style="text-align: center;">Rekapitulasi Data Penggalian Akreditasi</h1><table class="header-table" style="width: 80%; margin: 10px auto;"><tr><td style="width: 25%;"><b>Nama Satuan Pendidikan:</b></td><td style="width: 25%;">${namaSatuan}</td><td style="width: 25%;"><b>Nama Asesor:</b></td><td style="width: 25%;">${namaAsesor}</td></tr><tr><td><b>NPSN:</b></td><td>${npsn}</td><td><b>NIA:</b></td><td>${nia}</td></tr></table><br>`;
        htmlContent += `<table><thead><tr><th style="width:10%;">Butir</th><th style="width:25%;">Indikator</th><th style="width:22%;">Rekap Dokumen</th><th style="width:22%;">Rekap Wawancara</th><th style="width:21%;">Rekap Observasi</th></tr></thead><tbody>`;

        allData.forEach((butir) => {
            if (!butir || !butir.indicators || butir.indicators.length === 0) return;
            const rowSpan = butir.indicators.length;
            butir.indicators.forEach((indicator, index) => {
                let indicatorTitle = indicator.title || '';
                htmlContent += '<tr>';
                if (index === 0) htmlContent += `<td class="butir-title-cell" rowspan="${rowSpan}">${butir.butirTitleShort || butir.butirTitle}</td>`;
                htmlContent += ` 
                    <td>${indicatorTitle}</td>
                    <td>${getRekapContent('rekap_doc', butir.isMultiPaket, indicator.id, butir.butirId)}</td>
                    <td>${getRekapContent('rekap_waw', butir.isMultiPaket, indicator.id, butir.butirId)}</td>
                    <td>${getRekapContent('rekap_obs', butir.isMultiPaket, indicator.id, butir.butirId)}</td>
                </tr>`;
            });
        });
        htmlContent += '</tbody></table></body></html>';

        const safeNamaSatuan = namaSatuan.replace(/[^a-zA-Z0-9]/g, '_') || 'Satuan';
        const safeNamaAsesor = namaAsesor.replace(/[^a-zA-Z0-9]/g, '_') || 'Asesor';
        const fileName = `Rekap_Asesmen_${safeNamaSatuan}_${safeNamaAsesor}.doc`;
        
        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(htmlContent);
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = fileName;
        fileDownload.click();
        document.body.removeChild(fileDownload);
    } catch (error) {
        console.error("Gagal mengekspor Word:", error);
    }
}


/** ==========================================================
 * FUNGSI RENDER FORM (Sudah Benar)
 * ========================================================== */
function renderForm() {
    const container = document.getElementById('formulir-container');
    if (!container || typeof allData === 'undefined') return;

    let formHTML = '';
    const specialNavButirIds = ["b1", "b2", "b3", "b4", "b15"];

    allData.forEach(butir => {
        formHTML += `<div id="${butir.butirId}_container" class="butir-block">`;
        formHTML += `<h3 class="butir-title">${butir.butirTitleShort}</h3>`;

        butir.indicators.forEach(indicator => {
            let indicatorContentHTML = '';
            const useTabs = specialNavButirIds.includes(butir.butirId);

            if (butir.isMultiPaket && useTabs) {
                // --- 1. RENDER DENGAN TABS (Butir 1, 2, 3, 4, 15) ---
                let tabsHTML = '<nav class="paket-nav">';
                let panelsHTML = '<div class="paket-content-container">';

                selectedPaket.forEach((paket, index) => {
                    const isActive = (index === 0);
                    const activeClass = isActive ? 'active' : '';
                    tabsHTML += `<a href="#" class="paket-tab-link ${activeClass}" data-paket="${paket}" data-indicator-id="${indicator.id}">Paket ${paket}</a>`;

                    // PANEL KONTEN: Semua isian ada di dalam sini
                    panelsHTML += `
                        <div class="paket-content-panel ${activeClass}" id="panel_paket${paket}_${indicator.id}">
                            <div class="card-grid">
                                <div class="grid-item">
                                    <label>Bukti Fisik / Dokumen:</label>
                                    <div class="rubric-box">${indicator.buktiFisik || 'N/A'}</div>
                                </div>
                                <div class="grid-item">
                                    <label>Penilaian (Paket ${paket}):</label>
                                    ${generateGradeSelect(true, indicator.id, paket)}
                                </div>
                                <div class="grid-item-span">
                                    <label>Rekap Telaah Dokumen (Paket ${paket}):</label>
                                    ${generateTextArea('rekap_doc', true, indicator.id, indicator.rekapDokumen, paket)}
                                </div>
                                <div class="grid-item-span">
                                    <label>Rekap Wawancara (Paket ${paket}):</label>
                                    ${generateTextArea('rekap_waw', true, indicator.id, indicator.rekapWawancara, paket)}
                                </div>
                                <div class="grid-item-span">
                                    <label>Rekap Observasi (Paket ${paket}):</label>
                                    ${generateTextArea('rekap_obs', true, indicator.id, indicator.rekapObservasi, paket)}
                                </div>
                            </div>
                        </div>
                    `;
                });
                tabsHTML += '</nav>';
                panelsHTML += '</div>';
                indicatorContentHTML = tabsHTML + panelsHTML;
            
            } else {
                // --- 2. RENDER "UMUM" (SEMUA butir lain) ---
                indicatorContentHTML = `
                    <div class="card-grid">
                        <div class="grid-item">
                            <label>Bukti Fisik / Dokumen:</label>
                            <div class="rubric-box">${indicator.buktiFisik || 'N/A'}</div>
                        </div>
                        <div class="grid-item">
                            <label>Rekap Telaah Dokumen:</label>
                            ${generateTextArea('rekap_doc', false, indicator.id, indicator.rekapDokumen)}
                        </div>
                        <div class="grid-item">
                            <label>Penilaian:</label>
                            ${generateGradeSelect(false, indicator.id)}
                        </div>
                        <div class="grid-item-span">
                            <label>Rekap Wawancara:</label>
                            ${generateTextArea('rekap_waw', false, indicator.id, indicator.rekapWawancara)}
                        </div>
                        <div class="grid-item-span">
                            <label>Rekap Observasi:</label>
                            ${generateTextArea('rekap_obs', false, indicator.id, indicator.rekapObservasi)}
                        </div>
                    </div>
                `;
            }

            formHTML += `
                <div class="indicator-card" id="${indicator.id}">
                    <div class="indicator-header">
                        <h4 class="indicator-title">${indicator.title}</h4>
                    </div>
                    ${indicatorContentHTML}
                </div>
            `;
        });
        formHTML += `</div>`;
    });

    const actionButtons = container.querySelector('.action-buttons-container');
    if(actionButtons) actionButtons.insertAdjacentHTML('afterend', formHTML);
    else container.innerHTML = formHTML;
}


/** ==========================================================
 * FUNGSI HELPER (Sudah Benar)
 * ========================================================== */

function generateGradeSelect(isMultiPaket, indicatorId, specificPaket = null) {
    const options = '<option value="">-- Pilih Nilai --</option><option value="SANGAT BAIK">SANGAT BAIK (4)</option><option value="BAIK">BAIK (3)</option><option value="CUKUP BAIK">CUKUP BAIK (2)</option><option value="KURANG">KURANG (1)</option>';
    if (isMultiPaket && specificPaket) {
        const selectId = `paket${specificPaket}_${indicatorId}_nilai`;
        return `<select id="${selectId}" name="${selectId}" class="grade-select">${options}</select>`;
    } else {
        const selectId = `${indicatorId}_nilai`;
        return `<select id="${selectId}" name="${selectId}" class="grade-select">${options}</select>`;
    }
}

function generateTextArea(dataType, isMultiPaket, indicatorId, placeholderText = '', specificPaket = null) {
    const cleanPlaceholder = placeholderText.replace(/<br\s*\/?>/gi, '\n');
    if (isMultiPaket && specificPaket) {
        const areaId = `${dataType}_paket${specificPaket}_${indicatorId}`;
        return `<textarea id="${areaId}" name="${areaId}" class="rekap-area" placeholder="Rekap untuk Paket ${specificPaket}...">${cleanPlaceholder}</textarea>`;
    } else {
        const areaId = `${dataType}_${indicatorId}`;
        return `<textarea id="${areaId}" name="${areaId}" class="rekap-area">${cleanPlaceholder}</textarea>`;
    }
}


/** ==========================================================
 * FUNGSI localStorage (TIDAK BERUBAH)
 * ========================================================== */
function getFormData() {
    const data = { meta: { selectedPaket: selectedPaket, nama_asesor: document.getElementById('nama_asesor')?.value, nia_asesor: document.getElementById('nia_asesor')?.value, nama_satuan: document.getElementById('nama_satuan')?.value, npsn_satuan: document.getElementById('npsn_satuan')?.value }, values: {} };
    document.querySelectorAll('.grade-select, .rekap-area, #data-asesor-container input').forEach(el => { if (el.id) { data.values[el.id] = el.value; } });
    return data;
}
function saveProgress() {
    try { const dataToSave = getFormData(); localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave)); return true; } catch (error) { console.error("Gagal menyimpan progres:", error); return false; }
}
function triggerSaveProgress() {
    if (saveProgress()) {
        const status = document.getElementById('save-status');
        if (status) { status.textContent = 'Progres Tersimpan!'; status.style.color = 'green'; setTimeout(() => { status.textContent = ''; }, 2500); }
    } else { alert("Gagal menyimpan progres."); }
}
function loadProgress() {
    try { const savedData = localStorage.getItem(LOCAL_STORAGE_KEY); if (savedData) { savedProgressData = JSON.parse(savedData); return true; } } catch (error) { console.error("Gagal memuat progres:", error); }
    return false;
}
function populateFormFromData() {
    if (!savedProgressData || !savedProgressData.values) return;
    Object.keys(savedProgressData.values).forEach(id => { const el = document.getElementById(id); if (el) { el.value = savedProgressData.values[id]; if (id.startsWith('check_paket_')) { el.checked = (el.value === "A" || el.value === "B" || el.value === "C"); } } });
    selectedPaket = savedProgressData.meta.selectedPaket || [];
}
function clearData() {
    if (confirm("Apakah Anda yakin ingin menghapus semua progres yang tersimpan? Data yang sudah diisi akan hilang dan halaman akan dimuat ulang.")) { localStorage.removeItem(LOCAL_STORAGE_KEY); window.location.reload(); }
}


/** ==========================================================
 * FUNGSI INISIALISASI & LISTENER (Sudah Benar)
 * ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-awal');
    const formContainer = document.getElementById('formulir-container');
    const startButton = document.getElementById('mulai-penilaian-btn');
    const errorMsg = document.getElementById('error-message');
    const saveBtn = document.getElementById('save-progress-btn');
    const exportBtn = document.getElementById('export-word-btn');
    const clearBtn = document.getElementById('clear-data-btn');

    if (loadProgress()) {
        populateFormFromData(); renderForm(); populateFormFromData(); 
        addDynamicListeners(); // <-- Ini penting
        calculateAndUpdateGrade();
        formContainer.style.display = 'block'; modal.style.display = 'none';
    } else { modal.style.display = 'flex'; }

    if (startButton) {
        startButton.addEventListener('click', () => {
            const namaAsesor = document.getElementById('nama_asesor').value;
            const namaSatuan = document.getElementById('nama_satuan').value;
            if (!namaAsesor.trim() || !namaSatuan.trim()) { errorMsg.textContent = 'Nama Asesor dan Nama Satuan Pendidikan wajib diisi.'; errorMsg.style.display = 'block'; return; }
            selectedPaket = [];
            ['a', 'b', 'c'].forEach(p => { const check = document.getElementById(`check_paket_${p}`); if (check && check.checked) { selectedPaket.push(p.toUpperCase()); } });
            if (selectedPaket.length === 0) { errorMsg.textContent = 'Anda harus memilih minimal satu Paket Program (A, B, atau C).'; errorMsg.style.display = 'block'; return; }
            errorMsg.style.display = 'none';
            saveProgress(); renderForm(); 
            addDynamicListeners(); // <-- Ini penting
            modal.style.display = 'none'; formContainer.style.display = 'block';
        });
    }
    if(saveBtn) saveBtn.addEventListener('click', triggerSaveProgress);
    if(exportBtn) exportBtn.addEventListener('click', exportToWord);
    if(clearBtn) clearBtn.addEventListener('click', clearData);
});

/**
 * Ini adalah fungsi PENTING yang membuat TABS bekerja
 */
function addDynamicListeners() {
    const formContainer = document.getElementById('formulir-container');
    if (!formContainer) return;

    // Listener untuk auto-save saat nilai/rekap berubah
    formContainer.addEventListener('change', (event) => {
        if (event.target.classList.contains('grade-select')) {
            calculateAndUpdateGrade(); triggerSaveProgress();
        }
    });
    document.getElementById('data-asesor-container')?.addEventListener('input', (event) => {
        if (event.target.tagName === 'INPUT') triggerSaveProgress();
    });


    // --- INI ADALAH LOGIKA KLIK TAB ---
    formContainer.addEventListener('click', (event) => {
        const target = event.target;
        
        // Cek apakah yang diklik adalah link tab
        if (target.classList.contains('paket-tab-link')) {
            event.preventDefault(); // Hentikan aksi default link '#'

            const paket = target.dataset.paket;
            const indicatorId = target.dataset.indicatorId;
            
            // Temukan 'indicator-card' terdekat sebagai scope
            const indicatorCard = target.closest('.indicator-card');
            if (!indicatorCard) return;

            // 1. Nonaktifkan semua tab & panel di dalam 'indicator-card' ini
            indicatorCard.querySelectorAll('.paket-tab-link').forEach(tab => {
                tab.classList.remove('active');
            });
            indicatorCard.querySelectorAll('.paket-content-panel').forEach(panel => {
                panel.classList.remove('active');
            });

            // 2. Aktifkan tab yang di-klik
            target.classList.add('active');

            // 3. Aktifkan panel yang sesuai
            const targetPanel = indicatorCard.querySelector(`#panel_paket${paket}_${indicatorId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        }
    });
}