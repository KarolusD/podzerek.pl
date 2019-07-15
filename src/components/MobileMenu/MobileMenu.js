import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const StyledMobileMenu = styled.ul`
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
    `opacity 200ms ${delay}ms ease-out, transform 200ms ${delay}ms cubic-bezier(.51,.84,.32,1.19)`};
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
  }
`

const MenuItems = ['Home', 'Portfolio', 'About me', 'Blog', 'Contact']

const MobileMenu = ({ isOpen }) => {
  return (
    <StyledMobileMenu isOpen={isOpen}>
      {MenuItems.map((item, index) => (
        <MobileMenuItem
          isOpen={isOpen}
          delay={isOpen ? index * 80 + 300 : 100}
          key={item}
        >
          <Link
            to={item
              .split(' ')
              .join('')
              .toLowerCase()}
          >
            {item}
          </Link>
        </MobileMenuItem>
      ))}
    </StyledMobileMenu>
  )
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default MobileMenu
