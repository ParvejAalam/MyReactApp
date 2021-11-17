import React from 'react';
import { CreatTask } from './App';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 24,
    right: 24,
    borderRadius: 8,
    fontSize: 16,
    textTransform: 'none',
    color:"secondary"
  },
  button: {
    margin: theme.spacing(1),
    float:"right",
  },
  card1:{
    minWidth: 275,
    margin:16,
    padding:16,
  },
  priorityColor:{
    width: 10,
    height: 10,
    display: "inline-block",
    marginRight:2,
  }
}));

  const CompA = () => {
    const classes = useStyles();

    const getBoxColor = (priority) => {
        if (priority === "Low") {
          return "yellow"
        } else if (priority === "Medium") {
          return "green"
        } else {
          return "red"
        }
    }

    return (
        <CreatTask.Consumer>
          {value => 
          <div style = {{
            height:"460px",
            width:value.lable}}>
               
                {value.input.map((element , index) => {
                  return <Card className = {classes.card1}>
                   {element.title && <p> {element.title}</p>}
                   {element.description && <p> {element.description}</p>}
                    <div>
                      <div className = {classes.priorityColor}
                        style = {{backgroundColor:getBoxColor(element.priority)}}>
                      </div>
                      <div style = {{display: "inline"}}>
                        {element.priority}
                      </div>
                    </div>
                    {element.date && <p> {element.date}</p>}
                   </Card>
                })}
              
                {value.looks &&
                 <Button
                  onClick = {value.taskCreater}
                  variant="contained"
                  className={classes.root}
                  startIcon={<AddIcon />}>
                  Create Task
                 </Button>}
          </div>}
        </CreatTask.Consumer>
    );
  };

  export default CompA;