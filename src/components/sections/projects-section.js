import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery } from "gatsby"

import SectionLayout from './section-layout'
import Project from '../project'

const projectData = {
	fadeDelay: {
		name: "Fade Delay",
		tagline: "Make your sounds echo into space",
		technologies: "C++, JUCE",
		description: "Fade Delay is a standard audio delay plugin built around a unique feature: The ability to decrease the stereo width of the echoes as they repeat. This is designed to create the perception that the listener and the source are moving further away from each other in space.....",
		link: "/fadedelay"
	},
	keyshift: {
		name: "Traktor Keyshift",
		tagline: "Shift the key of your entire DJ set with one button",
		technologies: "Max MSP, Javascript",
		description: "Keyshift is a Max MSP application for gradually and evenly shifting the pitch of multiple decks in Traktor in sync with the master tempo. This app acts as a robotic DJ assistant, turning 4 knobs simultaneously to pitch your whole set into a new key.",
		link: "https://github.com/BenKalish42/Keyshift"
	},
}

const ProjectsSection = () => {
	const data = useStaticQuery(graphql`
		query {
		    fadeIcon: file(relativePath: { eq: "fade-delay-icon.png" }) {
		    	childImageSharp {
		    		fluid(maxWidth: 72) {
		    			...GatsbyImageSharpFluid
		    		}
		    	}
		    }
		    keyshiftIcon: file(relativePath: { eq: "keyshift-icon.png" }) {
		    	childImageSharp {
		    		fluid(maxWidth: 72) {
		    			...GatsbyImageSharpFluid
		    		}
		    	}
		    }
		}
	`)

	return(
		<SectionLayout sectionTitle="Software">
			<div className="project-boxes-container">
				<Project projectData={projectData["fadeDelay"]}>
					<Image fluid={data.fadeIcon.childImageSharp.fluid} className="project-icon"/>
				</Project>
				<Project projectData={projectData["keyshift"]}>
					<Image fluid={data.keyshiftIcon.childImageSharp.fluid} className="project-icon"/>
				</Project>
			</div>
		</SectionLayout>
	)
}

export default ProjectsSection