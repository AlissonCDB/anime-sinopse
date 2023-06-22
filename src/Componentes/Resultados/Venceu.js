import styled from "styled-components"
import { ImagensContainer } from "../../Imagens"
import { Textos } from "../ObjetosReutilizaveis/Textos"
import { Titulo } from "../ObjetosReutilizaveis/Titulo"

const imagemVenceu = 'https://i.pinimg.com/originals/b2/1a/18/b21a186beb29add8cfc1fe4188cc1841.gif'

const VenceuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 15px;
`

export const Venceu = () => {
    return (
        <VenceuContainer>
            <Titulo cor="white">
                Você venceu!
            </Titulo>
            <Textos>
                Para ter acertado quase todos, você é um otaku bem diversificado!
            </Textos>
            <ImagensContainer src={imagemVenceu}></ImagensContainer>
        </VenceuContainer>
    )
}