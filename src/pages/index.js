import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleSection from "../components/sections/title-section"
import AboutMeSection from "../components/sections/about-me-section"
import ProjectsSection from "../components/sections/projects-section"
import MusicSection from "../components/sections/music-section"

// TODO: replace with actual section imports which import this file
import SectionLayout from "../components/sections/section-layout" 

import "../styles/styles.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleSection />
    <AboutMeSection />
    <ProjectsSection />
    <MusicSection />
    {/* <div className="section-container" style={{...exampleSectionStyle, color: "green"}} id="section3"> */}
    {/*   <span style={{fontSize: 96}}>SECTION 3</span> */}
    {/* </div> */}
  </Layout>
)

export default IndexPage

// {["red", "blue", "green"].forEach((color, section) => (
//       <div style={{height: 1920, width:1080, background: color, textAlign: "center", verticalAlign: "center"}}>
//         <span style={{fontSize: 96}}>SECTION {section}</span>
//       </div>
//       ))}