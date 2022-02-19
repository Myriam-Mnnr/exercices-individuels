//Player 1 entre le nombre à deviner (étape 4)
function playerOne() {
    let givenTarget = Number(prompt("Joueur 1 : veuillez entrer un nombre entre 0 et 50."));
    while (givenTarget < 0 || givenTarget > 50) {
        givenTarget = Number(prompt("Joueur 1 : veuillez entrer un nombre entre 0 et 50."));
    }
    return givenTarget;
}


//Player 2 entre sa proposition (étape 1)
function askNumber() {
    let givenNumber = Number(prompt("Joueur 2 : veuillez entrer un nombre (entre 0 et 50)"));
    return givenNumber;
}


//Teste si player 2 a deviné le nombre de player 1 (étape 2 et 3)
function didIWin(givenNumber, givenTarget, i) {
    if (givenNumber === givenTarget) {
        return true;
    } else if (givenNumber < givenTarget && i == 1) {
        alert("Plus grand. \nVous avez fait " + i + " tentative.");
        return false;
    } else if (givenNumber > givenTarget && i == 1) {
        alert("Plus petit. \nVous avez fait " + i + " tentative.");
        return false;
    } else if (givenNumber < givenTarget) {
        alert("Plus grand. \nVous avez fait " + i + " tentatives.");
        return false;
    } else {
        alert("Plus petit. \nVous avez fait " + i + " tentatives.");
        return false;
    }
}


//Lance la partie (étape 2 et 3)
function gamePlay() {
    let numberGiven = playerOne();
    let counter = 0;
    let resultat = false;
    do {
        let numberEntered = askNumber();
        counter++;
        resultat = didIWin(numberEntered, numberGiven, counter);
    } while (resultat == false);
    if (counter == 1) {
        document.body.innerHTML += "Bravo ! Vous avez deviné le nombre en " + counter + " tentative.";
    } else {
        document.body.innerHTML += "Bravo ! Vous avez deviné le nombre en " + counter + " tentatives.";
    }
}

gamePlay(); 
