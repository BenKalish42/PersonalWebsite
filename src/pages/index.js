import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleSection from "../components/sections/title-section"
import ProjectsSection from "../components/sections/projects-section"
import MusicSection from "../components/sections/music-section"

// TODO: replace with actual section imports which import this file
import SectionLayout from "../components/sections/section-layout" 

import "../styles/styles.scss"

const exampleSectionStyle = {
  height: 1080,
  width: 1920,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "black",
}

const exampleContentStyle = {
  display: "flex",
  height: 300,
  width: "100%",
  margin: "20px 0",
  border: "1px solid orange",
  zIndex: 2,
}

const exampleContentContainerStyle = { 
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "72px 0",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TitleSection />
    <ProjectsSection />
    <MusicSection />
    <SectionLayout sectionTitle="Section 3">
      <div style={exampleContentContainerStyle}>
        <div style={exampleContentStyle}></div>
        <div style={exampleContentStyle}></div>
        <div style={exampleContentStyle}></div>
      </div>
    </SectionLayout>
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