// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b 
// yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false


function checkAB (str) {
    // you can only write your code here!
    var arr = str.split('');
    arr2 = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] !== ' ') {
          arr2.push(arr[i]);
        }
    }

        for(var a = 0;a < arr2.length; a++) {
           if(arr2[a] === 'a') {

        for(var b = a;b <= (a + 3); b++){
           if(arr2[b] === 'b') {
        return true

                }
            }
        }
    }
    return false;
  } 

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

