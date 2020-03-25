import {getTracksFromAlbums,getTrack} from './fromSpotify';
import {player,deviceid} from './spotifyPlayer';

export default class Albums extends HTMLElement{
    constructor(){
        super();
        this.trackIds = [];
        this.token = this.getAttribute('token')
        let name = this.getAttribute('name');
        let tracks = this.getAttribute('tracks');
        let release = this.getAttribute('release').split('-');
        let imgUrl = this.getAttribute('img');
        this.id = this.getAttribute('id');
        this.getTrack = this.getTrack.bind(this);
 
        this.innerHTML = `
        <div class="album-card">
        <div class="p-card">
            <div class=" row">
                <div class="col-1">
                    <img src=${imgUrl} alt=${name.replace(/-/g,' ')} />
                </div>
                <div class="col-11">
                    <h3 class="p-card__title">${name.replace(/-/g,' ')} | ${release[1]}/${release[0]}</h3>
                    <hr class="u-sv1">
                    <p class="p-card__content">
                    <aside class="p-accordion" role="tablist" aria-multiselect="true">                   
                    <ul class="p-accordion__list">
                        <li class="p-accordion__group">
                            <button type="button" class="p-accordion__tab" id="tab${this.id}" role="tab" aria-controls="section${this.id}" aria-expanded="false">${tracks} tracks</button>
                            <section class="p-accordion__panel" id="section${this.id}" role="tabpanel" aria-hidden="true" aria-labelledby="section${this.id}"></section>
                        </li>
                    </ul>
                    </aside>
                    </p>
                </div>
            </div>
        </div>  
        </div>
            `;

        document.getElementById(`tab${this.id}`).addEventListener('click',() => {
            let btn = document.getElementById(`tab${this.id}`);
            let sectn = document.getElementById(`section${this.id}`);
            let current = btn.getAttribute('aria-expanded');
            if(current === "false" && !sectn.innerHTML){
                getTracksFromAlbums(this.id,this.token).then(tracks=>{
                    tracks.forEach(track=>{
                        let div = document.createElement('div');
                        div.id = `track${track.id}`;
                        div.classList = ["track"];
                        div.innerHTML = `${track.name}`;
                        div.onclick = ()=>{
                            this.getTrack(track.id);
                        }
                        sectn.appendChild(div);
                        this.trackIds.push(track.id);
                     });
                 });
            }
          
            if (current) {
                let toBool = (current === "false")?false:true;
                btn.setAttribute('aria-expanded', !toBool);
                sectn.setAttribute('aria-hidden', toBool);
            }
          });
          /* this.trackIds.forEach(id=>{
            document.getElementById(`track-${id}`).addEventListener('click',()=>this.getTrack(id));
          }); */
    
    }

    getTrack(id){
        getTrack(id,this.token).then(track=>{
            track;
            player._options.id;
            debugger;
            fetch(`https://api.spotify.com/v1/me/player/play?device_id=${player._options.id}`, {
                method: 'PUT',
                body: JSON.stringify({ uris: [track.uri] }),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.token}`
                },
              });
        })
    }

}
