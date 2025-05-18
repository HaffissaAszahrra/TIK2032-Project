// Fungsi untuk mengganti tema
function setTheme(theme) {
    const body = document.body;

    // Reset kelas tema
    body.classList.remove('theme-black', 'theme-gray', 'theme-orange');

    // Tambahkan kelas sesuai pilihan
    if (theme === 'black') {
        body.classList.add('theme-black');
    } else if (theme === 'gray') {
        body.classList.add('theme-gray');
    } else if (theme === 'orange') {
        body.classList.add('theme-orange');
    }
}

// Opsi: Tambahkan tombol untuk ganti tema secara dinamis
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const themeSelector = document.createElement("div");
    themeSelector.innerHTML = `
        <button onclick="setTheme('black')">Hitam</button>
        <button onclick="setTheme('gray')">Abu-abu</button>
        <button onclick="setTheme('orange')">Oranye</button>
    `;
    themeSelector.style.textAlign = "center";
    themeSelector.style.marginTop = "20px";
    nav.after(themeSelector);
});
