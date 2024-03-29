import React from 'react'
import ReactFitText from 'react-fittext'

import "../styles/styles.scss"

const defaultIcon = () => (
	<svg className="project-icon" height="72" width="72" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M806.6 825.8c-1.7 0-3.5-0.2-5.1-0.5l-355.1-75.5c-13.5-2.9-22.1-16.2-19.3-29.7L530.4 234c2.4-11.5 12.7-19.8 24.5-19.8 1.7 0 3.4 0.2 5.1 0.5l355.1 75.5c6.5 1.4 12.1 5.2 15.7 10.9 3.7 5.6 4.9 12.3 3.5 18.8L831.1 806c-2.4 11.5-12.7 19.8-24.5 19.8z" fill="#D3D1D7" /><path d="M555 239.3l354.9 75.4 0.1 0.1-103.3 486s-0.1 0-0.1 0.1l-354.9-75.4-0.1-0.1 103.3-486 0.1-0.1m0-50.1c-23.1 0-44 16.2-49 39.6L402.7 715c-5.7 26.9 11.6 53.6 38.5 59.3l355.1 75.5c3.5 0.7 6.9 1.1 10.3 1.1 23.1 0 44-16.2 49-39.6l103.3-486.1c5.7-26.9-11.6-53.6-38.5-59.3l-355.1-75.5c-3.4-0.8-6.9-1.2-10.3-1.2z" fill="#3A3644" /><path d="M569.4 326.4l290.5 61.7c2.7 0.6 4.4 3.2 3.9 5.9l-4.8 22.4c-0.6 2.7-3.2 4.4-5.9 3.9l-290.5-61.7c-2.7-0.6-4.4-3.2-3.9-5.9l4.8-22.4c0.5-2.7 3.2-4.4 5.9-3.9z m264.9 189.7l11.5-53.9c0.6-2.7-1.2-5.4-3.9-5.9l-290.5-61.7c-2.7-0.6-5.4 1.2-5.9 3.9L534 452.3c-0.6 2.7 1.2 5.4 3.9 5.9l290.5 61.7c2.7 0.6 5.4-1.1 5.9-3.8z" fill="#3A3644" /><path d="M217.4 734c-11.8 0-22.1-8.3-24.5-19.8L89.5 228.1c-2.9-13.5 5.8-26.8 19.3-29.7L463.9 123c1.7-0.4 3.4-0.5 5.1-0.5 11.8 0 22.1 8.3 24.5 19.8l103.3 486.1c2.9 13.5-5.8 26.8-19.3 29.7l-355.1 75.5c-1.6 0.3-3.3 0.4-5 0.4z" fill="#D5DEE0" /><path d="M469 147.5s0.1 0 0.1 0.1l103.3 486s0 0.1-0.1 0.1L217.4 709s-0.1 0-0.1-0.1L114 223s0-0.1 0.1-0.1L469 147.5m0-50.1c-3.4 0-6.9 0.4-10.3 1.1L103.6 174c-26.9 5.7-44.2 32.4-38.5 59.3l103.3 486.1c5 23.4 25.9 39.6 49 39.6 3.4 0 6.9-0.4 10.3-1.1l355.1-75.5c26.9-5.7 44.2-32.4 38.5-59.3L518 137c-5-23.4-25.9-39.6-49-39.6z" fill="#3A3644" /><path d="M465 317.5l-290.5 61.7c-2.7 0.6-5.4-1.2-5.9-3.9l-8.3-39.1c-0.6-2.7 1.2-5.4 3.9-5.9l290.5-61.7c2.7-0.6 5.4 1.2 5.9 3.9l8.3 39.1c0.5 2.7-1.2 5.4-3.9 5.9z m25 93.3l-8.3-39.1c-0.6-2.7-3.2-4.4-5.9-3.9l-290.5 61.7c-2.7 0.6-4.4 3.2-3.9 5.9l8.3 39.1c0.6 2.7 3.2 4.4 5.9 3.9l290.5-61.7c2.7-0.6 4.4-3.2 3.9-5.9z" fill="#3A3644" /><path d="M272 759.3c-13.8 0-25-11.2-25-25v-620c0-13.8 11.2-25 25-25h480c13.8 0 25 11.2 25 25v620c0 13.8-11.2 25-25 25H272z" fill="#FFFFFF" /><path d="M751.9 114.3s0.1 0 0 0l0.1 619.9-0.1 0.1H272.1l-0.1-0.1V114.4l0.1-0.1h479.8m0.1-50H272c-27.5 0-50 22.5-50 50v620c0 27.5 22.5 50 50 50h480c27.5 0 50-22.5 50-50v-620c0-27.5-22.5-50-50-50z" fill="#3A3644" /><path d="M243 194.5h538v34.8H243z" fill="#3A3644" /><path d="M619 154.8m-25 0a25 25 0 1 0 50 0 25 25 0 1 0-50 0Z" fill="#92D976" /><path d="M690 154.8m-25 0a25 25 0 1 0 50 0 25 25 0 1 0-50 0Z" fill="#F44D5A" /><path d="M713.5 352.8h-403v-90h403v90z m-283 30h-120v307h120v-307z m283 0h-252v307h252v-307z" fill="#D8D7DA" /><path d="M272.1 702.3c0-0.1-0.1-0.1 0 0l-0.1-178h68.5c21 63.8 81.2 110 152 110s131-46.2 152-110H752v177.9l-0.1 0.1H272.1z" fill="#B8B7BC" /><path d="M144 934.8c-30.3 0-55-24.7-55-55v-220c0-30.3 24.7-55 55-55h245.3c11.8 62.5 66.8 110 132.7 110s120.9-47.5 132.7-110H880c30.3 0 55 24.7 55 55v220c0 30.3-24.7 55-55 55H144z" fill="#A5DAE4" /><path d="M880 629.8c7.9 0 15.4 3.1 21.1 8.9 5.7 5.7 8.9 13.2 8.9 21.1v220c0 7.9-3.1 15.4-8.9 21.1-5.7 5.7-13.2 8.9-21.1 8.9H144c-7.9 0-15.4-3.1-21.1-8.9-5.7-5.7-8.9-13.2-8.9-21.1v-220c0-7.9 3.1-15.4 8.9-21.1 5.7-5.7 13.2-8.9 21.1-8.9h226c21 63.8 81.2 110 152 110s131-46.2 152-110h206m0-50H632c0 60.8-49.2 110-110 110s-110-49.2-110-110H144c-44 0-80 36-80 80v220c0 44 36 80 80 80h736c44 0 80-36 80-80v-220c0-44-36-80-80-80z" fill="#3A3644" /><path d="M144 910.3c-4.9 0-9.7-1.3-13.8-3.5H745c71.7 0 130-58.3 130-130V630.3h5c16.3 0 30 13.7 30 30v220c0 16.3-13.7 30-30 30H144z" fill="#77C0D1" /><path d="M171.5 696.8h100v50h-100z" fill="#53757A" /></svg>
)

