     'use strict'; 

    let random;

    random = Math.random();
    console.log(random); // me retourne 0.782623789 , je recharge la page , me retourne 0.11595526

    //console.log(Math.floor(5.95)); // Renvoie 5 car retourne le plus grand entier inférieur ou égal à la valeur passée en paramètre

    // Maintenant je dois déterminer des plages pour chacun de ces cas pour faire le pierre feuille ciseaux


    if (random < 0.34  ) {
        document.write('Vous avez choisi la Pierre')
    }

    else if (random < 0.67  ) {
        document.write('Vous avez choisi la Feuille')
    }

    else  {
        document.write('Vous avez choisi le Ciseau')
    }

    //console.log(math.floor(random));  Renvoie toujours 0 car random marche en 0 et 1..

    console.log(random*3);

    console.log( Math.floor (random*3) ); //  Cela renvoie un entier: 0 1 ou 2

    console.log( Math.floor (random*3+1) ); // donc on fait +1 et on a 1,2,3.