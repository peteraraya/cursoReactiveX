import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


// observable
const click$ =  fromEvent<MouseEvent>( document, 'click');


// Extrayendo valores
click$.pipe(
  map( ({ x, y}) => ({x,y}) ),
  //takeWhile(({y}) => y <= 150)
  takeWhile(({ y }) => y <= 150,true) // con inclusive
)

.subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('complete')
});

/**
 * 
 =====================================================================================================================
   Notas 
    -  takeWhile() : permite recibir valores mientras la condición se cumpladia
    - el ultimo valor de la condición no se emite salvo ue se coloque un inclusive
    - el inclusive por defecto es falso, podemos dejarlo true para dejarlo true y muestre el ultimo valor

==============================================================================================================================
**/
