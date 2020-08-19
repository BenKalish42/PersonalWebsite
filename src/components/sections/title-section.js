import React from "react"

import { ReactComponent as TitleGraphic } from "../graphics/title-graphic.svg"

const TitleSection = (props) => {

	return(
		<div className="section-container title-section" id="Top">
			<div className="title-container">
				<span className="name">
					BEN KALISH
				</span>
				<span className="description">
					Developer & DJ
				</span>
			</div>
			<TitleGraphic className="title-graphic"/>
		</div>
	)
}


export default TitleSection
