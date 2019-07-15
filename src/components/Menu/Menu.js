import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  position: relative;
  list-style-type: none;
  display: none;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
  }
`

const StyledMenuItem = styled.li`
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.desktop.link};
  margin-left: 64px;
  padding: 8px;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
`

const MenuItems = ['Home', 'Portfolio', 'About me', 'Blog', 'Contact']

const Menu = () => (
  <StyledMenu>
    {MenuItems.map(item => (
      <StyledMenuItem key={item}>
        <Link
          to={item
            .split(' ')
            .join('')
            .toLowerCase()}
        >
          {item}
        </Link>
      </StyledMenuItem>
    ))}
  </StyledMenu>
)

export default Menu
