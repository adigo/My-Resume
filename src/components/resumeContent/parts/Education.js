import React from "react";
import {resumeContent} from "../../../resumeContent";
import SchoolIcon from '@material-ui/icons/School';

export default function Education() {
  return(
      <div>
        <div className="content-title margin-bottom-20px"><SchoolIcon /> Education</div>
        {renderEducation()}
      </div>
  );

  function renderEducation() {
    return resumeContent.educations.map(education => {
      return (
          <div className="margin-left-20">
            <b>{education.major}</b>
            <div>{education.date}</div>
            <div className="grey">{education.school}</div>
          </div>
      );
    });
  }
}