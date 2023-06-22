import styled from "styled-components"
import { ImagensContainer } from "../../Imagens"
import { Textos } from "../ObjetosReutilizaveis/Textos"
import { Titulo } from "../ObjetosReutilizaveis/Titulo"

const imagemPerdeu = 'https://64.media.tumblr.com/b3426b755d9ce47a6edec261a7ee0251/913dd2f4f38dcdbc-a1/s640x960/689f753873489e9c23ac1c585a6389a5a8e84c15.gif'

const PerdeuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 15px;
`

export const Perdeu = () => {
    return (
        <PerdeuContainer>
            <Titulo cor="white">
                Você perdeu!
            </Titulo>
            <Textos>
                Não sei se você está no caminho certo, por não perder tempo vendo tanto anime, ou se tá precisando assistir mais.
                <br />
                Minha recomendação se você nunca viu, é Noragami!
            </Textos>
            <ImagensContainer src={imagemPerdeu}></ImagensContainer>       
        </PerdeuContainer>
    )
}