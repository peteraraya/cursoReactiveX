import { of , range, asyncScheduler } from "rxjs";


// const src$ = of (1,2,3,4);
    // se cuenta el 0 debido a que son emisiones
    //const src$ = range(-5,10); 
    //const src$ = range(5); // el valor por defecto del star es 0

    // Podemos transformar de sincrona a asincrona
    const src$ = range(1,5,asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Final');

/**
 =====================================================================================================================
   Notas
    - Es sincrono al igual que of pero a diferencia de este ultimo podemos utilizar rangos mas grandes
==============================================================================================================================
**/
