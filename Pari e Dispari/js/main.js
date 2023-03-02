
// Chiedo all'utente pari o dispari
let pariDispariDom =parseInt( prompt("Inserisci un numero pari o dispari"));
console.log(pariDispariDom);
// Chiedo all'utente di inserire un numero da 1 a 5
var numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numUtente);

 // FUNZIONE - Genero un numero casuale tra 1 e 5 per pc
function numGenerator(min, max) {
    var generator = Math.floor(Math.random() * (max - min) + min);
    return generator;
  }
//richiamo la funzione per segnalare i valori

let numComputer = numGenerator(5,1); 
console.log(numComputer);

let somma = numComputer + numUtente;

// somma pari o dispari

let risultato;

function sommaPeD(somma) {

   if (somma % 2 == 0) {
    risultato = "p";
   } else {
    risultato = "d";
   }
   return somma;

 };
 let risultatoFinale = sommaPeD(somma);
 console.log(risultatoFinale);

 if (risultato == pariDispariDom) {
    console.log("Vince l'utente");
   } else {
    console.log('Vince il computer');
   }









