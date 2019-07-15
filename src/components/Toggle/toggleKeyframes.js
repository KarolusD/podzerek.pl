import { keyframes } from 'styled-components'

const toggleLightTheme = keyframes`
  0% {
    transform: scaleX(1) translateX(24px);
  }

  30% {
    transform: scaleX(1.4) translateX(12px);
  }

  100% {
    transform: scaleX(1) translateX(0);
  }
`

const toggleDarkTheme = keyframes`
  0% {
    transform: scaleX(1) translateX(0);
  }

  30% {
    transform: scaleX(1.4) translateX(12px);
  }

  100% {
    transform: scaleX(1) translateX(24px);
  }
`
export { toggleLightTheme, toggleDarkTheme }
