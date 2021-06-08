import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root:{
        maxWidth:234,
        margin:60,
    },
    media:{
        height:140,
    },
})

const tageStyle = {
    textDecoration: "none"
}

const ProjectCard = ({img,content,title,source,sourceCode}) => {
    const classes = useStyles();

    return (
      <Card className={classes.root}>
          <CardActionArea>
              <CardMedia component="img"
               className={classes.media}
              image={img} 
              title=""></CardMedia>
              <CardContent> 
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="text" color="textSecondary" component="p">
           {content}
          </Typography>
              </CardContent>
              <CardActions>
            <a href={sourceCode}>
        <Button variant="contained" size="small" color="primary">
          Source Code
        </Button>
        </a>

        <a style = {tageStyle} href={source}>
        <Button variant="contained" size="small" color="secondary">
          View Demo
        </Button>
        </a>
      </CardActions>
          </CardActionArea>
      </Card>
    )
}

export default ProjectCard
