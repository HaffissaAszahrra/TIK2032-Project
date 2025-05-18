// Menampilkan pesan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    console.log("Selamat datang di website Haffissa!");
    showWelcomeMessage();
    detectInactivity();
});

// Fungsi untuk menampilkan alert selamat datang
function showWelcomeMessage() {
    alert("Halo, selamat datang di website saya!");
}

// Fungsi mendeteksi tidak aktif selama 30 detik
function detectInactivity() {
    let timer;
    const warningTime = 30000; // 30 detik

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            alert("Apakah kamu masih di sana?");
        }, warningTime);
    }

    // Reset timer setiap ada aktivitas
    ['mousemove', 'keydown', 'scroll', 'click'].forEach(event => {
        document.addEventListener(event, resetTimer);
    });

    resetTimer(); // Mulai timer saat pertama kali
}

// Tambahkan efek klik ke semua gambar di galeri
function setupGalleryClickEffect() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert(`Kamu mengklik gambar: ${img.alt}`);
        });
    });
}

// Jalankan hanya jika ada galeri di halaman
if (document.querySelector('.gallery')) {
    document.addEventListener("DOMContentLoaded", setupGalleryClickEffect);
}
