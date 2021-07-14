import './style.css';


export default function Contact() {
  let main = document.createElement('main');
  let menuTitle = document.createElement('h2');
  menuTitle.innerText = 'Make your order NOW!';
  main.appendChild(menuTitle);
  let numberH3 = document.createElement('h3');
  numberH3.innerText = 'Whatsapp or Calls';
  main.appendChild(numberH3);
  let number = document.createElement('div');
  number.innerText = '55 51 5555-5555';
  main.appendChild(number);

  return main;
}