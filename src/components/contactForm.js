import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";

class ContactForm extends Component {
  state = {
    subject: '',
    body: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSubmit = () => {
    window.open(`mailto:wcorman@gmail.com?subject=${this.state.subject}&body=${this.state.body}`);
  }

  render() {
    return (
      <div id="ContactForm">
        <form noValidate autoComplete="off" style={{ width: "100%" }}>
          <TextField
            style={{ width: "80%" }}
            id="standard-name"
            label="Subject"
            value={this.state.subject}
            onChange={this.handleChange("subject")}
            margin="normal"
          />
          <br />
          <TextField
            style={{ width: "80%" }}
            id="standard-multiline-flexible"
            label="Your message"
            multiline
            rows="3"
            rowsMax="4"
            value={this.state.body}
            onChange={this.handleChange("body")}
            margin="normal"
          />
          <br />
          <Button
            style={{ marginLeft: 15, backgroundColor: "#1F96F3" }}
            variant="contained"
            color="primary"
            onClick = {this.onSubmit}
          >
            Send
            <Icon style={{ marginLeft: 15, color: "white" }}>send</Icon>
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;