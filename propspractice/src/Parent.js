import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const  [parent , setParent] = useState(0);
    const [self , setSelf] = useState(0);
    const [give , setGive] = useState(0)

    const IncreaseChild = () =>{
        setParent(parent+1);
    };
    const increseSelf = () => {
        setSelf(self+1);
    };

    const parentUpdater = () => {
        setGive(give+1)
    }

    return (
        <div>            
            <h1>ParentComponent</h1>
            <button onClick = {IncreaseChild}>IncreaseChild</button><p>ChildValue = {give}</p>           
            <button  onClick = {increseSelf}>IncreaseSelf</button><p>SelfValue = {self}  </p>
            <h1>Child Component</h1>
            <Child res = {parent}            
             chager = {parentUpdater}/>        
        </div>
    );
};

export default Parent;