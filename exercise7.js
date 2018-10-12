// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
// Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
// Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, 
// sehingga function akan me-return 2.



function digitPerkalianMinimum(angka) {

     // cek kondisi angka
     if (angka < 2) {
      return angka + 1;
  }


// var penampung
hasilBagi = [];

// buat looping pembagian angka
  for (var i = 1; i <= angka; i++) {
      if (angka % i === 0) {
          hasilBagi.push(i);
      }
  }         
//  console.log(hasilBagi)
  
// buat pembagi
  var pembagi = hasilBagi.length / 2;
// var penampung
  var hasil = [];

// looping 
  for (var b = 0; b < hasilBagi.length; b++) {

//console.log(hasilBagi[pembagi-1]);
      hasil.push(hasilBagi[pembagi] + '' + hasilBagi[pembagi - 1]);
  }

 //console.log(hasil);
  return hasil[0].length;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2