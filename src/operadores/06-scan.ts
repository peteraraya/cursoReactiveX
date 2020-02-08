import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';


const numeros= [1,2,3,4,5];

// const totalAcumulador = ( acc:number, cur:number) =>{
//     return acc + cur;
// }

const totalAcumador = (acc,cur) => acc+ cur;

// reduce : muestra el total acumulado
from( numeros ).pipe(
  reduce(totalAcumador,0)
).subscribe(console.log);


// scan : emite cada uno de los valores
from( numeros ).pipe(
  scan(totalAcumador,0)
).subscribe(console.log);


// Redux : manejar el estado global de la app en un solo objeto
interface Usuario {
  id?: string,
  autenticado?: boolean,
  token?: string,
  edad?:number
}

const user : Usuario[]=[
  { id:'ped', autenticado:false, token:null },
  { id:'ped', autenticado:true, token:'ABC' },
  { id:'ped', autenticado:true, token:'ABC123' }
];

const state$ = from ( user ).pipe(
  // Mantener todas las modificaciones de mi estado
  scan<Usuario>( ( acc,cur) => {
    // destructuración
    return {...acc,...cur}
  },{edad:33})
);


const id$ = state$.pipe(
  map( state => state.id)
);

id$.subscribe(console.log);
