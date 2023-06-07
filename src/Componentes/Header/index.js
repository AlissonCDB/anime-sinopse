import styled from 'styled-components';
import { Titulo } from '../Titulo';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <Titulo
                tamanhoFonte={'24px'}
                cor={'white'}
            >Acerte o Anime apenas pela Sinopse</Titulo>
        </HeaderContainer>
    )
}