import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: blue
  }
`

function App() {
  return (
    <>
    <GlobalStyle whiteColor />
      <p>hello</p>
    </>
  );
}

export default App;
