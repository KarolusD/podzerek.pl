import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Scrollspy from 'react-scrollspy'
import PropTypes from 'prop-types'

const activeNavItemKeyframes = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: center left;
  }
  100% {
    transform: scaleX(1);
  }
`

const StyledMenu = styled(Scrollspy)`
  position: relative;
  list-style-type: none;
  display: none;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`

const StyledMenuItem = styled.li`
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.desktop.link};
  margin-left: 64px;
  padding: 8px;
  position: relative;
  transition: ${({ theme }) => theme.themeTransition};
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
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
        animation: 200ms ${activeNavItemKeyframes} ease-out both;
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
        animation: 200ms ${activeNavItemKeyframes} ease-out both;
      }
    }
  }
`

const Menu = ({ handleLinkClick }) => {
  return (
    <StyledMenu
      items={['home', 'portfolio', 'aboutme', 'blog', 'contact']}
      currentClassName="active"
      offset={-300}
    >
      <StyledMenuItem>
        <Link
          to="#home"
          onClick={e => handleLinkClick(e, '#home')}
          activeClassName="active"
        >
          Home
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="#portfolio" onClick={e => handleLinkClick(e, '#portfolio')}>
          Portfolio
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="#aboutme" onClick={e => handleLinkClick(e, '#aboutme')}>
          About me
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/blog" onClick={null} activeClassName="active">
          Blog
        </Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="#contact" onClick={e => handleLinkClick(e, '#contact')}>
          Contact
        </Link>
      </StyledMenuItem>
    </StyledMenu>
  )
}

Menu.propTypes = {
  handleLinkClick: PropTypes.func.isRequired,
}

export default Menu
