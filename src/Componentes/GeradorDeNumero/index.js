import { getAnimes } from '../../Servicos/animes';

export let GeradorDeNumero;

const fetchAnimes = async () => {
    try {
        const animes = await getAnimes();
        return animes;
    } catch (error) {
        console.error(error);
    }
};

(async () => {
    const animesData = await fetchAnimes();
    GeradorDeNumero = parseInt(Math.random() * animesData.length);
})();

setTimeout(() => {
    console.log(GeradorDeNumero);
}, 1000);
