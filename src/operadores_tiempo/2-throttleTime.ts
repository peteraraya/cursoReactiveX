import { fromEvent, asyncScheduler } from 'rxjs';
import { debounceTime, map, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';




// observable
const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(3000)
)
  // .subscribe(console.log);

// ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

// Observable que este pendiente de ese input
const input$ = fromEvent(input, 'keyup');

// Nos subscribimos
input$.pipe(
  throttleTime(400, asyncScheduler,{
    // recibe el primer elemento 
    leading:false,
    // recibe el ultimo elemento
    trailing:true
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
)
  .subscribe(console.log);








/**
 *
 =====================================================================================================================
   Notas : Operadores de tiempo
    - throttleTime() : es muy parecido al debounceTime pero funciona un poco diferente

    - a                                   b
    - a ---> empieza a contar un segundo  b

    - Ignora emisiones durante el tiempo establecido
    - es todo lo contrario al debounceTime

    - Sirve para controlar observable que emiten multiples peticiones frecuentemente
    - Configuración para mostrar el primero y el ultimo utilizando un scheduler
  - 
==============================================================================================================================
**/