const navigateOutHandler = (link) => {
	return () => {
		window.open(link, '_blank');
	}
}

const Project = ({projectData, children}) => (
	<div className="project-container">
		<div className="project-inner-grid" onClick={navigateOutHandler(projectData.link)}>
			{/* <div className="header-container"> */}
				<div className="icon-container">
					{children}
				</div>
				{/* <div className="project-info-container"> */}
					{/* <div className="project-title-container"> */}
						{/* <ReactFitText compressor={0.6}> */}
							<span className="title">{projectData.name}</span>
						{/* </ReactFitText> */}
						<div className="arrow-container">
							<svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
						</div>
					{/* </div> */}
					<span className="tagline">
						{projectData.tagline}
					</span>
					<span className="technologies">
						{projectData.technologies}
					</span>
				{/* </div> */}
			{/* </div> */}
			<div className="description-container">
				<span className="description">
					{projectData.description}
				</span>
			</div>
		</div>
	</div>
)

Project.defaultProps = {
	projectData: {
		icon: null,
		name: "Example Project",
		tagline: "A short tagline for a project",
		technologies: "Javascript, HTML, CSS, etc",
		description: "This is a description of a project. In this project, I worked on lots of projects. Qui sit molestiae soluta et alias quia laboriosam dolor. Error quia repudiandae in id blanditiis. Quidem voluptatibus blanditiis in deleniti praesentium. Sint id eaque quia odio....",
	}
}

export default Project