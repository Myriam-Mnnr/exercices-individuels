
let colors = ["jaune", "bleu", "rouge", "vert", "blanc", "noir", "violet", "rose"];
let secretCode = ["bleu", "vert", "rouge", "vert"];

//Check if the colors the user entered is OK 
function checkColor(colorsOfUser, colorsOfCode) {
    for (let i = 0; i < colorsOfUser.length; i++) {
        if ((colorsOfCode.includes(colorsOfUser[i])) == false) {
            alert("Action impossible ! Veuillez choisir une des couleurs suivantes : jaune, bleu, rouge ou vert.");
            return false;
        }
    }
}

//Check que le user a bien entré 4 couleurs 
/*
function checkNumberOfColors(array){
    if(array.length !== 4){
        alert("Vous devez entrer 4 couleurs")
    }
}
*/


//Check if the user found the right combination (voir aussi JSON.stringify(arrOne) === JSON.stringify(arrTwo))
function isColorRight(arrayUser, secretCode) {
    for (let i = 0; i < secretCode.length; i++) {
        if (secretCode[i] !== arrayUser[i]) {
            return false;
        }
    }
    alert("Bravo ! Vous avez trouvé la bonne combinaison !");
    return true;
}



//Fonction qui gère la partie 
function gameplay() {
    let n = 0;
    while (n < 12) {
        let answer = prompt("Vous devez deviner la combinaison suivante : xxxx. Les 8 couleurs possibles sont jaune, bleu, rouge, vert, blanc, noir, violet et rose. Veuillez entrer votre combinaison de 4 couleurs (séparer les couleurs par un espace) :")
        let arrayUser = answer.split(" ");

        while (checkColor(arrayUser, colors) == false) {
            answer = prompt("Les 8 couleurs : jaune, bleu, rouge, vert, blanc, noir, violet et rose. Veuillez entrer votre combinaison de 4 couleurs (séparer les couleurs par un espace) :")
            arrayUser = answer.split(" ");
        }

        if (isColorRight(arrayUser, secretCode) == true) {
            return true;
        }

        if (isColorRight(arrayUser, secretCode) == false) {
            //Compter bonnes couleurs mal et bien placées
            let sumGoodColors = 0;
            let sumGoodPosition = 0
            for (let x = 0; x < secretCode.length; x++) {
                if (arrayUser[x] == secretCode[x]) {
                    sumGoodPosition++;
                } else if (secretCode.includes(arrayUser[x])) {
                    sumGoodColors++;
                }
            }
            alert("Couleurs bien placées : " + sumGoodPosition + ". Mal placées : " + sumGoodColors);
        }
        //Compter nbre de tentatives
        n++
        alert("Nombre de tentatives : " + n);
    }
    alert("Perdu ! Vous avez dépassé le nombre de tentatives possibles.");
}

gameplay();

