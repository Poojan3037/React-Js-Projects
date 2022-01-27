import React from "react";
import { Map as LeafletMap, TileLayer, Circle, Popup } from "react-leaflet";
import "./Map.css";


const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 400,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 300,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 1600,
  },
};



const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap className="leafletmap" center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
          countries.map((item) => {
            console.log(item)
            console.log(item.countryInfo.flag)
            return (
              <>
                <Circle
                  center={[item.countryInfo.lat, item.countryInfo.long]}
                  color={casesTypeColors[casesType].hex}
                  fillColor={casesTypeColors[casesType].hex}
                  fillOpacity={0.4}
                  radius={
                    Math.sqrt(item[casesType]) * casesTypeColors[casesType].multiplier
                  }
                >
                  <Popup>
                    <div className="popup-container">
                      <div className="popup-flag" style={{ backgroundImage: `url(${item.countryInfo.flag})` }}>
                      </div>
                      <div className="popup-name">
                      {item.country}
                      </div>
                      <div className="popup-cases">
                        Total Cases : {item.cases}
                      </div>
                      <div className="popup-recovered">
                        Total Recovered : {item.recovered}
                      </div>
                      <div className="popup-deaths">
                        Total Deaths : {item.deaths}
                      </div>
                    </div>
                  </Popup>
                </Circle>
              </>
            )
          })
        }

      </LeafletMap>
    </div>
  );
}

export default Map;