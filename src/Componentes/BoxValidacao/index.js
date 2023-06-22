import styled from 'styled-components';
import { Botao } from "../ObjetosReutilizaveis/Botao";
import { ImagensContainer, Logo } from "../../Imagens";
import React, { useState, useEffect } from 'react';
import { Textos } from '../ObjetosReutilizaveis/Textos';
import { Pergunta } from '../Pergunta';
import { Input } from '../ObjetosReutilizaveis/Input';
import { BoxStatus } from '../BoxStatus';
import { getAnimes } from '../../Servicos/animes';


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
    width: 100%;

    @media screen and (min-width: 721px){
        grid-template-columns: ${props => props.grids || '1fr 1fr 1fr'};;
    }
`

export const BoxValidacao = ({ valor, onClickAction, numeroSecreto, setPontos, setVidas, vidas, pontos }) => {

    const [inputValue, setInputValue] = useState('');
    const [listaImagens, setListaImagens] = useState([])
    const [imagem, setImagem] = useState('');
    const [texto, setTexto] = useState('');
    const [opcoes, setOpcoes] = useState([])
    const [autoFocus, setAutoFocus] = useState(true);

    useEffect(() => {
        const fetchAnimes = async () =>{
            try{
                const animes = await getAnimes();
                const opcao = animes.map((anime) => anime.nome);
                const listaImagens = animes.map((anime) => anime.imagem);
                setOpcoes(opcao);
                setListaImagens(listaImagens);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAnimes();
    }, []);

    useEffect(() => {
        const alterarAutoFocus = () => {
            const tamanhoTela = window.innerWidth;
            if (tamanhoTela < 721) {
                setAutoFocus(false);
            } else {
                setAutoFocus(true);
            }
        }
        window.addEventListener('resize', alterarAutoFocus);
        alterarAutoFocus();
        return () => {
            window.removeEventListener('resize', alterarAutoFocus);
        };
    }, []);

    const ok = () => {
        if (inputValue.toLowerCase() === opcoes[numeroSecreto].toLowerCase()) {
            setInputValue('');
            setImagem(listaImagens[numeroSecreto]);
            setTexto('Você acertou a resposta é ' + opcoes[numeroSecreto]);
            onClickAction();
            setPontos(pontos + 1);
            return true;
        } else {

            setInputValue('');
            setImagem(listaImagens[numeroSecreto]);
            setTexto('Tá precisando assistir mais animes, a resposta era ' + opcoes[numeroSecreto]);
            onClickAction();
            setVidas(vidas - 1);
            return false;
        }
    }
    return (
        <BoxValidacaoContainer>
            {!valor && <Input
                type='text'
                placeholder='Escreva o nome o Anime!'
                autoComplete='off'
                list={'opcoes'}
                autoFocus={autoFocus}
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
            {valor && <ImagensContainer src={imagem} alt={imagem}/>}
            {valor && <Textos> {texto} </Textos>}
            <Pergunta numeroSecreto={numeroSecreto} />
        </BoxValidacaoContainer>
    )
}