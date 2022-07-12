import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-react-i18next'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/Button'
import theme from '../styles/theme'
import * as ui from '../styles/til/ui'

const TIL = ({ data }) => {
  const [allItemsLoaded, setAllItemsLoaded] = useState(false)

  const { allMdx } = data
  const { edges, group } = allMdx
  const hasNumberOfEdges = edges && edges.length > 19

  const items =
    edges && (!allItemsLoaded && hasNumberOfEdges ? edges.slice(0, 20) : edges)
  const additionalItems = edges.slice(20)

  const handleOnClick = () => {
    setAllItemsLoaded(!allItemsLoaded)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout maxWidth="1400px">
        <SEO title="Today I learned" />
        <ui.PageHeader>Today I learned</ui.PageHeader>

        <section className="flex justify-center flex-wrap gap-4 mx-auto my-10 list-none max-w-3xl">
          <ui.Category>
            <Link to="/today-i-learned/">All tags</Link>
          </ui.Category>
          {group.map((tag) => (
            <ui.Category
              key={tag.fieldValue}
              category={tag.fieldValue}
            >
              <Link to={`/today-i-learned/${tag.fieldValue.toLowerCase()}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </ui.Category>
          ))}
        </section>

        <ui.PageContent>
          {items.map(({ node }) => {
            const { excerpt, fields, frontmatter, id } = node

            return (
              <Link
                key={id}
                to={`/${fields.slug}`}
              >
                <ui.Section>
                  <ui.Aside>TIL #{frontmatter.number}</ui.Aside>
                  <h3>{frontmatter.title}</h3>

                  {frontmatter.tags && (
                    <ui.tags>
                      {frontmatter.tags.map((tag) => (
                        <ui.tag key={tag}>#{tag}</ui.tag>
                      ))}
                    </ui.tags>
                  )}

                  <section>
                    <p>{excerpt}</p>
                    <ui.Readmore>Read more</ui.Readmore>
                  </section>
                </ui.Section>
              </Link>
            )
          })}
        </ui.PageContent>
        {hasNumberOfEdges && !allItemsLoaded && (
          <ui.Slot>
            <Button onClick={handleOnClick}>
              Load {additionalItems.length} more
            </Button>
          </ui.Slot>
        )}
      </Layout>
    </ThemeProvider>
  )
}

TIL.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
      group: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
}

export default TIL

export const pageQuery = graphql`
  query ($language: String!, $tag: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt
          frontmatter {
            number
            title
            tags
          }
        }
      }
    }
  }
`
