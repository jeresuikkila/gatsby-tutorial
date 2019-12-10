import React from "react"
import { rhythm } from "../utils/typography"

const Testimonial = ({ firstName, lastName, company, jobTitle, body }) => {
  return (
    <div
      style={{
        backgroundColor: "beige",
        borderRadius: "10px",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <h3 style={{ marginBottom: rhythm(1 / 2) }}>
        {firstName} {lastName}
      </h3>
      <h5>
        {jobTitle} at {company}
      </h5>
      <p>{body}</p>
    </div>
  )
}

export default Testimonial
