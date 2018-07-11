console.log('Exersice 13 - Perkalian Unik \n');

// Definisikan Fungsi 
function targetTerdekat(arr) {
   // Cek poisi index 'o'
   var getOposition;
   var count = 0; 
   while(arr[count]!=='o'){
        count = count+1;
   }
   getOposition = count;
   
   // cek and get x terdekat sebelah kiri
   var countKiri=getOposition-1;
   var getXKiri;
   while(arr[countKiri]!=='x' && countKiri >-1){
        countKiri = countKiri -1;
        //console.log(countKiri +' '+arr[countKiri]);
   }

  if(countKiri<getOposition && countKiri > -1){
       getXKiri = getOposition - countKiri;
       //console.log(countKiri +' '+getXKiri);
   }else{
       getXKiri = arr.length +1; // bisa angka berapa saja hanya untuk menunjukkan ini jauh
       //console.log(countKiri +' '+getXKiri);
   }

   // cek and get x terdekat sebelah kanan
   var countKanan = getOposition+1;
   var getXKanan;
   while(arr[countKanan]!=='x' && countKanan < arr.length+1){
        countKanan = countKanan+1;
   } 
   if(countKanan>getOposition && countKanan < arr.length){
        getXKanan = countKanan - getOposition;
   }else{
       getXKanan = arr.length + 1;
   }
   
   // Bandingkan xKanan dan xKiri
   var terdekat;
   if(getXKiri === getXKanan & getXKanan === arr.length+1){
        terdekat = 0;
   }else if(getXKiri < getXKanan){
        terdekat = getXKiri;
   }else if(getXKanan < getXKiri){
        terdekat = getXKanan;
   }else if(getXKanan === getXKiri && getXKanan < arr.length){
       terdekat = getXKanan;
   }    

    return terdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// Test another case
console.log(targetTerdekat(['x', ' ', ' ', 'o', 'x', ' ', ' ', 'x'])); // 1
console.log(targetTerdekat(['x', ' ', ' ', 'o', ' ', ' ', 'x', ' '])); // 3