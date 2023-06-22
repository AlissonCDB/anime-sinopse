import axios from "axios"

const animesAPI = axios.create({baseURL: 'https://alissonbrittoapi.vercel.app'});

async function getAnimes() {
    const response = await animesAPI.get('/animes.json', )
    return response.data
}
async function postAnimes(nome, sinopse, imagem) {
    const response = await animesAPI.post('/', { nome, sinopse, imagem })
    return response.data
}
export {
    getAnimes,
    postAnimes
}

