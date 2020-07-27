import React from "react";
import WorkIcon from '@material-ui/icons/Work';
import '../ResumeContent.css';
import {resumeContent} from "../../../resumeContent";

export default function Experience() {
  return (
      <div>
        <div className="content-title margin-bottom-20px"><WorkIcon /> Experience</div>
        {renderExperiences()}
      </div>
  );

  function renderExperiences() {
    return resumeContent.experiences.map(experience => {
      return (
          <div>
            <b className="margin-left-20">{experience.title}</b>
            <div className="margin-left-20">{experience.company}</div>
            <div className="margin-left-20">{experience.date}</div>
            <ul>
              {experience.details.map(detail => {
                return (
                    <li className="grey">{detail}</li>
                );
              })}
            </ul>
          </div>
      );
    });
  }
}