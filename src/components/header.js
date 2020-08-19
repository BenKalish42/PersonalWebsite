import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navbar"

const Header = ({ siteTitle, siteSubtitle }) => (
  <header
    style={{
      backgroundImage: `url(https://i.postimg.cc/pXxqSmWQ/matrix-background-psych.png)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <h1
        style={{
          margin: 0,
          textAlign: `center`,
        }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textShadow: `-3px 3px #0a0a0a`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h6
        style={{
          margin: 4,
          color: `white`,
          textShadow: `-3px 3px #0a0a0a`,
          textAlign: `center`,
        }}>
        {siteSubtitle}
      </h6>
      <Navbar/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
