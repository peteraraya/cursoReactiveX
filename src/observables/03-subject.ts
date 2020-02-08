import { Observable, Subscriber, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log("siguiente [next] ", value),
  error: error => console.warn("error [obs]", error),
  complete: () => console.info("completado [obs]")
};


// Subject

const intervalo$ = new Observable<number>( subs => {
    // Esté emitiendo numeros random

    const intervalID = setInterval( () => subs.next(Math.random()),3000
    );


    return () =>{
        clearInterval(intervalID);
        console.log('Intervalo destruido'); // no se ha destruido ya que no se ejcuta hasta que se llame el unsiscribe del subject
    };
});

/* Caracteristicas 
*    1- Casteo multiple     : muchas suscripciones va estar sujestas a un 
*                             mismo observable y sirve para distribuir la misma info a todos 
*                             los lugares donde les interese esa suscripcion
*    2-También es un observer  
*    3-También se puede utilizar next, error y complete
*/


const subject$ = new Subject();

// Enlazar subject
const intervalSubject = intervalo$.subscribe(subject$);




// Nos creamos las subscripciones que serán las mimas gracias al subject
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout(()=>{
    // subject tiene los mismo metodos que un obs
    subject$.next(10);

    subject$.complete();

    intervalSubject.unsubscribe(); // aqui termina las suscricion del subject
},3500);


/**=========================================================================================================
 *  Notas
     - Cuando la data producida por el obs en sí mismo, es considerado como un "Cold Observable"
       Pero la data es producida fuera del observable es llamado "Hot Observable"
       En pocas palabras un subject nos permite a nosotros transformar un cold obs en un hot obs
     
=========================================================================================================**/
