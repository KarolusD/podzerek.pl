import React from 'react'
import Icon from 'components/Icon/Icon'
import logoImg from 'assets/images/logo.svg'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLogo = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;

  svg path {
    fill: ${({ theme }) => theme.text};
    transition: fill ${({ theme }) => theme.themeTransition};
  }
  ${({ theme }) => theme.mq.tablet} {
    transform-origin: top left;
    transform: scale(1.2);
  }

  ${({ theme }) => theme.mq.huge} {
    transform-origin: top left;
    transform: scale(1.4);
  }
`

const LogoWrapper = styled(Link)`
  position: relative;
  width: 24px;
  height: 48px;
`

const Logo = () => (
  <LogoWrapper to="/">
    <StyledLogo src={logoImg} />
  </LogoWrapper>
)

export default Logo
