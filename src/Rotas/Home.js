import styled from "styled-components";
import { Body } from "../Componentes/Body";
import { Header } from "../Componentes/Header";
import { Iniciar } from "../Componentes/Iniciar";
import { useState } from "react";
import { IconeCadeado } from "../Componentes/IconeCadeado";

import { Resultados } from "../Componentes/Resultados";

const HomeContainer = styled.div`
  color: white;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  border-radius: 25px;
  width: 100%;
  height: auto;
`
const PrimeiroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 

`
const UltimoContainer = styled.div``

export const Home = () => {
  const [mostrar, setMostrar] = useState(false)
  const [resultadoMostrar, setResultadoMostrar] = useState(false)
  const [resultadoErrado, setResultadoErrado] = useState(false)
  const [resultadoCerto, setResultadoCerto] = useState(false)
  const [resultadoPerfeito, setResultadoPerfeito] = useState(false)

  return (
    <HomeContainer>
      {!resultadoMostrar && <PrimeiroContainer>

        <Header mostrar={mostrar} />
        {mostrar &&
          <Body
            setResultadoMostrar={setResultadoMostrar}
            setResultadoPerfeito={setResultadoPerfeito}
            setResultadoCerto={setResultadoCerto}
            setResultadoErrado={setResultadoErrado}
          />}
        {!mostrar && <Iniciar setMostrar={setMostrar} />}
        {!mostrar && <IconeCadeado />}

      </PrimeiroContainer>}

      {resultadoMostrar && <UltimoContainer>

        <Resultados
          setMostrar={setMostrar}
          setResultadoMostrar={setResultadoMostrar}
          resultadoErrado={resultadoErrado}
          resultadoCerto={resultadoCerto}
          resultadoPerfeito={resultadoPerfeito}
          setResultadoPerfeito={setResultadoPerfeito}
          setResultadoCerto={setResultadoCerto}
          setResultadoErrado={setResultadoErrado}
        />

      </UltimoContainer>}

    </HomeContainer>
  )
}