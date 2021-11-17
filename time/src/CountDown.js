import React, { useEffect, useState } from 'react';

const CountDown = () => {
    let [time , setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            let limit = new Date("July 28,2021 12:29:00").getTime();
            let now = new Date().getTime();

            let diff = limit-now;
            
            let day = Math.floor(diff / (24*60*60*1000));

            let hrs = Math.floor((diff % (24*60*60*1000)) / (60*60*1000));
            
            let min = Math.floor((diff % (60*60*1000)) / (60*1000));
          
            let sec = Math.floor((diff % (60*1000)) / 1000);

            setTime(day + "d" + hrs + "h" + min + "m" + sec + "s")

            if (diff < 0){
                setTime("over");
                clearInterval(setInterval)
            }
        },1000)
    },[])

    return (
        <div>
            <h1>The CountDown Time Start</h1>
            <p>{time}</p>
        </div>
    );
};

export default CountDown;