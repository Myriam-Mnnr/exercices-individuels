let givenTarget;
let givenNumber;
let counter = 0;

//Range
let rangeMin = 0;
let rangeMax = 50;
document.getElementById("range").innerHTML = rangeMin + " < ? < " + rangeMax;


//Fonction : demande au player 1 d'entrer le nombre que player 2 doit deviner
function playerOne() {
    givenTarget = Number(document.getElementById("playerOne").value);
    if (givenTarget < 0 || givenTarget > 50) {
        document.getElementById("message").innerHTML = "Entrez un nombre entre 0 et 50 !"
    } else {
        document.getElementById("playerOne").value = " ";
        document.getElementById("message").innerHTML = "Joueur 2, c'est à votre tour !";
    }
    return givenTarget;
}


//Fonction : teste si player 2 a deviné le bon nombre
function didIWin(theTarget) {
    givenNumber = Number(document.getElementById("playerTwo").value);
    counter++;
    document.getElementById("tentative").innerHTML = "Nombre de tentatives : " + counter;
    if (givenNumber == theTarget) {
        document.getElementById("indice").innerHTML = " ";
        document.getElementById("range").innerHTML = "Bravo ! Vous avez deviné le nombre !";
        document.getElementById("message").innerHTML = " "; 
    } else {
        if (givenNumber < theTarget) {
            document.getElementById("indice").innerHTML = "Plus grand. ";
            if (givenNumber > rangeMin) {
                rangeMin = givenNumber;
                document.getElementById("range").innerHTML = rangeMin + " < ? < " + rangeMax;
            }
            if (givenNumber < rangeMin) {
                alert("Le nombre proposé n'est pas dans le range.")
            }
        }
        if (givenNumber > theTarget) {
            document.getElementById("indice").innerHTML = "Plus petit.";
            if (givenNumber < rangeMax) {
                rangeMax = givenNumber;
                document.getElementById("range").innerHTML = rangeMin + " < ? < " + rangeMax
            }
            if (givenNumber > rangeMax) {
                alert("Le nombre proposé n'est pas dans le range");
            }
        }
    }
}

