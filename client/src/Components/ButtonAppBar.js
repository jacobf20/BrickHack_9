import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
  
export default function ButtonAppBar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar style={{ "background-color": "#0A0A0A"}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                <MenuIcon />
                </IconButton>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/UploadRun">Upload Run</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to="/runs">MyRuns</Link></MenuItem>
                </Menu>
                <Typography variant="h6" 
                    component="div" sx={{ flexGrow: 1 }}>
                    Running Thoughts
                </Typography>
            </Toolbar>
        </AppBar>
    );
}