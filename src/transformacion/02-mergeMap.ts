import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';


const letras$ = of('a', 'b', 'c');


letras$.pipe(
  mergeMap((letra) => interval(1000).pipe(
    map( i => letra + i),
    take(3)
  )), // repite valores 3 veces
)
// comento para no mostrar info en la consola 
//.subscribe({
//   next: val => console.log('next: ',val),
//   complete: () => console.log('complete')
// });


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();


mousedown$.pipe(
  mergeMap( () => interval$.pipe(
    takeUntil( mouseup$)
  ))
)
.subscribe(console.log);

// Otro ejercicio: cuanto tiempo pasa el usuario presionando el teclado

/**
 *
 ==========================================================================================================================
   Notas :  mergeMap() : es otro operador de aplanamiento
 
=============================================================================================================================
**/
