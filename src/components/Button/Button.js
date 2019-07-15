import styled from 'styled-components'

const Button = styled.button`
  border: 2px solid transparent !important;
  outline: none;
  box-shadow: none;
  background-color: ${({ theme, primary }) =>
    primary ? theme.lightBrand : theme.lightBrand3};
  border-radius: 20px;
  height: 40px;
  padding: 8px 24px;
  text-align: center;
  color: ${({ theme, primary }) => (primary ? theme.brand : theme.brand3)};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.button};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: ${({ primary }) => (primary ? '28px' : '0')};
  cursor: pointer;
  transition: background-color 200ms ease-out, border 200ms ease-out;

  ${({ theme }) => theme.mq.desktop} {
    :hover {
      background-color: transparent;
      border: 2px solid
        ${({ theme, primary }) => (primary ? theme.brand : theme.brand3)} !important;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.button} * 1.4);
    height: 56px;
    padding: 12px 32px;
    border-radius: 28px;
  }
`

export default Button
