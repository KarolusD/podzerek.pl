import { keyframes } from 'styled-components'

const circleKeyframes = keyframes`
  0%{
    transform: translate(0, 0) scale(1)
  }

  50% {
    transform: translate(0px, 5px) scale(0.95)
  }


  100% {
    transform: translate(0, 0) scale(1)
  }
`

export default circleKeyframes
