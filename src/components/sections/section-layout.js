import React from "react"

import { ReactComponent as SectionGraphic } from "../graphics/section-graphic.svg"

const SectionLayout = ({ children, sectionTitle }) => (
	<div className="section-container" id={sectionTitle.replace(/\W/g, '')}>
		<div className="section-graphic-overlay overlay-top"></div>
		{/* <SectionGraphic */}
		{/* 	className="section-graphic" */}
		{/* 	id={sectionTitle.replace(/\W/g, '') + "Graphic"} */}
		{/* /> */}
		<div className="section-graphic-overlay overlay-bottom"></div>
		<span className="section-title">
			{sectionTitle}
		</span>
		<div className="section-content-container">
			{children}
		</div>
	</div>
)

export default SectionLayout