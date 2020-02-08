import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


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
  distinctUntilKeyChanged('nombre' ) // 
)
.subscribe( console.log);


/**
 *
 =====================================================================================================================
   Notas
    - distinctUntilKeyChanged('k'): va estar pendiente de una propiedad en espesifico

    - {k:1} {k:2} {k:2} {k:1} {k:3}
    - {k:1} {k:2}   x   {k:1} {k:3}

  - debemos definir las propiedades de la forma forma como lo hicimos en nuestra interfaz



==============================================================================================================================
**/
