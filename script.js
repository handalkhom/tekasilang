const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
  pil.addEventListener("click", function () {
    let namebtn = pil.getAttribute("name");
    geserCek(namebtn);
  });
});

function geserCek(nbtn) {
  const table = document.querySelectorAll("." + nbtn);
  if (table[0].disabled == true) {
    autoNext(0, nbtn);
  } else {
    table[0].select();
  }

  for (let i = 0; i < table.length; i++) {
    table[i].addEventListener("input", function () {
      if (i == table.length - 1) {
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      } else if (
        i == table.length - 2 &&
        table[table.length - 1].disabled == true
      ) {
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      } else {
        autoNext(i, nbtn);
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      }
    });
  }
}

function autoNext(i, cn) {
  let d = document.querySelectorAll("." + cn);
  if (d[i + 1].disabled == true) {
    d[i + 2].select();
  } else {
    d[i + 1].select();
  }
}

// concat input to string
function catString(cn) {
  var concat = "";
  let d = document.querySelectorAll("." + cn);
  for (let i = 0; i < d.length; i++) {
    concat += d[i].value;
  }
  return concat;
}

function submitString(concat, tipe, tabel) {
  if (concat.toUpperCase() == "HTML" && tipe == "d4") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "PYTHON" && tipe == "m3") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "JPEG" && tipe == "d1") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "STYLESHEET" && tipe == "d2") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "JAVASCRIPT" && tipe == "m1") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "HTTP" && tipe == "m2") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "MYSQL" && tipe == "d3") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "HTTPS" && tipe == "m4") {
    pengulanganTabel(tabel);
  }
}

function pengulanganTabel(table) {
  for (let j = 0; j < table.length; j++) {
    table[j].disabled = true;
  }
}

// Mengambil tombol "Cek Jawaban" berdasarkan ID
const cekJawabanBtn = document.getElementById("cekJawabanBtn");

// Menambahkan event click pada tombol "Cek Jawaban"
cekJawabanBtn.addEventListener("click", function () {
  // Panggil fungsi untuk memeriksa jawaban
  periksaJawaban();
});

function periksaJawaban() {
  const seluruhJawaban = {
    d1: "JPEG",
    m1: "JAVASCRIPT",
    d2: "STYLESHEET",
    m2: "HTTP",
    d3: "PYTHON",
    m3: "MYSQL",
    d4: "HTML",
    m4: "HTTPS",
  };

  let semuaBenar = true;

  for (const key in seluruhJawaban) {
    const jawaban = seluruhJawaban[key];
    const sel = document.querySelectorAll("." + key);

    if (catString(key).toUpperCase() !== jawaban) {
      semuaBenar = false;
      for (let i = 0; i < sel.length; i++) {
        sel[i].style.backgroundColor = "red"; // Ganti warna sel yang salah
      }
    }
  }

  if (semuaBenar) {
    alert("Selamat! Semua jawaban benar.");
  } else {
    alert("Ada jawaban yang salah, coba lagi.");
  }
}

// Mengambil tombol "Tampilkan Jawaban" berdasarkan ID
const tampilkanJawabanBtn = document.getElementById("tampilkanJawabanBtn");

// Menambahkan event click pada tombol "Tampilkan Jawaban"
tampilkanJawabanBtn.addEventListener("click", function () {
  tampilkanJawaban();
});

function tampilkanJawaban() {
  const seluruhJawaban = {
    d1: "JPEG",
    m1: "JAVASCRIPT",
    d2: "STYLESHEET",
    m2: "HTTP",
    d3: "PYTHON",
    m3: "MYSQL",
    d4: "HTML",
    m4: "HTTPS",
  };

  for (const key in seluruhJawaban) {
    const jawaban = seluruhJawaban[key];
    const sel = document.querySelectorAll("." + key);
    for (let i = 0; i < sel.length; i++) {
      sel[i].value = jawaban[i];
    }
  }
}
