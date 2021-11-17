import React, { useState } from 'react';

const ExpandCollaps = () => {
    const [input , setInput] = useState("");
    const [item , setItem] = useState([]);
    const [expand, setExpand] = useState([]);
    const [click , setClick] = useState(false);

    const inputChange = (element) => {
       setInput(element.target.value);
    };

    const addDiv = () => {
       setItem((prev) => {
           return [...prev , input]
       })
    };
      
    const divExpand = (index) => {
        console.log("inside selectedApproach");
        if (expand.includes(index)) {
            expand.splice(expand.indexOf(index), 1)
        } else {
            expand.push(index)
        };
        console.log(expand)
        setExpand([...expand])
        setClick(!click)
    };
    
    const isExpanded = (index) => {
        return expand.includes(index)
    };

    return (
        <div>
            <input type = "text"
            value = {input}
            placeholder = "type"
            onChange = {inputChange}/>
            <button onClick = {addDiv}>Add</button>
            {item.map((element , index) =>{
                return <div>
                    <div key = {index} style = {{
                    backgroundColor:"blueviolet", 
                    height:"50px",
                    width:"100%",
                    display:"block",
                    marginTop:"2px"                        
                    }}>
                        {element}
                    <button onClick = {() => divExpand(index)} style = {{float:"right" , margin:"10px"}}>
                       {isExpanded(index) ? "collaps"  : "expand"}
                    </button>
                    </div>
                    {isExpanded(index) && <div style = {{
                         backgroundColor:"black", 
                         height:"50px",                      
                         width:"100%", 
                    }}> it is hidden</div>}
                </div>
            })}
        </div>
    );
};
export default ExpandCollaps;