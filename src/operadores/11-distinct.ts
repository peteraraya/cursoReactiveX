import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of<number | string >(1,'1',1,3,3,2,2,4,4,5,3,1,'1');


// ver el flujo de la info
numeros$
.pipe(
  distinct()
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
    nombre: 'X'
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
    nombre: 'Megaman'
  },
  {
    nombre: 'Zero'
  },
];


// Convertir arreglo en emisiones de un observable

from( personajes )
.pipe(
  distinct(p => p.nombre) // con esta linea tenemos  emisiones unicas
)
.subscribe( console.log);


/**
 *
 =====================================================================================================================
   Notas
    - distinct(): nos deja pasar solo los valores que no han sido previamente emitidos por mi observable
    - el ditinc deja pasar valores que no han sido previamente emitidos
    -  este operador utiliza el operado de equidad === 

    - Ojo en objetos : no son iguales, ya que tenemos que darle más información al distinc para comparar que ese objeto ya fue emitido previamente
    - enviando un predicado

==============================================================================================================================
**/
