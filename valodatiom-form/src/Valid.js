import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      margin:20,
    },
    form:{
        width:"50%",
       padding:20,
       height:200,
    }
  }));
  

function Valid(props) {
    const classes = useStyles();
    
    const isValid = () => {
        console.log("clicked")
        let name = document.getElementById("name").value;
        if(name.length>4){
            console.log("error")
        }
    }
    return (
        <div className = {classes.root}>
            <form className={classes.form}>
                <input type = "text" id = "name" placeholder = "enter your name" /><br/>
                <input type = "email" id = "email" placeholder = "enter your email"/><br/>
                <input type = "password" id = "password" placeholder = "enter your password"/><br/>
                <input type = "tel" id = "tel" placeholder = "enter your mobileNumber"/><br/>
                <input type = "tel" id = "confirmTel" placeholder = "confirm your mobileNumber"/><br/>
                <Button onClick = {isValid} variant="contained" color="primary">
                      submit
                </Button>
            </form>
        </div>
    );
}

export default Valid;