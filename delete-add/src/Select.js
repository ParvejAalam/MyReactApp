import React, { useState } from 'react';

const Select = () => {
    const [input , setInput] = useState("");
    const [item , setItem ] = useState([]);
    const [checkedItemList, setCheckedItemList] = useState([]);
    const [click , setClick] = useState(true)

    const storeInput = (e) =>{
        setInput(e.target.value);
    };
   
    const add = () =>{
        // setItem((oldValue) =>{  
        //     return [...oldValue , input];
        // });
        item.push(input)
        setItem([...item])
    };

    const handleChange = index => {
        //Selected List Approach
        if (checkedItemList.includes(index)) {
            checkedItemList.splice(checkedItemList.indexOf(index), 1)
        } else {
            checkedItemList.push(index)
        }
        setCheckedItemList([...checkedItemList])
    };
    
    // const selectAll = () => {
    //   item.forEach((item, index) => {
    //       if (!checkedItemList.includes(index)) {
    //         checkedItemList.push(index)
    //       }
    //   })
    //   setCheckedItemList([...checkedItemList])
    // };

    // const unSelect = () => {
    //     item.forEach((item , index) => {
    //         if(checkedItemList.includes(index)){
    //             checkedItemList.splice(checkedItemList.indexOf(index), 1) 
    //         }
    //     })
    //     setCheckedItemList([])
    // }
    const change = () => { 
        if(click === true){
            item.forEach((item, index) => {
                if (!checkedItemList.includes(index)) {
                  checkedItemList.push(index)
                }
            })
            setCheckedItemList([...checkedItemList])
            console.log("true")
        }else{
            setCheckedItemList([])
            console.log("false")
        }     
        setClick(!click);       
    }
    // // const isChecked = (index)=> {
    // //     return checkedItemList.includes(index)
    // }   
    return (
        <div>
            <input type = "text"
             value = {input}
             onChange = {storeInput}
             >
            </input>&nbsp;&nbsp;
            <span>
            <button onClick = {add}>Add</button>
            {/* <button onClick = {selectAll}>selectAll</button>&nbsp;&nbsp;
            <button onClick = {unSelect}>UnSelectAll</button> */}
            {/* <button onClick = {change}>{click ?"selectAll":"unSelectAll"}</button> */}
            <input type = "checkbox"  onChange = {change}/><span>Select All</span>
            <p>{checkedItemList.length} out of {item.length} Selected</p>
            </span>
            
            {item.map((item, index) =>{
                return <li key = {index}>
                    <input type ="checkbox"
                     checked={checkedItemList.includes(index)}
                     onChange = {() => handleChange(index)}/>
                     {item}
                </li>
            })}
        </div>
    );
};

export default Select;