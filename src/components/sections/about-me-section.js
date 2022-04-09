import React from 'react'
import Img from 'gatsby-image'

import SectionLayout from './section-layout'
import AboutMeImage from '../about-me-image'



const ProjectsSection = () => (
	<SectionLayout sectionTitle="About Me">
		<div className="about-me-section-container">
			<div className="about-me-text-container">
				<span className="about-me-text">
					Hey. I’m Ben. I’m a software engineer and electronic music producer.  I value simplicity, ingenuity, and compassion. I enjoy writing efficient software that just works, and inventing tools for unique and specific use-cases. I’m passionate about light, clean web design, and creative, innovative software that helps musicians do what they love in new and exciting ways. When I’m not clicking and clacking, you can find me making music, doing yoga, studying Torah, or concocting one of my <i>world-renowned</i> cocktails or stews. 
				</span>
			</div>
			<div className="about-me-photo-container">
				<AboutMeImage />
			</div>
		</div>
	</SectionLayout>
)

export default ProjectsSection
