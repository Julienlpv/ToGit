'use strict';

/**
 * Renvoie un entier au hasard compris dans [min,max] 
 * 
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

