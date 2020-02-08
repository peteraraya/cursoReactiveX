import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener timmer';

document.querySelector('body').append(boton);


// Primer observable
const counter$ = interval(1000);

// Segundo observable
// const clickBtn$ = fromEvent( boton, 'click' );

const clickBtn$ = fromEvent(boton, 'click').pipe(
  tap( () => console.log('tap antes del skip')),
  skip(1),// doble clicks
  tap(() => console.log('tap despúes del skip'))
)

counter$
.pipe(
  takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next:',val),
    complete: () => console.log('complete')
  });


/**
 *
 =====================================================================================================================
   Notas
    -  takeUntil() : recibe como argumento otro observable
    -  se completa hasta que se ejecute el segundo observable
    -  sigue recibiendo los valores hasta que el segundo observable emita su primer valor


    -skip() : sirve para emitir cierta cantidad de emisiones oficiales
    - ejemplo de hacer que se cancele la emisión de valores haciendo dos clicks

    -encadenamiento de operadores

==============================================================================================================================
**/
