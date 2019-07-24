import React, { Component } from "react";
import MapGL, {Marker, Popup} from "react-map-gl";
import CityPin from './Map_Componenets/city_pin';
import CityInfo from './Map_Componenets/city-info';
import axios from "axios";

import "./CSS/App.css";
import "mapbox-gl/dist/mapbox-gl.css";

import CITIES from './cities.json'

require('dotenv').config();

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      chapter_data: [],
      popupInfo: null
    };
  }

  componentDidMount() {
    axios
      .get("https://miracle-messages-staging.herokuapp.com/api/chapter")
      .then(res => {
        console.log(res.data);
        this.setState({ chapter_data: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.latitude}
        latitude={city.longitude}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city})} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.latitude}
          latitude={popupInfo.longitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  render() {
    const { viewport } = this.state;

    return (
      <div className="App">
        <MapGL
          {...viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/miraclemessages/cjyhf6b851bii1cq6lr990cf1"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
        >
          {this.state.chapter_data.map(this._renderCityMarker)}

          {this._renderPopup()}
        </MapGL>
      </div>
    );
  }
}

export default App;
