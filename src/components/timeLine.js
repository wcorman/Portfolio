import React, { Component } from 'react';
import TimeStamp from './timeStamp';
import SkipLogo from '../images/skipLogo.png';
import SlackrLogo from '../images/slackrLogo.png';
import DrillNinjaLogo from '../images/drillNinja.png';
import CodeCoreLogo from '../images/codeCoreLogo.png';
import SrcLogo from '../images/srcLogo.png';
import StetLogo from '../images/stetLogo.png';
import SaskPolyLogo from '../images/saskPolyLogo.png';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

class Timeline extends Component {
	render() {
		let workIcon = <WorkIcon />;
		let schoolIcon = <SchoolIcon />;
		let personIcon = <PersonIcon />;
		let groupIcon = <GroupIcon />;
		return (
			<div id="Timeline" className="Timeline timeContainer">
				<div id="timeLineContainer">
					<div className="timeContainer">
						{/* <TimeStamp
							title="Looking for work"
							subheader="Currently looking for the next exciting project to contribute to."
							image={QMark}
							toolTip={true}
							showMoreCaption="Contact"
							icon={workOutlineIcon}
							iconCaption="Open for work"
							description="I'm a detail orientated Full Stack Developer with a passion for developing maintainable, clean code. You can see a list of my skills here:"
							skillList={true}
							toggleDialog={this.props.toggleDialog}
						/>  */}
						<TimeStamp
							title="Stet Solutions (Web Developer)"
							subheader="May 2019 - Present"
							image={StetLogo}
							icon={workIcon}
							link="https://www.stetsolutions.com/"
							linkCaption="View Company"
							showMoreCaption="More Info"
							iconCaption="Work"
							description="Currently working with a versitile team of developers, providing our clients with the tech solutions they need to expand their businesses."

						/>
						<TimeStamp
							title="Skip the Dishes (Apprentice Software Developer)"
							subheader="June - December 2018"
							image={SkipLogo}
							icon={workIcon}
							link="https://www.skipthedishes.com/"
							linkCaption="View Project"
							showMoreCaption="More Info"
							iconCaption="Work"
							description="Worked in a fast paced environment, 
          helping develop Canada's leading food delivery application. 
          Learned many of the best practices associated with a large scale project."
							subtitle="Duties Included:"
							p1="● Implementing Java 8 microservices in an onion architecture
              with MySQL databases."
							p2="● Unit testing domain logic with JUnit and Mockito frameworks."
							p3="● Implementing API web services that communicate with each
              other through REST calls or through RabbitMQ publish/subscribe
              event-based messaging."
							p4="● Refactoring code to introduce caching techniques with
              ElasticSearch and Memcached."
							p5="● Building metrics and graphs in Graphite to investigate and
              document performance gains."
							p6="● Creating web forms and views with Python and React."
							p7="● Delivering a test matrix to validate full test coverage of
              modifications."
						/>
						<TimeStamp
							title="Slackr (personal project)"
							subheader="2 months from idea to deployment"
							link="http://slackr.ca/"
							linkCaption="View Project"
							showMoreCaption="More Info"
							image={SlackrLogo}
							icon={personIcon}
							iconCaption="Personal Project"
							description="Slackr is a simple productivity/lifestyle app that gives users visual feedback about how their daily habits correlate with their mood.  
          This was my first solo project in the world of web development and really got me excited about creating responsive SPAs (Single Page Applications)."
							subtitle="Technologies used:"
							p1="● Client side: React.js, Chart.js"
							p2="● Backend: Ruby on Rails, PostgreSQL"
						/>
						<TimeStamp
							title="Drill Ninjaz (group project)"
							subheader="Developed over a hackathon-style weekend "
							link="https://github.com/wcorman/drill-ninjaz"
							linkCaption="View Project"
							showMoreCaption="More Info"
							image={DrillNinjaLogo}
							icon={groupIcon}
							iconCaption="Group Project"
							description="An educational platform designed to test user's coding skills, and keep track of your progress. Ninja masters (a.k.a. admin users) 
            have the ability of creating their own Drill Group, a group of coding questions with the same theme, that will test your 
            programming knowledge. The Drill Groups range in difficulty and are labelled with the appropriate tag [beginner, intermediate, or advanced]. 
            The more you code, the more you learn, and the more points you earn."
							subtitle="Contributions to project:"
							p1="● Account activation emailer"
							p2="● Password Reset Emailer"
							p3="● Created initial seeds"
							p4="● Added animation to the home page"
							p5="● Added User Authentication/Authorization"
						/>
						<TimeStamp
							title="CodeCore Web Development Bootcamp"
							subheader="Novovember 2017 - April 2018"
							link="https://codecore.ca/programs/bootcamp"
							linkCaption="Course Info"
							showMoreCaption="More Info"
							image={CodeCoreLogo}
							icon={schoolIcon}
							iconCaption="Education"
							description="CodeCore was an intensive web development bootcamp where I was taught the ropes of building a modern web application.  I owe this program and it's amazing instructors a lot as it really opened my mind to the possibilities of web development."
							subtitle="Technologies learned:"
							p1="● Git/Github"
							p2="● JavaScript"
							p3="● Node"
							p4="● Express"
							p5="● PostgreSQL"
							p6="● Ruby on Rails"
							p7="● React.js"
							p8="● Webpack"
						/>
						<TimeStamp
							title="Saskatchewan Research Council (Air Quality Technologist)"
							subheader="August 2016 - October 2017"
							link="https://www.src.sk.ca/services/air-quality-monitoring-services"
							linkCaption="More Info"
							showMoreCaption="More Info"
							image={SrcLogo}
							icon={workIcon}
							iconCaption="Work"
							description="Worked on industrial source emissions testing projects all across Saskatchewan in a team oriented environment."
							subtitle="Duties Included:"
							p1="● Industrial air emissions testing"
							p2="● Ambient air testing"
							p3="● Equipment maintnence"
							p4="● Data entry and writing test reports"
						/>
						<TimeStamp
							title="Environmental Engineering Technology (Sask. Poly Tech)"
							subheader="2013 - 2016"
							link="https://saskpolytech.ca/programs-and-courses/programs/Environmental-Engineering-Technology.aspx"
							linkCaption="More Info"
							showMoreCaption="More Info"
							image={SaskPolyLogo}
							icon={schoolIcon}
							iconCaption="Education"
							description="With a passion for the environment, I dove into a program focused largely on remediation and quality control/assurance (QA/QC)."
							subtitle="Curriculum:"
							p1="● Computer-aided design (CAD)"
							p2="● Technical report writing"
							p3="● Atmospheric quality and monitoring"
							p4="● Ecology, aquatic chemistry, hydrology and hydrogeology"
							p5="● Environmental site assessment and remediation"
							p6="● Soil analysis and classification"
							p7="● Solid and liquid waste management"
							p8="● Surveying and drafting"
							p9="● Environmental impact evaluation and mitigation"
							p10="● Environmental monitoring and control, and data collection and analysis"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Timeline;
