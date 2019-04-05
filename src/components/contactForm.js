import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ContactForm extends React.Component {
	state = {
		subject: '',
		body: ''
	};

	handleChange = (name) => (event) => {
		this.setState({ [name]: event.target.value });
	};

	handleClose = () => {
		this.props.toggleDialog();
	};

	onSubmit = () => {
		window.open(`mailto:wcorman@gmail.com?subject=${this.state.subject}&body=${this.state.body}`);
		this.props.toggleDialog();
	};

	render() {
		return (
			<div>
				<DialogTitle id="form-dialog-title">Contact</DialogTitle>
				<DialogContent>
					<DialogContentText>Have a question or want to work together?</DialogContentText>
					<TextField
						margin="dense"
						id="subject"
						label="Subject"
						type="text"
						onChange={this.handleChange('subject')}
						fullWidth
					/>
					<TextField
						id="standard-multiline-flexible"
						label="Your message"
						multiline
						rows="3"
						rowsMax="4"
						onChange={this.handleChange('body')}
						type="text"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={this.onSubmit} color="primary">
						Send
					</Button>
				</DialogActions>
			</div>
		);
	}
}
