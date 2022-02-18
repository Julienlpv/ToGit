   'use strict';

   let person; 

   //Création d'un objet
   person = {
       firstName : 'Huguette',
       year : 1941,
       children : ['Robert','Isabelle'],
       
    };

    console.log(person);
    console.log(person.firstName) // J'accède directement à la propriété firstName 

    // Grâce à l'objet que j'ai crée, l'éditeur de code me propose le nom firstName

    let g8;
    g8 = [

['Marianne', 1992, 'Y'],
['Mohammed', 1983, 'X'],
['Kamel', 1986, 'Y'],
['Gabin', 2001, 'Z'],
['Julien', 1992, 'Y'],
['Vincent', 1990, 'Y'],
['Selene', 1981, 'X'],
['Alice', 1995, 'Y'],
['Aurelien', 1988, 'Y'],
['Veronique', 1962, 'Boomer'],

]; 


// Correction 
let g8objects; 
g8objects = [];

/*g8objects = [
    {firstname:'Mariannne', year:1992, generation: 'Y'},
    {firstname:'Mohammed', year:1983, generation:'X'},
    {firstname:'Kamel', year:1986, generation:'Y'},
    {firstname:'Gabin', year:2001, generation:'Z'},
    {firstname:'Julien', year:1992, generation:'Y'},
    {firstname:'Vincent', year:1990, generation:'Y'},
    {firstname:'Selene', year:1981, generation:'X'},
    {firstname:'Alice', year:1995, generation:'Y'},
    {firstname:'Aurelien', year:1988, generation:'Y'},
    {firstname:'Veronique', year:1962, generation:'Boomer'}
]

console.log(g8objects)  */



for (let person of g8) {

    g8objects.push (
    {
        FirstName : person[0],
        year : person[1],
        children : [],
        generation: [],

    }   )
    
}



console.log(g8objects);



