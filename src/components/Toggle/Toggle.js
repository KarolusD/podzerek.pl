import styled from 'styled-components'
import { pure } from 'recompose'

const StyledToggle = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.white};
  width: 28px;
  height: 16px;
  margin: 2px;
  border-radius: 10px;
  top: 0;
  left: 0;
  animation: ${({ animation }) => animation} 300ms ease-out;
  animation-fill-mode: both;
`

StyledToggle.defaultProps = {
  animation: 'none',
}

export default pure(StyledToggle)
