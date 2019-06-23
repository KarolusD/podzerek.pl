import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* poppins-regular - latin_latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/poppins-v6-latin_latin-ext-regular.eot'); /* IE9 Compat Modes */
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('../fonts/poppins-v6-latin_latin-ext-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v6-latin_latin-ext-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v6-latin_latin-ext-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v6-latin_latin-ext-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v6-latin_latin-ext-regular.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-600 - latin_latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('../fonts/poppins-v6-latin_latin-ext-600.eot'); /* IE9 Compat Modes */
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('../fonts/poppins-v6-latin_latin-ext-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v6-latin_latin-ext-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v6-latin_latin-ext-600.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v6-latin_latin-ext-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v6-latin_latin-ext-600.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-800 - latin_latin-ext */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src: url('../fonts/poppins-v6-latin_latin-ext-800.eot'); /* IE9 Compat Modes */
    src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
        url('../fonts/poppins-v6-latin_latin-ext-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v6-latin_latin-ext-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v6-latin_latin-ext-800.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v6-latin_latin-ext-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v6-latin_latin-ext-800.svg#Poppins') format('svg'); /* Legacy iOS */
  }

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%
  }

  body {
    font-size: 1.6rem
  }
`

export default GlobalStyle
