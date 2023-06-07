import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {  
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background-image: linear-gradient(90deg, #326589 35%, #002F52 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;}
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
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
  width: 95%;
  margin: 25px 0;
`

ReactDOM.render(
  <IndexContainer>
    <GlobalStyle />
    <App />

  </IndexContainer>,
  document.getElementById('root')
);
