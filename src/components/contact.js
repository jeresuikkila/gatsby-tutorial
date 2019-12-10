import React from "react"

export default ({ email, twitter }) => (
  <div>
    <h3>Contact us</h3>
    <ul style={{ listStyle: "none", marginLeft: "0px" }}>
      <li>
        <a href={`mailto: ${email}`}>{email}</a>
      </li>
      <li>
        <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
      </li>
    </ul>
  </div>
)
