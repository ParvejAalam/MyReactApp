import React, { useState } from 'react';

const KeyApproach = () => {
    const [input , setInput] = useState("");
    const [item , setItem ] = useState([]);
    const [key, setKey] = useState([0]);

    const storeInput = (e) =>{
        setInput(e.target.value);
    };
    let data
    const add = () =>{
        setItem((oldValue) =>{ 
        data = {label: input, isChecked: false , count:0} 
            return [...oldValue , data];
        });
       
    };
    const handleOnChange = (index) => { 
        // console.log("change") 
        const data = item[index]
        data.isChecked = !data.isChecked
        item[index] = data
        setItem([...item]);  
    }

    const getSelectedCheckBoxCount = () => {
        const checkedList = item.filter((data) => data.isChecked)
        
        return checkedList.length;
    }

    const getSelectedCheckBoxCountByLoop = () => {
        console.log("inside getSelectedCheckBoxCoutn")
        var count = 0;
        item.forEach(data => {
            if (data.isChecked) {
                count++
            }
        })
        return count;
    }

    return (
        <div>
            <input type = "text"
             value = {input}
             onChange = {storeInput}
             >
            </input>&nbsp;&nbsp;
            <span>
            <button onClick = {add}>Add</button>
            <p>{getSelectedCheckBoxCountByLoop()} out of {item.length} Selected</p>
            </span>
            
            {item.map((item, index) =>{
                return <li key = {index}>
                    <input type ="checkbox"
                     checked={item.isChecked}  
                     onChange = {() => handleOnChange(index)}/>
                     {item.label}
                </li>
            })}
        </div>
    );
};

export default KeyApproach;