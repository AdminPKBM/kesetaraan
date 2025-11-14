/**
 * =======================================================
 * FUNGSI UTAMA UNTUK MENGELOLA INTERAKSI FORMULIR ASESOR
 * =======================================================
 */

// Panggil semua variabel dan event listener dari kode sebelumnya (diasumsikan sudah ada)
document.addEventListener('DOMContentLoaded', () => {
    // ... (Semua definisi variabel DOM di sini) ...
    const modalAwal = document.getElementById('modal-awal');
    const mulaiBtn = document.getElementById('mulai-penilaian-btn');
    const formulirContainer = document.getElementById('formulir-container');
    const errorMessage = document.getElementById('error-message');
    
    // Tempat formulir dinamis
    const formStepsNavigation = document.getElementById('form-steps-navigation');

    // ... (Logika checkLocalStorage, Mulai Penilaian, Save Progress, Clear Data, Quick Nav) ...

    // --- LOGIKA UTAMA: MEMUAT FORMULIR SETELAH MODAL DITUTUP ---
    mulaiBtn.addEventListener('click', () => {
        // ... (Kode validasi yang sudah ada) ...
        
        // Simpan selectedPakets yang sudah lolos validasi
        const selectedPakets = Array.from(paketCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // ... (Logika penyimpanan localStorage dan transisi UI) ...
        
        // PENTING: Panggil fungsi untuk membangun formulir
        loadFormulir(selectedPakets);
        console.log('Formulir siap untuk paket: ' + selectedPakets.join(', '));

        // Transisi UI: Tutup Modal dan Tampilkan Formulir Utama
        modalAwal.style.display = 'none';
        formulirContainer.style.display = 'block';
    });

    // ... (Definisi fungsi quickNav, checkLocalStorage, dll.) ...

    // Panggil fungsi inisialisasi tab setelah form dimuat (atau diakhir loadFormulir)
    window.showPaketContent = (indicatorId, paket) => {
        const tabLinks = document.querySelectorAll(`#paket-nav-${indicatorId} .paket-tab-link`);
        const contentPanels = document.querySelectorAll(`#indicator-${indicatorId} .paket-content-panel`);
        
        tabLinks.forEach(link => link.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));
        
        const activeLink = document.querySelector(`#paket-nav-${indicatorId} a[data-paket="${paket}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        const activeContent = document.getElementById(`content-${indicatorId}-${paket}`);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }
    
    // checkLocalStorage(); // Matikan dulu agar modal selalu muncul untuk demo
});


/**
 * =======================================================
 * FUNGSI UTAMA MEMBANGUN FORMULIR
 * =======================================================
 */

function loadFormulir(selectedPakets) {
    let finalHTML = '';
    
    // Loop melalui setiap Dimensi dalam FORM_DATA
    FORM_DATA.forEach(dimension => {
        let dimensionContent = '';
        
        // Loop melalui setiap Indikator (Butir) dalam Dimensi
        dimension.indicators.forEach(indicator => {
            // Cek apakah butir ini relevan dengan paket yang dipilih
            const isRelevant = indicator.pakets.includes('All') || 
                                indicator.pakets.some(p => selectedPakets.includes(p));

            if (isRelevant) {
                // Tambahkan HTML untuk Butir yang relevan
                dimensionContent += generateFormHTML(indicator, selectedPakets);
            }
        });

        // Hanya tampilkan dimensi jika ada indikator yang relevan
        if (dimensionContent) {
            // Tambahkan Dimensi Block
            finalHTML += `
                <div class="butir-block" id="dimensi-${dimension.id}">
                    <h2 class="butir-title">${dimension.id}. ${dimension.title}</h2>
                    ${dimensionContent}
                </div>
            `;
        }
    });

    // Masukkan HTML yang sudah dibuat ke dalam container
    document.getElementById('form-steps-navigation').innerHTML = finalHTML;
    
    // Setelah formulir dimuat, atur tab pertama agar aktif secara visual
    // Ini penting jika butir relevan memiliki tabs (is_tabbed: true)
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
}


/**
 * =======================================================
 * FUNGSI PEMBANTU UNTUK MERENDER SATU BUTIR PENILAIAN
 * =======================================================
 */
function generateFormHTML(indicator, selectedPakets) {
    const indicatorId = indicator.id;
    let contentPanelsHTML = '';
    let tabLinksHTML = '';

    // Tentukan paket yang benar-benar akan ditampilkan di tab
    const displayPakets = indicator.pakets.includes('All') ? selectedPakets : indicator.pakets.filter(p => selectedPakets.includes(p));

    if (indicator.is_tabbed && displayPakets.length > 1) {
        // --- LOGIKA TABBED (Butir 1.1) ---
        
        displayPakets.forEach((paket, index) => {
            const isActive = index === 0; // Atur tab pertama yang valid sebagai aktif default
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
        // --- LOGIKA NON-TABBED (Butir 1.2 atau Butir yang hanya relevan 1 paket) ---
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
