import styled from "styled-components";

export const Titulo = styled.h1`

    font-size: ${props => props.tamanhoFonte || '24px'};
    color: ${props => props.cor || '#000'};
    margin: 0;
`