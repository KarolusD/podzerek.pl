import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    /* @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,800&display=swap&subset=latin-ext'); */
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`

export default GlobalStyle
