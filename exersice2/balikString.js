console.log('Exersice 2 - Balik String');


// Difinisikan function
function balikString(kata){
    var displayReverse ='';
    for(var i = kata.length; i> 0;i--){
        displayReverse += kata[i-1];
    }
    return displayReverse;
}


//Test Case
console.log(balikString('Hello World'));
console.log(balikString('This is not a game'));
