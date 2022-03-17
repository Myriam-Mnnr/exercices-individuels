
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

//Vérification allumettes 
function verificationAllumettes(allumettes, demandeAllumettes) {
    if (allumettes < demandeAllumettes) {
        alert("False");
        return false;
    }
    if (demandeAllumettes > 6 || demandeAllumettes < 1) {
        alert("Vous devez choisir entre 1 et 6 allumettes.");
        return false;
    }
    return true;
}


//Gameplay 
function jeu() {
    let joueurs = demanderJoueurs();
    let joueuractuel = joueurs[0];
    let allumettes = 50;

    while (allumettes > 0) {
        //Demander les allumettes 
        let demandeAllumettes = prompt(joueuractuel + ": Combien d'allumettes souhaitez-vous retirer ? (entre 1 et 6)");

        //Vérification allumettes 
        let verif = verificationAllumettes(allumettes, demandeAllumettes);
        while (verif == false) {
            demandeAllumettes = prompt(joueuractuel + ": Combien d'allumettes souhaitez-vous retirer ? (entre 1 et 6)");
            verif = verificationAllumettes(allumettes, demandeAllumettes);
        }

        //enlever les allumettes 
        allumettes = enleverAllumettes(allumettes, demandeAllumettes);
        alert("Les allumettes : " + allumettes);

        //Victoire 
        if (allumettes == 0) {
            alert("Bravo " + joueuractuel + " ! Tu as gagné !");
        }

        //Joueur suivant 
        joueuractuel = joueursuivant(joueuractuel, joueurs);
    }
}


jeu(); 