/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz.
per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

// CREO UNA VARIABILE CHE CONTERRA' IL PUNTAMENTO ALL'ELEMENTO

var puntatore = document.getElementById('lista');

// INIZIALIZZO LA VARIABILE DI TIPO STRINGA CHE CONTERRA' I VALORI DA STAMPARE

var valStampare = '';
// CREO UN CICLO FOR CHE STAMPI I NUMERI CON CONTATORE INIZIALIZZATO A 1 E VADA FINO A 100
for (var i = 1; i <= 100; i++) {
    var numero = i;
    // SE DALLA DIVISIONE CON 3 E 5 OTTENGO IN ENTRAMBI I CASI IL MODULO = 0 ALLORA STAMPA "FIZZBUZZ"

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        valStampare += '<li>' + 'FizzBuzz' + '</li>';
        

        // ALTRIMENTI SE DALLA DIVISIONE CON 5 OTTENGO MODULO = 0 ALLORA STAMPO "BUZZ"

    } else if  (i % 5 == 0) {
        console.log('Buzz');
        valStampare += '<li>' + 'Buzz' + '</li>';
        
        // ALTRIMENTI SE DALLA DIVISIONE CON 3 OTTENGO MODULO = 0 ALLORA STAMPO "FIZZ"

    } else if ( i % 3 == 0) {
        console.log('Fizz');
        valStampare += '<li>' + 'Fizz' + '</li>';

        // ALTRIMENTI STAMPA SOLO IL VALORE
    } else {
        console.log(i);
        valStampare += '<li>' + i + '</li>';
    }
    
}
// INSERISCO ALL'INTERNO DEL DOCUMENTO IL VALORE 
puntatore.innerHTML = valStampare;