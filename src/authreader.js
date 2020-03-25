const reader = (url)=>{
    let params = url.hash.split('&');
    let access_token = params[0].split('=');
    return access_token[1]; 
}

export default reader;