import React from "react";
import { connect } from "react-redux";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import Flag from "react-world-flags";

const DisplayContent = (props) => {
  const drawAllResults = (props) => {
    if (props.countryIds[0]) {
      return (
        <div>
          {renderGenderIcon(props.gender)}
          <div className=" text-my-orange-100  h-12 flex justify-center items-center">
            <p className="text-2xl">Average age: {props.age}</p>
          </div>
          <div className="flex-col text-my-orange-100 mt-10 h-16 flex justify-center items-center">
            <p className="text-2xl">{props.countries[0]} </p>
            <Flag
              height="50"
              width="50"
              className="pb-1"
              code={props.countryIds[0]}
            />
            <p className="border-solid border-b-2 pb-4 border-my-orange-100">
              Name popularity: {props.namePopularity[0]}%
            </p>
          </div>
          <div className="flex-col text-my-orange-100 mt-10 h-16 flex justify-center items-center pt-3">
            <p className="text-2xl">{props.countries[1]}</p>
            <Flag
              height="50"
              width="50"
              className="pb-1"
              code={props.countryIds[1]}
            />
            <p className="border-solid border-b-2 pb-4 border-my-orange-100">
              Name popularity: {props.namePopularity[1]}%
            </p>
          </div>
          <div className="flex-col text-my-orange-100 mt-10 h-16 flex justify-center items-center pt-3">
            <p className="text-2xl">{props.countries[2]}</p>
            <Flag
              height="50"
              width="50"
              className="pb-1"
              code={props.countryIds[2]}
            />
            <p>Name popularity: {props.namePopularity[2]}%</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className=" text-my-orange-100 mt-10 h-12 flex justify-center items-center">
          <p className="text-2xl">No results found.</p>
        </div>
      );
    }
  };

  const renderGenderIcon = (gender) => {
    if (gender === "male") {
      return (
        <div className=" text-my-orange-100 mt-1 h-10 flex justify-center items-center">
          <IoMdMale className="w-10 h-10" />
        </div>
      );
    } else if (gender === "female") {
      return (
        <div className=" text-my-orange-100 mt-1 h-10 flex justify-center items-center">
          <IoMdFemale className="w-10 h-10" />
        </div>
      );
    }
  };

  if (props.name) {
    return (
      <div className="flex-col">
        <div className=" text-my-orange-100 mt-20 h-16 flex justify-center items-center">
          <p className="text-5xl">{props.name}</p>
        </div>
        {drawAllResults(props)}
      </div>
    );
  } else {
    return (
      <div className=" text-my-orange-100 mt-64 h-16 flex justify-center items-center text-center">
        <p className="text-4xl">
          Your results <br />
          will be shown here.
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    gender: state.gender,
    age: state.age,
    countries: state.countries,
    countryIds: state.countryIds,
    namePopularity: state.namePopularity,
  };
};

export default connect(mapStateToProps)(DisplayContent);
