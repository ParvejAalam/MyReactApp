import React, { useState } from 'react';

const Table = () => {
    const [data , setData] = useState();
    let arr = Array.from(Array(10).keys())

    const find = () =>{
        let d = document.getElementById("number").value;
        setData(d)
    }
    return (
        <div>
           <input type = "text" id="number" placeholder = "type number"/>&nbsp;&nbsp;
           <button onClick = {find}>Find Table</button><br/>
           {arr.map((ele,ind) =>{
              return <li>
                 { (ele+1) * data}
              </li>
           })}
        </div>
    );
};

export default Table;