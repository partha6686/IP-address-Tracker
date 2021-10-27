import React from "react";
import Spinner from "../Spinner.gif";

const Loading = () => {
  return (
    <div>
      <img className="my-3" src={Spinner} alt="loading.." style={{paddingTop: '15px'}} />
    </div>
  );
}

export default Loading;
