import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SkillsIcon from "@material-ui/icons/Grade";
import MailIcon from "@material-ui/icons/Mail";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import LinkedInLogo from "../images/linkedIn.png";
import GitHubLogo from "../images/githubLogo.png";
import ProfilePicture from "../images/portfolioProfile.png";
import CvLogo from "../images/cvLogo.png";
import Resume from "../images/resume.pdf";
import Typography from "@material-ui/core/Typography";

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

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <div style={{ textAlign: "center" }}>
          <img
            id="sidebarProfile"
            src={ProfilePicture}
            alt="profile"
            style={{ height: "125px", marginTop: 10 }}
          />
          <Typography component="p" align="center" variant="subtitle1">
            Wes Corman
          </Typography>
          <Divider variant="middle" />
          <Typography component="p" align="center" variant="subtitle2">
            Full Stack Developer
          </Typography>
        </div>
        <List>
          <ListItem
            button
            onClick={() => this.props.toggleDialog("skillList")}
          >
            <ListItemIcon>
              <SkillsIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
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
            <ListItemText primary="LinkedIn" style={{ paddingLeft: 10 }} />
          </ListItem>
          <ListItem
            button
            onClick={() => openLink(Resume)}
            style={{ paddingLeft: 11 }}
          >
            <ListItemIcon>
              <img style={{ height: 35 }} src={CvLogo} alt="Resume" />
            </ListItemIcon>
            <ListItemText primary="Resume" style={{ paddingLeft: 10 }} />
          </ListItem>
          <ListItem
            button
            onClick={() => openLink("https://github.com/wcorman")}
            style={{ paddingLeft: 15 }}
          >
            <ListItemIcon>
              <img style={{ height: 30 }} src={GitHubLogo} alt="GitHub" />
            </ListItemIcon>
            <ListItemText primary="GitHub" style={{ paddingLeft: 10 }} />
          </ListItem>

          <ListItem
            button
            onClick={() => openLink(`https://500px.com/wcorman`)}
          >
            <ListItemIcon>
              <CameraIcon />
            </ListItemIcon>
            <ListItemText primary="Photography" />
          </ListItem>
        </List>
        <Divider />
        <List>
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
        <Drawer
          open={this.props.drawerStatus}
          onClose={() => this.props.toggleDrawer()}
        >
          <div
            tabIndex={0}
            role="button"
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
