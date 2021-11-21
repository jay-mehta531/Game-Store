import axios from "axios";

import { getDetailsURL, getScreenshotsURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });

  const detailData = await axios.get(getDetailsURL(id));
  const screenShotsData = await axios.get(getScreenshotsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenShots: screenShotsData.data,
    },
  });
};
