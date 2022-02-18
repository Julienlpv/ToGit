     'use strict';

// Déclaration des constantes
const Pierre = 1;
const Feuille = 2;
const Ciseau = 3;

// Déclaration des variables 
// Une pour l'utilisateur
let choiceUser;
// Une pour l'ordinateur
let Computerrandom = Math.floor(Math.random()*3) +1 ;


// Initialisation de Choice user 
choiceUser = window.prompt('Tapez 1 pour Pierre 2 pour feuille ou 3 pour ciseaux');


/*switch(choiceUser) {
   case 'Pierre': if (Computerrandom == Pierre && choiceUser == Pierre || Computerrandom == Feuille && choiceUser == Feuille || Computerrandom == Ciseau && choiceUser == Ciseau ) {
       document.write('Egalité')
    }

   case 'Victoire': if (choiceUser == Pierre && Computerrandom == Ciseau || choiceUser == Feuille && Computerrandom == Pierre  || choiceUser == Ciseau && Computerrandom == Feuille); {
       document.write('Victoire!')
    } 


    console.log(Computerrandom); }
    else {document.write('Défaite')}
   

   console.log(Computerrandom); }*/

if(Computerrandom == choiceUser) {
   document.write('Egalité')
}

else

switch(choiceUser) {
     case 'Ciseau': 
      (Computerrandom == Pierre) 
        document.write('Vous avez perdu')
     
      (Computerrandom == Feuille) 
        document.write('Vous avez gagné')
     
     case 'Pierre':
      (Computerrandom ==Feuille ) 
        document.write('Vous avez perdu')
     
      (computerrandom ==Ciseau)  
        document.write('Vous avez gagné')
     
     case 'Feuille':
      (computerrandom == Ciseau) 
        document.write('Vous avez perdu')
     
      (computerrandom == Pierre) 
        document.write('Vous avez gagné')
}


// A REFAIRE