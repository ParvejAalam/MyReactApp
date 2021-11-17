import React, { useState } from 'react';
import ChildCounter from './ChildCounter';


export const UserCounter = React.createContext({
    // counterBtn: () => {},
    //kuch bhi ho sakta h;
    
})


const Counter = () => {

    const counterBtn = () => {
        console.log("inside btn")
        setCount(count+1)
    };

    const minus = () => {
        setCount(count-1)
    };
   
    const [count , setCount] = useState(0);
    const data = {      
        counter: counterBtn,
        minusCount:minus,
        lable:count,
    };
   // let counter = counterBtn;  // error occuring

    return (
        <div>
            <p>The counter is: {count}</p>
           <UserCounter.Provider value = {data}>
               <ChildCounter/>
           </UserCounter.Provider> 
        </div>
    );
};

export default Counter;