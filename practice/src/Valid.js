import React ,{useState} from "react";

const Input = (props) => {
    const [inputValue, setInputValue] = useState( "");
  
    const handleChange = (e) => {
      props.setVal(e.target.value);
      // console.log(inputValue);
    };
  return (
    <div>
      <input
        type={props.type}
        value={props.val}
        name={props.val}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;