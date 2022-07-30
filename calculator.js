//Matematik Operatörleri
let arti = document.querySelector("#plus");
let carpma = document.querySelector("#multip");
let eksi = document.querySelector("#minus");
let bolme = document.querySelector("#divide");
let percent = document.querySelector("#percent");
let equal = document.querySelector("#equal");
let float = document.querySelector("#circle");
//ekran
let ekran = document.querySelector("#hesap");
//Gelen veri
let dokuz = document.querySelector("#dokuz");
let sekiz = document.querySelector("#sekiz");
let yedi = document.querySelector("#yedi");
let alti = document.querySelector("#alti");
let bes = document.querySelector("#bes");
let dort = document.querySelector("#dort");
let uc = document.querySelector("#uc");
let iki = document.querySelector("#iki");
let bir = document.querySelector("#bir");
let sifir = document.querySelector("#sifir");
let clear = document.querySelector("#clear");
//Sonuç ve işlem değerleri
let deger1,
  islem,
  deger2,
  sonuc,
  kontrol = 0;
float.onclick = function () {
  if (ekran.value[0] != undefined) {
    if (ekran.value[ekran.value.length - 1] != ".") {
      if (ekran.value.length == 9) {
      } else {
        if (kontrol < 1) {
          kontrol++;
          ekran.value += float.value;
        }
      }
    }
  }
};
dokuz.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += dokuz.value;
  }
};
sekiz.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += sekiz.value;
  }
};
yedi.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += yedi.value;
  }
};
alti.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += alti.value;
  }
};
bes.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += bes.value;
  }
};
dort.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += dort.value;
  }
};
uc.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += uc.value;
  }
};
iki.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += iki.value;
  }
};
bir.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += bir.value;
  }
};
sifir.onclick = function () {
  if (ekran.value.length == 9) {
  } else {
    ekran.value += sifir.value;
  }
};
clear.onclick = function () {
  ekran.value = "";
  value1 = undefined;
  value2 = undefined;
  sonuc = undefined;
  kontrol = 0;
};

eksi.onclick = function () {
  if (ekran.value != undefined) {
    deger1 = ekran.value;
    ekran.value = "";
    islem = "eksi";
    kontrol = 0;
  }
};
arti.onclick = function () {
  if (ekran.value != undefined) {
    deger1 = ekran.value;
    ekran.value = "";
    islem = "arti";
    kontrol = 0;
  }
};
carpma.onclick = function () {
  if (ekran.value != undefined) {
    deger1 = ekran.value;
    ekran.value = "";
    islem = "carpma";
    kontrol = 0;
  }
};
bolme.onclick = function () {
  if (ekran.value != undefined) {
    deger1 = ekran.value;
    ekran.value = "";
    islem = "bolme";
    kontrol = 0;
  }
};
percent.onclick = function () {
  if (ekran.value != undefined) {
    deger1 = ekran.value;
    ekran.value = "";
    islem = "percent";
    kontrol = 0;
  }
};
equal.onclick = function () {
  if (ekran.value != undefined) {
    deger2 = ekran.value;
    if (islem == "eksi") {
      sonuc = parseFloat(deger1) - parseFloat(deger2);
      ekran.value = sonuc;
    }
    if (islem == "carpma") {
      sonuc = parseFloat(deger1) * parseFloat(deger2);
      ekran.value = sonuc;
    }
    if (islem == "bolme") {
      sonuc = parseFloat(deger1) / parseFloat(deger2);
      ekran.value = sonuc;
    }
    if (islem == "arti") {
      sonuc = parseFloat(deger1) + parseFloat(deger2);
      ekran.value = sonuc;
    }
    if (islem == "percent") {
      sonuc = (parseFloat(deger1) * parseFloat(deger2)) / 100;
      ekran.value = sonuc;
    }
  }
  if (ekran.value == "") {
    ekran.value = "NOT A NUMBER";
  }
  if (deger2 == "") {
    ekran.value = "NOT A NUMBER";
  }
};
