console.log('Exersice 12 - Deret Geometri \n');

// Definisikan Fungsi:
function tentukanDeretGeometri(arr) {
    var ukuran = arr.length;
    var sukuKe1 = arr[0];
    var sukuKe2 = arr[1];
    var sukuTerakhir = arr[ukuran-1];

    var pangkat = ukuran - 1;
    //console.log('pangkat: '+pangkat);

    var sukuDasar = sukuKe2/sukuKe1;
    //console.log('suku dasar: ' +sukuDasar);

    var pembanding = sukuKe1*(Math.pow(sukuDasar,pangkat));

    if(sukuTerakhir === pembanding){
        return true;
    }else{
        return false;
    }
}

// TEST CASES
console.log('[1, 3, 9, 27, 81] '+tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log('[2, 4, 8, 16, 32] '+tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log('[2, 4, 6, 8] ' +tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log('[2, 6, 18, 54] '+ tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log('[1, 2, 3, 4, 7, 9] '+tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


console.log('[5, 15, 45, 135, 405, 1215] '+tentukanDeretGeometri([5, 15, 45, 135, 405, 1215])); // true