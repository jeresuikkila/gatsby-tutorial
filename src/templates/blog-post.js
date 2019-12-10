import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        {post.frontmatter.title}
        <h1 style={{ marginBottom: rhythm(2), marginTop: rhythm(2) }}></h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`