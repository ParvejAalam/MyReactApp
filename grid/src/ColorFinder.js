import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// let clr = document.getElementById("color").value;
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor:"green",
    height:"180px",
    width:"300px"
  },
  
}));

const ColorFinder = () => {
    const [data , setData] = useState(2);
    const [colorForDiv, setColorForDiv] = useState("#FF0000")
    const classes = useStyles();

    const check = () => {
        let clr = document.getElementById("color").value;
        let  lbl = document.getElementById("lable").value;
         setData(lbl )
        console.log();
        setColorForDiv(clr)
    };


  return (
      <>
    <input type="text" id="color" placeholder="color"/><br/>
    <input type="text" id="lable" placeholder="lable"/><br/>
    <button onClick = {check}>find</button>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} style={{backgroundColor: colorForDiv}}>
          {data}
        </Grid>
      </Grid>
    </div>
    </>
  );
}
export default ColorFinder;