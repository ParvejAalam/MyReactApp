import React, { useState } from 'react';

const StopWatch = () => {
    const [time , setTime] = useState("00:00:00");

    const start = () => {
        let hrs = document.getElementById("hour").value;
        let min = document.getElementById("minute").value;
        let sec = document.getElementById("second").value;
        let all = hrs*3600 + min * 60 + sec*1;
        // console.log(all);
        setInterval(() => {
             let total = all--;
             let hh = Math.floor((total / 3600));
             let mm = Math.floor((total % 3600) / 60);
             let ss = Math.floor(total % 60);
            //  console.log(hh + ":" + mm + ":" + ss);
             setTime(hh + ":" + mm + ":" + ss)
        } , 1000)
    }
    return (
        <div>
            <input type = "text" id="hour" placeholder ="HH"/>&nbsp;&nbsp;
            <input type = "text" id="minute" placeholder ="MM"/>&nbsp;&nbsp;
            <input type = "text" id="second" placeholder ="SS"/>&nbsp;&nbsp;
            <button onClick = {start}>Start</button><br/>
            <p>{time}</p>
        </div>
    );
};

export default StopWatch;