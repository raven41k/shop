import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    background: blue
    margin: 0;
    font-family: 'Open Sans', sans-serif
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
        <Navbar/>
        <p>hello</p>
    </>
  );
}

export default App;
