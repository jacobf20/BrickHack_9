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
        return <Accordion key={index} style={{width: "100%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <p>Description: {item.notes}</p>
            <p>Weather: {item.weather}</p>
            <p>Miles: {item.miles}</p>

            {/* Time: {item.time} */}
            {/* Pace: {item.pace} */}
            <p>Average Heart Rate: {item.ahr}</p>
            <p>Before Rating: {item.beforeRating}</p>
            <p>After Rating: {item.afterRating}</p>
            {/* Sleep: {item.sleep} */}
            <p>rhr: {item.rhr}</p>
        </AccordionDetails>
      </Accordion>
      }) : <h1>No Runs Logged!</h1>}
    </>);
};

export default Runs;
