/**
 * =======================================================
 * FUNGSI UTAMA UNTUK MENGELOLA INTERAKSI FORMULIR ASESOR
 * =======================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil elemen-elemen penting dari DOM
    const modalAwal = document.getElementById('modal-awal');
    const mulaiBtn = document.getElementById('mulai-penilaian-btn');
    const formulirContainer = document.getElementById('formulir-container');
    const errorMessage = document.getElementById('error-message');
    
    // Elemen input data Asesor
    const inputNamaAsesor = document.getElementById('nama_asesor');
    const inputNIA = document.getElementById('nia_asesor');
    const inputNamaSatuan = document.getElementById('nama_satuan');
    const inputNPSN = document.getElementById('npsn_satuan');
    const paketCheckboxes = document.querySelectorAll('.paket-checkbox-group input[type="checkbox"]');
    
    // Elemen tampilan ringkasan
    const displayNamaSatuan = document.getElementById('display-nama-satuan');
    const displayNPSNSatuan = document.getElementById('display-npsn-satuan');
    const displayProgram = document.getElementById('display-program');

    // Tampilkan modal secara default saat halaman dimuat (jika statusnya 'none' di HTML)
    if (modalAwal.style.display === 'none') {
        modalAwal.style.display = 'flex';
    }

    // --- 2. LOGIKA VALIDASI MODAL (Saat tombol Mulai diklik) ---
    mulaiBtn.addEventListener('click', () => {
        const namaAsesor = inputNamaAsesor.value.trim();
        const niaAsesor = inputNIA.value.trim();
        const namaSatuan = inputNamaSatuan.value.trim();
        const npsnSatuan = inputNPSN.value.trim();
        
        const selectedPakets = Array.from(paketCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        // Validasi
        if (!namaAsesor || !niaAsesor || !namaSatuan || !npsnSatuan) {
            errorMessage.textContent = 'Harap lengkapi semua data Asesor.';
            errorMessage.style.display = 'block';
            return;
        }

        if (selectedPakets.length === 0) {
            errorMessage.textContent = 'Harap pilih minimal satu Program Penugasan (Paket A/B/C).';
            errorMessage.style.display = 'block';
            return;
        }

        // Jika validasi sukses:
        errorMessage.style.display = 'none';
        
        // 3. Simpan data ke penyimpanan lokal (Opsional, tapi direkomendasikan)
        localStorage.setItem('asesor_data', JSON.stringify({
            nama: namaAsesor,
            nia: niaAsesor,
            satuan: namaSatuan,
            npsn: npsnSatuan,
            pakets: selectedPakets
        }));

        // 4. Tampilkan data di Formulir Utama
        displayNamaSatuan.textContent = namaSatuan;
        displayNPSNSatuan.textContent = npsnSatuan;
        displayProgram.textContent = selectedPakets.join(', '); // Cth: A, B, C

        // 5. Transisi UI: Tutup Modal dan Tampilkan Formulir Utama
        modalAwal.style.display = 'none';
        formulirContainer.style.display = 'block';

        // PENTING: Panggil fungsi untuk membangun formulir dan mengontrol Tabs Paket
        // Anda harus mendefinisikan fungsi ini di 'data.js' atau di bawah ini.
        // Cth: loadFormulir(selectedPakets);
        console.log('Formulir siap untuk paket: ' + selectedPakets.join(', '));
    });

    // --- 3. LOGIKA TOMBOL AKSI STICKY FOOTER ---
    
    // Tombol Hapus Data
    const clearDataBtn = document.getElementById('clear-data-btn');
    clearDataBtn.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin menghapus semua data yang tersimpan di browser (Local Storage) dan kembali ke awal?')) {
            localStorage.clear();
            alert('Data telah dihapus. Halaman akan dimuat ulang.');
            window.location.reload();
        }
    });
    
    // Tombol Simpan Progres (Simulasi)
    const saveProgressBtn = document.getElementById('save-progress-btn');
    const saveStatus = document.getElementById('save-status');
    saveProgressBtn.addEventListener('click', () => {
        // Logika kompleks penyimpanan data formulir akan di sini
        
        // Simulasi status penyimpanan
        saveStatus.textContent = 'Tersimpan otomatis pada ' + new Date().toLocaleTimeString('id-ID');
        saveStatus.style.color = 'var(--color-success)';
        
        // Memberikan feedback visual singkat
        saveProgressBtn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            saveProgressBtn.style.backgroundColor = 'var(--color-secondary)';
        }, 500);
    });
    
    // --- 4. LOGIKA NAVIGASI CEPAT (Quick Navigation) ---
    const quickNavButtons = document.querySelectorAll('.quick-nav button');
    quickNavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Hapus kelas 'active' dari semua tombol
            quickNavButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tambahkan kelas 'active' ke tombol yang diklik
            e.target.classList.add('active');
            
            // Logika scroll/navigasi ke Dimensi yang sesuai akan diletakkan di sini
            // Cth: scrollToSection(e.target.textContent);
            console.log(`Navigasi ke: ${e.target.textContent}`);
        });
    });

    // --- 5. LOGIKA MUAT ULANG (Memuat data jika sudah ada di Local Storage) ---
    function checkLocalStorage() {
        const storedData = localStorage.getItem('asesor_data');
        if (storedData) {
            const data = JSON.parse(storedData);
            
            // Isi kembali input di modal (jika modal terlihat)
            inputNamaAsesor.value = data.nama;
            inputNIA.value = data.nia;
            inputNamaSatuan.value = data.satuan;
            inputNPSN.value = data.npsn;

            // Tandai checkbox yang sudah dipilih
            paketCheckboxes.forEach(cb => {
                if (data.pakets.includes(cb.value)) {
                    cb.checked = true;
                    // Memicu perubahan gaya custom pada label
                    cb.closest('.paket-checkbox').style.borderColor = 'var(--color-primary)';
                    cb.closest('.paket-checkbox').style.backgroundColor = '#e6f2ff';
                }
            });
            
            // Jika semua data penting ada, muat formulir utama secara langsung
            if (data.nama && data.pakets.length > 0) {
                 // Langsung panggil logika transisi UI
                 document.getElementById('mulai-penilaian-btn').click();
            }

        }
    }
    
    // Panggil saat DOM dimuat
    // checkLocalStorage(); // Matikan dulu agar modal selalu muncul untuk demo
});
