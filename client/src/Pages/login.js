import React, { useState, useEffect  } from 'react';
import {
  Grid,
  TextField,
  Paper,
  Button
} from '@material-ui/core';
const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginValid, setLoginValid] = useState(false);
  
    useEffect(() => {
        setLoginValid(userName.length > 0 && password.length > 0)
    }, [userName, password])
    
    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const changeUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div style={{ border: "3rem solid"}}>
            <Paper>
                <Grid
                    container
                    spacing={8}
        //   p={2}
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
            <Button disabled={!loginValid} fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
