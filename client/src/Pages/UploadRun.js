import React, { useState, useEffect  } from 'react';
import {
  Grid,
  TextField,
  Paper,
  Item,
  Button,
  Box,
  Container
} from '@material-ui/core';
import '../App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const UploadRun = (props) => {
  console.log(props);
  
  const formCss = {
    display: 'flex',alignItems: 'center',  justifyContent: 'center'
  }

    return (<>
      <Paper style={{margin:"25px", padding:"25px", backgroundColor:"#FAF9F6"}}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextField
              style={{ "font-size": "400px"}}
              id="runName"
              label="Title of Run"
              variant="standard"
              size='large'
              fullWidth 
              inputProps={{style: {fontSize: 40}}}
              // autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type of Run</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="typeOfRun"
                // value={}
                label="Type of Run"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Training Run</MenuItem>
                <MenuItem value={20}>Long Run</MenuItem>
                <MenuItem value={30}>Race</MenuItem>
                <MenuItem value={30}>Workout</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} >
            <TextField
                id="weather"
                label="Weather"
                // type="password"
                autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={8}  >
            <TextField
                id="date"
                label="Date"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="miles"
                label="Miles"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="time"
                label="Time"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="pace"
                label="Pace"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
                disabled
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="ahr"
                label="Average Heart Rate"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="beforeRating"
                label="Before Rating"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="afterRating"
                label="After Rating"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="sleep"
                label="Sleep"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={4}  >
            <TextField
                id="rhr"
                label="Resting Heart Rate"
                // type="password"
                // autoComplete="current-password"
                variant="filled"
              />
          </Grid>
          <Grid item xs={12}  >
          <TextField
            id="notes"
            label="Notes about your run"
            multiline
            variant='filled'
            rows={4}
          />
          </Grid>
          <Grid item xs={12}  style={{display: 'flex',alignItems: 'center',  justifyContent: 'center'}}>
            <Button variant="contained" size="large" style={{width: "180px", height: "60px"}}>
              Submit
            </Button>
          </Grid>
        </Grid>

      </Paper>
    </>);
};

export default UploadRun;
