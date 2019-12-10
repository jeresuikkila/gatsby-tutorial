import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Testimonial from "../components/testimonial"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Testimonials</h1>
        {data.allTestimonialsJson.edges.map(({ node }, index) => (
          <Testimonial {...node} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allTestimonialsJson {
      edges {
        node {
          id
          firstName
          lastName
          jobTitle
          company
          body
          published
          date
        }
      }
      totalCount
    }
  }
`
