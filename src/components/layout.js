/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Particles from 'react-particles-js'
import particlesConfigWebs from '../helpers/particles-config-webs.json'
import particlesConfigStars from '../helpers/particles-config-stars.json'

import Navbar from "./navbar"
import "./layout.css"

import { ScrollArea } from "react-scroll-to"

// draws canvas proper size

const particlesConfig = {
  webs: particlesConfigWebs,
  stars: particlesConfigStars
}
 
const Layout = ({ children, sections, particles }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <>
      { particles ? <Particles params={particlesConfig[particles]}/> : null}
      <ScrollArea
        id="mainArea"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Navbar sections={sections}/>
        {children}
        <footer>
          © {new Date().getFullYear()} Ben Kalish, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">GatsbyJS</a>
        </footer>
      </ScrollArea>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
