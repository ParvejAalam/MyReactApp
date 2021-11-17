import React, { useState } from 'react';
import Parent from './Parent';

const Child = (props) => {

    const [child , setChild] = useState(0);

    const IncreaseSelfChild = () =>{
        setChild(child+1);
    };
     
   
    return (
        <div>
            <button onClick = {props.chager}>IncreaseParent</button>
            <p>ParentValue = {props.res}</p>           
            <button onClick = { IncreaseSelfChild}>IncreaseSelf</button><p>SelfValue ={child} </p>
            
        </div>
    );
};

export default Child;