import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth:200,
  },
  media: {
        height: 120,
      },
      titleText:{
          fontSize:"18px",
          padding:"0px",
          color:"#262626",
          lineHeight: "1.0em",
          height: "2em",       /* height is 2x line-height, so two lines will display */
          overflow: "hidden",
      },
      descriptionText:{
        fontSize:"13px",
        lineHeight: "1.0em",
        height: "3em",       /* height is 2x line-height, so two lines will display */
        overflow: "hidden",
        color:"777777",
      },
      authorText:{
        whiteSpace: "nowrap",
        width: "inherit", 
        overflow: "hidden",
        textOverflow: "ellipsis", 
        lineHeight:"1em",
        fontSize:"11px",
        color:"#777777",
        padding: "0px 0px",  
      },
      dateText:{
        whiteSpace: "nowrap",
        width: "inherit", 
        overflow: "hidden",
        textOverflow: "ellipsis", 
        lineHeight:"1em",
        fontSize:"11px",
        color:"#777777",
        padding: "0px 0px",  
      },
});

const CardView = (props) => {
  const classes = useStyles();

  const convertDate = (date) => {
    
    
    return ;
  }

  // const converTitle = (line) => {
  //    let a = line.toUpperCase()
  //    return a;
  // }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image={props.resp.urlToImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className = {classes.titleText}>
             {/* {converTitle(props.resp.title)} */}
             {props.resp.title.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className = {classes.descriptionText}>
              {props.resp.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className = {classes.authorText}>
            { props.resp.author}
        </Button>
        <Button size="small" color="primary" className = {classes.dateText}>
          {convertDate(props.resp.publishedAt)}
        </Button>
      </CardActions>
    </Card>
  );
};
export default CardView;
