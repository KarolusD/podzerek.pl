import styled from 'styled-components'

const Circle = styled.div`
  position: absolute;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: ${({ radius }) => radius * 2}px;
  height: ${({ radius }) => radius * 2}px;
  background: linear-gradient(135deg, ${({ theme }) => theme.themeGradient});
  border-radius: 50%;
`

export default Circle
