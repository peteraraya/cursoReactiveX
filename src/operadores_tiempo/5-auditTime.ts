import { fromEvent, interval } from 'rxjs';
import { map, sampleTime, sample, auditTime, tap } from 'rxjs/operators';


// observables

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
  map( ({ x }) => x),
  tap( val => console.log('tap:',val)),
  auditTime(5000) 
)
.subscribe( console.log);





/**
 *
 =====================================================================================================================
   Notas : Operadores 
    -  auditTime() : emite el ultimo valor que ha sido emitido por el observable en un periodo de tiempo determinado

    abc --> comienza a emitir valores con el timpo del observable
      c  


      El objetivo principal de los operadores de tiempos 
      Es ayudarnos a controlar observabke que pueden estar emitiendo valores muy rapidos o mucho spam
      

          
=========== ===================================================================================================================
**/
