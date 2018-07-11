console.log('Exersice 4 - Built in Array Function');

//Definisikan variable

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    
    // Dapatkan array utama
    input.pop();
    input.push('Pria','SMA International Metro');

    input.splice(2,1,'Provinsi Bandar Lampung');
    var jawabTotal = input;  
    
    // Dapatkan komponen masing - masing array utama:
    //-ID
    var ID = input.slice(0,1)+'';

    // -Nama
    var namaSiswa = input.slice(1,2)+'';
    
    // -Provini
    var provinsi = input.slice(2,3)+'';

    // -Tanggal lahir
    var tanggalLahir = input.slice(3,4)+'';

    // -Jenis Kelamin:
    var gender = input.slice(4,5)+'';

    // -Asal Sekolah
    var asalSekolah = input.slice(5,6)+'';

    // Pecah tanggal lahir menjadi masing2 tanggal - bulan - tahun
    var tanggal = tanggalLahir.slice(0,2);
    var bulanDigital = tanggalLahir.slice(3,5);
    var tahun = tanggalLahir.slice(6,10)

    // Konversi bulan dalam bentuk digital menjadi kata - kata
    var bulan = convertBulan(bulanDigital);


    // Susun ulang jawaban    
    var jawab = '["\ '+ID+'\ "]'+'["\ '+namaSiswa+'\ "]'
                +'["\ '+provinsi+'\ "]'+'["\ '+tanggalLahir+'\ "]' 
                +'["\ '+gender+'\ "]'+'["\ '+asalSekolah+'\ "]'+'\n'+'\n'
                +bulan+'\n'+'\n'
                +'["\ '+tahun+ '"\,'+'"\ '+tanggal+'"\, "\ '+bulanDigital +'\"]'+ '\n'+'\n'
                +tanggal+'-'+bulanDigital+'-'+tahun +'\n'+'\n'
                +namaSiswa +'\n';

    console.log(jawab);

}

function convertBulan(bulan) {
    switch(bulan){
        case '01':
            return 'Januari';
        case '02':
            return 'Februari';    
        case '03':
            return 'Maret';
        case '04':
            return 'April';
        case '05':
            return 'Mei';
        case '06':
            return 'Juni';
        case '07':
            return 'Juli';
        case '08':
            return 'Agustus';
        case '09':
            return 'September';
        case '10':
            return 'Oktober';                
        case '11':
            return 'Nopember';
        case '12':
            return 'Desember';
    }
}

dataHandling2(input);
