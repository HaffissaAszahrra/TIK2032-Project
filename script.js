
// Saat halaman dimuat, tampilkan alert setelah 2 detik jika pengguna tidak interaksi
let isUserActive = false;

document.addEventListener("mousemove", () => {
  isUserActive = true;
});

setTimeout(() => {
  if (!isUserActive) {
    alert("Masih di sana? 😄");
  }
}, 2000);
