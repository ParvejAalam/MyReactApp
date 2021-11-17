import React, { useState } from "react";

const AddProductForm = () => {
  const [inputValue, setInputValue] = useState({ name: "", price: "", asd:"", scd:"" });
  const { name, price, asd, scd } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(inputValue);
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(inputValue);
  };

  return (
     <form>
       <input
         type="text"
         value={name}
         placeholder="Product Name"
         label="Name"
         name="name"
         onChange={handleChange}
       />
       <input
         type="number"
         value={price}
         placeholder="Add Price"
         label="Price"
         name="price"
         onChange={handleChange}
       />
        <input
         type="text"
         value={asd}
         placeholder="Product Name"
         label="asd"
         name="asd"
         onChange={handleChange}
       />
        <input
         type="text"
         value={scd}
         placeholder="Product Name"
         label="scd"
         name="scd"
         onChange={handleChange}
       />
       <button color="primary">Add</button>
       <button color="secondary">Cancel</button>
     </form>
  );
};

export default AddProductForm;