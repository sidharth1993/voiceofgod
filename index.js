import './src/style.scss';
import Header from './src/header';
import Section from './src/section';

/* const header = document.createElement('script');
header.src = './src/header.js';
document.body.appendChild(header);  */

function defineCustomElements(){
    window.customElements.define('app-header',Header);
    window.customElements.define('app-section',Section);
}

function app(){
    defineCustomElements();
    const page = document.createElement('div');
    page.innerHTML = `
    <app-header></app-header>
    <div class="mar-t-5">
        <app-section></app-section>
    </div>
    `; 
    return page;
}

document.body.appendChild(app());