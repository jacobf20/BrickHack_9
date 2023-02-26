import React, { useState, useEffect  } from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@material-ui/core';
import '../App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addRun } from '../Services/runService';



const UploadRun = (props) => {

  const [date, setDate] = useState("")
  const [sleepTime, setSleepTime] = useState("")
  const [time, setTime] = useState("")
  const [type, setType] = useState("");
  const [pace, setPace] = useState(undefined)
  const [user, setUser] = useState(props.user);

  const getDefaultInputFields = () => {
    return {
      "Username": user,
      "Name": "",
      "Type": "",
      "Pace": {
        "Minutes": "",
        "Seconds": "",
      },
      "Weather": "",
      "Miles": "",
      "Time": {
        "Minutes": 0,
        "Seconds": 0
      },
      "AHR": "",
      "BeforeRating": "",
      "DuringRating": "",
      "Sleep": {
        "Hours": 0,
        "Minutes": 0,
      },
      "RHR": "",
      "Notes": "",
      "Date": {
        "Month": 0,
        "Day": 0,
        "Year": 0
      }
    };
  }

  const [inputField, setInputField] = useState(getDefaultInputFields())

  const clearInputFields = () => {
    setInputField(getDefaultInputFields());
  }

  useEffect(() => {
    console.log(time?.length);
    console.log(inputField?.Miles?.length);
    if (time?.length === 5 && inputField?.Miles?.length > 0){
      const miles = inputField?.Miles
      const  timeSplit = time.split(":")
      const  minute = timeSplit[0]
      const  sec = timeSplit[1]
      const minutesInSeconds = minute * 60;
      const totalSeconds = minutesInSeconds + Number(sec);
      const milesPerSec = totalSeconds / miles;
      const milesPerMin = milesPerSec / 60;
      const minuteResult = Math.floor(milesPerMin);
      const secondResult = ((milesPerMin - minuteResult) * 60).toFixed(0);
      const result = minuteResult + ":" + secondResult;
      setPace(result);
      let paceResult = {"Minutes": minuteResult, "Seconds": secondResult};
      setInputField({...inputField, "Pace": paceResult} )
    } 
}, [time, inputField.Miles])

  const inputsHandler = (e) =>{
    setInputField({...inputField, [e.target.id]: e.target.value} )
  }

  const submitButton = () =>{
    console.log("um what", inputField);
  }

  const handleTypeChange = (e) => {
    setType(e.target.value);
    setInputField({...inputField, "Type": e.target.value});
  }

  const parseTime = (e) =>{
    setTime(e.target.value)
    let yaga = e.target.value.split(":")
    let newTime = {"Minutes": Number(yaga[0]), "Seconds": Number(yaga[1])}
    setInputField( {
      ...inputField, 
      "Time": newTime })
  }

  const parseSleepTime = (e) =>{
    setSleepTime(e.target.value)
    let yaga = e.target.value.split(":")
    let newSleepTime = {"Hours": yaga[0], "Minutes": yaga[1]}
    setInputField( {
      ...inputField, 
      "Sleep": newSleepTime })  }

  const parseDate = (e) =>{
    setDate(e.target.value)
    let yaga = e.target.value.split("/")
    let newDate = {"Month": yaga[0], "Day": yaga[1], "Year": yaga[2]}
    setInputField( {
      ...inputField, 
      "Date": newDate })  }


  return (<>
    <Paper style={{"border-style": "solid", margin:"25px", padding:"25px", backgroundColor:"#FAF9F6"}}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            style={{ "font-size": "400px"}}
            id="Name"
            label="Title of Run"
            variant="standard"
            size='large'
            fullWidth 
            inputProps={{style: {fontSize: 40}}}
            onChange={inputsHandler} 
            value={inputField.Name}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="typeOfRunLabel">Type of Run</InputLabel>
            <Select
              
              labelId="typeOfRunLabel"
              id="Type"
              value={type}
              onChange={handleTypeChange}
              label="Type of Run"
            >
              <MenuItem sx={{ m: 2 }} value={"Training"}>Training</MenuItem>
              <MenuItem sx={{ m: 2 }} value={"Long Run"}>Long Run</MenuItem>
              <MenuItem sx={{ m: 2 }} value={"Race"}>Race</MenuItem>
              <MenuItem sx={{ m: 2 }} value={"Workout"}>Workout</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4} >
          <TextField
              id="Weather"
              label="Weather"
              autoComplete="current-password"
              variant="filled"
              onChange={inputsHandler} 
              value={inputField.Weather}
            />
        </Grid>
        <Grid item xs={8}  >
          <TextField
              id="date"
              label="Date (MM/DD/YYYY)"
              variant="filled"
              value={date}
              onChange={parseDate}
            />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="Miles"
              label="Miles"
              variant="filled"
              onChange={inputsHandler} 
              value={inputField.Miles}
            />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="Time"
              label="Time (MM:SS)"
              variant="filled"
              value={time}
              onChange={parseTime}
            />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-number"
            label="Pace per mile"
            type="string"
            disabled
            value={pace}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="AHR"
              label="Average Heart Rate"
              variant="filled"
              onChange={inputsHandler} 
              value={inputField.AHR}
            />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="BeforeRating"
              label="Before Rating"
              variant="filled"
              onChange={inputsHandler} 
              value={inputField.BeforeRating}
            />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="DuringRating"
              label="During Rating"
              variant="filled"
              onChange={inputsHandler} 
              value={inputField.DuringRating}
            />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="Sleep"
              label="Sleep HH:MM"
              variant="filled"
              value={sleepTime}
              onChange={parseSleepTime}
            />
        </Grid>
        <Grid item xs={4}  >
          <TextField
              id="RHR"
              label="Resting Heart Rate"
              variant="filled"
              onChange={inputsHandler} 
              value={inputField.RHR}
            />
        </Grid>
        <Grid item xs={12}  >
        <TextField
          id="Notes"
          label="Notes about your run"
          multiline
          variant='filled'
          onChange={inputsHandler} 
          value={inputField.Notes}
          rows={4}
        />
        </Grid>
        <Grid item xs={12}  style={{display: 'flex',alignItems: 'center',  justifyContent: 'center'}}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => addRun(inputField, props.user).then(response => {
              if (response == 200) {
                alert("Run successfully added!");
                clearInputFields();
                setDate(""); setSleepTime(""); setTime(""); setType(""); setPace("");
              }
            }
            )} 
            style={{width: "180px", height: "60px"}}>
            Submit
          </Button>
        </Grid>
      </Grid>

    </Paper>
  </>);
};

export default UploadRun;
