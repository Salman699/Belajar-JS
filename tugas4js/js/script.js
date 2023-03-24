function tambah() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Maaf, angka belum terisi");
    } else {
        var total = a1 + a2;
        frm.hasil.value = total;
    }
}

function kurang() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Maaf, angka belum terisi");
    } else {
        var total = a1 - a2;
        frm.hasil.value = total;
    }
}

function kali() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Maaf, angka belum terisi");
    } else {
        var total = a1 * a2;
        frm.hasil.value = total;
    }
}

function bagi() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Maaf, angka belum terisi");
    } else if (a2 === 0) {
        alert("Maaf, pembagian dengan nol tidak diizinkan");
    } else {
        var total = a1 / a2;
        frm.hasil.value = total;
    }
}

function pangkat() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Maaf, angka belum terisi");
    } else {
        var total = Math.pow(a1, a2);
        frm.hasil.value = total;
    }
}
