import { ImagensContainer, Logo } from "../../Imagens"
import { Botao } from "../ObjetosReutilizaveis/Botao"
import { useNavigate } from "react-router-dom";

export const Iniciar = ({setMostrar}) => {
    const navigate = useNavigate()

    function chamarMostrar() {
        setMostrar(true)
        navigate('')
    }

    return (
        <>
            <ImagensContainer src={Logo} />
            <Botao onClick={chamarMostrar}>Iniciar</Botao>
        </>
    )
}