import { Observable, Subscriber, Observer } from "rxjs";

// const obs$ = Observable.create();

// Tercera forma
const observer: Observer<any> = {
  next: value => console.log("siguiente [next] ", value),
  error: error => console.warn("error [obs]", error),
  complete: () => console.info("completado [obs]")
};

const obs$ = new Observable<string>(subs => {
  // Permitir realizar subscripciones
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // forzando error , y tiene que suceder antes del complete

  const a = undefined;
  a.nombre = "pedro";

  // finaliza
  subs.complete();

  // ya no funcionan despúes de un complete
  subs.next("Hola");
  subs.next("Mundo");
});

// Primera forma
// obs$.subscribe( resp => {
//     console.log(resp)
//     });

// Segunda Forma
// obs$.subscribe(
//     // Definir 3 callback (funciones)
//     valor => console.log('next', valor),
//     error => console.warn('error',error),
//     ()=> console.log('Completado')
// );

// Tercera forma
obs$.subscribe(observer);

/**=========================================================================================================
 *  Notas
     - No es conveniente dejar los observables de tipo unknow , siempre definir el tipo de observable
     - Luego de complete finaliza la subcrición, cualquier llamada posterior no se emitirá 

=========================================================================================================**/
