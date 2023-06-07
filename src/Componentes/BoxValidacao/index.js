import styled from 'styled-components';
import { Botao } from "../Botao";
import { ImagensContainer, Logo } from "../Imagens";
import { BancoDeDados } from '../BancoDeDados'
import React, { useState } from 'react';
import { Textos } from '../Textos';
import { Pergunta } from '../Pergunta';
import { Input } from '../Input';
import { BoxStatus } from '../BoxStatus';



const BoxValidacaoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const BoxPontuacao = styled.div`
    display: grid;
    grid-template-columns: ${props => props.grids || '1fr 1fr'};
    justify-items: center;
    align-items: center;
    height: 50px;
    margin-bottom: 15px;

    @media screen and (min-width: 721px){
        grid-template-columns: ${props => props.grids || '1fr 1fr 1fr'};;
    }
`

export const BoxValidacao = ({ valor, onClickAction, numeroSecreto, setPontos, setVidas, vidas, pontos }) => {

    const [inputValue, setInputValue] = useState('');
    const [imagem, setImagem] = useState('');
    const [texto, setTexto] = useState('');
    const opcoes = Object.values(BancoDeDados).map((nomes) => nomes.nome);
    const opcoesImg = Object.values(BancoDeDados).map((nomes) => nomes.imagem);


    const ok = () => {
        if (inputValue === opcoes[numeroSecreto]) {
            return console.log('Correto'),
                true,
                setInputValue(''),
                setImagem(opcoesImg[numeroSecreto]),
                setTexto('Você acertou a resposta é ' + opcoes[numeroSecreto]),
                onClickAction(),
                setPontos(pontos + 1);

        } else {
            return console.log('Errado'),
                false,
                setInputValue(''),
                setImagem(opcoesImg[numeroSecreto]),
                setTexto('Tá precisando assistir mais animes, a resposta era ' + opcoes[numeroSecreto]),
                onClickAction(),
                setVidas(vidas - 1);
        }
    }
    return (
        <BoxValidacaoContainer>
            {!valor && <Input
                type='text'
                placeholder='Escreva o nome o Anime!'
                autoComplete='off'
                list={'opcoes'}
                autoFocus='on'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />}
            <datalist id="opcoes">
                {opcoes.map((opcao) => (
                    <option key={opcao} value={opcao} />
                ))}
            </datalist>
            <BoxPontuacao grids={valor ? '1fr' : ''}>
                <BoxStatus vidas={vidas} pontos={pontos} />
                {!valor && <Botao onClick={ok} marginbottom="0px">Conferir Resposta!</Botao>}
            </BoxPontuacao>
            {!valor && <ImagensContainer src={Logo} />}
            {valor && <ImagensContainer src={imagem} />}
            {valor && <Textos> {texto} </Textos>}
            <Pergunta numeroSecreto={numeroSecreto} />
        </BoxValidacaoContainer>
    )
}