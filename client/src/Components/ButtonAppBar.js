import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Outlet, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
  
export default function ButtonAppBar(props) {
    // const user = props.user

    return (
        <AppBar style={{ "background-color": "#0A0A0A"}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" 
                    component="div" sx={{ flexGrow: 1 }}>
                    Running Thoughts
                </Typography>
                <>
                <nav>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/UploadRun">Upload Run</Link>
                    </li>
                    </ul>
                </nav>

                <Outlet />
                </>
                {/* <Button color="inherit" onClick={props.setUser("When")}>Logout</Button> */}
            </Toolbar>
        </AppBar>
    );
}