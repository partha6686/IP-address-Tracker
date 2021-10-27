import React, { useEffect, useState } from "react";
import InfoData from "./InfoData";
import Loading from "./Loading";

function Info(props){
    const [fetchedData, setFetchedData] = useState({});
    const [loading, SetLoading] = useState(true);
    const [found,setFound] = useState(true);
    const fetchData = async ()=>{
        SetLoading(true);
        let URL;
        if(!props.ip){
            URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${props.apiKey}`;
        }else{
            URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${props.apiKey}&ipAddress=${props.ip}`;
        }
        let data = await fetch(URL);
        console.log(data.ok);
        if(data.ok){
            let parseData = await data.json();
            setFetchedData(parseData);
            SetLoading(false);
            props.setLocation([parseData.location.lat, parseData.location.lng]);
        }else{
            setFound(false);
            SetLoading(false);
        }
    }
    useEffect(() => {
        setFound(true);
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.ip]);
    if(loading){
        return <Loading />;
    }else if(!found){
        return <p style={{color: 'red',fontSize: '22px', paddingTop: '22px'}}>IP Address not found.</p>
    }else{
        return (
            <div className="info">
                <InfoData heading="IP ADDRESS" value={fetchedData.ip ? fetchedData.ip : "N/A"} />
                <InfoData heading="LOCATION" value={fetchedData.location.city && fetchedData.location.country ? `${fetchedData.location.city}, ${fetchedData.location.country}` : fetchedData.location.city ? fetchedData.location.city : "N/A"} />
                <InfoData heading="TIMEZONE" value={fetchedData.location.timezone ? "UTC " + fetchedData.location.timezone : "N/A"}/>
                <InfoData heading="ISP" value={fetchedData.isp ? fetchedData.isp : "N/A"} />
            </div>
        );
    }
    
}
export default Info;
// {!found && <p style={{color: 'red',fontSize: '22px'}}>IP Address not found.</p>}