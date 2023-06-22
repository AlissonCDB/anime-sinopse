import { useState } from "react";
import styled from "styled-components";
import { Botao } from "../ObjetosReutilizaveis/Botao";
import { Input } from "../ObjetosReutilizaveis/Input";
import { postAnimes } from "../../Servicos/animes";

const AdicionarAnimesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AdicionarAnimes = () => {
    const [nomeAnime, setNomeAnime] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [linkImagem, setLinkImagem] = useState("");

    function adicionarNovoAnime() {
        postAnimes(nomeAnime, sinopse, linkImagem)
            .then(data => {
                alert("Adição bem sucedida!")
                console.log(data);
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    alert(error.response.data);
                } 
                if (error.response && error.response.status === 422) {
                    alert(error.response.data);
                }
                if (error.response && error.response.status === 500) {
                    alert(error.response.data);
                }
            });
            setNomeAnime("");
            setSinopse("");
            setLinkImagem("");
    }

    return (
        <AdicionarAnimesContainer>
            <Input
                type="text"
                placeholder="Adicione o nome do Anime"
                value={nomeAnime}
                onChange={e => setNomeAnime(e.target.value)}
            />
            <Input
                placeholder="Adicione a sinopse"
                value={sinopse}
                onChange={e => setSinopse(e.target.value)}
            />
            <Input
                placeholder="Adicione o link da imagem"
                value={linkImagem}
                onChange={e => setLinkImagem(e.target.value)}
            />
            <Botao onClick={adicionarNovoAnime}>Adicionar anime</Botao>
        </AdicionarAnimesContainer>
    );
};
