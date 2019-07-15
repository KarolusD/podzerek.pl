import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 0 0 0 48px;
  margin: 0;
  color: ${({ theme }) => theme.brand};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.link};
  font-weight: 600;
  line-height: 24px;
  text-decoration: none;
  border: none;
  box-shadow: none;
  outline: none;
  background: none;
  letter-spacing: 0.03rem;
  cursor: pointer;
  user-select: none;
  transition: transform 250ms ease-in-out;

  ::before {
    transition: transform 250ms ease-in-out;
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.brandGradient});
  }

  ${({ theme }) => theme.mq.desktop} {
    :hover {
      :before {
        transform: translateX(8px);
      }
    }
  }
`
export default StyledLink
