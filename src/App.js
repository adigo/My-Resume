import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ResumeHeader from "./components/ResumeHeader";
import ResumeContent from "./components/resumeContent/ResumeContent";

function App() {
  return (
      <Grid container justify="center">
        <Grid container item xs={4}>
          <ResumeHeader className="full-size"/>
        </Grid>
        <Grid container item xs={8}>
          <Paper className="full-size">
            <ResumeContent />
          </Paper>
        </Grid>
      </Grid>
  );
}

export default App;
