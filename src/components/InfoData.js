import React from "react";

function InfoData(props) {
    return(
        <div className="info-data">
            <p>{props.heading}</p>
            <h2>{props.value}</h2>
        </div>
    );
}
export default InfoData;