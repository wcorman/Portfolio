import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from "@material-ui/core/Chip";

export default class SkillList extends React.Component {

  handleClose = () => {
    this.props.toggleDialog();
  };
  render() {
    const skillAreas = {
      languages: {
        style: "linear-gradient(to right bottom, #2163fc, #20d7fc)",
        title: "Languages:",
        skills: ["Javascript", "TypeScript", "HTML", "CSS", "Python", "Ruby"]
      },
      frontEnd: {
        style: "linear-gradient(to right bottom, #fc4420, #fc9520)",
        title: "Front-End:",
        skills: ["React.js", "Redux", "Illustrator", "Photoshop", "SASS"]
      },
      backEnd: {
        style: "linear-gradient(to right bottom, #ba20fc, #fc20f1)",
        title: "Back-End:",
        skills: ["Node.js", "Express.js", "Rails", "PostgreSQL", "MySQL"]
      },
      deployment: {
        style: "linear-gradient(to right bottom, #29b234, #28b785)",
        title: "Deployment and Development Tools:",
        skills: ["Git", "GitHub/Bitbucket", "AWS", "Jira/Kanban", "Jenkins", "Grafana", "Papertrail"]
      }
    };

    const renderSkills = skillAreas => {
      let i;
      let skills = [];
      for (i = 0; i < skillAreas.skills.length; i++) {
        let label = skillAreas.skills[i];
        skills.push(
          <Chip
            key={i}
            className="skillChip"
            color="primary"
            label={label}
            style={{
              minWidth: 100,
              maxWidth: 130,
              background: `${skillAreas.style}`,
            }}
          />
        );
      }
      skills.unshift(
        <div key={i} style={{ fontSize: 20, marginBottom: 5 }}>
          {skillAreas.title}
        </div>
      );
      return skills;
    };
    return (
      <div>
        <DialogTitle id="form-dialog-title">Proficiencies</DialogTitle>
        <DialogContent>
          <DialogContentText>
            These are some of my development skills:
          </DialogContentText>
          <div
            style={{
              color: "#000000",
              marginTop: 25,
            }}
          >
            {renderSkills(skillAreas.frontEnd)}
            <hr />
            {renderSkills(skillAreas.backEnd)}
            <hr />
            {renderSkills(skillAreas.languages)}
            <hr />
            {renderSkills(skillAreas.deployment)}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </div>
    );
  }
}