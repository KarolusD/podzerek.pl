import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          author
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600,800&display=swap&subset=latin-ext"
        rel="stylesheet"
        type="text/css"
      />
    </Helmet>
  )
}

export default SEO
