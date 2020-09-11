import { UPDATE_INFO } from "../action-types/index";

let defaultState = {
  name: "",
  countries: "",
  age: "",
  gender: "",
  countryIds: [],
  countryPopularity: [],
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_INFO: {
      return {
        name: action.name,
        countries: action.countries,
        age: action.age,
        gender: action.gender,
        countryIds: action.countryIds,
        countryPopularity: action.countryPopularity,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
