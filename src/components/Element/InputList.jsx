import React, { useState } from "react";

const InputList = ({ label, inputMessage, data, handleChange, name }) => {


  return (
    <div className="inputList">
      <label>{label}</label>
      <select onClick={handleChange} name={name}className="select" >
        <option value="">{inputMessage}</option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
        
      </select>
    </div>
  );
};

export default InputList;
