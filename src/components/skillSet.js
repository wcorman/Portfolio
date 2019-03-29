import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

class SkillSet extends Component {
  render() {
    const skillAreas = {
      languages: {
        style: "linear-gradient(to right bottom, #2163fc, #20d7fc)",
        title: "Languages:",
        skills: ["Javascript", "TypeScript","HTML", "CSS", "Python", "Ruby"]
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
              background: `${skillAreas.style}`
            }}
          />
        );
      }
      skills.unshift(
        <div key={i} style={{ fontSize: 20, marginBottom:5}}>
          {skillAreas.title}
        </div>
      );
      return skills;
    };
    return (
      <div>
        {renderSkills(skillAreas.frontEnd)}
        <hr />
        {renderSkills(skillAreas.backEnd)}
        <hr />
        {renderSkills(skillAreas.languages)}
        <hr />
        {renderSkills(skillAreas.deployment)}
      </div>
    );
  }
}

export default SkillSet;
