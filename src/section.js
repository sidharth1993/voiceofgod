export default class Section extends HTMLElement{
    constructor(){
        let songs = [
            {name:"Maruvaarthai",genre:"Melody",movie:"ENPT"},
            {name:"Thaarame Thaarame",genre:"Melody",movie:"Kadaaram Kondaan"},
            {name:"Yean ennai pirindhai",genre:"Melody",movie:"Aditya Varma"}
        ];
        super();
        this.innerHTML = songs.map((song)=>{
            return `
            <div class="p-strip--light is-shallow">
                <div class="row u-vertically-center">
                    <div class="col-8">
                        <h3>${song.name}</h3>
                        <p>${song.movie} - ${song.genre}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }
}