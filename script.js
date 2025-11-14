/**
 * =======================================================
 * FUNGSI PERHITUNGAN SKOR DAN GRADE
 * =======================================================
 */

// Panggil ini setelah formulir dimuat (di akhir fungsi loadFormulir)
function setupScoreListeners() {
    // Cari semua elemen <select> yang id-nya diawali 'score-'
    const scoreSelects = document.querySelectorAll('select[id^="score-"]');
    
    scoreSelects.forEach(select => {
        // Hapus listener lama jika ada (penting untuk menghindari duplikasi saat formulir di-reload)
        select.removeEventListener('change', calculateTotalScore); 
        
        // Tambahkan listener baru
        select.addEventListener('change', calculateTotalScore);
    });

    // Panggil sekali untuk inisialisasi skor saat form pertama kali dimuat
    calculateTotalScore();
}

function calculateTotalScore() {
    // 1. Dapatkan paket yang dipilih (asumsikan sudah disimpan di localStorage atau variabel global)
    // Untuk demo, kita akan mengambil dari DOM saat ini
    const selectedPakets = Array.from(document.querySelectorAll('.paket-checkbox input:checked')).map(cb => cb.value);
    
    if (selectedPakets.length === 0) {
        // Jika belum ada paket yang dipilih (misalnya saat modal belum ditutup)
        return; 
    }
    
    const scoresByIndicator = {}; // { '1-1': [4, 3], '1-2': [4], '2-1': [3] }

    // Dapatkan semua elemen input skor
    const scoreInputs = document.querySelectorAll('select[id^="score-"]');
    
    scoreInputs.forEach(input => {
        const fullId = input.id.replace('score-', ''); // Cth: '1-1-A' atau '1-2'
        const scoreValue = parseFloat(input.value);

        // Abaikan input yang belum dinilai
        if (isNaN(scoreValue)) return; 

        let indicatorId;
        
        // Cek apakah ini adalah butir bertab (ID cth: 1-1-A)
        const parts = fullId.split('-');
        if (parts.length === 3) {
            indicatorId = `${parts[0]}-${parts[1]}`; // '1-1'
        } else if (parts.length === 2) {
            indicatorId = fullId; // '1-2'
        } else {
            return; // Lewati yang formatnya tidak dikenali
        }

        // Simpan skor
        if (!scoresByIndicator[indicatorId]) {
            scoresByIndicator[indicatorId] = [];
        }
        scoresByIndicator[indicatorId].push(scoreValue);
    });

    let totalScoreAllIndicators = 0;
    let countButirDinilai = 0;

    // 2. Hitung Rata-Rata per Butir (Indikator)
    for (const indicatorId in scoresByIndicator) {
        const scores = scoresByIndicator[indicatorId];
        
        // Cek apakah semua paket yang dipilih asesor sudah dinilai di butir ini
        // Jika butir memiliki tab, jumlah skor harus sama dengan jumlah paket yang dipilih
        // Untuk butir non-tabbed, jumlah skor hanya 1
        
        const sumOfScores = scores.reduce((sum, current) => sum + current, 0);
        
        // Rata-rata Skor Butir
        const avgIndicatorScore = sumOfScores / scores.length;
        
        totalScoreAllIndicators += avgIndicatorScore;
        countButirDinilai++;
    }

    // 3. Hitung Total Skor Akhir (Rata-Rata dari Semua Butir)
    let finalScore = 0;
    if (countButirDinilai > 0) {
        finalScore = totalScoreAllIndicators / countButirDinilai;
    }

    // 4. Tentukan Grade
    const finalGrade = determineGrade(finalScore);

    // 5. Perbarui UI
    const totalScoreElement = document.getElementById('total-score');
    const finalGradeElement = document.getElementById('final-grade');

    if (totalScoreElement) {
        // Tampilkan 2 angka desimal
        totalScoreElement.textContent = finalScore > 0 ? finalScore.toFixed(2) : '-';
    }
    if (finalGradeElement) {
        finalGradeElement.textContent = finalGrade;
    }
}

function determineGrade(score) {
    if (score >= 3.51) {
        return 'A (Unggul)';
    } else if (score >= 2.51) {
        return 'B (Baik)';
    } else if (score >= 1.51) {
        return 'C (Cukup)';
    } else if (score > 0) {
        return 'TT (Tidak Terakreditasi)';
    } else {
        return '-';
    }
}
