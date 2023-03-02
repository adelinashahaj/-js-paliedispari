
//chiedo all utente di inserire una parola

let parolaDom = prompt('inserisci una parola');

// creo una funzione e inserisco i valori e poi verifichiamo se le lettere sono uguali
function palindroma (parola){
    let inizio = 0;
    let fine = parola.length - 1;
    let controllo = true;
    
    for (let i = 0; i < parola.length; i++) {
      if(parola[inizio] !== parola[fine]){
        controllo = false;
      }
      console.log(controllo);
      
    }
    return controllo;
  }
  
  // verifichiamo se la nostra parola che abbaiamo scritto e palindroma
  if (palindroma(parolaDom)){
    console.log('la parola è palindroma');
  }else{
    console.log('la parola non è palindroma');
  }