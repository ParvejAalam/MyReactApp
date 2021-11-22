import React from 'react';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

 
// Will work fine
const Input = (props) => {
  return(
  <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
    {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
  </InputMask>
);
  }
export default Input;