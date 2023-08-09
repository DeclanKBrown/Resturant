import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'

//Header
export default function header() {
    const content = document.querySelector('.content'); //Main DIV
    
    const header = document.createElement('header'); 
    
    const hTop = document.createElement('div');
    hTop.classList.add('h-top');
    
    const title = document.createElement('h1');
    title.innerHTML = 'Pub Feed';
    
    const hBottom = document.createElement('div')
    hBottom.classList.add('h-bottom');
    
    const homeTab = document.createElement('h2');
    homeTab.classList.add('h-sel')
    homeTab.id = 'home';
    homeTab.innerHTML = 'HOME'
    
    const menuTab = document.createElement('h2')
    menuTab.classList.add('h-sel')
    menuTab.id = 'menu';
    menuTab.innerHTML = 'MENU'
    
    const contactTab = document.createElement('h2')
    contactTab.classList.add('h-sel')
    contactTab.id = 'contact';
    contactTab.innerHTML = 'CONTACT'
    
    //Apend
    content.appendChild(header);
    header.appendChild(hTop)
    hTop.appendChild(title)
    header.appendChild(hBottom)
    hBottom.appendChild(homeTab);
    hBottom.appendChild(menuTab);
    hBottom.appendChild(contactTab);

    //Event Listeners
    homeTab.addEventListener('click', () => {
        remove()
        home()
    });
    menuTab.addEventListener('click', () => {
        remove()
        menu()
    });
    contactTab.addEventListener('click', () => {
        remove()
        contact()
    });
}

//Remove function 
function remove() {
    const content = document.querySelector('.content');
    const pageContent = document.querySelector('.inner');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}