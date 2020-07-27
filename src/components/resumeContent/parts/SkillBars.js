import React from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {resumeContent} from "../../../resumeContent";
import Chip from "@material-ui/core/Chip";


export default function SkillBars() {
    return (
        <div>
          <div className="content-title margin-bottom-20px"><AttachFileIcon /> Skills</div>
          <div>
            {renderSkills()}
          </div>
        </div>
    );

    function renderSkills() {
      return resumeContent.skills.map(skill =>
          <Chip clickable
                size="small"
                label={skill}
                className="background-color-purple margin-left-20"/>)
    }
}
