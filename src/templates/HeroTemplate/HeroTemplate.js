import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from 'components/Section/Section'
import StyledLink from 'components/StyledLink/StyledLink'
import { H1, H2 } from 'components/Typography/Typography'
import Circle from 'components/Circle/Circle'
import Icon from 'components/Icon/Icon'
import semicolon from 'assets/images/;.svg'

const scrollToElement = require('scroll-to-element')

const HeroSection = styled(Section)`
  padding: 31.25vh 0 0 12.5vw;

  ${({ theme }) => theme.mq.huge} {
    padding: 31.25vh 0 0 20vw;
  }
`

const HeroH2 = styled(H2)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.h2};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(1.4 * ${({ theme }) => theme.font.size.desktop.h2});
  }
`

const HeroH1 = styled(H1)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.h1};
    padding-right: 40px;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(1.4 * ${({ theme }) => theme.font.size.desktop.h1});
    padding-right: 40px;
    ::before,
    ::after {
      transform: rotate(225deg) scale(1.4);
    }
  }
`

const CTA = styled(StyledLink)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.link};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(1.4 * ${({ theme }) => theme.font.size.desktop.link});
    padding: 0 0 0 56px;
  }

  ${({ theme }) => theme.mq.huge} {
    ::before {
      height: 6px;
      width: 36px;
      border-radius: 3px;
    }
  }
`

const StyledBigCircle = styled(Circle)`
  background: ${({ theme, isLight }) =>
    isLight
      ? `radial-gradient(circle at 30% 30%, ${theme.themeGradient})`
      : `none`} !important;
  opacity: ${({ isLight }) => (isLight ? '1' : '0')};
  transition: opacity 400ms 300ms ease-out;

  ${({ theme }) => theme.mq.desktop} {
    top: 24%;
    left: 45%;
  }

  ${({ theme }) => theme.mq.huge} {
    left: 50%;
    width: calc(1.4 * 420px);
    height: calc(1.4 * 420px);
  }

  :before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    top: -40%;
    left: 110%;

    ${({ theme }) => theme.mq.tablet} {
      top: -50%;
      left: 175%;
    }

    ${({ theme }) => theme.mq.desktop} {
      top: 0;
      left: 100%;
    }

    ${({ theme }) => theme.mq.huge} {
      width: calc(1.4 * 80px);
      height: calc(1.4 * 80px);
    }
  }

  :after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    top: -15%;
    left: 125%;

    ${({ theme }) => theme.mq.tablet} {
      top: -20%;
      left: 195%;
    }

    ${({ theme }) => theme.mq.desktop} {
      top: 30%;
      left: 115%;
    }

    ${({ theme }) => theme.mq.huge} {
      width: calc(1.4 * 48px);
      height: calc(1.4 * 48px);
    }
  }

  :before,
  :after {
    background: ${({ isLight, theme }) =>
      isLight
        ? `radial-gradient(circle at 30% 30%, ${theme.themeGradient})`
        : `none`} !important;
    opacity: ${({ isLight }) => (isLight ? '1' : '0')};
    transition: opacity 400ms 300ms ease-out;
  }
`

const StyledBigDarkCircle = styled(StyledBigCircle)`
  background: ${({ isLight, theme }) =>
    !isLight
      ? `radial-gradient(circle at 30% 30%, ${theme.themeGradient})`
      : `none`} !important;
  opacity: ${({ isLight }) => (isLight ? '0' : '1')};
  transition: opacity 400ms 300ms ease-out;

  :before,
  :after {
    background: ${({ isLight, theme }) =>
      !isLight
        ? `radial-gradient(circle at 30% 30%, ${theme.themeGradient})`
        : `none`} !important;
    opacity: ${({ isLight }) => (isLight ? '0' : '1')};
    transition: opacity 400ms 300ms ease-out;
  }
`

const StyledSemicolon = styled(Icon)`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: inline-block;
    position: relative;
    top: 26px;
    left: 8px;
  }

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.4);
    top: 26px;
    left: 16px;
  }
`

const handleLinkClick = (e, target) => {
  if (typeof window !== 'undefined') {
    if (window.location.pathname === '/') {
      e.preventDefault()
      scrollToElement(target, {
        offset: -80,
        ease: 'outCube',
        duration: 1000,
      })
    }
  }
}

const HeroTemplate = ({ isLight }) => (
  <HeroSection id="home">
    <StyledBigCircle isLight={isLight} top="42%" left="-255px" radius={210} />
    <StyledBigDarkCircle
      isLight={isLight}
      top="42%"
      left="-255px"
      radius={210}
    />
    <HeroH2>Hello there, I am</HeroH2>
    <HeroH1>
      Frontend developer<StyledSemicolon src={semicolon}>;</StyledSemicolon>{' '}
      <br />& UI Designer
    </HeroH1>
    <CTA
      onClick={e => {
        handleLinkClick(e, '#portfolio')
      }}
      to="/#portfolio"
    >
      see my work
    </CTA>
  </HeroSection>
)

HeroTemplate.defaultProps = {
  isLight: true,
}

HeroTemplate.propTypes = {
  isLight: PropTypes.bool,
}

export default HeroTemplate
