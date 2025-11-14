/**
 * =======================================================
 * FUNGSI UTAMA UNTUK MENGELOLA INTERAKSI FORMULIR ASESOR
 * =======================================================
 * File: script.js
 */

// Global state untuk menyimpan data asesmen yang sedang berjalan
let ASESMEN_DATA = {};
const STORAGE_KEY = 'asesorFormProgress';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Definisikan semua variabel DOM
    const modalAwal = document.getElementById('modal-awal');
    const mulaiBtn = document.getElementById('mulai-penilaian-btn');
    const formulirContainer = document.getElementById('formulir-container');
    const errorMessage = document.getElementById('error-message');
    const formStepsNavigation = document.getElementById('form-steps-navigation');
    const paketCheckboxes = document.querySelectorAll('.paket-checkbox input[type="checkbox"]');
    
    // Elemen Display Ringkasan Data (di formulir utama)
    const displayNamaSatuan = document.getElementById('display-nama-satuan');
    const displayNPSNSatuan = document.getElementById('display-npsn-satuan');
    const displayProgram = document.getElementById('display-program');
    
    // Elemen Input Data Asesor (di modal)
    const namaAsesorInput = document.getElementById('nama_asesor');
    const niaAsesorInput = document.getElementById('nia_asesor');
    const namaSatuanInput = document.getElementById('nama_satuan');
    const npsnSatuanInput = document.getElementById('npsn_satuan');

    // 2. Event Listener untuk Tombol 'Mulai Penilaian'
    if (mulaiBtn) {
        mulaiBtn.addEventListener('click', handleMulaiPenilaian);
    }
    
    // NOTE: checkLocalStorage() dinonaktifkan untuk fokus pada fungsionalitas tombol
    // checkLocalStorage(); 

    /**
     * FUNGSI UTAMA: MENGATUR TOMBOL MULAI PENILAIAN
     */
    function handleMulaiPenilaian() {
        errorMessage.textContent = ''; // Bersihkan pesan error

        // 3.1. Kumpulkan Data Input
        const dataAsesor = {
            nama_asesor: namaAsesorInput.value.trim(),
            nia_asesor: niaAsesorInput.value.trim(),
            nama_satuan: namaSatuanInput.value.trim(),
            npsn_satuan: npsnSatuanInput.value.trim(),
            selected_pakets: Array.from(paketCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value)
        };

        // 3.2. Validasi Input
        const requiredFields = {
            nama_asesor: "Nama Asesor",
            nia_asesor: "NIA Asesor",
            nama_satuan: "Nama Satuan",
            npsn_satuan: "NPSN Satuan"
        };
        
        let isValid = true;
        for (const key in requiredFields) {
            if (!dataAsesor[key]) {
                errorMessage.textContent = `${requiredFields[key]} wajib diisi.`;
                isValid = false;
                break;
            }
        }
        
        if (!isValid) return;

        if (dataAsesor.selected_pakets.length === 0) {
            errorMessage.textContent = 'Anda harus memilih minimal satu Paket Program.';
            return;
        }

        // 3.3. Transisi UI dan Muat Formulir
        ASESMEN_DATA = dataAsesor; // Simpan ke state global

        // Perbarui tampilan ringkasan data di formulir utama
        if (displayNamaSatuan) displayNamaSatuan.textContent = dataAsesor.nama_satuan;
        if (displayNPSNSatuan) displayNPSNSatuan.textContent = dataAsesor.npsn_satuan;
        if (displayProgram) displayProgram.textContent = dataAsesor.selected_pakets.join(', ');

        // PENTING: Panggil fungsi untuk membangun formulir
        loadFormulir(dataAsesor.selected_pakets);

        // Transisi UI: Tutup Modal dan Tampilkan Formulir Utama
        if (modalAwal) modalAwal.style.display = 'none';
        if (formulirContainer) formulirContainer.style.display = 'block';
    }

    /**
     * FUNGSI HELPER: MENGATUR TAMPILAN TAB BUTIR BERPAKET (Cth: Butir 1.1)
     */
    window.showPaketContent = (indicatorId, paket) => {
        const tabLinks = document.querySelectorAll(`#paket-nav-${indicatorId} .paket-tab-link`);
        const contentPanels = document.querySelectorAll(`#indicator-${indicatorId} .paket-content-panel`);
        
        tabLinks.forEach(link => link.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));
        
        // Cari tautan yang sesuai
        const activeLink = document.querySelector(`#paket-nav-${indicatorId} a[data-paket="${paket}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Tampilkan konten yang sesuai
        const activeContent = document.getElementById(`content-${indicatorId}-${paket}`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }
    
    
    // --- FUNGSI PERHITUNGAN SKOR DINAMIS ---
    
    function setupScoreListeners() {
        // Cari semua elemen <select> yang id-nya diawali 'score-'
        const scoreSelects = document.querySelectorAll('select[id^="score-"]');
        
        scoreSelects.forEach(select => {
            select.removeEventListener('change', calculateTotalScore); 
            select.addEventListener('change', calculateTotalScore);
        });

        calculateTotalScore();
    }

    function calculateTotalScore() {
        const selectedPakets = ASESMEN_DATA.selected_pakets || [];
        
        if (selectedPakets.length === 0) return; 
        
        const scoresByIndicator = {}; 
        const scoreInputs = document.querySelectorAll('select[id^="score-"]');
        
        scoreInputs.forEach(input => {
            const fullId = input.id.replace('score-', ''); 
            const scoreValue = parseFloat(input.value);

            if (isNaN(scoreValue)) return; 

            let indicatorId;
            const parts = fullId.split('-');
            
            // Tentukan ID Indikator (1-1 atau 1-1-A)
            // Jika ada 3 bagian (misalnya 1, 1, A), indikatornya adalah 1-1
            if (parts.length === 3) {
                indicatorId = `${parts[0]}-${parts[1]}`; 
            } else if (parts.length === 2) {
                // Jika hanya 2 bagian (misalnya 1, 2), indikatornya adalah 1-2
                indicatorId = fullId; 
            } else {
                return; // Lewati jika format ID tidak dikenal
            }

            if (!scoresByIndicator[indicatorId]) {
                scoresByIndicator[indicatorId] = [];
            }
            // Catatan: Setiap butir dinilai (baik per paket atau universal) dianggap sebagai
            // satu butir perhitungan dalam rata-rata dimensi.
            scoresByIndicator[indicatorId].push(scoreValue);
        });

        let totalScoreAllIndicators = 0;
        let countButirDinilai = 0;

        for (const indicatorId in scoresByIndicator) {
            const scores = scoresByIndicator[indicatorId];
            
            // Dalam kasus butir bertab (Butir 1.1), kita ambil rata-rata dari semua paket yang dinilai.
            // Dalam kasus butir non-tab (Butir 1.2), hanya ada satu skor.
            const sumOfScores = scores.reduce((sum, current) => sum + current, 0);
            const avgIndicatorScore = sumOfScores / scores.length;
            
            totalScoreAllIndicators += avgIndicatorScore;
            countButirDinilai++;
        }

        let finalScore = 0;
        if (countButirDinilai > 0) {
            finalScore = totalScoreAllIndicators / countButirDinilai;
        }

        const finalGrade = determineGrade(finalScore);

        const totalScoreElement = document.getElementById('total-score');
        const finalGradeElement = document.getElementById('final-grade');

        if (totalScoreElement) {
            totalScoreElement.textContent = finalScore > 0 ? finalScore.toFixed(2) : '-';
        }
        if (finalGradeElement) {
            finalGradeElement.textContent = finalGrade;
        }
    }

    function determineGrade(score) {
        if (score >= 3.51) return 'A (Unggul)';
        if (score >= 2.51) return 'B (Baik)';
        if (score >= 1.51) return 'C (Cukup)';
        if (score > 0) return 'TT (Tidak Terakreditasi)';
        return '-';
    }
    
    // --- FUNGSI PEMBANGUN FORMULIR DINAMIS ---
    
    function loadFormulir(selectedPakets) {
        let finalHTML = '';
        const quickNavTabs = document.getElementById('quick-navigation-tabs');
        if (quickNavTabs) quickNavTabs.innerHTML = ''; // Kosongkan tab navigasi cepat

        FORM_DATA.forEach((dimension, dimIndex) => {
            let dimensionContent = '';
            
            dimension.indicators.forEach(indicator => {
                const isRelevant = indicator.pakets.includes('All') || 
                                    indicator.pakets.some(p => selectedPakets.includes(p));

                if (isRelevant) {
                    dimensionContent += generateFormHTML(indicator, selectedPakets);
                }
            });

            if (dimensionContent) {
                // Tambahkan Tab Navigasi Cepat
                const activeClass = dimIndex === 0 ? 'active' : '';
                if (quickNavTabs) {
                    quickNavTabs.innerHTML += `
                        <button class="${activeClass}" onclick="document.getElementById('dimensi-${dimension.id}').scrollIntoView({ behavior: 'smooth' })">
                            Dimensi ${dimension.id}
                        </button>
                    `;
                }
                
                // Tambahkan Dimensi Block
                finalHTML += `
                    <div class="butir-block" id="dimensi-${dimension.id}">
                        <h2 class="butir-title">${dimension.id}. ${dimension.title.split('. ')[1]}</h2>
                        ${dimensionContent}
                    </div>
                `;
            }
        });

        if (formStepsNavigation) formStepsNavigation.innerHTML = finalHTML;
        
        // Panggil ini untuk memasang event listener ke semua select skor
        setupScoreListeners(); 

        // Atur tab butir pertama agar aktif
        FORM_DATA.forEach(dimension => {
            dimension.indicators.forEach(indicator => {
                if (indicator.is_tabbed) {
                    const firstActivePaket = indicator.pakets.find(p => selectedPakets.includes(p));
                    if (firstActivePaket) {
                        // Panggil showPaketContent untuk mengaktifkan tab pertama
                        showPaketContent(indicator.id, firstActivePaket);
                    }
                }
            });
        });
        
        // Gulir ke dimensi pertama setelah dimuat (opsional)
        const firstDimensi = document.getElementById(`dimensi-1`);
        if (firstDimensi) {
            firstDimensi.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * FUNGSI HELPER: MENGHASILKAN HTML FORMULIR UNTUK SATU INDIKATOR
     */
    function generateFormHTML(indicator, selectedPakets) {
        const indicatorId = indicator.id;
        let contentPanelsHTML = '';
        let tabLinksHTML = '';

        const displayPakets = indicator.pakets.includes('All') ? selectedPakets : indicator.pakets.filter(p => selectedPakets.includes(p));

        if (indicator.is_tabbed && displayPakets.length >= 1) { 
            // LOGIKA TABBED (Cth: Butir 1.1)
            
            displayPakets.forEach((paket, index) => {
                const isActive = index === 0; 
                const rubricKey = indicator.pakets.includes('All') ? 'All' : paket;
                const rubrics = indicator.rubrics[rubricKey] || [];
                const scoreId = `score-${indicatorId}-${paket}`;
                const catatanId = `catatan-${indicatorId}-${paket}`;
                
                // 1. Buat Tautan Tab
                tabLinksHTML += `
                    <a class="paket-tab-link ${isActive ? 'active' : ''}" 
                       data-paket="${paket}" 
                       onclick="showPaketContent('${indicatorId}', '${paket}')">Paket ${paket}</a>
                `;

                // 2. Buat Panel Konten
                contentPanelsHTML += `
                    <div class="paket-content-panel ${isActive ? 'active' : ''}" id="content-${indicatorId}-${paket}">
                        <div class="rubric-box grid-item-span">
                            <h4>Rubrik Penilaian Paket ${paket}</h4>
                            <ul>
                                ${rubrics.map(r => `<li>${r}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="card-grid">
                            <div class="grid-item">
                                <label for="${scoreId}">Skor Penilaian:</label>
                                <select id="${scoreId}" name="${scoreId}">
                                    <option value="" disabled selected>Pilih Skor</option>
                                    <option value="4">4 - A</option>
                                    <option value="3">3 - B</option>
                                    <option value="2">2 - C</option>
                                    <option value="1">1 - TT</option>
                                </select>
                            </div>
                            
                            <div class="grid-item grid-item-span">
                                <label for="${catatanId}">Catatan/Komentar Asesor (Paket ${paket}):</label>
                                <textarea id="${catatanId}" name="${catatanId}" placeholder="Berikan catatan singkat terkait bukti yang ditemukan atau kekurangan yang perlu diperbaiki."></textarea>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            return `
                <div class="indicator-card" id="indicator-${indicatorId}">
                    <div class="indicator-header">
                        <h3 class="indicator-title">${indicator.id}. ${indicator.title}</h3>
                        <p style="font-size: 0.9em; color: var(--secondary);">${indicator.description}</p>
                    </div>
                    
                    <div class="paket-nav" id="paket-nav-${indicatorId}">
                        ${tabLinksHTML}
                    </div>
                    
                    <div class="paket-tabs-container">
                        ${contentPanelsHTML}
                    </div>
                </div>
            `;
        
        } else {
            // LOGIKA NON-TABBED (Cth: Butir 1.2)
            const paketDisplay = displayPakets.join(', ');
            const rubricKey = indicator.pakets.includes('All') ? 'All' : displayPakets[0];
            const rubrics = indicator.rubrics[rubricKey] || [];
            const scoreId = `score-${indicatorId}`;
            const catatanId = `catatan-${indicatorId}`;
            
            return `
                <div class="indicator-card" id="indicator-${indicatorId}">
                    <div class="indicator-header">
                        <h3 class="indicator-title">${indicator.id}. ${indicator.title}</h3>
                        <p style="font-size: 0.9em; color: var(--secondary);">${indicator.description} (Berlaku untuk Paket: ${paketDisplay})</p>
                    </div>
                    
                    <div class="rubric-box grid-item-span">
                        <h4>Rubrik Penilaian${indicator.pakets.includes('All') ? ' Universal' : ` Paket ${paketDisplay}`}</h4>
                        <ul>
                            ${rubrics.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="card-grid">
                        <div class="grid-item">
                            <label for="${scoreId}">Skor Penilaian:</label>
                            <select id="${scoreId}" name="${scoreId}">
                                <option value="" disabled selected>Pilih Skor</option>
                                <option value="4">4 - A</option>
                                <option value="3">3 - B</option>
                                <option value="2">2 - C</option>
                                <option value="1">1 - TT</option>
                            </select>
                        </div>
                        
                        <div class="grid-item grid-item-span">
                            <label for="${catatanId}">Catatan/Komentar Asesor:</label>
                            <textarea id="${catatanId}" name="${catatanId}" placeholder="Berikan catatan singkat terkait bukti yang ditemukan atau kekurangan yang perlu diperbaiki."></textarea>
                        </div>
                    </div>
                </div>
            `;
        }
    }
});
