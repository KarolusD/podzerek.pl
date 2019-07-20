import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Scrollspy from 'react-scrollspy'

const StyledMobileMenu = styled(Scrollspy)`
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: ${({ theme }) => theme.white};
  z-index: -1;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: visibility 300ms ease-out, transform 300ms ease-out,
    background-color ${({ theme }) => theme.themeTransition};

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`

const MobileMenuItem = styled.li`
  position: relative;
  left: 50px;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(-50px)' : 'translateX(0)'};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: ${({ delay }) =>
    `transform 300ms ${delay}ms cubic-bezier(.4,.94,.41,1.3), opacity 200ms ${delay}ms ease-out`};
  margin: 8%;
  cursor: pointer;

  a {
    padding: 8px;
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.family.poppins};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    font-size: ${({ theme }) => theme.font.size.mobile.h3};
    letter-spacing: 0.03em;
    line-height: 27px;
    color: ${({ theme }) => theme.text};
    transition: color ${({ theme }) => theme.themeTransition};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.desktop.h3};
    }

    &.active {
      :before {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: calc(100% + 4px);
        height: 4px;
        border-radius: 6px;
        background: linear-gradient(
          to right,
          ${({ theme }) => theme.brandGradient}
        );
        z-index: -1;
      }
    }
  }

  &.active {
    a {
      :before {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: calc(100% + 4px);
        height: 4px;
        border-radius: 6px;
        background: linear-gradient(
          to right,
          ${({ theme }) => theme.brandGradient}
        );
        z-index: -1;
      }
    }
  }
`

const MobileMenu = ({ isOpen, handleLinkClick }) => {
  return (
    <StyledMobileMenu
      isOpen={isOpen}
      items={['home', 'portfolio', 'aboutme', 'contact']}
      currentClassName="active"
      offset={-300}
    >
      <MobileMenuItem isOpen={isOpen} delay={isOpen ? 300 : 100}>
        <Link
          to="/#home"
          onClick={e => handleLinkClick(e, '#home')}
          activeClassName="active"
        >
          Home
        </Link>
      </MobileMenuItem>
      <MobileMenuItem isOpen={isOpen} delay={isOpen ? 380 : 100}>
        <Link to="/#portfolio" onClick={e => handleLinkClick(e, '#portfolio')}>
          Portfolio
        </Link>
      </MobileMenuItem>
      <MobileMenuItem isOpen={isOpen} delay={isOpen ? 460 : 100}>
        <Link to="/#aboutme" onClick={e => handleLinkClick(e, '#aboutme')}>
          About me
        </Link>
      </MobileMenuItem>
      {/* <MobileMenuItem isOpen={isOpen} delay={isOpen ? 540 : 100}>
        <Link to="/blog" onClick={null} activeClassName="active">
          Blog
        </Link>
      </MobileMenuItem> */}
      <MobileMenuItem isOpen={isOpen} delay={isOpen ? 620 : 100}>
        <Link to="/#contact" onClick={e => handleLinkClick(e, '#contact')}>
          Contact
        </Link>
      </MobileMenuItem>
    </StyledMobileMenu>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleLinkClick: PropTypes.func.isRequired,
}

export default MobileMenu
