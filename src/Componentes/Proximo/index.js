import styled from "styled-components";
import { Botao } from "../Botao";

const ProximoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: auto;
`
export const Proximo = ({valor, alterarNumero, onClickAction}) => {

    const executar = () => {
        return alterarNumero(), onClickAction();
    }

    return (
        <ProximoContainer>
            {valor && <Botao onClick={executar} > Proximo </Botao>}
        </ProximoContainer>
    )
}