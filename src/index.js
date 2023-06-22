import React from 'react'
import { createRoot } from 'react-dom/client';
import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Rotas/Home'
import { Formulario } from './Rotas/Formulario'

const GlobalStyle = createGlobalStyle`
  html {  
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100%;

    background-image: linear-gradient(90deg, #326589 35%, #002F52 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    margin: 0;
  }
  div{
    width: 90vw;
  }
  li{ 
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`
const IndexContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 25px 0;
`

createRoot(document.getElementById('root')).render(
  <IndexContainer>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formulario' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  </IndexContainer>
);
