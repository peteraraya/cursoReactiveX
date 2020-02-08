
import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
  tap<MouseEvent>(() => console.log('tap')),
  // map( event => ({
  //     ClientY: event.clientY,
  //     clientX: event.clientX
  // }))
  // first<MouseEvent>( event => event.clientY >= 150 )

  map(({ clientX, clientY }) => ({ clientY, clientX })),
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
    -  first() : toma el primer valor y lo completa
    - También podemos utilizar una condición para terminar
    - utilización de predicado : es una función opcional
    - No se emite ningun valor hasta que se cumpla la condición del first
    - Destructuración en javascript.

==============================================================================================================================
**/
