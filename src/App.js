import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker, 
  InfoWindow
} from "react-google-maps"; 

class App extends React.Component {



  componentDidMount(){

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          mapPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          markerPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

        })
      })
    }
  }

  render(){
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      >
        <Marker
          position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
        >
         <InfoWindow>
           <div>
             Hello
           </div>
           </InfoWindow> 
        </Marker>   
      </GoogleMap>
    ));

    return (
      <MapWithAMarker
       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBn8v6BCME_CmENiG2Sb84O0Dy2eA9VJX8&v=3.exp&libraries=geometry,drawing,places"
       loadingElement={<div style={{ height: `100%` }} />}
       containerElement={<div style={{ height: `700px` }} />}
       mapElement={<div style={{ height: `100%` }} />}
/>
      );
  }
  
}

export default App;
