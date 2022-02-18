    'use strict';

    // EXERCICE 3 : Obtenir un objet date à partir d'une chaine

    // Nom de la fonction : getDateByStr()

    // Renvoie un objet Date à partir d'une chaine de la forme dd/mm/yyyy ou yyyy/mm/dd
    
    // Le séparateur est paramétrable, sa valeur par défaut est /

//     Fonctions pouvant être utile :

// String.split([separator[, limit]]) Renvoie un tableau de chaque occurrence séparée par un caractère sep Array.reverse() Inverse l'ordre des éléments du tableau (le premier élément devient le dernier, le dernier devient le premier). Array.toLocaleString() Renvoie une chaîne de caractères qui représente les éléments du tableau.

// Tests
// Tester la fonction avec l'échantillon fourni dans le tableau group du fichier data.js

// Les dates doivent être valides

// for( let obj of group ) {
//     console.log(getDateByStr(obj.birthday)); //La date doit être valide
// }

/**
 * 
 * @param {string} str - chaine de caractère >> Date  
 * @param {Séparateur} sep - Séparateur de chaine
 */
function getDateByStr(str, sep='/') {
    let date;
    
    if (date == 'Invalid Date') {

    }
    let dateStr = str.split(sep).reverse();
    return dateStr;
        

}

for (let obj of group) {
    console.log(getDateByStr(obj.birthday)); //La date doit être valide
}
