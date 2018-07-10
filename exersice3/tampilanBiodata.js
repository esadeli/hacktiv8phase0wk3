console.log('Exersice 3 - Balik String');

//Definisikan variable

var dataawal = [
    ['0001','Roman Alamsyah','Bandar Lampung','21/05/1989','Membaca'],
    ['0002','Dika Sembiring','Medan','10/10/1992','Bermain Gitar'],
    ['0003','Winona','Ambon','25/12/1965','Memasak'],
    ['0004','Bintang Senjaya','Martapura','6/4/1970','Berkebun']
];
//var max = dataawal.length;
function dataHandling(){
    var baris = dataawal.length;
    var bio;
    
    for (var i = 0; i<baris;i++){
        var kolom = dataawal[i].length;
            bio = 'Nomor ID: '+dataawal[i][0] +'\n'
              + 'Nama Lengkap: '+dataawal[i][1]+'\n'
              + 'TTL: '+dataawal[i][2]+' '+dataawal[i][3]+'\n'
              + 'Hobi: '+dataawal[i][4]+'\n';
            console.log(bio);
    }
    return '';
}
console.log(dataHandling());
