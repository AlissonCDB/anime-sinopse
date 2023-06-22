import styled from "styled-components"
import { Link } from "react-router-dom";
import iconeCadeado from '../../Imagens/cadeado-icone-30.png';

const IconeCadeadoContainer = styled.img`
  width: 30px;
  position: fixed;
  bottom: 2vw;
  left: 46%;
  z-index: 2;

  @media screen and (min-width: 720px) {
    bottom: 1vw;
    left: 1vw;
  }
`

export const IconeCadeado = () =>{
    return(
        <Link to={'/formulario'}>
            <IconeCadeadoContainer src={iconeCadeado} />
        </Link>
    )
}