import { Link } from "gatsby"
import React from "react"

import "../styles/styles.scss"

function navigationHandler(elementId){
	return () => {
		const el = document.querySelector(`#${elementId}`)
		if(el) el.scrollIntoView()
	}
}

function renderSections(sections){
	if(sections) return sections.map((section) => 
		<div
			className="menu-item"
			onClick={navigationHandler(section.id)}
			key={section.id}
		>
			{section.title}
		</div>
	);
}

const Navbar = ({sections}) => (
	<div className="navbar-container">
		<div className="navbar-inner-container">
			{/* <div className="menu-item" onClick={navigationHandler("Top")}> */}
			{/* 	Top */}
			{/* </div> */}
			{/* <div className="menu-item" onClick={navigationHandler("AboutMe")}> */}
			{/* 	About Me */}
			{/* </div> */}
			{/* <div className="menu-item" onClick={navigationHandler("Software")}> */}
			{/* 	Software */}
			{/* </div> */}
			{/* <div className="menu-item" onClick={navigationHandler("Music")}> */}
			{/* 	Music */}
			{/* </div> */}
			{renderSections(sections)}
		</div>
	</div>
)

export default Navbar
