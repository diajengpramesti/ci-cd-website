function cekStatus() {
    document.getElementById("status").innerHTML =
        "✅ Website berhasil di-deploy dengan CI/CD!";
}

// tampilkan waktu realtime
function tampilWaktu() {
    const sekarang = new Date();
    document.getElementById("waktu").innerHTML =
        sekarang.toLocaleString();
}

// update setiap detik
setInterval(tampilWaktu, 1000);
