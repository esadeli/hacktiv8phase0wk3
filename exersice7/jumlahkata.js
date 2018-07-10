console.log('Exersice 7 - Jumlah Kata \n');

// Definisikan fungsi
function hitungJumlahKata(kalimat) {
    var count = 0;
    var check ='nol';
    if(kalimat.length>0 && kalimat.length !== 1){
        for(var i = 0; i<kalimat.length;i++){
            if(check !== 'dua' && kalimat[0] !==' '){
                if(kalimat[i] === ' '&& kalimat[i+1] !== ' '){
                    count = count+1;
                    check = 'satu';
                    //console.log(count+' '+check + ' '+kalimat[i]);
                }
            }
            if(kalimat[i] === ' '&& kalimat[i+1] !== ' '){
                count = count+1;
                check = 'dua';
                //console.log(count+' '+check + ' '+kalimat[i]);
            }
        }
        if(check === 'satu'){
            return count + 1;
        }else if(check === 'dua'){
            return count;
        }
    }else if(kalimat.length === 1){
        return 1;
    }
}

//Test Case
console.log('I have a dream ' +hitungJumlahKata('I have a dream')); 
console.log('Never eat shredded wheat or cake '+hitungJumlahKata('Never eat shredded wheat or cake'));
console.log('A song to sing ' +hitungJumlahKata('A song to sing')); 
console.log('I '+hitungJumlahKata('I')); 
console.log('I believe I can code '+hitungJumlahKata('I believe I can code')); 

// Test worst case - typo
console.log('   I '+hitungJumlahKata('   I'));
console.log('I believe      I     can      code ' +hitungJumlahKata('I believe      I     can      code')); 
console.log('        I believe      I     can      code '+hitungJumlahKata('        I believe      I     can      code')); 
