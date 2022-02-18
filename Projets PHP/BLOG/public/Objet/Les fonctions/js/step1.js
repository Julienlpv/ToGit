    'use strict';
// Les fonctions déclarées 
/**
 * Les fonctions permettent au code d'être appelé plusieurs fois sans répétition.
 */

// Déclaration de la fonction 
function showHello() {
    console.log('Bonjour tout le monde!')
}

// Exécution de la fonction
showHello();
showHello();

// PORTEE DES VARIABLES 

let pseudo = 'Gaston';

// Accès aux variables externes en lecture
function showHelloSomebody() {
    console.log('Bonjour ' + pseudo);
}

showHelloSomebody(); // Bonjour Gaston

// Accès aux variables externes en écriture

function modifyPseudo () {
    pseudo = 'Tartempion';
}

modifyPseudo ();
console.log(pseudo); // Tartempion 

// La variable externe n'est utilisée que s'il n'y a pas de var locale
function showHelloElse() {
    // Rappel : une variable définie avec var reste locale à la fonction (c'est le seul cas où il n'y a pas d'hosting)
    var pseudo = 'Truc';
    console.log(pseudo);
}

showHelloElse(); // Truc
console.log(pseudo); // Tartempion 

/**PARAMETRES ET ARGUMENTS D'UNE FONCTION
 * 
 * paramètre: variable répertoriée dans la déclaration de la fonction
 * argument: valeur transmise à cette variable au moment de l'exécution
 */

function showHelloSomebodyElse(firstName) {
    console.log('Bonjour ' + firstName);
}

showHelloSomebodyElse('Huguette'); // Affiche Bonjour Huguette
showHelloSomebodyElse(pseudo); // Affiche Bonjour  Tartempion ;

// La variable peut porter le même nom que le paramètre de la fonction, attention, ce n'est pas la même chose. 
let firstName = 'Maurice';
// Mais elle contient la valeur à transmettre (le parametre correspond à la valeur attendue de la variable)
showHelloSomebodyElse(firstName); // Maurice 

// Plusieurs paramètres à des fonctions 
function showInfoContact(lastName,email) {
    console.log('Nom: ' + lastName);
    console.log('Nom: ' + email);
}
// A l'exécution, les valeurs doivent être passées dans l'ordre des paramètres
showInfoContact('Gérard DUPONT','gd@laposte.net');

// Les arguments sont obligatoires, sauf si une valeur est prévue par défaut
function calcSum(nb1,nb2=1) {
    console.log(nb1 + nb2);
}
calcSum (3,2);
calcSum (4); // nb 2 = 1 >> la valeur par défaut 

/**
 * VALEUR DE RETOUR
 * En général une fonction renvoie le résultat d'un traitement 
 */

// Une variable du traitement principal qui va stocker les valeurs de retour
let result;

function calcMultiply(a,b) {
    // La fonction renvoie le résultat de la multiplication 
    return a * b; 
    // return provoque l'arrêt de la fonction
    console.log('Rien dans la console'); // Ne se produit pas 
}
// La variable résult est affectée de la valeur de retour de la fonction
result = calcMultiply(2,3);

console.log(result);

function calcModulo (a,b) {
    if ( b !== 0) { // Si b = 0 la fonction ne retourne rien 
        return a % b;
    }
    // Un return peut ne pas renvoyer une valeur et juste provoquer l'arrêt de la fonction.
    return;
}
result = calcModulo(2,3);
console.log(result);

// Une fonction qui ne renvoie rien, ou qui fait un simple return retourne undefined. 
result = calcModulo(2,0);
console.log(result); // undefined 

function calcModulo2(a,b) {
    let resuult;

    // En testant plutot le traitement impossible avant
    if ( b ===0) return null;
    // On évite que le code de la fonction soit dans un bloc (on imagine un code plus long pour le traitement)
    a++;
    b++;
    result = a % b;
    return result;
}
result = calcModulo2(2,0);
console.log(result); // Retourne null


// DOCUMENTATION D'UNE FONCTION : IMPORTANT ET INCONTOURNABLE !

/**
 * description de la fonction
 * @param {number} a - Description du paramètre 
 * @returns {number}    - Description de la valeur de retour 
 */
function getSomething(a) {
    // Traitement de a
    return a;
}

// TEST DE LA FONCTION 
// Exécuter la fonction pour les différents cas possibles / échantillonage
getSomething(2);