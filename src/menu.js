export default function menu() {
    
    const content = document.querySelector('.content'); //Main DIV

    const inner = document.createElement('div');
    inner.classList.add('inner');

    content.appendChild(inner);

}