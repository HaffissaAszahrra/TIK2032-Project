<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['Haffissa Aszahrra Mastur']);
    $email = htmlspecialchars($_POST['raraocin@gmail.com']);
    $pesan = htmlspecialchars($_POST['halow']);

    echo "<h1>Terima kasih, $nama!</h1>";
    echo "<p>Email: $email</p>";
    echo "<p>Pesan kamu: $pesan</p>";
} else {
    echo "<p>Akses tidak sah.</p>";
}
?>
