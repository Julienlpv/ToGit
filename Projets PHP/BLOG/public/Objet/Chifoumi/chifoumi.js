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


if (Computerrandom == Pierre  ) {
    document.write('Computer a choisi la Pierre ')
}

else if (Computerrandom == Feuille  ) {
    document.write('Computer a choisi la Feuille ')
}

else  {
    document.write('Computer a choisi le Ciseau ')
}


// Initialiser choiceUser
choiceUser = window.prompt('Tapez 1 pour Pierre 2 pour feuille ou 3 pour ciseaux');


if (choiceUser == Pierre && Computerrandom == Pierre) {
    document.write(' Egalité ')
}
else if (choiceUser ==Pierre && Computerrandom == Feuille) {
    document.write(' Vous avez perdu, recommencez ;) ')
}
else if (choiceUser == Pierre && Computerrandom == Ciseau) {
    document.write(' Vous avez gagné !')
}


else if (choiceUser == Feuille && Computerrandom == Pierre ) {
    document.write(' Vous avez gagné !')
}
else if (choiceUser == Feuille && Computerrandom == Ciseau ) {
    document.write(' Vous avez perdu, recommencez ;) ')
}
else if (choiceUser == Feuille && Computerrandom == Feuille ) {
    document.write(' Egalité !')
}

else if (choiceUser == Ciseau && Computerrandom == Pierre) {
    document.write(' Vous avez perdu, recommencez ;) ')
}
else if (choiceUser == Ciseau && Computerrandom == Feuille) {
    document.write(' Vous avez gagné !')
}
else if (choiceUser == Ciseau && Computerrandom == Ciseau) {
    document.write(' Egalité !')
}



console.log(Computerrandom)



