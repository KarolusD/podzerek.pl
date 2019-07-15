import React from 'react'
import Section from 'components/Section/Section'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { H1, P } from 'components/Typography/Typography'
import styled from 'styled-components'
import MainTemplate from '../MainTemplate/MainTemplate'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const StyledSection = styled(Section)`
  padding: 16vh 0 8vh 0;
  max-width: 750px;
`

const BlogTemplate = ({ data }) => {
  return (
    <MainTemplate>
      <StyledSection>
        <H1>{data.markdownRemark.frontmatter.title}</H1>
        <P>{data.markdownRemark.frontmatter.date}</P>
        {/* eslint-disable react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </StyledSection>
    </MainTemplate>
  )
}

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogTemplate
