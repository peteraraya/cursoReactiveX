import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';




// observable
const click$ = fromEvent(document, 'click');

click$.pipe(
   debounceTime(3000)
  )
  .subscribe( console.log );

// ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append( input );

// Observable que este pendiente de ese input
const input$ = fromEvent(input, 'keyup');

// Nos subscribimos
input$.pipe(
  debounceTime(1000),
  pluck( 'target', 'value' ),
  distinctUntilChanged()
)
.subscribe(console.log);






/**
 *
 =====================================================================================================================
   Notas : Operadores de tiempo
    - debounceTime() : nos ayuda a que nosotros podamos contar en milesimas de segundos de la ultima emisión
    - si el parametro sobrepasa el tiempo este emitira un valor
    - Nos ayuda a restringir la cantidad de emisiones que nuestro observable esta emitiendo


    - a        b c      d
    - (a)1seg   (c)1seg    

  - Es ideal para controlar observable que emiten una gran cantidad de mensajes 
==============================================================================================================================
**/
