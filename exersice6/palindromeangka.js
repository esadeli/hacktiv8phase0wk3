console.log('Exersice 6 - Palindrome Angka');

// Definisikan Fungsi
function angkaPalindrome(num) {
    var numString = num+'';
    var len = numString.length;

    if(len>1){
        var iterasi = Math.round(len/2);
        var isAPalindrome=0;
        var angka = num;

        while(isAPalindrome !==1){
            //console.log(angka);
            var angkaString = angka+'';
            var angkaReverse = '';
            // Reverse checking
            for(var i=angkaString.length-1;i>=0;i-- ){
                angkaReverse = angkaReverse + angkaString[i];
            }
            //console.log(angkaReverse);
            if(angkaReverse === angkaString){
                isAPalindrome = 1;
                return parseInt(angkaReverse); //+ ' is a Palindrome'
            }else{
                angka = angka+1;   
            }
        }
    }else{
        return num + 1;
    }
    return '';
}

console.log('8: '+angkaPalindrome(8)); 
console.log('10: ' +angkaPalindrome(10)); 
console.log('117: ' +angkaPalindrome(117)); 
console.log('175: ' +angkaPalindrome(175)); 
console.log('1000: ' +angkaPalindrome(1000));

console.log('10202: ' +angkaPalindrome(10202));
// console.log(angkaPalindrome(12299));
// console.log(angkaPalindrome(12321));