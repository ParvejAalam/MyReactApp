// import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function ComboBox() {
    const [input , setInput] = useState("")

    const handleOnChang = (event) => {
        let a  = event.target.value
        setInput(a);
        console.log(a)
    }

  return (
      <>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params}/>}
            onChange = {handleOnChang}
            // onChange = {(event, newValue) => {
            //     console.log("New value : " + newValue)
            //     setInput(newValue);
            // }}
            value = {input}
        />  
        {/* <input type = "text" onChange ={handleOnChang}/> */}
        <p> Your Selected value is : {input}</p>
      </>
  );
}


const options = [
    "The Shawshank Redemption",
    "Forrest Gump",
    "Inception",
    "hello world",
    "AMerica",
    "Football"
]
