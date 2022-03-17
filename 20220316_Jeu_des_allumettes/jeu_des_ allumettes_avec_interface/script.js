
//Multijoueurs 
function demanderJoueurs() {
    let nombrejoueurs = prompt("Nombre de joueurs dans la partie ?");
    let array = [];
    for (let i = 0; i < nombrejoueurs; i++) {
        let name = prompt("Nom du joueur");
        array.push(name);
    }
    return array;
}

//Joueur suivant 
function joueursuivant(joueuractuel, joueurs) {
    for (let i = 0; i < joueurs.length; i++) {
        let potentielsuivant = joueurs[i]
        if (potentielsuivant == joueuractuel) {
            if (joueurs[i + 1] === undefined) {
                return joueurs[0]
            } else {
                return joueurs[i + 1];
            }
        }
    }
}

//Retirer des allumettes 
function enleverAllumettes(total, n) {
    return total - n;
}

//Déclaration des variables + appel des joueurs + affichage 
let allumettes = 50;
let joueurs = demanderJoueurs();
let joueuractuel = joueurs[0];
document.getElementById("player").innerHTML = joueuractuel + ", c'est à votre tour !"


//Gameplay 
function jeu() {

    //Changer le nom de player 
    document.getElementById("player").innerHTML = joueuractuel + ", c'est à votre tour !"

    //Récupérer la valeur de l'input 
    let demandeAllumettes = document.getElementById("answer").value;

    //Efface les erreurs d'avant (pour rejouer)
    document.getElementById("erreurone").innerHTML = " ";
    document.getElementById("erreurtwo").innerHTML = " ";


    if (allumettes > 0) {

        //Vérification allumettes 
        if (demandeAllumettes > 6 || demandeAllumettes < 1) {
            document.getElementById("erreurtwo").innerHTML = "Vous devez choisir entre 1 et 6 allumettes.";
            return false;
        }

        if (allumettes < demandeAllumettes) {
            document.getElementById("erreurone").innerHTML = "Cette action est impossible";
            return false;
        }

        //Enlever les allumettes et afficher le nouveau nombre
        allumettes = enleverAllumettes(allumettes, demandeAllumettes);
        document.getElementById("allumettes").innerHTML = allumettes;

        //Victoire 
        if (allumettes == 0) {
            document.getElementById("player").innerHTML = " ";
            document.getElementById("victoire").innerHTML = "Bravo " + joueuractuel + " ! Vous avez gagné !";
            return true;  
        }

        //Joueur suivant
        joueuractuel = joueursuivant(joueuractuel, joueurs);

        //Changer le nom de player 
        document.getElementById("player").innerHTML = joueuractuel + ", c'est à votre tour !"
    }

}
