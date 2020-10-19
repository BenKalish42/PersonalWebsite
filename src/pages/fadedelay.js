import React from "react"
import Image from 'gatsby-image'
import { InlineMath, BlockMath } from 'react-katex';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/fade-delay.scss"
import 'katex/dist/katex.min.css';



const sections = [
	{title: "About", id: "about"},
	{title: "Controls", id: "controls"},
	{title: "Modes", id: "modes"},
	{title: "Styles", id: "styles"},
	{title: "Installation", id: "install"},
]

const FadeDelayPage = ({data}) => (
	<Layout sections={sections} particles="stars">
		<SEO title="Fade Delay" />
		<div className="main-page-outer">
			<div className="main-page-title">
				<span className="title-text">FADE DELAY</span>
			</div>
			<div className="main-page-subtitle">Make your sounds echo into space.</div>
			<div className="faded-image-container">
				<div className="fade" />
				<div className="animation-line one"/>
				<div className="animation-line two"/>
				<div className="animation-line three"/>
				<div className="animation-line four"/>
				<Image fluid={data.grid.childImageSharp.fluid} className="fluid-image-full"/>
			</div>
			<div className="main-content-container">
				<div className="main-section-container" id="about">
					<div className="main-section-title">About</div>
					<div className="main-section-content">
						<p>
							Fade Delay is a standard audio delay plugin built around a unique feature: The ability to decrease the stereo width of the echoes as they repeat. This is designed to create the perception that the listener and the source are moving further away from each other in space.
						</p>
						<Image fluid={data.window.childImageSharp.fluid} className="fluid-image-full"/>
						<div className="main-section-subtitle">What is a delay?</div>
						<p>
							In its technically simplest form, a delay effect records sound playing now, and plays it back a set amount of time later. 
						</p>
						<p>
							While this may seem elementary, the delay is the building block for many of the most common audio effects used today, such as the filter, EQ, chorus, flanger, and reverb. Most of these effects are created by using short, precise delay times, such that you don’t even notice a delayed signal at all. 
						</p>
						<p>
							In this case, though, we are using longer delay times such that the delayed signals sound like echoes of the original; most effects labelled “delay” or “echo” create this sort of echoing effect. 
						</p>
						<div className="main-section-subtitle">How Does Fade Delay Sound Different?</div>
						<p>
							Fade Delay can and does function as a normal delay when the Width Decay parameter is turned to 0. Turning the Width Decay knob up a bit is when things start to fade. 
						</p>
						<p>This is a stereo effect, so put your headphones on 🎧 to hear the difference.</p>

						<span className="example-label">• A wide shaker sound in Straight mode</span>
						<div className="example-container">
							<span className="example-sublabel">Normal Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630243%3Fsecret_token%3Ds-tfU39lxyVpH&color=%23aaaaaa&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
							<span className="example-sublabel">Fade Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630231%3Fsecret_token%3Ds-AVo4w9cypKK&color=%230032f2&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
						</div>

						<span className="example-label">• Guitar panned left, piano panned right in Straight mode</span>
						<div className="example-container">
							<span className="example-sublabel">Normal Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630222%3Fsecret_token%3Ds-1bqRMCp1lJX&color=%23aaaaaa&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
							<span className="example-sublabel">Fade Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630201%3Fsecret_token%3Ds-tZSEa9vbFm6&color=%230032f2&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
						</div>

						<span className="example-label">• Guitar panned left, flipping back and forth in Flip-Flop Mode</span>
						<div className="example-container">
							<span className="example-sublabel">Normal Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630162%3Fsecret_token%3Ds-Jds0Q59BpDg&color=%23aaaaaa&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
							<span className="example-sublabel">Fade Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630153%3Fsecret_token%3Ds-naLa7C0ga3W&color=%230032f2&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
						</div>

						<span className="example-label">• Guitar and Piano spinning around each other in Flip-Flop Mode</span>
						<div className="example-container">
							<span className="example-sublabel">Normal Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630183%3Fsecret_token%3Ds-6XdXmOIH7oG&color=%23aaaaaa&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
							<span className="example-sublabel">Fade Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630171%3Fsecret_token%3Ds-pVu3MeVRiQC&color=%230032f2&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
						</div>

						<span className="example-label">• A trancey pluck sound in Ping-Pong Mode</span>
						<div className="example-container">
							<span className="example-sublabel">Normal Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630138%3Fsecret_token%3Ds-V6VutDS7O4U&color=%23aaaaaa&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
							<span className="example-sublabel">Fade Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630123%3Fsecret_token%3Ds-E4gPiQHMrLu&color=%230032f2&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
						</div>

						<span className="example-label">• A trancey pluck sound playing multiple times in Ping-Pong Mode</span>
						<div className="example-container">
							<span className="example-sublabel">Normal Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630105%3Fsecret_token%3Ds-bj6LKf1a3hQ&color=%23aaaaaa&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
							<span className="example-sublabel">Fade Delay</span>
							<div className="example-audio-container">
								<iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/904630087%3Fsecret_token%3Ds-m6tCBLWLSZ4&color=%230032f2&inverse=true&auto_play=false&show_user=false"></iframe>
							</div>
						</div>

						<div className="main-section-subtitle">The Theory: Fading Through Narrowing</div>
						<p>
							Noisy things that are further away sound quieter than they would up close. This is intuitive; if we want to hear something better, we move closer to it. Even if we only had one ear, we could figure out how close we are to something based on how loud it is. But having two ears allows us to figure out another crucial piece of information about a sound: Location. 
						</p>
						<p>
							Imagine you have a wide stage with a full band of instrument players spread across it. You’re standing very close (front row — you’re a huge fan). You close your eyes, and it is very easy to tell where players are located. A guitar is loudly shredding in your left ear, so a guitarist must be on the far left of the stage. There’s thumping bass in your right ear, so the bassist must be standing on the right. The drums are equally loud and in your face, so they are probably directly in front of you. They are clearly separate sources of sound, standing far apart from each other. 
						</p>
						<Image fluid={data.graphicClose.childImageSharp.fluid} className="fluid-image" />
						<p>
							Your eardrums start to hurt, so you move to the back. It’s less loud, and you can still tell where all the band members are standing, but it’s less pronounced. The guitarist doesn’t sound as far left, nor the bassist as far right. You can see this visually too — The stage used to take up your entire field of view, but is now just in the center. 
						</p>
						<Image fluid={data.graphicFar.childImageSharp.fluid} className="fluid-image" />
						<p>
							You leave the show and head to the parking lot behind you. The stage is quite far away now, but you notice something else: It sounds like the band is coming from a singular spot behind you. It’s nearly impossible to tell that the musicians are standing spread out on a stage; If they were standing on top of each other, it would sound nearly the same from this distance.
						</p>
						<Image fluid={data.graphicFarthest.childImageSharp.fluid} className="fluid-image" />
						<p>
							This is how wide sound fades; it gets quieter and narrower as you move further away. 
						</p>
						<div className="main-section-subtitle">Proving It With Triangles</div>
						<p>
							This concept can also be proven mathematically with some concepts from trigonometry class. 
						</p>
						<p>
							We can model the relationship between the listener and the width of the stage as an isosceles triangle made of two adjacent right triangles. The distance along the “stage” from the middle sounds to the widest sounds is <InlineMath math="a"/>. The distance to sounds directly in the middle is the midline <InlineMath math="b"/> — the side those triangles share. The hypotenuse <InlineMath math="c"/> of each of those triangles represents the distance from the widest sound in each direction to the listener. Let’s represent the “wideness” of the widest sound using angle <InlineMath math="\theta"/> between the hypotenuse and the midline. Using the definition of the Tangent function, we can prove that increasing the distance <InlineMath math="b"/> between the listener and the sounds will result in a smaller angle <InlineMath math="\theta"/> and therefore a narrower overall sound:
						</p>
						<div className="adjacent-images-container">
							<BlockMath math="\tan{(\theta)} = \frac{a}{b} \Rightarrow \theta = \arctan{(\frac{a}{b})}"/>
							<Image fluid={data.graphicMath.childImageSharp.fluid} className="fluid-image" />
						</div>
						<p>
							If we assume the distance <InlineMath math="a"/> between the widest sound and the center sound on the “stage” is constant (the sound sources remain static in relation to each other), then we know the term <InlineMath math="\frac{a}{b}"/> will decrease as <InlineMath math="b"/> increases. Since <InlineMath math="\arctan"/> is a monotonically increasing function, as <InlineMath math="\frac{a}{b}"/> decreases, <InlineMath math="\theta"/> will also decrease. In other words, as the distance from the sound increases, the perceived width of the sound decreases. 
						</p>

					</div>
				</div>
				<div className="main-section-container" id="controls">
					<div className="main-section-title">Controls</div>
					<div className="main-section-content">
						<div className="main-section-subtitle">Delay Time</div>
						<p>
							How long the signal takes to play back, in intervals based on musical time. Beats are represented as quarter notes, so a delay time of ¼ will play back one beat later. 
						</p>
						<div className="main-section-subtitle">Feedback</div>
						<p>
							How much of the delayed signal is fed back into itself. More feedback means the delayed signal hangs around longer — 100% feedback means the signal will echo at the same volume indefinitely. Smaller values mean the delayed signal will decrease in volume with each echo until it fades out. 
						</p>
						<div className="main-section-subtitle">Width Decay</div>
						<p>
							How much narrower the signal gets with each repeat; this is the “Fade” in Fade Delay. At a value of 1, the first repeat is mono — as narrow as possible. Values below 0.40 will provide more of a natural fading effect, and higher values quickly squeeze sounds into the middle of the stereo spectrum. 
						</p>
						<div className="main-section-subtitle">Low Cut</div>
						<p>
							The lowest frequency that will be completely preserved in the echoes; frequencies below this setting will be progressively cut out. Technically a High-Pass Filter; frequencies higher than this value are allowed to pass through. 
						</p>
						<div className="main-section-subtitle">High Cut</div>
						<p>
							The highest frequency that will be completely preserved in the echoes; frequencies above this setting will be progressively cut out. Technically a Low-Pass Filter; frequencies lower than this value are allowed to pass through.
						</p>
						<div className="main-section-subtitle">Dry/Wet</div>
						<p>
							The amount of the delayed signal to be mixed into the input signal. 0% only lets through the input signal, 100% only lets through the delayed signal. At 50%, the first echo in the delayed signal will be the same volume as it was in the input signal.
						</p>
					</div>
				</div>
				<div className="main-section-container" id="modes">
					<div className="main-section-title">Modes</div>
					<div className="main-section-content">
						<div className="main-section-subtitle">Straight</div>
						<p>
							A standard stereo delay algorithm. A copy of the input signal is delayed and played back after the input signal. 
						</p>
						<div className="main-section-subtitle">Ping-Pong</div>
						<p>
							A standard ping pong delay algorithm. The left and right channels are summed together, delayed, and played back in the left speaker. After another delay, it plays back in the right speaker. This results in the signal “pinging and ponging” back and forth between both speakers. When combined with the Width Decay parameter, the pings and pongs get progressively closer together, as if the sound is bouncing off the walls down a hallway. 
						</p>
						<div className="main-section-subtitle">Flip-Flop</div>
						<p>
							A copy of the signal is delayed and played back after the input signal, but the channels are flipped: Left becomes Right, Right becomes Left. If there is feedback, the channels will flop back when the signal is delayed again. 
						</p>
					</div>
				</div>
				<div className="main-section-container" id="styles">
					<div className="main-section-title">Styles</div>
					<div className="main-section-content">
						<div className="main-section-subtitle">Even</div>
						<p>
							Narrows width by redistributing information between the left and right channels. Echoes will incrementally approach the mono version of the signal.
						</p>
						<div className="main-section-subtitle">Mids</div>
						<p>
							Narrows width by rebalancing the mid and side channels of the signal. Echoes will incrementally approach the mids channel in a standard mid/side processor.
						</p>
					</div>
				</div>
				<div className="main-section-container" id="install">
					<div className="main-section-title">Installation</div>
					<div className="main-section-content">
						<div className="main-section-subtitle">Installers</div>
						<p>
							v0.3.1:
						</p>
						<a className="installer-link" href="https://github.com/BenKalish42/FadeDelay/releases/download/v0.3.1/FadeDelay0.3.1.pkg" target="_blank">Download Installer for Mac OS (VST3, AU)</a>
						<div className="main-section-subtitle">Source</div>
						<p>
							This plugin was built in C++ atop the JUCE framework. The source code will be available for a limited time on GitHub. 
						</p>
						<a className="installer-link" href="https://github.com/BenKalish42/FadeDelay" target="_blank">View Code on GitHub</a>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default FadeDelayPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    grid: file(relativePath: { eq: "fade-delay-grid.png" }) {
       ...fluidImage
    }

    window: file(relativePath: { eq: "fade-delay-window.png" }) {
       ...fluidImage
    }

    graphicClose: file(relativePath: { eq: "fade-delay-fade-graphic-close.png" }) {
       ...fluidImage
    }

    graphicFar: file(relativePath: { eq: "fade-delay-fade-graphic-far.png" }) {
       ...fluidImage
    }

    graphicFarthest: file(relativePath: { eq: "fade-delay-fade-graphic-farthest.png" }) {
       ...fluidImage
    }

    graphicMath: file(relativePath: { eq: "fade-delay-math-graphic-1.png" }) {
       ...fluidImage
    }

  }
`









