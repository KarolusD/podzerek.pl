import React from 'react'
import Section from 'components/Section/Section'
import { H3, P } from 'components/Typography/Typography'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Icon from 'components/Icon/Icon'
import quoteLeft from 'assets/images/quoteLeft.svg'
import quoteRight from 'assets/images/quoteRight.svg'
import TitleSection from 'components/TitleSection/TitleSection'

const StyledSection = styled(Section)`
  ${({ theme }) => theme.mq.desktop} {
    min-height: 100vh;
    align-items: center;
  }
`

const StyledFlexWrapper = styled.div`
  position: relative;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  padding: 80px 12.5vw;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row-reverse;
    align-items: center;
    align-content: center;
    justify-content: center;
    min-height: 100vh;
  }
`

const StyledFlexItem = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
    max-width: 600px;
    height: auto;
    padding-right: 80px;
  }
  ${({ theme }) => theme.mq.huge} {
    max-width: 750px;
  }
`

const StyledImage = styled(Img)`
  position: relative;
  display: block;
  object-fit: contain;
  width: 100%;
  max-width: 600px;
  height: auto;
  max-height: 500px;
  margin: 0;
  padding: 0;
  margin-top: 64px;

  img {
    object-fit: contain !important;
    width: 100% !important;
    height: auto !important;
    object-position: center center !important;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 0;
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 750px;
    max-height: 750px;
  }
`

const StyledQuoteLeft = styled(Icon)`
  position: absolute;
  left: -20px;
  top: -6px;

  ${({ theme }) => theme.mq.tablet} {
    top: -1px;
  }

  ${({ theme }) => theme.mq.huge} {
    top: 7px;
    transform: scale(1.4);
  }
`

const StyledQuoteRight = styled(Icon)`
  position: absolute;
  right: 0;
  bottom: -16px;

  ${({ theme }) => theme.mq.huge} {
    transform: scale(1.4);
    right: 48px;
    bottom: -40px;
  }
`

const StyledH3 = styled(H3)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.h3};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.h3} * 1.4);
  }
`

const StyledP = styled(P)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.body} * 1.4);
  }
`

const AboutMeTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/images/profile.png" }) {
        relativePath
        name
        childImageSharp {
          fluid(maxWidth: 750, quality: 95) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="aboutme">
      <TitleSection>Get to know me</TitleSection>
      <StyledFlexWrapper>
        <StyledFlexItem>
          <StyledQuoteLeft src={quoteLeft} />
          <StyledH3>Hello, I&apos;m Charles</StyledH3>
          <StyledP>
            Aliquip irure ipsum reprehenderit enim qui fugiat ad eiusmod
            officia. Consectetur fugiat nostrud in ipsum reprehenderit amet
            irure reprehenderit id ex tempor nostrud voluptate. Sit enim aliquip
            esse incididunt nostrud irure nulla duis aute quis. Sunt incididunt
            esse minim laborum quis fugiat Lorem et est. Eu enim tempor aliqua
            magna. Ex non non anim aliquip deserunt amet amet minim nulla
            voluptate dolor duis Lorem ad. Excepteur velit deserunt exercitation
            aliquip irure fugiat non ad irure do. Consectetur in duis do eiusmod
            sint do sint
          </StyledP>
          <StyledQuoteRight src={quoteRight} />
        </StyledFlexItem>
        <StyledFlexItem>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
        </StyledFlexItem>
      </StyledFlexWrapper>
    </StyledSection>
  )
}

export default AboutMeTemplate
