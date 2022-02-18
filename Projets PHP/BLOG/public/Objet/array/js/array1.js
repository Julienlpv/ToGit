     'use strict';

    let group8;

group8 = ['Marianne','Mohammed','Gabin','Kamel','Julien','Vincent','Selene', 'Aurelien','Alice', 'Veronique']; 

// Tableau 

console.log(group8);



// Afficherune valeur en fonction de son numéro de ligne : indice / index 
let me; 

me = group8[4];

console.log(me);

//Retrouver un indice en fonction d'une valeur
console.log( group8.indexOf('Julien'))

//Rajouter une valeur à la fin d'un tableau 
group8.push('Emmanuel'); 
console.log(group8); // Emmanuel a été rajouté à la fin en 10e position 

//Rajouter une valeur au début du tableau 
group8.unshift('Tartampion');
console.log(group8);

//Supprimer la première valeur du tableau 
group8.shift(); 
console.log(group8); 

// Nombre de lignes du tableau  
console.log(group8.length); 

/**
 * Supprimer une ligne en fonction de son indice 
 *  -> Pour la démonstration: rajout d'une ligne à la fin pour la supprimer
 */

group8.push('Huguette');
console.log(group8); 

// On va cherche l'indice de Huguette
console.log(group8.indexOf('Huguette'));

// Suppression à partir d'un indice

console.log(group8); 

// Autre exemple : supprimer plusieurs lignes à partir d'un indice
let fruits = ['pommes', 'poires','oranges', 'cerises','peches'];
console.log(fruits);
fruits.splice(3,2);
console.log(fruits); 

//Chercher si une valeur se trouve dans un tableau
console.log(fruits.includes('Pommes')); // True 

console.log(fruits.includes('Cerises')); // False puisqu'on les a supprimées avec le splyce

// Afficher les données du tableau group8

document.write(group8);

// Sous forme de liste , énumération , on fait une boucle 
// Effectuer un traitement tant qu'une condition est vérifiée 

// Faire un traitement pour chaque ligne: une boucle 

// Boucle "for" (initialiser un compteur; condition en fonction de la valeur du compteur; incrémentation du compteur)

for(let i=0; i < group8.length ;i++)  { 
    //traitement qui se répète
    console.log(group8[i]);
}

// Afficher le contenu du tableau dans une liste HTML 

document.write('<ul>');
document.write('<li>Julien</li>');
document.write('</ul>');

document.write('<ul>');
for(let i=0; i < group8.length ;i++) {
    document.write('<li>' + group8[i] + '</li>' );
}
document.write('</ul>')


