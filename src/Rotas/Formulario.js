import styled from "styled-components";
import IconeVoltar from '../Imagens/voltar-icone-30.png'
import { AdicionarAnimes } from "../Componentes/FormularioComponentes/AdicionarAnimes"
import { Textos } from "../Componentes/ObjetosReutilizaveis/Textos"


import { useNavigate } from "react-router-dom";


const FormularioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;

    a {
        color: black;
    }
`
const BotaoVoltar = styled.img`
    position: fixed;
    top: 2vw;
    left: 47%;

    @media screen and (min-width: 720px){
        top: 2vw;
        left: 2vw;
    }
`
export const Formulario = () => {
    const navigate = useNavigate();
    function voltarPagina () {
        navigate(-1);
    }

    return (
        <FormularioContainer>
            
            <Textos>Essa opção está disponível apenas se o projeto estiver sendo executado localmente. Para mais informações, acesse o meu <a href="https://github.com/AlissonCDB/anime-sinopse">GitHub</a> e leia o README.md do projeto.</Textos> 
            <BotaoVoltar src={IconeVoltar} onClick={voltarPagina} />
            <AdicionarAnimes />
            
        </FormularioContainer>
    );
};
