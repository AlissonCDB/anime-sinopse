import styled from "styled-components";
import { useState } from "react";
import { Proximo } from "../Proximo"
import { GeradorDeNumero } from "../GeradorDeNumero";
import { BancoDeDados } from "../BancoDeDados";
import { BoxValidacao } from "../BoxValidacao";

const BodyContainer = styled.div`
    align-items: center;
    height: auto;
`
export const Body = () => {
    const [valor, setValor] = useState(false);
    const [numeroSecreto, setNumeroSecreto] = useState(GeradorDeNumero);
    const [numerosSelecionados, setNumerosSelecionados] = useState([GeradorDeNumero,]);
    var [vidas, setVidas] = useState(3);
    var [pontos, setPontos] = useState(0);

    const alterarNumero = () => {
        let novoNumero = parseInt(Math.random() * BancoDeDados.length);

        while (numerosSelecionados.includes(novoNumero)) {
            novoNumero = parseInt(Math.random() * BancoDeDados.length);
        }

        setNumerosSelecionados([...numerosSelecionados, novoNumero]);
        setNumeroSecreto(novoNumero);
        if (vidas === 0) {
            setNumerosSelecionados([])
            return alert("Você perdeu!"),
                setVidas(3),
                setPontos(0);
        };
        if (pontos === BancoDeDados.length) {
            setNumerosSelecionados([])
            return alert("Você venceu sem errar nenhum, Otaku é pouco, tá mais pra desempregado!"),
                setVidas(3),
                setPontos(0);
        };
        if (numerosSelecionados.length === BancoDeDados.length) {
            setNumerosSelecionados([])
            return alert("Você venceu!"),
                setVidas(3),
                setPontos(0);
        };
    }
    const onClickAction = () => {
        setValor(!valor);
    }

    console.log({ vidas, pontos });
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