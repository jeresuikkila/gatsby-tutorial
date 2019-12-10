import PropTypes from "prop-types"
import React from "react"

const Footer = ({ children }) => (
  <footer
    style={{
      color: "white",
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      minHeight: "10rem",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    {children}
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node,
}

Footer.defaultProps = {}

export default Footer
