/* eslint-disable no-console */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from 'assets/styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import SEO from 'components/SEO/SEO'
import { lightTheme } from 'assets/styles/theme'
import Header from 'components/Header/Header'

const AppWrapper = styled.div`
  width: 100vw;
  height: auto;
  background: ${({ theme }) => theme.bg};
  transition: background ${({ theme }) => theme.themeTransition};
`

const MainTemplate = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)
  const [isLight, setIsLight] = useState(true)

  const childrenWithProp = React.Children.map(children, child => {
    return React.cloneElement(child, {
      isLight: isLight,
    })
  })

  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme} isLight={isLight}>
        <AppWrapper>
          <Header
            setTheme={setTheme}
            setIsLight={setIsLight}
            isLight={isLight}
          />
          {childrenWithProp}
        </AppWrapper>
      </ThemeProvider>
    </>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default MainTemplate
