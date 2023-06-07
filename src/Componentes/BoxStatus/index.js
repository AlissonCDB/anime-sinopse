import styled from "styled-components"

export const BoxStatus = ({ vidas, pontos }) => {

    const BoxStatusContainer = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 0 20px;
        width: 110px;

        border: 2px solid #FFF;
    `
    const BoxStatusItens = styled.li`
    `

    return (
        <BoxStatusContainer>

            <BoxStatusItens>Vidas: {vidas}</BoxStatusItens>
            <BoxStatusItens>Pontuação: {pontos}</BoxStatusItens>

        </BoxStatusContainer>
    )
}