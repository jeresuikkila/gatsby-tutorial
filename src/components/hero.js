import PropTypes from "prop-types"
import React from "react"

const Hero = ({ title, subtitle, textLeft, children }) => {
  const ord = textLeft ? 0 : 1
  return (
    <div
      style={{
        background: `white`,
        minHeight: "20rem",
        minWidth: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1, order: ord, padding: "3rem" }}>
        <h1 style={{}}>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textLeft: PropTypes.bool,
}

Hero.defaultProps = {
  title: "",
  subtitle: "",
  textLeft: true,
}

export default Hero
