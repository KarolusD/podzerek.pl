/* eslint-disable no-console */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lightTheme, darkTheme } from 'assets/styles/theme'
import Toggle from 'components/Toggle/Toggle'
import {
  toggleLightTheme,
  toggleDarkTheme,
} from 'components/Toggle/toggleKeyframes'
import { pure } from 'recompose'
import { P } from 'components/Typography/Typography'

const StyledSwitch = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 56px;
  height: 20px;
  background: ${({ theme }) =>
    `linear-gradient(
      90deg,
      ${theme.brand} 0%,
      ${theme.brand2} 100%
  )`};
  border-radius: 10px;
  z-index: 999;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  top: calc(100vh - 48px);
  left: calc(50vw - 28px);
  cursor: pointer;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(100px)'};
  transition: ${({ isOpen }) =>
    isOpen
      ? `visibility 300ms 600ms ease-out,
    transform 300ms 600ms cubic-bezier(0.51, 0.84, 0.32, 1.19)`
      : `visibility 300ms ease-out,
    transform 300ms cubic-bezier(0.51, 0.84, 0.32, 1.19)`};

  ${({ theme }) => theme.mq.desktop} {
    left: calc(100vw - 8%);
    top: calc(50vh - 48px);
    visibility: visible;
    transform: rotate(90deg);
    transition: none;
  }

  :before {
    content: '';
    position: absolute;
    display: block;
    z-index: -100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: ${({ theme }) =>
      `linear-gradient(
        270deg,
        ${theme.brand} 0%,
        ${theme.brand2} 100%)`};

    opacity: ${({ isLight }) => (isLight ? '0' : '1')};
    transition: opacity ${({ theme }) => theme.themeTransition};
  }
`

const LightParagraph = styled(P)`
  position: relative;
  top: 0;
  left: calc(-25% - 35px);
  user-select: none;
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme, isLight }) => (isLight ? theme.brand : theme.gray)};
  transition: color ${({ theme }) => theme.themeTransition};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }
`

const DarkParagraph = styled(P)`
  position: relative;
  top: 0;
  left: calc(25% + 33px);
  user-select: none;
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme, isLight }) => (isLight ? theme.gray : theme.brand)};
  transition: color ${({ theme }) => theme.themeTransition};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }
`

const Switch = ({ setTheme, setIsLight, isLight, isOpen }) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleThemeChange = () => {
    setTheme(isLight ? darkTheme : lightTheme)
    setIsLight(!isLight)
    setIsClicked(true)
    // console.log(isLight, isOn)
  }

  const handleAnimation = () => {
    if (!isLight && isClicked) return toggleDarkTheme
    else if (isLight && isClicked) return toggleLightTheme
    else return 'none'
  }

  return (
    <StyledSwitch isLight={isLight} onClick={handleThemeChange} isOpen={isOpen}>
      <LightParagraph isLight={isLight}>Light</LightParagraph>
      <Toggle isLight={isLight} animation={handleAnimation} />
      <DarkParagraph isLight={isLight}>Dark</DarkParagraph>
    </StyledSwitch>
  )
}

Switch.propTypes = {
  setTheme: PropTypes.func.isRequired,
  setIsLight: PropTypes.func.isRequired,
  isLight: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default pure(Switch)
