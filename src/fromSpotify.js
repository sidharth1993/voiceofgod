const albums = (token) => {
   return fetch('https://api.spotify.com/v1/artists/7qjJw7ZM2ekDSahLXPjIlN/albums?limit=10',{
        headers : {
            'Authorization': 'Bearer ' + token
        }
    }).then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.items;
      });
}

const getTracksFromAlbums = (albumid,token) => {
    return fetch(`https://api.spotify.com/v1/albums/${albumid}/tracks`,{
        headers : {
            'Authorization': 'Bearer ' + token
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data.items;
    })
}

const getTrack = (trackid,token) => {
    return fetch(`https://api.spotify.com/v1/tracks/${trackid}`,{
        headers : {
            'Authorization': 'Bearer ' + token
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    })
}

export {
    albums,
    getTracksFromAlbums,
    getTrack  
}