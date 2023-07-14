import {
  scriptFailure,
  scriptRequest,
  scriptSuccess,
} from "../slices/ScriptSlice";
import axios from "axios";

export const getResponse = (formData) => async (dispatch) => {
  try {
    dispatch(scriptRequest({ loading: true }));

    const response = await axios.post("/api/v1/script", {
      formData,
    });

    const responseData = {
      content: response.data,
      sender: "bot",
    };
    console.log(responseData);

    dispatch(scriptSuccess({ title: formData.title, data: responseData }));
  } catch (error) {
    console.error(error);
    dispatch(scriptFailure(error));
  }
};
