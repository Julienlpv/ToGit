/**
 * Echantillon de tests : exercices
 * 
 * Fonction : getIndexInGroupByName() 
 * 
 * A partir d'une déclaration de variable index :
 * 
 * 1. Récupérer un index et l'afficher dans la console
 * 2. Faire un test if/else 
 *      Si index n'est pas défini 
 *          Afficher Nobody dans la console 
 *      Sinon
 *          Afficher index dans la console
 * 
 *      Nota : Affecter index directement dans le test
 * 
 * 3. A partir d'une boucle for/of sur group
 *      Afficher l'index de chaque ligne du tableau
 *          
 */


 for(let obj of group){
    console.log(group.indexOf(obj));
}

