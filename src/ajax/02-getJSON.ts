
import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1'; // api para realizar pruebas

const obs$ = ajax.getJSON(url,{
  'Content-Type':'aplication/json',
  'mi-token':'ABC123'
});

obs$.subscribe( data => console.log('data:',data));



/**
 *
 ==========================================================================================================================
   Notas : Peticiones Ajax - getJSON()
    -  Podemos ver la data junto con los headers , configurandolo como segundo argumento
          
=============================================================================================================================
**/
