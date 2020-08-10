import React, {useState} from 'react';
import {resumeContent} from "../resumeContent";
import EmailIcon from '@material-ui/icons/Email';
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from '@material-ui/lab/Alert';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import './ResumeHeader.css';
import ReactGA from 'react-ga';

export default function ResumeHeader() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  return (
      <div className="resume-header background-color-purple">
        <h2>{resumeContent.name}</h2>
        <h4>{resumeContent.title}</h4>
        <h5>{resumeContent.location}</h5>
        <p>{resumeContent.selfIntroduction}</p>
        <div>
          <Button color="primary"
                  onClick={event => handleItemClicked(resumeContent.email)}
                  startIcon={<EmailIcon />}>
            {resumeContent.email}
          </Button>
        </div>
        <p><PhoneIcon />{resumeContent.phone}</p>
        <div>
          <Button color="primary"
                  onClick={event => openLink(`https://github.com/${resumeContent.githubUsername}`)}
                  startIcon={<GitHubIcon />}>
            {resumeContent.githubUsername}
          </Button>
        </div>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
          <Alert onClose={handleCloseSnackBar} variant="filled" severity="success">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
  );

  function handleItemClicked(content) {
    ReactGA.event({
      category: 'Action',
      action: 'Copy email'
    })
    navigator.clipboard.writeText(content)
        .then(() => {
          setOpenSnackbar(true);
          setSnackbarMessage(`Successfully copied "${content}" to clipboard!`);
        });
  }

  function openLink(link) {
    ReactGA.event({
      category: 'Action',
      action: 'Access Github',
    })
    window.open(link);
  }

  function handleCloseSnackBar() {
    setOpenSnackbar(false);
  }
}