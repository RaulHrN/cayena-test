import React from "react";

const CustomInput = ((props) =>{
    return(
        <div className={props.divClassName}>
              <p>{props.text}</p>
              <input
                type="text"
                placeholder={props.placeH}
                value={props.valueName} 
                onChange = {props.setOnChange}/>
        </div>
    )
});

export default CustomInput;