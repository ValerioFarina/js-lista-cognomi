/* CONSEGNA: Creare un array contenente dei cognomi in ordine casuale.
             Chiedere all'utente il suo cognome e inserirlo nella lista dei cognomi.
             Stampare la lista dei cognomi in ordine alfabetico e
             comunicare all'utente la posizione in cui si trova il suo cognome (dopo averlo riordinato). */


// creo un array contenente dei cognomi in ordine casuale e lo salvo in una variabile
var lastNames = ['rossi', 'colombo', 'ferrari', 'costa', 'fontana', 'santoro', 'bernardi']

// chiedo all'utente di inserire il suo cognome, trasformo l'input inserito dall'utente in lower case e lo salvo in una variabile
// continuo a fare questo fintanto che l'input inserito dall'utente è una stringa vuota
var userLastName
do {
    userLastName = prompt('Inserisci il tuo cognome').toLowerCase();
}
while (userLastName == '');

// inserisco il congome dell'utente nell'array lastNames (ma solo se non è già presente nell'array)
if (!lastNames.includes(userLastName)) {
    lastNames.push(userLastName);
}

// ordino l'array lastNames secondo l'ordine alfabetico
lastNames.sort();

/* VERSIONE ALTERNATIVA: simulo il comportamento della funzione sort usando il ciclo for
for (var i=0; i<lastNames.length; i++) {
    for (var j=0; j<=i; j++) {
        if (lastNames[i]<lastNames[j]) {
            var lower = lastNames[i];
            var greater = lastNames[j];
            lastNames[j] = lower;
            lastNames[i] = greater;
        }
    }
} */

// creo una variabile in cui salvo la posizione del cognome dell'utente all'interno dell'array lastNames (ordinato alfabeticamente)
var indexOfUserLastName = lastNames.indexOf(userLastName);

/* VERSIONE ALTERNATIVA: simulo il comportamento della funzione indexOf usando il ciclo for

var indexOfUserLastName;
for (var i=0; indexOfUserLastName==undefined; i++) {
    if (lastNames[i]==userLastName) {
        indexOfUserLastName = i;
    }
} */

// comunico all'utente la posizione in cui si trova il suo cognome all'interno dell'array lastNames (ordinato alfabeticamente)
console.log('Il tuo cognome si trova in posizione ' + indexOfUserLastName);
