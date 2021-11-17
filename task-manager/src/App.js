import React, { useState } from 'react';
import CompA from './CompA';
import CompB from './CompB';
export const CreatTask = React.createContext({

});

const App = () => {
  const taskCreater = () => {
    console.log("clicked")
    setWidth({width:"60%"});
    setWidth2({width:"40%"})
    setHide(false)
  };
  
  const createTask = (task) => {
    setCardView(true);
    setHide(true);
    setWidth({width:"100%"});

    setInput(() => {
      return [...input , task]
    });
  }

  const backBtn = () => {
    setWidth({width:"100%"});
    setHide(true);
  }

  const [width , setWidth] = useState({width:"100%"});
  const [hide , setHide] = useState(true);
  const [width2 , setWidth2] = useState({width:"100%"});
  const [input , setInput] = useState([]);
  const [cardView , setCardView] = useState(false);

  const data = {
    taskCreater:taskCreater,
    backBtn:backBtn,
    createTask:createTask,
    lable:width.width,
    looks:hide,
    cardView:cardView,
    lable2:width2.width,
    input:input,
  }
  return (
    <div style={{display: "flex"}}>
      <CreatTask.Provider value = {data}>
        <CompA/>
        {hide ? false:<CompB/>}
      </CreatTask.Provider>
    </div>
  );
};

export default App;