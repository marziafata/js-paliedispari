// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// l'utente sceglie pari o dispari
var scelta_utente = prompt('Scegli pari o dispari');
console.log('Scelgo: ' + scelta_utente);

// l'utente sceglie un numero
var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log('Numero utente: ' + numero_utente);

// il pc "sceglie" un numero
var numero_pc = Math.floor(Math.random() * 5) + 1;
console.log('Numero pc: ' + numero_pc);

// sommo i due numeri
var totale = (numero_utente + numero_pc);
console.log('La somma dei due numeri è: ' + totale);

// creo una funzione per determinare se il totale è pari o dispari
function is_pari (totale) {
    var resto = totale % 2;
    if (resto == 0) {
        // il numero è pari
        return true;
    } else {
        // il numero è dispari
        return false;
    }
}

// se sia la scelta dell'utente che il totale corrispondono a "pari" stampa "hai vinto!"
 var risultato = is_pari(totale);

 if (scelta_utente === 'pari' && risultato == true) {
     console.log('Hai vinto!');

// in tutti gli altri casi stampa "Hai perso!"
 } else {
     console.log('Hai perso!');
 }
