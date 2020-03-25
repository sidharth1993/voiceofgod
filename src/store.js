class Store{
    constructor(){
        this._albums = [];
    }
    set albums(albums){
        this._albums.push(albums);
    }
    get albums(){
        return this._albums;
    }
    
}

export default Store;