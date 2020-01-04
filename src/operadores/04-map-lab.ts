
import { map, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const texto = document.createElement('div');

texto.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan a eros et porttitor. Duis posuere dui felis, at porta nisl volutpat eu. Nunc velit nunc, pellentesque porttitor malesuada id, auctor porta augue. Etiam a dolor a nisi pharetra fermentum in vel metus. Nulla ac tempus sapien. Integer sodales ligula non ligula elementum ultrices. Phasellus tincidunt sit amet magna non gravida. Maecenas blandit varius metus at congue.
<br/><br/>
Fusce hendrerit dui eu augue aliquam imperdiet. Ut mattis sem tellus, quis porttitor risus elementum at. Proin mattis enim ac interdum convallis. In nibh mi, vestibulum nec leo ac, elementum convallis felis. Cras non laoreet magna. Nullam non justo nisl. Morbi eu augue tempor erat vehicula pharetra. Sed tristique sem accumsan purus bibendum, et elementum eros cursus.
<br/><br/>
Curabitur aliquam quam a lorem euismod, non convallis erat pretium. Praesent enim orci, sagittis quis varius eget, auctor quis lacus. Duis rutrum, augue quis tempus egestas, diam nibh iaculis turpis, consectetur tincidunt risus neque ut dolor. Sed suscipit volutpat viverra. In pulvinar eu lectus vitae dignissim. Ut facilisis sed neque sed vulputate. Nam non ullamcorper magna. Vivamus elit neque, facilisis vitae euismod a, scelerisque in purus. Proin volutpat pulvinar ultricies. In magna purus, interdum quis posuere id, mattis ac felis.
<br/><br/>
Morbi pharetra sollicitudin neque, quis ultrices est finibus in. Etiam id dolor id purus dignissim venenatis ac ac nisl. Cras eget sapien dapibus, viverra neque sit amet, suscipit dui. Morbi bibendum vel magna at pulvinar. Sed aliquet nunc et ex porttitor consequat. Praesent sed varius enim. Nunc vulputate enim eu urna aliquet, nec egestas tellus vestibulum. Curabitur at erat id orci facilisis gravida. Vivamus ut pulvinar ante. Proin non vestibulum dolor. Integer quis sapien sed ipsum laoreet sagittis. In hac habitasse platea dictumst. Duis non lacus vulputate, ullamcorper sapien vel, volutpat risus. Nullam et felis quis dolor blandit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec erat blandit, lacinia tortor ut, pulvinar augue. Morbi id massa et tortor auctor egestas. Donec ultricies sem orci, quis vehicula metus aliquam at. Ut luctus pellentesque bibendum. Nunc ut convallis ligula. Curabitur rutrum finibus ex, et porta lacus consequat eu. Vestibulum lacus eros, tempor non laoreet at, sagittis in lorem. In sollicitudin lorem sed urna molestie pharetra. Ut sapien massa, vehicula eget suscipit ac, placerat nec ante. Donec et lorem nisi. Fusce molestie risus eu dolor rhoncus, non sagittis erat tincidunt. Nullam id ipsum consequat, auctor erat quis, fermentum erat. Nam placerat, nibh et viverra convallis, tortor sapien lobortis felis, at dignissim purus arcu sit amet arcu.
`;

// Referencia al body

const body = document.querySelector('body');

body.append ( texto );


const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


// Función que haga el calculo 
const calcularPorcentajeScroll = (event) => {
  // console.log(event);
  // destructuración e6
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;

  return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100; 
}

// Streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );

// Procedimiento que me calcule el parcentaje
const progress = scroll$.pipe(
  // map( event => calcularPorcentajeScroll(event))
  map(calcularPorcentajeScroll),
  tap( console.log )

);




progress.subscribe( porcentaje =>{
  progressBar.style.width = `${porcentaje}%`;
});

/**
 * 
 =====================================================================================================================
   Notas 
    -  
==============================================================================================================================
**/
