'use strict';

/**
 * Animations
 * Etape 6 
 *    
 */

// ====================================================== //
// ================= Variables Globales ================= //
// ====================================================== //

/*
    Les variables seront initialisées dans le code principal
    Mais elles doivent être dans la même portée que les fonctions
**/
let index;
let slides;
let pagination;

// ====================================================== //
// ====================== FONCTIONS ===================== //
// ====================================================== //

/**
 * onClickNext()
 * Ecouteur d'évenement 
 * Permet d'avancer d'1 slide
*/
function onClickNext() {

    let oldIndex = index;

    // La figure a faire apparaître correspond à l'index actuel + 1
    index++;

    // Revenir au début si on arrive à la fin du tableau
    if(index == slides.length) {
        index = 0; 
    }

    changeSlide('slideInLeft','slideOutRight',oldIndex);
        
}

/**
 * onClickPrev()
 * Ecouteur d'évenement
 * Permet de reculer d'1 slide
*/
function onClickPrev() {

    let oldIndex = index;

    // La figure a faire apparaître correspond à l'index actuel - 1
    index--;

    // Si on était arrivé au début, on repart de la fin
    if(index < 0 ) {
        index = slides.length - 1;
    }

    changeSlide('slideInRight','slideOutLeft',oldIndex);
}

/**
 * changeSlide()
 * Changer la classe des figures
 * 
*/
function changeSlide(animationIn,animationOut,oldIndex) {

    // L'animation dure 1000ms 
    slides[oldIndex].classList.add(animationOut);  

    // On attend 500ms avant de changer la classe de la slide à venir
    window.setTimeout(
        function() {       
            slides[index].classList.remove('is-hidden'); 
            slides[index].classList.add(animationIn);
            slides[oldIndex].classList.add('is-hidden');  
        },
        500
    );
    // On attend la fin (1000+500) pour virer toutes les classes d'animation
    window.setTimeout(
        function() {        
            slides[oldIndex].classList.remove(animationOut);   
            slides[index].classList.remove(animationIn);
        },
        1500
    );

    // En partant de la liste (retournée par la fonction makePagination)    
    pagination.querySelector('.is-active').classList.remove('is-active');
    pagination.childNodes[index].classList.add('is-active');

}

// ~~~~~~~~~ Créer une pagination ~~~~~~~~ //

/**
 * makePagination()
 * Créer les éléments de la pagination
 * @returns {Element} liste ol
 */
function makePagination() {
    
    let ol= document.createElement('ol');
    ol.classList.add('slider-pagination');
    // Créer autant de li que de slides
    for(let i=0; i < slides.length; i++) {
        let li;
        li = document.createElement('li');
        li.classList.add('slider-pagination-item');
        // Stocker l'index de la slide dans un attribut data-slide
        li.dataset.slide = i + 1; 
        // Afficher le numéro au survol en commençant à 1 (attention, il faut le prévoir sans onClickPagination )
        li.title = 'Slide N°' + (i + 1); 
        // Insérer la li dans la ol
        ol.append(li);
        // Installer un gestionaire d'événement sur la li
        li.addEventListener('click',onClickPagination);
    }
    // Ajouter la classe is-active au premier enfant de la ol
    ol.firstElementChild.classList.add('is-active');
    document.querySelector('.slider').append(ol);

    return ol;
}


function onClickPagination() {
    // Récupérer la valeur de l'attribut data-slide de la li cliquée
    let dataSlide;
    dataSlide = this.dataset.slide; 
    // Voir opérateur d'incrémentation
    index = --dataSlide; // si Bonus : la pagination commmence à 1
    console.log(index);
    changeSlide();
}

// ~~~~~~~~ Navigation au clavier ~~~~~~~~ //

function onKeyUp(event) {
    console.log(event.key);

    // Tester event.key pour les cas attendus 
    switch(event.key) {
        // Avancer si : flèche droite, Enter ou Espace
        case 'ArrowRight' :
        case ' ' : 
        case 'Enter' : 
            onClickNext();
        break;

        case 'ArrowLeft' :
            onClickPrev();
        break;
    }
}

// ~~~~~~~~~~~~~~ Diaporama ~~~~~~~~~~~~~~ //

/**
 * makeSlideShowButton
 * Insèrer le bouton pour actionner le diaporama
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 */
function makeSlideShowButton() {
    let button = document.createElement('button');
    button.classList.add('slider-button-diaporama');
    button.textContent = 'Play'; 

    // Stocker l'id de l'animation (pour éviter une variable globale) 
    button.dataset.animation = '';

    button.addEventListener('click',onClickButtonSlideShow);
    document.querySelector('.slider').append(button);
}


function onClickButtonSlideShow() {

    // Gérer une classe pour styler le bouton
    this.classList.toggle('is-play');
    if(this.dataset.animation.length > 0) {
        clearInterval(this.dataset.animation);
        this.dataset.animation = '';
        this.textContent = 'Play';
        return false;
    }
    this.dataset.animation = setInterval(onClickNext,2000);
    this.textContent = 'Stop';
} 

// ====================================================== //
// ======== CODE PRINCIPAL EXECUTÉ AU CHARGEMENT ======== //
// ====================================================== //

// Quand tout le DOM est chargé 
document.addEventListener('DOMContentLoaded', function() {

    index = 0;

    // Récupérer un tableau des figures 
    slides = document.querySelectorAll('.slider-figure');
    // Cacher les figures, sauf la première
    for( let i=1; i<slides.length;i++ ) {
        slides[i].classList.add('is-hidden');
    }

    //Installer un gestionnaire d'évenement sur chaque lien 
    let next = document.querySelector('.slider-nav [rel="next"]');   
    next.addEventListener('click', function(e){
        e.preventDefault();
        onClickNext();
    });
    let prev = document.querySelector('.slider-nav [rel="prev"]');
    prev.addEventListener('click', function(e) {
        e.preventDefault();
        onClickPrev();
    });

    // Créer la pagination et récupérer la référence à l'élément ol 
    pagination = makePagination();

    // Navigation au clavier : le gestionnaire est rattaché au document
    document.addEventListener('keyup', onKeyUp);

    // Diaporama
    makeSlideShowButton();

}); 