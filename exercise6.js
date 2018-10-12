// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
// Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. 
// Contoh: "Today, is the greatest day ever!" akan me-return "greatest" 
// karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. 
// Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

function hitungHuruf(kata) {
    // pecah - pecahin ke array dulu 
    var arr = kata.split(' ');
    // var penampung
    var banding = 0;
    var result = '';
    
    // cek urutan array perkata
    for(var i = 0; i < arr.length; i++){
      // var baru untuk memulai perulangan dari 0 lagi setelah selesai tiap loop
      var hitung = 0;
        // console.log('ini i ke -' + i + ' ' + arr[i]);
        // ini untuk perulangan mengecek array per huruf dari setiap kata
       for (j = 0; j < arr[i].length; j++){
        //console.log('kata J ke -' + j + ' ' + arr[i][j]);
       
         for (k = arr[i].length -1; k >= 0; k--){
          // console.log('kata K ke -' + k + ' ' + arr[i][k]);
           if (arr[i][j] === arr[i][k] && j !== k){
           hitung += 1
            } 
          }
       }
      // kondisi dimana hitung > banding maka akan disimpan, jika tidak maka akan diabaikan
      if (hitung > banding){
      // ini agar `banding` tidak kembali menjadi 0, banding menjadi 'hitung' yg sudah terproses sebelumnya
      banding = hitung
      // untuk menandai `index` nya ke berapa yg memenuhi kondisi akan di return 
      result = i
      }
    } 
    
    return arr[result]
  }
  
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau