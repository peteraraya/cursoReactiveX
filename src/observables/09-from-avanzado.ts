import { of, from } from "rxjs";


const observer ={
  next: val => console.log('next', val),
  complete: () => console.log('complete')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('Pedro');
// const source$ = of('Pedro');

 const source$ = from( fetch('https://api.github.com/users/klerith'));

 source$.subscribe( async(resp)=>{
  console.log(resp);

  const dataResp = await resp.json();

  console.log(dataResp.url);
});


const miGenerador = function*(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();

// for (let id of miIterable ) {
//   console.log(id);
// }

from( miIterable ).subscribe( observer ); // es más recomendado

// source$.subscribe( observer );

/**
 * 
 =====================================================================================================================
   Notas 
    -  of: toma argumentos y generá una secuencia de valores
    - from: crea un obs en base a un array , u objeto con estructura de arreglo, promise, iterable, observable
==============================================================================================================================
**/
