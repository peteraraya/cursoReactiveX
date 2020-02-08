import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');

// Ejercicio 
// click$.pipe(
//   tap( ()=> console.log('tap')),
//   first<MouseEvent>( event => event.clientY >= 150) // se completa el evento ( también se puede utilizar take(1))
// )

//Forma Larga
// click$.pipe(
//   tap<MouseEvent>(console.log),
//   map( event => ({
//        clientY: event.clientY,
//        ClientX: event.clientX

//   }))
// )

// Forma Corta
click$.pipe(
  tap<MouseEvent>(console.log),
  map( ({clientX, clientY}) => ({ clientY,clientX })),

  // Conectar el first
  first(event => event.clientY >= 150) 
)



.subscribe({
  next: val => console.log('next', val),
  complete: () => console.log('complete')
});

/**
 * 
 =====================================================================================================================
   Notas 
    -  Se completa al utilizar 
    - Cuando se coloca la condición no se emite ningun valor hasta que está se cumple
==============================================================================================================================
**/
