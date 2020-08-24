import { Link } from "gatsby"
import React from "react"

import "../styles/styles.scss"

function navigationHandler(elementId){
	return () => {
		const el = document.querySelector(`#${elementId}`)
		if(el) el.scrollIntoView()
	}
}

const Navbar = () => (
	<div className="navbar-container">
		<div className="navbar-inner-container">
			<div className="menu-item" onClick={navigationHandler("Top")}>
				Top
			</div>
			<div className="menu-item" onClick={navigationHandler("AboutMe")}>
				About Me
			</div>
			<div className="menu-item" onClick={navigationHandler("Projects")}>
				Projects
			</div>
			<div className="menu-item" onClick={navigationHandler("Music")}>
				Music
			</div>
		</div>
	</div>
)

export default Navbar
