import Mouse from './mouse.jpg';
import './style.css';
import breakDiv from './breakDiv';
import Header from './header';



export default function FirstLoad() {
  let contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'content');
  let header = Header();
  contentDiv.appendChild(header);

  contentDiv.appendChild(breakDiv);
  
  let main = document.createElement('main');
  let imperativeSentence = document.createElement('h2');
  imperativeSentence.innerText = 'Come and taste the dishes that appear on the movie!';
  let figure = document.createElement('figure');
  let img = document.createElement('img');
  img.setAttribute('src', Mouse);
  img.setAttribute('alt', 'Our brilliant chef working');
  let figcaption = document.createElement('figcaption');
  figcaption.innerText = 'Our brilliant chef working!';
  figure.appendChild(img);
  figure.appendChild(figcaption);
  main.appendChild(imperativeSentence);
  main.appendChild(figure);
  contentDiv.appendChild(main);
  return contentDiv;
}

export function Home() {
  let main = document.createElement('main');
  let imperativeSentence = document.createElement('h2');
  imperativeSentence.innerText = 'Come and taste the dishes that appear on the movie!';
  let figure = document.createElement('figure');
  let img = document.createElement('img');
  img.setAttribute('src', Mouse);
  img.setAttribute('alt', 'Our brilliant chef working');
  let figcaption = document.createElement('figcaption');
  figcaption.innerText = 'Our brilliant chef working!';
  figure.appendChild(img);
  figure.appendChild(figcaption);
  main.appendChild(imperativeSentence);
  main.appendChild(figure);
  return main;
}