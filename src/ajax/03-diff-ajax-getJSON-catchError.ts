
import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delays/1'; // api para realizar pruebas


const manejaError = ( resp:AjaxError ) => {
  console.warn('error:',resp.message );
  return of({
    ok:false,
    usuarios: []
  })
}

// Diferencias
const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);


// obs$.pipe(
//   catchError(manejaError)
// ).subscribe( data => console.log('getJSON:',data));


// obs2$.pipe(
//   catchError(manejaError)
// )
// .subscribe(data => console.log('ajax:', data));


// obs$.pipe(
//   catchError(manejaError)
// ).subscribe(data => console.log('getJSON:', data));
// obs2$.pipe(
//   catchError(manejaError)
// )
//   .subscribe(data => console.log('ajax:', data));


// Otra forma de manejar los errores
obs$.pipe(
  catchError(manejaError) // se dispara el next  y se completa el error utilizando el maneja error
)
.subscribe({
  next: val => console.log('next:', val),
  error: err => console.warn('error en subs:', err),
  complete: () => console.log('complete')
})


/**
 *
 ==========================================================================================================================
   Notas : Peticiones Ajax - getJSON()
    -  Podemos ver la data junto con los headers , configurandolo como segundo argumento
      ¿ Cual es la diferencia entre el getJSON y la petición normal?   



=============================================================================================================================
**/
