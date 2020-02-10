import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const numeros$ = of(1,2,3).pipe(
  startWith('a','b','c'), //esto lo hace antes que se emita los numeros
  endWith('x','y','z')
);

numeros$.subscribe( console.log);

/**
 *
 ==========================================================================================================================
   Notas :  
   - el of por defecto es sincrono por ende el startWith y el endWith pueden ser sincronos también

=============================================================================================================================
**/
