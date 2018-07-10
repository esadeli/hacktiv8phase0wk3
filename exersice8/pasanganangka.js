console.log('Exersice 8 - Pasangan Angka Terbesar \n');

// Definisikan Fungsi
function pasanganTerbesar(num) {
    var numString = num + '';
    var ukuran = numString.length;
    var angkaTerbesar = 0;
    for(var i = 0; i<ukuran-1;i++){
        var angkaString = ''
        if(numString[i]===0&&numString[i+1]>0){
            angkaString = numString[i+1];
        }else{
            angkaString = numString[i]+numString[i+1];
        }
        //console.log(angkaString);
        if(angkaString > angkaTerbesar){
            angkaTerbesar = angkaString;
            //console.log(angkaString);
        }
    }
    return angkaTerbesar;
}

// Test Case
console.log('641573 '+pasanganTerbesar(641573)); // 73
console.log('12783456 '+pasanganTerbesar(12783456)); // 83
console.log('910233 ' +pasanganTerbesar(910233)); // 91
console.log('71856421 ' + pasanganTerbesar(71856421)); // 85
console.log('79918293 '+pasanganTerbesar(79918293)); // 99

// Test Case - angka 0 ditengah2
console.log('01290504 '+pasanganTerbesar(01290504)); //90 