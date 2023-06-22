import styled from "styled-components"

const BoxStatusContainer = styled.ul`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
padding: 0 20px;
width: 110px;

border: 2px solid #FFF;
border-radius: 50px;
`
const BoxStatusItens = styled.li`
`

export const BoxStatus = ({ vidas, pontos }) => {

    return (
        <BoxStatusContainer>

            <BoxStatusItens>Vidas: {vidas}</BoxStatusItens>
            <BoxStatusItens>Pontuação: {pontos}</BoxStatusItens>

        </BoxStatusContainer>
    )
}