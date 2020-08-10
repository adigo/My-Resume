import React, {useEffect} from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ResumeHeader from "./components/ResumeHeader";
import ResumeContent from "./components/resumeContent/ResumeContent";
import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    document.title = "Wang da li";
    ReactGA.initialize('UA-175012213-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
