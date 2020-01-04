import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
  tap( x => {
            console.log('antes: ',x);
            return 100; // no cambia el flujo de la info
          }),
          map( val => val * 10),
          // tap(x => console.log('despúes',x ))
          tap({
            next: valor => console.log('despúes:',valor),
            complete:() => console.log('Se termino todo')
          })

).subscribe( val => console.log('subs:', val))


/**
 * 
 =====================================================================================================================
   Notas 
    -  
==============================================================================================================================
**/
