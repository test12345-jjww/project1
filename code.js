var fakultasNode = document.getElementById("Fakultas");
var jurusanNode = document.getElementById("Jurusan");
var hasilNode = document.getElementById("hasil");

function proses() {
  var fakultas = "";
  if(fakultasNode.value.trim() === "FASILKOM") {
    fakultas  = "<option value='teknik komputer'>teknik komputer</option>";
    fakultas += "<option value='teknik informatika'>teknik informatika</option>";
    jurusanNode.innerHTML = fakultas;
  }
  else if(fakultasNode.value.trim() === "EKONOMI") {
    fakultas = "<option value='manajemen'>manajemen</option>";
    jurusanNode.innerHTML = fakultas;
  }
}

function hasil() {
  var hasil = "Fakultas " + fakultasNode.value;
      hasil+= " ,Jurusan " + jurusanNode.value;
  hasilNode.innerHTML = hasil;
}

window.addEventListener("load",proses);
fakultasNode.addEventListener("change",proses);
jurusanNode.addEventListener("change",hasil);
