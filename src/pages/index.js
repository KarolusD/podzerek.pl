import React from 'react'
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate/MainTemplate'

const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.font.size.h1};
  font-family: ${({ theme }) => theme.font.family.poppins};
  color: ${({ theme }) => theme.brand};
`

const IndexPage = () => (
  <MainTemplate>
    <StyledHeading>Gatsby Karolus Starter</StyledHeading>
  </MainTemplate>
)

export default IndexPage
