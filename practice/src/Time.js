import React, { useState } from 'react';

const Time = () => {
    let d = new Date();
    let [time , setTime] = useState("Time of the Day");

    setInterval(() =>{
        setTime(d.toLocaleTimeString());
    },10)
    return (
        <div>
            <h1>The Time of The Day is : {time}</h1>
        </div>
    );
};

export default Time;