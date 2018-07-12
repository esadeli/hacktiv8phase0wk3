console.log('Exersice 15 - Kelompok Hewan \n');

// Definisikan fungsi
function groupAnimals(animals) {
    //----Situasi Array awal-----
    console.log(animals);
    
    var newAnimals = []; // array baru untuk pengelompokkan hewan berdasarkan abjad

    var refAbjad = 'abcdefghijklmnopqrstuvwxyz';

    // sorting array based on alphabet

    for(var i = 0; i<refAbjad.length; i++){
        for(var j = 0; j<animals.length;j++){
            if(animals[j][0] === refAbjad[i]){
                newAnimals.push(animals[j]);
            }
        }
    }
    // console.log(newAnimals); // check if sort is successful

    // Build the new array
    var tempArray = [];  // temporary array 
    var finalArray = [];  // array final
    
    // Build the beginning and middle of the array
    for(var l = 0; l < newAnimals.length; l++){
        if(l===0){
            tempArray.push(newAnimals[0]);
        }else if(l>0 && newAnimals[l][0]===newAnimals[l-1][0]){
            tempArray.push(newAnimals[l]);
        }else if(l>0 && newAnimals[l][0]!==newAnimals[l-1][0]){
            finalArray.push(tempArray);
            tempArray = []; // empty the temporary array
            tempArray.push(newAnimals[l]);
        }
    }    

    // Adding the last one or last two 
    finalArray.push(tempArray);
    tempArray = [];

    return finalArray;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log('\n');
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


//----Tambahan skenario
console.log('\n');
console.log(groupAnimals(['elang', 'ayam', 'zebra', 'rusa', 'lynx', 'tapir', 'rangkong' ]));
