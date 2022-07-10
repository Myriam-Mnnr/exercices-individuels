#!/usr/bin/python
# -*- coding: utf-8 -*-

def demanderJoueurs():
    """Demande le nombre de joueurs dans la partie"""
    nombreJoueurs = int(input("Nombre de joueurs dans la partie ? "))
    array = []
    for i in range(nombreJoueurs):
        name = input("Nom du joueur ? ")
        array.append(name)
    return array

def joueursuivant(joueurActuel, joueurs):
    """Passe au joueur suivant pour le multiplayer"""
    for i in range(len(joueurs)):
        potentielSuivant = joueurs[i]
        if potentielSuivant == joueurActuel:
            if joueurs[i + 1] == joueurs[-1]: #ERREUR ICI si i - 1 : dernier joueur du tableau
                return joueurs[0]
            else:
                return joueurs[i + 1]


def enleverAllumettes(total, n):
    """Enlever le nombre d'allumettes"""
    return (total - n)


def verificationAllumettes(nbreallumettes, joueurAllumettes):
    """Vérifie si le nombre d'allumettes que l'utilisateur veut retirer est bon"""
    if joueurAllumettes > 6 or joueurAllumettes < 1:
        print("Vous devez choisir un nombre entre 1 et 6 !")
        return False
    elif nbreallumettes < joueurAllumettes:
        print("Cette action est impossible !")
        return False
    return True


#Gameplay
def jeu(): 
    joueurs = demanderJoueurs()
    joueuractuel = joueurs[0]
    allumettes = 50
    while allumettes > 0:  
        #Demande  
        demandeAllumettes = int(input(str(joueuractuel) + ", combien d'allumettes souhaitez-vous retirer ? "))

        #Vérification  
        verif = verificationAllumettes(allumettes, demandeAllumettes)
        while verif == False:
            demandeAllumettes = int(input(str(joueuractuel) + ", combien d'allumettes souhaitez-vous retirer ? "))
            verif = verificationAllumettes(allumettes, demandeAllumettes)

        #Enlever   
        allumettes = enleverAllumettes(allumettes, demandeAllumettes) 
        print("Il reste " + str(allumettes) + " allumettes.")

        #Victoire
        if allumettes == 0: 
            print("Bravo " + str(allumettes)+ " ! Vous avez gagné !")
            return True

        #Joueur suivant 
        joueuractuel = joueursuivant(joueuractuel, joueurs)


jeu() 