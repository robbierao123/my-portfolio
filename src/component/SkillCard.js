
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';




const SkillCard = ({img,name}) => {
    


    

    return (
      <div>
        <Tooltip title="Delete"  title={<h2>{name}</h2>}>
          <img src= {img} width="200px" height="200px"></img>
          </Tooltip>
      </div>
    )
}

export default SkillCard