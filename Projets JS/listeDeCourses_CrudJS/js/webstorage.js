'use strict';

// Nom de l'item dans le localStorage
const ITEMSTORAGE = 'Liste de courses';

/**
 * getLocalStorage
 * Récupére la liste de courses du webstorage
 * 
 * @return {array} 
 */
function getLocalStorage() {

    let listJS  = [];

    let listJSON = window.localStorage.getItem(ITEMSTORAGE);

    //Si l'item existe 
    if( listJSON !== null ) {
        listJS = JSON.parse(listJSON);
    }

    return listJS;
}

/**
 * saveLocalStorage
 * Sauvegarder la liste de courses
 * 
 * @param {array} : Liste de courses
 */
function saveLocalStorage(list) {

    let listJSON = JSON.stringify(list);
    window.localStorage.setItem(ITEMSTORAGE,listJSON);

}

/**
 * clearLocalStorageItem
 * Supprimer la liste de courses 
 */

function clearLocalStorageItem() {
    // Afficher un confirmation
    if(window.confirm('Supprimer la liste ?')) {
        // Supprimer le stockage
        window.localStorage.removeItem(ITEMSTORAGE);
        // Mise à jour de l'affichage
        displayList();
    }
    // Sinon, on ne fait rien
}


/**
 * onClickAddProduct()
 * 
 * @return {array} Liste de courses 
 * 
 *  Enregistre un produit saisi 
 *  dans la liste de courses du webstorage 
 * 
 */
function onClickAddProduct() {

    // ~~~ Récupérer une saisie : un objet ~~~ // 
    let product; 

    let fieldProduct = document.getElementById('product');
    let fieldQuantity = document.getElementById('quantity');
    let fieldPackaging = document.querySelector('[name="packaging"]:checked');

    // Création d'un objet avec les valeurs saisies
    product = {
        product   : fieldProduct.value,
        quantity  : fieldQuantity.value,
        packaging : fieldPackaging.value
    };

    // Récupérer le tableau en js
    let listProducts = getLocalStorage();

    /**
     * Si le formulaire a chargé les données d'un produit existant 
     * voir la fonction onClickLoadProduct() 
     * Le déclencheur (this) contient un attribut data-id 
     * dont la valeur correspond à l'id du produit à modifier
     */
    if(this.dataset.id !== undefined ) {

        /**
         * Remplacer l'objet dans le tableau listProducts
         * dont l'index = this.dataset.id
         * par product -> nouvel objet qui contient les données saisies
         * 
         * On redéfinit tout simplement le ligne du tableau !
         **/ 

        listProducts[this.dataset.id] = product;

        // Rétablir le bouton pour l'ajout d'un produit


    } else {
        //Ajouter le produit dans le tableau 
        listProducts.push(product);
    }
    
    // Sauvegarder le nouveau tableau dans le storage 
    saveLocalStorage(listProducts);

    // Ré-initialiser le formulaire (effacer les saisies) en cliquant sur le bouton reset du formulaire
    document.getElementById('reset-product').click();

    // Mise à jour de la vue
    displayList();
}

/**
 * onClickDeleteProduct
 * Supprimer un produit de la liste
 */
function onClickDeleteProduct() {

    if(window.confirm('Supprimer le produit de la liste ?')) {
        //console.log(this);
        let id = this.dataset.id;  

        // Charger la liste
        let listProducts = getLocalStorage();

        //Supprimer 1 ligne dans le tableau à partir de l'index : id
        listProducts.splice(id,1);

        //Enregister la liste
        saveLocalStorage(listProducts);

        //Mise à jour de la vue 
        displayList();
    }
}

/**
 * onClickLoadProduct 
 * Charger les données d'un produit dans le formulaire
 * @returns 
 */

