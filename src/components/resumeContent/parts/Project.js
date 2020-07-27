import React from "react";
import {resumeContent} from "../../../resumeContent";
import StarIcon from '@material-ui/icons/Star';

export default function Project() {
  return(
      <div>
        <div className="content-title margin-bottom-20px"><StarIcon /> Project</div>
        {renderProject()}
      </div>
  );

  function renderProject() {
    return resumeContent.projects.map(project => {
      return (
          <div>
            <b className="margin-left-20">{project.title}</b>
            <ul>
              {project.details.map(detail => <li>{detail}</li>)}
            </ul>
          </div>
      );
    });
  }
}