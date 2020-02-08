import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next: ',val),
    complete: ()=> console.log('complete')
}


const hoyEn5 = new Date(); // fecha ahora
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );


// ej interval
const interval$ = interval(1000); //le asignamos 1s

// ej timer
// const timer$ = timer(2000);

// Se ejecuta a la velocidad depediendo a la cantidad de callback que tenga js pendiente
// const timer$ = timer(0); es lo mismo que un const timer$ = timer()


// Inicie mi secuencia cada segundo en intervalo de tiempo de dos segundos
// const timer$ = timer(2000, 1000);


const timer$ = timer( hoyEn5); // 

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');



/**
 =====================================================================================================================
   Notas
    - Son asíncronos por naturaleza
    - 
==============================================================================================================================
**/
