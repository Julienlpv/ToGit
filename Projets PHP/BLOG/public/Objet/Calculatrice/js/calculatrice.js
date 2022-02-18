// CALCULATRICE EN JS

//Définition des constantes 


//Définition des variables 


let n1;
let op;
let n2;


n1 = parseInt( window.prompt('Saisissez un nombre'));
op = window.prompt('Saisissez une opération')
n2 = parseInt( window.prompt('Saisissez un nombre'));


/*if (n1 + n2) { 
    console.log(n1 + n2);
}

if (n1 - n2) {
    console.log(n1-n2);
}

if (n1*n2) {
    console.log(n1*n2);
}

if (n1/n2) {
    console.log(n1/n2)
}
*/

if (n1 / n2 && n2==0) {
    document.write('Opération impossible')
}

else


switch(op) {
    case 'addition':
    case '+':
       
          document.write(n1 + n2);

        break;

    case 'soustraction':
    case '-':
       
          document.write(n1-n2);

        break;

    case 'multiplication':
    case '*':
        
          document.write(n1*n2);
        
        break;

    case 'division': 
    case '/':
          document.write(n1/n2);

        break;

    default: 
          document.write('Mission impossible')

        break;

} 
