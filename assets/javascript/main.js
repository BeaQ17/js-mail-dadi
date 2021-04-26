/*
//Es 1 - Mail
//Chiedi all’utente la sua email 
var email = prompt("Inserisci la tua email:")

var list = ["first@gmail.com", "second@gmail.com", "third@gmail.com"];
console.log(list);

var guard = false; //var sentinella segnaposto


//controlla che sia nella lista di chi può accedere 
for (var i = 0; i < list.length; i++){
    if (email == list[i]){
        guard = true;
    }

}


//stampa un messaggio appropriato sull’esito del controllo
if (guard == true){
    console.log("trovato");
    document.getElementById("foundti").innerHTML = "Email trovata";

} else {
    console.log("non trovato");
    document.getElementById("foundti").innerHTML = "Email non trovata";

}
*/


//Es 2 - Dadi
//Generare numero random per giocatore e computer
var numPlayer = Math.round(Math.random() * 6);
console.log(numPlayer);
document.getElementById("player").innerHTML = "Il numero del giocatore è " + numPlayer;

var numPC = Math.round(Math.random() * 6);
console.log(numPC);
document.getElementById("pc").innerHTML = "Il numero del computer è " + numPC;


//stabilire chi vince in base a chi fa il numero più alto
if (numPlayer > numPC){
    console.log("Vince il giocatore");
    document.getElementById("winner").innerHTML = "Vince il giocatore";
} else if (numPlayer < numPC) {
    console.log("Vince il computer");
    document.getElementById("winner").innerHTML = "Vince il computer";
} else if (numPlayer == numPC){
    console.log("Pareggio");
    document.getElementById("winner").innerHTML = "Pareggio";

}

