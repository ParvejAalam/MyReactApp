import React, { useState } from 'react';

const actualArray = [];

const SearchItem = () => {
    const [input , setInput] = useState("");
    const [item , setItem] = useState([]);
    const change = (e) => {
        setInput(e.target.value);
    }
    
    const finder = (e) => {
        console.log("input : " + e.target.value)
        // const update = store.filter((element,index)=>{
        //     return element === e.target.value;
        // })
        // setItem(update);
        console.log("Actual Array")
        console.log(actualArray)
        console.log("Item Array")
        console.log(item)
        const filteredData = []
        actualArray.forEach(element => {
            if (element.startsWith(e.target.value)) {
                console.log("inside if")
                filteredData.push(element)
            }
        })
        setItem(filteredData)
    }

    const listAdd = () =>{
        actualArray.push(input)
        setItem((old) => {
            return [...old , input]
        })
        setInput("")       
        console.log(actualArray)
    }
    
    return (
        <div>
            <input type ="text"
            value={input}
            onChange = {change}/>&nbsp;&nbsp;
            <button onClick = {listAdd}>Add</button><br/>
            <input type = "text" 
            onChange = { finder }/>
            
            {item.map((element , index) =>{
                return( 
                    <li key = {index}>
                        {element}
                    </li>
                )   
            })}
        </div>
    );
};

export default SearchItem;