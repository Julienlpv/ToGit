'use strict';

/**
 * SLIDER - GRETAWEB Groupe 8
 *  
 *  1 - Récupérer une collection des éléments à faire défiler (dans une variable slides) dans un tableau 
 *  2 - Stocker l'index correspondant à la première slide (index = 0)
 *  3 - Installer un gestionnaire d'événements sur les liens de navigation (prev, next) permettant au click d'éxécuter les fonctions :
 *      onClickNext() : index++
 *      onClickPrev() : index--
 *      
 *      Le slider est circulaire : si l'index ne correspond pas à un indice existant, il sera redéfini afin de repartir du début (si on avance) ou de la fin (si on recule)  
 * 
 *  4 - Les fonctions respectives doivent exécuter une fonction changeSlide() permettant de modifier la classe is-active appliquée au slide visible : 
 *      -> masquer le slide affiché (supprimer la classe is-active)
 *      -> rendre visible le slide correpondant à l'index en cours (ajouter le classe is-active) 
 *     
 */


/**
 * onClickNext()
 * Ecouteur d'évenement 
 * Permet d'avancer d'1 slide
*/


// Stocker l'index de la figure visible (au départ , -> 0 ) 

let index = 0;

function onClickNext() {
    console.log(this);
    index++;
    if (index ===slides.length) {
        index = 0;
    }

    changeSlide();
}


/**
 * onClickPrev()
 * Ecouteur d'évenement
 * Permet de reculer d'1 slide
*/
function onClickPrev() {
    console.log(this); 
    
    if (index !== 0) {
        index--;
    } else {
         index++
    }


    changeSlide();
}

/**
 * changeSlide()
 * Permet de faire bonne figure
*/
function changeSlide() {
    document.querySelector('.slider .is-active').classList.remove('is-active');
    slides[index].classList.add('is-active');
}





// Récupérer un tableau des figures 
let slides;
slides = document.querySelectorAll('.slider>figure')
console.log(slides);

// for (let i = 0; i<slides.length;i++) {

// for (let slide of slides) {
//     slide.classList.add('is-active');

// Installer un gestionnaire d'évènement sur chaque lien 
let next = document.querySelector('.slider-nav a[rel="next"]')
let prev = document.querySelector('.slider-nav a[rel="prev"]')

next.addEventListener('click', function() {
    onClickNext();

});

prev.addEventListener('click', function() {
    onClickPrev();
})