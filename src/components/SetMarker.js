import { useMap, Marker } from 'react-leaflet';

const SetMarker = (props) => {
  const map = useMap();
  map.flyTo(props.location, 13,{
    duration: 2
  });

  return (
    <Marker position={props.location} icon={props.newMarker} />
  );
};

export default SetMarker;