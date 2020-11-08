import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section/Section'
import TitleSection from 'components/TitleSection/TitleSection'
import { H3, H4, P } from 'components/Typography/Typography'
import styled from 'styled-components'
import Button from 'components/Button/Button'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Circle from 'components/Circle/Circle'
import portfolioProjects from '../../portfolioProjects/portfolioProjects'

const StyledSection = styled.div`
  min-height: auto;

  ${({ theme }) => theme.mq.desktop} {
    min-height: 100vh;
    align-items: center;
  }
`

const StyledWrapper = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100%;
  padding: 80px 12.5vw;
  min-height: 700px;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row-reverse;
    align-items: center;
    height: 100vh;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 16px;
  text-decoration: none;
  outline: none;
  border: none;
  list-style: none;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    margin-right: 24px;
  }
`

const StyledLink = styled.a`
  width: 100%;
  text-decoration: none;
`
const StyledTitleSection = styled(TitleSection)`
  display: ${({ index }) => (index == 0 ? 'flex' : 'none')};
`

const StyledImage = styled(Img)`
  display: none;
  ${({ theme }) => theme.mq.desktop} {
    display: block;
    position: relative;
    width: 100%;
    max-width: 600px;
    height: auto;
    max-height: 500px;
    object-fit: contain;
    img {
      object-fit: contain !important;
      object-position: right center !important;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    max-width: 750px;
    max-height: 750px;
  }
`

const StyledFlexItem = styled.div`
  z-index: 1;
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

const StyledH3 = styled(H3)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.h3};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.h3} * 1.4);
  }
`

const StyledH4 = styled(H4)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.h4};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.h4} * 1.4);
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

const StyledLightCircle = styled(Circle)`
  background: ${({ theme, isLight }) =>
    isLight
      ? `radial-gradient(circle at 30% 30%, ${theme.themeGradient})`
      : `none`} !important;
  opacity: ${({ isLight }) => (isLight ? '1' : '0')};
  transition: opacity 400ms 300ms ease-out;
  /* z-index: -1; */
`

const StyledDarkCircle = styled(Circle)`
  background: ${({ isLight, theme }) =>
    !isLight
      ? `radial-gradient(circle at 30% 30%, ${theme.themeGradient})`
      : `none`} !important;
  opacity: ${({ isLight }) => (isLight ? '0' : '1')};
  transition: opacity 400ms 300ms ease-out;
  /* z-index: -1; */
`

const PortfolioTemplate = ({ isLight }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "assets/images/portfolioImages" }
        }
      ) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allFile

  const portfolioPosts = portfolioProjects.map((project, index) => (
    <StyledSection key={project.title}>
      <StyledTitleSection index={index}>My recent projects</StyledTitleSection>

      <StyledLightCircle isLight={isLight} top="25%" left="80%" radius="48" />
      <StyledDarkCircle isLight={isLight} top="25%" left="80%" radius="48" />

      <StyledLightCircle isLight={isLight} top="35%" left="5%" radius="24" />
      <StyledDarkCircle isLight={isLight} top="35%" left="5%" radius="24" />

      <StyledLightCircle isLight={isLight} top="55%" left="35%" radius="32" />
      <StyledDarkCircle isLight={isLight} top="55%" left="35%" radius="32" />

      <StyledLightCircle isLight={isLight} top="75%" left="75%" radius="40" />
      <StyledDarkCircle isLight={isLight} top="75%" left="75%" radius="40" />

      <StyledLightCircle isLight={isLight} top="100%" left="15%" radius="24" />
      <StyledDarkCircle isLight={isLight} top="100%" left="15%" radius="24" />

      <StyledWrapper>
        <StyledFlexItem>
          <StyledH3>{project.title}</StyledH3>
          <StyledP>{project.description}</StyledP>
          <StyledH4>My Role</StyledH4>
          <StyledP>{project.role}</StyledP>
          <StyledH4>Goal</StyledH4>
          <StyledP>{project.goal}</StyledP>
          {project.buttonPrimary && (
            <StyledLink target="_blank" href={project.buttonPrimary[1]}>
              <StyledButton primary type="button">
                {project.buttonPrimary[0]}
              </StyledButton>
            </StyledLink>
          )}
          {project.buttonSecondary && (
            <StyledLink target="_blank" href={project.buttonSecondary[1]}>
              <StyledButton type="button">
                {project.buttonSecondary[0]}
              </StyledButton>
            </StyledLink>
          )}
        </StyledFlexItem>
        <StyledFlexItem>
          {edges.map(item => {
            if (project.image === item.node.name) {
              return (
                <StyledImage
                  key={item.node.name}
                  fluid={item.node.childImageSharp.fluid}
                />
              )
            }
          })}
        </StyledFlexItem>
      </StyledWrapper>
    </StyledSection>
  ))

  return <Section id="portfolio">{portfolioPosts}</Section>
}

PortfolioTemplate.defaultProps = {
  isLight: true,
}

PortfolioTemplate.propTypes = {
  isLight: PropTypes.bool,
}

export default PortfolioTemplate
