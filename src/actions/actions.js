import requestApi from "../api/request";
import {
  UPDATE_INFO,
  UPDATE_MAP_COORDS,
  UPDATE_GLOBE_COORDS,
} from "../action-types/index";

export function loadNameInfo() {
  return (dispatch) => {
    try {
      requestApi().then((data) => {
        dispatch(updateInfo(data));
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const updateInfo = (data) => {
  return {
    type: UPDATE_INFO,
    ...data,
  };
};

export const updateGlobeCoords = (coords) => {
  return {
    type: UPDATE_GLOBE_COORDS,
    globeCoords: coords,
  };
};

export const updateMapCoords = (coords) => {
  return {
    type: UPDATE_MAP_COORDS,
    mapCoords: coords,
  };
};
