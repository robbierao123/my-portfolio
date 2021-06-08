import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './ProjectCard'
import myImg from '../img/contactProject.jpg'
import violinImg from '../img/violinImg.jpg'
import background from '../img/background.jpg'
import comingSoon from '../img/comingsoon.png'

const ProjectSection = () => {
  const useStyles = makeStyles( ({
    root: {
      flexGrow: 1,
      width:"100%",

  
    },
    
 
  }));

  const containerStyle = {
    position: 'relative',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '80vh',
    marginTop: '-20vh',
    
    
  }

  const ReactProjectContent = ' A React JS/NODE full stack application.'
  const ReactProjectContent2 = 'A HTML/CSS based project, with a shopping cart feature'
  const unknowProject = 'A new Project is Coming Soon！'

  const project1Title = 'Contact Manager'
  const project2Title = 'The Violin Store'
  const unknownProject = 'In Development'
  const violinSite = 'https://robbierao123.github.io/robbierao123-github.com/'
  const violinSourceCode = 'https://github.com/robbierao123/robbierao123-github.com'

  const ContactSite = 'https://dry-brushlands-72365.herokuapp.com/'
  const contactSourceCode = 'https://github.com/robbierao123/ContactManager'
   
   const classes = useStyles();
    return (
      <div id="project" style = {containerStyle}>
        <Grid container className={classes.root} style={{marginTop:"50px"}}>
        
       <Grid style ={{paddingTop:"20vh"}}container justify="center" spacing={2}>
     
      <ProjectCard img = {myImg} content={ReactProjectContent} title={project1Title} source={ContactSite} sourceCode={contactSourceCode}/>
      <ProjectCard img = {violinImg} content={ReactProjectContent2} title={project2Title} source={violinSite} sourceCode={ violinSourceCode }/>
      <ProjectCard img = {comingSoon} content={unknowProject} title={unknownProject}/>
      
      </Grid>
        </Grid>
        </div>
        
    )
}

export default ProjectSection
