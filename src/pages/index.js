import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Your agile partner"
        subtitle="For smarter business and better customer experiences"
        textLeft={false}
      >
        <Image />
      </Hero>
      <div>
        <h1>Our stories</h1>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <a
            key={node.id}
            href={node.fields.slug}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{}}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                {node.frontmatter.title}
              </h3>
              <p>
                {node.frontmatter.date} -- {node.timeToRead} min
                {node.timeToRead === 1 ? null : "s"}
              </p>
              <p>{node.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
