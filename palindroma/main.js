// palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// scegliere una parola

var parola = prompt('scrivi una parola');

function sono_palindroma (parola) {
    var lettere = parola.split('').reverse().join("");
    // se palindroma = true
    if (lettere === parola) {
        return true;
        // altrimenti = false
    } else {
        return false;
    }
}

// // splittare le lettere e passarle in rassegna
// var lettere = parola.split('').reverse().join("");
// // se palindroma = true
// if (lettere === parola) {
//     console.log('hai scritto una parola palindroma!');
//     // altrimenti = false
// } else {
//     console.log(parola + ' al contrario si legge ' + lettere);
// }


// inserisco tutto in una funzione

// se palindroma messaggio 'sei palindromo!'

// function panindroma (parola) {
//     var lettere = parola.split('').reverse().join("");
//     console.log(lettere);
// }
