import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

const AddingDiv = () => {
   const [data , setData] = useState([]);

    const addItem = () => {  
        let clr = document.getElementById("choose").value;
        let lbl = document.getElementById("lable").value; 
        
        setData((prev) => {
            return [ ...prev , {label: lbl, color: clr}]          
        });
    };
   return (
        <div>
            <input type ="text" id="choose" placeholder ="chooseColor" />&nbsp;&nbsp;
            <input type ="text" id="lable" placeholder ="ChooseLable"/><br/>
            <button onClick = {addItem} >Add</button>
            <ol>
                {data.map((item, i) =>{ 
                    return  <Grid item xs={3} key  = {i}
                         style = {{
                             backgroundColor:item.color, 
                             height:"180px",
                             display:"inline-block" ,
                             width:"200px", 
                             margin:"2px"                       
                             }}>
                            {item.label}
                        </Grid>                        
                })}
            </ol>
        </div>
    );
};
export default AddingDiv;