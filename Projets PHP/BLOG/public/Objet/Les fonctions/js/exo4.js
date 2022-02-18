    'use strict';

//     Exercice 4 :
// Le fichier contiendra 2 fonctions

// checkNameInGroup()
// requestFirstNameInGroup()
// Ces fonctions feront partie d'un module ayant accès aux données group stocké dans data.js

// checkNameInGroup()
// Elle recherche une personne dans le groupe par son prénom, passé en argument.

// La fonction renvoie l'index de la personne trouvée dans le tableau group ou false si rien ne correspond

// requestFirstNameInGroup()
// La fonction utilise checkNameInGroup()

// La fonction demande à l'utilisateur de saisir un prénom jusqu'à ce qu'il corresponde à un membre du groupe.

// L'invite se représente au plus 3 fois.

// La fonction renvoie l'indice de la personne trouvée ou null si la demande échoue au bout des 3 tentatives;

// Tests
// Exécuter checkNameInGroup() pour chaque membre du groupe

// Exécuter requestFirstNameInGroup() 1 fois

// Une fois la fonction exécutée, exécuter le test suivant :

// Si une personne a été trouvée 
//   Afficher dans la console  : son prénom 
// Sinon 
//   Afficher dans la console : Personne ne correspond 
// Faire 2 tests :

// avec un prénom valide
// avec un prénom invalide



/**
 * Trouve l'index de la personne dont le prénom est donné en paramètre
 * @param {string} firstName - Prénom de la personne
 * @return {number} - Indice de la ligne correspondante dans le tableau
 */
function getIndexInGroupByName(firstName) {
    for (let i=0; i < group.length ; i++) {
        if(firstName == group[i].firstName) {
        return i;
        }
        
    }
    
}



let indexOfferor = getIndexInGroupByName('Julien');
console.log(indexOfferor);

// index = getIndexInGroupByName('Wtf');
// console.log(index);


if (indexOfferor == undefined) {
    console.log('Nobody')
}



// Affecter une valeur à l'index directement dans le test: l'affectation
// est entre ()
if ( (index = getIndexInGroupByName('Vincent')) === undefined) {
    console.log('Pas de personne');
} else {
    console.log(index);
}




/**
 * Affiche le même nom que le nom saisi si ce nom correspond à un membre du groupe
 */
function requestFirstNameInGroup (firstName) {
    let nom;
    let comptePrompt = 0;
    do {
        nom = window.prompt('écrire un nom');
        comptePrompt++;
    } while ((index = getIndexInGroupByName(nom)) == undefined && comptePrompt <3);
    index = getIndexInGroupByName(nom);
    
    return index;
}

index = requestFirstNameInGroup();
console.log(index);

// /**/**
// * utilise checkNameInGroup()
// * demande à l'utilisateur de saisir un prénom jusqu'à ce qu'il corresponde à un membre du groupe.
// * L'invite se représente au plus 3 fois.
// * @param (str) prenom - nom de la pers
// * @returns (nbr) - indice de la personne trouvée
// * @returns (-) - null si la demande échoue au bout des 3 tentatives
// */
// function requestFirstNameInGroup() {
//     //je définie mes variables dans la fonction
//     let nom;
//     //pour limiter le nbr de prompt
//     let comptePrompt = 0;
//     do {
//         nom = prompt('écrire un nom').toLowerCase();
//         //je commence mon timer des prompts
//         comptePrompt++;
//         // la variable nom sera toujours != un index donc il faut chercher selon l'index du nom qu'on donne dans prompt
//     } while ((index = getIndexInGroupByName(nom)) == undefined && comptePrompt < 3);

//     return index;
// }

// //je redéfinie index
// index = requestFirstNameInGroup();
// console.log(index); */