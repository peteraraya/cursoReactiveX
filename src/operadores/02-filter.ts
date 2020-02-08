import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe(
//   // Solo muestra impares
//   filter( value => value % 2 === 1)

// ).subscribe( console.log );

/**===================================================================================================================== **/
range(20, 30).pipe(
  // Solo muestra impares
  filter<number>((val, i) => {
    console.log("index:", i);
    return val % 2 === 1;
  })
); //.subscribe( console.log );

/**===================================================================================================================== **/
// Definir una interfaz
interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman"
  },
  {
    tipo: "heroe",
    nombre: "Robin"
  },
  {
    tipo: "Villano",
    nombre: "Joker"
  }
];

const personajes$ = from(personajes)
  .pipe(filter(p => p.tipo === "heroe"))
  .subscribe(console.log);
/**===================================================================================================================== **/

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
  
  map( event => event.code), // recibe keyboardEvent y sale string
  filter( key => key === 'Enter') // recibe string y sale string

);


keyup$.subscribe( console.log);







/**
 * 
 =====================================================================================================================
   Notas 
    -  
==============================================================================================================================
**/
