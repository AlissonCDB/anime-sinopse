import styled from 'styled-components'

export const Botao = styled.button`
background-color: white-smoke;
color: #000;
font-size: 16px;
text-align: center;

width: ${props => props.largura || '154px'};
padding: ${props => props.padding || '12px 0'};
margin-bottom: ${props => props.marginbottom || '20px'};

border: 2px solid #FFF;
border-radius: 50px;

&:active {
    background-color:  rgb(0, 207, 243);
}
`