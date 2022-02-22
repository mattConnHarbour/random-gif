const getImage = (apiKey) => {
    return new Promise ((resolve, reject) => {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`)
        .then(resp => resolve(resp.data.data.images.original.url))
    })
}

export default getImage