'use strict';     


    



// // Affecter une valeur à l'index directement dans le test: l'affectation
// // est entre ()
// if ( (index = getIndexInGroupByName('Vincent')) === undefined) {
//     console.log('Pas de personne');
// } else {
//     console.log(index);
// }





// /**
//  * Afficher le résultat dans le document HTML
//  */ 
//     function showSecretSanta() {

//         let offeror; // Prénom de l'offreur
//         let beneficiary; // Prénom du bénéficiaire

//         document.write(
//             `<p><b>${offeror}</b> a le plaisir d'offrir un cadeau à <b>${beneficiary}</b></p>`
//         )
//     }

//     let index
//     requestFirstNameInGroup();

//     showSecretSanta();

//     // Code principal

//     secretSanta


     

/** 
 * @module secretSanta 
 * @version 1.0
 * 
 * Tirage au hasard d'un bénéficiaire en fonction d'un prénom saisi.
 * Bénéficiaire et Offreur font partie du même groupe, fourni dans une collection de données (data.js)
 * Offreur et bénéficiaire ne peuvent être la même personne
 * 
 * Déroulement : 
 * Demander le nom de l'offreur par un prompt() : 3 tentatives pour trouver une personne correspondante dans le groupe
 * Tirer un bénéficiaire au hasard différent de l'offreur (toujours possible - voir nota)
 * Afficher qui offre un cadeau à qui ou une réponse alternative en l'absence d'offreur
 * 
 * Nota : 
 * Si le prénom saisi ne correspond pas à une personne du groupe
 * Un bénéficiaire est quand-même tiré et cité dans le message alternatif 
 */


let secretSanta = function() {

    /** 1-
     * Renvoie l'index d'une personne dans le groupe par son prénom
     * 
     * @param {string} name 
     * @returns {number} indice de la ligne correspondante
     * @exemple
     *  checkNameInGroup('Kamel'); - Renvoi l'indice de la ligne correspondante à Kamel
     *  checkNameInGroup('tartempion'); - Renvoi undefined
    */
    function getIndexInGroupByName(firstName) {
            for (let i=0; i < group.length ; i++) {
                if(firstName == group[i].firstName) {
                return i;
                }
            }
    }

    let index;
    index = getIndexInGroupByName();

    
    
    // Test requestFirstNameInGroup
    if( ( index = requestFirstNameInGroup() ) ) {
        // Afficher le prénom
        console.log(group[index].firstName);
    } else {
        document.write('Personne ne correspond');
    }

    let indexOfferor = group[index].firstName;
    

    /**
     * Demande à l'utilisateur de saisir un prénom appartenant à un membre du groupe
     * 3 tentatives possibles
     * 
     * @requires checkNameInGroup
     * @returns {number/null} - indice de la ligne correspondante
     */
    function requestFirstNameInGroup() {
        let firstName;
        let index = null;
        let repeat = 1;

        do {
            firstName = window.prompt('Saisir le prénom d\'un membre du groupe');
            repeat++;
        } while( 
            !( index = getIndexInGroupByName(firstName) ) 
            && repeat <= 3
        );
        
        return index;
        
    }        
    

    
    

    

   
    /**
     * Renvoyer un indice tiré au hasard dans group
     * index du bénéficiaire !== index de l'offreur
     */ /**
    * Renvoie un entier au hasard compris dans [min,max] 
    * 
    * @param {number} min
    * @param {number} max
    * @returns {number}
    */
    function getRandomInteger(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
 

    }

      


// INDICE BENEFICIAIRE 
    let indexBeneficiary = getRandomInteger(0,9);
    
  
    if (index == indexBeneficiary) {
        indexBeneficiary++;
    }
    




let beneficiary = group[indexBeneficiary].firstName;

let offeror = indexOfferor    



console.log(beneficiary);

    /**
     * Afficher le résultat dans le document html 
     * Dans le cas ou un offrer et un bénéficiaire existe
     * Dans le cas ou seul un bénéficiaire existe
     */
    function showSecretSanta(indexOfferor,indexBeneficiary) {

        
        document.write(
                      `<p><b>${offeror}</b> a le plaisir d'offrir un cadeau à <b>${beneficiary}</b></p>`
        )
        

        // Affichage des messages
    }

        
showSecretSanta();
    
    

    // Exécuter les fonctions permettant de lancer showSecretSanta(indexOfferor,indexBeneficiary)


}; // Le point-virgule, car il s'agit d'une affectation variable = fonction

// code principal


secretSanta();


// showSecretSanta();