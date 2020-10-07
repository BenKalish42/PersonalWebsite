/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.css"

import { ScrollArea } from "react-scroll-to"
 
const Layout = ({ children, sections }) => {
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
      <ScrollArea
        id="mainArea"
        style={{
          display: "flex",
          flexDirection: "column",
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