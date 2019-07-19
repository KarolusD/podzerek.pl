import React from 'react'
// import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate'
import PortfolioTemplate from 'templates/PortfolioTemplate/PortfolioTemplate'
import AboutMeTemplate from '../templates/AboutMeTemplate/AboutMeTemplate'
import ContactTemplate from '../templates/ContactTemplate/ContactTemplate'

// const StyledHeading = styled.h1`
//   font-size: 40px;
//   color: black;
//   color: ${({ theme }) => theme.darkGray};
//   font-family: 'Poppins SemiBold', sans-serif;
//   transition: color 0.5s ease-in-out;
// `

const IndexPage = () => (
  <MainTemplate>
    <HeroTemplate />
    <PortfolioTemplate />
    <AboutMeTemplate />
    <ContactTemplate />
  </MainTemplate>
)

export default IndexPage
