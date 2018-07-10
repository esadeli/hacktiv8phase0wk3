console.log('Exersice 14 - Kelompok Angka \n');

// Definisikan Fungsi
function mengelompokkanAngka(arr) {

    //set elemen array
    var baris1 = [];
    var baris2 = [];
    var baris3 = [];

    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2===0 && arr[i]%3 !==0){
            baris1.push(arr[i]);
        }else if(arr[i]%3===0){
            baris3.push(arr[i]);
        }else if(arr[i]%2!==0 && arr[i]%3 !==0){
            baris2.push(arr[i]);
        }
    }

    // Definisikan array baru
    var arrayBaru = [];

    arrayBaru.push(baris1);
    arrayBaru.push(baris2);
    arrayBaru.push(baris3);

    return arrayBaru;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]