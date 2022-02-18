    'use strict';
/**
 * Génération d'un nombre aléatoire compris entre un intervalle
 * @param {number} min - nombre minimal
 * @param {number} max - nombre max 
 */

function getRandomInteger(min, max) {
   let random = Math.random() * (max - min) + min;
   let Zrandom = Math.floor(random);
   console.log(random);
   
}

// TESTS 
getRandomInteger(10,20);
getRandomInteger(20,30);
getRandomInteger(5,10);


// Exercice 2 : Rajout d'un test 

// Tirer au hasard une ligne du tableau group et l'afficher dans la console.


console.log(group);

let randomDraw = group[Math.floor(Math.random() * group.length)];

console.log(randomDraw);

