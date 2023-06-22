import styled from "styled-components"
import { ImagensContainer } from "../../Imagens"
import { Textos } from "../ObjetosReutilizaveis/Textos"
import { Titulo } from "../ObjetosReutilizaveis/Titulo"
const linkSiteLinkedin = 'https://linkedin.com'
const linkImagemLinkedin = 'https://about.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/og-social-share-image.jpg'

const VenceuCP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 15px;
`

export const VenceuComPerfeicao = () => {
    return (
        <VenceuCP>
            <Titulo cor="white">
                Você venceu sem errar nenhum anime. Ser um otaku é pouco, está mais para desempregado!
            </Titulo>
            <Textos>
                Já que, se eu lhe recomendar um anime, você provavelmente já terá assistido!
                <br/>
                Vou lhe recomendar um site que pode mudar sua vida.
                <br/> 
                Esse é o <a href={linkSiteLinkedin}>Linkedin</a> bora trampar otaku vadio. 
            </Textos>
            <ImagensContainer src={linkImagemLinkedin}></ImagensContainer>
            <Textos>Não sei por que você quer jogar novamente, mas aqui está a opção!</Textos>
        </VenceuCP>
    )
}