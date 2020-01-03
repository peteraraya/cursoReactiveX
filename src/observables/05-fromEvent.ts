import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

 const src1$ = fromEvent<MouseEvent>( document, 'click');
 const src2$ = fromEvent<KeyboardEvent>( document, 'keyup'); // cuando presionamos una tecla

 // Creación de Observer
const observer ={
    next: val => console.log('next',val)
};


// Subscribirse para utilizar
// src1$.subscribe( ev => {
//      console.log(ev.x);
//      console.log(ev.y);   
// });

src1$.subscribe( ({x,y}) => {
    console.log(x,y);  
})
src2$.subscribe( evento => {
    console.log(evento.key);
});


/**
 =====================================================================================================================
   Notas
    - Para utilizar las propiedades de loseventos se debe espesificar el tipo de evento 
    - Se puede utilizar <any> en caso de errores pero no es recomendado
==============================================================================================================================
**/
