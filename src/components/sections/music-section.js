import React from 'react'

import SectionLayout from './section-layout'

const ProjectsSection = () => (
	<SectionLayout sectionTitle="Music">
		<div className="music-section-container">
			<div className="music-subsection-container">
				<span className="music-section-title">
					DJ Sets
				</span>
				<iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1113186403&color=%23273ed2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
			</div>
			<div className="music-subsection-container">
				<span className="music-section-title">
					Originals
				</span>
				<iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1113181945&color=%23db7002&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
			</div>
		</div>
	</SectionLayout>
)

export default ProjectsSection
