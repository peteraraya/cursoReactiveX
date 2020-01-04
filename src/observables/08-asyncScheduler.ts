import { asyncScheduler } from "rxjs";

// En js se utiliza
// setTimeOut(() => {}, 3000)
// setTimeInterval(() => {}, 3000)

const saludar = () => console.log("Hola Mundo");
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// 1er: argumento : es la función que queremos ejecutar
// 2do: es la cantidad de tiempo que queremos ejecutar
// 3er: argumento es el state : el estado

// Referencias
// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Peter');

// no puede utilizar una función de flecha en este caso
const subs = asyncScheduler.schedule(
  function(state) {
    console.log("state", state);

    // convertirlo a un interval
    this.schedule(state + 1, 1000); // envio state que queremos que se repita y el delay del tiempo que queremos que se ejecute
  },
  3000,
  0
);
// 0 es el state tiene que ser un argumento, este caso es el state inicial

// Cancelar suscripción

// 1er forma
// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

// 2da Forma
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

/**
 * 
 =====================================================================================================================
   Notas 
    -  Un asyncScheulder no crea un observable sino que crea una suscripción (ES ASÍNCRONO)
    -  Una suscripción es un producto de un subscribe es decir el punto de suscribe de un obs
    - Con asyncScheulder podemos manejar nuestra suscripción como cualquier otra suscripción en rxjs
==============================================================================================================================
**/
