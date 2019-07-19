import styled from 'styled-components'

// default typograpghy styles

const H1 = styled.h1`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  font-size: ${({ theme }) => theme.font.size.mobile.h1};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 127.5%;
  margin: 0 0 40px 0;
  transition: ${({ theme }) => theme.themeTransition};
`

const H2 = styled.h2`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.mobile.h2};
  color: ${({ theme }) => theme.darkGray};
  letter-spacing: 0.03rem;
  line-height: 150%;
  margin: 0 0 8px 0;
  transition: ${({ theme }) => theme.themeTransition};
`

const H3 = styled.h3`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  font-size: ${({ theme }) => theme.font.size.mobile.h3};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 150%;
  margin: 0 0 8px 0;
  transition: ${({ theme }) => theme.themeTransition};
`

const H4 = styled.h4`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.size.mobile.h4};
  color: ${({ theme }) => theme.text};
  letter-spacing: 0.03rem;
  line-height: 150%;
  margin: 0 0 4px 0;
  transition: ${({ theme }) => theme.themeTransition};
`

const P = styled.p`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  color: ${({ theme }) => theme.darkGray};
  line-height: 150%;
  margin: 0 0 20px 0;
  transition: ${({ theme }) => theme.themeTransition};
`

export { H1, H2, H3, H4, P }
