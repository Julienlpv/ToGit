    'use strict';

/**
 * Dessine un cercle parfait en css appliqué sur balise span
 * @param {number} diameter - Diamètre du cercle
 * @param {string} [color=red] - Couleur de fond 
 * @returns {(null)}
 */
function showCircleCss(diameter, color=`red`) {
    if (diameter ===0) {
        return null; 
    }
    return  document.write(  `  <span style="
            width:${diameter}px;
            height:${diameter}px;
            background-color :${color};
            display : inline-block;
            border-radius:50%;"></span> `);
    
    }



// TESTS 
showCircleCss(10); // Cercle rouge de 10
showCircleCss(0,'green'); // Rien
showCircleCss(20,'blue'); // Cercle bleu de 20

// Tester avec des valeurs de retour
let colorAr = ['green','orange','blue','black'];

for (let i=0; i<colorAr.length; i++) {
    let diameter = i*30;
    let color = colorAr[i]
    
    if ( showCircleCss(diameter.color) === null) {
        console.log('pas de cercle');
    }
    
}