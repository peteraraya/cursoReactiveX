import { ajax } from 'rxjs/ajax';
import { pipe } from 'rxjs';
import { startWith } from 'rxjs/operators';

// Refrencias
const loadingDiv = document.createElement('div');

loadingDiv.classList.add('loading');

loadingDiv.innerHTML = 'Cargando !!';

// Refrencias al body
const body = document.querySelector('body');


// Streams

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
      startWith(true)// esta cargando si
      ) 
    .subscribe( resp => {
      if ( resp === true) {
          body.append(loadingDiv); // cuando está cargando va a mostrar esto
      }else{
        document.querySelector('.loading').remove(); // elimino cualquier elemento que tenga una clase loading
      }
      console.log(resp);
    });


/**
 *
 ==========================================================================================================================
   Notas :  
   - 

=============================================================================================================================
**/
