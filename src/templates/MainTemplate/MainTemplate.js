import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'assets/styles/GlobalStyle'
import SEO from 'components/SEO/SEO'
import theme from 'assets/styles/theme'
import PropTypes from 'prop-types'

const MainTemplate = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </>
)

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default MainTemplate
