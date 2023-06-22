import styled from 'styled-components';
import { Titulo } from '../ObjetosReutilizaveis/Titulo';
import { Textos } from '../ObjetosReutilizaveis/Textos';
import { getAnimes } from '../../Servicos/animes';
import { useEffect } from 'react';
import { useState } from 'react';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 30px 0;

  p{
    margin: 0;
  }
`

export const Header = ({ mostrar }) => {
    const [numeroDeAnimesAtuais, setNumeroAtuaisDeAnimes] = useState([])

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const animes = await getAnimes();
                const totalAnimes = animes.length;
                setNumeroAtuaisDeAnimes(totalAnimes);
            } catch (error) {
                console.log(error)
            }
        };

        fetchAnimes();
    }, []);

    return (
        <HeaderContainer>
            <Titulo
                tamanhoFonte={'24px'}
                cor={'white'}
            >
                Acerte o anime apenas pela Sinopse
            </Titulo>
            {!mostrar && <Textos>
                Tente adivinhar qual anime é apenas pela sinopse, que tera palavras chaver ocultadas, sera que você realmente conhece os animes?
                <br />
                Atualmente tem {numeroDeAnimesAtuais} animes, tente acertar o maximo que conseguir até perder as 3 vidas!
            </Textos>}
        </HeaderContainer>
    )
}