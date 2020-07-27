import React from 'react';
import Experience from "./parts/Experience";
import Education from "./parts/Education";
import Project from "./parts/Project";
import SkillBars from "./parts/SkillBars";

export default function ResumeContent() {
  return (
      <div>
        <Experience />
        <Project />
        <Education />
        <SkillBars />
      </div>
  );
}