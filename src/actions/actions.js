import axios from "axios";
import dataValidator from "./dataValidator";

export function loadName() {
  let input = document.getElementById("input-id").value;

  if (input) {
    let nationalize = "https://api.nationalize.io?name=" + input;
    let agify = "https://api.agify.io?name=" + input;
    let genderize = "https://api.genderize.io?name=" + input;

    let requestNationalize = axios.get(nationalize);
    let requestAgify = axios.get(agify);
    let requestGenderize = axios.get(genderize);

    return (dispatch) => {
      return axios
        .all([requestNationalize, requestAgify, requestGenderize])
        .then(
          axios.spread((...responses) => {
            const nationalizeData = responses[0];
            const agifyData = responses[1];
            const genderizeData = responses[2];

            dispatch(
              dataValidator(
                nationalizeData.data.name,
                nationalizeData.data.country,
                agifyData.data.age,
                genderizeData.data.gender
              )
            );
          })
        )
        .catch((error) => {
          console.log(error);
        });
    };
  } else {
    return (dispatch) => {
      dispatch(() => null);
    };
  }
}
