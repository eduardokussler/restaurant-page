import './style.css';


export default function Menu() {
  let main = document.createElement('main');
  let menuTitle = document.createElement('h2');
  menuTitle.innerText = 'See our specialities!';
  main.appendChild(menuTitle);
  return main;
}