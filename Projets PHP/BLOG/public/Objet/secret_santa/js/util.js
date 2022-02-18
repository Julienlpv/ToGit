'use strict';
/**
 * Génération d'un nombre aléatoire compris entre un intervalle
 * @param {number} min - nombre minimal
 * @param {number} max - nombre max 
 */

function getRandomInteger(min, max) {
   let random = Math.random() * (max - min) + min;
   let Zrandom = Math.floor(random);
   console.log(Zrandom);
}

getRandomInteger(0,10);