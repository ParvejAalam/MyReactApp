import React, { useState  }  from 'react';

const StopWatch = () => {
    
    const [time , setTime] = useState("00:00:00");
    var total;
    const start = () => {
        let valH = document.getElementById("timeH").value;
        let valM = document.getElementById("timeM").value;
        let valS = document.getElementById("timeS").value;
        total = valH*3600 + valM*60 + valS*1;
        setInterval(() => {
           let hell =  total--;
           let hh = Math.floor(hell / 3600);
           let mm = Math.floor((hell % 3600) / 60)
           let ss = hell % 60;

           if(hh < 10 )
             hh = "0" + hh

             if(mm < 10 )
             mm = "0" + mm

             if(ss < 10 )
             ss = "0" + ss;

            let timer = hh + ":" + mm + ":" + ss;
           setTime(timer);
        //    console.log(timer)        
        },1000)
    };   
    return (
        <div>
            <input type = "number" id ="timeH" placeholder="hrs"/>
            <input type = "number" id ="timeM" placeholder="min" />
            <input type = "number" id ="timeS" placeholder="sec"/><br/>
            <p>{time}</p>
            <button onClick = {start}>Start</button>
        </div>
    );
}
export default StopWatch;

