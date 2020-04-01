/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi Buzz.
per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 */

 // CREO UN CICLO FOR CHE STAMPI I NUMERI CON CONTATORE INIZIALIZZATO A 0 E VADA FINO A 99
for (var i = 1; i <= 100; i++) {
    
    // CREO UNA VARIABILE CHE MEMORIZZI AD OGNI CICLO IL VALORE 

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz: ' + i)  
    } else if  (i % 5 == 0) {
        console.log('Buzz: ' + i);
    } else if ( i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
        
    }
    
}