import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';
// operadormerge obsoleto, recordar que está es una función


const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge( 
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
    )

.subscribe( console.log);

/**
 *
 ==========================================================================================================================
   Notas :  
   - 

=============================================================================================================================
**/
