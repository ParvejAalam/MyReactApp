import React from "react";
import moment from "moment";

function App() {
  const nextDay = () => {
    let date = new Date(document.getElementById("date").value);
    let startdate = date.toLocaleDateString();
    console.log(" The NExt Five Date are : ");
    for (var i = 1; i < 6; i++) {
      var new_date = moment(startdate, "MM/DD/YYYY");
      let xyz = new_date.add(i, "days").format("MM/DD/YYYY");
      console.log(xyz);
    }
  };

  const prevDay = () => {
    let date = new Date(document.getElementById("date").value);
    let startdate = date.toLocaleDateString();
    console.log(" The prev Five Date are : ");
    for (var i = 0; i < 5; i++) {
      var new_date = moment(startdate, "MM/DD/YYYY");
      let xyz = new_date.add(-i, "days").format("MM/DD/YYYY");
      console.log(xyz);
    }
  };
  return (
    <>
      <input type="date" id="date" />
      <button onClick={nextDay}>+</button>
      <button onClick={prevDay}>-</button>
    </>
  );
}

export default App;
