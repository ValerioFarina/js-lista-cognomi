/* CONSEGNA: Creare un array contenente dei cognomi in ordine casuale.
             Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
             Stampare la lista dei cognomi in ordine alfabetico e
             comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato). */


// creo un array contenente dei cognomi in ordine casuale e lo salvo in una variabile
var lastNames = ['rossi', 'colombo', 'ferrari', 'costa', 'fontana', 'santoro', 'bernardi']

// chiedo all'utente di inserire il suo cognome (e lo salvo in una variabile)
var userLastName = prompt('Inserisci il tuo cognome');

// inserisco il congome dell'utente nell'array lastNames
lastNames.push(userLastName);

// ordino l'array lastNames secondo l'ordine alfabetico
lastNames.sort();

console.log(lastNames);
