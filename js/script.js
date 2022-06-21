// funzione per arrotondare in base ai decimali richiesti
function round(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}
// stabilisco il prezzo al chilometro
const prezzoKm = 0.21
console.log('prezzoKm:',prezzoKm)

// chiedo all'utente i numeri di chilimetri e l'età del passeggero
const numKilometers = parseFloat(prompt('quanti chilometri vuoi percorrere?'))
console.log('numKilometers:',numKilometers)
const age = parseInt(prompt ('Quanti anni hai?'))
console.log('age:',age)

// calcolo il prezzo base
let prezzoBaseKm = numKilometers * prezzoKm
console.log('prezzoBaseKm:',prezzoBaseKm)

// controllo l'età per sapere se applicare gli sconti
if(age < 18){
    // calcolo lo sconto del 20% (prezzo - (prezzo * 20/100))
    prezzoBaseKm = prezzoBaseKm - (prezzoBaseKm * 20 / 100)
} else if (age >= 65){
    // calcolo lo sconto del 40% (prezzo - (prezzo * 40/100))
    prezzoBaseKm = prezzoBaseKm - (prezzoBaseKm * 40 / 100)
}

// stampo il prezzo del  biglietto in console
console.log('prezzo biglietto:',prezzoBaseKm,'età:',age)

// stampo il prezzo del  biglietto nella pagina arrotondandolo ai due decimali
document.getElementById('prezzo').innerHTML = "Prezzo biglietto: <strong>"+round(prezzoBaseKm,2)+" €</strong>"
