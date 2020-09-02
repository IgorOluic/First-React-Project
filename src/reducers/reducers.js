let defaultState = {
  name: "",
  countries: "",
  age: "",
  gender: "",
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEW_DATA": {
      return {
        name: action.name,
        countries: action.countries,
        age: action.age,
        gender: action.gender,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
