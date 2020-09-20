import {
  UPDATE_GLOBE_COORDS,
  UPDATE_INFO,
  UPDATE_MAP_COORDS,
} from "../action-types/index";

let defaultState = {
  name: "",
  age: "",
  gender: "",
  countries: [],
  countryIds: [],
  namePopularity: [],
  globeCoords: [0, 0],
  mapCoords: [0, 0],
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_INFO: {
      return {
        ...state,
        name: action.name,
        countries: action.countries,
        age: action.age,
        gender: action.gender,
        countryIds: action.countryIds,
        namePopularity: action.namePopularity,
      };
    }
    case UPDATE_GLOBE_COORDS: {
      return {
        ...state,
        globeCoords: action.globeCoords,
      };
    }
    case UPDATE_MAP_COORDS: {
      return {
        ...state,
        mapCoords: action.mapCoords,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
