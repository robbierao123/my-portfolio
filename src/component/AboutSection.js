import React, {Fragment} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import AboutTerminal from './AboutTerminal';
import SkillCard from './SkillCard';

import javascriptImg from '../img/javascript.png'
import htmlImg from '../img/html5.png'
import reactImg from '../img/react.png'
import cssImg from '../img/css.png'
import nodeImg from '../img/node.png'
import sqlImg from '../img/SQL.png'


// const useStyles = makeStyles({
//     root: {
//       flexGrow: 1,
//       width:'65%',
//       margin:'auto',
//       paddingTop:'10vh',
//       marginBottom:'10vh',
      
      
//     },
//     paper: {
//       padding: 2,
//       textAlign: 'center',
//       height:'10vh',
//       margin:'2em',
//       display:"flex",
//       flexDirection: "column",
//       justifyContent: 'center',
//       backgroundColor: '#fcf8ec',

 
     
//     },
//     paper2: {
//         padding: 2,
//         textAlign: 'center',
//         height:'50vh',
//         display:"flex",
//         flexDirection: "column",
//         justifyContent: 'center',
//         backgroundColor: '#fcf8ec',

    
//       },


//   });

const AboutSection = () => {


  


    return (
      <Fragment>
      <div className="AboutContainer"> 
      <h1 className="AboutHeader"> About me</h1>
       <div id="about" className="cardcontainer" >
  
      <AboutTerminal/>

   <div className="skillContainer">
    <h1 className="skillheading">skills</h1>
      <div className="skillcardwrap">

           <SkillCard img ={javascriptImg} name={"javascript"} />
           <SkillCard img ={htmlImg} name={"HTML"} />
           <SkillCard img ={cssImg} name={"CSS"}/>
           <SkillCard img ={nodeImg} name={"Node"} />
           <SkillCard img ={sqlImg} name={"SQL"} />
           <SkillCard img ={reactImg}  name={"React"}/>
  
      </div>
      
</div>
      </div>

</div>
      </Fragment>
    )
}

export default AboutSection
