
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1'; // api para realizar pruebas

// GET
ajax.get(url,{

})

// POST
ajax.post(url,{
  id:1,
  nombre:'Peter'
},{
  'mi-token': 'ABC123'
}).subscribe(console.log);

// PUT
ajax.put(url, {
  id: 1,
  nombre: 'Peter'
}, {
  'mi-token': 'ABC123'
}).subscribe(console.log);

// DELETE
ajax.delete(url, {

})


// Otra forma de llamar peticiones en caso que quedramos saber que tipo de petición es

ajax({
  // configuramos nuestro objeto
  // url:url,// esmascrip6 la propiedad y el nombre de variable se llaman igual podemos colocar solo el nombre de la propiedad
  url,
  method:'DELETE',
  headers:{
    'mi-token':'ABC123'
  },
  body:{
    id:1,
    nombre:'Peter'
  }
}).subscribe(console.log);





/**
 *
 ==========================================================================================================================
   Notas : Métodos Post,Put y Delete
           indispensables para una comunicación entre el front-end y el back-end

  GET:     envia url y headers
  POST:    envia url,body y headers
  PUT:     envia url,body y headers
  DELETE:  envia url y headers

=============================================================================================================================
**/
