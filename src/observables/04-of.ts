import { of } from "rxjs";

const obs$ = of<number>(...[1,2,3,4,5,6],2,3,4,5);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, Promise.resolve(true));
// const obs$ = of<number>([1,2], {a:1, b:2}, function(){}, Promise.resolve(true));
console.log('Inicio del obs$ ');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    ()=> console.log('Terminamos la secuencia !!!')
);
console.log('Fin del obs$ ');

/**
 ===============================================================================================================
   Notas
    - Los argumentos 1,2,3,4,5,6 siempre deben ir separados por coma, ya que si se llama entre [] recibe uno solo
    - Es una buena practica dejar el tipo de dato que se va enviar
==============================================================================================================================
**/
