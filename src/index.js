import FirstLoad, { Home } from './home';
import head from './head';

head();
let content = FirstLoad();
document.body.appendChild(content);