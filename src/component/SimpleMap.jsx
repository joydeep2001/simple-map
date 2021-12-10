
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

render() {
  return (
    <div className="App">
      
      
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAc-H0Ymy_nJ0x2Pe9UCcChRAlkZ-KBVlY"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    </div>
  );
}
}

export default SimpleMap;