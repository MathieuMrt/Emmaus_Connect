import React, { useState } from "react";
import PropTypes from "prop-types";

function InputText({ type, name, placeholder ,handleChange , label}) {
  return(

    <div className="inputImage">
    <label>{label}</label>
    <input
  
       type={type}
       placeholder={placeholder}
       name={name} 
       onChange={handleChange} />
       </div>
  )
  }

export default InputText;