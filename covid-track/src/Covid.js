import React, { useEffect, useState } from 'react';

const Covid = () => {
    const [corona , setCorona] = useState([]);
     
    useEffect(() => {
        getText("https://api.covid19india.org/data.json");
        async function getText(url){
            let obj = await fetch(url);
            let data = await obj.json();
            console.log(data.statewise[0])
            setCorona(data.statewise[0])
        }
    } , [])
    return (
        <div>
           hello 
           {[corona].map((elem , index) => {
               return <li key = {index}>
                   <p>Confirm Case :{elem.confirmed}</p>
                   <p>Active Case Case :{elem.active}</p>
               </li>
           })}
        </div>
    );
};

export default Covid;