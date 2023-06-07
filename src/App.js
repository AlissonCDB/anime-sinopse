import styled from "styled-components";
import { Body } from "./Componentes/Body";
import { Header } from "./Componentes/Header";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 

  color: white;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  border-radius: 25px;
  width: 100%;
  height: auto;
`

export const App = () => {
  return (
    <AppContainer>
      <Header />
      <Body />
    </AppContainer>
  )
}