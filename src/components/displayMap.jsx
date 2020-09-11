import Chart from "react-google-charts";
import React from "react";
import { connect } from "react-redux";
import "../custom.css";

const DisplayMap = (props) => {
  return (
    <div className="map">
      <Chart
        className="map-info"
        width={"1280px"}
        height={"820px"}
        chartType="GeoChart"
        data={[
          ["Country", "Popularity"],
          [props.countryIds[0], props.countryPopularity[0]],
          [props.countryIds[1], props.countryPopularity[1]],
          [props.countryIds[2], props.countryPopularity[2]],
        ]}
        options={{
          colorAxis: { colors: ["#1b964f", "#157a40"] },
          backgroundColor: "#42f5f2",
          datalessRegionColor: "#2ecc71",
        }}
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    countryIds: state.countryIds,
    countryPopularity: state.countryPopularity,
  };
};

export default connect(mapStateToProps)(DisplayMap);
