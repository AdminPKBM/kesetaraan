/**
 * =======================================================
 * FUNGSI UTAMA UNTUK MENGELOLA INTERAKSI FORMULIR ASESOR
 * =======================================================
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
    
    // Elemen Display Ringkasan Data
    const displayNamaSatuan = document.getElementById('display-nama-satuan');
    const displayNPSNSatuan = document.getElementById('display-npsn-satuan');
    const displayProgram = document.getElementById('display-program');
    
    // Elemen Input Data Asesor
    const namaAsesorInput = document.getElementById('nama_asesor');
    const niaAsesorInput = document.getElementById('nia_asesor');
    const namaSatuanInput = document.getElementById('nama_satuan');
    const npsnSatuanInput = document.getElementById('npsn_satuan');

    // 2. Event Listener untuk Tombol 'Mulai Penilaian' (Ini adalah perbaikan utama)
    if (mulaiBtn) {
        mulaiBtn.addEventListener('click', handleMulaiPenilaian);
    }
    
    // 3. Panggil checkLocalStorage saat inisialisasi
    // checkLocalStorage(); // Matikan dulu agar modal selalu muncul untuk demo/pengembangan

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
        displayNamaSatuan.textContent = dataAsesor.nama_satuan;
        displayNPSNSatuan.textContent = dataAsesor.npsn_satuan;
        displayProgram.textContent = dataAsesor.selected_pakets.join(', ');

        // PENTING: Panggil fungsi untuk membangun formulir
        loadFormulir(dataAsesor.selected_pakets);

        // Transisi UI: Tutup Modal dan Tampilkan Formulir Utama
        modalAwal.style.display = 'none';
        formulirContainer.style.display = 'block';
    }

    // Panggil fungsi inisialisasi tab (jika Anda ingin bisa mengklik tab saat form sudah di-render)
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
            
            // Tentukan ID Indikator (1-1 atau 1-2)
            if (parts.length === 3) {
                indicatorId = `${parts[0]}-${parts[1]}`; 
            } else if (parts.length === 2) {
                indicatorId = fullId; 
            } else {
                return; 
            }

            if (!scoresByIndicator[indicatorId]) {
                scoresByIndicator[indicatorId] = [];
            }
            scoresByIndicator[indicatorId].push(scoreValue);
        });

        let totalScoreAllIndicators = 0;
        let countButirDinilai = 0;

        for (const indicatorId in scoresByIndicator) {
            const scores = scoresByIndicator[indicatorId];
            const sumOfScores = scores.reduce((sum, current) => sum + current, 0);
            
            // Rata-rata Skor Butir
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
    
    // --- FUNGSI PEMBANGUN FORMULIR DINAMIS (DARI JAWABAN SEBELUMNYA) ---
    
    function loadFormulir(selectedPakets) {
        let finalHTML = '';
        const quickNavTabs = document.getElementById('quick-navigation-tabs');
        quickNavTabs.innerHTML = ''; // Kosongkan tab navigasi cepat

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
                quickNavTabs.innerHTML += `
                    <button class="${activeClass}" onclick="document.getElementById('dimensi-${dimension.id}').scrollIntoView({ behavior: 'smooth' })">
                        Dimensi ${dimension.id}. ${dimension.title.split('. ')[1]}
                    </button>
                `;
                
                // Tambahkan Dimensi Block
                finalHTML += `
                    <div class="butir-block" id="dimensi-${dimension.id}">
                        <h2 class="butir-title">${dimension.id}. ${dimension.title.split('. ')[1]}</h2>
                        ${dimensionContent}
                    </div>
                `;
            }
        });

        formStepsNavigation.innerHTML = finalHTML;
        
        // Panggil ini untuk memasang event listener ke semua select skor
        setupScoreListeners(); 

        // Atur tab butir pertama agar aktif
        FORM_DATA.forEach(dimension => {
            dimension.indicators.forEach(indicator => {
                if (indicator.is_tabbed) {
                    const firstActivePaket = indicator.pakets.find(p => selectedPakets.includes(p));
                    if (firstActivePaket) {
                        showPaketContent(indicator.id, firstActivePaket);
                    }
                }
            });
        });
        
        // Gulir ke dimensi pertama setelah dimuat
        document.getElementById(`dimensi-1`).scrollIntoView({ behavior: 'smooth' });
    }

    // Catatan: Fungsi determineGrade dan generateFormHTML diasumsikan sama 
    // seperti pada jawaban sebelumnya dan berfungsi dengan baik.

    function generateFormHTML(indicator, selectedPakets) {
        // ... (Fungsi ini harus disalin dari jawaban saya sebelumnya) ...
        // Karena fungsi ini panjang, saya hanya menyertakan logikanya di sini.
        // Silakan salin fungsi generateFormHTML LENGKAP dari jawaban sebelumnya.
        
        const indicatorId = indicator.id;
        let contentPanelsHTML = '';
        let tabLinksHTML = '';

        const displayPakets = indicator.pakets.includes('All') ? selectedPakets : indicator.pakets.filter(p => selectedPakets.includes(p));

        if (indicator.is_tabbed && displayPakets.length >= 1) { // Diubah dari > 1 menjadi >= 1 agar tetap bisa di-tab jika hanya 1 paket yang terpilih
            // LOGIKA TABBED (Butir 1.1)
            
            displayPakets.forEach((paket, index) => {
                const isActive = index === 0; 
                const rubricKey = indicator.pakets.includes('All') ? 'All' : paket;
                const rubrics = indicator.rubrics[rubricKey] || [];
                
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
                                <label for="score-${indicatorId}-${paket}">Skor Penilaian:</label>
                                <select id="score-${indicatorId}-${paket}" name="score-${indicatorId}-${paket}">
                                    <option value="" disabled selected>Pilih Skor</option>
                                    <option value="4">4 - A</option>
                                    <option value="3">3 - B</option>
                                    <option value="2">2 - C</option>
                                    <option value="1">1 - TT</option>
                                </select>
                            </div>
                            
                            <div class="grid-item grid-item-span">
                                <label for="catatan-${indicatorId}-${paket}">Catatan/Komentar Asesor (Paket ${paket}):</label>
                                <textarea id="catatan-${indicatorId}-${paket}" name="catatan-${indicatorId}-${paket}" placeholder="Berikan catatan singkat terkait bukti yang ditemukan atau kekurangan yang perlu diperbaiki."></textarea>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            return `
                <div class="indicator-card" id="indicator-${indicatorId}">
                    <div class="indicator-header">
                        <h3 class="indicator-title">${indicator.id} ${indicator.title}</h3>
                        <p style="font-size: 0.9em; color: var(--color-secondary);">${indicator.description}</p>
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
            // LOGIKA NON-TABBED (Butir 1.2 atau Butir yang hanya relevan 1 paket)
            const paketDisplay = displayPakets.join(', ');
            const rubricKey = indicator.pakets.includes('All') ? 'All' : displayPakets[0];
            const rubrics = indicator.rubrics[rubricKey] || [];
            
            return `
                <div class="indicator-card" id="indicator-${indicatorId}">
                    <div class="indicator-header">
                        <h3 class="indicator-title">${indicator.id} ${indicator.title}</h3>
                        <p style="font-size: 0.9em; color: var(--color-secondary);">${indicator.description} (Berlaku untuk Paket: ${paketDisplay})</p>
                    </div>
                    
                    <div class="rubric-box grid-item-span">
                        <h4>Rubrik Penilaian${indicator.pakets.includes('All') ? ' Universal' : ` Paket ${paketDisplay}`}</h4>
                        <ul>
                            ${rubrics.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="card-grid">
                        <div class="grid-item">
                            <label for="score-${indicatorId}">Skor Penilaian:</label>
                            <select id="score-${indicatorId}" name="score-${indicatorId}">
                                <option value="" disabled selected>Pilih Skor</option>
                                <option value="4">4 - A</option>
                                <option value="3">3 - B</option>
                                <option value="2">2 - C</option>
                                <option value="1">1 - TT</option>
                            </select>
                        </div>
                        
                        <div class="grid-item grid-item-span">
                            <label for="catatan-${indicatorId}">Catatan/Komentar Asesor:</label>
                            <textarea id="catatan-${indicatorId}" name="catatan-${indicatorId}" placeholder="Berikan catatan singkat terkait bukti yang ditemukan atau kekurangan yang perlu diperbaiki."></textarea>
                        </div>
                    </div>
                </div>
            `;
        }
    }
});
