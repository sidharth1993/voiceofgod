import {albums} from './fromSpotify';
import Albums from './albums';

export default class Section extends HTMLElement{
    constructor(){
        super();

        window.customElements.define('app-album',Albums);
        let token = this.getAttribute('token');
        albums(token).then(albums=>{
            albums.forEach(album => {
                this.innerHTML += `<app-album
                    name=${album.name.replace(/\s/g,'-')}
                    tracks=${album.total_tracks}
                    release=${album.release_date}
                    id=${album.id}
                    img=${album.images[2].url} 
                    token=${token}>
                     </app-album>`;
            });
      
        });

    }
}