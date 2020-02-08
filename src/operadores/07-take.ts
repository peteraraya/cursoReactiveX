import { of } from "rxjs";
import { take, tap } from "rxjs/operators";


const numeros$ = of(1,2,3,4,5,6);

numeros$.pipe(
  tap( t => console.log('tap ', t )),
  take(3)
)


.subscribe({
  next: val=> console.log('next', val),
  complete:()=> console.log('complete'),
})



/**
 * 
 =====================================================================================================================
   Notas 
    -  Se utiliza cuando queremos limitar la cantidad de emisiones que un obserbable puede tener
==============================================================================================================================
**/
