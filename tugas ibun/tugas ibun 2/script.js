alert("Selamat datang di website biografi Ibnu Rahmad Ramadhan");

const biodataText = 
    "Nama saya Ibnu Rahmad Ramadhan dengan NIM 2511512023. " +
    "Saya lahir di Kota Padang pada 5 Oktober 2006. Saat ini, saya merupakan seorang mahasiswa " +
    "jurusan Teknik Komputer di Universitas Andalas.<br><br>" +

    "Sebelum menempuh pendidikan di perguruan tinggi, saya menyelesaikan pendidikan menengah atas " +
    "di SMAN 16 Padang. Latar belakang pendidikan tersebut menjadi dasar saya dalam melanjutkan studi " +
    "ke jenjang yang lebih tinggi.<br><br>" +

    "Saya memiliki cita-cita untuk membangun perusahaan teknologi milik saya sendiri. Oleh karena itu, " +
    "untuk mendukung dan mewujudkan cita-cita tersebut, saya memilih jurusan Teknik Komputer dengan " +
    "harapan dapat memperoleh ilmu dan keterampilan yang relevan. Meskipun saya menyadari bahwa saya " +
    "bukanlah orang yang paling pintar atau paling hebat di bidang ini, saya tetap berusaha untuk terus " +
    "belajar dan berkembang agar tujuan yang saya impikan dapat tercapai.";

let biodataVisible = false;

function toggleBiodata() {
    const tentang = document.getElementById("tentang");
    const tombol = document.getElementById("toggle-btn");

    if (!biodataVisible) {
        tentang.innerHTML = biodataText;
        tombol.textContent = "Sembunyikan Biografi";
        biodataVisible = true;
    } else {
        tentang.innerHTML = "Klik tombol di bawah untuk menampilkan biografi.";
        tombol.textContent = "Tampilkan Biografi";
        biodataVisible = false;
    }
}