function onClickLoadProduct() {

    // Récupérer l'id du produit à modifier
    let id = this.dataset.id;

    // Récupérer la liste dans le storage
    let listProducts = getLocalStorage();

    // Récupérer le produit
    let product=listProducts[id];

    // ~~~ Charger les données dans le form ~~ //   

    let fieldProduct = document.getElementById('product');
    let fieldQuantity = document.getElementById('quantity');
    
    // La valeur des champs de saisie = la propriété correspondante 
    fieldProduct.value = product.product;
    fieldQuantity.value = product.quantity;


    //  Appliquer l'attribut checked sur le bouton radio correspondant  //

    /**
     * Dans un première étape, nous avions cibler le bouton radio en fonction de la valeur
     * Afin de modifier l'attribut checked
     * 
     * Mais nous rencontrions un problème en cas de clicks successifs : 
     * l'attribut checked n'était pas mise à jour correctement sur tous les champs 
     */
    // 
    // let fieldPackaging = document.querySelector('[name="packaging"][value="' + product.packaging + '"]');
    // fieldPackaging.toggleAttribute('checked'); // Problème si on clique à nouveau
    // fieldPackaging.setAttribute('checked','on'); // Problème si on clique sur un autre bouton modifier

    /**
     * Correctif :
     * 
     * Cibler tous les radios du packaging 
     * Suprimer checked sur tous
     * Appliquer checked sur celui dont la valeur correspond au produit
     * 
     */
    let fieldsPackaging = document.querySelectorAll('[name="packaging"]');

    for(let field of fieldsPackaging) {
        field.removeAttribute('checked');
        if(field.value == product.packaging ) {
            field.setAttribute('checked','on');
        }
    }

    /**
     * La validation du formulaire lancera toujours la fonction addProduct
     * Il faut donc modifier la fonction addProduct() : 
     *  soit, il s'agit d'un ajout
     *  soit, il s'agit d'un modification
     * 
     * On fait porter cette information par le bouton de validation du formulaire
     * Si il s'agit d'une modification, le bouton contient data-id
     */

    // Cibler le bouton de validation du formulaire
    let btnValidForm = document.getElementById('add-product');

    btnValidForm.dataset.id  = id;

    // Au passage, pour améliorer l'intrface
    btnValidForm.textContent = 'Modifier ce produit';

}


/**
 * displayList
 * 
 * Afficher la liste dans le document html 
 * sous forme de liste numérotée 
 */

function displayList() {

    let listProducts = getLocalStorage();
    let container = document.getElementById('list');
    
    if( listProducts.length === 0) {
        container.innerHTML = '<p>La liste est vide</p>';
        container.nextElementSibling.style.visibility='hidden';
        return;
    }

    container.nextElementSibling.style.visibility='visible';

    let ol = document.createElement('ol');
    ol.classList.add('list-product');

    listProducts.forEach( function(product,index) {
    
        let li = document.createElement('li');
        li.classList.add('list-product-item');

        // Infos du produit dans un element html span pour la mise en forme
        let span = document.createElement('span');
        for(let property in product) {
            span.textContent += product[property] + ' ';
        }
        li.append(span);
        
        // Bouton Modifier
        let btnEdit = document.createElement('button');
        btnEdit.type='button';
        btnEdit.dataset.id = index;
        btnEdit.classList.add('btn-edit');
        btnEdit.textContent = 'Modifier';
        btnEdit.addEventListener('click',onClickLoadProduct);
        li.append(btnEdit);

        // Bouton suppression
        let btnDelete = document.createElement('button');
        btnDelete.type='button';
        btnDelete.dataset.id = index;
        btnDelete.classList.add('btn-delete');
        btnDelete.textContent = 'Supprimer';
        btnDelete.addEventListener('click',onClickDeleteProduct);
        li.append(btnDelete);


        ol.append(li);
    });

    // Vider la liste précédente
    container.innerHTML = '';
    container.append(ol);

}


// ====================================================== //
// ============= CODE EXECTUTE AU CHARGEMENT ============ //
// ====================================================== //


document.addEventListener('DOMContentLoaded', function() {
 
    // ~~~~~~ Gestionnaires d'événements ~~~~~ //

    // Traitement du formulaire
    let btnAddProduct = document.getElementById('add-product');
    btnAddProduct.addEventListener('click',onClickAddProduct);  

    // Supprimer la liste du webStorage
    let btnClearList = document.getElementById('clear-list'); 
    btnClearList.addEventListener('click',clearLocalStorageItem);

    // Ajout de dernière minute : Si on clique sur reset  
    document.getElementById('reset-product').addEventListener('click',function() {

        // Réinitialiser les radios
        let fieldsPackaging = document.querySelectorAll('[name="packaging"]');
        for(let field of fieldsPackaging) {
            field.removeAttribute('checked');
        }
        fieldsPackaging[0].toggleAttribute('checked');

        // En modification
        if( btnAddProduct.dataset.id !== undefined ) {
            btnAddProduct.textContent='Ajouter un produit';
            btnAddProduct.removeAttribute('data-id');
        }
    });

    // ~~~~ Affichage de la liste en cours ~~~ //
    displayList();


});


