import React, { useState } from 'react';

const OddEven = () => {

    let [num , setNum] = useState(2);

    const handleNumberChange = () => {
       setNum(document.getElementById("oddEven").value);
    }
    return (
        <div>
            <h2>Odd And Even Number</h2>
            <input type = "number" id = "oddEven" onChange = {handleNumberChange}/>
            {/* {(num %2 == 0) ? "Even" : "Odd"} */}
            {(num % num === 0 &&
                num % 1 === 0) ? "Prime" :"Not"}
        </div>
    );
};

export default OddEven;