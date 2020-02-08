import { Observable, Subscriber, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("siguiente [next] ", value),
  error: error => console.warn("error [obs]", error),
  complete: () => console.info("completado [obs]")
};

const intervalo$ = new Observable<number>(subscriber => {
  let contador = 0;
  // Crear un contador 1,2,3,4,5......
  const interval = setInterval(() => {
    // Cada segundo
    contador++;
    subscriber.next(contador);
    console.log(contador); // sigue emitiendo los valores
  }, 1000); // un segundo

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    // Establecemos el procedimiento cuando se realiza el unsubscribe()
    // limpiar interval
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

// Terminar observable en cadena
subs1.add(subs2).add(subs3);

// Se cancelará la subscripción a los 3 segundos
setTimeout(() => {
  subs1.unsubscribe();
  //const subs2 = intervalo$.subscribe( num => console.log('Num:', num));
  //   subs2.unsubscribe();
  //   subs3.unsubscribe();

  console.log("Completado timeout");
}, 6000); // 6 segundos

/**=========================================================================================================
 *  Notas
     - Cuando uno se subscribe crea una nueva instancia del observable
     - Se utiliza setInterval()
     - clearInterval(interval) : limpia cada uno de los subcribe()  para evitar la emisión de valores
     - Terminar observable en cadena
     - El complete() no es lo mismo que el unsubscribe()

=========================================================================================================**/
