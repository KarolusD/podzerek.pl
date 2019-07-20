import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from 'components/Logo/Logo'
import Hamburger from 'components/Hamburger/Hamburger'
import Switch from 'components/Switch/Switch'
import PropTypes from 'prop-types'
import MobileMenu from 'components/MobileMenu/MobileMenu'
import Menu from 'components/Menu/Menu'

const scrollToElement = require('scroll-to-element')

const StyledWrapper = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background: ${({ theme }) => theme.bg};
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 16px 0 45px;
  z-index: 1000;
  transition: ${({ theme }) => theme.themeTransition};

  ${({ theme }) => theme.mq.tablet} {
    padding: 28px 80px 0 80px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 28px 164px 0 164px;
  }
`

const Header = ({ setTheme, setIsLight, isLight }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

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
      setIsOpen(false)
    }
  }

  return (
    <StyledWrapper id="nav">
      <Switch
        setTheme={setTheme}
        setIsLight={setIsLight}
        isLight={isLight}
        isOpen={isOpen}
      />
      <Logo />
      <Hamburger isOpen={isOpen} onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isOpen} handleLinkClick={handleLinkClick} />
      <Menu handleLinkClick={handleLinkClick} />
    </StyledWrapper>
  )
}

Header.propTypes = {
  setTheme: PropTypes.func.isRequired,
  setIsLight: PropTypes.func.isRequired,
  isLight: PropTypes.bool.isRequired,
}

export default Header
