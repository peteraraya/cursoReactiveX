import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';


const numeros$ = of<number | string >(1,'1',1,3,3,2,2,4,4,5,3,1,'1');


// ver el flujo de la info
numeros$
.pipe(
  distinctUntilChanged()
)
.subscribe( console.log);




// ejemplo con objetos
interface Personaje{
  nombre:string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'Zero'
  },
  {
    nombre: 'Dr. Wily'
  },
  {
    nombre: 'X'
  },
  {
    nombre: 'X'
  },
  {
    nombre: 'Zero'
  },
];


// Convertir arreglo en emisiones de un observable

from( personajes )
.pipe(
  distinctUntilChanged( (ant,act)=> ant.nombre === act.nombre ) // validación si son iguales lo bloqueo y si son diferentes lo dejo pasar
)
.subscribe( console.log);


/**
 *
 =====================================================================================================================
   Notas
    - distinctUntilChanged(): emite valores siempre cuando la emisión anterior no sea la misma, es similar al anterior

    - 1 2 2 1 1 2
    - 1 2 x 1 x 2

  - Ojo con los objetos porque apuntan a diferentes espacios de memoria
  - Cualquier cosa que no sea un valor primirtivo como enteros, string, booleanos se deben trabajar 
    el distinctUntilChanged con sus propiedades



==============================================================================================================================
**/
