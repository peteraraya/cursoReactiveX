import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


// Helper

const peticionHttpLogin = (userPass) =>
  ajax.post('https://reqres.in/api/login?delay=1', userPass)
  .pipe(
    pluck('response','token'),// capturo solo el token 
    catchError( err => of('xxx'))
    )


// Creando HTML con js


// Formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');


// Configuraciones a estos campos

inputEmail.type  = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';


inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn .innerHTML = 'Ingresar';


// insertando html
form.append( inputEmail, inputPass, submitBtn );

document.querySelector('body').append(form);

//prevenir refresh
//Streams

const submitForm$ = fromEvent<Event>(form, 'submit')
                              .pipe(
                                tap( ev => ev.preventDefault() ), // no modifica el flujo
                                map( ev => ({
                                  email: ev.target[0].value,
                                  password: ev.target[1].value
                                })),
                                // mergeMap( peticionHttpLogin )
                                //switchMap(peticionHttpLogin)
                                exhaustMap(peticionHttpLogin)
                              );
  // necesitamos la subscripción                         
  submitForm$.subscribe(token =>{
    console.log(token);
  })




/**
 *
 ==========================================================================================================================
   Notas :  Ejercicio de comparación entre el mergeMap, switchMap y exhaustMap

   - Caso de uso real
   - siempre que manejemos un servicio que no controlemos es necesario manejar el 
   
   - el mergeMap    : emite todas las subcripciones
   - el swtichMap   : cancela cualquier otra subscripción pendiente y solo retorna la ultima
   - el exhaustMap  : emite solo la primera hasta que tenga la respuesta se dispara nuevamente

=============================================================================================================================
**/
