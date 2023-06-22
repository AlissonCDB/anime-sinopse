import styled from "styled-components";
import IconeVoltar from '../Imagens/voltar-icone-30.png'
import { AdicionarAnimes } from "../Componentes/FormularioComponentes/AdicionarAnimes"
import { useNavigate } from "react-router-dom";


const FormularioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

            <BotaoVoltar src={IconeVoltar} onClick={voltarPagina} />
            <AdicionarAnimes />
            
        </FormularioContainer>
    );
};
