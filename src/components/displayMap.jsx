import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Map, GeoJSON, TileLayer } from "react-leaflet";
import countries from "../data/geo.json";
import "leaflet/dist/leaflet.css";
import * as actionCreators from "../actions/actions";

const DisplayMap = (props) => {
  const mapRef = useRef();

  const countryStyle = {
    fillColor: "#101820ff",
    fillOpacity: 0.5,
    color: "",
    weight: 1,
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.admin;
    layer.bindPopup(countryName);
  };

  const drawSelectedCountries = (countries) => {
    return function (feature) {
      switch (feature.properties.iso_a2) {
        case countries[0]:
        case countries[1]:
        case countries[2]:
          return countryStyle;
        default:
          return {
            fillOpacity: 0,
            color: "",
            weight: 0,
          };
      }
    };
  };

  const onMoveUpdateCoords = (event) => {
    let center = event.target.getCenter();
    let centerCoords = [center.lat, center.lng];
    props.updateMapCoords(centerCoords);
  };

  useEffect(() => {
    let map = mapRef.current.leafletElement;

    map.panTo([-props.globeCoords[1], -props.globeCoords[0]]);
  }, [props]);

  return (
    <Map
      ref={mapRef}
      center={[-props.globeCoords[1], -props.globeCoords[0]]}
      zoom={3}
      minZoom={2}
      maxZoom={7}
      className="bg-map-gray border-solid border-2 border-gray-600"
      worldCopyJump="true"
      style={{ height: 500, width: 500 }}
      ondrag={onMoveUpdateCoords}
    >
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}" />

      <GeoJSON
        style={drawSelectedCountries(props.countryIds)}
        data={countries.features}
        onEachFeature={onEachCountry}
      ></GeoJSON>
    </Map>
  );
};

const mapStateToProps = (state) => {
  return {
    countryIds: state.countryIds,
    countryPopularity: state.countryPopularity,
    globeCoords: state.globeCoords,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMapCoords: (coords) =>
      dispatch(actionCreators.updateMapCoords(coords)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMap);
