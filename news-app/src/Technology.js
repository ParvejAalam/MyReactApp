import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CardView from './CardView';
import axios from 'axios'

const Technology = () => {
   const [result , setResult] = useState([]);

   const getUsers = async () => {
    const users = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=ce7ccfe724f443069168856716d3b349');
    setResult(users.data.articles);
   };

    useEffect(() => {
        // getText("https://newsapi.org/v2/everything?q=technology&apiKey=ce7ccfe724f443069168856716d3b349");
        // async function getText(url){
        //     let obj = await fetch(url);
        //     let data = await obj.json();
        //     let d = data.articles;
        //     console.log(data)
        //     setResult(d);          
        // };
      //   axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=ce7ccfe724f443069168856716d3b349`)
      //   .then(res => {
      //     console.log(res)
      //     const persons = res.data;
      //     setResult(persons.articles)
      // })

      getUsers();

    },[]);
    return (
       <>
       <Grid>
          {result.map((element,i) => {
             return <Grid item xs={3} key = {i}
              style = {{
                  backgroundColor:"#CCE5FF",
                  margin:"2px",
                  display:"inline-block",
                  color:"red",
                  width:"23%",
                  height:"180px"
                  }}>
                    <CardView resp = {element}/>             
       </Grid>
         })}
       </Grid>
      </>
    );
};

export default Technology;