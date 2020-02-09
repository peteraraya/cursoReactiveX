
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url= 'https://api.github.com/users?per_page=5';

// Manejo de errores

const manejaErrores= (response: Response) =>{

  if (!response.ok) {
    throw new Error( response.statusText );
  }
  return response; // en caso de no tenen errores
}

const atrapaError = (err:AjaxError) => {
    console.warn('error en : ', err.message);
    return of([]); // retornar un objeto vacío

}

// Metodo FETCH
// const fetchPromesa = fetch(url);

// fetchPromesa
//  .then( resp => resp.json()) // en caso que se haga correctamente
//  .then( data => console.log('data:', data)) // para ller la información
//  .catch(err => console.warn('error en usuarios',err)) // en caso de error

// Cadena de promesas
// fetchPromesa
//   .then( manejaErrores)
//   .then(resp => resp.json()) // en caso que se haga correctamente
//   .then(data => console.log('data:', data)) // para ller la información
//   .catch(err => console.warn('error en usuarios', err)) // en caso de error

ajax( url ).pipe(
  // map( resp => resp.response)
  pluck('response'),
  catchError(atrapaError)
)
.subscribe(users => console.log('usuarios', users));

/**
 *
 ==========================================================================================================================
   Notas : Peticiones Ajax, aun tiene caracteristicas experimentales
    -  El ajax de rxjs : resuelve pero eñ fetch api aun no lo puede ver
    -  El fetch trabaja en base a promesas y no a string  de información
    -  Manejo de errores en fetch Api : tengo que evaluar si sucedio un error antes  de pasar al siguiente paso
    - esto añade un paso más de complejidad en mi cadena de promesas

    - Para que se dispare el catch debo disparar un throw en las promesas

    - Utilizacion de ajax rxjs



    - Operador CathErroor : sirve para atrapar cualquier error que sucesa en el observable
    
    - a b error  --> aqui podemos decidir que hacer , si retornar un mensaje de error o un observable inmediatamente 
               1 2 3  --> cuando este observable se completa se completa la subscripción
    - a b
          
=============================================================================================================================
**/
