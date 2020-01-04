import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador:number, valorActual:number) =>{
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer,0);
console.log('total arr',total);


interval( 500 ).pipe(
  take(6), // cantidad del acumulado queremos del acumulado
  tap(console.log), // depuramos para ver el flujo
  reduce( totalReducer) // el segundo argumento si se omite es 0
)
.subscribe({
  next: val => console.log('next',val),
  complete: () =>console.log('Complete')
});