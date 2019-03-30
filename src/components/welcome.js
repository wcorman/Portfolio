import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ProfilePic from "../images/portfolioProfile.png";

class Welcome extends Component {
  render() {
    return (
      <div id="Welcome" className="Welcome">
        <img
          id="profilePic"
          src={ProfilePic}
          alt="profile"
          width="250"
          style={{ width: "30%" }}
          className="Name animated fadeIn"
        />
        <h1 id="Name" className="Name animated flipInX">
          Hi, I'm Wes
        </h1>
        <h3
          id="Description"
          className="Description animated fadeIn"
          style={{ marginTop: 0, marginLeft: 10, marginRight: 10 }}
        >
          I'm a full stack developer with a passion for delivering clean, <br />{" "}
          beautiful user experiences.
        </h3>
        <Button
          id="TimelineButton"
          className="TimelineButton animated fadeIn"
          variant="contained"
          color="primary"
          onClick={this.props.button}
        >
          See my timeline
        </Button>
      </div>
    );
  }
}

export default Welcome;
