    'use strict'; 

let g8;
     g8 = [

['Marianne', 1992],
['Mohammed', 1983],
['Kamel', 1986],
['Gabin', 2001],
['Julien', 1992],
['Vincent', 1990],
['Selene', 1981],
['Alice', 1995],
['Aurelien', 1988],
['Veronique', 1962],

];

// Stocker un tableau par ligne // Voici un tableau à deux dimensions

console.log(g8);

let myYear; 
let indice;

//Afficher la ligne correspondant à l'indice
console.log(g8 [4] ); // C'est un tableau

myYear = g8[4][1];

console.log(myYear);

document.write('<ul>');
for ( let i=0; i < g8.length ;i++ ) {
    document.write('<li>'+ 'Prénom: ' + g8[i][0] + ' Année: ' + g8[i][1]  + '</li>' );
}
document.write('</ul>')


 /**
  * 
  * Possible aussi de faire une deuxieme boucle dans la premiere 
  * Lire le tableau de chaque ligne avec une boucle
  * 
  * i --> indice du premier tableau (principal) (0 à 9)
  * j --> indice de chaque tableau (0 ou 1)
  * Inconvénient: impossible de personnaliser en fonction de j 
  * 
  */


 // for / of
 
 for(let person of g8) /*Pour chaque personne du grp g8*/  {
      console.log(person); // 1 tableau
      console.log(person[0]); // ligne 1 du tableau person 
 }

 