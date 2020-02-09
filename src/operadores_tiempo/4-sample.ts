import { fromEvent, interval } from 'rxjs';
import { map, sampleTime, sample } from 'rxjs/operators';


// observables
const interval$ = interval(500);
const click$ = fromEvent(document, 'click');


interval$.pipe(
  sample(click$) // la unica fomra que se emita un valor es que este obserbable emita un valor
)
.subscribe(console.log);





/**
 *
 =====================================================================================================================
   Notas : Operadores de tiempo
    -  sample() : el cual emite el ultimo valor emitido por el observable hasta que el otro observable 
                  que tenemos dentro del operador sample emita un valor
    interval$  a      b   c

    click$         ev     ev   
    
                   a      c    ---> una vez se emite este valor vamos a recibir el ultimo valor emitido


          ¿ que pasa CUANDO se completan estos observables?

  
          - Obtengo la muestra de como está el observable en el momento que yo hago click
          
=========== ===================================================================================================================
**/
