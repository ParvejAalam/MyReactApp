import React, { useState } from 'react';
import { CreatTask } from './App';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles((theme) => ({
  card1: {
    padding: 16,
    paddingTop: 0,
  },
  backBtn:{
    borderRadius: 8,
    background:"white",
    padding:"10px"
  },
  createBtn:{
    float: "right",
    margin: 24,
    borderRadius: 8,
    fontSize: 16,
    textTransform: 'none',
  },
  descri:{
    height:80,
    width:"100%",
    borderRadius:8,
    marginTop:"4px",
    padding:3,
  },
  title:{
    width:"100%",
    height:"32px",
    marginTop:"4px",
    borderRadius:8,
    padding:8,
  },
  date:{
    width:"100%",
    height:"30px",
    marginTop:"4px",
    borderRadius:8,
    padding:3,
  }
  }));

const CompB = () => {
  const [able , setAble] = useState(true);
  const [priority, setPriority] = useState("Low");

  const create = (providerValue) => {

    let data = {
      title:document.getElementById("title").value,
      description:document.getElementById("description").value,
      priority:priority,
      date:document.getElementById("date").value
    };
    providerValue.createTask(data)
  };

  const change = () => {
    console.log("onchange");
    setAble(false);
  };
   
  const classes = useStyles();
    return (
          <CreatTask.Consumer>
              {value => <div style = {{
                background: "white",
                height:"460px",
                width:value.lable2}}>
                <IconButton onClick={value.backBtn} className={classes.margin} >
                  <KeyboardBackspaceIcon/>
                </IconButton>
              <div className = {classes.card1}>
                  <p style = {{ margin:"0px",marginTop:"10px"}}>Title:</p>
                  <input type = "text"
                    id="title"
                    onChange={change}
                    className = {classes.title}/><br/>
                  <p style = {{ margin:"0px",marginTop:"15px"}}>Description:</p>
                  <textarea rows="4"
                    cols="50"
                    name="comment"                        
                    form="usrform"
                    id="description"
                    className = {classes.descri}>
                  </textarea>
                  <p style = {{ margin:"0px",marginTop:"15px"}}>Priority:</p>
                  <input type="radio"
                    name="priority"
                    value = "Low"
                    checked = {priority === "Low"}
                    onChange={() => setPriority("Low")}
                   />
                    <label for="low">Low</label>
                    <input type="radio"
                    name="priority"
                    value = "Medium"
                    checked = {priority === "Medium"}
                    onChange={() => setPriority("Medium")}
                  />
                    <label for="medium">Medium</label>
                    <input type="radio"
                    name="priority"
                    value = "High"
                    checked = {priority === "High"}
                    onChange={() => setPriority("High")}
                    />
                    <label for="high">High</label><br/>
                    <p style = {{ margin:"0px",marginTop:"15px"}}>Due Date:</p>
                    <input type = "date"
                    id="date"
                    className ={classes.date}
                    />
                  <Button
                    disabled={able}
                    onClick={() => create(value)}
                    variant="contained"
                    id = "Button"
                    className={classes.createBtn}
                    startIcon={<AddIcon/>}>
                    Create
                  </Button>
                  </div>
              </div>}
          </CreatTask.Consumer>
    );
};

export default CompB;