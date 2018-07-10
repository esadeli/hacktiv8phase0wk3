console.log('Exersice 11 - Deret Aritmatika \n');

// Definisikan Fungsi
function tentukanDeretAritmatika(arr) {
    var ukuran = arr.length;
    var sukuKe1 = arr[0];
    var sukuTerakhir = arr[ukuran-1];
    var selisih = Math.round((sukuTerakhir-sukuKe1)/ukuran);
    //console.log(selisih);
    for(var i = 0; i<ukuran-1;i++){    
        var selisih1 = arr[i+1]-arr[i];
        //console.log(i+ '' +selisih1);
        
        if(selisih1 !== selisih){
            return false;
        }
    }
    return true;
}


// Test Cases
console.log('[1, 2, 3, 4, 5, 6] '+ tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log('[2, 4, 6, 12, 24] '+ tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log('[2, 4, 6, 8] '+tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log('[2, 6, 18, 54] ' +tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log('[1, 2, 3, 4, 7, 9] '+tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

// Test other case
console.log('[1, 3, 5, 7, 9, 11] '+tentukanDeretAritmatika([1, 3, 5, 7, 9, 11])); // true
console.log('[2, 5, 8, 11, 14, 17, 19] '+tentukanDeretAritmatika([2, 5, 8, 11, 14, 17, 19])); // false
