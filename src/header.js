const template =  `
<header>
    <div class="p-strip--dark is-shallow">
        <div class="row">
            <div class="col-12">
                <h2 class="heading">Voice of God</h2>
            </div>
        </div>
    </div>
</header>  
`;


export default class Header extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }
    connectedCallback(){
    }
}


