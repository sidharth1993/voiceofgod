import './src/style.scss';
import Header from './src/header';
import Section from './src/section';
import reader from './src/authreader';
import {spotifyPlayback} from './src/spotifyPlayer';

/* const header = document.createElement('script');
header.src = './src/header.js';
document.body.appendChild(header);  */

function initializeSpotifySDK(){
    let script = document.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    document.body.appendChild(script);

}

function defineCustomElements(){
    window.customElements.define('app-header',Header);
    window.customElements.define('app-section',Section);
}

function app(){
    defineCustomElements();
    let auth_token = reader(window.location);
    initializeSpotifySDK();
    spotifyPlayback(auth_token);
    const page = document.createElement('div');
    page.innerHTML = `
    <app-header></app-header>
    <div class="mar-t-5">
        <app-section token=${auth_token}></app-section>
    </div>
    `; 
    return page;
}

document.body.appendChild(app());

window.addEventListener("popstate",function(event){
    debugger;
    if(history.state){
        alert(history.state);
    }
});