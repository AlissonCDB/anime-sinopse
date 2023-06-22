import { VenceuComPerfeicao } from "./VenceuComPerfeicao";
import { Venceu } from "./Venceu";
import { Perdeu } from "./Perdeu";
import { Botao } from "../ObjetosReutilizaveis/Botao"
import styled from "styled-components";

const ResultadosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 

    padding: 25px 0 15px 0;

    a{color: red}

    @media screen and (min-width: 720px){
        padding: 15px 0;
    }
`


export const Resultados = ({ setMostrar, setResultadoMostrar, resultadoErrado, resultadoCerto, resultadoPerfeito, setResultadoErrado, setResultadoCerto, setResultadoPerfeito }) => {

    function reiniciar() {
        setResultadoMostrar(false)
        setMostrar(false)
        setResultadoErrado(false)
        setResultadoCerto(false)
        setResultadoPerfeito(false)
    }

    return (
        <ResultadosContainer>

            {resultadoErrado && <Perdeu />}
            {resultadoCerto && <Venceu />}
            {resultadoPerfeito && <VenceuComPerfeicao />}

            <Botao onClick={reiniciar}> Jogar Novamente </Botao>

        </ResultadosContainer>
    )
}