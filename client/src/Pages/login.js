import React, { useState, useEffect  } from 'react';
import logo from '.././RunningThoughts.PNG';
import { createUser } from '../Services/userService';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@material-ui/core';
const Login = (props) => {
  console.log(props);
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loginValid, setLoginValid] = useState(false);
    const [createAccountValid, setCreateAccountValid] = useState(false);
    const [createAccountMode, setCreateAccountMode] = useState(false);
  
    useEffect(() => {
        setLoginValid(userName.length > 0 && password.length > 0)
    }, [userName, password])
    
    useEffect(() => {
      setCreateAccountValid(userName.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0)
    }, [userName, password, firstName, lastName])

    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const changeUsername = (event) => {
        setUsername(event.target.value);
    };

    const changeFirstName = (event) => {
      setFirstName(event.target.value);
    };

    const changeLastName = (event) => {
      setLastName(event.target.value);
    };

    return (
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ border: "3rem solid"}}>
          {!createAccountMode &&
            <Paper>
              <Grid
                  container
                  spacing={8}
                  direction={'column'}
                  justify={'center'}
                  alignItems={'center'}
              >
              <Grid item xs={12}>
                <TextField label="Username" onChange={changeUsername}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField 
                    label="Password" 
                    onChange={changePassword}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  disabled={!loginValid} 
                  fullWidth
                  onClick={() => props.setUser(userName)}> 
                  Login 
                </Button>
              </Grid>
            </Grid>
            <Button onClick={() => {setCreateAccountMode(!createAccountMode)}}>Create New Account</Button>
          </Paper>
        }
        {createAccountMode &&
            <Paper>
              <Grid
                  container
                  spacing={8}
                  direction={'column'}
                  justify={'center'}
                  alignItems={'center'}
              >
              <Grid item xs={12}>
                <TextField label="Username" onChange={changeUsername}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField 
                    value={password}
                    label="Password" 
                    type={'password'}
                    onChange={changePassword}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  onChange={changeFirstName}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  onChange={changeLastName}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  disabled={!createAccountValid} 
                  fullWidth
                  onClick={() => createUser({
                    "Username":userName,
                    "Password":password,
                    "FirstName":firstName,
                    "LastName":lastName
                  }).then(response => {
                    if (response == 400) {
                      alert("This username is already in use.")
                    }
                    else if (response == 200) {
                      props.setUser(userName);
                    }
                  })}> 
                  Create Account 
                </Button>
              </Grid>
            </Grid>
          </Paper>
        }
    </div>
    </header>
        
  );
};

export default Login;
