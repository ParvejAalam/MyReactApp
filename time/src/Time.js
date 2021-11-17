import React, { useState } from 'react';

const Time = () => {

    let [time , setTime] = useState("Time of the Day");

    setInterval(() =>{
        setTime(new Date().toLocaleTimeString());
    },1000)
    return (
        <div>
            <h1>The Time of The Day is : {time}</h1>
        </div>
    );
};

export default Time;

