import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

const body = document.querySelector('body');


// helpers : nos sirve para colocar información en nuestro html
const mostrarUsuarios  = ( usuarios: GithubUser[]) => {

  console.log(usuarios);
  orderList.innerHTML = '';

  for( const usuario of usuarios){
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href= usuario.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';
    
    li.append( img );
    li.append( usuario.login + ' ');
    li.append( anchor );

    orderList.append(li);
    
  }
  
}


const textInput = document.createElement('input');
const orderList = document.createElement('ol');

// Añade al html

body.append( textInput, orderList);

// Streams

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


// set de operadores

input$.pipe(
  debounceTime<KeyboardEvent>(500), // recibe y emite el keyboardevent, aqui esta demas porque lo ideal en desarrollo es el principio y fin
  pluck<KeyboardEvent, string>( 'target','value'),
  map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON( // Se realiza la petición y es la que regresa el observable
    `https://api.github.com/search/users?q=${texto}`
   )),
   mergeAll<GithubUsersResp>(), // se va a subscribir y va emitir dichos valores
  pluck<GithubUsersResp, GithubUser[]>('items')
).subscribe( 
  mostrarUsuarios
  // users =>{
  // console.log(users[0].score)
  //}
);



/**
 *
 ==========================================================================================================================
   Notas :  tipando 
 
=============================================================================================================================
**/
