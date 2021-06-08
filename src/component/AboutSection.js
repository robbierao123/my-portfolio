import React, {Fragment} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      width:'65%',
      margin:'auto',
      paddingTop:'10vh',
      marginBottom:'10vh',
      
      
    },
    paper: {
      padding: 2,
      textAlign: 'center',
      height:'10vh',
      margin:'2em',
      display:"flex",
      flexDirection: "column",
      justifyContent: 'center',
      backgroundColor: '#fcf8ec',

 
     
    },
    paper2: {
        padding: 2,
        textAlign: 'center',
        height:'50vh',
        display:"flex",
        flexDirection: "column",
        justifyContent: 'center',
        backgroundColor: '#fcf8ec',

    
      },


  });

const AboutSection = () => {
    const classes = useStyles();

    return (
       <div id="about" style={{backgroundColor: '#fcf8ec', height:'100%'}}>
        <div className={classes.root}>
        <Grid className ={classes.skill} container spacing={3}   > 
          <Grid item xs={12} variant="outlined">
            <Paper className={classes.paper}><h1>About me</h1></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper2}>
          
                <Typography variant="h6" display="block" gutterBottom>
                My name is Robbie, I'm a Graduate in University Of Toronto/Computer Science background. I have
                a great passion for Web Development!.
                <br/>
                <br/>
                <br/>
                <PhoneAndroidIcon style={{ fontSize: 20 }}/> 416-525-5240
                <br/>
                <br/>
           
                <EmailIcon style={{ fontSize: 20 }} /> robbierao93@hotmail.com
                

                
      </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} justifyContent='center' >
          
            <Paper className={classes.paper2}>
             <h1>Skill Set</h1>
            <Button color="secondary">SQL</Button>
            <Button  color="primary">HTML</Button>
            <Button color="secondary">CSS</Button>
            <Button color="primary">JavaScript</Button>
            <Button  color="secondary">React </Button>
            <Button color="primary">Node</Button>
            
            </Paper>
          </Grid>
          <Grid item xs={12} variant="outlined">
            
          </Grid>

          <Grid item xs={6} justifyContent='center' >


          </Grid>
 
        </Grid>
      </div>
      </div>
    )
}

export default AboutSection
