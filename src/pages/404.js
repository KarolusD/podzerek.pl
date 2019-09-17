import React from 'react'
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import { H1, P } from 'components/Typography/Typography'

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const NotFoundPage = () => (
  <MainTemplate>
    <StyledWrapper>
      <H1>NOT FOUND</H1>
      <P>You just hit a route that doesn&#39;t exist... the sadness ;(</P>
    </StyledWrapper>
  </MainTemplate>
)

export default NotFoundPage
