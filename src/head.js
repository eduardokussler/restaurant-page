import Icon from './icon.jpg';

  export default function PageHead() {
    
    let title = document.createElement('title');
    title.innerText = 'Restaurant Page';
    let linkIcon = document.createElement('link');
    linkIcon.setAttribute('rel', 'shortcut icon');
    linkIcon.setAttribute('href', Icon);
    linkIcon.setAttribute('type', 'image/x-icon');
    document.head.appendChild(title);
    document.head.appendChild(linkIcon);
    
  }


