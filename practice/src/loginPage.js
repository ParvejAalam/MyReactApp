import React, { useState } from "react";
import Input from "./Valid";

const LoginPage = () => {
  const [val , setVal ] = useState();
  console.log(val);
  return (
    <div>
      <Input
        type="text"
        val ={val}
        setVal = {setVal}   
      />
    </div>
  );
};
export default LoginPage;