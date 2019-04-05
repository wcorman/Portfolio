import React, { Component } from 'react';
import LinkedInLogo from '../images/linkedIn.png';
import CvLogo from '../images/cvLogo.png';
import Resume from '../images/resume.pdf';

class LinkLogos extends Component {
	render() {
		return (
			<div className="socialContainer">
				<a
					className="logoLinks animated fadeIn"
					href="https://www.linkedin.com/in/wes-corman/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="linkedInLogo" src={LinkedInLogo} alt="LinkedInLogo" />
				</a>
				<a className="logoLinks animated fadeIn" href={Resume} target="_blank" rel="noopener noreferrer">
					<img className="cvLogo" src={CvLogo} alt="resume" />
				</a>
			</div>
		);
	}
}

export default LinkLogos;
