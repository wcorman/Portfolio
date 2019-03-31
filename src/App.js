import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome";
import Timeline from "./components/timeLine";
import SideBar from "./components/sideBar";
import Model from "./components/model";
import Header from "./components/header";

class App extends Component {
  state = {
    modelStatus: false,
    modelContent: null,
    drawerStatus: false,
  };

  componentDidMount() {
    setTimeout(function() {
      let timelineButton = document.getElementById("TimelineButton");
      timelineButton.classList.remove("fadeIn");
      timelineButton.classList.add("pulse");
      timelineButton.classList.add("infinite");
    }, 2875);
  }

  toggleModel = content => {
    this.setState({
      modelStatus: !this.state.modelStatus,
      modelContent: content
    });
  };

  toggleDrawer = () => {
    this.setState({
      drawerStatus: !this.state.drawerStatus
    });
  };

  fadeOutWelcome = () => {
    let name = document.getElementById("Name");
    let description = document.getElementById("Description");
    let timelineButton = document.getElementById("TimelineButton");
    let timeline = document.getElementById("Timeline");
    let welcomeBanner = document.getElementById("Welcome");
    let profilePic = document.getElementById("profilePic");
    profilePic.classList.add("animated");
    profilePic.classList.add("fadeOut");
    profilePic.style.animationDelay = "0.2s";
    profilePic.style.animationDuration = "0.7s";
    name.style.animationDelay = "0.1s";
    name.classList.add("flipOutX");
    description.classList.remove("Description");
    description.classList.add("flipOutX");
    timelineButton.classList.remove("TimelineButton");
    timelineButton.classList.remove("infinite");
    timelineButton.classList.remove("pulse");
    timelineButton.classList.add("flipOutX");
    welcomeBanner.style.zIndex = "-1";
    timeline.style.visibility = "visible";
    timeline.classList.add("animated");
    timeline.classList.add("fadeIn");
    setTimeout(function() {
      let timelineButton = document.getElementById("TimelineButton");
      timelineButton.style.visibility = "hidden";
    }, 675);
  };

  render() {
    return (
      <div>
        <Header toggleDrawer={this.toggleDrawer} />
        <SideBar
          toggleDialog={this.toggleModel}
          drawerStatus={this.state.drawerStatus}
          toggleDrawer={this.toggleDrawer}
        />
        <Model
          state={this.state.modelStatus}
          toggleDialog={this.toggleModel}
          content={this.state.modelContent}
        />
        <Welcome button={this.fadeOutWelcome} />
        <Timeline toggleDialog={this.toggleModel} />
      </div>
    );
  }
}

export default App;