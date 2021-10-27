import React, {useState} from "react";
import Info from "./Info";
import Input from "./Input";
import Background from "../images/pattern-bg.png";
import Map from "./Map";

function App() {
  const apiKey=process.env.REACT_APP_API_KEY;
  const [ip, setIp] = useState("");
  const [location,setLocation] = useState();
  return (
    <div className="App">
      <img className="bg-img" src={Background} alt="bg-img"/>
      <div className="container">
        <h1>IP Address Tracker</h1>
        <Input setIp={setIp} />
        <Info ip={ip} setLocation={setLocation} apiKey={apiKey} />
        {location && <Map location={location} />}
      </div>
    </div>
  );
}

export default App;