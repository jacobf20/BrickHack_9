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



const UploadRun = (props) => {

  const [date, setDate] = useState("")
  const [sleepTime, setSleepTime] = useState("")
  const [time, setTime] = useState("")
  const [inputField, setInputField] = useState({
    "Name": "",
    "Type": "",
    "Pace": {
      "Minutes": undefined,
      "Seconds": undefined,
    },
    "Weather": "",
    "Miles": undefined,
    "Time": {
      "Minutes": 0,
      "Seconds": 0
    },
    "AHR": undefined,
    "BeforeRating": undefined,
    "DuringRating": undefined,
    "Sleep": {
      "Hours": 0,
      "Minutes": 0,
    },
    "RHR": undefined,
    "Notes": "",
    "Date": {
      "Month": 0,
      "Day": 0,
      "Year": 0
    }
  })

  const inputsHandler = (e) =>{
    setInputField({...inputField, [e.target.id]: e.target.value} )
  }

  const submitButton = () =>{
    console.log("um what", inputField);
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
            <InputLabel id="demo-simple-select-label">Type of Run</InputLabel>
            <Select
              labelId="typeOfRunLabel"
              id="Type"
              label="Type of Run"
            >
              <MenuItem value={"Training Run"}>Training Run</MenuItem>
              <MenuItem value={"Long Run"}>Long Run</MenuItem>
              <MenuItem value={"Race"}>Race</MenuItem>
              <MenuItem value={"Workout"}>Workout</MenuItem>
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
        <Grid item xs={4}  >
          <TextField
              id="Pace"
              label="Pace"
              variant="filled"
              disabled
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
              id="During Rating"
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
            onClick={submitButton} 
            style={{width: "180px", height: "60px"}}>
            Submit
          </Button>
        </Grid>
      </Grid>

    </Paper>
  </>);
};

type Run = {
  "Name": String,
  "Type" ?: String,
  "Pace" ?: {
    "Minutes" ?: Number,
    "Seconds" ?: Number
  },
  "Weather" ?: String,
  "Miles" ?: Number,
  "Time" ?: {
    "Minutes" ?: Number,
    "Seconds" ?: Number
  },
  "AHR" ?: Number,
  "BeforeRating" ?: Number,
  "DuringRating" ?: Number,
  "Sleep" ?: {
    "Hours" ?: Number,
    "Minutes" ?: Number,
  },
  "RHR" ?: Number,
  "Notes" ?: String,
  "Date" ?: {
    "Month": Number,
    "Day": Number,
    "Year": Number
  }
}

export default UploadRun;
