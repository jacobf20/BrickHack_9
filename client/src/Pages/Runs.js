import React, { useState, useEffect  } from 'react';
import {

} from '@material-ui/core';
import '../App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getRuns } from '../Services/runService';




const Runs = (props) => {
  const [runs, setRuns] = useState()
  const user = props.user

  useEffect(() => { 
    console.log("user: ", user);
    getRuns(user).then((response) => {
      console.log("response: ", response);
      setRuns(response)
    })
  }, []);

    return (<>
      {runs?.length > 0 ? runs.map((item,index) => {

        const newTime = item.time.minutes + ":" + item.time.seconds
        const newPace = item.pace.minutes + ":" + item.time.seconds
        const newSleep = item.sleep.hours + ":" + item.sleep.minutes
        const newDate = item.date.month+"/"+item.date.day+"/"+item.date.year


        return <Accordion key={index} style={{width: "95%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div container justify="space-between">
          <Typography variant="h4">{item.name}</Typography>
          <Typography   inline variant="body1" align="left">{newDate}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
            <p>Description: {item.notes}</p>
            <p>Weather: {item.weather}</p>
            <p>Miles: {item.miles}</p>
            <p>Time: {newTime}</p>
            <p>Pace: {newPace}</p>
            <p>Average Heart Rate: {item.ahr}</p>
            <p>Before Rating: {item.beforeRating}</p>
            <p>After Rating: {item.afterRating}</p>
            <p>Sleep: {newSleep}</p>
            <p>Resting Heart Rate: {item.rhr}</p>
        </AccordionDetails>
      </Accordion>
      }) : <h1>No Runs Logged!</h1>}
    </>);
};

export default Runs;
