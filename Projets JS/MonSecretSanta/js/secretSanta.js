'use strict';

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

let secretSanta = function () {

    /**
     * Renvoie l'index d'une personne dans le groupe par son prénom
     * 
     * @param {string} name 
     * @returns {number} indice de la ligne correspondante
     * @exemple
     *  checkNameInGroup('Kamel'); - Renvoi l'indice de la ligne correspondante à Kamel
     *  checkNameInGroup('tartempion'); - Renvoi undefined
    */
    function getIndexInGroupByName(name) {

        for (let i = 0; i < group.length; i++) {
            if (group[i].firstName.toLowerCase() === name.toLowerCase()) return i;
        }
    }

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
        } while (
            !(index = getIndexInGroupByName(firstName))
            && repeat <= 3
        );

        return index;
    }


    /**
     * Renvoyer un indice tiré au hasard dans group
     * index du bénéficiaire !== index de l'offreur
     */
    function requestBeneficiary(indexOfferor) {
        let indexBeneficiary;

        // Code
        if (indexOfferor != null) {
            let objOffreur = group[indexOfferor]; //je save l'index dans une nouvelle var pour pas le perdre

            group.splice(indexOfferor, 1); //jenleve l'offeror du groupe pour pas que offeror=beneficary

            indexBeneficiary = group[getRandomInteger(0, group.length - 1)];

            group.push(objOffreur); // je remet indexofferor dans le groupe tout à la fin cette fois donc l'index change
        } else {
            indexBeneficiary = group[getRandomInteger(0, group.length - 1)];
        }

        return indexBeneficiary;
    }


    /**
     * Afficher le résultat dans le document html 
     * Dans le cas ou un offrer et un bénéficiaire existe
     * Dans le cas ou seul un bénéficiaire existe
     */
    function showSecretSanta(indexOfferor, indexBeneficiary) {
        let offeror; // Prénom de l'offreur
        let beneficiary = indexBeneficiary.firstName; // Prénom du bénéficiaire
        console.log(group);
        // Affichage des messages
        //les 3 essais pour mettre un prénom du groupe ne donne rien (un  bug)
        if (indexOfferor === undefined) {
            offeror = group[getRandomInteger(0, group.length - 1)].firstName;
            document.write(`(: ${offeror} offre un cadeau à ${beneficiary} :)`)
        } else { // l'index du nom choisi est à la fin du tableau mtn donc je cherche selon le dernier objet du tableau
            offeror = group.at(-1).firstName;
            document.write(`(: ${offeror} offre un cadeau à ${beneficiary} :)`)
        }
    }

    let indexOfferor = requestFirstNameInGroup();
    let indexBeneficiary = requestBeneficiary(indexOfferor);


    // Exécuter les fonctions permettant de lancer showSecretSanta(indexOfferor,indexBeneficiary)
    showSecretSanta(indexOfferor, indexBeneficiary);

}; // Le point-virgule, car il s'agit d'une affectation variable = fonction

// code principal 
secretSanta();
