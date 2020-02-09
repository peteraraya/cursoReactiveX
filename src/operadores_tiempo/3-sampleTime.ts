import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';


// Algo que este emitiendo valores
const click$ = fromEvent<MouseEvent>(document, 'click');

// Subscribimos

click$.pipe(
   sampleTime(2000), // información sale entre dos seggundos
  map( ({x,y}) => ({x,y})),
  //sampleTime(2000), // cada vez que hago click se está emitiendo al mapa
                        // ya se proceso el map
  
)
.subscribe(console.log);





/**
 *
 =====================================================================================================================
   Notas : Operadores de tiempo
    -  sampleTime() : nos permite obtner el ultimo valor emitido en un intervalo de tiempo
    -  cuando uno se subscribe va a empezar a emitir dependiendo a la cantidad de segundos que colocquemos como argumento

    - a b c a b   ctx
          c   b     x
  
          - Ojo en que posición va el sampleTime :  es más eficiento colocarlo arriba
          
=========== ===================================================================================================================
**/
