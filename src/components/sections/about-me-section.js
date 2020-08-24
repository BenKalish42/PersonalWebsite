import React from 'react'
import Img from 'gatsby-image'

import SectionLayout from './section-layout'
import AboutMeImage from '../about-me-image'



const ProjectsSection = () => (
	<SectionLayout sectionTitle="About Me">
		<div className="about-me-section-container">
			<div className="about-me-text-container">
				<span className="about-me-text">
					About Me blurb will go here, Vada. The following is just filler text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare nisi sed ultricies congue. Maecenas sed auctor ex. Vivamus pulvinar, diam a euismod posuere, lacus velit vestibulum orci, nec ultricies lectus lorem vitae nulla. Mauris sit amet luctus diam, in venenatis ex. Mauris dolor nibh, iaculis eu magna vitae, euismod aliquam massa. Praesent fermentum mauris mattis lacus ornare, et porttitor felis cursus. Mauris mattis augue eu neque porttitor luctus. Proin vitae lorem dolor. Praesent facilisis fringilla leo, non cursus metus hendrerit ultricies. Morbi vel elit nec nibh interdum ornare blandit et massa.
				</span>
			</div>
			<div className="about-me-photo-container">
				<AboutMeImage />
			</div>
		</div>
	</SectionLayout>
)

export default ProjectsSection
