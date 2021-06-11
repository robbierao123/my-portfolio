import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink } from 'react-router-hash-link';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.03,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div id="home"className={classes.root}>
      <AppBar position="static" style={{background: '#00b0ff'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="blue" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="button" className={classes.title} >
         <HashLink style={{ textDecoration: 'none' }} smooth to= "/#home" >Home</HashLink>
          </Typography>
          <Typography variant="button" className={classes.title} >
          <HashLink style={{ textDecoration: 'none' }} smooth to= "/#about" >About</HashLink>
          </Typography>
          <Typography variant="button" className={classes.title} >
          <HashLink style={{ textDecoration: 'none' }} smooth to= "/#project">Project</HashLink>
          </Typography>
      
        </Toolbar>
      </AppBar>
    </div>
  );
}