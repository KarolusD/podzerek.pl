import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Section from 'components/Section/Section'
import TitleSection from 'components/TitleSection/TitleSection'
import { H3, P } from 'components/Typography/Typography'
import Icon from 'components/Icon/Icon'
import github from 'assets/images/github.svg'
import linkedin from 'assets/images/linkedin.svg'
import mail from 'assets/images/mail.svg'
import Circle from 'components/Circle/Circle'

const StyledSection = styled(Section)`
  min-height: 60vh;
  height: auto;
  width: 100vw;
`

const StyledFlexWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 80px 12.5vw;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20vh 12.5vw;
  }
  ${({ theme }) => theme.mq.huge} {
    padding: 20vh 25vw;
  }
`

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-right: 24px;
  padding: 11px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${({ theme }) => theme.lightBrand};
  border: 2px solid transparent;
  transition: border 200ms ease-out, background 200ms ease-out;

  :last-of-type {
    margin-right: 0;
  }

  /* :hover {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.brand};
  } */
`

const StyledP = styled(P)`
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-top: 48px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 0;
    margin-right: 80px;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.body} * 1.2);
  }
`

const StyledIconsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const StyledIconWrapper = styled.a`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  text-decoration: none;
  margin-bottom: 24px;
  cursor: pointer;
  :hover {
    div {
      background: transparent;
      border: 2px solid ${({ theme }) => theme.brand};
    }
  }
`

const StyledIconP = styled(P)`
  color: ${({ theme }) => theme.brand};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin: 0;
  margin-left: 16px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.body};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.body} * 1.2);
  }
`

const StyledH3 = styled(H3)`
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font.family.poppins};
  font-size: ${({ theme }) => theme.font.size.mobile.h3};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  position: relative;
  top: 64px;
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    text-align: left;
    top: 16vh;
    left: 12.5vw;
    font-size: ${({ theme }) => theme.font.size.desktop.h3};
  }

  ${({ theme }) => theme.mq.huge} {
    left: 25vw;
    font-size: calc(${({ theme }) => theme.font.size.desktop.h3} * 1.2);
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

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const FooterTemplate = ({ isLight }) => (
  <StyledSection id="contact">
    <TitleSection>Stay in touch</TitleSection>
    <StyledLightCircle
      isLight={isLight}
      top={`${getRandomInt(20, 60)}%`}
      left={`${getRandomInt(40, 90)}%`}
      radius={`${getRandomInt(32, 64)}`}
    />
    <StyledDarkCircle
      isLight={isLight}
      top={`${getRandomInt(20, 60)}%`}
      left={`${getRandomInt(40, 90)}%`}
      radius={`${getRandomInt(64, 81)}`}
    />
    <StyledH3>Feel free to contact me via</StyledH3>
    <StyledFlexWrapper>
      <StyledIconsWrapper>
        <StyledIconWrapper href="mailto:kpodzerek@gmail.com">
          <StyledIcon src={mail} />
          <StyledIconP>kpodzerek@gmail.com</StyledIconP>
        </StyledIconWrapper>
        <StyledIconWrapper
          target="_blank"
          href="https://www.linkedin.com/in/karol-podzerek/"
        >
          <StyledIcon src={linkedin} />
          <StyledIconP>Karol Podżerek</StyledIconP>
        </StyledIconWrapper>
        <StyledIconWrapper target="_blank" href="https://github.com/KarolusD">
          <StyledIcon src={github} />
          <StyledIconP>@KarolusD</StyledIconP>
        </StyledIconWrapper>
      </StyledIconsWrapper>
      <StyledP>copyright ©. all right reserved.</StyledP>
    </StyledFlexWrapper>
  </StyledSection>
)

FooterTemplate.defaultProps = {
  isLight: true,
}

FooterTemplate.propTypes = {
  isLight: PropTypes.bool,
}

export default FooterTemplate
