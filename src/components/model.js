import React from 'react';
import Model from '@material-ui/core/Dialog';
import ContactForm from './contactForm';
import SkillList from './skillList';

export default class Dialog extends React.Component {
	state = {
		content: this.props.content
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		let content;
		const renderContent = () => {
			switch (this.props.content) {
				case 'contactForm':
					content = <ContactForm toggleDialog={this.props.toggleDialog} />;
					break;
				case 'skillList':
					content = <SkillList toggleDialog={this.props.toggleDialog} />;
					break;
				default:
					content = null;
			}
			return content;
		};

		return (
			<div>
				<Model open={this.props.state} onClose={this.props.toggleDialog} aria-labelledby="form-dialog-title">
					{this.props.children}
					{renderContent()}
				</Model>
			</div>
		);
	}
}
