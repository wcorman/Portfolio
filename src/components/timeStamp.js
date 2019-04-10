import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Button } from '@material-ui/core';

class TimeStamp extends Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }));
	};

	render() {
		let link;
		let showMore;
		let skillList;

		this.props.link
			? (link = (
					<Tooltip title={this.props.linkCaption} placement="left-start" TransitionComponent={Zoom}>
						<IconButton aria-label="Link" href={this.props.link} target="_blank">
							<LinkIcon />
						</IconButton>
					</Tooltip>
				))
			: (link = null);

		this.props.skillList
			? (skillList = (
					<div style={{ marginTop: 15 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => this.props.toggleDialog('skillList')}
							style={{ background: 'linear-gradient(to right, #6091fa , #977aff)' }}
						>
							Dev Skills
						</Button>
					</div>
				))
			: (skillList = null);

		this.props.subtitle
			? (showMore = (
					<Tooltip title={this.props.showMoreCaption} placement="right-start" TransitionComponent={Zoom}>
						<IconButton
							onClick={this.handleExpandClick}
							aria-expanded={this.state.expanded}
							aria-label="Show more"
						>
							<ExpandMoreIcon />
						</IconButton>
					</Tooltip>
				))
			: (showMore = null);

		return (
			<Card id="card" raised={true} className="TimeStamp">
				<CardHeader
					avatar={<Avatar aria-label="details" src={this.props.image} />}
					action={
						<Tooltip title={this.props.iconCaption} placement="right-start" TransitionComponent={Zoom}>
							<IconButton>{this.props.icon}</IconButton>
						</Tooltip>
					}
					title={this.props.title}
					subheader={this.props.subheader}
				/>
				<CardContent style={{ paddingBottom: 8 }}>
					<Typography component="p" align="left">
						{this.props.description}
					</Typography>
					{skillList}
				</CardContent>
				<CardActions disableActionSpacing>
					{link}
					{showMore}
				</CardActions>
				<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
					<CardContent style={{ paddingTop: '0px' }}>
						<Typography variant="h6" gutterBottom>
							{this.props.subtitle}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p1}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p2}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p3}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p4}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p5}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p6}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p7}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p8}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p9}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p10}
						</Typography>
						<Typography paragraph align="left">
							{this.props.p11}
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		);
	}
}

export default TimeStamp;
