import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() => {
  // Es una buena practica utilizar una función  autoinvocada

  const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

  const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());


  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
  // for (let nombre of nombres) {
  //   console.log(capitalizar(nombre))
  // }

  // Desarrollo del ejercicio

  // const nombres$ = of(nombres);

  // nombres$.pipe(
  //   map( (data:any) => data)
  // )
  // .subscribe(console.log);


from(nombres).pipe(
  map(nombre => capitalizar(nombre ))
)
.subscribe(console.log);

})();

