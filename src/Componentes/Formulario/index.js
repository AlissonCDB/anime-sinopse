import { useState } from "react";
import styled from "styled-components";
import { Botao } from "../Botao";
import { BancoDeDados } from "../BancoDeDados";

export const Formulario = () => {
    const [nomeAnime, setNomeAnime] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [linkImagem, setLinkImagem] = useState("");
    const [bancoDados, setBancoDados] = useState(BancoDeDados);

    const FormularioContainer = styled.div`
    margin-top: 150px;
  `;

    const adicionarAnime = () => {
        const novoAnime = {
            nome: nomeAnime,
            sinopse: sinopse,
            imagem: linkImagem,
        };
        setBancoDados([...bancoDados, novoAnime]);
    };

    return (
        <FormularioContainer>
            <input
                placeholder="Adicione o nome do Anime"
                value={nomeAnime}
                onChange={(e) => setNomeAnime(e.target.value)}
            />
            <input
                placeholder="Adicione a sinopse"
                value={sinopse}
                onChange={(e) => setSinopse(e.target.value)}
            />
            <input
                placeholder="Adicione o link da imagem"
                value={linkImagem}
                onChange={(e) => setLinkImagem(e.target.value)}
            />
            <Botao onClick={adicionarAnime}>Adicionar anime</Botao>
        </FormularioContainer>
    );
};
