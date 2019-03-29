import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import LinkedInLogo from "../images/linkedIn.png";
import GitHubLogo from "../images/githubLogo.png";
import CvLogo from "../images/cvLogo.png";
import Resume from "../images/resume.pdf";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

const openLink=(link) => {
  window.open(`${link}`, "_blank");
}

class SideBar extends Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });

  };
  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem
            button
            onClick={() =>
              openLink(`https://www.linkedin.com/in/wes-corman/`)
            }
            style={{ paddingLeft: 11 }}
          >
            <ListItemIcon>
              <img
                style={{ height: 35 }}
                src={LinkedInLogo}
                alt="LinkedIn"
              />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem
            button
            onClick={() => openLink(Resume)}
            style={{ paddingLeft: 11 }}
          >
            <ListItemIcon>
              <img style={{ height: 35 }} src={CvLogo} alt="Resume" />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem
            button
            onClick={() => openLink("https://github.com/wcorman")}
            style={{ paddingLeft: 15 }}
          >
            <ListItemIcon>
              <img style={{ height: 30 }} src={GitHubLogo} alt="GitHub" />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => openLink(`https://500px.com/wcorman`)}
          >
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Photography" />
          </ListItem>
          <ListItem
            button
            onClick={() => this.props.toggleDialog("skillList")}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem
            button
            onClick={() => this.props.toggleDialog("contactForm")}
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className="sideBar">
        <Button style={{height: 95}} onClick={this.toggleDrawer("left", true)}><MenuIcon/></Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
