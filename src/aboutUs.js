

export default function AboutUs() {
  let main = document.createElement('main');
  let menuTitle = document.createElement('h2');
  menuTitle.innerText = 'Know a little more about us!';
  main.appendChild(menuTitle);
  let paragraph = document.createElement('p');
  paragraph.innerText = 'Gusteau was founded in 1975 by Auguste Gusteau and since 1980 is a 5 stars restaurant located in Paris, France.';
  paragraph.innerText += '\n After the terrible review by Anton Ego in 2007 and the death of Auguste, the restaurant is being run by Auguste\'s son, Linguini and his loyal kitchen partener Remy';
  paragraph.innerText += '\n Since the change in management, the restaurant is getting better every day and is now the first 6 stars restaurant in the world!'; 
  main.appendChild(paragraph);
  return main;
}