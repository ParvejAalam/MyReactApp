import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

  const inputOnchange = (e) => {
    setInputValue(e.target.value);
  };
  const storeItem = () => {
    if (inputValue !== "") {
      item.push(inputValue);
      setItem([...item]);
      setInputValue("");
    }
  };
  
  const clearItem = () => {
    item.pop(inputValue);
    setItem([...item])
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={inputOnchange} />
      <button onClick={storeItem}>Show</button>
      <button onClick={clearItem}>clear</button>
      {item.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </div>
  );
};

export default App;
