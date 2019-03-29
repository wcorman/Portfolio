import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/welcome";
import Timeline from "./components/timeLine";
import LinkLogos from "./components/linkLogos";
import SideBar from "./components/sideBar"

class App extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  componentDidMount() {
    setTimeout(function() {
      let timelineButton = document.getElementById("TimelineButton");
      timelineButton.classList.remove("fadeIn");
      timelineButton.classList.add("pulse");
      timelineButton.classList.add("infinite");
    }, 2875);
  }

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
    setTimeout(function () {
      let timelineButton = document.getElementById("TimelineButton");
      timelineButton.style.visibility = "hidden";
    }, 675);
  };

  render() {
    return (
      <div>
        <SideBar/>
        <Welcome button={this.fadeOutWelcome} />
        <Timeline />
      </div>
    );
  }
}

export default App;
