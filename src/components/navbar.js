import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import MenuIcon from "./graphics/menu-icon-component"

import "../styles/styles.scss"


class Navbar extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			menuOpen: false
		}
	}

  // keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange (state) {
		this.setState({menuOpen: state.isOpen})  
	}

	closeMenu () {
		this.setState({menuOpen: false})
	}

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
	toggleMenu () {
		this.setState(state => ({menuOpen: !state.menuOpen}))
	}

	renderSections(sections){
		if(this.props.sections) return this.props.sections.map((section) => 
			<div
				className="menu-item"
				onClick={this.navigationHandler(section.id)}
				key={section.id}
			>
				{section.title}
			</div>
		);
	}

	navigationHandler(elementId){
		return () => {
			const el = document.querySelector(`#${elementId}`)
			if(el) el.scrollIntoView()
			this.closeMenu()
		}
	}

	render () {
		return (
			<div>
				<Menu 
					isOpen={this.state.menuOpen}
					onStateChange={(state) => this.handleStateChange(state)}
					disableAutoFocus
					itemListElement="div"
					customBurgerIcon={<MenuIcon />}
				>
					{this.renderSections()}
				</Menu>
			</div>
		)
	}
}


export default Navbar
