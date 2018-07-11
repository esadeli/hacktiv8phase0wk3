console.log('Exersice 10 - Perkalian Unik \n');

// Definisikan Fungsi 
function perkalianUnik(arr) {
    var ukuran = arr.length;
    var arrBaru = [];
    for(var i = 0; i<ukuran;i++){
        var awalan = 1;
        for(var j = 0; j<ukuran;j++){
            // pada j ke i semua suku dianggap bernilai 1
            if(j===i){
                awalan = awalan
            }else{
                awalan = awalan*arr[j];
            }    
        }
        arrBaru.push(awalan);
    }
    return arrBaru;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]