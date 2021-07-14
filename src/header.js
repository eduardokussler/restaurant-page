import Menu from './menu';
import AboutUs from './aboutUs';
import Contact from './contact';
import './header';
import breakDiv from './breakDiv';
import { Home } from './home'

function clearContent(node) {
  while(node.lastChild) {
    node.lastChild.remove();
  }
}


function createButton(placeToAppend, classList, name) {
  let newButton = document.createElement('button');
  newButton.classList.add(classList);
  newButton.innerText = name;
  newButton.addEventListener('click', (e) => {
    let contentDiv = document.querySelector('#content');
    let header = Header();
    if(e.target.innerText === 'Menu') {
      let content = Menu();
      clearContent(contentDiv);
      contentDiv.appendChild(header);
      contentDiv.appendChild(breakDiv);
      contentDiv.appendChild(content);
    } else if(e.target.innerText === 'About Us') {
      let content = AboutUs();
      clearContent(contentDiv);
      contentDiv.appendChild(header);
      contentDiv.appendChild(breakDiv);
      contentDiv.appendChild(content);
    } else if(e.target.innerText === 'Contact') {
      let content = Contact();
      clearContent(contentDiv);
      contentDiv.appendChild(header);
      contentDiv.appendChild(breakDiv);
      contentDiv.appendChild(content);
    } else if(e.target.innerText === 'Home') {
      let content = Home();
      clearContent(contentDiv);
      contentDiv.appendChild(header);
      contentDiv.appendChild(breakDiv);
      contentDiv.appendChild(content);
    }
  })
  placeToAppend.appendChild(newButton);
}



export default function Header() {
  let header = document.createElement('header');
  let restaurantName = document.createElement('h1');
  restaurantName.innerText = 'Gusteau';
  restaurantName.classList.add('name');
  let navbar = document.createElement('nav');
  let homeLi = document.createElement('li');
  createButton(homeLi, 'nav-button', 'Home');
  let menuLi = document.createElement('li');
  createButton(menuLi, 'nav-button', 'Menu');
  let contactLi = document.createElement('li');
  createButton(contactLi, 'nav-button', 'Contact');
  let aboutUsLi = document.createElement('li');
  createButton(aboutUsLi, 'nav-button', 'About Us');
  let ul = document.createElement('ul');
  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(contactLi);
  ul.appendChild(aboutUsLi);
  navbar.appendChild(ul);
  header.appendChild(restaurantName);
  header.appendChild(navbar);
  return header;
} 