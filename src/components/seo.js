import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

function SEO({
  description,
  lang,
  meta,
  title,
  ogImage,
  ogImageAlt,
  location,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const { language } = useI18next()

  const metaDescription = description || site.siteMetadata.description

  const url = location?.pathname || ''
  const blogPostRegex = /\/blog\/[^/]+\/$/
  const isBlogPost = blogPostRegex.test(url)

  return (
    <Helmet
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${url}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          property: `og:image:alt`,
          content: ogImageAlt | 'picture of Marco Heine',
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `${isBlogPost ? 'summary_large_image' : 'summary'}`,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          name: 'twitter:image:alt',
          content: ogImageAlt,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <html lang={language || lang} />
      <title>{title}</title>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  ogImage: ``,
  ogImageAlt: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  ogImageAlt: PropTypes.string,
}

export default SEO
