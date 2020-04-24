// palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// scegliere una parola
var parola = prompt('scrivi una parola');

// crea una funzione per scorrere le lettere e verificare l'uguaglianza in entrambi i sensi
function sono_palindroma (p) {
    var lettere = p.split('').reverse().join("");
    // se palindroma = true
    // if (lettere === parola) {
    //     return true;
    //     // altrimenti = false
    // } else {
    //     return false;
    // }
    return lettere;
}

// se la corrispondenza è vera stampa messaggio positivo
var risultato = sono_palindroma(parola);
    if (risultato === parola) {
    console.log('Complimenti! Hai scritto una parola palindroma!');
// altrimenti messaggio negativo
 } else {
    // console.log('Mi dispiace, ' + parola + ' non è palindroma ');
    console.log(parola + ' al contrario si legge ' + risultato);
 }


// var lettere = parola.split('').reverse().join("");
// // se palindroma = true
// if (lettere === parola) {
//     console.log('hai scritto una parola palindroma!');
//     // altrimenti = false
// } else {
//     console.log(parola + ' al contrario si legge ' + lettere);
// }
var parola_contrario = '';
for (var i = parola.length - 1; i >= 0; i--) {
    console.log(parola[i]);
    parola_contrario += parola[i];
}

console.log(parola_contrario);
