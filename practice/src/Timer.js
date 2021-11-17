import React, { useEffect, useState } from "react";

//countDown Project:

const CountDown = () => {
    let [start , setStart] = useState("");

    useEffect(() =>{
        // let limit = new Date("July 27,2021 16:25:00").getTime();

        let finder = setInterval(() => {
            let limit = new Date("July 27,2021 15:38:00").getTime();
            let now = new Date().getTime()
            let difference = limit - now;
           

           let day = Math.floor(difference / (24*60*60*1000));
          
          let hrs = Math.floor((difference % (24*60*60*1000)) / (60*60*1000));
         
          let min = Math.floor((difference % (60*60*1000)) / (60*1000));
          
          let sec = Math.floor((difference % (60*1000)) / 1000);

          setStart(day + "d:" + hrs + "h:" + min + "m:" + sec + "sec");  
          if (difference < 0 ){
              clearInterval(finder);
              setStart("Its over");
          }       
            
        }, 1000);
    },[]);
    return(<div>
        <h2>The CountDown Time Satrt</h2>
        <p> Remaining Time :<b>{start}</b></p>
    </div>)
}
export default CountDown;
// method 1
// const Timer = () => {

//     let [time , setTime] = useState(new Date().toLocaleTimeString());
//     setInterval(() => {
//        setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return(<div>
//         <h2>Time Remaining: {time}</h2>
//     </div>)
// };
// export default Timer;


//method 2
// class Timer extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             time:this.convertDateToTime(new Date()),
//         }
//     }

//     componentDidMount() {
//         setInterval(this.updateTime,1000)
//     }

//     convertDateToTime(date) {
//         return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
//     };

//     updateTime = () => {
//        this.setState({
//            time: this.convertDateToTime(new Date())
//        })
//    };

   


//     render(){
//         return(<>
//          <h1>Time: {this.state.time}</h1>
//         </>)
//     }
// };
// export default Timer;