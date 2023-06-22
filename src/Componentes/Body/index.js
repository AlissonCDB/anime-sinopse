import styled from "styled-components";
import { useState } from "react";
import { Proximo } from "../Proximo"
import { GeradorDeNumero } from "../GeradorDeNumero";
import { BoxValidacao } from "../BoxValidacao";
import { getAnimes } from "../../Servicos/animes";

const BodyContainer = styled.div`
    flex-direction: column;
    align-items: center;
    height: auto;
`
export const Body = ({ setResultadoMostrar, setResultadoPerfeito, setResultadoCerto, setResultadoErrado }) => {
    const [valor, setValor] = useState(false);
    const [numeroSecreto, setNumeroSecreto] = useState(GeradorDeNumero);
    const [numerosSelecionados, setNumerosSelecionados] = useState([GeradorDeNumero,]);
    var [vidas, setVidas] = useState(3);
    var [pontos, setPontos] = useState(0);

    //Função que gera um novo numero aleatorio
    const alterarNumero = async () => {
        const listaAnimes = await getAnimes();
        let novoNumero = parseInt(Math.random() * listaAnimes.length);

        //Verifica se você perdeu
        if (vidas === 0) {
            setNumerosSelecionados([alterarNumero,])
            setResultadoMostrar(true)
            setResultadoErrado(true)
            setVidas(3)
            setPontos(0)
        } else {
            //Verifica se você venceu
            if (numerosSelecionados.length === listaAnimes.length) {
                //Verifica se você venceu sem errar nenhuma das respostas
                if (pontos === listaAnimes.length) {
                    setNumerosSelecionados([alterarNumero,])
                    setResultadoMostrar(true)
                    setResultadoPerfeito(true)
                    setVidas(3)
                    setPontos(0)
                } else {
                    setNumerosSelecionados([alterarNumero,])
                    setResultadoMostrar(true)
                    setResultadoCerto(true)
                    setVidas(3)
                    setPontos(0)
                }
            } else {
                //while confere se o numero já foi usado nessa rodada e gera um novo caso o numero já tenha sido usado
                while (numerosSelecionados.includes(novoNumero)) {
                    novoNumero = parseInt(Math.random() * listaAnimes.length);
                }

                setNumerosSelecionados([...numerosSelecionados, novoNumero]);
                setNumeroSecreto(novoNumero);
            }
        }
    }

    //Função que altera a variavel valor para definir o que é mostrado no Body
    const onClickAction = () => {
        setValor(!valor);
    }

    return (
        <BodyContainer>
            <BoxValidacao
                numeroSecreto={numeroSecreto}
                alterarNumero={alterarNumero}
                valor={valor}
                onClickAction={onClickAction}
                pontos={pontos}
                setPontos={setPontos}
                vidas={vidas}
                setVidas={setVidas}
            />
            <Proximo
                numeroSecreto={numeroSecreto}
                alterarNumero={alterarNumero}
                valor={valor}
                onClickAction={onClickAction}
            />
        </BodyContainer>
    )
}