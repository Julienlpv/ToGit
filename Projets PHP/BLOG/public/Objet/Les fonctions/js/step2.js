    'use strict';

    /**
     * FONCTION EXPRESSION
     */

    // function déclarée

    // L'appel à la fonction peut se faire n'importe où
    showHello();

    // A partir du moment où la fonction est déclarée, elle est globale et remonte
    // au début

    function showHello() {
        console.log('Hello');
    }

    // Fonction d'expression

    //ShowCoucou(); // Plantage: showCoucou est déclarée après ! 
    let showCoucou = function() {
        console.log('Coucou');
    }; // On appelle cela une fonction anonyme
    // Ici,il faut mettre le ; derrière { car le block
    // Correspond à une affectation. 

    //L'appel de la fonction passe par celui de la variable + {}
    showCoucou();

    /**EFII: Expressions de fonction immédiatement invoquées
     * Fonction dite Anonyme qui s'exécute directement
     Avantage: protéger les variables (surtout avec var).*/

    (function(){
        var message = "Hello";
        alert(message); // Hello
    })();
    
    (function(){

        // Cette fonction est locale, ce n'est pas la même que la précédente
        let showCoucou1 = function () {
            console.log('Coucou')
        }; // il faut le point virgule car le bloc correspond à une affectation
    
        // L'appel de la fonction passe par celui de la variable + ()
        showCoucou1();
    }) ();
    

    
    /**
     * LES FONCTIONS CALLBACK
     * fonctions de rappel, c'est une fonction qui s'exécute une fois qu'un traitement est terminé. Elle est appelée par une autre fonction. 
     */

    let askQuestion = function (question,yes,no) {

        if (window.confirm(question)) {
            yes();
        } else {
            no();
        }
    }

    askQuestion(
        'Comment vas-tu?',
        // Fonction yes()
        function() {
            console.log('Super')
        },
        // Fonction no()
        function() {
            console.log('Oh noooon !')
        }
    );

    askQuestion(
        'Tu veux ou tu veux pas?',
        showHello(),
        showCoucou()
    );

    askQuestion(
        'Si tu veux tant mieux',
        showHello(),
        showCoucou()
    );
    askQuestion(
        'Si tu veux pas tempis',
        showHello(),
        showCoucou()
    );

    // Protéger des fonctions
    let name;
    let secretSanta = function () {
        
        function requestFirstNameInGroup() {
            console.log('Exécution de requestFirstNameInGroup')
        }

        function getIndexInGroupByName(name){
            console.log(' getIndexInGroupByName')
        }

        function showSecretSanta() {
            requestFirstNameInGroup();
        }

        showSecretSanta();
    }

    secretSanta();