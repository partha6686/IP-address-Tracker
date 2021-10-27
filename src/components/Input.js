import React, { useState } from "react";
import Arrow from "../images/icon-arrow.svg"

function Input(props){
    const [value, setValue] = useState("");
    function handleChange(e){
        setValue(e.target.value);
    }
    function handleSubmit(){
        props.setIp(value);
    }
    return(
        <div>
            <input onChange={handleChange} type="text" name="IPAddress" value={value} placeholder="Search for any IP address" autoComplete="off" />
            <button onClick={handleSubmit}><img src={Arrow} alt="submit" /></button>
        </div>
    )
}

export default Input;