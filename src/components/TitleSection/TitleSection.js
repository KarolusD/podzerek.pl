import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { H2 } from 'components/Typography/Typography'

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

const StyledTitleSection = styled(H2)`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 40px;
  transition: color ${({ theme }) => theme.transition};
  :before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -64px;
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      ${({ theme }) => theme.black} 100%
    );
    transition: background ${({ theme }) => theme.transition};
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -64px;
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      ${({ theme }) => theme.black} 100%
    );
    transition: background ${({ theme }) => theme.transition};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.desktop.h2};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: calc(${({ theme }) => theme.font.size.desktop.h2} * 1.4);

    :before,
    :after {
      width: calc(32px * 1.4);
      height: calc(4px * 1.4);
      border-radius: 10px;
    }

    :before {
      left: -80px;
    }

    :after {
      right: -80px;
    }
  }
`

const TitleSection = ({ children, className }) => (
  <StyledWrapper className={className}>
    <StyledTitleSection> {children} </StyledTitleSection>
  </StyledWrapper>
)

TitleSection.defaultProps = {
  className: '',
}

TitleSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
}

export default TitleSection
