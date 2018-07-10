console.log('Exersice 5 - Palindrome \n');

// Definisikan Fungsi
function palindrome(kata) {
    var ukuran = kata.length;
    var iterasi = Math.round(ukuran/2);
    
    for(var i = 0;i<iterasi;i++){
        if(kata[i]===kata[ukuran-i-1]&&(i === iterasi || i === iterasi -1 )){
            return true;
        }else if(kata[i] === kata[ukuran-i-1]){
            // continue looping
        }else{
            return false;     
        }
    }
    return '';
}

// TEST CASES
console.log('katak ' +palindrome('katak')); 
console.log('blanket ' +palindrome('blanket')); 
console.log('civic '+palindrome('civic')); 
console.log('kasur rusak '+palindrome('kasur rusak')); 
console.log('mister ' +palindrome('mister')); 

console.log('kattak '+palindrome('kattak'));
console.log('katbak '+palindrome('katbak'));
console.log('malang kgnalam '+palindrome('malang kgnalam'));