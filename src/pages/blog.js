import React from 'react'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Section from 'components/Section/Section'
import styled from 'styled-components'
import { H1 } from 'components/Typography/Typography'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const StyledSection = styled(Section)`
    padding: 120px 12.5vw 120px 12.5vw;
  `

  const { edges } = data.allMarkdownRemark
  const allPosts = edges.map(post => {
    return (
      <div key={post.node.frontmatter.title}>
        <H1>{post.node.frontmatter.title}</H1>
        <Link to={`blog/${post.node.fields.slug}`}>Read more...</Link>
      </div>
    )
  })

  return (
    <MainTemplate>
      <StyledSection>{allPosts}</StyledSection>
    </MainTemplate>
  )
}

export default BlogPage
